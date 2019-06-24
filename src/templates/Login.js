import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import $ from 'jquery';
import { Redirect, Link } from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import IconLogo from '../components/IconLogo';
import Input from '../components/Input';
import fakeAuth from '../lib/fakeAuth';

class Login extends React.Component {
    state = { redirectToReferrer: false };

    componentDidMount() {

    }

    login = () => {
        fakeAuth.authenticate(() => {
           

            var posting = $.post('/', {
                op: 'login_new',
                btc_address: this.state.inputEmailValue,
                password: this.state.inputPasswordValue,
                tfa_code: this.state.input2FA_CodeValue,
            });

            posting.done(function(data) {
                var result = data.split(":");
                if (result[0] == "e") {
                    // DisplaySEMessage(result[0], result[1]);
                } else if (result[0] == "s") {
                    $.cookie.raw = true;
                    $.cookie('btc_address', result[1], {
                        expires: 3650,
                        secure: true
                    });
                    $.cookie('password', result[2], {
                        expires: 3650,
                        secure: true
                    });
                    $.cookie('have_account', 1, {
                        expires: 3650,
                        secure: true
                    });
                    window.location.replace("https://freebitco.in/?op=home");
                    this.setState({redirectToReferrer: true})
                }
                $("#login_button").prop("disabled", false);
            });
        });
    };

    handleChangeEmail(event) {
        this.setState({ inputEmailValue: event.target.value })
    }

    handleChangePassword(event) {
        this.setState({ inputPasswordValue: event.target.value })
    }

    handleChange2FA_Code(event) {
        this.setState({ input2FA_CodeValue: event.target.value })
    }


    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;

        const classes = loginButtonStyles;

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
                                    marginTop: '25vh'
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
                                    onChange={this.handleChangeEmail.bind(this)}
                                    type="text"
                                    placeholder="Bitcoin Address/E-mail Address"
                                    value={this.state.inputEmailValue}
                                />
                                <Input
                                    onChange={this.handleChangePassword.bind(this)}
                                    type="password"
                                    placeholder="Password"
                                    value={this.state.inputPasswordValue}
                                />
                                <Input
                                    onChange={this.handleChange2FA_Code.bind(this)}
                                    type="text"
                                    placeholder="Enter 2FA Code"
                                    value={this.state.input2FA_CodeValue}
                                />
                                <Link
                                    to="/register"
                                    style={{
                                        fontFamily: "'Prosto One',cursive",
                                        fontWeight: "bold",
                                        color: 'rgb(255, 255, 255)',
                                        width: 'fit-content',
                                        float: 'right',
                                        fontSize: '18px',
                                        marginTop: 'inherit',
                                        textDecoration: 'blink',
                                        textShadow: '-1px -1px 1px rgba(255,255,255,.1), 1px 1px 1px rgba(0,0,0,.5)'
                                    }}
                                >Register ➡</Link>
                                <ThemeProvider theme={theme}>
                                    <Button
                                        onClick={this.login}
                                        variant="contained"
                                        color="primary"
                                        className={classes.margin}
                                        style={{
                                            fontFamily: "'Prosto One',cursive",
                                            fontWeight: "bold",
                                            float: 'left',
                                        }}
                                    >LOGIN </Button>
                                </ThemeProvider>
                            </Typography>
                        </Container>
                    </Typography>
                </Container>
            </React.Fragment>
        );
    }
}

const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#ebae08',
        contrastText: '#483704'
      },
    },
  });

const loginButtonStyles = makeStyles(theme => ({
    margin: {
        margin: theme.spacing(1),
    }
}));

export default Login;