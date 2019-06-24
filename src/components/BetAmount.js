import React from 'react';
import { Typography } from '@material-ui/core';

class BetAmount extends React.Component {
    state = { value: '1.000000' }
    render() {
        return (
            <Typography
                component="div"
                style={{ width: '280px' }}
            >
                <Typography
                    component="ul"
                    style={{
                        listStyle: 'none',
                        textAlign: 'center',
                        fontSize: '1em',
                        lineHeight: '1.6',
                        marginBottom: '1.25em',
                        listStylePosition: 'outside',
                        fontFamily: 'inherit',
                        // margin: '0',
                        padding: '0',
                        direction: 'ltr',
                    }}
                >
                    <Typography
                        component="li"
                        style={{
                            margin: '0',
                            padding: '4px 10px',
                            marginRight: '1px',
                            background: 'linear-gradient(to bottom,#235061 0%,#142F4D 36%,#142F4D 41%)',
                            float: 'left',
                            border: '1px solid #004530',
                            borderRadius: '3px 3px 0 0',
                            fontSize: '14px',
                            textShadow: '0 1px #000',
                            fontWeight: '700',
                            color: '#fff',
                            // borderBottom: 0,
                        }}
                    >BET AMOUNT</Typography>
                    <Typography
                        component="li"
                        style={{
                            margin: '0',
                            padding: '3px 8px',
                            marginRight: '1px',
                            background: 'rgba(0,0,0,.3)',
                            // borderBottom: 0,
                            float: 'left',
                            border: '1px solid #004530',
                            borderRadius: '3px 3px 0 0',
                            fontSize: '14px',
                            textShadow: '0 1px #000',
                            lineHeight: 1.6,
                            fontFamily: 'inherit',
                            fontWeight: '700',
                            color: '#fff'
                        }}
                    >/2</Typography>
                    <Typography
                        component="li"
                        style={{
                            margin: '0',
                            padding: '3px 8px',
                            marginRight: '1px',
                            background: 'rgba(0,0,0,.3)',
                            // borderBottom: 0,
                            float: 'left',
                            border: '1px solid #004530',
                            borderRadius: '3px 3px 0 0',
                            fontSize: '14px',
                            textShadow: '0 1px #000',
                            lineHeight: 1.6,
                            fontFamily: 'inherit',
                            fontWeight: '700',
                            color: '#fff'
                        }}
                    >2x</Typography>
                    <Typography
                        component="li"
                        style={{
                            margin: '0',
                            padding: '3px 8px',
                            marginRight: '1px',
                            background: 'rgba(0,0,0,.3)',
                            // borderBottom: 0,
                            float: 'left',
                            border: '1px solid #004530',
                            borderRadius: '3px 3px 0 0',
                            fontSize: '14px',
                            textShadow: '0 1px #000',
                            lineHeight: 1.6,
                            fontFamily: 'inherit',
                            fontWeight: '700',
                            color: '#fff'
                        }}
                    >MIN</Typography>
                    <Typography
                        component="li"
                        style={{
                            margin: '0',
                            padding: '3px 8px',
                            marginRight: '1px',
                            background: 'rgba(0,0,0,.3)',
                            // borderBottom: 0,
                            float: 'left',
                            border: '1px solid #004530',
                            borderRadius: '3px 3px 0 0',
                            fontSize: '14px',
                            textShadow: '0 1px #000',
                            lineHeight: 1.6,
                            fontFamily: 'inherit',
                            fontWeight: '700',
                            color: '#fff'
                        }}
                    >MAX</Typography>
                </Typography>
                <Typography
                    component="input"
                    type="text"
                    style={{
                        fontFamily: 'inherit',
                        margin: '1px 0 1em',
                        padding: '.5em',
                        height: '2.3125em',
                        boxSizing: 'border-box',
                        fontWeight: '700',
                        transition: 'box-shadow .45s,border-color .45s ease-in-out',
                        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.2),0 1px 0 rgba(255,255,255,.1)',
                        background: 'rgba(0,0,0,.3)',
                        textShadow: '0 1px #000',
                        borderTop: '.5px solid #246954',
                        fontSize: '14px',
                        color: '#feba00',
                        width: '280px',
                        textAlign: 'center',
                        border: '1px solid #004530',
                        borderRadius: '0 0 3px 3px',
                    }}
                    value={this.state.value}
                />
            </Typography>
        )
    }
}

export default BetAmount;