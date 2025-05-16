import { Post } from '@/payload-types';
import { getPayloadClient } from '@/lib/payload/payloadClient';

export const getPosts = async (): Promise<Post[]> => {
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: 'posts',
    depth: 1,
    sort: '-publishedAt',
    limit: 100,
  });

  return result.docs as Post[];
};
