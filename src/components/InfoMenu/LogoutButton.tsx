import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type LogoutButtonProps = {
  handleLogoutDialog: (status: string) => void;
};

const LogoutButton = forwardRef<HTMLAnchorElement, LogoutButtonProps>(
  ({ handleLogoutDialog }, ref) => (
    <a
      className="option logout"
      title="Click to log out"
      tabIndex={11}
      ref={ref}
      onClick={() => handleLogoutDialog("on")}
    >
      {/* {console.log("[render] LogoutButton")} */}
      <FontAwesomeIcon icon={["fas", "sign-out-alt"]} size="lg" />
    </a>
  )
);

export default LogoutButton;
