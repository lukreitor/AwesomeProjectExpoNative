import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = (props) => {
  const boxColor = {
    backgroundColor: props.hexCode,
  };
  const textColor = {
    color:
      parseInt(props.hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={(styles.boxText, textColor)}>
        {props.colorName}: {props.hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'cyan',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 10,
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
  cyan: {
    backgroundColor: 'cyan',
  },
  blue: {
    backgroundColor: 'blue',
  },
  magenta: {
    backgroundColor: 'magenta',
  },
  orange: {
    backgroundColor: 'orange',
  },
});

export default ColorBox;
