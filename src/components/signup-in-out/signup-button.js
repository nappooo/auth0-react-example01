import Button from '@mui/material/Button';
import { useAuth0 } from '@auth0/auth0-react';

const SignupButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button color="inherit" onClick={() => loginWithRedirect({screen_hint: 'signup'})}>Get Started</Button>
  );
};

export default SignupButton;