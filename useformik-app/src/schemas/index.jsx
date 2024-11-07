import * as yup from "yup";
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Geçerli Bir Email Giriniz")
    .required("Email Boş Geçilemez"),
  age: yup
    .number()
    .positive("Yaş - Bİr Sayı Olamaz")
    .integer("Yaş Değeri Bir Tam Sayı Olmalıdır")
    .required("Yaş Girmek Zorunludur"),
  password: yup
    .string()
    .min(5, "Şifre 5 Karakterden Az Olamaz")
    .matches(passwordRules, {
      message:
        "Lütfen En az bir büyük harf bir küçük harf ve bir bir sayı giriniz",
    })
    .required("Şifre Belirtilmek Zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Şifreler Eşleşmiyor")
    .required("Tekrar Şifre Giriniz"),
});

export const advanceSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanıcı Adı Minimum 3 karakter uzunluğunda olmalıdır")
    .required("Kullanıcı Adı Zorunludur"),
  university: yup
    .string()
    .oneOf(["bogazici", "gsü", "odtü", "itu"], "Lüften Üniversitenizi Seçiniz")
    .required("Üniversite Seçimi Yapınız"),
  isAccepted: yup.boolean().oneOf([true], "Kullanım Koşullarını Kabul Ediniz"),
});
