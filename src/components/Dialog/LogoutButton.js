const LogoutButton = ({ userAuth, chooseLogoutMethod }) => (
  <button
    alt="Log out"
    onClick={() => {
      chooseLogoutMethod(userAuth.authProvider);
    }}
  >
    Log out
  </button>
);

export default LogoutButton;
