import React from "react";
import {render, screen, waitFor} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from "./App";

const mockDispatch = jest.fn();

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch
}));

test('should exist in the document', () => {
  render(<App />)
  expect(screen.getByRole('button')).toBeInTheDocument()
})

test('should click in button', () => {
  render(<App />)
  expect(screen.getByRole('button').click())
})

test("should click in button and trigger event", async () => {
  render(<App/>);
    expect(screen.getByRole('button').click())
    await waitFor(() => expect(mockDispatch).toHaveBeenCalledTimes(1))
});
