import * as React from 'react';

class CreateChannelButton extends React.Component {

    onClick() {
        var name = window.prompt('Channel name', '');

        if (name == null) {
            return;
        } else if (name == '') {
            window.alert('Invalid channel name')
        } else {
            this.props.onClick(name);
        }
    }

    render() {
        return(
            <button onClick={() => this.onClick()}>
                Create new channel!
            </button>
        )
    }

}

export { CreateChannelButton };