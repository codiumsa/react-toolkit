import React from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions/login-actions';
import Login from '../Login';

class AuthenticationContainer extends React.Component {

    componentDidMount() {

        console.log('El usuario no esta autenticado, y se realizara verificacion de apikey')
        this.props.verifyApiKey();
    }

    render() {
        //console.log(`El match en render es: ${this.props.match.url}`);
        if (this.props.verifiedKey) {
            return <Login />
        } else {
            return <p>Cargando</p>;
        }

    }
}

const mapStateToProps = state => ({
    verifiedKey: state.login.verifiedKey
})

const mapDispatchToProps = dispatch => ({
    verifyApiKey: () => dispatch(actions.verifyApiKey()),
})

AuthenticationContainer = connect(mapStateToProps, mapDispatchToProps)(AuthenticationContainer);
export default AuthenticationContainer;