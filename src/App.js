
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Login from './pages/Login/Login';
import NotFound from './pages/notFound/NotFound';
import Register from './pages/Register/Register';
import Header from './pages/share/Header/Header';
import Footer from './pages/share/Footer/Footer';
import AuthContext from './AuthContext/AuthContext';

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="*" component={NotFound}></Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthContext>
  );
}

export default App;
