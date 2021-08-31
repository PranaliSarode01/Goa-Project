import React from 'react';
import SignUp from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import ForgotPassword from './components/pages/ForgotPassword'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import AuthState from './context/authContext/AuthState'
import GoaState from './context/goaContext/GoaState'

import PrivateRoute from './components/routes/PrivateRoute'
import Landing from './components/pages/Landing'
import FirstForm from './components/FirstForm';

function App() {
  return (
    <AuthState>

      <GoaState>
        <BrowserRouter>
          <div>
            <Switch>
              <Route exact path="/" component={Landing} />

              <Route exact path="/signin" component={SignIn} />
              <PrivateRoute exact path="/dashboard" component={FirstForm} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/forgotpassword" component={ForgotPassword} />
              <SignUp />
            </Switch>
          </div>
        </BrowserRouter>
      </GoaState>


    </AuthState>
  );
}

export default App;
