import React from 'react';
import './App.css';
import Cart from './Components/Cart';
import Confirmation from './Components/Confirmation';
import Prepayment from './Components/Prepayment';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


export default function App() {
  return(
    <Router>
      <Switch>
          <Route path="/confirmation">
            <Confirmation />
          </Route>
          <Route path="/prepayment">
            <Prepayment />
          </Route>
          <Route path="/">
            <Cart />
          </Route>
        </Switch>
    </Router>
  )
}








// function App() {
//   return (
    
//   );
// }

// export default App;
