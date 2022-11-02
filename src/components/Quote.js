import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState({});

  const handleQuote = async () => {
    const URL = 'https://random-math-quote-api.herokuapp.com/';
    const randomQuote = await axios(URL);
    const data = await randomQuote.data;
    setQuote(data);
    console.log(data);
  };

  useEffect(() => {
    const getQuote = async () => {
      const URL = 'https://random-math-quote-api.herokuapp.com/';
      const randomQuote = await axios(URL);
      const data = await randomQuote.data;
      setQuote(data);
      console.log(data);
    };
    getQuote();
  }, []);

  return (
    <div>
      <div className="quotes-container">
        <div className="quote-body">
          <h2>
            {quote.quote}
            <i>
              {' '}
              -
              {quote.author}
            </i>
          </h2>

          <button id="btn" type="button" onClick={handleQuote}>
            Get Another Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quote;
