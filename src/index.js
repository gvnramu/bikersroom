import React from 'react';
import ReactDOM from 'react-dom';
import { Redirect, Route, HashRouter, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
// import { browserHistory } from 'react-router';
import { AnimatedSwitch } from 'react-router-transition';
import ScrollToTop from 'react-router-scroll-top'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Home from './components/Home';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import Registration from './components/Registration';

const routing = (

  <HashRouter history={HashRouter} >
    <ScrollToTop>

      <div>
        <Header />
        <Switch>
          <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      className="switch-wrapper"
    >
          <Route exact path="/" component={Home} />
           <Route path="/login" component={Login} />
           <Route path="/registration" component={Registration} />
          </AnimatedSwitch>     
        </Switch>
        < Footer />
      </div>
    </ScrollToTop>
  </HashRouter >
)
        
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
ReactDOM.render(routing, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
