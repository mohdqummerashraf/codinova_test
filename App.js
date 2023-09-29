

import React from 'react';
import {
  SafeAreaView,

  StyleSheet,

} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Appnavigator from './src/Appnavigator';
import { Provider, useSelector } from 'react-redux';

import store from './src/store/store';
import DrawerNavigator from './src/screen/drawer/DrawerNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const RenderInitalScreen = () => {
  const employeeList = useSelector(state => state.employee || []);
  console.log("employeeList", employeeList.data.length)
  return (
    employeeList?.data.length > 0 ?
      <DrawerNavigator />
      :
      <Appnavigator />
  )
}



function App() {




  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{ flex: 1 }} >
        <SafeAreaView style={{
          flex: 1
        }}>
          <NavigationContainer>
            <RenderInitalScreen />
          </NavigationContainer>
        </SafeAreaView>
      </GestureHandlerRootView>
    </Provider>

  )
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
