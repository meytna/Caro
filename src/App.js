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

import GetStartedScreen from "./screens/GetStartedScreen";
import MainMenuScreen from './screens/MainMenuScreen';
import SelectTypeGameScreen from './screens/SelectTypeGameScreen';
import GameScreen from './screens/GameScreen';
import SettingsSCreen from './screens/SettingsScreen';

const App = () => {
  return (
    <SafeAreaView>
      <NativeRouter>
        <Switch>
          <Route exact path="/" component={GetStartedScreen} />
          <Route exact path="/menu" component={MainMenuScreen} />
          <Route exact path="/select-type" component={SelectTypeGameScreen} />
          <Route exact path="/game" component={GameScreen} />
          <Route exact path="/settings" component={SettingsSCreen} />
        </Switch>
      </NativeRouter>
    </SafeAreaView>
  );
};

export default App;
