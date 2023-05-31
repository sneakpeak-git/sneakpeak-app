import { Text, View, SafeAreaView, Button } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

export default function Profile(props) {
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={{fontSize: 20, paddingBottom: 30}}>This is going to be the profile page 😎</Text>
            <Button title="Logout" onPress={() => props.setLoggedIn(false)} />
        </SafeAreaView>
    );
}