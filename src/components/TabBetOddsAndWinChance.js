import React from 'react';
import { Typography, Link } from '@material-ui/core';

class TabBetOddsAndWinChance extends React.Component {
    render() {
        return (
            <Typography
                component="div"
                style={{
                    marginTop: '10px',
                    width: '280px',
                    margin: '0 -.9375em',
                    maxWidth: 'none',
                    padding: 0,
                    direction: 'ltr',
                }}
            >
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
                        padding: 0,
                        direction: 'ltr',
                        margin: 0,
                    }}
                >
                    <Typography
                        component="li"
                        style={{
                            marginRight: '10px',
                            width: '110px',
                            float: 'left',
                            height: '25px',
                            background: 'linear-gradient(to bottom,#235061 0%,#142F4D 36%,#142F4D 41%)',
                            fontWeight: 700,
                            direction: 'ltr',
                            border: '1px solid #004530',
                            borderRadius: '3px 3px 0 0',
                            fontSize: '14px',
                            padding: '7px 6px',
                            textShadow: '0 1px #000',
                            borderBottom: 'none',
                            color: '#fff'
                        }}
                    >BET ODDS 
                    <Link style={{
                            color: '#fff',
                            border: '1px solid #fff',
                            borderRadius: '50%',
                            padding: '0 4px',
                            fontSize: '10px',
                            textDecoration: 'none',
                            lineHeight: 'inherit',
                        }}>?
                        {/* <Typography component="span">Enter a value between 1.01 and 4750.00</Typography> */}
                        </Link>
                    </Typography>
                    <Typography
                        component="li"
                        style={{
                            width: '130px',
                            float: 'left',
                            height: '25px',
                            border: '1px solid #004530',
                            borderRadius: '3px 3px 0 0',
                            fontSize: '14px',
                            padding: '7px 6px',
                            textShadow: '0 1px #000',
                            borderBottom: 'none',
                            background: 'linear-gradient(to bottom,#235061 0%,#142F4D 36%,#142F4D 41%)',
                            margin: 0,
                            fontWeight: 700,
                            direction: 'ltr',
                            color: '#fff'
                        }}>WIN CHANCE 
                        <Link style={{
                            color: '#fff',
                            border: '1px solid #fff',
                            borderRadius: '50%',
                            padding: '0 4px',
                            fontSize: '10px',
                            textDecoration: 'none',
                            lineHeight: 'inherit',
                        }}>?
                        {/* <Typography component="span">Enter a value between 1.01 and 4750.00</Typography> */}
                        </Link>
                    </Typography>
                </Typography>
            </Typography>
        )
    }
}

export default TabBetOddsAndWinChance;