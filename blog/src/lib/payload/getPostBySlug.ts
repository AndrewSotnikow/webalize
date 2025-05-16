import { Post } from '@/payload-types';
import { getPayloadClient } from '@/lib/payload/payloadClient';

export const getPostBySlug = async (slug: string): Promise<Post | null> => {
  const payload = await getPayloadClient();

  const result = await payload.find({
    collection: 'posts',
    where: {
      slug: {
        equals: slug,
      },
    },
    depth: 2,
    limit: 1,
  });

  return result.docs[0] || null;
};
