type GotItButtonProps = {
  handleLogoutDialog: (status: string) => void;
};

const GotItButton = ({ handleLogoutDialog }: GotItButtonProps) => (
  <button onClick={() => handleLogoutDialog("off")}>Got it</button>
);

export default GotItButton;
