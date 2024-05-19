import firebase from 'firebase/compat/app';

export const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/home',
    tosUrl: '/terms-of-service',
    privacyPolicyUrl: '/privacy-policy',
    signInOptions: [
        {
            provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            clientId: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_ID,
        }
    ],
    callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          // User successfully signed in.
          // Return type determines whether we continue the redirect automatically
          // or whether we leave that to developer to handle.
          return true;
        },
      },
    credentialHelper: firebaseui.auth.CredentialHelper.GOOGLE_YOLO,
};