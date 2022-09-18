import { AuthContextData } from "../../types";

type LogoutButtonProps = {
  userAuth: AuthContextData;
  chooseLogoutMethod: (method: string) => void;
};

const LogoutButton = ({ userAuth, chooseLogoutMethod }: LogoutButtonProps) => (
  <button
    onClick={() => {
      chooseLogoutMethod(userAuth.authProvider);
    }}
  >
    Log out
  </button>
);

export default LogoutButton;
