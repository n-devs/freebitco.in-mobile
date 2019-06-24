import React from 'react';
// import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import fakeAuth from '../lib/fakeAuth'

const SignoutButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (

      <Button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
        style={{minWidth:45}}
      >
        <FontAwesomeIcon icon={faSignOutAlt} style={{color: '#fff'}}/>
      </Button>
    ) : (
        <React.Fragment></React.Fragment>
      )
);

library.add(faSignOutAlt)

export default SignoutButton