// Data helper functions

// Sorting questions from product based on **helpfulness**
var sortQuestions = (resData) => {
  var results = resData.results.sort( (a, b) => {
    return  b.question_helpfulness - a.question_helpfulness
  })
  return results;
}
//  Output = High->Low   [ {}, {}, {}, {} ]



// Sorting answers from single question
var sortAnswers = (question) => {
  var results = [];
  for (const key in question.answers) {
    results.push(question.answers[key])
   };
   results.sort( (a, b) => {
      return  b.helpfulness - a.helpfulness
    });
   return results;
}
//  Output = High->Low   [ {}, {}, {}, {} ]