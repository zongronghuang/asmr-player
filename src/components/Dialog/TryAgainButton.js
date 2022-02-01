const TryAgainButton = ({ handleLogoutDialog, setDialogType }) => (
  <button
    alt="Got it"
    onClick={() => {
      handleLogoutDialog("off");
      setDialogType("logout");
    }}
  >
    Got it
  </button>
);

export default TryAgainButton;
