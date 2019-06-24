import React from 'react';
import Typography from '@material-ui/core/Typography';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import BottomNavigationGame from '../components/BottomNavigationGame'
import MaxProfitPerBet from '../components/MaxProfitPerBet'
import BetAmount from '../components/BetAmount';
import TabBetOddsAndWinChance from '../components/TabBetOddsAndWinChance';
import InputBetOddsAndWinChance from '../components/InputBetOddsAndWinChance';
import PlayForJeckpotsTitle from '../components/PlayForJeckpotsTitle';
import RollNumberTitle from '../components/RollNumberTitle';
import JackpotTab from '../components/JackpotTab';
import JackpotInput from '../components/JackpotInput';

class Game extends React.Component {

    render() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        var marginTop = 56

        if (w > 600) {
            marginTop = 64
        } else {
            marginTop = 56
        }
        return (
            <React.Fragment>
                <BottomNavigationGame />
                <Typography
                    component="div"
                    style={{
                        background: '#007a5c',
                        // height: '69vh',
                        marginTop: `${marginTop}px`,
                        overflow: 'hidden',
                        height: `${h - marginTop}px`
                    }}
                >
                    <TabsGame />
                </Typography>
            </React.Fragment>

        )
    }
}

function TabsGame() {
    const [value, setValue] = React.useState(0);

    function handleChange(event, newValue) {
        setValue(newValue);
    }
    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static" color="secondary">
                <Tabs
                    variant="fullWidth"
                    onChange={handleChange}
                    value={value}
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "rgb(254, 186, 0)"
                        }
                    }}
                >
                    <Tab label="BET GAME" />
                    <Tab label="PLAY FOR JACKPOT" />
                </Tabs>
            </AppBar>
            {value === 0 &&
                <Typography component="center">
                    <MaxProfitPerBet />
                    <BetAmount />
                    <TabBetOddsAndWinChance />
                    <InputBetOddsAndWinChance />
                </Typography>}
            {value === 1 && <Typography component="center">
                <PlayForJeckpotsTitle />
                <RollNumberTitle />
                <Typography
                    component="div"
                    style={{
                        width: 'auto',
                        marginBottom: 0,
                        maxWidth: '280px',
                        marginRight: 'auto',
                        marginLeft: 'auto',
                        padding: 0,
                        marginTop: 0,
                        direction: 'ltr',
                        color: '#fff',
                    }}
                >
                    <JackpotTab />
                    <JackpotInput select="5" prize="1.00000000" cost="0.00012500" />
                    <JackpotInput select="4" prize="0.10000000" cost="0.00001250" />
                    <JackpotInput select="3" prize="0.01000000" cost="0.00000125" />
                    <JackpotInput select="2" prize="0.00100000" cost="0.00000013" />
                    <JackpotInput select="1" prize="0.00010000" cost="0.00000002" />
                </Typography>
            </Typography>
            }

        </ThemeProvider >
    );
}


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#111',
            contrastText: '#d6ff5c'
        },

        secondary: {
            main: '#00563e',
            contrastText: 'rgb(254, 186, 0)',

        },
    },
});

export default Game;