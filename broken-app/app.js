const express = require('express');
const app = express();

const axios = require('axios');
const ExpressError = require('./expressError');

app.use(express.json());

app.post('/', function(req, res) {
  if (!req.body.developers) throw new ExpressError('Developer username required', 400);
    const devInfo = req.body.developers.map(async (dev) => {
      try {
      const res = await axios.get(`https://api.github.com/users/${dev}`);
      if (res.status !== 404) {
        return {
          bio : res.data.bio,
          name: res.data.name,
        };
    }
  } catch {
    return {message: "There is no such user!"};
  }
});
  Promise.all(devInfo).then((data) => {
    return res.status(200).json(data);
  })
});


// 404 handler
app.use(function (req, res, next) {
  const notFoundError = new ExpressError("Not Found", 404);
  return next(notFoundError)
});

// generic error handler
app.use((err, req, res, next) => {
  let status = err.status || 500;
  let message = err.message;
// set the status and alert the user
  return res.status(status).json({
    error: {message, status}
  });
});

// end generic handler
app.listen(3000, function (err) {
  if (err) {
    console.log(`Error starting server: ${err}`);
  } else {
    console.log(`Server starting on port 3000`);
  }
});
