const StayButton = ({
  handleLogoutDialog,
}: {
  handleLogoutDialog: (status: string) => void;
}) => <button onClick={() => handleLogoutDialog("off")}>Stay</button>;

export default StayButton;
