import React, { Component } from 'react'
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

//  Remove ugly input border bottom from Mui
const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
      },
    overrides: {
      MuiInput: {
        underline: {
          "&&&&:hover:before": {
            borderBottom: "1px solid rgba(255, 255, 255, 1)"
          }
        }
      }
    }
  });

class SearchForm extends Component {
    state = {
        name: ['Veganism'],
    };

    onSearchSubmit = function(e) {
        e.preventDefault();
        this.props.onSubmit();
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
            <form onSubmit={this.onSearchSubmit.bind(this)}>
                <MuiThemeProvider theme={theme}>
                    <FormControl>
                        <InputLabel htmlFor="location" className="input-label">Where ?</InputLabel>
                        <Input
                            placeholder="Location..."
                            id="location"
                            className="form-input"
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            id="datestart"
                            label="From..."
                            type="date"
                            defaultValue="2017-05-24"
                        />
                    </FormControl>
                    <FormControl>
                        <TextField
                            id="dateend"
                            label="To..."
                            type="date"
                            defaultValue="2017-05-24"
                        />
                    </FormControl>
                    <FormControl>
                        <InputLabel htmlFor="select-multiple-checkbox">Tag</InputLabel>
                        <Select
                            multiple
                            value={this.state.name}
                            onChange={this.handleChange}
                            input={<Input id="select-multiple-checkbox" />}
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
                    <Button variant={'contained'} type="submit" className="form-button">
                        SEARCH
                    </Button>
                </MuiThemeProvider>
            </form>
        )
    }
}

export default SearchForm;
