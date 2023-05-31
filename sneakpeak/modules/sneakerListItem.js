import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../styles/colors';
import { Image } from 'expo-image';

export default function SneakerListItem(props) {
    return <TouchableOpacity onPress={() => console.log('click!!')}>
                <View style={styles.itemContainer}>
                    <Image
                    source={{uri: props.item.Images[0] ? props.item.Images[0].link : 'https://payload.cargocollective.com/1/16/536584/8653252/FILFURY-Phil-Robson-Size-93-Mark_o.jpg'}}
                    style={{width: 130, 
                            height: 130,
                    }}
                    contentFit='contain' />
                    <View style={styles.textContainer}>
                        <Text style={styles.titleText}>{props.item.name}</Text>
                        <Text style={styles.colorText}>{props.item.color}</Text>
                        <Text style={styles.releaseDatetext}>{props.item.release_date}</Text>
                    </View>
                </View>
            </TouchableOpacity>
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        flexDirection: 'row',
        shadowColor: '#000',
        backgroundColor: colors.white,
        shadowOffset: {width: 0, height: 1.7},
        shadowOpacity: 0.2,
        height: 170,
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 20,
        width: 350,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'column',
    },
    titleText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        width: 180,
    },
    colorText: {
        fontSize: 16,
        textAlign: 'right',
        width: 180,
        marginTop: 5,
    },
    releaseDatetext: {
        fontSize: 16,
        textAlign: 'right',
        width: 180,
        marginTop: 'auto',
        color: '#a1a1a1'
    },
});
