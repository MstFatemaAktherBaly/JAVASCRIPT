document.getElementById('togglebtn').addEventListener('click',function(){
    document.getElementById('sidebar').classList.toggle('active')
})
document.getElementById('eyeon').addEventListener('click',function () {
  

    if (document.getElementById('password').type ==='text'){
        document.getElementById('password').type = 'password';
        document.getElementById('passeye').classList.add('fa-eye-slash')
        document.getElementById('passeye').classList.remove('fa-eye')
    }
    else{
        document.getElementById('password').type = 'text';
        document.getElementById('passeye').classList.add('fa-eye')
        document.getElementById('passeye').classList.remove('fa-eye-slash')
    }
})


document.getElementById('date1').addEventListener('keyup',function(){
    document.getElementById('date2').type = document.getElementById('date1').value;

   
})


document.getElementById('name1').addEventListener('keyup',function(){
    document.getElementById('name2').innertext = document.getElementById('name1').value;

   
})
