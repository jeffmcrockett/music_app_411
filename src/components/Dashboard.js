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

    constructor(props) {
        super(props);
        this.state = {
            online: false,
            volume: 80,
            quality: 'medium'
        }
    }

    onClickHandler = (event) => {
        this.setState({ online : event.target.value })
    }

    handleVolumeChange = (event, volume) => {
        this.setState({ volume })
    }

    handleDragStop = () => {
        this.props.update(this.state.volume)
    }

    handleQualityChange = (event) => {
        this.setState({ quality : event.target.value })
    }

    render() {
        let warningText = '';
        if (this.state.volume >= 80) {
            warningText = "Warning! High volume can damage hearing"
        }
        return (
            <div className="Dashboard">
                <Card className="cardContainer">
                    <CardContent>
                        <Typography variant="h5">Online Mode</Typography>
                        <Typography variant="body2">App connected to the internet?</Typography>
                    </CardContent>
                    <Switch onClick={this.onClickHandler} value={this.state.online} />
                </Card>
                <Card className="cardContainer">
                    <CardContent>
                        <Typography variant="h5">Master Volume</Typography>
                        <Typography variant="body2">Overrides all sound settings.</Typography>
                    </CardContent>
                    <Slider onChange={this.handleVolumeChange} onDragStop={this.handleDragStop} defaultValue={50} valueLabelDisplay="auto" step={10} min={0} max={100} />
                </Card>
                <Card className="cardContainer">
                    <CardContent>
                        <Typography variant="h5">Sound Quality</Typography>
                        <Typography variant="body2">Manually control music quality.</Typography>
                    </CardContent>
                    <FormControl variant="filled">
                        <InputLabel className="inputLabel">Quality</InputLabel>
                        <Select className="qualityButton" onChange={this.handleQualityChange} value={this.state.quality}>
                            <MenuItem value={'Low'}>Low</MenuItem>
                            <MenuItem value={'Medium'}>Medium</MenuItem>
                            <MenuItem value={'High'}>High</MenuItem>
                        </Select>
                    </FormControl>
                </Card>
                {warningText}
            </div>
        )
    }
}

export default Dashboard;