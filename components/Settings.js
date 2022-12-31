import React from 'react';

class Settings extends React.Component {
  state = {
    pomodoroDuration: 25,
    breakDuration: 5
  }

  handleDurationChange = (event, type) => {
    const newDuration = parseInt(event.target.value, 10);
    this.setState(prevState => ({
      [type]: newDuration
    }));
  }

  render() {
    return (
      <div className="settings">
        <div className="setting">
          <label htmlFor="pomodoro-duration">Pomodoro duration (minutes):</label>
          <input
            type="range"
            id="pomodoro-duration"
            min="25"
            max="60"
            value={this.state.pomodoroDuration}
            onChange={event => this.handleDurationChange(event, 'pomodoroDuration')}
          />
          <span className="value">{this.state.pomodoroDuration}</span>
        </div>
        <div className="setting">
          <label htmlFor="break-duration">Break duration (minutes):</label>
          <input
            type="range"
            id="break-duration"
            min="5"
            max="15"
            value={this.state.breakDuration}
            onChange={event => this.handleDurationChange(event, 'breakDuration')}
          />
          <span className="value">{this.state.breakDuration}</span>
        </div>
      </div>
    );
  }
}

export default Settings;