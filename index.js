const imgMail = document.querySelector('#form .imgMail');
const imgPass = document.querySelector('#form .imgPass');
// const userName = imgMail.nextElementSibling;
// const passWord = imgPass.nextElementSibling;

imgMail.nextElementSibling.addEventListener('focus',()=>{
    imgMail.style.opacity = '1';
    imgMail.parentElement.classList.add('active')
    imgMail.nextElementSibling.style.borderBottom = '1px solid #E7E7E7'
})

imgMail.nextElementSibling.addEventListener('blur',()=>{
  if(imgMail.nextElementSibling.value.trim() !== ''){
    imgMail.style.opacity = '1';
    imgMail.nextElementSibling.style.borderBottom = '1px solid #E7E7E7'
    
  }else{
    imgMail.style.opacity = '0'; 
    imgMail.parentElement.classList.remove('active')
    imgMail.nextElementSibling.style.borderBottom = '1px solid #6b7280'
  }
})

imgPass.nextElementSibling.addEventListener('focus',()=>{
  imgPass.style.opacity = '1';
  imgPass.parentElement.classList.add('active') 
  imgPass.nextElementSibling.style.borderBottom = '1px solid #E7E7E7'
})

imgPass.nextElementSibling.addEventListener('blur',()=>{
if(imgPass.nextElementSibling.value.trim() !== ''){
  imgPass.style.opacity = '1';
  imgPass.nextElementSibling.style.borderBottom = '1px solid #E7E7E7' 
}else{
  imgPass.style.opacity = '0'; 
  imgPass.parentElement.classList.remove('active')
  imgPass.nextElementSibling.style.borderBottom = '1px solid #6b7280'
}
})

const test = document.getElementById('signIn').addEventListener('click',function(){
  if(userName.value == 'ridwan' && passWord.value == 'admin'){
    console.log('login berhasil')
  }else{
    console.log('salah')
  }
})
