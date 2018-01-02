# react-native-tech_stack

<h4>1/1/18<h4>

Set Up:
1. Create SRC folder and create App.js file

Section 11, Lecture 83: More on Redux Boilerplate:
1.Import Provider and CreateStore from react-redux and redux 
2. Wrap View in Provider tags. pass store={createStore}
3. Create reducers folder in src. create index.js 
4. Connect reducers to App.js and pass in createStore

Section 12, Lecture 84: Rendering the Header
1. Copy over common components
2. Provider can only have 1 child component
3. Wrap header in view tag

Section 12, Lecture 85: Reducer State and Design
1. Reducers produce application state, application state holds all data. reducer is a function that returns some amount of data
2. Needs two distinct states: 1. A list of libraries 2. Currenty selected library. Because two seperate pieces of state --> two reducers

Section 12, Lecture 86: Library list of data
1. Create new reducer that will return static list of libraries
2. Create new file LibraryReducer.js and connect to index.js
3. console.log(store.getState()) will result in libraries:[]

Section 12, Lecture 88: The connect function
1. Connect LibraryList.json to LibraryReducer.js
2. Connect helper is the only way to get redux store from react
3. Create file LibraryList.js and add connect helper to LibraryList.js

Section 12, Lecture 89: MapToStateProps w/ Connect
1. mapStateToProps will take some specified state and will provide it as props to a component specified