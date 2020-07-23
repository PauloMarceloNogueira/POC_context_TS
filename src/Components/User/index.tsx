import React from 'react';
import { View, Text } from 'react-native';

// import { Container } from './styles';

const User: React.FC<{name?:string}> = ({name}) => {
  return <View>
    <Text>Olá {name}</Text>
  </View>
}

export default React.memo(User);
