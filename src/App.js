import './App.css';
import AuthenticationButton from './components/signup-in-out/authentication-button';
import ProtectedApiCallButton from './components/api-call/protected-api-call-button';
import { Stack } from '@mui/system';

function App() {
  return (
    <>
      <Stack 
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{
          backgroundColor:'#e3e3e3'
        }}
      >
        <AuthenticationButton/>
        <ProtectedApiCallButton/>
      </Stack> 
    </>
  );
}

export default App;
