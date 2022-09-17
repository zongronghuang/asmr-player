import { AuthContextData } from "../../types";

const LogoutButton = ({
  userAuth,
  chooseLogoutMethod,
}: {
  userAuth: AuthContextData;
  chooseLogoutMethod: (method: string) => void;
}) => (
  <button
    onClick={() => {
      chooseLogoutMethod(userAuth.authProvider);
    }}
  >
    Log out
  </button>
);

export default LogoutButton;
