import type { Payload } from 'payload';

declare global {
  const payload: {
    client: Payload | null;
    promise: Promise<Payload> | null;
  };
}

export {};
