import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ImageButton = forwardRef(({ track, shouldUseAPIData }, ref) => {
  {
    console.log("image source", track);
  }
  return (
    <a
      className="option image"
      href={
        shouldUseAPIData && track?.remoteBackdrop
          ? track.remoteBackdrop.source
          : null
      }
      target="_blank"
      rel="noopener noreferrer"
      title={
        shouldUseAPIData && track?.remoteBackdrop
          ? "View source image"
          : "Default backdrop"
      }
      tabIndex="13"
      ref={ref}
    >
      <FontAwesomeIcon icon={["fas", "image"]} size="lg" />
    </a>
  );
});

export default ImageButton;
