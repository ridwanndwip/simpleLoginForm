const test = document.querySelector('#card .loginButton').addEventListener('click',function(){
  const userName = document.querySelector('#card .username');
  const passWord = document.querySelector('#card .password');

  if(userName.value == 'ridwan' && passWord.value == 'admin'){
    console.log('login berhasil')
  }else{
    console.log('salah')
  }
})
