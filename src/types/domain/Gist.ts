import {Owner} from './Owner.ts';
import {File} from './File.ts';

export interface Gist {
  url: string;
  forks_url: string;
  commits_url: string;
  id: string;
  node_id: string;
  git_pull_url: string;
  git_push_url: string;
  html_url: string;
  files: {[filename: string]: File};
  public: boolean;
  created_at: string;
  updated_at: string;
  description?: string;
  comments: number;
  user: any;
  comments_url: string;
  owner: Owner;
  truncated: boolean;
  firstFileName?: string;
  uniqueId: string;
}
