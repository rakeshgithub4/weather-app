import React from 'react'
import './App.css'
import Temp from './components/Temp'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'




const App = () => {
   


    return(
        <>
         <Router>
            <Switch>
             <Temp />
             </Switch>
         </Router>
        
        
        
        </>
    )
}


export default App;