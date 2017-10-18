
#Fais-toi des muscles

## Table of Contents

1. Features

## Features

- A user can know his 1RM based on a number of repetitions 
- A user can create a program from his X RM, for the 4th exercices
- A program is a succession of cycles
- A cycle is divide into 4 weeks
- A week contains 4 Sessions
- A Session is a chain of 4 main lifts

## In Progress 
-> Brancher le mapdispatch sur le calcul du 1RM, pour mettre également dans le Worker son programme s'il n'existe pas
-> trouver un système pour faire de même pour les 4 Lifts
-> Refondre l'interface pour avoir 4 zones comme sur les IHM
-> Use business class for initialize the program of the user when he is logged
-> Manage the form for display 4 area, one per lift
-> Manage form for allow user to fill his maxes

- A user can know his 1RM based on a number of repetitions
- When he is logged, if he has no program yet, we show him the program builder

## Done 
-> Login -> branch the Login page form to the Log action (actionCreator -> Sagas -> api)
-> Login -> hide the Login comp / or display a message  when we have no worker connected.



## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `/public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.
