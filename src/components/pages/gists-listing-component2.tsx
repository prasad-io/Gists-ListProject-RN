import React, {useMemo, useCallback} from 'react';
import {FlatList} from 'react-native';
import {useGists} from '../../hooks/useGists.ts';
import {preprocessGist} from '../../utils/preprocessGist.ts';
import GistItemComponent from './components/gist-item.component.tsx';
import {Gist} from '../../types/domain/Gist.ts';
import listFooterComponent from './components/list-footer.component.tsx';
import ListHeaderComponent from './components/list-header.component.tsx';

const GistListingComponent2 = () => {
  const {gists, isLoading, hasMore, loadMore} = useGists();

  // Memoize the preprocessGist function
  const memoizedPreprocessGist = useCallback(preprocessGist, []);

  // Process gists incrementally and add a unique identifier
  const memoizedGists: Gist[] = useMemo(() => {
    const lastProcessedIndex = memoizedGists ? memoizedGists.length : 0;
    const newGists = gists.slice(lastProcessedIndex);
    const processedNewGists = memoizedPreprocessGist(newGists).map(
      (gist, index) => ({
        ...gist,
        uniqueId: `${gist.id}-${lastProcessedIndex + index}`,
      }),
    );
    return memoizedGists
      ? [...memoizedGists, ...processedNewGists]
      : processedNewGists;
  }, [gists, memoizedPreprocessGist]);

  const renderItem = useCallback(({item}: {item: Gist}) => {
    return (
      <GistItemComponent
        avatarUrl={item.owner.avatar_url}
        filename={item.firstFileName || 'NA'}
      />
    );
  }, []);

  const keyExtractor = useCallback((item: Gist) => item.uniqueId, []);

  return (
    <FlatList
      data={memoizedGists}
      maxToRenderPerBatch={3}
      windowSize={12}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      removeClippedSubviews={true}
      onEndReached={hasMore ? loadMore : undefined}
      onEndReachedThreshold={0.9}
      ListFooterComponent={listFooterComponent(isLoading, hasMore)}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default GistListingComponent2;
