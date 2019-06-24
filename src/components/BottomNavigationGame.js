import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';



export default class BottomNavigationGame extends React.Component {

    render() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        var b = h
        return (
            <React.Fragment>

                <BottomNavigation
                    showLabels
                    style={{
                        position: 'fixed',
                        top: `${b - 142}px`,
                        width: `${w}px`,
                        backgroundColor: 'rgb(0, 123, 89)',
                        height: `${b - 498}px`,
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,.45), 0 -1px 5px rgba(0,0,0,.45)',
                    }}
                >
                    <BottomNavigationAction
                        component="span"
                        style={{
                            flex: 0,
                            minWidth: 45,
                            background: 'linear-gradient(to bottom,#45484d 0%,#000000 100%)',
                            color: '#fff',
                            marginBottom: `${b - (498 + 68)}px`,
                            marginTop: 10,
                            padding: '0',
                            borderRadius: '5px',
                            marginRight: '3px',
                            marginLeft: '3px',
                        }}
                    ></BottomNavigationAction>
                    <BottomNavigationAction
                        component="span"
                        style={{
                            flex: 0,
                            minWidth: 45,
                            background: 'linear-gradient(to bottom,#45484d 0%,#000000 100%)',
                            color: '#fff',
                            marginBottom: `${b - (498 + 68)}px`,
                            marginTop: 10,
                            padding: '0',
                            borderRadius: '5px',
                            marginRight: '3px',
                            marginLeft: '3px',
                        }}
                    ></BottomNavigationAction>
                    <BottomNavigationAction
                        component="span"
                        style={{
                            flex: 0,
                            minWidth: 45,
                            background: 'linear-gradient(to bottom,#45484d 0%,#000000 100%)',
                            color: '#fff',
                            marginBottom: `${b - (498 + 68)}px`,
                            marginTop: 10,
                            padding: '0',
                            borderRadius: '5px',
                            marginRight: '3px',
                            marginLeft: '3px',
                        }}
                    ></BottomNavigationAction>
                    <BottomNavigationAction
                        component="span"
                        style={{
                            flex: 0,
                            minWidth: 45,
                            background: 'linear-gradient(to bottom,#45484d 0%,#000000 100%)',
                            color: '#fff',
                            marginBottom: `${b - (498 + 68)}px`,
                            marginTop: 10,
                            padding: '0',
                            borderRadius: '5px',
                            marginRight: '3px',
                            marginLeft: '3px',
                        }}
                    ></BottomNavigationAction>
                    <BottomNavigationAction
                        component="span"
                        style={{
                            flex: 0,
                            minWidth: 45,
                            background: 'linear-gradient(to bottom,#45484d 0%,#000000 100%)',
                            color: '#fff',
                            marginBottom: `${b - (498 + 68)}px`,
                            marginTop: 10,
                            padding: '0',
                            borderRadius: '5px',
                            marginRight: '3px',
                            marginLeft: '3px',
                        }}
                    ></BottomNavigationAction>
                </BottomNavigation>
                <BottomNavigation
                    showLabels

                    style={{
                        position: 'fixed',
                        bottom: 0,
                        width: `${w}px`,
                        backgroundColor: 'rgb(0, 123, 89)'
                    }}
                >
                    <BottomNavigationAction
                        component="button"
                        color="primary"
                        onClick={() => { console.log('hi') }}
                        label={<Typography
                            component="span"
                            style={{
                                fontFamily: "'Prosto One',cursive",
                                fontWeight: "bold",
                                fontSize: "1rem",
                            }}
                        >BET HI</Typography>}
                        icon={<ArrowDropUpIcon />}
                        value="hi"
                        style={{

                            backgroundColor: '#ebae08',
                            boxShadow: 'inset 0 1px 1px rgba(255,255,255,.45), 0 1px 3px rgba(0,0,0,.45)',
                            color: '#483704',
                            margin: '0px 5px 5px',
                            padding: 0
                        }}
                    > </BottomNavigationAction>
                    <BottomNavigationAction
                        component="button"
                        onClick={() => { console.log('lo') }}
                        label={<Typography
                            component="span"
                            style={{
                                fontFamily: "'Prosto One',cursive",
                                fontWeight: "bold",
                                fontSize: "1rem",
                            }}
                        >BET LO</Typography>}
                        icon={<ArrowDropDownIcon />}
                        value="lo"
                        style={{
                            fontFamily: "'Prosto One',cursive",
                            fontWeight: "bold",
                            fontSize: 16,
                            backgroundColor: '#ebae08',
                            boxShadow: 'inset 0 1px 1px rgba(255,255,255,.45), 0 1px 3px rgba(0,0,0,.45)',
                            color: '#483704',
                            margin: '0px 5px 5px',
                            padding: 0
                        }}
                    />
                </BottomNavigation>
            </React.Fragment>
        );
    }
}

