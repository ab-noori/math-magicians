import Big from 'big.js';
import operate from '../components/logic/operate';

describe('operate', () => {
  it('adds two numbers correctly', () => {
    const result = operate('2', '3', '+');
    expect(result).toEqual(Big('5').toString());
  });

  it('subtracts two numbers correctly', () => {
    const result = operate('5', '2', '-');
    expect(result).toEqual(Big('3').toString());
  });

  it('multiplies two numbers correctly', () => {
    const result = operate('2', '4', 'x');
    expect(result).toEqual(Big('8').toString());
  });

  it('divides two numbers correctly', () => {
    const result = operate('6', '3', '÷');
    expect(result).toEqual(Big('2').toString());
  });

  it('handles divide by 0 correctly', () => {
    const result = operate('6', '0', '÷');
    expect(result).toEqual("Can't divide by 0.");
  });

  it('calculates modulo correctly', () => {
    const result = operate('5', '2', '%');
    expect(result).toEqual(Big('1').toString());
  });

  it('throws error for unknown operation', () => {
    expect(() => operate('2', '3', '$')).toThrowError("Unknown operation '$'");
  });
});
