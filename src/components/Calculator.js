import React, { Component } from 'react';
import calculate from '../logic/calculate';
// import operate from '../logic/operate';

// eslint-disable-next-line
class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '',
      next: null,
      operation: null,
    };
  }

  handleClick = (e) => {
    const data = e.target.value;
    const state = calculate(this.state, data);
    this.setState(state);
    console.log(state);
  };

  render() {
    const { total, next, operation } = this.state;
    return (
      <div>
        <div className="calc-container">
          <table className="calculator">
            <tbody>
              <tr>
                <td colSpan={4} className="result">
                  {total}
                  {operation}
                  {next}
                </td>
              </tr>
              <tr>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value="AC">
                    AC
                  </button>
                </td>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value="+/-">
                    +/-
                  </button>
                </td>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value="%">
                    %
                  </button>
                </td>
                <td className="action">
                  <button type="button" onClick={this.handleClick} value="÷">
                    ÷
                  </button>
                </td>
              </tr>
              <tr>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value={7}>
                    7
                  </button>
                </td>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value={8}>
                    8
                  </button>
                </td>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value={9}>
                    9
                  </button>
                </td>
                <td className="action">
                  <button type="button" onClick={this.handleClick} value="x">
                    x
                  </button>
                </td>
              </tr>
              <tr>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value={4}>
                    4
                  </button>
                </td>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value={5}>
                    5
                  </button>
                </td>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value={6}>
                    6
                  </button>
                </td>
                <td className="action">
                  <button type="button" onClick={this.handleClick} value="-">
                    -
                  </button>
                </td>
              </tr>
              <tr>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value={1}>
                    1
                  </button>
                </td>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value={2}>
                    2
                  </button>
                </td>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value={3}>
                    3
                  </button>
                </td>
                <td className="action">
                  <button type="button" onClick={this.handleClick} value="+">
                    +
                  </button>
                </td>
              </tr>
              <tr>
                <td className="num" colSpan={2}>
                  <button type="button" onClick={this.handleClick} value={0}>
                    0
                  </button>
                </td>
                <td className="num">
                  <button type="button" onClick={this.handleClick} value=".">
                    .
                  </button>
                </td>
                <td className="action">
                  <button type="button" onClick={this.handleClick} value="=">
                    =
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Calculator;
