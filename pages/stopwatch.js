import React from "react";

class Stopwatch extends React.Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: Date.now() - this.state.timerTime
    });
    this.timer = setInterval(() => {
      this.setState({
        timerTime: Date.now() - this.state.timerStart
      });
    }, 10);
  };

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  };

  resetTimer = () => {
    this.setState({
      timerStart: 0,
      timerTime: 0
    });
  };

  render() {
    const { timerTime } = this.state;
    let centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return (
      <div className="stopwatch _wrapper">
        <div className="stopwatch__display">
          <span className="stopwatch__numbers">
            {hours} : {minutes} : {seconds} : {centiseconds}
          </span>
        </div>
        <div className="stopwatch__controls">
          {this.state.timerOn === false && this.state.timerTime === 0 && (
            <button id="stopwatch__button-start" onClick={this.startTimer}>
              <span>Start</span>
            </button>
          )}
          {this.state.timerOn === true && (
            <button id="stopwatch__button-stop" onClick={this.stopTimer}>
              <span>Stop</span>
            </button>
          )}
          {this.state.timerOn === false && this.state.timerTime > 0 && (
            <button id="stopwatch__button-resume" onClick={this.startTimer}>
              <span>Resume</span>
            </button>
          )}
          {this.state.timerOn === false && this.state.timerTime > 0 && (
            <button id="stopwatch__button-restart" onClick={this.resetTimer}>
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Stopwatch;
