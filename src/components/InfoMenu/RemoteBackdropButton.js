import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RemoteBackdropButton = forwardRef(
  ({ setShouldUseAPIData, toggleClickability }, ref) => (
    <a
      className="option remote-backdrop"
      tabIndex="12"
      title="Remote backdrop"
      ref={ref}
      onClick={() => {
        setShouldUseAPIData(false) || toggleClickability();
      }}
    >
      <FontAwesomeIcon icon={["fas", "plane"]} size="lg" />
    </a>
  )
);

export default RemoteBackdropButton;
