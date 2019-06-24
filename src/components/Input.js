import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { makeStyles } from '@material-ui/core/styles';

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {

        const classes = useStyles;
        
        return (
            <Paper
                className={classes.root}
                style={{
                    background: 'rgba(0, 0, 0, 0.3)',
                    width: '100%',
                    marginBottom: '5vh',
                    boxShadow: 'inset 0 1px 1px rgba(0,0,0,.2), 0 1px 0 rgba(255,255,255,.1)'
                }}
                elevation={0}
            >
                <InputBase
                    type={this.props.type}
                    onChange={this.props.onChange}
                    placeholder={this.props.placeholder}
                    style={{
                        fontFamily: "'Prosto One',cursive",
                        width: 'inherit',
                        color: '#ffffffb0',
                        padding: '1px 10px'
                    }}
                    value={this.props.value}
                />
            </Paper>
        )
    }
}

const useStyles = makeStyles({
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

export default Input;