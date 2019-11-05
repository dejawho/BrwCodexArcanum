/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, SafeAreaView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {AndroidBackHandler} from 'react-navigation-backhandler';
import {connect} from 'react-redux';
import {setSpellSchool} from './store/actions/actions';

const DATA = ['Cospirazione', 'Distruzione', 'Divinazione', 'Illusione', 'Necromanzia', 'Trasmutazione', 'Dimenticata'];

class SchoolList extends React.Component {

  onBack = () => {
    this.props.navigation.navigate('Home');
    return true;
  }

  onItemSelected = (item) =>{
    this.props.setSpeelSchool(item);
    this.props.navigation.navigate('ListSchoolSpell');
  }

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
    );
  };

  render() {
    return (
      <AndroidBackHandler onBackPress={this.onBack}>
        <ImageBackground source={require('../assets/background.png')} style={{ flex: 1 }}>
          <SafeAreaView style={[{flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5}]}>
            <TouchableWithoutFeedback style ={{flex: 1}} onPress={()=> this.onBack()}>
              <Icon size={40} style={{ paddingLeft: 10, flex: 1}} name="ios-backspace" color="grey" />
            </TouchableWithoutFeedback>
          </SafeAreaView>
          <View style={{ flex: 1, alignItems: 'stretch' }}>
            <SafeAreaView >
            <FlatList
                data={DATA}
                renderItem={({ item }) => (<TouchableWithoutFeedback onPress={() => this.itemSelected(item)}>
                  <View style={{marginVertical:3}}>
                    <Text onPress={() => this.onItemSelected(item)} style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>{item}</Text>
                  </View>
                </TouchableWithoutFeedback>)}
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                keyExtractor={item => item}
              />
            </SafeAreaView>
          </View>
        </ImageBackground>
        </AndroidBackHandler>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setSpeelSchool: (spellSchool) => dispatch(setSpellSchool(spellSchool)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SchoolList);
