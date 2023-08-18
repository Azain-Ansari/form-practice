var userName = document.querySelectorAll("#username")[0]
var fatherName = document.querySelectorAll("#fathername")[0]
var rollNumber = document.querySelectorAll("#rollnumber")[0]
var classDays = document.querySelectorAll(".radio")[0]
var optionNumber = document.querySelectorAll(".subject")[0]
var div1 = document.querySelectorAll(".data")[0]
var errorMsg = document.querySelectorAll(".msg")[0]

var student;
function subject(){
  var student = {
    userName: userName.value,
    fatherName: fatherName.value,
    rollNumber: rollNumber.value,
    subject: optionNumber.value
  }
 
  for (var i = 0; i < classDays.lenght; i++) {
    if (classDays[i].checked) {
      student.days = classDays[i].value;
    }
  }
  if (student.userName ||
   student.fatherName && student.rollNumber && student.subject && student.days) {
   printWithBaktick(student);
    // saveStudentInDB(student);
   } 
else {
    errorMsg.innerHTML = "please put in all information.";
    errorMsg.style.color = "red";

    setTimeout(function () {
      errorMsg.innerHTML = "";
    }, 3000)
  }
console.log(student.days);

}
  
function printStudentData(student) {
  printWithBaktick(student);
}


//  console.log(radioButton.value)
//  console.log(username.value)
//  console.log(fatherName.value)
//  console.log(rollNumber.value)
//  console.log(optionNumber.value)
//    console.log(radioButton.value)
//    console.log(radioButton1.value);
// console.log(radioButton.ch);
// console.log(radioButton.value);


function printWithBaktick(student) {

  var data1 = `<div>
  <h2>${student.userName}</h2>
  <h2>${student.fatherName}</h2>
  <h2>${student.rollNumber}</h2>
   <h3>${student.classDays}</h3>
   <h3>${student.optionNumber} </h3>
  //  <button onclick ="deleteData"(){
  //   this.removeChild("data") }> delete </button>
   </div>`
  div1.innerHTML += data1;
}

//  console.log(data);
// left.innerHTML = `${div2}`;
