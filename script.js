      const loginBtn = document.querySelector('.btnsign');
const signupBtn = document.querySelector('.btnlog');
const loginForm = document.querySelector('.login');
const signupForm = document.querySelector('.signup');


if(loginBtn) {
loginBtn.addEventListener('click', () => {
  loginForm.style.display = 'none';
  signupForm.style.display = 'block';
});
}

if(signupBtn) {
signupBtn.addEventListener('click', () => {
  signupForm.style.display = 'none';
  loginForm.style.display = 'block';
});
}