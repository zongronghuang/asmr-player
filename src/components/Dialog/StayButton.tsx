type StayButtonProps = {
  handleLogoutDialog: (status: string) => void;
};

const StayButton = ({ handleLogoutDialog }: StayButtonProps) => (
  <button onClick={() => handleLogoutDialog("off")}>Stay</button>
);

export default StayButton;
