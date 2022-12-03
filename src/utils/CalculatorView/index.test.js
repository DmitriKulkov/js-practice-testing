import { displayError } from '.'

describe('display error in console', ()=>{
  const error = 'error'
  test(`displayError log '${error}' in console`, ()=>{
    const logSpy = jest.spyOn(console, 'log');
    displayError(error);
    expect(logSpy).toHaveBeenCalledWith(error);
  })
})