/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      
      <Text style={styles.title}>Pokédex</Text>
      <Text style={styles.subtitle}>Search for Pokémon by name or using the National Pokédex number.</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFFFF",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    paddingHorizontal: 40,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "400",
    paddingHorizontal: 40,
    paddingTop: 10,
    color: "#747476FF"
  }
});

export default App;
