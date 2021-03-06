import React from 'react';

// import './App.css';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import First from './components/First/First';
import Second from './components/Second';
import Third from './components/Third';
function App() {
  return (
    <Router>
        <div className="App">
          
          <Switch>
            {/* <Route exact path="/" component={First} /> */}
            <Route exact path="/second" component={Second} />
            <Route exact path="/third" component={Third} />
            
          
            
            <Route render={() => <h2 >404 Page Not Found</h2>} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
