import { SafeAreaView, StatusBar } from 'react-native';
import React from 'react';
import { Calculadora } from './src/screens/Calculadora';
import { styles } from './src/theme/appTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Calculadora />
    </SafeAreaView>
  );
};

export default App;
