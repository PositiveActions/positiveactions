import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

class EventForm extends Component {

    state = {
        name: ['Veganism']
    }

    handleChange = event => {
        this.setState({ name: event.target.value });
    };

    render() {
        const names = [
            'Veganism',
            'Domestic Waste',
            'Clean Energy'
        ];

        const ITEM_HEIGHT = 48;
        const ITEM_PADDING_TOP = 8;
        const MenuProps = {
            PaperProps: {
                style: {
                    maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                    width: 250,
                },
            },
        };

        return (
            <div className="event-form-container">
                <div className="event-form-title">
                    Register an event
                </div>
                <div className="form-container">
                    <form>
                        <div className="event-details">
                            <div className="event-details-title">
                                Event details
                            </div>
                            <div className="event-details-form">
                                <div className="row">
                                    <FormControl>
                                        <TextField
                                            id="title"
                                            label="Event title"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel htmlFor="category">Category</InputLabel>
                                        <Select
                                            multiple
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            input={<Input id="category" />}
                                            renderValue={selected => selected.join(', ')}
                                            MenuProps={MenuProps}
                                        >
                                            {names.map(name => (
                                                <MenuItem key={name} value={name}>
                                                    <Checkbox checked={this.state.name.indexOf(name) > -1} />
                                                    <ListItemText primary={name} />
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <FormControl>
                                        <TextField
                                            label="Location"
                                            id="location"
                                        />
                                    </FormControl>
                                </div>
                                <div className="row">
                                    <FormControl>
                                        <TextField
                                            id="name"
                                            label="Event description"
                                            multiline
                                            rows="4"
                                        />
                                    </FormControl>
                                </div>
                                <div className="row">
                                    <FormControl>
                                        <TextField
                                            id="datestart"
                                            label="From"
                                            type="date"
                                            defaultValue="2017-05-24"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <TextField
                                            id="dateend"
                                            label="To"
                                            type="date"
                                            defaultValue="2017-05-24"
                                        />
                                    </FormControl>
                                    <FormControl>
                                        <Input
                                            placeholder="Fees"
                                            id="fees"
                                            className="form-input"
                                        />
                                    </FormControl>
                                </div>
                            </div>
                        </div>
                        <div className="about-you">
                            <div className="about-you-title">
                                About you
                            </div>
                            <div className="about-you-content">
                                <FormControl>
                                    <TextField
                                        id="name"
                                        label="Event title"
                                        margin="normal"
                                        variant="outlined"
                                        fullWidth
                                    />
                                </FormControl>
                                <FormControl>
                                    <TextField
                                        id="name"
                                        label="Event description"
                                        margin="normal"
                                        variant="outlined"
                                        multiline
                                        rows="4"
                                    />
                                </FormControl>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default EventForm;
