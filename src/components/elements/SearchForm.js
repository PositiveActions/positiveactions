import React, { Component } from 'react'
import M from 'materialize-css/dist/js/materialize';

class SearchForm extends Component {

    onSearchSubmit = function(e) {
        e.preventDefault();
        this.props.onSubmit();
    }

    render() {

        //  Materialize functions
        M.updateTextFields();
        document.addEventListener('DOMContentLoaded', function () {
            const elemsDatePicker = document.querySelectorAll('.datepicker');
            M.Datepicker.init(elemsDatePicker);

            const elemsSelect = document.querySelectorAll('select');
            M.FormSelect.init(elemsSelect);
        });


        return (
            <form onSubmit={this.onSearchSubmit.bind(this)}>
                <div className="row">
                    <div className="input-field col s3">
                        <input
                            name="location"
                            type="text"
                            placeholder="Location"
                        />
                        <label htmlFor="location">Where ?</label>
                    </div>
                    <div className="input-field joined-inputs col s3">
                        <input
                            name="datesFrom"
                            type="text"
                            placeholder="From"
                            className="datepicker inline-input"
                        />
                        <input
                            name="datesTo"
                            type="text"
                            placeholder="To"
                            className="datepicker inline-input"
                        />
                        <label htmlFor="datesFrom">When ?</label>
                    </div>
                    <div className="input-field col s3">
                        <select multiple>
                            {/* <option value="" selected disabled>Categories</option> */}
                            <option value="1" selected>Veganism</option>
                            <option value="2">Domestic waste</option>
                            <option value="3">Forest protection</option>
                        </select>
                        <label>What ?</label>
                    </div>
                    <div className="col s2 search-button-container">
                        <button className="btn waves-effect waves-light" type="submit">Search</button>
                    </div>
                </div>
            </form>
        )
    }
}

export default SearchForm;
