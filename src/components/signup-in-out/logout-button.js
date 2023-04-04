import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
  const { logout } = useAuth0();

  // Be sure that returnTo is set to Allowed Logout URLs in Auth0
  return (
    <Button color="inherit" onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}> 
      Log Out
    </Button>
  );
};

export default LogoutButton;