import AsyncStorage from '@react-native-async-storage/async-storage'; // Import ini// Helper agar tidak ulang-ulang code check error
import { BASE_URL } from "../config/url";

async function handleResponse(response: Response) {
  const data = await response.json();
  if (!response.ok) {
    // Lempar error jika status bukan 2xx (misal 400 Bad Request)
    throw new Error(data.message || "Terjadi kesalahan pada server");
  }
  return data;
}

export async function registerUser(data: {
  nama: string;
  email: string;
  password: string;
  deskripsi: string;
  fcmToken: string;
}) {
  // Pastikan URL rapi (hindari double slash //)
  const response = await fetch(`${BASE_URL}/api/v1/session/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
}

export async function verifyOTP(data: {
  loginId: string;
  otp: string;
}) {
  const response = await fetch(`${BASE_URL}/api/v1/session/register/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return handleResponse(response);
}
export async function loginUser(data: {
  email: string;
  password: string;
  fcmToken: string;
}) {
  const response = await fetch(`${BASE_URL}/api/v1/session/login/toko`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  const res = await response.json();

  if (!response.ok) {
    throw new Error(res.message || "Login gagal");
  }

  // OPTIONAL: Simpan token otomatis di sini atau di UI
  // Jika backend mengembalikan token/user data, simpan ke storage
  if (res.data) {
     await AsyncStorage.setItem('userSession', JSON.stringify(res.data));
  }

  return res;
}