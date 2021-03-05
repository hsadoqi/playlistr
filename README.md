# Playlistr

An app that loads podcasts from a remote source and allows the user to drag their favorites to a saved playlist that persists locally. 


## Getting Started

---

1. Clone project 
```
git clone 
```

2. Install dependencies and run locally:

```
npm i && npm start
```

## Technologies Used
---
- [Node and NPM](https://nodejs.org/en/) - Server Environment
- [React](https://reactjs.org/) - Frontend framework
- [Redux](https://redux.js.org/) - State managament tool
- [React Beautiful DnD](https://github.com/atlassian/react-beautiful-dnd) - Drag and Drop functionality 
- [LocalStorage](https://www.npmjs.com/package/local-storage) - Local data persistence


## Folder Structure
---

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    components/
        Podcast.css
        Podcast.js
    containers/
        PlaylistsContainer.css
        PlaylistsContainer.js
        RemotePlaylistContainer.js
        SavedPodcastContainer.js
    store/
        actions/
            playlistActions.js
        reducers/
            playlistReducer.js
        index.js
    App.css
    App.js
    App.test.js
    index.css
    index.js

```


## Available Scripts
---

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


