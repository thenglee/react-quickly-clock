// @format
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {
      currentTime: new Date().toLocaleString()
    };
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: new Date().toLocaleString()
      });
    }, 1000);
  }

  render() {
    console.log('Rendering clock...');
    return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AnalogDisplay, {
      time: this.state.currentTime
    }), /*#__PURE__*/React.createElement(DigitalDisplay, {
      time: this.state.currentTime
    }));
  }

}