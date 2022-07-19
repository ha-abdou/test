import React from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';

interface ITextTagProps {
  children: string;
  variant?: keyof typeof variants;
  textStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
}
const TextTag = ({
  children,
  textStyle,
  style,
  variant = 'default',
}: ITextTagProps) => {
  return (
    <View style={[styles.container, variants[variant].container, style]}>
      <Text style={[variants[variant].text, textStyle]}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 2,
    paddingHorizontal: 2,
  },
});

const variants = {
  default: StyleSheet.create({
    container: {backgroundColor: '#ff7e7e73'},
    text: {color: 'red'},
  }),
};

export default TextTag;
