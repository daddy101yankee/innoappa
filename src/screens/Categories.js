import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import Card from '../components/Card';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Cup Bread',
    img: require('../assets/cup.png'),
    price: '$2.99',
    detail:
      'Wheat free, made with jackfruit & mixed berry smoothie topped with fresh fruit.',
    liked: false,
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'French Baguette',
    img: require('../assets/FrenchBaguette.png'),
    price: '$2.99',
    detail:
      'Wheat free, made with jackfruit & mixed berry smoothie topped with fresh fruit.',
    liked: false,
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    img: require('../assets/maskCopy.png'),
    price: '$2.99',
    detail:
      'Wheat free, made with jackfruit & mixed berry smoothie topped with fresh fruit.',
    liked: false,
  },
  {
    id: '1',
    title: '4 Item',
    img: require('../assets/maskCopy.png'),
    price: '$2.99',
    detail:
      'Wheat free, made with jackfruit & mixed berry smoothie topped with fresh fruit.',
    liked: false,
  },
  {
    id: '2',
    title: '5 Item',
    img: require('../assets/maskCopy.png'),
    price: '$2.99',
    detail:
      'Wheat free, made with jackfruit & mixed berry smoothie topped with fresh fruit.',
    liked: false,
  },
  {
    id: '3',
    title: '6 Item',
    img: require('../assets/maskCopy.png'),
    price: '$2.99',
    detail:
      'Wheat free, made with jackfruit & mixed berry smoothie topped with fresh fruit.',
    liked: false,
  },
];

function Item({title, img, price, inc, count, id}) {
  console.log(count);
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
      <Card img={img} title={title} price={price} count={count} inc={inc} id={id} />
      <Card img={img} title={title} price={price} count={count} inc={inc} id={id}/>
    </View>
  );
}

export default class Categories extends React.Component {
  state = {count: 0};

  increment = () => {
    this.setState({count: this.state.count + 1});
  };
  decrement = () => {
    this.setState({count: this.state.count - 1});
  };

  render() {
    // console.log(this.state.count)
    return (
      <View style={{flex: 1}}>
        <StatusBar backgroundColor="#EF7922" />

        <View
          style={{
            flex: 2,
            backgroundColor: '#EF7922',
            borderBottomStartRadius: 20,
            borderBottomEndRadius: 20,
          }}>
          <View style={{flex: 1, flexDirection: 'row', left: '10%', top: '2%'}}>
            <View style={{flex: 1}}>
              <Image source={require('../assets/menu.png')} />
            </View>
            <View style={{flex: 5}}>
              <Text style={{color: 'white', fontSize: 20}}>Categories</Text>
            </View>
            <View style={{flex: 1}}>
              <Image source={require('../assets/search.png')} />
            </View>
            <View style={{flex: 1}}>
              <Image source={require('../assets/cart.png')} />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}>
            <TouchableOpacity>
              <Text style={styles.headtxt}>Bread</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.headtxt}>Rolls</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.headtxt}>Small Pastry</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.headtxt}>Coffee</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.headtxt}>Cookies</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flex: 8}}>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={DATA}
              // horizontal
              // scrollEnabled={false}
              showsVerticalScrollIndicator={false}
              renderItem={({item}) => (
                <Item
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  inc={this.increment}
                  count={this.state.count}
                  id={item.id}
                />
              )}
              keyExtractor={item => item.id}
            />
          </SafeAreaView>
        </View>
        <View style={{flex: 2}}>
          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              // borderColor: 'red',
              // borderWidth: 1,
              backgroundColor: '#EF7922',
              margin: '5%',
              borderRadius: 10,
              alignItems: 'center',
            }}>
            <View style={{flex: 1, borderColor: 'red', left: '20%'}}>
              <Text style={{color: 'white', fontSize: 18}}>1 ITEM</Text>
              <Text style={{color: 'white', fontSize: 18}}>$1.70</Text>
            </View>
            <View style={{flex: 0.2, left: '35%'}}>
              <Text style={{color: 'white', fontSize: 18}}>Cart</Text>
            </View>
            <View style={{flex: 0.2, left: '20%'}}>
              <Image source={require('../assets/moveon.png')} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  flexDirection:'row'
  },
  item: {
    marginTop: '5%',
    // marginLeft: '6%',
  },
  title: {
    fontSize: 18,
  },
  headtxt: {
    color: 'white',
  },
});
