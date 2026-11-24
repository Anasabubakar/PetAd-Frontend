import type { ZodErrorMap } from 'zod';

export const localizedZodErrorMap: ZodErrorMap = (issue, ctx) => {
  if (issue.code === 'too_small') {
    return { message: `Must be at least ${issue.minimum} characters` };
  }
  if (issue.code === 'invalid_type') {
    return { message: `Expected ${issue.expected}, received ${issue.received}` };
  }
  return { message: ctx.defaultError };
};
