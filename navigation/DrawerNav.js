import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  useFonts,
  Roboto_500Medium
} from '@expo-google-fonts/roboto';


import { Drawer } from 'react-native-paper';



export const DrawerNav = (props) => {
  const [active, setActive] = React.useState('');

  let [fontsLoaded] = useFonts({
    Roboto_500Medium
  });

  if (!fontsLoaded) {
    return null;
  }


  return (
    <Drawer.Section title="ePrzychodnia" style={styles.section}>
      <Drawer.Item
        label="Daschboard"
        active={active === 'first'}
                   onPress={() => {
                props.navigation.navigate('HomeScreen');
              }}
      />
      <Drawer.Item
        label="Grafik"
                onPress={() => {
                props.navigation.navigate('ScheduleScreen');
              }}
      />
      <Drawer.Item
        label="Wizyty"
                onPress={() => {
                props.navigation.navigate('VisitesScreen');
              }}
      />
      <Drawer.Item
        label="Pacjenci"
                onPress={() => {
                props.navigation.navigate('PatientsScreen');
              }}
      />
      <Drawer.Item
        label="Personel"
                onPress={() => {
                props.navigation.navigate('StaffScreen');
              }}
      />
    </Drawer.Section>
  );
};

const styles = StyleSheet.create({
  section: {
    marginTop: 80,
  },
});