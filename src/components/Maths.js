import React from 'react';
import Calculator from './Calculator';

function Maths() {
  return (
    <div>
      <div className="maths">
        <div className="do-maths">
          <h2>Lets do some Maths😎</h2>
        </div>
        <div className="containt-calc">
          <Calculator />
        </div>
      </div>
    </div>
  );
}

export default Maths;
