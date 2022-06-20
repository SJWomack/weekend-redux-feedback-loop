import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';


//reducer that manages state for user response object
const userResponse = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_FEELING_RATING':
            return {...state, feeling: action.payload};
        case 'ADD_UNDERSTANDING_RATING':
            return {...state, understanding: action.payload};
        case 'ADD_SUPPORT_RATING':
            return {...state, support :action.payload};
        case 'ADD_COMMENT':
            return {...state, comment: action.payload};
        case 'SET_USER_NAME':
            return {...state, name: action.payload};
        case 'RESET_FEEDBACK':
            return {};
    }
    return state;
}

//grabs all state managed by reducers and stores in a globally accessible object
const storeInstance = createStore(
    combineReducers({
        userResponse
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
