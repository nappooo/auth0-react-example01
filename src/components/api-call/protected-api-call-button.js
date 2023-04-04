import Button from '@mui/material/Button';
import TextField  from '@mui/material/TextField';
import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';

const ProtectedApiCallButton = () => {
  const { getAccessTokenSilently } = useAuth0();
  const [apiResult, setApiResult] = useState('Default value');

  useEffect(() => {
    const timer = setInterval(resetApiResult, 4000);
    return () => clearInterval(timer);
  }, []);

  const resetApiResult = () => {
    setApiResult('Default Value');
  }

  const callProtectedApi = async () => {
    try {
      const accessToken = await getAccessTokenSilently({
        authorizationParams: {
          audience: 'localhost:4000/',
          scope: '',
        },
      });

      Axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      Axios.defaults.baseURL = 'http://localhost:4000';
      
      Axios.get('api/v1/organisation')
        .then((response) => {
          setApiResult(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Button color="inherit" onClick={() => callProtectedApi()}>
      Call protected API
    </Button>
    <TextField
          id="outlined-multiline-static"
          label="Protected API call result"
          multiline
          rows={4}
          value={apiResult}
        />
    </>
  );
};

export default ProtectedApiCallButton;