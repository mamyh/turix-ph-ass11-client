import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContext from "./AuthContext/AuthContext";
import About from "./pages/about/About";
import AddPakage from "./pages/AddPakage/AddPakage";

import Home from "./pages/Home/Home";
import Login from "./pages/login/Login";
import ManageOrders from "./pages/ManageOrder/ManageOrders";
import Notfound from "./pages/notFound/Notfound";
import Register from "./pages/Register/Register";

import Footer from "./pages/shared/Footer/Footer";
import Header from "./pages/shared/Header/Header";
import Trips from "./pages/Trips/Trips";
import YourTrips from "./pages/Your-trips/YourTrips";
import PrivateRoute from "./privateRoute/PrivateRoute";



function App() {

  return (
    <AuthContext >
      <BrowserRouter >
        <Header></Header>
        <div className="bg-gray-200">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about" component={About}></Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            {/* private routes are stared here  */}
            <PrivateRoute path="/trips">
              <Trips></Trips>
            </PrivateRoute>
            <PrivateRoute path="/manage-all-trips">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/your-trips">
              <YourTrips></YourTrips>
            </PrivateRoute>
            <PrivateRoute path="/addpakage">
              <AddPakage></AddPakage>
            </PrivateRoute>

            <Route path="*">
              <Notfound></Notfound>
            </Route>
          </Switch>
        </div>
        <Footer></Footer>
      </BrowserRouter>
    </AuthContext >
  );
}

export default App;
