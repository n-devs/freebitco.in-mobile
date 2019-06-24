import React from 'react';
import { Typography } from '@material-ui/core';

class JackpotTab extends React.Component {
    render() {
        return (
            <Typography
                component="div"
                style={{
                    width: 'auto',
                    marginLeft: '-0.9375em',
                    marginRight: ' -0.9375em',
                    marginTop: 0,
                    marginBottom: 0,
                    maxWidth: 'none',
                    textAlign: 'center',
                    padding: 0,
                    direction: 'ltr',
                    color: '#fff',
                }}>
                <Typography component="center">
                    <Typography
                        component="ul"
                        style={{
                            marginBottom: 0,
                            listStyle: 'none',
                            textAlign: 'center',
                            maxWidth: '264px',
                            marginLeft: 'auto',
                            marginRight: 'auto',
                            fontSize: '1em',
                            lineHeight: 1.6,
                            fontFamily: 'inherit',
                            margin: 0,
                            padding: 0,
                            direction: 'ltr',
                            color: '#fff',
                        }}>
                            <Typography 
                            component="li"
                            style={{
                                float: 'left',
                                width: '70px',
                                height: '25px',
                                padding: '5px 0',
                                border: '1px solid #004530',
                                borderRight: 'none',
                                borderRadius: '3px 0 0 3px',
                                fontSize: '14px',
                                textShadow: '0 1px #000',
                                background: 'linear-gradient(to bottom,#235061 0%,#142F4D 36%,#142F4D 41%)',
                                fontWeight: 'bold',
                                direction: 'ltr',
                                margin: 0,
                                fontFamily: 'inherit',
                                color: '#fff',
                            }}>SELECT</Typography>
                            <Typography 
                            component="li"
                            style={{
                                float: 'left',
                                width: '95px',
                                height: '25px',
                                padding: '5px 0',
                                fontSize: '14px',
                                color: '#fff',
                                textAlign: 'center',
                                border: '1px solid #004530',
                                borderRight: 'none',
                                textShadow: '0 1px #000',
                                background: 'linear-gradient(to bottom,#235061 0%,#142F4D 36%,#142F4D 41%)',
                                fontWeight: 'bold',
                                direction: 'ltr',
                                margin: 0,
                                fontFamily: 'inherit',
                            }}>PRIZE (BTC)</Typography>
                            <Typography 
                            component="li"
                            style={{
                                float: 'right',
                                width: '95px',
                                height: '25px',
                                padding: '5px 0',
                                fontSize: '14px',
                                color: '#fff',
                                textAlign: 'center',
                                border: '1px solid #004530',
                                borderRadius: '0 3px 3px 0',
                                background: 'linear-gradient(to bottom,#235061 0%,#142F4D 36%,#142F4D 41%)',
                                fontWeight: 'bold',
                                direction: 'ltr',
                                margin: 0,
                                fontFamily: 'inherit',
                                lineHeight: 1.6,
                                cursor: 'default',
                            }}>COST (BTC)</Typography>
                        </Typography>
                </Typography>
            </Typography>
        )
    }
}

export default JackpotTab;