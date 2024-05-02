import React from "react";
import "../Emoticons/style/emoticons.css";

class Emoticons extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstEmoticonCounter: 0,
      secondEmoticonCounter: 0,
      thirdEmoticonCounter: 0,
      fourthEmoticonCounter: 0,
      popupWindowActive: false,
    };
  }

  //   =============_Functions-and-Logic_==========================================

  clickOnFirstSmiley = () => {
    this.setState((state) => {
      return { firstEmoticonCounter: this.state.firstEmoticonCounter + 1 };
    });
  };

  clickOnSecondSmiley = () => {
    this.setState((state) => {
      return { secondEmoticonCounter: this.state.secondEmoticonCounter + 1 };
    });
  };

  clickOnThirdSmiley = () => {
    this.setState((state) => {
      return { thirdEmoticonCounter: this.state.thirdEmoticonCounter + 1 };
    });
  };

  clickOnFourthSmiley = () => {
    this.setState((state) => {
      return { fourthEmoticonCounter: this.state.fourthEmoticonCounter + 1 };
    });
  };

  showResultsFun = () => {
    if (
      this.state.firstEmoticonCounter > this.state.secondEmoticonCounter &&
      this.state.firstEmoticonCounter > this.state.thirdEmoticonCounter &&
      this.state.firstEmoticonCounter > this.state.fourthEmoticonCounter
    ) {
      console.log("The first smile is the winner!");
      this.smileyWinner.current.innerText = "😇";
      this.winnerOnPoints = this.firstEmoticonCounter.current.innerText;
      this.winnerPoints.current.innerText = `Points scored: ${this.winnerOnPoints}`;
    } else if (
      this.state.secondEmoticonCounter > this.state.firstEmoticonCounter &&
      this.state.secondEmoticonCounter > this.state.thirdEmoticonCounter &&
      this.state.secondEmoticonCounter > this.state.fourthEmoticonCounter
    ) {
      console.log("The second smile is the winner!");
      this.smileyWinner.current.innerText = "🤓";
      this.winnerOnPoints = this.secondEmoticonCounter.current.innerText;
      this.winnerPoints.current.innerText = `Points scored: ${this.winnerOnPoints}`;
    } else if (
      this.state.thirdEmoticonCounter > this.state.firstEmoticonCounter &&
      this.state.thirdEmoticonCounter > this.state.secondEmoticonCounter &&
      this.state.thirdEmoticonCounter > this.state.fourthEmoticonCounter
    ) {
      console.log("The thrid smile is the winner!");
      this.smileyWinner.current.innerText = "😉";
      this.winnerOnPoints = this.thirdEmoticonCounter.current.innerText;
      this.winnerPoints.current.innerText = `Points scored: ${this.winnerOnPoints}`;
    } else if (
      this.state.fourthEmoticonCounter > this.state.firstEmoticonCounter &&
      this.state.fourthEmoticonCounter > this.state.secondEmoticonCounter &&
      this.state.fourthEmoticonCounter > this.state.thirdEmoticonCounter
    ) {
      console.log("The fourth smile is the winner!");
      this.smileyWinner.current.innerText = "🐣";
      this.winnerOnPoints = this.fourthEmoticonCounter.current.innerText;
      this.winnerPoints.current.innerText = `Points scored: ${this.winnerOnPoints}`;
    } else {
      console.log("Friendship won");
      this.smileyWinner.current.innerText = " 🤝";
      this.winnerOnPoints = this.fourthEmoticonCounter.current.innerText;
      this.winnerPoints.current.innerText = `Points scored: ${this.winnerOnPoints}`;
    }
    this.setState((state) => {
      return (this.state.popupWindowActive = true);
    });
  };

  Reboot = () => {
    return window.location.reload();
  };

  // -------------_Ref_---------------------------------

  smileyWinner = React.createRef();

  firstEmoticonCounter = React.createRef();
  secondEmoticonCounter = React.createRef();
  thirdEmoticonCounter = React.createRef();
  fourthEmoticonCounter = React.createRef();

  winnerPoints = React.createRef();

  // -------------_Variables_---------------------------------

  winnerOnPoints = "";
  popupWindowBody = "popupWindow__body";

  //   =============_Render_===============================================

  render() {
    if (this.state.popupWindowActive == true) {
      this.popupWindowBody += " popupWindow__body_active";
    }
    return (
      <div className="wrapper">
        <div className="emoticons">
          <div className="emoticons__body">
            <h1>emoticons</h1>
            <div className="emoticons__line">
              <div className="section_one">
                <span onClick={this.clickOnFirstSmiley}>😇</span>
                <span onClick={this.clickOnSecondSmiley}>🤓</span>
                <span onClick={this.clickOnThirdSmiley}>😉</span>
                <span onClick={this.clickOnFourthSmiley}>🐣</span>
              </div>
              <div className="section_two">
                <p ref={this.firstEmoticonCounter}>
                  {this.state.firstEmoticonCounter}
                </p>
                <p ref={this.secondEmoticonCounter}>
                  {this.state.secondEmoticonCounter}
                </p>
                <p ref={this.thirdEmoticonCounter}>
                  {this.state.thirdEmoticonCounter}
                </p>
                <p ref={this.fourthEmoticonCounter}>
                  {this.state.fourthEmoticonCounter}
                </p>
              </div>
            </div>
            <button
              type="button"
              className="showResults"
              onClick={this.showResultsFun}
            >
              Show Results
            </button>
          </div>
          <div className="popupWindow">
            <div className={this.popupWindowBody}>
              <h1>The smile that scored the most points was:</h1>
              <span ref={this.smileyWinner}></span>
              <p ref={this.winnerPoints}>{this.pointsScored}</p>
              <button onClick={this.Reboot}>Reboot</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Emoticons;
