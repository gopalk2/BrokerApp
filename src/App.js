import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import MainDiv from './components/MainDiv';
import './styles/textFont.css';
import './styles/positions.css';
import './styles/widthMarginPadding.css';
import AccountProfile from './views/AccountProfile';
import BrokerProfile from './views/BrokerProfile';
import Home from './views/Home';
import { useDispatch } from 'react-redux';
import { get_UserLogged_Data } from './store/action/allAction';


const App = () => {

  const isLoggedIn = true;
  const dispatch = useDispatch();

  useEffect(() => {
    if (sessionStorage?.getItem('Token')) { dispatch(get_UserLogged_Data()) }
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        {isLoggedIn ? (
          <MainDiv>
            <Switch>
              <Route exact path='/broker-profile' component={BrokerProfile} />
              <Route exact path='/profile' component={AccountProfile} />
            </Switch>
          </MainDiv>
        ) : (
          <Redirect to='/' />
        )}
      </Switch>
    </Router>
  );
};

export default App;
