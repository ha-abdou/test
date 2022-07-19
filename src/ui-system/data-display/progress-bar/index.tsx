import React, {useRef, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

interface IProgressBarProps {
  progress: number;
  variant?: keyof typeof variants;
  height?: number;
  borderRadius?: number;
}

/**
 *
 * @param progress float from 0 to 1
 */
const ProgressBar = ({
  progress,
  height = 4,
  borderRadius = height / 2,
  variant = 'default',
}: IProgressBarProps) => {
  const anim = useRef(new Animated.Value(0));
  const width = useRef(
    anim.current.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '100%'],
    }),
  ).current;

  useEffect(() => {
    let toValue = progress > 1 ? 1 : progress;
    toValue = toValue < 0 ? 0 : toValue;

    Animated.spring(anim.current, {
      toValue,
      speed: 4,
      bounciness: 12,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={{height, borderRadius}}>
      <View
        style={[variants[variant].inactive, {borderRadius}, styles.inactive]}
      />
      <Animated.View
        style={[
          variants[variant].active,
          styles.active,
          {
            width,
            borderRadius,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inactive: {height: '100%'},
  active: {
    height: '100%',
    position: 'absolute',
  },
});

const variants = {
  default: StyleSheet.create({
    inactive: {backgroundColor: 'red'},
    active: {backgroundColor: 'green'},
  }),
};

export default ProgressBar;
