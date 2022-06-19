import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingRating = (state = 0 , action) => {
    switch (action.type){
        case 'ADD_FEELING_RATING':
            return action.payload;
    }
    return state;
}

const understandingRating = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_UNDERSTANDING_RATING':
            return action.payload;
    }
    return state;
}

const supportRating = (state = 0, action) => {
    switch (action.type) {
        case 'ADD_SUPPORT_RATING':
            return action.payload;
    }
    return state;
}

const commentSection = (state = '', action) => {
    switch (action.type) {
        case 'ADD_COMMENT':
            return action.payload;
    }
    return state;
}

const userName = (state = '', action) => {
    switch (action.type) {
        case 'SET_USER_NAME':
            return action.payload;
    }
    return state;
}

const storeInstance = createStore(
    combineReducers({
       feelingRating,
       understandingRating,
       supportRating,
        commentSection,
        userName

    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
