import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PhotographerButton = forwardRef(({ track, shouldUseAPIData }, ref) => (
  <a
    className="option photographer"
    href={
      shouldUseAPIData && track?.remoteBackdrop
        ? track.remoteBackdrop.portfolio
        : null
    }
    target="_blank"
    rel="noopener noreferrer"
    title={
      shouldUseAPIData && track?.remoteBackdrop
        ? `Photo by ${track.remoteBackdrop.photographer}`
        : `Not available`
    }
    tabIndex="14"
    ref={ref}
  >
    <FontAwesomeIcon icon={["fas", "user-circle"]} size="lg" />
  </a>
));

export default PhotographerButton;
