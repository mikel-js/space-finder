import { handler } from '../src/services/spaces/handler';

handler(
  {
    httpMethod: 'POST',
    body: JSON.stringify({
      location: 'Espoo',
    }),
  } as any,
  {} as any
);
