// lets target elements to use.

const percentage = document.querySelector('.percent');
const form = document.querySelector('.quiz');
const result = document.querySelector('.results');
const UiResult = document.querySelector('.printed')

// lets first set the answers //
// lets set the array of right answers be able to compare it to the array of usersAnswers

const rightAnswers = ['B', 'A', 'B'];



// lets create the function to compare both solutions.

// function compareSolutions(){
// we need a starting score point by the time user is about to start the quiz he has 0 as score.

// let declare score and make it zero as initial value.


// }

form.addEventListener('submit', e => {
  e.preventDefault();
  // to avoid usage of converting the number let make user starts with 10 as score
  let score = 10;
  // lets then target the users answers
  const usersAnswers = [form.q1.value, form.q2.value, form.q3.value];
  // console.log(usersAnswers);
  usersAnswers.forEach((answer, index) => {
    if (answer === rightAnswers[index]) {
      scrollTo(0, 0)// this is for scrolling it self to the top to view the scores.
      score = score + 30;
      // now lets remove the display none to the results so that we preview the score
      result.classList.remove('score'); // score is the class which has display none property so we must remove it to preview the marks
      // now lets use the method called setInterval to loads the score from initial zero to the score obtained.

      // we are doing it by creating output variable then we set it to zero
      // and we compare to score until it reaches the score 
      // then if the output equals to score obtained we stop the interval
      // else we increment the output to reach the score.
      // again setInterval method must be stored in the variable in our case we stored it in timer.
      // in addition the timer must have the duration and passed as the argument and in our case we choose 90 milliseconds.
      let outPut = 0;
      const timer = setInterval(() => {
        // here then instead of appending the score we are instead using output value
        percentage.textContent = `${outPut}%`; // remember it must preview from 0 that is why we appended it before incrementation.
        if (outPut === score) {
          clearInterval(timer); // if outPut equals to score we clear the interval which is timer in our case.
          if(score <= 49){
            UiResult.textContent = 'You failed the quiz';
            UiResult.classList.remove('score');
            UiResult.classList.add('fail')
          } else{
            UiResult.textContent = 'You passed the quiz';
            UiResult.classList.remove('score');
            
          }
        } else {
          outPut++; // if the outPut is not equals to score you must increment the outPut to reach the score by one.
        }
      }, 60) // and we set the interval to last for 90 milliseconds.

    }
  });

});

