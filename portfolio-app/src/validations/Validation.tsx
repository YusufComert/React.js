import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const AdminSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  password: yup
    .string()
    .min(5, " Lütfen minimum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz",
    })
    .required("şifre girmek zorunludur"),
});

export const UserSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Email girmek zorunludur"),
  password: yup
    .string()
    .min(5, " Lütfen minimum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf 1 küçük harf ve 1 sayı giriniz",
    })
    .required("şifre girmek zorunludur"),
});

export const RegisterSchema = yup.object().shape({
  name: yup.string().required("İsim girmek zorunludur"),
  middleName: yup.string().nullable(),
  surname: yup.string().required("Soyad girmek zorunludur"),
  birthDate: yup.string().required("Lütfen doğum tarihi girin"),
  phoneNumber: yup
    .string()
    .matches(/^[0-9]{10}$/, "Zorunlu Alan") // Telefon numarası validasyonu örneği
    .required("Telefon numarası girmek zorunludur"),
  email: yup
    .string()
    .email("Geçerli bir email giriniz")
    .required("Zorunlu Alan"),
  password: yup
    .string()
    .min(5, "Lütfen minimum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lütfen en az 1 büyük harf, 1 küçük harf ve 1 sayı giriniz",
    })
    .required("Zorunlu Alan"),
  repassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler eşleşmiyor") // Şifre ve tekrar şifre kontrolü
    .required("Zorunlu Alan"),
  gender: yup
    .string()
    .oneOf(["male", "female", "other"], "Geçerli bir cinsiyet seçin")
    .required("Cinsiyet belirtin"),
});

export const validationSchema = yup.object({
  name: yup
    .string()
    .matches(
      /^[A-Za-züöçıığş\s]+$/,
      "Sadece harfler (Türkçe karakterler dahil) ve boşluklar kullanılabilir"
    )
    .required("İsim gereklidir"),
  surname: yup
    .string()
    .matches(
      /^[A-Za-züöçıığş\s]+$/,
      "Sadece harfler (Türkçe karakterler dahil) ve boşluklar kullanılabilir"
    )
    .required("Soyisim gereklidir"),
  email: yup
    .string()
    .email("Geçerli bir e-posta adresi girin")
    .required("Email gereklidir"),
  message: yup.string().required("Mesaj gereklidir"),
});
