import React, {useRef, useEffect, useCallback} from 'react';
import {
  View,
  Animated,
  TextInput as RNTextInput,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TextInputProps,
} from 'react-native';

interface ITextInputProps {
  placeholder?: string;
  icon?: string;
  value?: string;
  onChangeText: (text: string) => void;
  style?: StyleProp<ViewStyle>;
  inputProps?: TextInputProps;
}

const TextInput = ({
  value,
  onChangeText,
  placeholder,
  icon,
  style,
  inputProps,
}: ITextInputProps) => {
  const translateY = useRef(new Animated.Value(!value ? 15 : 0));
  const animatedTextStyle = useRef([
    styles.label,
    {transform: [{translateY: translateY.current}]},
  ]);
  // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/35572
  const inputRef = useRef() as React.MutableRefObject<RNTextInput>;

  const animText = useCallback(() => {
    if (!value) {
      Animated.timing(translateY.current, {
        toValue: 15,
        duration: 100,
        useNativeDriver: true,
      }).start();
    }
  }, [value]);

  const onFocus = useCallback(() => {
    Animated.timing(translateY.current, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  }, []);

  useEffect(() => {
    if (!inputRef?.current?.isFocused()) {
      animText();
    }
  }, [animText]);

  return (
    <View style={[styles.container, style]}>
      {icon && <View style={styles.icon} />}
      <View style={styles.inputContainer}>
        {placeholder && (
          <Animated.Text style={animatedTextStyle.current}>
            {placeholder}
          </Animated.Text>
        )}
        <RNTextInput
          {...inputProps}
          ref={inputRef}
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
          onFocus={onFocus}
          onBlur={animText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    borderColor: '#e5e5e5',
    borderWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    height: 62,
  },
  icon: {
    marginRight: 20,
    width: 20,
    height: 20,
    backgroundColor: 'black',
  },
  label: {
    fontFamily: 'Open Sans',
    fontWeight: '400',
    fontSize: 12,
    lineHeight: 16,
  },
  input: {
    margin: 0,
    padding: 0,
  },
  inputContainer: {
    flex: 1,
  },
});

export default TextInput;
