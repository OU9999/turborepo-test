export const initMsw = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen({
      onUnhandledRequest: 'bypass',
    });

    console.log('MSW server is running');
  } else {
    const { worker } = await import('./browser');
    await worker.start();

    console.log('MSW worker is running');
  }
};
