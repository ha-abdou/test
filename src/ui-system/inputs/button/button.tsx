import React from 'react';
import {
  Pressable,
  Text,
  PressableProps,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

interface IButtonProps {
  children: string;
  onPress: PressableProps['onPress'];
  variant?: 'text' | 'contained' | 'outlined';
  color?: 'default' | 'white';
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button = ({
  children,
  onPress,
  variant = 'contained',
  color = 'default',
  style,
  textStyle,
}: IButtonProps) => {
  const styleCode = `${variant}_${color}` as const;

  return (
    <Pressable
      style={[{alignItems: 'center'}, styles[styleCode].container, style]}
      onPress={onPress}>
      <Text
        style={[
          {
            fontFamily: 'Inter',
            fontWeight: '500',
            fontSize: 14,
            lineHeight: 24,
          },
          styles[styleCode].text,
          textStyle,
        ]}>
        {children}
      </Text>
    </Pressable>
  );
};

const styles = {
  // contained
  contained_default: StyleSheet.create({
    container: {
      backgroundColor: '#6366f1',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 5,
    },
    text: {color: 'white'},
  }),
  contained_white: StyleSheet.create({
    container: {
      backgroundColor: 'white',
      paddingHorizontal: 15,
      paddingVertical: 10,
      borderRadius: 5,
    },
    text: {color: '#1f2937'},
  }),
  // text
  text_default: StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    text: {color: '#6366f1'},
  }),
  text_white: StyleSheet.create({
    container: {
      paddingHorizontal: 15,
      paddingVertical: 10,
    },
    text: {color: '#1f2937'},
  }),
  // outlined
  outlined_default: StyleSheet.create({
    container: {},
    text: {},
  }),
  outlined_white: StyleSheet.create({
    container: {},
    text: {},
  }),
};

export default Button;
