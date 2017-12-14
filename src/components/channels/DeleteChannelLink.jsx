import * as React from 'react';

class DeleteChannelLink extends React.Component {

    onClick(e) {
        e.preventDefault();
        if (window.confirm('Are you sure you want to remove ' + this.props.channelName + ' channel?')) {
            this.props.onClick(this.props.channelId);
        }
    }

    render() {
        return(
            <a href='#' onClick={(e) => this.onClick(e)}>
                Delete channel
            </a>
        )
    }

}

export { DeleteChannelLink };