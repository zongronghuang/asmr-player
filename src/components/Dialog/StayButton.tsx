const StayButton = ({ handleLogoutDialog }) => (
  <button alt="Stay" onClick={() => handleLogoutDialog("off")}>
    Stay
  </button>
);

export default StayButton;
