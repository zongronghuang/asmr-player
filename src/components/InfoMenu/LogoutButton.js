import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LogoutButton = forwardRef(({ handleLogoutDialog }, ref) => (
  <a
    className="option logout"
    title="Click to log out"
    tabIndex="11"
    ref={ref}
    onClick={() => handleLogoutDialog("on")}
  >
    <FontAwesomeIcon icon={["fas", "sign-out-alt"]} size="lg" />
  </a>
));

export default LogoutButton;
