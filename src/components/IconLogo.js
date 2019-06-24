import React from 'react';
import Typography from '@material-ui/core/Typography';

class IconLogo extends React.Component {

    render() {

        var h = window.innerHeight;
        var fsize
        if (this.props.size !== undefined) {
            fsize = this.props.size
        } else {
            fsize = (4 * h) / 100
        }

        return (
            <Typography
                component="div"
                style={{
                    fontFamily: "'Prosto One',cursive",
                    fontWeight: "bold",
                    color: "#00CCFF",
                    display: "block",
                    fontSize: `${fsize}px`,
                }}>
                <Typography
                    component="span"
                    style={{
                        fontFamily: "'Prosto One',cursive",
                        fontWeight: "bold",
                        fontSize: `${fsize}px`,
                        color: "#97FF6B"
                    }}
                >free</Typography>bitcoin
            </Typography>
        )
    }
}

export default IconLogo;