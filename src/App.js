/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeRouter, Switch, Route } from 'react-router-native';

import GetStarted from "./screens/GetStarted";
import MainMenu from './screens/MainMenu';
import SelectTypeGame from './screens/SelectTypeGame';
import Game from './screens/Game';
import Settings from './screens/Settings';
import Board from './screens/Board';

const App = () => {
  return (
    <SafeAreaView>
      {/* <Text>aaaa</Text> */}
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={GetStarted} />
          <Route exact path="/menu" component={MainMenu} />
          <Route exact path="/select-type" component={SelectTypeGame} />
          <Route exact path="/game" component={Game} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/board" component={Board} />
          {/* <Route exact path="/" component={<View />} /> */}
        </Switch>
      </NativeRouter>
    </SafeAreaView>
  );
};

export default App;
