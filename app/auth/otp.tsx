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

import { styles } from '../../src/styles/otp.style';

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
        <GlobalText style={[styles.title, isSmallScreen && styles.titleMobile]}>KODE OTP</GlobalText>

        <Text style={[styles.subtitle, isSmallScreen && styles.subtitleMobile]}>
          Silahkan masukkan kode OTP yang dikirimkan melalui email
        </Text>

        <View style={[styles.inputWrapper1, isSmallScreen && styles.inputWrapperMobile]}>
          <TextInput placeholder="KODE OTP" placeholderTextColor="#0000006f" style={[styles.input, isSmallScreen && styles.inputMobile]} />
        </View>

        {/* <Text style={[styles.registerText, isSmallScreen && styles.registerTextMobile]}>
          Belum punya akun? 
          <TouchableOpacity onPress={() => router.push('/auth/register')}>
            <Text style={styles.registerBold}> Daftar sekarang</Text>
          </TouchableOpacity>
        </Text> */}

        <TouchableOpacity style={styles.button} onPress={() => router.push('/auth/otp')}>
          <Text style={styles.buttonText}>Verifikasi</Text>
        </TouchableOpacity>

      </LinearGradient>
    </View>
  );
}
