import {Dimensions, StyleSheet} from 'react-native';

export const widthScreen = Dimensions.get('screen').width;

export const colors = {
  primary: '#2EB5E0',
  secondary: '#56E8F5',
  tertiary: '#a3ebb1',
  lightBg: '#fff',
  white: '#fefefe',
  lightGrey: '#fafafa',
  grey: '#5F5F5F',
  black: '#1f1f1f',
  opacity: '#1f1f1f99',
};

export const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center',
    elevation: 5,
  },
  backgroundLight: {
    backgroundColor: colors.lightBg,
  },
  backgroundWhite: {
    backgroundColor: colors.white,
  },
  backgroundPrimary: {
    backgroundColor: colors.primary,
  },
  backgroundOpacity: {
    backgroundColor: colors.opacity,
  },
  backgroundSecondary: {
    backgroundColor: colors.secondary,
  },
  textMedium: {
    fontWeight: '700',
    fontSize: 15,
  },
  textUppercase: {textTransform: 'uppercase'},
  textCenter: {
    textAlign: 'center',
  },
  textWhite: {
    color: colors.white,
  },
});
