// lets target elements to use.

const percentage = document.querySelector('.percent');
const form = document.querySelector('.quiz');

// lets first set the answers //
// lets set the array of right answers be able to compare it to the array of usersAnswers

const rightAnswers = ['B','A','B'];

// lets then target the users answers

const usersAnswers = [form.q1.value, form.q2.value, form.q3.value];
// console.log(usersAnswers);
let score = 0;


// lets create the function to compare both solutions.

// function compareSolutions(){
  // we need a starting score point by the time user is about to start the quiz he has 0 as score.

  // let declare score and make it zero as initial value.
 

// }

form.addEventListener('submit', e =>{
e.preventDefault();
usersAnswers.forEach((answer, index) => {
  if(answer === rightAnswers[index]) {
    score += 33;
    percentage.textContent = `${score}%`;
  }
})

})

