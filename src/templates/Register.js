import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import { Redirect, withRouter, Link } from "react-router-dom";
import IconLogo from '../components/IconLogo';
import Input from '../components/Input';
import Captcha from '../components/Captcha';
import fakeAuth from '../lib/fakeAuth';




class Register extends React.Component {
  state = { redirectToReferrer: false }


  register = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };



  render() {
    let { from } = this.props.location.state || { from: { pathname: "/" } };
    let { redirectToReferrer } = this.state;
    const classes = registerButtonStyles;

    if (redirectToReferrer) return <Redirect to={from} />;
    return (

      <React.Fragment>
        {/* <CssBaseline /> */}
        <Container
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            padding: 0,
          }}>
          <Typography
            component="div"
            style={{
              backgroundColor: '#007b59',
              height: '100vh',
              width: '100vh'
            }} >
            <Container maxWidth="sm">
              <Typography
                component="div"
                style={{
                  height: '100vh',
                  paddingLeft: '6vh',
                  paddingRight: '6vh',
                  marginTop: '11vh'
                }} >
                <Typography
                  component="h1"
                  style={{
                    textAlign: "center",
                    marginBottom: "3vh"
                  }}>
                  <IconLogo />
                </Typography>
                <Input
                  type="text"
                  placeholder="E-mail Address"
                />
                <Input
                  type="password"
                  placeholder="Password"
                />
                <Input
                  type="text"
                  placeholder="Your Referrer"
                />
                <Captcha />
                <ThemeProvider theme={theme}>
                  <Button
                    variant="contained"
                    color="primary"
                    className={classes.margin}
                    style={{
                      fontFamily: "'Prosto One',cursive",
                      fontWeight: "bold",
                      float: 'right',
                    }}
                  >REGISTER</Button>
                </ThemeProvider>
                <BackToLogin />
              </Typography>
            </Container>
          </Typography>
        </Container>
      </React.Fragment>
    );
  }
}

const BackToLogin = withRouter(({ history }) => (
  <Link
    onClick={history.goBack}
    style={{
      fontFamily: "'Prosto One',cursive",
      fontWeight: "bold",
      color: 'rgb(255, 255, 255)',
      width: 'fit-content',
      float: 'left',
      fontSize: '18px',
      marginTop: 'inherit',
      textDecoration: 'blink',
      textShadow: '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)'
    }}
  >⬅ Login</Link>
))

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ebae08',
      contrastText: '#483704'
    },
  },
});

const registerButtonStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1),
  }
}));

export default Register