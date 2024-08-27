import React, { useState } from 'react';

import Elements from './Elements';


// react-router-domのインポートを追加


function Hello() {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);

  const connectApi = async () => {
    try {
      const url = `http://localhost:8080/helloAPI?name=${inputValue}`;
      const response = await fetch(url, {
        method: 'GET',
      });

      if (!response.ok) {
        throw new Error(`情報を取得できませんでした。（E:${response.status}）`);
      }

      const reserved = await response.json();
      setMessage(reserved.message);
      setError(null);
    } catch (err) {
      setError(err.message);
      setMessage('');
    }
  };

  return (
    <><div className="inputValue">
          <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              id="input" />
          <button onClick={connectApi}>Connect API</button>
          <p id="text">{message}</p>
          {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
      <div>
        <Elements passedVariable={message} />
      </div>
      
    </>


  );
};

export default Hello;