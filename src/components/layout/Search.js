import React, { Component } from 'react';

import SearchForm from '../elements/SearchForm';

class Search extends Component {

    constructor (props){
        super(props);
        this.props = props;
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler = () => {
        this.props.history.push('/')
    }

    render() {
        return (
            <div className="search-container">
                <SearchForm onSubmit={this.submitHandler}/>
            </div>
        )
    }
}

export default Search;
