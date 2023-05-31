import { Text, View, SafeAreaView } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

export default function Home() {
    return (
        <SafeAreaView style={globalStyles.container}>
            <Text style={{fontSize: 19}}>Welcome to</Text>
            <Text style={{fontSize: 28}}>SneakPeak!</Text>
            <Text style={{fontSize: 28}}>👟⛰️</Text>
            <View style={{width: '85%', top: 50, alignItems: 'center'}}>
                <Text style={{fontSize: 19, textAlign: 'center'}}>The home page is still WIP, so please check out the 'sneakers' tab below!</Text>
            </View>
        </SafeAreaView>
    );
}