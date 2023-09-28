

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




function App() {

  // const employeeList = useSelector(state => state.employee.data || [])  ;
  // console.log("employeeList", employeeList)
  // const employeeList = useSelector(state => state.employee);


  const employeeList = true
  return (
    <Provider store={store}>
      <SafeAreaView style={{
        flex: 1
      }}>
        <NavigationContainer>
          {
            employeeList ?
              <DrawerNavigator />
              :
              <Appnavigator />
          }

        </NavigationContainer>
      </SafeAreaView>
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
