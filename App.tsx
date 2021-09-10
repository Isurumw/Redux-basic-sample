/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {Provider, useDispatch, useSelector} from 'react-redux';
import store from './src/my-redux/store/store';

import {onDescription} from './src/my-redux/actions/first.action';

import {ApplicationState} from './src/my-redux/reducers';

const Description: React.FC = () => {
  const {description} = useSelector(
    (state: ApplicationState) => state.firstReducer,
  );

  return <Text>{description.value}</Text>;
};

const ReduxComponent: React.FC = () => {
  const dispatch = useDispatch();
  const onPressButton = () => {
    dispatch(onDescription());
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnPressMe} onPress={onPressButton}>
        <Text style={styles.txtPressMe}>Press Me</Text>
      </TouchableOpacity>
      <Description />
    </View>
  );
};

const App: React.FC = () => {
  return (
    <>
      <Provider store={store}>
        <ReduxComponent />
      </Provider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  btnPressMe: {
    backgroundColor: '#2E3C57',
    padding: 10,
    alignSelf: 'stretch',
    marginHorizontal: 85,
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  txtPressMe: {
    color: '#FFFFFF',
  },
});

export default App;
