import React, { createContext, useState, useEffect } from 'react';
import { StatusBar } from 'react-native';

import HomeScreen from './Screens/HomeScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TitleHeader from './components/TitleHeader';
import HomeScreenRightButton from './components/HomeScreenRightButton';

export const ThemeContext = createContext();

const Stack = createNativeStackNavigator();

const App = () => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    async function getThemeFromStorage() {
      try {
        const themeSaved = await AsyncStorage.getItem('@biotypol-store-theme');
        if (themeSaved != null) setTheme(themeSaved);
      } catch (e) {
        setTheme('light');
      }
    };
    getThemeFromStorage();
  }, []);

  useEffect(() => {
    setThemeInStorage();
  }, [theme]);

  async function setThemeInStorage() {
    try {
      await AsyncStorage.setItem('@biotypol-store-theme', theme);
    } catch (error) {
      await AsyncStorage.setItem('@biotypol-store-theme', 'light');
    }
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
      colors: theme == 'light' ? lightTheme : darkTheme
    }}>
      <StatusBar
        backgroundColor={theme == 'light' ? lightTheme.background1 : darkTheme.background1}
        barStyle={theme == 'light' ? 'dark-content' : 'light-content'} />

      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: theme == 'light' ? lightTheme.background1 : darkTheme.background1,
            headerTintColor: theme == 'light' ? lightTheme.text1 : darkTheme.text1,
          },
          headerShadowVisible: false
        }}>
          <Stack.Screen
            name='Biotypol Store'
            component={HomeScreen}
            options={{
              headerTitle: () => <TitleHeader />,
              headerRight: () => <HomeScreenRightButton />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>

    </ThemeContext.Provider>
  );
};

const lightTheme = {
  background1: '#fff',
  background2: '#f5f5f5',
  text1: '#2e2e2e',
  text2: '#454545',
  prime: '#00b3ff',
  accent: '#ff004c',
  placeholderColor: '#828282'
};

const darkTheme = {
  background1: '#1f1f1f',
  background2: '#303030',
  text1: '#FFF',
  text2: '#e8e8e8',
  prime: '#00b3ff',
  accent: '#ff004c',
  placeholderColor: '#828282'
};

export default App;
