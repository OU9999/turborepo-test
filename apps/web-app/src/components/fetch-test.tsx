'use client';

import { fetchApi } from '@workspace/network';
import { Button } from '@workspace/ui/components/base/button';

const FetchTest = () => {
  const handleClick = async () => {
    const response = await fetchApi(
      'https://jsonplaceholder.typicode.com/posts/1',
    );
    console.log('test from client', response);
  };

  return <Button onClick={handleClick}>Fetch Test</Button>;
};

export { FetchTest };
