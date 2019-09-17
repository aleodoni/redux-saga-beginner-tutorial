/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { onLoadChamados } = this.props;

    onLoadChamados();
  }

  render() {
    const {
      value,
      onIncrement,
      onDecrement,
      onIncrementAsync,
      onLoadChamados
    } = this.props;

    console.log("--------------------1");
    console.log(this.props);
    return (
      <div>
        <button onClick={onIncrementAsync}>Increment after 1 second</button>{" "}
        <button onClick={onIncrement}>Increment</button>{" "}
        <button onClick={onDecrement}>Decrement</button>
        <button onClick={onLoadChamados}>Load Chamados</button>
        <hr />
        {/* <div>Clicked: {value} times</div> */}
      </div>
    );
  }
}
// Counter.propTypes = {
//   value: PropTypes.number.isRequired,
//   onIncrement: PropTypes.func.isRequired,
//   onDecrement: PropTypes.func.isRequired,
//   onIncrementAsync: PropTypes.func.isRequired
// };

export default Counter;
