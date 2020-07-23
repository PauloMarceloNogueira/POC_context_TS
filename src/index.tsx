import React from 'react';
import { View, SafeAreaView } from 'react-native';
import Home from './Screens/Home';
import { AuthProvider } from './Store/Contexts/AuthProvider';
import { ThemeProvider } from './Store/Contexts/ThemeProvider';

// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <SafeAreaView>
          <Home />
        </SafeAreaView>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default Main;