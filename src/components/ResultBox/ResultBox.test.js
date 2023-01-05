import ResultBox from './ResultBox';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });

  const testCasesPLN = [
    { amount: '100', result: '$28.57' },
    { amount: '20', result: '$5.71' },
    { amount: '200', result: '$57.14' },
    { amount: '345', result: '$98.57' },
  ];

  for(const testObj of testCasesPLN){
    it('should render proper info about conversion when PLN -> USD', () => {
      // render component
      render(<ResultBox from="PLN" to="USD" amount={parseInt(testObj.amount)} />);

      // find div
      const output = screen.getByTestId('output');

      // check render value
      expect(output).toHaveTextContent('PLN ' + parseInt(testObj.amount) + '.00' + ' = ' + testObj.result);
    });
    // unmount component
    cleanup();
  }  

  const testCasesUSD = [
    { amount: '100', result: 'PLN 350.00' },
    { amount: '20', result: 'PLN 70.00' },
    { amount: '200', result: 'PLN 700.00' },
    { amount: '345', result: 'PLN 1,207.50' },
  ];

  for(const testObj of testCasesUSD){
    it('should render proper info about conversion when USD -> PLN', () => {
      // render component
      render(<ResultBox from="USD" to="PLN" amount={parseInt(testObj.amount)} />);

      // find div
      const output = screen.getByTestId('output');

      // check render value
      expect(output).toHaveTextContent('$' + parseInt(testObj.amount) + '.00' + ' = ' + testObj.result);
    });
    // unmount component
    cleanup();
  }  

  const testCases = [
    { amount: '100', from: 'PLN', to: 'PLN', result: 'PLN 100.00', img: 'PLN ' },
    { amount: '20', from: 'USD', to: 'USD', result: '$20.00', img: '$' },
    { amount: '200', from: 'PLN', to: 'PLN', result: 'PLN 200.00', img: 'PLN ' },
    { amount: '345', from: 'USD', to: 'USD', result: '$345.00', img: '$' },
  ];

  for(const testObj of testCases){
    it('should render proper info about conversion when USD -> USD || PLN -> PLN', () => {
      // render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

      // find div
      const output = screen.getByTestId('output');

      // check render value
      expect(output).toHaveTextContent(testObj.img + parseInt(testObj.amount) + '.00' + ' = ' + testObj.result);
    });
    // unmount component
    cleanup();
  }  

  const testCasesWrong = [
    { amount: '-200', from: 'PLN', to: 'USD' },
    { amount: '-345', from: 'USD', to: 'PLN' },
  ];

  for(const testObj of testCasesWrong){
    it('should render proper info about conversion when value is wrong', () => {
      // render component
      render(<ResultBox from={testObj.from} to={testObj.to} amount={parseInt(testObj.amount)} />);

      // find div
      const output = screen.getByTestId('output');

      // check render value
      expect(output).toHaveTextContent('Wrong value...');
    });
    // unmount component
    cleanup();
  }  
});