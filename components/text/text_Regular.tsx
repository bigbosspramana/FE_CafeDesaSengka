import { Text, TextProps, StyleSheet } from 'react-native';

export function GlobalText({ style, ...props }: TextProps) {
  return (
    <Text
      {...props}
      style={[styles.text, style]}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'PoppinsRegular',
    color: '#111',
  },
});
