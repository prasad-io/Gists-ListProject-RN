import {Gist} from '../types/domain/Gist.ts';

export const preprocessGist = (gists: Gist[]): Gist[] => {
  return gists.map(gist => ({
    ...gist,
    firstFileName: Object.keys(gist.files)[0] || 'No files',
  }));
};
