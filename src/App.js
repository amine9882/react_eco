import React from "react";
import {BrowserRouter as Router, Route ,Redirect, Switch} from 'react-router-dom';
// import Home from "./componente/frontend/Home";
import Login from "./componente/frontend/auth/Login";
import Register from "./componente/frontend/auth/Register";
// import About from "./componente/frontend/About";
// import Contact from "./componente/frontend/Contact";
// import Cart from "./componente/frontend/Cart";
// import MasterLayout from "./layouts/admin/MasterLayout";
// import Page403 from "./componente/errors/Page403";
// import Page404 from "./componente/errors/Page404";
import axios from "axios";
import AdminPrivateRoute from './AdminPrivateRoute';
import PublicRoute from './PublicRoute'

axios.defaults.baseURL = "http://127.0.0.1:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});
function App() {
  return (
    <div className="App">
        <Router>
          <Switch>
          <AdminPrivateRoute path="/admin" name="Admin" />
          <PublicRoute path="/" name="Home" />
            {/* <Route exact path ="/" component={Home}/>
            <Route  path ="/about" component={About}/>
            <Route  path ="/contact" component={Contact}/>
            <Route  path ="/cart" component={Cart}/> */}
            {/* <Route  path ="/403" component={Page403}/>
            <Route  path ="/404" component={Page404}/> */}
            
            <Route path ="/login">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Login />}
            </Route>
            <Route path ="/Register">
              {localStorage.getItem('auth_token') ? <Redirect to='/' /> : <Register />}
            </Route>
            {/* <Route path="/admin" name="Admin" render={(props)=> <MasterLayout {...props} />} /> */}

            
          </Switch>
        </Router>
    </div>
  );
}

export default App;
