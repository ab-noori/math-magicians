import calculate from '../components/logic/calculate';

describe('calculate', () => {
  it('should return the initial state when given "AC"', () => {
    const initialState = {
      total: null,
      next: null,
      operation: null,
    };
    const result = calculate(initialState, 'AC');
    expect(result).toEqual(initialState);
  });
  it('should update "next" when there is already an operation', () => {
    const initialState = {
      total: '10',
      next: null,
      operation: '+',
    };
    const result = calculate(initialState, '5');
    expect(result).toEqual({
      total: '10',
      next: '5',
      operation: '+',
    });
  });
  it('should clear "next" and set "total" when given an operation', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(initialState, '-');
    expect(result).toEqual({
      total: '15',
      next: null,
      operation: '-',
    });
  });
  it('should return the result of the operation when given "="', () => {
    const initialState = {
      total: '10',
      next: '5',
      operation: '+',
    };
    const result = calculate(initialState, '=');
    expect(result).toEqual({
      total: '15',
      next: null,
      operation: null,
    });
  });
  it('should handle the "+/-" button', () => {
    const initialState = {
      total: null,
      next: '10',
      operation: null,
    };
    const result1 = calculate(initialState, '+/-');
    expect(result1).toEqual({
      total: null,
      next: '-10',
      operation: null,
    });
    const result2 = calculate(result1, '+/-');
    expect(result2).toEqual({
      total: null,
      next: '10',
      operation: null,
    });
    const result3 = calculate({ total: '10', next: null, operation: null }, '+/-');
    expect(result3).toEqual({
      total: '-10',
      next: null,
      operation: null,
    });
  });
});
