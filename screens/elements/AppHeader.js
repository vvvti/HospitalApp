import React from "react";
import { Container, Header, Title, Content, Button, Icon, Left, Body, Text, Right, Thumbnail } from "native-base";
import { Ionicons } from '@expo/vector-icons';
import {colors} from '../../themes/colors';



export const AppHeader =() => {
    return (
    
        <Header
          transparent style={{backgroundColor: colors.primaryBackground}}
          androidStatusBarColor={colors.primaryBackground}
        >    
          <Body>
            <Title style={{alignSelf: 'center'}}>
              Daschboard
            </Title>
            
          </Body>
        </Header>
  
  
    );
  };