import * as React from 'react';
import { AvatarImage } from './Avatar.styles'

export class Avatar extends React.Component {
    onUpload() {
        console.log(document.getElementById('file').files);
        this.props.onUpload(document.getElementById('file').files);
    }

    render() {
        return (
            <div>
                <AvatarImage
                    alt='Profile picture'
                    src={this.props.uri}
                />
                <input id="file" type="file" />
                <br/>
                <button onClick={() => this.onUpload()}>Upload</button>
            </div>
        )
    }
}