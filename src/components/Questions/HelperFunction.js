// Data helper functions

// Sorting questions from product based on **helpfulness**
var sortedQuestions = resData.results.sort( (a, b) => {
  return  b.question_helpfulness - a.question_helpfulness
 })
//  Output = High->Low    [ {}, {}, {}, {} ]


//  Sorted answers per question
var sortAnswers = (question) => {
  var results = [];
  for (const key in question.answers) {
    results.push(question.answers[key])
   }
   results.sort( (a, b) => {
      return  b.helpfulness - a.helpfulness
    })
}
//  Output = High->Low   [ {}, {}, {}, {} ]