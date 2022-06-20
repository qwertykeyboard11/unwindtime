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
  removeListener: jest.fn(),
};
const authMock = jest.fn(() => authObjectMock);

export { authMock };