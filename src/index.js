import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunkRedux from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import firebase from './config/firebase'

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunkRedux.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(firebase, {userProfile: 'users', useFirestoreForProfile: true, attachAuthIsReady: true}),
    reduxFirestore(firebase) // bindings with firebase and redux
  )
);

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
});

