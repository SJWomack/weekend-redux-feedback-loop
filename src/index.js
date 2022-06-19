import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const userResponse = (state = {} , action) => {
    switch (action.type){
        case 'ADD_FEELING_RATING':
            state.feeling = action.payload;
            return state;
        case 'ADD_UNDERSTANDING_RATING':
            state.understanding = action.payload;
            return state;
        case 'ADD_SUPPORT_RATING':
            state.support = action.payload;
            return state;
        case 'ADD_COMMENT':
            state.comment = action.payload;
            return state;
        case 'SET_USER_NAME':
            state.name = action.payload;
            return state;
        case 'RESET_FEEDBACK':
            return {};
    }
    return state;
}


const storeInstance = createStore(
    combineReducers({
       userResponse
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
