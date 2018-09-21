function convert() {
  var s1=document.getElementById("s1");
  var from = s1.options[s1.selectedIndex].value;

  var s2=document.getElementById("s2");
  var to = s2.options[s2.selectedIndex].value;

  if(from=="VNĐ" && to=="USD"){
    var amount=document.getElementById("amount");
    var result = amount.value/23000;
    alert(result+" USD");
  }

  else if(from=="USD" && to=="VNĐ"){
    var amount=document.getElementById("amount");
    var result = amount.value*23000;
    alert(result+" VNĐ");
  }
  else {
    var amount=document.getElementById("amount");
    var result = amount.value;
    alert(result+" "+to);
  }
}
