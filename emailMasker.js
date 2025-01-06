let email = "igweemekae@gmail.com";

const maskEmail = (email) => {
  let i = email.indexOf("@");
  let a = email.slice(0, 1);
  let b = email.slice(1, i - 1);
  let c = "";
  for (let h = 0; h < b.length; h++) {
    c += "*";
  }
  let d = email.slice(i - 1, i);
  let e = email.slice(i);

  let newMail = a + c + d + e;
  return newMail;
};
console.log(maskEmail(email));
console.log(maskEmail("apple.pie@example.com"));
console.log(maskEmail("freecodecamp@example.com"));
