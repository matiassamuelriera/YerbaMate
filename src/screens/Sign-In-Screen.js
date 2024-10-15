import * as React from 'react';
import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const providers = [
  { id: 'google', name: 'Google' },
];

const SignIn = async (provider) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Sign in with ${provider.id}`);
      resolve();
    }, 500);
  });
  return promise;
};

export default function OAuthSignInPage() {
  const theme = useTheme();

  return (
    <GoogleOAuthProvider clientId="877714190227-ld0qq1ufpebnsq7bg10tf6r6cmtnm4qi.apps.googleusercontent.com">
      <AppProvider theme={theme}>
        <SignInPage SignIn={SignIn} providers={providers} />
        <div style={{ marginTop: '20px', textAlign: 'center' }}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(credentialResponse);
            }}
            onError={() => {
              console.log('Login Failed');
            }}
          />
        </div>
      </AppProvider>
    </GoogleOAuthProvider>
  );
}
