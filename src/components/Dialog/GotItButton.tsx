const GotItButton = ({
  handleLogoutDialog,
}: {
  handleLogoutDialog: (status: string) => void;
}) => <button onClick={() => handleLogoutDialog("off")}>Got it</button>;

export default GotItButton;
