import React from 'react';
import Calculator from './Calculator';

function Maths() {
  return (
    <div>
      <div className="do-maths">
        <h2>Lets do some Maths</h2>
      </div>
      <div className="calculator">
        <Calculator />
      </div>
    </div>
  );
}

export default Maths;
