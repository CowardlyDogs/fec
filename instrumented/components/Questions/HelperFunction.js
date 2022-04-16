function cov_exx9bq6dt() {
  var path = "/Users/austinchapin/Desktop/HackReactor/fec/src/components/Questions/HelperFunction.js";
  var hash = "697ec286ed2787ebb61f5bfb790d78f97be923eb";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/austinchapin/Desktop/HackReactor/fec/src/components/Questions/HelperFunction.js",
    statementMap: {
      "0": {
        start: {
          line: 3,
          column: 0
        },
        end: {
          line: 30,
          column: 2
        }
      },
      "1": {
        start: {
          line: 8,
          column: 18
        },
        end: {
          line: 10,
          column: 6
        }
      },
      "2": {
        start: {
          line: 9,
          column: 6
        },
        end: {
          line: 9,
          column: 62
        }
      },
      "3": {
        start: {
          line: 11,
          column: 4
        },
        end: {
          line: 11,
          column: 19
        }
      },
      "4": {
        start: {
          line: 19,
          column: 18
        },
        end: {
          line: 19,
          column: 20
        }
      },
      "5": {
        start: {
          line: 20,
          column: 4
        },
        end: {
          line: 22,
          column: 5
        }
      },
      "6": {
        start: {
          line: 21,
          column: 6
        },
        end: {
          line: 21,
          column: 33
        }
      },
      "7": {
        start: {
          line: 24,
          column: 4
        },
        end: {
          line: 26,
          column: 7
        }
      },
      "8": {
        start: {
          line: 25,
          column: 6
        },
        end: {
          line: 25,
          column: 44
        }
      },
      "9": {
        start: {
          line: 27,
          column: 4
        },
        end: {
          line: 27,
          column: 19
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 7,
            column: 17
          },
          end: {
            line: 7,
            column: 18
          }
        },
        loc: {
          start: {
            line: 7,
            column: 30
          },
          end: {
            line: 12,
            column: 3
          }
        },
        line: 7
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 8,
            column: 40
          },
          end: {
            line: 8,
            column: 41
          }
        },
        loc: {
          start: {
            line: 8,
            column: 50
          },
          end: {
            line: 10,
            column: 5
          }
        },
        line: 8
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 18,
            column: 15
          },
          end: {
            line: 18,
            column: 16
          }
        },
        loc: {
          start: {
            line: 18,
            column: 28
          },
          end: {
            line: 28,
            column: 3
          }
        },
        line: 18
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 24,
            column: 18
          },
          end: {
            line: 24,
            column: 19
          }
        },
        loc: {
          start: {
            line: 24,
            column: 28
          },
          end: {
            line: 26,
            column: 5
          }
        },
        line: 24
      }
    },
    branchMap: {},
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "697ec286ed2787ebb61f5bfb790d78f97be923eb"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_exx9bq6dt = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_exx9bq6dt();
cov_exx9bq6dt().s[0]++;
// Data helper functions
module.exports = {
  // Sorting questions from product based on **helpfulness**
  sortQuestions: resData => {
    cov_exx9bq6dt().f[0]++;
    var results = (cov_exx9bq6dt().s[1]++, resData.results.sort((a, b) => {
      cov_exx9bq6dt().f[1]++;
      cov_exx9bq6dt().s[2]++;
      return b.question_helpfulness - a.question_helpfulness;
    }));
    cov_exx9bq6dt().s[3]++;
    return results;
  },
  //  Output = High->Low   [ {}, {}, {}, {} ]
  // Sorting answers from single question
  sortAnswers: answers => {
    cov_exx9bq6dt().f[2]++;
    var results = (cov_exx9bq6dt().s[4]++, []);
    cov_exx9bq6dt().s[5]++;

    for (const key in answers) {
      cov_exx9bq6dt().s[6]++;
      results.push(answers[key]);
    }

    cov_exx9bq6dt().s[7]++;
    results.sort((a, b) => {
      cov_exx9bq6dt().f[3]++;
      cov_exx9bq6dt().s[8]++;
      return b.helpfulness - a.helpfulness;
    });
    cov_exx9bq6dt().s[9]++;
    return results;
  } //  Output = High->Low   [ {}, {}, {}, {} ]

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkhlbHBlckZ1bmN0aW9uLmpzIl0sIm5hbWVzIjpbIm1vZHVsZSIsImV4cG9ydHMiLCJzb3J0UXVlc3Rpb25zIiwicmVzRGF0YSIsInJlc3VsdHMiLCJzb3J0IiwiYSIsImIiLCJxdWVzdGlvbl9oZWxwZnVsbmVzcyIsInNvcnRBbnN3ZXJzIiwiYW5zd2VycyIsImtleSIsInB1c2giLCJoZWxwZnVsbmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZlo7QUFFQUEsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBR2Y7QUFDQUMsRUFBQUEsYUFBYSxFQUFHQyxPQUFELElBQWE7QUFBQTtBQUMxQixRQUFJQyxPQUFPLDRCQUFHRCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLElBQWhCLENBQXNCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQUE7QUFBQTtBQUM1QyxhQUFRQSxDQUFDLENBQUNDLG9CQUFGLEdBQXlCRixDQUFDLENBQUNFLG9CQUFuQztBQUNELEtBRmEsQ0FBSCxDQUFYO0FBRDBCO0FBSTFCLFdBQU9KLE9BQVA7QUFDRCxHQVRjO0FBVWY7QUFJQTtBQUNBSyxFQUFBQSxXQUFXLEVBQUdDLE9BQUQsSUFBYTtBQUFBO0FBQ3hCLFFBQUlOLE9BQU8sNEJBQUcsRUFBSCxDQUFYO0FBRHdCOztBQUV4QixTQUFLLE1BQU1PLEdBQVgsSUFBa0JELE9BQWxCLEVBQTJCO0FBQUE7QUFDekJOLE1BQUFBLE9BQU8sQ0FBQ1EsSUFBUixDQUFhRixPQUFPLENBQUNDLEdBQUQsQ0FBcEI7QUFDRDs7QUFKdUI7QUFNeEJQLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFjLENBQUNDLENBQUQsRUFBSUMsQ0FBSixLQUFVO0FBQUE7QUFBQTtBQUN0QixhQUFRQSxDQUFDLENBQUNNLFdBQUYsR0FBZ0JQLENBQUMsQ0FBQ08sV0FBMUI7QUFDRCxLQUZEO0FBTndCO0FBU3hCLFdBQU9ULE9BQVA7QUFDRCxHQXpCYyxDQTBCZjs7QUExQmUsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBEYXRhIGhlbHBlciBmdW5jdGlvbnNcblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cblxuICAvLyBTb3J0aW5nIHF1ZXN0aW9ucyBmcm9tIHByb2R1Y3QgYmFzZWQgb24gKipoZWxwZnVsbmVzcyoqXG4gIHNvcnRRdWVzdGlvbnM6IChyZXNEYXRhKSA9PiB7XG4gICAgdmFyIHJlc3VsdHMgPSByZXNEYXRhLnJlc3VsdHMuc29ydCggKGEsIGIpID0+IHtcbiAgICAgIHJldHVybiAgYi5xdWVzdGlvbl9oZWxwZnVsbmVzcyAtIGEucXVlc3Rpb25faGVscGZ1bG5lc3M7XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0sXG4gIC8vICBPdXRwdXQgPSBIaWdoLT5Mb3cgICBbIHt9LCB7fSwge30sIHt9IF1cblxuXG5cbiAgLy8gU29ydGluZyBhbnN3ZXJzIGZyb20gc2luZ2xlIHF1ZXN0aW9uXG4gIHNvcnRBbnN3ZXJzOiAoYW5zd2VycykgPT4ge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYW5zd2Vycykge1xuICAgICAgcmVzdWx0cy5wdXNoKGFuc3dlcnNba2V5XSk7XG4gICAgfVxuXG4gICAgcmVzdWx0cy5zb3J0KCAoYSwgYikgPT4ge1xuICAgICAgcmV0dXJuICBiLmhlbHBmdWxuZXNzIC0gYS5oZWxwZnVsbmVzcztcbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfVxuICAvLyAgT3V0cHV0ID0gSGlnaC0+TG93ICAgWyB7fSwge30sIHt9LCB7fSBdXG59OyJdfQ==