import * as React from "react";
import 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import {StatusBar} from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import {DrawerNav} from './navigation/DrawerNav';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {HomeScreen} from './screens/HomeScreen';
import {VisitesScreen} from './screens/VisitesScreen';
import {ScheduleScreen} from './screens/ScheduleScreen';
import {PatientsScreen} from './screens/PatientsScreen';
import {StaffScreen} from './screens/StaffScreen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Provider as PaperProvider } from 'react-native-paper';



const Drawer = createDrawerNavigator();

export default function App () {
  
  return (
    <PaperProvider settings={{
      icon: props => <Icon {...props} />,
  }}>
    <NavigationContainer>
          <Drawer.Navigator
            drawerContent={props => <DrawerNav {...props} />}>
            <Drawer.Screen name="HomeScreen" component={HomeScreen} />
            <Drawer.Screen name="PatientsScreen" component={PatientsScreen} />
            <Drawer.Screen name="VisitesScreen" component={VisitesScreen} />
            <Drawer.Screen name="ScheduleScreen" component={ScheduleScreen} />
            <Drawer.Screen name="StaffScreen" component={StaffScreen} />
          </Drawer.Navigator>
      </NavigationContainer>
      </PaperProvider>
  );
}