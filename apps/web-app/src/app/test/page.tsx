import { FetchTest } from '@/components/fetch-test';
import { fetchApi } from '@workspace/network';

export const revalidate = 0;

export default async function Test() {
  const response = await fetchApi(
    'https://jsonplaceholder.typicode.com/posts/1',
  );
  console.log('test from server', response);

  return (
    <div>
      <FetchTest />
    </div>
  );
}
