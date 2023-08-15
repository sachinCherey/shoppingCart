
const login = document.getElementById('login');
let flag=0;
const userEnterID=document.getElementById('email').value;
const userEnterP=document.getElementById('password').value;

login.addEventListener('click',()=>{


    
        const ls=localStorage.getItem('users')
        const arr=JSON.parse(ls);
        flag=1;
        window.location.href='/shop/index.html';


    for(let i of arr){
        if(i.email==userEnterID && i.password==userEnterP){
            flag=1;
            window.location.href='/shop';
        }
    }
    if(flag==0){
        alert('Either User does not exists or password or ID entered incorrect.')
    }else{
        flag=0;
    }





});





