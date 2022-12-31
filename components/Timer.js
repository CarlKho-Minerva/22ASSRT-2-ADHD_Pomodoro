import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TimerText = styled.h1`
  font-size: 72px;
  font-weight: bold;
  color: #333;
`;

const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  background-color: #333;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  cursor: pointer;
`;

class Timer extends React.Component {
  state = {
    time: 1500, // initial time in seconds (25 minutes)
    isRunning: false
  };

  componentDidMount() {
    this.interval = setInterval(this.tick, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick = () => {
    if (this.state.isRunning) {
      this.setState(prevState => ({ time: prevState.time - 1 }));
    }
  }

  startTimer = () => {
    this.setState({ isRunning: true });
  }

  stopTimer = () => {
    this.setState({ isRunning: false });
  }

  resetTimer = () => {
    this.setState({ time: 1500, isRunning: false });
  }

  render() {
    const { time, isRunning } = this.state;
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return (
      <Container>
        <TimerText>{minutes}:{seconds < 10 ? `0${seconds}` : seconds}</TimerText>
        <div>
          <Button onClick={this.startTimer} disabled={isRunning}>Start</Button>
          <Button onClick={this.stopTimer} disabled={!isRunning}>Stop</Button>
          <Button onClick={this.resetTimer} disabled={!isRunning}>Reset</Button>
        </div>
      </Container>
    );
  }
}

export default Timer;