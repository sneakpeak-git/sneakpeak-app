import { Text, View, SafeAreaView, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

export default function Home(props) {
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={{fontSize: 23}}>SneakPeak Login</Text>
            <Text style={{fontSize: 23, paddingBottom: 30, paddingTop: 30}}>🔧 Work in progress ahead! 🔧</Text>
            <Button title="Log In" onPress={() => props.setLoggedIn(true)} />
        </SafeAreaView>
    );
}