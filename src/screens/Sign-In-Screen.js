import * as React from 'react';
import { AppProvider, SignInPage } from '@toolpad/core';
import { useTheme } from '@mui/material/styles';
// preview-start
const providers = [

  { id: 'google', name: 'Google' },

];

// preview-end

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
    // preview-start
    <AppProvider theme={theme}>
      <SignInPage SignIn={SignIn} providers={providers} />
    </AppProvider>
    // preview-end
  );
}