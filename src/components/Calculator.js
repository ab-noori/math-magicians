import React from 'react';
import Button from './Button';

const Calculator = () => (
  <div className="calculator">
    <div className="display">0</div>
    <div className="row">
      <Button className="clear" text="AC" />
      <Button className="plus-minus" text="+/-" />
      <Button className="percent" text="%" />
      <Button className="operator" text="÷" />
    </div>
    <div className="row">
      <Button className="number" text="7" />
      <Button className="number" text="8" />
      <Button className="number" text="9" />
      <Button className="operator" text="×" />
    </div>
    <div className="row">
      <Button className="number" text="4" />
      <Button className="number" text="5" />
      <Button className="number" text="6" />
      <Button className="operator" text="-" />
    </div>
    <div className="row">
      <Button className="number" text="1" />
      <Button className="number" text="2" />
      <Button className="number" text="3" />
      <Button className="operator" text="+" />
    </div>
    <div className="row">
      <Button className="number zero" text="0" />
      <Button className="decimal" text="." />
      <Button className="equals operator" text="=" />
    </div>
  </div>
);

export default Calculator;
