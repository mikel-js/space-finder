import { type CognitoUser } from '@aws-amplify/auth';
import { Amplify, Auth } from 'aws-amplify';

const awsRegion = 'eu-west-1';

Amplify.configure({
  Auth: {
    region: awsRegion,
    userPoolId: 'eu-north-1_EgzsHjAjT',
    userPoolWebClientId: '71eguukrk66e8vg476rii5bbrc',
    authenticationFlowType: 'USER_PASSWORD_AUTH',
  },
});

export class AuthService {
  public async login(userName: string, password: string) {
    const result = (await Auth.signIn(userName, password)) as CognitoUser;
    return result;
  }
}
