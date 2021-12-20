import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {Provider} from "react-redux";
import store from "./store";
import './App.css';
import Nav from "./components/Nav"
import Home from "./components/Home"
import Cart from "./components/Cart"
import Details from "./components/Details";
import NotFound from "./components/NotFound"

function App() {
  return (
    <Router>
     <Provider store={store}>
     <Nav />
     <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/cart" exact component={Cart}/>
         <Route path="/details/:id" exact component={Details}/>
         <Route component={NotFound}/>
     </Switch>
     </Provider>
    </Router>
  );
}

export default App;
