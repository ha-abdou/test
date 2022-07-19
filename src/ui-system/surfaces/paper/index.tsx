import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';

interface IPaperProps {
  children: React.ReactNode;
  elevation?: keyof typeof elevations;
  roundness?: number;
  variant?: keyof typeof variants;
  style?: StyleProp<ViewStyle>;
}

const Paper = ({
  children,
  elevation = 2,
  roundness = 10,
  variant = 'elevation',
  style,
}: IPaperProps) => {
  const shadow = elevations[elevation];
  const container = variants[variant];

  return (
    <View style={[container, shadow, {borderRadius: roundness}, style]}>
      {children}
    </View>
  );
};

const variants = StyleSheet.create({
  elevation: {
    backgroundColor: 'white',
    padding: 10,
  },
});

// todo refactor to separate file
// todo get elevations from UI/UX
const elevations = StyleSheet.create({
  1: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  2: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  3: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  4: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  5: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.46,
    shadowRadius: 11.14,
    elevation: 17,
  },
});

export default Paper;
