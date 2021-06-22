import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Switch from '@material-ui/core/Switch';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

import './Dashboard.css';

class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            online : false,
            volume : 50,
            quality : 'medium'
        }
    }

    onClickHandler = (event) => {

    }

    handleVolumeChange = (event) => {

    }

    handleQualityChange = (event) => {

    }
    
    render() {
        return (
            <div className="Dashboard">
                <Card className="cardContainer">
                    <CardContent>
                        <Typography variant="h5">Online Mode</Typography>
                        <Typography variant="body2">App connected to the internet?</Typography>
                    </CardContent>
                    <Switch onClick={this.onClickHandler} />
                </Card>
                <Card className="cardContainer">
                    <CardContent>
                        <Typography variant="h5">Master Volume</Typography>
                        <Typography variant="body2">Overrides all sound settings.</Typography>
                    </CardContent>
                    <Slider onChange={this.handleVolumeChange} defaultValue={50} valueLabelDisplay="auto" step={10} />
                </Card>
                <Card className="cardContainer">
                    <CardContent>
                        <Typography variant="h5">Sound Quality</Typography>
                        <Typography variant="body2">Manually control music quality.</Typography>
                    </CardContent>
                    <FormControl variant="filled">
                        <InputLabel className="inputLabel">Quality</InputLabel>
                        <Select className="qualityButton" onChange={this.handleQualityChange}>
                            <MenuItem value={10}>Low</MenuItem>
                            <MenuItem value={20}>Medium</MenuItem>
                            <MenuItem value={30}>High</MenuItem>
                        </Select>
                    </FormControl>
                </Card>
            </div>
        )
    }
}

export default Dashboard;