import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Login from '../../Views/Login'
import * as firebase from "firebase"



// jest.mock("firebase")


test("username input should be rendered",  () => {
  // firebase.initializeApp.mockResolvedValue("hello world")
  render(<Login />);
  const emailInputEl = screen.getByPlaceholderText(/email/i);
  expect(emailInputEl).toBeInTheDocument();
});










