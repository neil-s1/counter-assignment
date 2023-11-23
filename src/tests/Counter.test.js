// import necessary react testing library helpers here
import { render, screen, fireEvent } from '@testing-library/react'
// import the Counter component here
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
    expect(screen.getByText(/Counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
    const startCount = screen.getByTestId('count');
    expect(startCount).toBeInTheDocument('0');
});

test('clicking + increments the count', () => {
    
    const increaseCount = screen.getByText('+');
    const countValue = screen.getByTestId('count');
    fireEvent.click(increaseCount);
    expect(countValue).toBeInTheDocument('1');
  // Complete the unit test below based on the objective in the line above
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
    const decreaseCount = screen.getByText('-');
    const countValue = screen.getByTestId('count');
    fireEvent.click(decreaseCount);
    expect(countValue).toBeInTheDocument('-1');
});
