import React from 'react';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text, Button, Title } from 'native-base';
import {StyleSheet} from 'react-native';
import {colors} from '../themes/colors';
import { AntDesign } from '@expo/vector-icons';



export const StaffScreen = ({navigation}) => {
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
              PERSONEL
            </Title>
            
          </Body>
        </Header>
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
    }
  })