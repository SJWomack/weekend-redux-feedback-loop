import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';



import CommentSection from '../CommentSection/CommentSection'
import FeelingRating from '../FeelingRating/FeelingRating'
import SupportRating from '../SupportRating/SupportRating'
import UnderstandingRating from '../UnderstandingRating/UnderstandingRating'
import UserName from '../UserName/UserName';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

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
         <Grid container justifyContent="center"><UserName /></Grid> 
      </Route>

      <Route path='/feeling' exact>
        <Grid container justifyContent="center"><FeelingRating /></Grid>
      </Route>

      <Route path='/understanding' exact>
       <Grid container justifyContent="center"> <UnderstandingRating /></Grid>
      </Route>

      <Route path='/support' exact>
       <Grid container justifyContent="center"><SupportRating /></Grid>
      </Route>

      <Route path="/comment" exact>
        <Grid container justifyContent="center"><CommentSection /></Grid>
      </Route>

      <Route path="/review" exact>
       <ReviewFeedback  />
      </Route>

      <Route path="/success" exact>
         <Success />
      </Route>

      <Route path="/admin" exact>
        <Grid container justifyContent="center"><Admin /></Grid>
      </Route>


    </Router>


  );
}

export default App;
