export const register = async () => {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  // node 환경에서만 한번 실행 (edge에서는 안함)
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { initMsw } = await import('@workspace/msw');
    const { handlers } = await import('./mock/handlers');
    initMsw(handlers);
  }
};
