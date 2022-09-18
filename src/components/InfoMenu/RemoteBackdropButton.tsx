import { forwardRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type RemoteBackdropButtonProps = {
  setShouldUseAPIData: (flag: boolean) => {};
  toggleClickability: () => void;
};

const RemoteBackdropButton = forwardRef<
  HTMLAnchorElement,
  RemoteBackdropButtonProps
>(({ setShouldUseAPIData, toggleClickability }, ref) => (
  <a
    className="option remote-backdrop"
    tabIndex={12}
    title="Remote backdrop"
    ref={ref}
    onClick={() => {
      setShouldUseAPIData(false) || toggleClickability();
    }}
  >
    {/* {console.log("[render] RemoteBackdropButton")} */}
    <FontAwesomeIcon icon={["fas", "plane"]} size="lg" />
  </a>
));

export default RemoteBackdropButton;
