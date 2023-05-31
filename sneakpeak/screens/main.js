import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './main/home';
import Sneakers from './main/sneakers';
import Profile from './main/profile';
import colors from '../styles/colors';

const Tab = createBottomTabNavigator();

export default function Main(props) {
    return (
        <Tab.Navigator
        backBehavior='none'
        screenOptions={{ 
            headerShown: false, 
            tabBarShowLabel: true,
            tabBarStyle: styles.bottomBar,
            }} 
            sceneContainerStyle={{backgroundColor: colors.white}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Sneakers" children={() => <Sneakers allSneakers={props.allSneakers} />} />
            <Tab.Screen name="Profile" children={() => <Profile setLoggedIn={props.setLoggedIn} />} />
        </Tab.Navigator>
    );
}

const styles = {
    bottomBar: {
        // height: Platform.OS === 'ios' ? 90 : 77,
        // paddingTop: Platform.OS === 'ios' ? 13 : 0,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: colors.black,
        shadowOpacity: 0.1,
        shadowRadius: 6,
      },
}