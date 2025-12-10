import EmailIcon from '@/assets/icon/email.svg';
import EyesOffIcon from '@/assets/icon/eyes-off.svg';
import EyesOnIcon from '@/assets/icon/eyes-on.svg';
import FBIcon from '@/assets/icon/facebook.svg';
import GoogleIcon from '@/assets/icon/google.svg';
import PassIcon from '@/assets/icon/pass.svg';
import ShopIcon from '@/assets/icon/shop.svg';

import { GlobalText, GlobalText as Text } from '@/components/text/text_Regular';
import { registerUser } from '@/src/service/authservice';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { useFcmToken } from '@/src/hooks/usefcmtoken';
import { styles } from '../../src/styles/register.style';

export default function LoginScreen() {
  const [secure, setSecure] = useState(true);

   const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const fcmToken = useFcmToken();
  const { width } = useWindowDimensions();
  const isSmallScreen = width < 500; 

  
const handleRegister = async () => {
    if (!nama || !email || !password) {
      Alert.alert("Error", "Semua field harus diisi");
      return;
    }

    try {
      const res = await registerUser({
        nama,
        email,
        password,
        deskripsi: "test",
        fcmToken: fcmToken || "dummy-token", // Fallback jika token belum load
      });

      console.log("Register Response:", res);

      // Asumsi: Backend mengembalikan { success: true, data: { loginId: "123" } }
      // Sesuaikan 'res.data.loginId' dengan struktur JSON backendmu yang asli
      if (res.success || res.loginId) { 
        
        // KIRIM loginId KE HALAMAN OTP
        router.push({
          pathname: "/auth/otp",
          params: { loginId: res.data?.loginId || res.loginId } 
        });

      } else {
        Alert.alert("Gagal", res.message || "Registrasi gagal");
      }

    } catch (err: any) {
      Alert.alert("Error", err.message);
    }
  };


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
        <GlobalText style={[styles.title, isSmallScreen && styles.titleMobile]}>DAFTAR</GlobalText>

        <Text style={[styles.subtitle, isSmallScreen && styles.subtitleMobile]}>
          Buat akun baru untuk mulai, dan gunakan aplikasi ini dengan lengkap.
        </Text>

        <View style={[styles.inputWrapper1, isSmallScreen && styles.inputWrapperMobile]}>
          <ShopIcon width={28} height={28} />
          <TextInput placeholder="Nama Toko" value={nama} onChangeText={setNama} placeholderTextColor="#0000006f" style={[styles.input, isSmallScreen && styles.inputMobile]} />
        </View>

        <View style={[styles.inputWrapper1, isSmallScreen && styles.inputWrapperMobile]}>
          <EmailIcon width={28} height={28} />
          <TextInput placeholder="Email Address" value={email} onChangeText={setEmail} placeholderTextColor="#0000006f" style={[styles.input, isSmallScreen && styles.inputMobile]} />
        </View>

        <View style={[styles.inputWrapper2, isSmallScreen && styles.inputWrapperMobile]} >
          <View style={{flexDirection: 'row'}}>
            <PassIcon width={28} height={28} />
            <TextInput
              placeholder="Kata Sandi"
              secureTextEntry={secure}
              value={password}
              onChangeText={setPassword}
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
          Sudah punya akun? 
          <TouchableOpacity onPress={() => router.push('/auth/login')}>
            <Text style={styles.registerBold}> Masuk sekarang</Text>
          </TouchableOpacity>
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Daftar</Text>
        </TouchableOpacity>

        <View style={[styles.dividerContainer,isSmallScreen && styles.dividerContainerMobile]}>
          <View style={[styles.line, isSmallScreen && styles.lineMobile]} />
          <Text style={[styles.dividerText, isSmallScreen && styles.dividerTextMobile]}>Atau</Text>
          <View style={[styles.lineMobile, isSmallScreen && styles.lineMobile]} />
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.accContainerMobile}>
            <GoogleIcon width={20} height={20} />
            <Text style={styles.accNameMobile}>Google</Text>
          </View>

          <View style={styles.accContainerMobile}>
            <FBIcon width={22} height={22} />
            <Text style={styles.accNameMobile}>Facebook</Text>
          </View>
        </View>

      </LinearGradient>
    </View>
  );
}
