import { App } from 'aws-cdk-lib';
import { ApiStack } from './stacks/ApiStack';
import { DataStack } from './stacks/DataStack';
import { LambdaStack } from './stacks/LambdaStack';

const app = new App();
new DataStack(app, 'DataStack');
const lambdaStack = new LambdaStack(app, 'LambdaStack');
new ApiStack(app, 'ApiStack', {
  helloLambdaIntegration: lambdaStack.helloLambdaIntegration,
});
