import React, {useMemo} from 'react';
import {FlatList} from 'react-native';
import {useGists} from '../../hooks/useGists.ts';
import {Gist} from '../../types/domain/Gist.ts';
import listFooterComponent from './components/list-footer.component.tsx';
import ListHeaderComponent from './components/list-header.component.tsx';
import GistItemComponent from './components/gist-item.component.tsx';
import {preprocessGist} from '../../utils/preprocessGist.ts';

const GistListingComponent = () => {
  const {gists, isLoading, hasMore, loadMore} = useGists();

  const memoizedGists = useMemo(() => preprocessGist(gists), [gists]);

  const renderItem = ({item}: {item: Gist}) => {
    return (
      <GistItemComponent
        avatarUrl={item.owner.avatar_url}
        filename={item.firstFileName || 'NA'}
      />
    );
  };

  return (
    <FlatList
      data={memoizedGists}
      maxToRenderPerBatch={15}
      windowSize={12}
      renderItem={renderItem}
      keyExtractor={(item, index) => item + '-' + index}
      removeClippedSubviews={true}
      onEndReached={hasMore ? loadMore : undefined}
      onEndReachedThreshold={0.3}
      ListFooterComponent={listFooterComponent(isLoading, hasMore)}
      ListHeaderComponent={ListHeaderComponent}
    />
  );
};

export default GistListingComponent;
