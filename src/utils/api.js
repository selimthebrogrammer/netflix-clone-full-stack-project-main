import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const signUp = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userData.email === "test@test.com") {
        toast.error("Bu e-posta zaten kullanılıyor."); // Başarısız işlemde toast error mesajı
        reject("Bu e-posta zaten kullanılıyor.");
      } else {
        toast.success("Başarıyla kayıt oldunuz!"); // Başarılı işlemde toast success mesajı
        resolve({ id: 1, ...userData });
      }
    }, 2000);
  });
};

export const login = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        userData.email === "test@test.com" &&
        userData.password === "test123"
      ) {
        toast.success("Başarıyla giriş yaptınız!"); // Başarılı işlemde toast success mesajı
        resolve({ id: 1, ...userData });
      } else {
        toast.error("E-posta veya şifre yanlış."); // Başarısız işlemde toast error mesajı
        reject("E-posta veya şifre yanlış.");
      }
    }, 2000);
  });
};
