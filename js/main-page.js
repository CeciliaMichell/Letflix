function validate(){
  let uname = document.getElementById('username')
  let password = document.getElementById('password')
  let email = document.getElementById('email')
  let mgender = document.getElementById('mgender')
  let fgender = document.getElementById('fgender')
  let type = document.getElementById('type')
  let agree = document.getElementById('agree')
  let errorMsg = [] 

  valUsername(uname, errorMsg)
  valPassword(password, errorMsg)
  valEmail(email, errorMsg)
  valGender(mgender, fgender, errorMsg)
  valType(type, errorMsg)
  valAgree(agree, errorMsg)

  if(errorMsg.length === 0){
    alert('Registration Success!')
  }
  else{
    alert(errorMsg.join('\n'))
  }
}

function valUsername(username, errorMsg){
  let str = username.value, cnt = 0, space = 0
  if(str === '') errorMsg.push('Username required')
  else{
    if(str.length < 5) errorMsg.push('Username minimal 5 characters')
    for(let i = 0; i < str.length; i++){
      if(str.charAt(i) >= '0' && str.charAt(i) <= '9') cnt++;
      if(str.charAt(i) == ' ') space++;
    }
    if(cnt === 0) errorMsg.push('Username doesnt contain numbers')
    if(space === 0) errorMsg.push('Username doesnt contain space')
  }
}

function valPassword(password, errorMsg){
  let str = password.value, cnt = 0;
  if(str === '') errorMsg.push('Password required')
  else{
    if(str.length < 7) errorMsg.push('Password minimal 8 characters')
    for(let i = 0; i<str.length; i++){
      if(str.charAt(i) >= '0' && str.charAt(i) <= '9') cnt++;
    }
    if(str.charAt(0) >= 'a' && str.charAt(0) <= 'z') errorMsg.push('First alphabet must be capital')
    if(cnt === 0) errorMsg.push('Password doesnt contain numbers')
  }
}

function valEmail(email, errorMsg){
  let str = email.value
  if(str === '') errorMsg.push('Email required')
  else{
    if (str.startsWith('.') || str.startsWith('@')) 
      errorMsg.push('Email cannot start with . or @')
    if (str.indexOf('.') === (str.indexOf('@') + 1))
      errorMsg.push('Email cannot contain . after @')
    if (!(str.endsWith('@gmail.com')))
      errorMsg.push('Email must ends with @gmail.com')
  }
}

function valGender(mgender, fgender, errorMsg){
  if(!mgender.checked && !fgender.checked) errorMsg.push('Gender required')
}


function valAgree(agree, errorMsg){
  if(!agree.checked) errorMsg.push('You must agree with terms and conditions')
}

function valType(type, errorMsg){
  if(!type.value) errorMsg.push('Subscription required')
}
