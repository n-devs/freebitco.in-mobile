import React from 'react';
import Container from '@material-ui/core/Container';
// import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconLogo from '../components/IconLogo';



class Start extends React.Component {
    render() {
        return (
            <React.Fragment>
                {/* <CssBaseline /> */}
                <Container
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-around',
                        overflow: 'hidden',
                        padding: 0,
                    }}>
                    <Typography
                        component="div"
                        style={{
                            backgroundColor: 'rgb(17, 17, 17)',
                            height: '100vh',
                            width: '100vh'
                        }} >

                        <Typography
                            component="h1"
                            style={{
                                textAlign: "center",
                                marginTop: "45vh"
                            }}>

                            <IconLogo />
                        </Typography>
                    </Typography>
                </Container>
            </React.Fragment>
        )
    }
}

export default Start;