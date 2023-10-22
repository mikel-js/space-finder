import { handler } from '../src/services/spaces/handler';

process.env.AWS_REGION = 'eu-north-1';
process.env.TABLE_NAME = 'SpaceTable-0eaafa956cca';

handler(
  {
    httpMethod: 'GET',
    queryStringParameters: {
      id: '5d8b494f-137b-440b-830c-d632bcd38415',
    },
    // body: JSON.stringify({
    //   location: 'Manila',
    // }),
  } as any,
  {} as any
);
