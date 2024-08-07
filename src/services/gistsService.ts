import axios from 'axios';
import {Gist} from '../types/domain/Gist.ts';

const API_BASE_URL: string = 'https://api.github.com/gists/public';

export const fetchGists = async (page = 1, perPage = 30) => {
  const response = await axios.get(
    `${API_BASE_URL}?page=${page}&per_page=${perPage}`,
  );

  //console.log(response.data);
  return response.data as Gist[];
};
