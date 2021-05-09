import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Title } from 'native-base';
import {colors} from '../themes/colors'
import { AntDesign } from '@expo/vector-icons';
import {FAB} from 'react-native-paper';

export const VisitesScreen = ({navigation}) => {
  return (
    <Container style={styles.container}>
        <Header
          transparent style={{backgroundColor: colors.primaryBackground}}
          androidStatusBarColor={colors.primaryBackground}
        > 
          <Left>
            <Button
             transparent
             onPress={() => navigation.navigate('HomeScreen')}
             >
            <AntDesign name='doubleleft' size={24} color='white'/>
            </Button>
          </Left>  
          <Body>
            <Title >
              WIZYTY
            </Title>
            
          </Body>
        </Header>
        <View style={styles.fabview}>
        <FAB
             style={styles.fab}
             small
             onPress={() => navigation.navigate('')}
             label="Dodaj nową wizytę"
             icon={(props) => <AntDesign {...props} name='pluscircleo' size={24} color='white'/>}
             color='white'
          />
          </View>          
        <Content>
          
        </Content>
      </Container>
      
    );
  }

  const styles = StyleSheet.create({
    Button: {
      alignSelf: 'center',
      margin: 10,
    },
    container: {
    },
    fabview: {
      padding: 8,
      width: 300,
      alignSelf: 'center',
    },
    fab: {
      backgroundColor: colors.secondaryBackground,
    }
  })