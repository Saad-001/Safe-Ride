import { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CreateAccount from "./Components/CreateAccount/CreateAccount";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import RideDetails from "./Components/RideDetails/RideDetails";

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState();
  return (
    <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/rideDetails">
            <RideDetails></RideDetails>
          </PrivateRoute>
          <Route path="/createAccount">
            <CreateAccount></CreateAccount>
          </Route>
        </Switch>
      </Router>      
    </userContext.Provider>
  );
}

export default App;
