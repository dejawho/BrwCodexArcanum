/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, FlatList, Modal, SafeAreaView, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import COSPIRAZIONE_DATA from './data/cospiration';
import SchoolSpell from './SchoolSpell';

class ListSchoolSpell extends React.Component {

  doBack = () => {
    this.props.doBack();
  }

  getData = () => {
    if (this.props.schoolName === 'Cospirazione'){
      return COSPIRAZIONE_DATA;
    }
    return [];
  }

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isSchoolListOpen}
        onRequestClose={() => {
          this.doBack();
        }}>
          <SafeAreaView style={[{flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 10, paddingBottom: 10}]}>
            <TouchableWithoutFeedback style ={{flex: 1}} onPress={()=> this.doBack()}>
              <Icon size={40} style={{ paddingLeft: 10, flex: 1}} name="ios-backspace" color="grey" />
            </TouchableWithoutFeedback>
          </SafeAreaView>
          <View style={{ flex: 1, alignItems: 'stretch' }}>
            <SafeAreaView >
            <FlatList
                data={this.getData()}
                renderItem={({ item, index }) => (<View style={{backgroundColor: (index % 2 === 0 ? 'white' : 'gray')}}><SchoolSpell title={item.title} imagePath={'../assets/' + item.image} effect={item.effect} reverseEffect={item.reverseEffect}/></View> )}
                keyExtractor={item => item.title}
              />
            </SafeAreaView>
          </View>
      </Modal>
    );
  }
}

export default ListSchoolSpell;
