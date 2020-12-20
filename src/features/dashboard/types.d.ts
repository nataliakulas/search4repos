export type Result = {
  id: number;
  stargazers: number;
  language: string;
} & Details;

export type Details = {
  owner: string;
  repo: string;
};
