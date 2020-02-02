import React from "react";
import PlusIcon from "../public/static/icons/noun_plus--white.svg";
import MinusIcon from "../public/static/icons/noun_minus--white.svg";

class Timer extends React.Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
    timerEnd: false,
    disableButtons: false
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        this.setState( {timerEnd: true });
        this.setState({ disableButtons: true })
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    if (this.state.timerOn === false) {
      this.setState({
        timerStart: 0,
        timerTime: 0,
        timerEnd: false,
        disableButtons: false
      });
    }
  };

  adjustTimer = input => {
    const { timerTime, timerOn } = this.state;
    const max = 216000000;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < max) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < max) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < max) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
      <div className="timer _wrapper">
        <div className="timer__display">
          <div className="timer__label">
            <span>Hours</span>
            <span>:</span>
            <span>Minutes</span>
            <span>:</span>
            <span>Seconds</span>
          </div>
          <div className="timer__increment-buttons">
            <button onClick={() => this.adjustTimer("incHours")} className={`${this.state.disableButtons ? 'hidden' : 'visible'}`}>
              <img className="timer__icon plus" src={PlusIcon} />
            </button>
            <button onClick={() => this.adjustTimer("incMinutes")} className={`${this.state.disableButtons ? 'hidden' : 'visible'}`}>
              <img className="timer__icon plus" src={PlusIcon} />
            </button>
            <button onClick={() => this.adjustTimer("incSeconds")} className={`${this.state.disableButtons ? 'hidden' : 'visible'}`}>
              <img className="timer__icon plus" src={PlusIcon} />
            </button>
          </div>
          <div className="timer__numbers-container">
            <span className={`timer__numbers ${this.state.timerEnd ? "finished" : ''}`}>
              {hours} : {minutes} : {seconds}
            </span>
          </div>
          <div className="timer__decrement-buttons">
            <button onClick={() => this.adjustTimer("decHours")} className={`${this.state.disableButtons ? 'hidden' : 'visible'}`}>
              <img className="timer__icon minus" src={MinusIcon} />
            </button>
            <button onClick={() => this.adjustTimer("decMinutes")} className={`${this.state.disableButtons ? 'hidden' : 'visible'}`}>
              <img className="timer__icon minus" src={MinusIcon} />
            </button>
            <button onClick={() => this.adjustTimer("decSeconds")} className={`${this.state.disableButtons ? 'hidden' : 'visible'}`}>
              <img className="timer__icon minus" src={MinusIcon} />
            </button>
          </div>
        </div>
        <div className="timer__controls">
          {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
            <button id="timer__button-start" onClick={this.startTimer}>
              <span className="timer__controls-button">Start</span>
            </button>
          )}
          {timerOn === true && timerTime >= 1000 && (
            <button id="timer__button-stop" onClick={this.stopTimer}>
              <span>Stop</span>
            </button>
          )}
          {timerOn === false &&
            timerStart !== 0 &&
            timerStart !== timerTime &&
            timerTime !== 0 && (
              <button id="timer__button-resume" onClick={this.startTimer}>
                <span>Resume</span>
              </button>
            )}
          {(timerOn === false || timerTime < 1000) &&
            timerStart !== timerTime &&
            timerStart > 0 && (
              <button id="timer__button-restart" onClick={this.resetTimer}>
                <span>Reset</span>
              </button>
            )}
        </div>
      </div>
    );
  }
}

export default Timer;
