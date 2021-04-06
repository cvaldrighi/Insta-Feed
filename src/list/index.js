import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default class List extends Component{

    constructor(props){
        super(props);
        this.state = {
            feed: this.props.data
        };
        this.showLikes = this.showLikes.bind(this);
        this.like = this.like.bind(this);
        this.loadIcon = this.loadIcon.bind(this);
    }

    showLikes(likes){
        let feed = this.state.feed;

        if(feed.likes <= 0){
            return;
        }

        return(
            <Text style={styles.likes}>
                {feed.likes} {feed.likes > 1 ? 'likes' : 'like'}
            </Text>
        );
    }

    like(){
        let feed = this.state.feed;

        if(feed.liked === true){
            this.setState({
                feed:{
                    ...feed,
                    liked: false,
                    likes: feed.likes - 1
                }
            });
        }else{
            this.setState({
                feed:{
                    ...feed,
                    liked: true,
                    likes: feed.likes + 1
                }
            });
        }
    }

    loadIcon(liked){
        return liked ? require('../img//icons/likeada.png') : require('../img//icons/like.png')
    }

    render(){
        return(
            <View style={styles.areaFeed}> 

               <View style={styles.viewUser}>
                   <Image
                   source={this.state.feed.imgUser}
                   style={styles.userImg}
                   />
                   <Text style={styles.userName}> {this.state.feed.userName}</Text>
               </View>

               <Image 
                resizeMode='cover'
                source={this.state.feed.imgContent}
                style={styles.contentImg}
               />

               <View style={styles.areaBtn}>
                   <TouchableOpacity onPress={this.like}>
                       <Image
                        source={this.loadIcon(this.state.feed.liked)}
                        style={styles.icon}
                       />
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.btnSend}>
                       <Image
                        source={require('../img//icons/send.png')}
                        style={styles.icon}
                       />
                   </TouchableOpacity>
               </View>

               {this.showLikes(this.state.feed.likes)}

               <View style={styles.viewContentFooter}>
                   <Text style={styles.userFooter}>
                       {this.state.feed.userName}
                   </Text>

                   <Text style={styles.descFooter}>
                       {this.state.feed.desc}
                   </Text>
               </View>


            </View>
        );
    }
}

const styles = StyleSheet.create({
 areaFeed: {

 },
 userName:{
    fontSize: 22,
    textAlign: 'left',
    color: '#000000',
 },
 userImg:{
    width: 50,
    height: 50,
    borderRadius: 25,
 },
 contentImg:{
     flex:1,
     height: 400,
     
     alignItems: 'center'
 },
 viewUser:{
     flexDirection:'row',
     flex: 1,
     alignItems: 'center',
     padding: 8,
 },
 areaBtn:{
     flexDirection: 'row',
     padding: 5,
 },
 icon:{
     width: 33,
     height: 33,
 },
 btnSend:{
    padding: 5,
 },
 viewContentFooter:{
     flexDirection: 'row',
     alignItems: 'center',
 },
 userFooter:{
     fontSize: 18,
     fontWeight: 'bold',
     color: '#000',
     paddingLeft: 5,
 },
 descFooter:{
     paddingLeft: 5,
     fontSize: 15,
     color: '#000',
 },
 likes:{
    fontWeight: 'bold',
    marginLeft: 5,
 }
});