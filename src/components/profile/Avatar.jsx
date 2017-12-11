import * as React from 'react';
import { AvatarImage } from './Avatar.styles'

export class Avatar extends React.Component {
    constructor() {
        super();
        this.state = {
            isUploadDisabled: true,
        }
    }

    toggleUploadButton() {
        if (document.getElementById('file').files.length === 1) {
            this.setState({isUploadDisabled: false})
        } else {
            this.setState({isUploadDisabled: true})
        }
    }


    onUpload() {
        this.props.onUpload(document.getElementById('file').files);
    }

    render() {
        return (
            <div>
                <AvatarImage
                    alt='Profile picture'
                    src={this.props.uri}
                    height={this.props.height}
                />
                <input id="file" type="file" onChange={() => this.toggleUploadButton()} />
                <br/>
                <button disabled={this.state.isUploadDisabled} onClick={() => this.onUpload()}>Upload</button>
            </div>
        )
    }
}