function dispaly(num){
  document.getElementById("Form").value += num;
}

function solve(){
  let x = document.getElementById("Form").value;
  let y = eval(x);
  document.getElementById("Form").value=y;
}
