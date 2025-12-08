import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFF',
  },

  image: {
    width: '55%',
    height: '100%',
    resizeMode: 'cover',
    zIndex: 1,
  },

  formWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '60%',
    height: '100%',
    paddingVertical: 25,
    paddingRight: 100,
    paddingLeft: 250,
    justifyContent: 'center',
    zIndex: 2,
  },

  title: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 6,
  },

  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 25,
    fontSize: 16,
  },

  inputWrapper: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    flexDirection: 'row',
  },

  input: {
    outlineWidth: 0,
    fontSize: 16,
    marginLeft: 20,
    fontWeight: '700',
    color: '#0000006f',
  },

  registerText: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 16,
    color: '#444',
  },

  registerBold: {
    fontWeight: '700',
    color: '#BE802F',
  },

  button: {
    backgroundColor: '#BE813E',
    paddingVertical: 14,
    borderRadius: 12,
  },

  buttonText: {
    textAlign: 'center',
    color: '#FFF',
    fontWeight: '700',
    fontSize: 16,
  },
});
