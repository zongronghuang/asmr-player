import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Track } from "../../types";

type PhotographerButtonProps = {
  track: Track;
  shouldUseAPIData: boolean;
};

const PhotographerButton = forwardRef<
  HTMLAnchorElement,
  PhotographerButtonProps
>(({ track, shouldUseAPIData }, ref) => (
  <a
    className="option photographer"
    href={
      shouldUseAPIData && track?.remoteBackdrop
        ? track.remoteBackdrop.portfolio
        : ""
    }
    target="_blank"
    rel="noopener noreferrer"
    title={
      shouldUseAPIData && track?.remoteBackdrop
        ? `Photo by ${track.remoteBackdrop.photographer}`
        : `Not available`
    }
    tabIndex={14}
    ref={ref}
  >
    {/* {console.log("[render] PhotographerButton")} */}
    <FontAwesomeIcon icon={["fas", "user-circle"]} size="lg" />
  </a>
));

export default PhotographerButton;
