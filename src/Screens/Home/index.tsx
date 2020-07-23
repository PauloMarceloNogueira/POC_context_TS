import React, { useContext, useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { AuthContext } from '../../Store/Contexts/AuthProvider';
import { ThemeContext } from '../../Store/Contexts/ThemeProvider';
import { Types } from '../../Store/Contexts';
import User from '../../Components/User';

const Home: React.FC = () => {
  const {state: AuthState, dispatch: AuthDispatch} = useContext(AuthContext)
  const {state: ThemeState, dispatch: ThemeDispatch} = useContext(ThemeContext)
  
  useEffect(() => {
    console.log('Renderizou novamente o Thema')  
  }, [ThemeState])

  useEffect(() => {
    console.log('Renderizou novamente o Auth')  
  }, [AuthState])

return <View>
    <User name={AuthState.user.name}/>
    <TextInput placeholder="Alterar nome" onChangeText={text => AuthDispatch({type: Types.ChangeName, payload: {name: text}})}/>
    <Text>Thema {ThemeState.isLight ? 'LIGHT' : 'DARK'} </Text>
    <TouchableOpacity onPress={() => ThemeDispatch({type: Types.Toggle})}>
      <Text>Alterar Tema</Text>
    </TouchableOpacity>
    
  </View>;
}

export default Home;