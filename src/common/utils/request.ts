import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: process.env.REACT_APP_TOKEN });

const request = async ({ q, page = 1, per_page = 10 }: { q: string; page?: number; per_page?: number }) =>
  octokit.request('GET /search/repositories', {
    q,
    page,
    per_page,
  });

export default request;
