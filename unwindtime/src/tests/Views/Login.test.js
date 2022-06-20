import { fireEvent, render, screen, waitFor, cleanup } from "@testing-library/react";
import Login from '../../Views/Login'
import * as firebase from "firebase"
import { addListener } from "gulp";

const authObjectMock = {
  createUserAndRetrieveDataWithEmailAndPassword: jest.fn(() => Promise.resolve(true)),
  sendPasswordResetEmail: jest.fn(() => Promise.resolve(true)),
  signInAndRetrieveDataWithEmailAndPassword: jest.fn(() => Promise.resolve(true)),
  fetchSignInMethodsForEmail: jest.fn(() => Promise.resolve(true)),
  signOut: jest.fn(() => {
    Promise.resolve(true);
  }),
  onAuthStateChanged: jest.fn(),
  currentUser: {
    sendEmailVerification: jest.fn(() => Promise.resolve(true)),
  },
  // getMessaging: jest.fn(() => Promise.resolve(true)),
  addListener: jest.fn(),

};
const authMock = jest.fn(() => authObjectMock);

firebase.auth = authMock;
global.matchMedia = global.matchMedia || function () {
  return {
    addListener: jest.fn(),
    removeListener: jest.fn(),
  };
};

describe('<SignOutButton />', () => {
  afterEach(cleanup);

  it('calls Firebase signOut on click', async () => {
    const SignOutButton = (await import('./SignOutButton')).default;
    const { getByText } = render(<SignOutButton />);
    const button = screen.getByText('Sign Out');
    fireEvent.click(button);
    expect(firebase.auth().signOut).toHaveBeenCalled();
  });
});


// test("username input should be rendered",  () => {


//   render(<Login />);
//   const emailInputEl = screen.getByPlaceholderText(/email/i);
//   expect(emailInputEl).toBeInTheDocument();
// });










