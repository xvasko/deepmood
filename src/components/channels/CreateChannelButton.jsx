import * as React from 'react';
import { StyledButton } from './CreateChannelButton.styles'

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
            <StyledButton onClick={() => this.onClick()}>
                +
            </StyledButton>
        )
    }

}

export { CreateChannelButton };