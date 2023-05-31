import { StatusBar } from 'expo-status-bar';
import { Text, View, FlatList, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import Login from './screens/login';
import Main from './screens/main';
import api from './config/api';
import { globalStyles } from './styles/globalStyles';

const Content = () => {

    const [loggedIn, setLoggedIn] = useState(false);
    const [allSneakers, setAllSneakers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getSneakers = async () => {
            try {
                const response = await fetch(`${api.host}/sneakers`);
                const data = await response.json();
                setAllSneakers(data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }

        getSneakers();
    }, []);

    if (isLoading)
        return (
            <View style={globalStyles.container}>
                <ActivityIndicator />
            </View>
        );
  
    if (loggedIn) {
        return <Main allSneakers={allSneakers} setLoggedIn={setLoggedIn} />;
    } else {
        return <Login setLoggedIn={setLoggedIn} />;
    }
}

const App = () => {
  return (
      <NavigationContainer>
          <Content />
      </NavigationContainer>
  );
};

export default App;