import React from 'react';
import { withRouter } from 'react-router';

class Logo extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.history.push('/');
        this.forceUpdate();
    }

    render() {
        return (
            <img id='logo'
                className='btn'
                onClick={ this.handleClick }
                src='https://res.cloudinary.com/ddgtwtbre/image/upload/v1499820814/guild_logo-green_pl6kk1.png' />
        );
    }
}

export default withRouter(Logo);
