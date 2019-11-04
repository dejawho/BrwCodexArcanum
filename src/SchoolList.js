/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, FlatList, Modal, SafeAreaView, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const DATA = ['Cospirazione', 'Distruzione', 'Divinazione', 'Illusione', 'Necromanzia', 'Trasmutazione', 'Dimenticata'];

class SchoolList extends React.Component {

  itemSelected = (item) => {
    this.props.itemSelected(item);
  }

  FlatListItemSeparator = () => {
    return (
      //Item Separator
      <View style={{height: 0.5, width: '100%', backgroundColor: '#C8C8C8'}}/>
    );
  };

  render() {
    return (
      <Modal
        animationType="slide"
        transparent={false}
        visible={this.props.isSchoolOpen}
        onRequestClose={() => {
          this.itemSelected(null);
        }}>
        <ImageBackground source={require('../assets/background.png')} style={{ flex: 1 }}>
          <SafeAreaView style={[{flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.5)', paddingTop: 5, paddingBottom: 5}]}>
            <TouchableWithoutFeedback style ={{flex: 1}} onPress={()=> this.itemSelected(null)}>
              <Icon size={40} style={{ paddingLeft: 10, flex: 1}} name="ios-backspace" color="grey" />
            </TouchableWithoutFeedback>
          </SafeAreaView>
          <View style={{ flex: 1, alignItems: 'stretch' }}>
            <SafeAreaView >
            <FlatList
                data={DATA}
                renderItem={({ item }) => (<TouchableWithoutFeedback onPress={() => this.itemSelected(item)}>
                  <View style={{marginVertical:3}}>
                    <Text onPress={() => this.itemSelected(item)} style={{fontSize: 40, fontWeight: 'bold', color: 'white'}}>{item}</Text>
                  </View>
                </TouchableWithoutFeedback>)}
                ItemSeparatorComponent = {this.FlatListItemSeparator}
                keyExtractor={item => item}
              />
            </SafeAreaView>
          </View>
        </ImageBackground>
      </Modal>
    );
  }
}

export default SchoolList;
