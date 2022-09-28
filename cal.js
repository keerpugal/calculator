let outscreen = document.getElementById("demo");

function display(num){
    outscreen.value += num;
    console.log(outscreen);
}
function calculate(){ 
try {
    outscreen.value = eval(outscreen.value);
  }
  catch(err) {
    alert("error in the output")
  }
}
function Clear(){
  outscreen.value = "";

}
function  dele(){
    outscreen.value = outscreen.value.slice(0,-1);
}

 
