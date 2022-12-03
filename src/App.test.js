// import { render, screen } from '@testing-library/react';
import { render, screen } from '@testing-library/react';
import { toHaveTextContent } from '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

const onPlusClicked = (a,b) => test('onPlusClicked & printResult', ()=>{
  render(<App/>)
  userEvent.type(screen.getByTestId('first-element'), `${a}`)
  userEvent.type(screen.getByTestId('second-element'), `${b}`)
  userEvent.click(screen.getByText(/\+/, {selector: 'button'}))
  expect(screen.getByTestId('result')).toHaveTextContent(`${a+b}`)
})
const onMinusClicked = (a,b) => test('onMinusClicked & printResult', ()=>{
  render(<App/>)
  userEvent.type(screen.getByTestId('first-element'), `${a}`)
  userEvent.type(screen.getByTestId('second-element'), `${b}`)
  userEvent.click(screen.getByText(/-/, {selector: 'button'}))
  expect(screen.getByTestId('result')).toHaveTextContent(`${a-b}`)
})
const onMultiplyClicked = (a,b) => test('onMultiplyClicked & printResult', ()=>{
  render(<App/>)
  userEvent.type(screen.getByTestId('first-element'), `${a}`)
  userEvent.type(screen.getByTestId('second-element'), `${b}`)
  userEvent.click(screen.getByText(/\*/, {selector: 'button'}))
  expect(screen.getByTestId('result')).toHaveTextContent(`${a*b}`)
})
const onDivideClicked = (a,b) => test('onDivideClicked & printResult', ()=>{
  render(<App/>)
  userEvent.type(screen.getByTestId('first-element'), `${a}`)
  userEvent.type(screen.getByTestId('second-element'), `${b}`)
  userEvent.click(screen.getByText(/\//, {selector: 'button'}))
  expect(screen.getByTestId('result')).toHaveTextContent(`${a/b}`)
})

const eventTests = [
  onPlusClicked, 
  onMinusClicked, 
  onMultiplyClicked, 
  onDivideClicked
]

describe('Events & Print result', ()=>{
  for(const eventTest of eventTests){
    const a = Math.random()*10+1
    const b = Math.random()*10+1
    eventTest(a,b)
  }
})