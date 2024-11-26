import { vi } from 'vitest';

global.fetch = vi.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ results: [] }),
  })
) as unknown as typeof fetch;