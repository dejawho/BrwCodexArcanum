/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {COSPIRATION_DESCRIPTION} from './data/cospiration';
import {DESTRUCTION_DESCRIPTION} from './data/destruction';
import {DIVINATION_DESCRIPTION} from './data/divination';
import {ILLUSION_DESCRIPTION} from './data/illusion';
import {NECROMANCY_DESCRIPTION} from './data/necromancy';
import {TRASMUTATION_DESCRIPTION} from './data/trasmutation';
import {FORGOTTEN_DESCRIPTION} from './data/forgotten';
import Image from 'react-native-scalable-image';
import {AndroidBackHandler} from 'react-navigation-backhandler';

const SCHOOLS = [COSPIRATION_DESCRIPTION,DESTRUCTION_DESCRIPTION, DIVINATION_DESCRIPTION, ILLUSION_DESCRIPTION, NECROMANCY_DESCRIPTION,TRASMUTATION_DESCRIPTION, FORGOTTEN_DESCRIPTION];

class SchoolDescription extends React.Component {

  doBack = () => {
    this.props.navigation.navigate('Home');
    return true;
  }

  renderItem = ({item, index}) => {
    return (<View style={{flex: 1, marginVertical: 3, marginLeft: 10, marginRight: 10 }}>
        <Image source={item.image} width={100} style={{resizeMode: 'contain', alignSelf: 'center'}}/>
        <Text style={{fontSize: 25, fontWeight: 'bold', alignSelf: 'center'}}>{item.name}</Text>
        <Text style={{alignSelf: 'stretch', fontSize: 18}}>{item.text}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Elementi chiave delle Magie: {item.keyElements}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Affinità con le altre scuole: {item.affinities}</Text>
        <Text style={{fontWeight: 'bold', fontSize: 18}}>Difficoltà: {item.difficulty}</Text>
    </View>);
  }

  render() {
    return (
      <AndroidBackHandler onBackPress={this.doBack}>
        <View style={{ flex: 1, backgroundColor: 'black'}}>
            <SafeAreaView style={[{flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5}]}>
              <TouchableWithoutFeedback style ={{flex: 1}} onPress={()=> this.doBack()}>
                <Icon size={40} style={{ paddingLeft: 10, flex: 1}} name="ios-backspace" color="grey" />
              </TouchableWithoutFeedback>
            </SafeAreaView>
            <View style={{ flex: 1, backgroundColor: 'white'}}>
              <SafeAreaView style={{flex:1}}>
              <FlatList
                  data={SCHOOLS}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.name}
                />
              </SafeAreaView>
            </View>
        </View>
      </AndroidBackHandler>
    );
  }
}

export default SchoolDescription;
