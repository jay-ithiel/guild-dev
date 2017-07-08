import { signin, signout } from '../util/blockstack_auth';
import {
    SIGNIN,
    SIGNOUT,
    receiveCurrentUser,
    receiveErrors
} from '../actions/session_actions';

const SessionMiddleware = ({ getState, dispatch }) => next => action => {
    switch(action.type) {
        case SIGNIN:
            signin();
            return next(action);

        case SIGNOUT:
            signout();
            return next(action);

        default:
            return next(action);
    }
};

export default SessionMiddleware;
