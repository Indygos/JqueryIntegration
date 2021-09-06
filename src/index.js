import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.datepickerContainer = React.createRef();
  }
  componentDidMount() {
    window.$(this.datepickerContainer.current).datepicker({
      onSelect: this.props.onDateChange
    });
  }
  componentWillUnmount() {
    window.$(this.datepickerContainer.current).datepicker("destroy");
  }
  render() {
    return <div ref={this.datepickerContainer} />;
  }
}
class App extends React.Component {
  state = {
    selectedDate: null
  };
  render() {
    return (
      <div className="App">
        <h1>Hello JqueryUI</h1>
        <h2>
          {this.state.selectedDate
            ? this.state.selectedDate
            : "Please select dejt"}
        </h2>
        <DatePicker
          onDateChange={(date) => this.setState({ selectedDate: date })}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
