import React from 'react';
import Typography from '@material-ui/core/Typography';

class MaxProfitPerBet extends React.Component {
    render() {
        return (
            <Typography
                component="div"
                style={{
                    width: '280px',
                    marginLeft: '-0.9375em',
                    marginRight: '-0.9375em',
                    marginTop: 0,
                    marginBottom: 0,
                    maxWidth: 'none',
                }}
            >
                <Typography
                    component="p"
                    style={{
                        background: 'linear-gradient(to bottom,#235061 0%,#142F4D 36%,#142F4D 41%)',
                        textShadow: '0 1px #000',
                        maxWidth: '250px!important',
                        padding: '5px 0',
                        marginBottom: '0!important',
                        borderRadius: '5px 5px 0 0',
                        fontWeight: 'bold',
                        marginTop: '3.6em',
                        textAlign: 'center',
                        color: '#fff'
                    }}
                >MAX PROFIT PER BET</Typography>
                <Typography
                    component="p"
                    style={{
                        height: '25px',
                        border: '1px solid #004530',
                        borderRadius: '3px 0 0 3px',
                        textShadow: '0 1px #000',
                        background: 'rgba(0,0,0,.3)',
                        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.2), 0 1px 0 rgba(255,255,255,.1)',
                        textAlign: 'center',
                        width: '250px!important',
                        padding: '5px 0',
                        color: '#feba00',
                        marginTop: '0!important',
                        marginBottom: '0!important',
                        fontWeight: 'bold',
                        fontFamily: 'inherit',
                        // fontWeight: '400',
                        fontSize: '1em',
                        lineHeight: 1.6,
                        textRendering: 'optimizeLegibility'
                    }}
                >20 BTC</Typography>
            </Typography>
        )
    }
}

export default MaxProfitPerBet;