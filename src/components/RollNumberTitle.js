import React from 'react';
import { Typography } from '@material-ui/core';

class RollNumberTitle extends React.Component {
    render() {
        return (
            <Typography
                component="p"
                style={{
                    color:'#fff',
                    textShadow: '0 1px #000',
                    fontWeight: 'bold',
                    marginTop: '0.6em',
                    marginBottom: '0.6em',
                    textAlign: 'center',
                    fontFamily: 'inherit',
                    fontSize: '1em',
                    lineHeight: '1.6',
                    textRendering: 'optimizeLegibility',
                    // margin: 0,
                    padding: 0,
                    direction: 'ltr',
                    boxSizing: 'border-box'

                }}>Roll number <Typography 
                component="b"
                 style={{
                    color: '#feba00',
                    textShadow: '0 1px #000',
                    fontWeight: 'bold',
                    marginTop: '0.6em',
                    marginBottom: '0.6em',
                    textAlign: 'center',
                    fontFamily: 'inherit',
                    fontSize: '1em',
                    lineHeight: '1.6',
                    textRendering: 'optimizeLegibility',
                    margin: 0,
                    padding: 0,
                    direction: 'ltr',
                    boxSizing: 'border-box'
                 }}>8888</Typography> to win the jackpots!</Typography>
        )
    }
}

export default RollNumberTitle;