const TryAgainButton = ({
  handleLogoutDialog,
  setDialogType,
}: {
  handleLogoutDialog: (stauts: string) => void;
  setDialogType: (type: string) => void;
}) => (
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
