const Calculator = () => (
  <div className="calculator">
    <div className="display">0</div>
    <div className="row">
      <button type="button" className="btn clear">AC</button>
      <button type="button" className="btn plus-minus">+/-</button>
      <button type="button" className="btn percent">%</button>
      <button type="button" className="btn operator">&divide;</button>
    </div>
    <div className="row">
      <button type="button" className="btn number">7</button>
      <button type="button" className="btn number">8</button>
      <button type="button" className="btn number">9</button>
      <button type="button" className="btn operator">&times;</button>
    </div>
    <div className="row">
      <button type="button" className="btn number">4</button>
      <button type="button" className="btn number">5</button>
      <button type="button" className="btn number">6</button>
      <button type="button" className="btn operator">&minus;</button>
    </div>
    <div className="row">
      <button type="button" className="btn number">1</button>
      <button type="button" className="btn number">2</button>
      <button type="button" className="btn number">3</button>
      <button type="button" className="btn operator">+</button>
    </div>
    <div className="row">
      <button type="button" className="btn zero number">0</button>
      <button type="button" className="btn decimal">.</button>
      <button type="button" className="btn equals operator">=</button>
    </div>
  </div>
);

export default Calculator;
