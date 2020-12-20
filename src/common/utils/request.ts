import { Octokit } from '@octokit/core';

const octokit = new Octokit({ auth: process.env.REACT_APP_TOKEN });

export type Options = {
  q?: string;
  page?: number;
  per_page?: number;
  owner?: string;
  repo?: string;
  route?: string;
};

const request = async ({ route = '', ...options }: { route?: string } & Options) =>
  octokit.request(route, {
    ...options,
  });

export default request;
