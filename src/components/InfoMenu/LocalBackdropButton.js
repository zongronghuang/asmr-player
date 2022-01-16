import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LocalBackdropButton = forwardRef(
  ({ track, setShouldUseAPIData, toggleClickability }, ref) => (
    <a
      className="option local-backdrop"
      tabIndex="12"
      title="Local backdrop"
      ref={ref}
      onClick={() =>
        track?.remoteBackdrop
          ? setShouldUseAPIData(true) || toggleClickability()
          : setShouldUseAPIData(false)
      }
    >
      {/* {console.log("[render] LocalBackdropButton")} */}
      <FontAwesomeIcon
        icon={["fas", "plane-slash"]}
        size="lg"
        color={track?.remoteBackdrop ? null : "gray"}
      />
    </a>
  )
);

export default LocalBackdropButton;
