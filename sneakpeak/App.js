import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sneakers:</Text>
      <FlatList
          data={getSneakers()}
          renderItem={({item}) => {
              return <Text>{item.name} - {item.description}</Text>
          }}
          keyExtractor={item => item.sneakerId.toString()}
          style={styles.list}
      />
    </View>
  );
}

function getSneakers() {
  return [
      {
          "sneakerId": 1,
          "name": "Air Jordan 1 Retro High",
          "description": "A classic high-top sneaker that combines tradition and trend. Features a leather upper for durability and a rubber outsole for traction."
      },
      {
          "sneakerId": 2,
          "name": "Adidas Yeezy Boost 350 V2",
          "description": "A popular low-top sneaker designed by Kanye West. The Yeezy Boost 350 V2 features a Primeknit upper and a Boost midsole for comfort."
      },
      {
          "sneakerId": 3,
          "name": "Nike Air Force 1 Low",
          "description": "An iconic low-top sneaker. The Air Force 1 Low provides a fresh take on classic athletic design, featuring a leather upper and an Air-Sole unit for comfortable cushioning."
      },
      {
          "sneakerId": 4,
          "name": "Balenciaga Triple S",
          "description": "A high-fashion sneaker that blends design with comfort. The Triple S features a triple-stacked sole and a mesh and leather upper."
      }
  ];
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:'20%',
  },
  list: {

  },
});
