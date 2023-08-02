const firstName=document.getElementById('firstName');
const lastName=document.getElementById('lastName');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('confirmPassword');
const signUp=document.getElementById('signUp');

let userData=[];

signUp.addEventListener('click',(event)=>{
    event.preventDefault();
    if(localStorage.getItem('users')!=null){
    let obj={'firstName':firstName.value,'lastName':lastName.value,'email':email.value,'password':password.value,'currentPassword':confirmPassword.value};
    userData.push(obj);
    let uLData=JSON.stringify(userData);
    localStorage.setItem('users',uLData);
    
    alert('Account created Successfully, Happy Shoping');
    window.location.href='/shop';
    }
       
})