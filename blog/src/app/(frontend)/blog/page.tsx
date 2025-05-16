import { getPosts } from '@/lib/payload/getPosts';
import { Post } from '@/payload-types';
import Link from 'next/link';
import React from 'react';

export default async function BlogPage() {
  const posts: Post[] = await getPosts();
  console.log('posts', posts);
  return (
    <>
      <Link href="blog/qwer" className="post">
        Go to Post
      </Link>
    </>
  );
}
