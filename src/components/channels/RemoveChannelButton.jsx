import * as React from 'react';

class RemoveChannelButton extends React.Component {

    onClick() {
        if (window.confirm('Are you sure you want to remove ' + this.props.channelName + ' channel?')) {
            this.props.onClick(this.props.channelId);
        }
    }

    render() {
        return(
            <button onClick={() => this.onClick()}>
                x
            </button>
        )
    }

}

export { RemoveChannelButton };