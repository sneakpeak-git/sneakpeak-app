import { Text, View, SafeAreaView } from 'react-native';
import SneakerListItem from '../../modules/sneakerListItem';
import { FlatList } from 'react-native';
import { globalStyles } from '../../styles/globalStyles';

export default function Sneakers(props) {
    if(props.allSneakers.length === 0) {
        return (
        <SafeAreaView style={globalStyles.container}>
            <Text>There are no sneakers in the database 🫠</Text>
        </SafeAreaView>
        );
    }
    else {
        return (
            <SafeAreaView style={globalStyles.container}>
                <FlatList
                data={props.allSneakers}
                renderItem={({item}) => <SneakerListItem item={item} />}
                keyExtractor={item => item.id} />
            </SafeAreaView>
        );
    }
}