import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import { Container, Content } from 'native-base';
import { Card, Title, Paragraph, Avatar, FAB } from 'react-native-paper';
import {MainAppbar} from './Appbar';

import {colors} from '../themes/colors'
import { AntDesign } from '@expo/vector-icons';

import {AppHeader} from './elements/AppHeader';


export const HomeScreen = ({navigation}) => {
  return (
    <Container>
       <AppHeader />
       <MainAppbar />
       
        <Content style={styles.Content}>
        <Card style={styles.Card}>
         <Card.Content>
           <Card.Title
           right={(props) => <Avatar.Image {...props} size={80} source={require('../assets/face.jpg')} />}
           titleStyle={styles.Title}
           title="Elżbieta Dąbrowska"
           subtitle="Pediatra - specjalista chorób dziecięcych"
           subtitleStyle={styles.Title}>
           </Card.Title>
          </Card.Content>
          </Card>
          <View style={styles.divider}>

          </View>

          <View style={styles.MenuView}>
            <View style={styles.row}>
            <View>
              <Card style={styles.MenuCard}>
               <Card.Content>
           <Card.Title 
           titleStyle={styles.MenuTitle}
           title="Pacjenci"
           >             
           </Card.Title>
           <FAB
             style={styles.fab}
             small
             onPress={() => navigation.navigate('PatientsScreen')}
             label="Przejdź do"
             icon={(props) => <AntDesign {...props} name='doubleright' size={24} color='white'/>}
             color='white'
          />           
          </Card.Content>
          </Card>
          </View>
            <View>
            <Card style={styles.MenuCard}>
               <Card.Content>
           <Card.Title
           titleStyle={styles.MenuTitle}
           title="Wizyty"
           >
           </Card.Title>
           <FAB
             style={styles.fab}
             small
             onPress={() => navigation.navigate('VisitesScreen')}
             label="Przejdź do"
             icon={(props) => <AntDesign {...props} name='doubleright' size={24} color='white'/>}
             color='white'
          />
          </Card.Content>
          </Card>
            </View>
            </View>
            <View style={styles.row}>
            <View>
            <Card style={styles.MenuCard}>
               <Card.Content>
           <Card.Title
           titleStyle={styles.MenuTitle}
           title="Grafik"
           >
           </Card.Title>
           <FAB
             style={styles.fab}
             small
             onPress={() => navigation.navigate('ScheduleScreen')}
             label="Przejdź do"
             icon={(props) => <AntDesign {...props} name='doubleright' size={24} color='white'/>}
             color='white'
          />
          </Card.Content>
          </Card>
            </View>
            <View>
            <Card style={styles.MenuCard}>
               <Card.Content>
           <Card.Title
           titleStyle={styles.MenuTitle}
           title="Personel"
           >
           </Card.Title>
           <FAB
             style={styles.fab}
             small
             onPress={() => navigation.navigate('StaffScreen')}
             label="Przejdź do"
             icon={(props) => <AntDesign {...props} name='doubleright' size={24} color='white'/>}
             color='white'
          />
          </Card.Content>
          </Card>
            </View>
            </View>

          </View>
        </Content>       
      </Container>
  );
};

const styles = StyleSheet.create({
  Content: {
    marginBottom: 60,
    padding: 5,
    marginTop: 10,
    
  },
  Card: {
    backgroundColor: colors.primaryBackground,
      },
  Title: {
    color: 'white',
  },
  MenuTitle: {
    color: 'white',
    alignSelf: 'center',
  },
  row: {
    flexDirection: "row",
    justifyContent: 'space-around',
  },
  divider: {
    height: 50,
  },
  MenuCard: {
    backgroundColor: colors.primaryBackground,
    marginBottom: 6,
    width: 185,
    height: 200,
    textAlign: "center",
    margin: 5,
  },
  fab: {
    backgroundColor: colors.secondaryBackground,
    marginTop: 70,
  }

  
})