import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { signin } from '../../actions/session_actions';
import { isUserSignedIn } from 'blockstack';

class SignIn extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (isUserSignedIn()) {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div id='signin' className='full flex-center'>
                <button onClick={ this.props.signin } className='btn primary-btn'>
                    Sign In With Blockstack
                </button>
            </div>
        );
    }
}

// const SignIn = props => {
//     const redirectIfSignedIn = () => {
//         if (isUserSignedIn()) {
//             props.history.push('/');
//         }
//     };
//     return (
//         <div id='signin' className='full flex-center'>
//             <button onClick={ props.signin } className='btn primary-btn'>
//                 Sign In With Blockstack
//             </button>
//         </div>
//     );
// };

const mapDispatchToProps = dispatch => ({
    signin: () => dispatch(signin())
});

export default withRouter(
    connect(null, mapDispatchToProps)(SignIn)
);
