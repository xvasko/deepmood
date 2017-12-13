import * as React from 'react';

class Error extends React.PureComponent {
    _onClick = () => this.props.onClick(this.props.error.id);

    render()
    {
        return (<div
                className="alert alert-danger alert-dismissible text-center"
                role="alert"
            >
                <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    aria-label="Close"
                    onClick={this._onClick}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <strong>Oh snap!</strong>
                &nbsp;
                {this.props.error.message}
            </div>
        );
    }
}

const Errors = ({ errors, onDismissClick }) => (
    (errors || [])
    && errors.map(error => (
        <Error key={error.id} error={error} onClick={onDismissClick} />
    ))
);

export { Errors };