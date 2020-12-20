import { compile } from 'path-to-regexp';
import { route } from './routes';

export const repoPath = compile(route.repo);
