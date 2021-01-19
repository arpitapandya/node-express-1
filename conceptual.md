### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  JavaScript provides three methods of handling asynchronous code: callbacks, which allow you to provide functions to call once the asynchronous method has finished running; promises, which allows to chain methods together; and async/await keywords.

- What is a Promise?
  A Promise is JavaScript are objects. A Promise can be in one of three states:
  .Pending - it doesn't yet have a value.
  .Resolved - it has successfully obtained a value.
  .Rejected - it failed to obtain a value from some reason.

- What are the differences between an async function and a regular function?

- What is the difference between Node.js and Express.js?
  .Node.js is a platform for building the i/o applications which are server-side event-driven and made using JavaScript.
  .Express.js is a framework based on Node.js for which is used for building web-application using approaches and principles of Node.js.event-driven.

- What is the error-first callback pattern?
  The error-first pattern consists of executing a function when the asynchronous operation ends which takes as first argument an error, if one occured, and the result of the request as extra arguments.

- What is middleware?
  It is code that runs in the middle of the request / response cycle!

- What does the `next` function do?
  The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware. 
- What does `RETURNING` do in SQL? When would you use it?
  The RETURNING clause allows you to retrieve values of columns that were modified by an insert, delete, or update. Without RETURNING, you would have to run a SELECT statement after the DML statement is completed, in order to obtain the values of the changed columns.
- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

.Could abstract most of the url to a variable
.Could use Promise.all to initiate the requests at the same time instead of   sequentially
.There is no try / catch for error handling
.The return array could contain empty or unexpected data
.Could take in a parameter that's an array of usernames and loop through that so  that it's not hardcoded to just the three users listed.

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
