import { http, HttpResponse, passthrough } from 'msw';

const initMsw = async (handlers: any[]) => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen({
      onUnhandledRequest: 'bypass',
    });
    server.use(...handlers);

    console.log('MSW server is running');
  } else {
    const { worker } = await import('./browser');
    await worker.start();
    worker.use(...handlers);

    console.log('MSW worker is running');
  }
};

export { initMsw, http, passthrough, HttpResponse };
