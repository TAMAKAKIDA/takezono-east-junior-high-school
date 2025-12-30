const link = document.getElementById('link-button');

function check(){
  check1 = document.getElementById('check1').checked;
  check2 = document.getElementById('check2').checked;
  
  text1 = document.getElementById('mail').value;
  text2 = document.getElementById('ID').value;
  text3 = document.getElementById('pass').value;
  
  input1 = text1.trim() !== "";
  input2 = text2.trim() !== "";
  input3 = text3.trim() !== "";
  
  if (check1 && check2 && input1 && input2 && input3 == true){
    link.classList.remove('bad-class');
    link.classList.add('good-class');
  }else{
    link.classList.remove('good-class');
      link.classList.add('bad-class');
  }
}

function Link(event) {
    if (link.classList.contains('bad-class')) {
      event.preventDefault();
    }
}