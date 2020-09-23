export const errorMessage = (message) => {
  switch (message) {
    case "TOO_MANY_ATTEMPTS_TRY_LATER : Too many unsuccessful login attempts. Please try again later.":
      return "بعدا تلاش کنید!";

    case "EMAIL_NOT_FOUND":
      return "ایمیل وارد شده اشتباه است!";

    case "INVALID_PASSWORD":
      return "پسوورد صحیح نیست!";

    case "EMAIL_EXISTS":
      return "ایمیل وارد شده قبلا ثبت گردیده است!";

    default:
      return "اشتباهی رخ داده است! مجددا تلاش کنید.";
  }
};
