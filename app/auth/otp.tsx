import { GlobalText, GlobalText as Text } from '@/components/text/text_Regular';
import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';
import { Alert, Image, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';

import { verifyOTP } from '@/src/service/authservice';
import { styles } from '../../src/styles/otp.style';

export default function LoginScreen() {
  const params = useLocalSearchParams();
  const loginIdFromParams = params.loginId as string;
  const [secure, setSecure] = useState(true);

  
const [otp, setOtp] = useState("");
  const [loginId, setLoginId] = useState(""); // nanti ambil dari params atau AsyncStorage
  const [loading, setLoading] = useState(false);

  const handleVerify = async () => {
    if (!otp) {
      Alert.alert("Error", "Kode OTP harus diisi");
      return;
    }
    
    // Validasi loginId
    if (!loginIdFromParams) {
      Alert.alert("Error", "ID Login tidak ditemukan, silakan daftar ulang.");
      return;
    }
    setLoading(true);

    try {
      const res = await verifyOTP({
        loginId: loginIdFromParams,
        otp,
      });

      console.log("OTP Response:", res);

      // --- PERBAIKAN DISINI ---
      // Jangan cek res.success, tapi cek apakah ada token?
      if (res.token) { 
        Alert.alert("Berhasil", "Akun Anda telah terverifikasi!");
        
        // Opsional: Kamu bisa simpan token ini biar user ga perlu login lagi
        // await AsyncStorage.setItem('userSession', JSON.stringify(res));

        // Pindah ke halaman Login
        router.replace("/auth/login");
      } else {
        // Jika token tidak ada, berarti gagal (atau sesuaikan dengan error backend)
        Alert.alert("Gagal", res.message || "Verifikasi gagal, silakan coba lagi.");
      }
      // ------------------------

    } catch (err: any) {
      console.error(err);
      Alert.alert("Error", "Gagal menghubungi server");
    } finally {
      setLoading(false);
    }
  };

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
          <TextInput placeholder="KODE OTP" value={otp} onChangeText={setOtp} placeholderTextColor="#0000006f" style={[styles.input, isSmallScreen && styles.inputMobile]} />
        </View>

        {/* <Text style={[styles.registerText, isSmallScreen && styles.registerTextMobile]}>
          Belum punya akun? 
          <TouchableOpacity onPress={() => router.push('/auth/register')}>
            <Text style={styles.registerBold}> Daftar sekarang</Text>
          </TouchableOpacity>
        </Text> */}
Fetching-Login-register
        <TouchableOpacity style={styles.button} onPress={handleVerify} // <--- INI PERBAIKANNYA
            disabled={loading}>
=======
        <TouchableOpacity style={styles.button} onPress={() => router.push('/order_menu')}>
main
          <Text style={styles.buttonText}>Verifikasi</Text>
        </TouchableOpacity>

      </LinearGradient>
    </View>
  );
}
