// Data helper functions

module.exports = {


  // Sorting questions from product based on **helpfulness**
  sortQuestions: (resData) => {
    var results = resData.results.sort( (a, b) => {
      return  b.question_helpfulness - a.question_helpfulness;
    });
    return results;
  },
  //  Output = High->Low   [ {}, {}, {}, {} ]



  // Sorting answers from single question
  sortAnswers: (answers) => {
    var results = [];
    for (const key in answers) {
      results.push(answers[key]);
    }

    results.sort( (a, b) => {
      return  b.helpfulness - a.helpfulness;
    });
    return results;
  }
  //  Output = High->Low   [ {}, {}, {}, {} ]
};