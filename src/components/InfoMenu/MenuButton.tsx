import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type MenuButtonProps = {
  handleTogglingAnimations: () => void;
};

const MenuButton = ({ handleTogglingAnimations }: MenuButtonProps) => (
  <a
    className="option info"
    title="Click for more"
    tabIndex={10}
    onClick={handleTogglingAnimations}
  >
    {/* {console.log("[render] MenuButton")} */}
    <FontAwesomeIcon icon={["fas", "info"]} size="lg" />
  </a>
);

export default MenuButton;
