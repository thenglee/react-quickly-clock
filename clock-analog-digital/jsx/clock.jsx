// @format

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.launchClock();
    this.state = {currentTime: new Date().toLocaleString()};
  }

  launchClock() {
    setInterval(() => {
      console.log('Updating time...');
      this.setState({
        currentTime: new Date().toLocaleString(),
      });
    }, 1000);
  }

  render() {
    console.log('Rendering clock...');
    return (
      <div>
        <AnalogDisplay time={this.state.currentTime} />
        <DigitalDisplay time={this.state.currentTime} />
      </div>
    );
  }
}
