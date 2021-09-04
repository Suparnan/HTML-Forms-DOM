function val() {

  console.log('func started');
  let fname = document.getElementById("validationCustom01").value;
  let lname = document.getElementById("validationCustom02").value;
  let address = document.getElementById("validationCustom03").value;
  let pincode = document.getElementById("validationCustom05").value;
  let state = document.getElementById("validationCustom06").value;
  let country = document.getElementById("validationCustom04").value;


  let m = document.getElementById("inlineRadio1");
  let fm = document.getElementById("inlineRadio2");

  let gender;

  if(!fname || !lname || !address || !pincode || !state || !country){
    alert("Please enter all the fields");
  }

  if (m.checked == true) {
    gender = m.value;
  } else if (fm.checked == true) {
    gender = fm.value;
  } else if (m.checked != true && fm.checked != true) {
    alert('Please specify the Gender');
  }

  console.log(fname, lname, ", " + address, ", " + pincode, ", " + gender);

  let arr = [];
  //function checkboxes() {
  var inputElems = document.getElementsByTagName("input"),
    count = 0;
  for (var i = 0; i < inputElems.length; i++) {

    if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
      count++;
      arr[i] = inputElems[i].value;
      console.log(arr[i]);
    }
  } if (count < 2) {
    alert("Please select atleast 2 choices");
  }
  // } checkboxes()

  console.log(state, ", " + country);

  return true;
}

let validation = function () {
  if (val()) {
    // alert("validation success");
    let fn = document.getElementById("validationCustom01").value;
    let ln = document.getElementById("validationCustom02").value;
    let add = document.getElementById("validationCustom03").value;
    let pin = document.getElementById("validationCustom05").value;

    let ml = document.getElementById("inlineRadio1");
    let fml = document.getElementById("inlineRadio2");

    let gen;

    if (ml.checked == true) {
      gen = ml.value;
    } else if (fml.checked == true) {
      gen = fml.value;
    } else if (ml.checked != true && fml.checked != true) {
      alert('Please specify the Gender');
    }

    let arr = [];
    //function checkboxes() {
    var inputElems = document.getElementsByTagName("input");
    console.log(inputElems.length);
      
    for(var i = 0; i < inputElems.length; i++) {

      if (inputElems[i].type === "checkbox" && inputElems[i].checked === true) {
          arr[i] = inputElems[i].value;
      }
    } 

    let arr1 = arr.slice(6,11);
    let food = arr1.toString();
    console.log(food);
    let st = document.getElementById("validationCustom06").value;
    let cntry = document.getElementById("validationCustom04").value;
    let info = document.querySelector('#info');
    console.log("inside validation", info);
    let langs = [fn, ln, add, pin, gen, food, st, cntry];
    console.log("inside validation", langs);

    let nodes = langs.map(lang => {
      let td = document.createElement('td');
      td.textContent = lang;
      return td;
    });

    info.append(...nodes);

  } else {
    alert("validation failed: Please check");
  }

}

