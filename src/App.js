import React, { Component } from 'react';
import cookie from 'jquery.cookie';
import $ from 'jquery';
// import pushpad from './lib/pushpad';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Start from './templates/Start';
import Login from './templates/Login';
import Register from './templates/Register';
import Protected from './templates/Protected';
import PrivateRoute from './components/PrivateRoute';



class App extends Component {

  state = {
    setTimeout: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        setTimeout: false
      })
      console.log(`setTimeout: false`);
    }, 1000)


  }

  render() {


    return (
      <React.Fragment>
        {this.state.setTimeout
          ? <Start />
          : <Router>
            <TransitionGroup>
              <CSSTransition
                key={this.location}
                classNames="fade"
                timeout={300}
              >
                <Switch location={this.location}>
                  <Route
                    exact
                    path="/"
                    render={() => <Redirect to="protected" />}
                  />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <PrivateRoute path="/protected" component={Protected} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          </Router>
        }
      </React.Fragment>
    );
  }
}


export default App;
