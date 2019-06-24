import React from 'react';
import { Typography } from '@material-ui/core';

class JackpotInput extends React.Component {
    render() {
        return (
            <Typography
                component="div"
                style={{
                    width: '264px',
                    margin: '0 -.9375em',
                    maxWidth: 'none',
                    textAlign: 'center',
                    padding: 0,
                    direction: 'ltr',
                }}>
                <Typography component="center">
                    <Typography
                        component="ul"
                        style={{
                            marginBottom: '1px',
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
                            boxSizing: 'border-box',
                            color: '#fff',
                        }}>
                        <Typography
                            component="li"
                            style={{
                                float: 'left',
                                width: '71px',
                                height: '35px',
                                padding: '5px 0',
                                border: '1px solid #004530',
                                borderRight: 'none',
                                borderRadius: '3px 0 0 3px',
                                fontSize: '14px',
                                textShadow: '0 1px #000',
                                background: 'rgba(0,0,0,.3)',
                                boxShadow: 'inset 0 1px 1px rgba(0,0,0,.2), 0 1px 0 rgba(255,255,255,.1)',
                                fontWeight: 700,
                                margin: 0,
                                direction: 'ltr',
                                boxSizing: 'border-box',
                                color: '#fff',
                            }}>
                            <Typography component="center">
                                <Typography
                                    component="input"
                                    type="checkbox"
                                    value={this.props.select}
                                    style={{
                                        margin: '0 0 1em'
                                    }}></Typography>
                                <Typography
                                    component="span"
                                    style={{
                                        color: '#fff',
                                        fontWeight: 700,
                                        fontSize: '14px',
                                        textShadow: '0 1px #000',
                                    }}></Typography>
                            </Typography>
                        </Typography>
                    </Typography>
                    <Typography
                        component="li"
                        style={{
                            listStyle: 'none',
                            float: 'left',
                            width: '96px',
                            height: '35px',
                            padding: '5px 0',
                            fontSize: '14px',
                            color: '#feba00',
                            textAlign: 'center',
                            border: '1px solid #004530',
                            borderRight: 'none',
                            background: 'rgba(0,0,0,.3)',
                            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.2), 0 1px 0 rgba(255,255,255,.1)',
                            textShadow: '0 1px #000',
                            fontWeight: 700,
                            margin: 0,
                            direction: 'ltr',
                            boxSizing: 'border-box',
                        }}>
                        <Typography component="center">{this.props.prize}</Typography>
                    </Typography>
                    <Typography
                        component="li"
                        style={{
                            listStyle: 'none',
                            float: 'right',
                            width: '97px',
                            height: '35px',
                            padding: '5px 0',
                            fontSize: '14px',
                            color: '#feba00',
                            textAlign: 'center',
                            border: '1px solid #004530',
                            borderRadius: '0 3px 3px 0',
                            background: 'rgba(0,0,0,.3)',
                            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.2), 0 1px 0 rgba(255,255,255,.1)',
                            textShadow: '0 1px #000',
                            fontWeight: 700,
                            margin: 0,
                            direction: 'ltr',
                            boxSizing: 'border-box',
                        }}>
                        <Typography component="center">{this.props.cost}</Typography>
                    </Typography>
                </Typography>
            </Typography>
        )
    }
}

export default JackpotInput;