/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import GistsListingComponent from "./src/components/pages/gists-listing.component.tsx";

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <GistsListingComponent />
    </SafeAreaView>
  );
}

export default App;
