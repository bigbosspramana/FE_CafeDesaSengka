import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function Index() {
  const router = useRouter();
  const [firstTime, setFirstTime] = useState<boolean | null>(null);

  useEffect(() => {
    const isFirstTime = false; 
    setFirstTime(isFirstTime);
  }, []);

  useEffect(() => {
    if (firstTime === null) return;

    if (firstTime) {
      router.replace('/onboarding/onboarding1');
    } else {
      router.replace('/auth/login');
    }
  }, [firstTime]);

  return null;
}
