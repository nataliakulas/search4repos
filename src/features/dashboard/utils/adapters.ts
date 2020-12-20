import { Result } from 'common/types';

export const adaptCount = ({ total_count }: { total_count: number }) => total_count;

export const adaptResult = ({ id, name, owner: { login }, stargazers_count, language }: any): Result => ({
  id,
  repo: name,
  owner: login,
  stargazers: stargazers_count,
  language,
});

export const adaptResults = ({ items }: { items: any[] }) => items.map(adaptResult);
