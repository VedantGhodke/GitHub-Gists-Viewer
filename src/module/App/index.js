import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { searchAsync } from './action';

import Search from '../../component/Search';
import Gist from '../../component/Gist';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.search = this.search.bind(this);
    }

    search(user) {
        const { search: fn } = this.props;
        return fn(user);
    }

    render() {
        const { isLoading, data = [], requested, error } = this.props;

        return <div className="container">
            <Search fn={this.search} disabled={isLoading}/>
            {
                isLoading
                    ? <p className="message">please wait</p>
                    :
                    <div>
                        {data.length > 0 && data.map(gist => <Gist src={gist}/>)}
                        {requested && error === null && data.length === 0 && <p className="message">no gists found</p>}
                        {error !== null && data.length === 0 && <p className="message">{error.message || "something went wrong"}</p>}
                    </div>
            }
        </div>
    }
}

const mapStateToProps = ({ app }) => ({ ...app });

const mapDispatchToProps = dispatch => bindActionCreators({
    search: (user) => searchAsync(user),
}, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);