# Putting It All Together

Hello Bootcampers! You've made it so far! You are _SO_ close to completing your very first full stack web app. But before you give yourself a big pat on the back, you've got one more heavy lift: we need to connect our API with our frontend. HOW?!

## Release 0

You've got a bunch of routes in your API. And in `bootcamp-6` you learned how to pull data from a static JSON file on the web. Now we're going to pull JSON from our server. For every action in your todo, make a thunk that updates the database to reflect the state change on the frontend.

For this to work, you have to start both your frontend `npm start` and your backend: `npm run start:dev` (alternatively `nodemon server.js`). You'll probably get a CORS error at first. (These are important. Google CORS and learn about it.) If you get a CORS error, add a proxy to your API in your `package.json`. It should look something like this.

```JSON
{
  "name": "exmaple",
  "version": "1.0.0",
  "description": "example",
  "main": "server.js",
  "proxy": "http://localhost:8080",
  "dependencies": {}
}
```

You've completed this challenge when the changes you make on your frontend are persisted in a server.

## Release 1

URL routing is an essential part of any web application. We already have routes for our API, but what about routes on the frontend? Wouldn't be easier if a users could go to `localhost:8080/incomplete` to find all their incomplete tasks? Or go to `localhost:8080/upcoming` to find the todos that are coming due? These sorts of routes have to be declared on the frontend (in React). Fortunately, there is a fabulous tool called [React Router](https://github.com/ReactTraining/react-router), which makes all of this work really easy. It is an essential part of any web application. Your job is to implement the following routes in your application:

* `/incomplete`
* `/complete`
* `/upcoming`
* `/starred`

Remember, these are routes that you define on your FRONTEND not in your BACKEND. That is, do not put these routes in Express! They go in React!

Check out the [Posters Portal](https://github.com/DavidsonCollege/poster-portal) project on GitHub if you need a real world example.
