const imgMail = document.querySelector('#form .imgMail');
const imgPass = document.querySelector('#form .imgPass');
const userName = imgMail.nextElementSibling;
const passWord = imgPass.nextElementSibling;

userName.addEventListener('focus',()=>{
    imgMail.style.opacity = '1';
    imgMail.parentElement.classList.add('active') 
})

userName.addEventListener('blur',()=>{
  if(userName.value.trim() !== ''){
    imgMail.style.opacity = '1'; 
  }else{
    imgMail.style.opacity = '0'; 
    imgMail.parentElement.classList.remove('active')
  }
})

passWord.addEventListener('focus',()=>{
  imgPass.style.opacity = '1';
  imgPass.parentElement.classList.add('active') 
})

passWord.addEventListener('blur',()=>{
if(passWord.value.trim() !== ''){
  imgPass.style.opacity = '1'; 
}else{
  imgPass.style.opacity = '0'; 
  imgPass.parentElement.classList.remove('active')
}
})

const test = document.getElementById('signIn').addEventListener('click',function(){
  if(userName.value == 'ridwan' && passWord.value == 'admin'){
    console.log('login berhasil')
  }else{
    console.log('salah')
  }
})
