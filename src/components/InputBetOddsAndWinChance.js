import React from 'react';
import { Typography } from '@material-ui/core';

class InputBetOddsAndWinChance extends React.Component {
    render() {
        return (
            <Typography
                component="div"
                style={{
                    width: '280px',
                    margin: '0 -.9375em',
                    maxWidth: 'none',
                    padding: 0,
                    direction: 'ltr',
                }}>
                <Typography
                    component="ul"
                    style={{
                        listStyle: 'none',
                        textAlign: 'center',
                        marginLeft: '1em',
                        fontSize: '1em',
                        lineHeight: '1.6',
                        marginBottom: '1.25em',
                        fontFamily: 'inherit',
                        margin: 0,
                        padding: 0,
                        direction: 'ltr',
                    }}>
                    <Typography
                        component="li"
                        style={{
                            width: '110px',
                            marginRight: '10px',
                            float: 'left',
                            height: '30px',
                            color: '#feba00',
                            border: '1px solid #004530',
                            borderRop: '1px solid #246954',
                            borderRadius: '0 0 3px 3px',
                            fontSize: '14px',
                            padding: '7px 6px',
                            textShadow: '0 1px #000',
                            background: 'rgba(0,0,0,.3)',
                            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.2), 0 1px 0 rgba(255,255,255,.1)',
                            fontWeight: 700,
                            direction: 'ltr',
                        }}>
                        <Typography
                            component="input"
                            type="text"
                            value="2.00"
                            style={{
                                fontFamily: 'inherit',
                                display: 'block',
                                margin: '0 0 1em',
                                padding: '.5em',
                                height: '2.3125em',
                                width: '100%',
                                boxSizing: 'border-box',
                                background: 'rgba(0,0,0,.3)',
                                boxShadow: 'inset 0 1px 1px rgba(0,0,0,.2),0 1px 0 rgba(255,255,255,.1)',
                                textShadow: '0 1px #000',
                                borderTop: '.5px solid #246954',
                                fontSize: '14px',
                                color: '#feba00',
                                textSlign: 'center',
                                border: '1px solid #004530',
                                borderRadius: '3px 3px',
                                fontWeight: 700,
                            }}></Typography>
                    </Typography>
                    <Typography
                        component="li"
                        style={{
                            width: '130px',
                            // marginRight: '10px',
                            float: 'left',
                            height: '30px',
                            color: '#feba00',
                            border: '1px solid #004530',
                            borderRop: '1px solid #246954',
                            borderRadius: '0 0 3px 3px',
                            fontSize: '14px',
                            padding: '7px 6px',
                            textShadow: '0 1px #000',
                            background: 'rgba(0,0,0,.3)',
                            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.2), 0 1px 0 rgba(255,255,255,.1)',
                            fontWeight: 700,
                            margin: 0,
                            direction: 'ltr',
                        }}>
                        <Typography
                            component="input"
                            type="text"
                            value="47.50%"
                            style={{
                                fontFamily: 'inherit',
                                display: 'block',
                                margin: '0 0 1em',
                                padding: '.5em',
                                height: '2.3125em',
                                width: '100%',
                                boxSizing: 'border-box',
                                background: 'rgba(0,0,0,.3)',
                                boxShadow: 'inset 0 1px 1px rgba(0,0,0,.2),0 1px 0 rgba(255,255,255,.1)',
                                textShadow: '0 1px #000',
                                borderTop: '.5px solid #246954',
                                fontSize: '14px',
                                color: '#feba00',
                                textSlign: 'center',
                                border: '1px solid #004530',
                                borderRadius: '3px 3px',
                                fontWeight: 700,
                            }}></Typography>
                    </Typography>
                </Typography>
            </Typography>
        )
    }
}

export default InputBetOddsAndWinChance;