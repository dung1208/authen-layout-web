import React from 'react';
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { JobPortal } from './routes/authen/job-portal/job-portal'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import myReducer from './reducers/index';


const store = createStore(myReducer)
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path="/" exact component={JobPortal} />
      </Router>
    </Provider>
  );
}

export default App;
