import EmailIcon from '@/assets/icon/email.svg';
import EyesOffIcon from '@/assets/icon/eyes-off.svg';
import EyesOnIcon from '@/assets/icon/eyes-on.svg';
import FBIcon from '@/assets/icon/facebook.svg';
import GoogleIcon from '@/assets/icon/google.svg';
import PassIcon from '@/assets/icon/pass.svg';
import { GlobalText, GlobalText as Text } from '@/components/text/text_Regular';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useState } from 'react';
import { ActivityIndicator, Alert, Image, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { useFcmToken } from '@/src/hooks/usefcmtoken';
import { loginUser } from '@/src/service/authservice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { styles } from '../../src/styles/login.style';

export default function LoginScreen() {
  const [secure, setSecure] = useState(true);

  const { width } = useWindowDimensions();
  const fcmToken = useFcmToken();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const isSmallScreen = width < 500; 

 const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Perhatian", "Email dan Kata Sandi harus diisi");
      return;
    }

    setLoading(true);

    try {
      const res = await loginUser({
        email,
        password,
        fcmToken: fcmToken || "dummy-login-token", 
      });

      console.log("Login Response Full:", JSON.stringify(res, null, 2));

      // PERBAIKAN DISINI:
      // Karena backend langsung kasih token, kita cek apakah tokennya ada atau tidak.
      const isSuccess = res.token != null; 

      if (isSuccess) { 
        // 1. Simpan Data Sesi
        const userData = JSON.stringify(res); 
        await AsyncStorage.setItem('userSession', userData);
        
        // Simpan token secara spesifik jika perlu (opsional, tapi disarankan)
        await AsyncStorage.setItem('token', res.token);

        console.log("Login Success, Navigating...");
        
        // 2. Pindah Halaman
        router.replace("/onboarding/onboarding1"); 

      } else {
        // Jika API merespon tapi tidak ada token (misal: pesan error dari backend)
        Alert.alert("Gagal Masuk", res.message || "Gagal mendapatkan token akses");
      }

    } catch (err: any) {
      console.error("Login Error:", err);
      Alert.alert("Terjadi Kesalahan", err.message || "Gagal terhubung ke server");
    } finally {
      setLoading(false);
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
        <GlobalText style={[styles.title, isSmallScreen && styles.titleMobile]}>MASUK</GlobalText>

        <Text style={[styles.subtitle, isSmallScreen && styles.subtitleMobile]}>
          Masuk untuk mulai, dan gunakan aplikasi ini dengan lengkap.
        </Text>

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
          Belum punya akun? 
          <TouchableOpacity onPress={() => router.push('/auth/register')}>
            <Text style={styles.registerBold}> Daftar sekarang</Text>
          </TouchableOpacity>
        </Text>

       <TouchableOpacity 
            style={[
                styles.button, 
                loading && { opacity: 0.7, backgroundColor: '#ccc' } // Style saat loading (opsional)
            ]} 
            onPress={handleLogin}
            disabled={loading} // Cegah klik ganda
        >
          {loading ? (
             <ActivityIndicator size="small" color="#FFFFFF" />
          ) : (
             <Text style={styles.buttonText}>Masuk</Text>
          )}
          
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
