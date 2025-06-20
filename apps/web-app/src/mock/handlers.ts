import { http, HttpResponse } from '@workspace/msw';

export const handlers = [
  http.get('https://jsonplaceholder.typicode.com/posts/1', () => {
    return HttpResponse.json({
      id: 'uhm',
      name: 'John Maverick',
      role: 'Sr. Front-end Developer',
    });
  }),
];
