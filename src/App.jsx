
import {BrowserRouter as  Router,Route, Switch} from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Registration from "./Pages/Registration";
import Login from "./Pages/Login";
import ToDoCart from "./Pages/ToDoCart";


function App(){

    return(
        <Router>
            <Switch>
                <Route path="/Registration" component={Registration} />
                <Route path="/Login" component={Login} />
               
                <Route path="/ToDoCart" component={() => <ToDoCart auth={true}/>} />
                <Route path='/Dashboard' component={() =><Dashboard auth={true} /> } />                        
            </Switch>
        </Router>
    )
}

export default App;