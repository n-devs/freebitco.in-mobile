import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle, faVolumeUp, faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'



class Captcha extends React.Component {

    render() {
        const classes = useStylesCaptcha;
        return (
            <Typography
                component="div"
                style={{
                    padding: 0,
                    position: 'relative',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    marginBottom: '4vh',
                    float: 'none !important',
                    width: '100%'
                }}>
                <Typography
                    component="div"
                    style={{
                        width: '290px',
                        height: 'auto',
                        margin: 'auto',
                        borderRadius: '5px',
                    }}>
                    <Typography
                        component="p"
                        style={{
                            borderBottom: 'none',
                            margin: 0,
                            padding: '8px 0',
                            borderRadius: '5px 5px 0 0',
                            background: '#002b3a',
                            color: '#ffe766',
                            fontSize: '15px',
                            fontWeight: '700',
                            border: '1px solid #011f29',
                            textAlign: 'center'
                        }} >PLEASE ENTER CAPTCHA</Typography>
                    <Typography
                        component="div"
                        style={{
                            width: '240px',
                            height: '82px',
                            border: '1px solid #ccc',
                            borderBottom: 'none',
                            float: 'left',
                        }}>
                        <Typography
                            component="img"
                            src="//captchas.freebitco.in/botdetect/e/live/index.php?random=ARwtRqOOguNxBoUOhTSN7HipgMMfiCTx"
                            onError=""
                            style={{
                                maxWidth: '100%',
                                height: 'auto'
                            }} />
                    </Typography>
                    <InputBase
                        type="hidden"
                        value=""
                    />
                    <Typography
                        component="div"
                        style={{
                            width: ' 47px',
                            height: '82px',
                            borderRight: '1px solid #0a9c3b',
                            float: 'left',
                        }}>
                        <Typography
                            component="p"
                            style={{
                                height: '28px',
                                margin: 0,
                                boxShadow: 'inset 0 1px 0 0 #b7eac8',
                                background: 'linear-gradient(to bottom,#40ff7f 5%,#2EB85C 100%)',
                                backgroundColor: '#2eb85c',
                                borderBottom: '1px solid #0a9c3b',
                                cursor: 'pointer',
                                textAlign: "center"
                            }}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            <Typography
                                component="span"
                                style={{
                                    width: 0,
                                    height: 0,
                                    borderLeft: '8px solid transparent',
                                    borderRight: '8px solid transparent',
                                    borderBottom: '8px solid #e6ac00',
                                    position: 'absolute',
                                    marginTop: '16px',
                                    marginLeft: '-14px',
                                    display: 'none',
                                }}></Typography>
                            <Typography
                                component="span"
                                style={{
                                    width: 0,
                                    height: 0,
                                    borderLeft: '6px solid transparent',
                                    borderRight: '6px solid transparent',
                                    borderBottom: '6px solid #fc3',
                                    position: 'absolute',
                                    marginTop: '18px',
                                    marginLeft: '-12px',
                                    display: 'none',
                                    zIndex: '999',
                                }}></Typography>
                            <Typography
                                component="span"
                                style={{
                                    fontWeight: 400,
                                    textAlign: 'left',
                                    position: 'absolute',
                                    zIndex: 99,
                                    backgroundColor: '#fc3',
                                    padding: '5px',
                                    border: '1px solid #e6ac00',
                                    width: '320px',
                                    borderRadius: '4px',
                                    marginTop: '23px',
                                    marginLeft: '-180px',
                                    display: 'none',
                                    fontSize: '14px',
                                }}>Please enter the letters that you see in the box below</Typography>
                        </Typography>
                        <Typography
                            component="p"
                            title="Captcha Audio"
                            onClick=""
                            style={{
                                height: '27px',
                                margin: 0,
                                boxShadow: 'inset 0 1px 0 0 #b7eac8',
                                background: 'linear-gradient(to bottom,#40ff7f 5%,#2EB85C 100%)',
                                backgroundColor: '#2eb85c',
                                borderBottom: '1px solid #0a9c3b',
                                cursor: 'pointer',
                                textAlign: "center"
                            }}>
                            <FontAwesomeIcon icon={faVolumeUp} />
                        </Typography>
                        <Typography
                            component="p"
                            onClick=""
                            style={{
                                height: '27px',
                                margin: 0,
                                boxShadow: 'inset 0 1px 0 0 #b7eac8',
                                background: 'linear-gradient(to bottom,#40ff7f 5%,#2EB85C 100%)',
                                backgroundColor: '#2eb85c',
                                borderBottom: '1px solid #0a9c3b',
                                cursor: 'pointer',
                                textAlign: "center"
                            }}>
                            <FontAwesomeIcon icon={faSyncAlt} />
                        </Typography>
                    </Typography>
                    <Paper
                        className={classes.root}
                        style={{
                            background: 'rgba(0, 0, 0, 0.3)',
                            width: '100%',
                            boxShadow: 'inset 0 1px 1px rgba(0,0,0,.2), 0 1px 0 rgba(255,255,255,.1)'
                        }}
                        elevation={0}
                    >
                        <InputBase
                            type="text"
                            placeholder="Enter captcha here"
                            style={{
                                padding: '0px 10px',
                                fontFamily: "'Prosto One',cursive",
                                width: 'inherit',
                                textAlign: 'center',
                                fontSize: '14px!important',
                                fontWeight: ' bold!important:',
                                color: '#ffffffb0'
                            }}
                        />
                    </Paper>
                </Typography>
            </Typography>
        )
    }
}

const useStylesCaptcha = makeStyles({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: 8,
        flex: 1,
    },
});

library.add(faInfoCircle, faVolumeUp, faSyncAlt)

export default Captcha;