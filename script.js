function logar() {
    var login = document.getElementById('login').value
    var senha = document.getElementById('password').value
    
      if (login == 'Doador1' && senha == '7586'){
        alert("Você está logado!")
        location.href = "login.html"
      }else {
        alert("Informações incorretas, tente novamente")
      }
    }