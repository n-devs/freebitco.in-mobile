import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBtc } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import SignoutButton from '../components/SignoutButton';
import IconLogo from '../components/IconLogo'


class AppBarGame extends React.Component {
    state = { balance_small: '1.00000' }
    render() {

        return (
            <Typography
                component="div"
                style={{ flexGrow: 1 }}>
                <ThemeProvider theme={theme}>
                    <AppBar position="fixed" color="primary" >
                        <Toolbar style={{paddingRight: 0}}>
                            <Typography component="h6" style={{ flexGrow: 1 }}>
                                <IconLogo size="18" />
                            </Typography>
                            <Typography component="div" style={{ flexGrow: 1 }} />
                            <Typography component="p" >
                                <FontAwesomeIcon icon={faBtc} />
                                <Typography
                                    component="span"
                                    style={{
                                        fontFamily: "'Prosto One',cursive",
                                        fontWeight: "bold",
                                    }}
                                >
                                    {this.state.balance_small}
                                </Typography>
                            </Typography>
                            <SignoutButton />
                        </Toolbar>
                    </AppBar>
                </ThemeProvider>
            </Typography>
        );
    }
}



const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#111',
            contrastText: '#d6ff5c'
        },
    },
});

library.add(faBtc)


export default AppBarGame;