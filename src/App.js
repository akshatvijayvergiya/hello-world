import React from 'react'
import './App.css';
import CardContainer from './Components/CardContainer';
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'
import AudioDashboard from './Components/AudioDashboard';
import {carList} from './Utility'

function App() {

  {console.log("chaka")}

  return (
    <Router>
    
    <div className="App">
    
      <Route exact path='/'>
      <CardContainer />
      </Route>
      <Route exact path='/audioDashboard'>
      <AudioDashboard data={carList}/>
      </Route>
    
    

    </div>
    </Router>
  );
}

export default App;
