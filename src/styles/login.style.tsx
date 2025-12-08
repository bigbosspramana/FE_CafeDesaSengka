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
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 6,
  },

  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: 25,
    fontSize: 16,
  },

  inputWrapper1: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    flexDirection: 'row',
    elevation: 4,
    alignItems: 'center'
  },

  inputWrapper2: {
    marginBottom: 20,
    padding: 20,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    flexDirection: 'row',
    elevation: 4,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  input: {
    width: '100%',
    outlineWidth: 0,
    fontSize: 16,
    marginLeft: 20,
    fontWeight: '600',
    color: '#000000',
  },

  dividerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },

  line: {
    height: 2,
    backgroundColor: '#000000',
    width: '40%',
    opacity: 0.2,
  },

  dividerText: {
    color: '#000000',
    width: '20%',
    textAlign: 'center',
    opacity: 0.4,
    fontWeight: '800',
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
    fontWeight: '600',
    fontSize: 16,
  },

  // Responsive Mobile
  containerMobile: {
    flexDirection: 'column',
  },

  imageMobile: {
    width: '100%',
    height: '35%',
  },

  formWrapperMobile: {
    position: 'absolute',
    top: 200,
    width: '100%',
    height: '60%',
    paddingVertical: 50,
    marginVertical: 20,
    paddingRight: 30,
    paddingLeft: 30,
    justifyContent: 'flex-start',
    zIndex: 2,
  },

  titleMobile: {
    textAlign: 'right',
    marginBottom: 6,
  },

  subtitleMobile: {
    textAlign: 'right',
    marginBottom: 25,
    fontSize: 16,
  },

  inputWrapperMobile: {
    marginBottom: 20,
    padding: 15,
  },

  inputMobile: {
    fontSize: 16,
  },

  registerTextMobile: {
    fontSize: 14,
  },

  dividerContainerMobile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },

  lineMobile: {
    height: 2,
    backgroundColor: '#000000',
    width: '40%',
    opacity: 0.2,
  },

  dividerTextMobile: {
    color: '#000000',
    width: '20%',
    textAlign: 'center',
    opacity: 0.4,
    fontWeight: '800',
  },

  accContainerMobile: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
    backgroundColor: '#fff',
    width: '100%',
    paddingVertical: 15,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 20,
  },

  accNameMobile: {
    fontWeight: '600',
    fontSize: 14,
    marginLeft: 10,
  },
});
