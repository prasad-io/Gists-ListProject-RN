import {useEffect, useState} from 'react';
import {Gist} from '../types/domain/Gist.ts';
import {fetchGists} from '../services/gistsService.ts';

export const useGists = () => {
  const [gists, setGists] = useState<Gist[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const newGists = await fetchGists(page);
        setGists(prevGists => [...prevGists, ...newGists]);
        setHasMore(newGists.length === 30);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    if (hasMore) {
      fetchData();
    }
  }, [page, hasMore]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return {gists, isLoading, hasMore, loadMore};
};
