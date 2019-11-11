/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableWithoutFeedback, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { MAGES_DATA } from './data/mages';
import ScalableImage from 'react-native-scalable-image';
import SchoolSpell from './SchoolSpell';
import {getDescriptionById} from './data/schools';
import {AndroidBackHandler} from 'react-navigation-backhandler';

const SEPARATOR = require('../assets/div.png');

class MagesDescription extends React.Component {

  doBack = () => {
    this.props.navigation.navigate('Home');
    return true;
  }

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <Image source={SEPARATOR} style={{resizeMode: 'stretch', width: '100%', height: 15}}/>
    );
  };


  renderItem = ({ item, index }) => {
    const spellData = {title: item.personalSpell,
                       set: item.set,
                       effect: item.personalSpellEffect,
                       reverseEffect: item.personalSpellReverseEffect,
                       image: item.personalSpellImage,
                       evocationStats: item.spellEvocationStats,
                       reverseEvocationStats: item.reverseSpellEvocationStats,
                      };
    const schoolDescription = getDescriptionById(item.favouriteSchool);
    return (<View style={{ flex: 1, marginVertical: 3, marginLeft: 10, marginRight: 10 }}>
      <Text style={{ fontSize: 25, fontWeight: 'bold', alignSelf: 'center' }}>{item.name}</Text>
      <ScalableImage source={item.image} width={200} style={{ resizeMode: 'contain', alignSelf: 'center' }} />
      <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>Magia Personale</Text>
      <View style={{ alignSelf: 'stretch' }}>
        <SchoolSpell data={spellData}/>
      </View>
      <ScalableImage source={schoolDescription.image} width={120} style={{ resizeMode: 'contain', alignSelf: 'center' }} />
      <Text style={{ fontWeight: 'bold', fontSize: 18, alignSelf: 'center' }}>{schoolDescription.name}</Text>
    </View>);
  }

  render() {
    return (
      <AndroidBackHandler onBackPress={this.doBack}>
        <View style={{ flex: 1, backgroundColor: 'black' }}>
          <SafeAreaView style={[{ flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5 }]}>
            <TouchableWithoutFeedback style={{ flex: 1 }} onPress={() => this.doBack()}>
              <Icon size={40} style={{ paddingLeft: 10, flex: 1 }} name="ios-backspace" color="grey" />
            </TouchableWithoutFeedback>
          </SafeAreaView>
          <View style={{ flex: 1, backgroundColor: 'white' }}>
            <SafeAreaView style={{ flex: 1 }}>
              <FlatList
                data={MAGES_DATA}
                renderItem={this.renderItem}
                keyExtractor={item => item.name}
                ItemSeparatorComponent= {this.FlatListItemSeparator}
                initialNumToRender={3}
              />
            </SafeAreaView>
          </View>
        </View>
      </AndroidBackHandler>
    );
  }
}

export default MagesDescription;
