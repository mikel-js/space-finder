import { type CognitoUser } from '@aws-amplify/auth';
import { Amplify, Auth } from 'aws-amplify';
import { CognitoIdentityClient } from '@aws-sdk/client-cognito-identity';
import { fromCognitoIdentityPool } from '@aws-sdk/credential-providers';

const awsRegion = 'eu-north-1';

Amplify.configure({
  Auth: {
    region: awsRegion,
    userPoolId: 'eu-north-1_EgzsHjAjT',
    userPoolWebClientId: '71eguukrk66e8vg476rii5bbrc',
    authenticationFlowType: 'USER_PASSWORD_AUTH',
    identityPoolId: 'eu-north-1:08c9cabd-8612-4def-933f-22a402a94b94',
  },
});

export class AuthService {
  public async login(userName: string, password: string) {
    const result = (await Auth.signIn(userName, password)) as CognitoUser;
    return result;
  }

  public async generateTemporaryCredentials(user: CognitoUser) {
    const jwtToken = user.getSignInUserSession().getIdToken().getJwtToken();
    const cognitoIdentityPool = `cognito-idp.${awsRegion}.amazonaws.com/eu-north-1_EgzsHjAjT`;
    const cognitoIdentity = new CognitoIdentityClient({
      credentials: fromCognitoIdentityPool({
        identityPoolId: 'eu-north-1:08c9cabd-8612-4def-933f-22a402a94b94',
        logins: {
          [cognitoIdentityPool]: jwtToken,
        },
      }),
    });
    const credentials = await cognitoIdentity.config.credentials();
    return credentials;
  }
}
