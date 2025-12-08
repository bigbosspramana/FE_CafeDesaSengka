import { LinearGradient } from 'expo-linear-gradient';
import EmailIcon from '@/assets/icon/email.svg';
import PassIcon from '@/assets/icon/pass.svg';
import GoogleIcon from '@/assets/icon/google.svg';
import FBIcon from '@/assets/icon/facebook.svg';
import EyesOnIcon from '@/assets/icon/eyes-on.svg';
import EyesOffIcon from '@/assets/icon/eyes-off.svg';
import { View, Image, TextInput, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useState } from 'react';
import { GlobalText, GlobalText as Text } from '@/components/text/text_Regular';
import { router } from 'expo-router';

import { styles } from '../../src/styles/login.style';

export default function LoginScreen() {
  const [secure, setSecure] = useState(true);

  const { width } = useWindowDimensions();
  const isSmallScreen = width < 500; 

  return (
    <View style={[styles.container, isSmallScreen && styles.containerMobile]}>
      <Image
        source={require('@/assets/images/coffe.png')}
        style={[styles.image, isSmallScreen && styles.imageMobile]}
      />

      <LinearGradient
        colors={['hsla(0, 0%, 100%, 0.00)', 'hsla(0, 0%, 100%, 1.00)']}
        locations={[0, 0.17]}
        start={isSmallScreen ? { x: 0.5, y: 0 } : { x: 0, y: 0.5 }}
        end={isSmallScreen ? { x: 0.5, y: 1 }  : { x: 1, y: 0.5 }}
        style={[styles.formWrapper, isSmallScreen && styles.formWrapperMobile]}
      >
        <GlobalText style={[styles.title, isSmallScreen && styles.titleMobile]}>MASUK</GlobalText>

        <Text style={[styles.subtitle, isSmallScreen && styles.subtitleMobile]}>
          Masuk untuk mulai, dan gunakan aplikasi ini dengan lengkap.
        </Text>

        <View style={[styles.inputWrapper1, isSmallScreen && styles.inputWrapperMobile]}>
          <EmailIcon width={28} height={28} />
          <TextInput placeholder="Email Address" placeholderTextColor="#0000006f" style={[styles.input, isSmallScreen && styles.inputMobile]} />
        </View>

        <View style={[styles.inputWrapper2, isSmallScreen && styles.inputWrapperMobile]} >
          <View style={{flexDirection: 'row'}}>
            <PassIcon width={28} height={28} />
            <TextInput
              placeholder="Kata Sandi"
              secureTextEntry={secure}
              placeholderTextColor="#0000006f"
              style={[styles.input, isSmallScreen && styles.inputMobile]}
            />
          </View>

          <TouchableOpacity onPress={() => setSecure(!secure)}>
            {secure ? (
              <EyesOffIcon width={30} height={30} />
            ) : (
              <EyesOnIcon width={30} height={30} />
            )}
          </TouchableOpacity>
        </View>

        <Text style={[styles.registerText, isSmallScreen && styles.registerTextMobile]}>
          Belum punya akun? 
          <TouchableOpacity onPress={() => router.push('/auth/register')}>
            <Text style={styles.registerBold}> Daftar sekarang</Text>
          </TouchableOpacity>
        </Text>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/otp')}>
          <Text style={styles.buttonText}>Masuk</Text>
        </TouchableOpacity>

        <View style={[styles.dividerContainer,isSmallScreen && styles.dividerContainerMobile]}>
          <View style={[styles.line, isSmallScreen && styles.lineMobile]} />
          <Text style={[styles.dividerText, isSmallScreen && styles.dividerTextMobile]}>Atau</Text>
          <View style={[styles.lineMobile, isSmallScreen && styles.lineMobile]} />
        </View>

        <View style={styles.accContainerMobile}>
          <GoogleIcon width={20} height={20} />
          <Text style={styles.accNameMobile}>Google</Text>
        </View>

        <View style={styles.accContainerMobile}>
          <FBIcon width={22} height={22} />
          <Text style={styles.accNameMobile}>Facebook</Text>
        </View>

      </LinearGradient>
    </View>
  );
}
