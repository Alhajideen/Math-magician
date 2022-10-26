import React, { useState } from 'react';
import calculate from '../logic/calculate';

function Calculator() {
  const [info, setInfo] = useState({
    total: '',
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    const data = e.target.value;
    const state = calculate(info, data);
    setInfo(state);
  };
  return (
    <div>
      <div className="calc-container">
        <table className="calculator">
          <tbody>
            <tr>
              <td colSpan={4} className="result">
                {info.total}
                {info.operation}
                {info.next}
              </td>
            </tr>
            <tr>
              <td className="num">
                <button type="button" onClick={handleClick} value="AC">
                  AC
                </button>
              </td>
              <td className="num">
                <button type="button" onClick={handleClick} value="+/-">
                  +/-
                </button>
              </td>
              <td className="num">
                <button type="button" onClick={handleClick} value="%">
                  %
                </button>
              </td>
              <td className="action">
                <button type="button" onClick={handleClick} value="÷">
                  ÷
                </button>
              </td>
            </tr>
            <tr>
              <td className="num">
                <button type="button" onClick={handleClick} value={7}>
                  7
                </button>
              </td>
              <td className="num">
                <button type="button" onClick={handleClick} value={8}>
                  8
                </button>
              </td>
              <td className="num">
                <button type="button" onClick={handleClick} value={9}>
                  9
                </button>
              </td>
              <td className="action">
                <button type="button" onClick={handleClick} value="x">
                  x
                </button>
              </td>
            </tr>
            <tr>
              <td className="num">
                <button type="button" onClick={handleClick} value={4}>
                  4
                </button>
              </td>
              <td className="num">
                <button type="button" onClick={handleClick} value={5}>
                  5
                </button>
              </td>
              <td className="num">
                <button type="button" onClick={handleClick} value={6}>
                  6
                </button>
              </td>
              <td className="action">
                <button type="button" onClick={handleClick} value="-">
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td className="num">
                <button type="button" onClick={handleClick} value={1}>
                  1
                </button>
              </td>
              <td className="num">
                <button type="button" onClick={handleClick} value={2}>
                  2
                </button>
              </td>
              <td className="num">
                <button type="button" onClick={handleClick} value={3}>
                  3
                </button>
              </td>
              <td className="action">
                <button type="button" onClick={handleClick} value="+">
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td className="num" colSpan={2}>
                <button type="button" onClick={handleClick} value={0}>
                  0
                </button>
              </td>
              <td className="num">
                <button type="button" onClick={handleClick} value=".">
                  .
                </button>
              </td>
              <td className="action">
                <button type="button" onClick={handleClick} value="=">
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

export default Calculator;
