export const register = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { initMsw } = await import('@workspace/msw');
    initMsw();
  }
};
