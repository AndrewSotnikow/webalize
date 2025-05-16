import { getPayload } from 'payload';
import payloadConfig from '../../payload.config';

if (!global.payload) {
  global.payload = { client: null, promise: null };
}

export const getPayloadClient = async () => {
  if (global.payload.client) return global.payload.client;

  if (!global.payload.promise) {
    global.payload.promise = getPayload({
      config: payloadConfig,
    });
  }

  global.payload.client = await global.payload.promise;
  return global.payload.client;
};
