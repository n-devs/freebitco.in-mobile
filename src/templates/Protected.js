import React from 'react';
import Game from './Game'
import AppBarGame from '../components/AppBarGame'

class Protected extends React.Component {

    render() {

        return (
            <React.Fragment>
                <AppBarGame />
                <Game/>
            </React.Fragment>
        )
    }
}

export default Protected;