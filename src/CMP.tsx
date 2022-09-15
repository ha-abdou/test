import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface ICMPProps {
  title: string;
  subTitle: string;
  fullName: string;
  initial: string;
}

const CMP = ({title, subTitle, fullName, initial}: ICMPProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.rightContainer}>
        <View style={styles.circle} />
        <View style={styles.bar} />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <View style={styles.nameContainer}>
          <Text style={styles.initial}>{initial}</Text>
          <Text>{fullName}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  title: {
    color: 'blue',
  },
  subTitle: {
    fontStyle: 'italic',
  },
  nameContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
  },
  initial: {
    color: 'white',
    backgroundColor: 'grey',
    paddingVertical: 2,
    paddingHorizontal: 3,
    borderRadius: 10,
    fontWeight: 'bold',
    fontSize: 12,
    marginRight: 8,
  },
  circle: {
    width: 18,
    height: 18,
    backgroundColor: 'blue',
    borderRadius: 10,
    borderColor: 'white',
    borderWidth: 3,
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 1,
  },
  bar: {
    width: 5,
    flex: 1,
    backgroundColor: 'blue',
    alignSelf: 'center',
  },
  rightContainer: {
    width: 18,
    marginHorizontal: 20,
  },
});

export default CMP;
