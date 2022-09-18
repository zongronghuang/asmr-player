type TryAgainButtonProps = {
  handleLogoutDialog: (stauts: string) => void;
  setDialogType: (type: string) => void;
};

const TryAgainButton = ({
  handleLogoutDialog,
  setDialogType,
}: TryAgainButtonProps) => (
  <button
    onClick={() => {
      handleLogoutDialog("off");
      setDialogType("logout");
    }}
  >
    Got it
  </button>
);

export default TryAgainButton;
