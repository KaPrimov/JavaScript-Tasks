# Game Store

Angular 2 project for the SoftUni Angular Fundamentals course.

## Getting Started

From the root directory of the project run the command `npm install` and than `npm start`. The project will start on port `8080`.
If another program is using the port - stop it and run the project again.

## Prerequisites

Node.js and npm are essential to Angular development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v4.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

I recommend [nvm](https://github.com/creationix/nvm) for managing multiple versions of node and npm.

### Installing


Install the npm packages described in the `package.json` and verify that it works:

```shell
npm install
npm start
```

>Doesn't work in _Bash for Windows_ which does not support servers as of January, 2017.

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with `Ctrl-C`.

## Running the tests

Unit test are not added as of now.

## Deployment

Follow the [link](https://medium.com/@ervib/deploy-angular-4-app-with-express-to-heroku-6113146915ca) the for detailed instruction on how to deploy the app.

## Built With

* [Angular 4](https://angular.io/) - The fronend framework used
* [npm](https://www.npmjs.com/) - Dependency Management
* [Firebase](https://firebase.google.com/) - BaaS
* [Foundation](https://foundation.zurb.com/) - Responsive Design

## Authors

* **Kalin Primov** - *Initial work* - [KaPrimov](https://github.com/KaPrimov)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

