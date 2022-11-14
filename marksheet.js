let calculate = () => {
    
  let mil = document.querySelector('#mil').value;
  let hindi = document.querySelector('#hindi').value;
  let english = document.querySelector('#english').value;
  let math = document.querySelector('#math').value;
  let science = document.querySelector('#science').value;
  let social = document.querySelector('#socialSc').value;

  const totalSum = parseFloat(mil) +
                   parseFloat(hindi) + 
                   parseFloat(english) + 
                   parseFloat(math) + 
                   parseFloat(science) + 
                   parseFloat(social)
  ;

  let percentage = totalSum / 600 * 100;
  let percentage1 = percentage.toFixed(2);

  if (percentage1 >= 90) {
    grade = "O";
  } else if ( percentage1 >= 80 && percentage1< 90) {
    grade = "E"
  } else if (percentage1 >= 60 && percentage1 < 80) {
    grade = "A"
  } else if (percentage1 >= 40 && percentage1 < 60) {
    grade = "B"
  } else if ( percentage1 >= 33 ) {
      grade = "c"
  }

  if (percentage1 > 100) {
        showData = 
        ` Wrong input `;
    } else if ( percentage1 < 33 ) {
        showData = `You have failed the exam.`
    } else {
      showData = 
        ` Out of 600 your total is  ${totalSum} 
        and percentage is ${percentage1}%. <br> 
        Your grade is ${grade}. Congratulatoin you have passed the exam. `;
  }

  document.getElementById("showData").innerHTML = showData;

}
