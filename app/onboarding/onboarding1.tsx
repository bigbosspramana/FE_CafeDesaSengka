import { LinearGradient } from 'expo-linear-gradient';
import EmailIcon from '@/assets/icon/email.svg';
import PassIcon from '@/assets/icon/pass.svg';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { GlobalText, GlobalText as Text } from '@/components/text/text_Regular';

import { styles } from '../../src/styles/onboarding.style';

export default function OnBoardingScreen() {
  return (
    <View style={styles.container}>
      <Text>Alvin Yuga Pramana</Text>
    </View>
  );
}
