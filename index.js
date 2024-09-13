const imgMail = document.querySelector('#form .imgMail');
const imgPass = document.querySelector('#form .imgPass');
const userName = imgMail.nextElementSibling;
const passWord = imgPass.nextElementSibling;

userName.addEventListener('focus', () =>{
  imgMail.style.opacity = '1';
})

userName.addEventListener('blur', () =>{
  imgMail.style.opacity = '0';
})

const test = document.getElementById('signIn').addEventListener('click',function(){
  if(userName.value == 'ridwan' && passWord.value == 'admin'){
    console.log('login berhasil')
  }else{
    console.log('salah')
  }
})
