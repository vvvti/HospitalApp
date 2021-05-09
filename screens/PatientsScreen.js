import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Title } from 'native-base';
import {StyleSheet, View} from 'react-native';
import {colors} from '../themes/colors';
import { AntDesign } from '@expo/vector-icons';
import {FAB} from 'react-native-paper';



export const PatientsScreen = ({navigation}) => {
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
              PACJENCI
            </Title>
            
          </Body>
        </Header>
        <View style={styles.fabview}>
        <FAB
             style={styles.fab}
             small
             onPress={() => navigation.navigate('PatientsScreen')}
             label="Dodaj nowego pacjenta"
             icon={(props) => <AntDesign {...props} name='pluscircleo' size={24} color='white'/>}
             color='white'
          />
          </View>          
        <Content>
          <List>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/face.jpg')} />
              </Left>
              <Body>
                <Text>Daniel Nowak</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/face.jpg')} />
              </Left>
              <Body>
                <Text>Jan Kowalski</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/face.jpg')} />
              </Left>
              <Body>
                <Text>Maria Kowalska</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/face.jpg')} />
              </Left>
              <Body>
                <Text>Jan Zandberg</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
            <ListItem avatar>
              <Left>
                <Thumbnail source={require('../assets/face.jpg')} />
              </Left>
              <Body>
                <Text>Daniel nowak</Text>
                <Text note>Doing what you like will always keep you happy . .</Text>
              </Body>
              <Right>
                <Text note>3:43 pm</Text>
              </Right>
            </ListItem>
          </List>
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