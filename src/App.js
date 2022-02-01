import React, { useEffect, useState } from 'react';
import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let number = parseInt(count);
    if(count <= 0) {
      number = 1;
    }
    if(count > 8) {
      number = 8;
    }
    setParagraphs(data.slice(0, number));
  };

  return (
    <div className="container">
      <section className="section-center">
        <h3>tired of boring lorem ipsum?</h3>
        <form className="lorem-form">
          <label>paragraphs:</label>
          <input type="number" name='number' value={count} onChange={(e) => setCount(e.target.value)} />
          <button type='submit' className="btn" onClick={handleSubmit}>
            generate
          </button>
        </form>
        <article>
          {paragraphs.map((item, index) => {
            return (
              <div key={index}>
                <p>{item}</p>
              </div>
            )
          })}
        </article>
      </section>
    </div>
  )
}

export default App;