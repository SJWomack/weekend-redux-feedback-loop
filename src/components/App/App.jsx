import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import CommentSection from '../CommentSection/CommentSection'
import FeelingRating from '../FeelingRating/FeelingRating'
import SupportRating from '../SupportRating/SupportRating'
import UnderstandingRating from '../UnderstandingRating/UnderstandingRating'
import UserEntry from '../UserEntry/UserEntry';
function App() {

  return (
    <Router>

      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
      </div>

      <Route path='/' exact>
        <UserEntry />
      </Route>


    </Router>


  );
}

export default App;
