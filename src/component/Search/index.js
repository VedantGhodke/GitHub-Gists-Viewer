import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        };

        this.submit = this.submit.bind(this);
    }

    update(text) {
        this.setState({ text })
    }

    submit(event) {
        event.preventDefault();

        const { fn } = this.props;
        return fn(this.state.text);
    }

    render() {
        const { text } = this.state;
        const { disabled } = this.props;

        return <div className="search-box">
            <form onSubmit={this.submit}>
                <input type="text" ref={input => input && input.focus()}
                       disabled={disabled} placeholder="Type username here"
                       value={text} onChange={event => this.update(event.target.value)}/>
                <input type="submit" disabled={disabled} value="Search"/>
            </form>
        </div>
    }
}

Search.propTypes = {
    disabled: PropTypes.bool,
    fn: PropTypes.func,
};