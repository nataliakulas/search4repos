import { adaptResult } from 'features/dashboard/utils/adapters';

export const adaptResultDetails = ({ description, subscribers_count, updated_at, ...payload }: any) => ({
  ...adaptResult(payload),
  description,
  subscribers: subscribers_count,
  updated: updated_at,
});
