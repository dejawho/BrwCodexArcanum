/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text } from 'react-native';
import EvocationStats from './EvocationStats';
import ScalableImage from 'react-native-scalable-image';

class RoomEntry extends React.Component {

  state = {
    imageContainerWidth: 0,
    imageContainerHeight: 0,
  }

  imageContainerLayout = (event) => {
    const { width, height } = event.nativeEvent.layout;
    if (this.state.imageContainerWidth !== width || this.state.imageContainerHeight !== height) {
      this.setState({ imageContainerHeight: height, imageContainerWidth: width });
    }
  }

  getEffectWithStats = (evocationStats, effect) => {
    const stats = evocationStats.stats.map(stat => {
      return <EvocationStats key={this.props.room.name + stat.type} type={stat.type} value={stat.value} />;
    });
    const effectEvocationsStats = <View style={{ flexDirection: 'row' }}>{stats}</View>;
    const splittedString = effect.split('{evocationStats}');
    if (splittedString.length === 1) {
      effect = <><Text style={{ fontSize: 17 }}>{splittedString[0]}</Text>{effectEvocationsStats}</>;
    } else {
      effect = <>
        <Text style={{ fontSize: 17 }}>{splittedString[0]}</Text>
        {effectEvocationsStats}
        <Text style={{ fontSize: 17 }}>{splittedString[1]}</Text>
      </>;
    }
    return effect;
  }


  render() {

    let effect = null;
    if (this.props.room.evocationStats) {
      effect = this.getEffectWithStats(this.props.room.evocationStats, this.props.room.effect);
    } else {
      effect = <Text style={{ fontSize: 17 }}>{this.props.room.effect}</Text>;
    }

    let set = null;
    if (this.props.room.set){
      set = <View style={{ flexDirection: 'row', paddingTop: 5 }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', fontStyle: 'italic' }}>Espansione:</Text>
        <Text style={{ fontSize: 17, fontWeight: 'bold', paddingLeft: 3 }}>{this.props.room.set}</Text>
      </View>;
    }

    let points = null;
    if (this.props.room.points){
      points = <View style={{ flexDirection: 'row' }}>
            <Text style={{ fontSize: 17, fontWeight: 'bold', fontStyle: 'italic' }}>Punti:</Text>
            <Text style={{ fontSize: 17, fontWeight: 'bold', paddingLeft: 3 }}>{this.props.room.points}</Text>
          </View>;
    }
    return (
      <View style={{ flex: 1, flexDirection: 'column', paddingLeft: 5, paddingRight: 5, justifyContent: 'center', marginVertical: 3 }}>
        <Text style={{ fontSize: 30, fontWeight: 'bold', paddingBottom: 5, textAlign: 'center' }}>{this.props.room.name}</Text>
        <ScalableImage source={this.props.room.image} height={100} style={{ resizeMode: 'contain', alignSelf: 'center' }} />
        {set}
        <View style={{ flexDirection: 'row', paddingTop: 5 }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', fontStyle: 'italic' }}>Instabilità:</Text>
          <Text style={{ fontSize: 17, fontWeight: 'bold', paddingLeft: 3 }}>{this.props.room.instability}</Text>
        </View>
        {points}
        <Text style={{ fontSize: 17, fontWeight: 'bold', fontStyle: 'italic', alignSelf: 'flex-start' }}>Effetto:</Text>
        {effect}
      </View>
    );
  }
}



export default RoomEntry;
