import { handler } from '../src/services/spaces/handler';

process.env.AWS_REGION = 'eu-north-1';
process.env.TABLE_NAME = 'SpaceTable-0eaafa956cca';

handler(
  {
    httpMethod: 'POST',
    body: JSON.stringify({
      location: 'Espoo',
    }),
  } as any,
  {} as any
).then((result) => {
  console.log(result);
});
