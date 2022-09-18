import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Track } from "../../types";

type LocalBackdropButtonProps = {
  track: Track;
  setShouldUseAPIData: (flag: boolean) => {};
  toggleClickability: () => void;
};

const LocalBackdropButton = forwardRef<
  HTMLAnchorElement,
  LocalBackdropButtonProps
>(({ track, setShouldUseAPIData, toggleClickability }, ref) => (
  <a
    className="option local-backdrop"
    tabIndex={12}
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
      color={track?.remoteBackdrop ? "" : "gray"}
    />
  </a>
));

export default LocalBackdropButton;
