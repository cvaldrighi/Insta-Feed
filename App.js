import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import List from './src/list';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state={
      feed: [
        {
          id: '1',
          userName: 'valdrigh_',
          desc: 'missing the decks',
          imgUser: require('./src/img/users/ca.jpg'),
          imgContent: require('./src/img/content/djvaldrigh.jpg'),
          liked: false,
          likes: 120
        },
        {
          id: '2',
          userName: 'vedanarecords',
          desc: '<3',
          imgUser: require('./src/img/users/vdna.png'),
          imgContent: require('./src/img/content/vdn.jpg'),
          liked: false,
          likes: 98
        },
        {
          id: '3',
          userName: 'digwax',
          desc: 'dancefloor',
          imgUser: require('./src/img/users/chord.jpg'),
          imgContent: require('./src/img/content/dancefloor.png'),
          liked: false,
          likes: 420
        },
        {
          id: '4',
          userName: 'greeny',
          desc: 'everybody loves the sunflowers',
          imgUser: require('./src/img/users/nature.jpg'),
          imgContent: require('./src/img/content/flower.jpg'),
          liked: false,
          likes: 34
        },
        {
          id: '5',
          userName: 'art_addicted',
          desc: 'some collages',
          imgUser: require('./src/img/users/pf.jpg'),
          imgContent: require('./src/img/content/prints.jpg'),
          liked: false,
          likes: 178
        }
      ]
    };
  }

  render(){
    return(
      <View style={styles.container}>

        <View style={styles.header}>
          <TouchableOpacity>
            <Image
            source={require('./src/img/icons/logo.png')}
            style={styles.logo}
          />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
            source={require('./src/img/icons/send.png')}
            style={styles.send}
          />
          </TouchableOpacity>  
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item)=> item.id}
          data={this.state.feed}
          renderItem={ ({item})=> <List data={item}/> }
        />

      </View>
    );
  }


}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  header:{
    height: 55,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.3,
    shadowColor: '#000',
    elevation: 1,
   
  },
  send:{
    width: 23,
    height: 23
  }
});

