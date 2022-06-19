import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';

import CommentSection from '../CommentSection/CommentSection'
import FeelingRating from '../FeelingRating/FeelingRating'
import SupportRating from '../SupportRating/SupportRating'
import UnderstandingRating from '../UnderstandingRating/UnderstandingRating'
import UserEntry from '../UserEntry/UserEntry';
import ReviewFeedback from '../ReviewFeedback/ReviewFeedback'
import Success from '../Success/Success';
import Admin from '../Admin/Admin';

function App() {
const feedback = useSelector(store => store.userResponse);
const dispatch = useDispatch();
const [userEntries, setUserEntries] = useState([]);


useEffect(() => {
  axios.get('/feedback')
    .then((results) =>{
      console.log('get user entries success')
      setUserEntries(results.data)
    })
    .catch((err) =>{
      console.log('get user entries failed', err)
    })
},[])

function handleSubmitFeedback (){
  axios.post('/feedback', feedback)
    .then(() => {
      console.log('feedback sent');
      
    })
    .catch ((err) => console.log('feedback not sent', err))
}
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

      <Route path='/feeling' exact>
        <FeelingRating />
      </Route>

      <Route path='/understanding' exact>
        <UnderstandingRating />
      </Route>

      <Route path='/support' exact>
        <SupportRating />
      </Route>

      <Route path="/comment" exact>
        <CommentSection />
      </Route>

      <Route path="/review" exact>
        <ReviewFeedback  submitFeedback={handleSubmitFeedback}/>
      </Route>

      <Route path="/success" exact>
        <Success />
      </Route>

      <Route path="/admin" exact>
        <Admin userEntries={userEntries}/>
      </Route>


    </Router>


  );
}

export default App;
