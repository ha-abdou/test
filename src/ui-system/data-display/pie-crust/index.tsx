import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

interface IPieCrustProps {
  value: [boolean, boolean, boolean, boolean];
  size: number;
  thickness: number;
  activeThickness: number;
  color: string;
  inactiveColor: string;
  gap: number;
}

const PieCrust = ({
  value,
  size,
  thickness,
  activeThickness,
  color,
  inactiveColor,
  gap,
}: IPieCrustProps) => {
  const style = useMemo(
    () =>
      StyleSheet.flatten({
        width: size,
        height: size,
        transform: [{rotateZ: '45deg'}],
      }),
    [size],
  );
  const options = useMemo(
    () => ({
      size,
      thickness,
      activeThickness,
      color,
      inactiveColor,
      gap,
      inactiveSize: size - thickness,
      delta: (size - (size - thickness)) / 2,
      borderRadius: size / 2,
      inactiveBorderRadius: (size - thickness) / 2,
    }),
    [size, thickness, activeThickness, color, inactiveColor, gap],
  );
  return (
    <View style={style}>
      <TopLeft active={value[0]} options={options} />
      <TopRight active={value[1]} options={options} />
      <BottomRight active={value[2]} options={options} />
      <BottomLeft active={value[3]} options={options} />
    </View>
  );
};

const BottomRight = ({active, options}) => {
  const {
    size,
    delta,
    gap,
    activeThickness,
    color,
    inactiveSize,
    borderRadius,
    inactiveBorderRadius,
    thickness,
    inactiveColor,
  } = options;
  const style = useMemo(
    () =>
      StyleSheet.flatten([
        styles.absolute,
        styles.bottomRight,
        active
          ? {
              width: size,
              height: size,
              transform: [{translateX: -delta + gap}, {translateY: -delta}],
              borderRadius,
              borderLeftWidth: activeThickness,
              borderRightWidth: activeThickness,
              borderRightColor: color,
              borderTopWidth: activeThickness,
              borderBottomWidth: activeThickness,
            }
          : {
              width: inactiveSize,
              height: inactiveSize,
              transform: [{translateX: gap}, {translateY: 0}],
              borderRadius: inactiveBorderRadius,
              borderLeftWidth: thickness,
              borderRightWidth: thickness,
              borderRightColor: inactiveColor,
              borderTopWidth: thickness,
              borderBottomWidth: thickness,
            },
      ]),
    [active, options],
  );
  return <View style={style} />;
};

const TopRight = ({active, options}) => {
  const style = useMemo(
    () =>
      StyleSheet.flatten([
        styles.absolute,
        styles.topRight,
        active
          ? {
              width: options.size,
              height: options.size,
              transform: [
                {translateX: -options.delta},
                {translateY: -options.delta - options.gap},
              ],
              borderRadius: options.borderRadius,
              borderLeftWidth: options.activeThickness,
              borderRightWidth: options.activeThickness,
              borderTopWidth: options.activeThickness,
              borderTopColor: options.color,
              borderBottomWidth: options.activeThickness,
            }
          : {
              width: options.inactiveSize,
              height: options.inactiveSize,
              transform: [{translateX: 0}, {translateY: -options.gap}],
              borderRadius: options.inactiveBorderRadius,
              borderLeftWidth: options.thickness,
              borderRightWidth: options.thickness,
              borderTopWidth: options.thickness,
              borderTopColor: options.inactiveColor,
              borderBottomWidth: options.thickness,
            },
      ]),
    [active, options],
  );

  return <View style={style} />;
};

const BottomLeft = ({active, options}) => {
  const {
    size,
    delta,
    gap,
    activeThickness,
    color,
    inactiveSize,
    borderRadius,
    inactiveBorderRadius,
    thickness,
    inactiveColor,
  } = options;
  const style = useMemo(
    () =>
      StyleSheet.flatten([
        styles.absolute,
        styles.bottomLeft,
        active
          ? {
              width: size,
              height: size,
              transform: [{translateX: -delta}, {translateY: -delta + gap}],
              borderRadius,
              borderLeftWidth: activeThickness,
              borderRightWidth: activeThickness,
              borderTopWidth: activeThickness,
              borderBottomWidth: activeThickness,
              borderBottomColor: color,
            }
          : {
              width: inactiveSize,
              height: inactiveSize,
              transform: [{translateX: 0}, {translateY: gap}],
              borderRadius: inactiveBorderRadius,
              borderLeftWidth: thickness,
              borderRightWidth: thickness,
              borderTopWidth: thickness,
              borderBottomWidth: thickness,
              borderBottomColor: inactiveColor,
            },
      ]),
    [active, options],
  );
  return <View style={style} />;
};

const TopLeft = ({active, options}) => {
  const {
    size,
    delta,
    gap,
    activeThickness,
    color,
    inactiveSize,
    borderRadius,
    inactiveBorderRadius,
    thickness,
    inactiveColor,
  } = options;
  const style = useMemo(
    () =>
      StyleSheet.flatten([
        styles.absolute,
        styles.topLeft,
        active
          ? {
              width: size,
              height: size,
              transform: [{translateX: -delta - gap}, {translateY: -delta}],
              borderRadius,
              borderLeftWidth: activeThickness,
              borderLeftColor: color,
              borderRightWidth: activeThickness,
              borderTopWidth: activeThickness,
              borderBottomWidth: activeThickness,
            }
          : {
              width: inactiveSize,
              height: inactiveSize,
              transform: [{translateX: -gap}, {translateY: 0}],
              borderRadius: inactiveBorderRadius,
              borderLeftWidth: thickness,
              borderLeftColor: inactiveColor,
              borderRightWidth: thickness,
              borderTopWidth: thickness,
              borderBottomWidth: thickness,
            },
      ]),
    [active, options],
  );
  return <View style={style} />;
};

const styles = StyleSheet.create({
  absolute: {
    position: 'absolute',
  },
  bottomRight: {
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderLeftColor: 'transparent',
    backgroundColor: 'transparent',
  },
  topRight: {
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    backgroundColor: 'transparent',
  },
  topLeft: {
    borderBottomColor: 'transparent',
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    backgroundColor: 'transparent',
  },
  bottomLeft: {
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: 'transparent',
    backgroundColor: 'transparent',
  },
});

export default PieCrust;
