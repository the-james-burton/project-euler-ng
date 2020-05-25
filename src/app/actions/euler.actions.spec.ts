import * as fromTerm from './euler.actions';

describe('loadEuler', () => {
  it('should return an action', () => {
    expect(fromTerm.loadEuler().type).toBe('[Euler] Load Euler');
  });
});
