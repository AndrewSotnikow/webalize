import { getPostBySlug } from '@/lib/payload/getPostBySlug';
import { notFound } from 'next/navigation';
import React from 'react';

type Props = {
  params: { slug: string };
};

export default async function BlogPostPage({ params }: Props) {
  const { slug } = params;

  const post = await getPostBySlug(slug);

  console.log('post', post);

  if (!post) return notFound();

  return (
    <>
      <h1>Post title: {post.title}</h1>
    </>
  );
}
