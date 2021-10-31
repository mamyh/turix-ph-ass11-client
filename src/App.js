import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContext from "./AuthContext/AuthContext";
import AddPakage from "./pages/AddPakage/AddPakage";
import About from './pages/About/About';
import Home from "./pages/Home/Home";

import ManageOrders from "./pages/ManageOrder/ManageOrders";
import Notfound from "./pages/notFound/NotFound";
import Login from './pages/Login/Login';
import Footer from "./pages/shared/Footer/Footer";
import Header from "./pages/shared/Header/Header";
import Trips from "./pages/Trips/Trips";
import YourTrips from "./pages/Your-trips/YourTrips";
import PrivateRoute from "./privateRoute/PrivateRoute";
import TripDetails from "./pages/Trips/TripDetails/TripDetails";

import OrderDetails from "./pages/ManageOrder/OrderDetails/OrderDetails";



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
            <Route path="/login" component={Login}>

            </Route>
            <Route exact path="/trips" component={Trips}></Route>

            {/* private routes are stared here  */}

            <PrivateRoute path="/manage-all-trips">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <PrivateRoute path="/trips/:id">
              <TripDetails></TripDetails>
            </PrivateRoute>
            <PrivateRoute path="/order/:id">
              <OrderDetails></OrderDetails>
            </PrivateRoute>
            <PrivateRoute path="/order/edit">

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
