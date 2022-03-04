var qs = [ // contains all question content
  {
    "level": "intro", // which of the three levels do these questions belong to
    "questions": [ // contains this level's questions
      {
        "q": "Question placeholder goes here", // what's the question text
        "area": "a", // which category should the score be added to
        "answers": [ // contains this question's answers
          {
            "a": "Answer placeholder goes here", // what's the answer text
            "pts": 10 // how many points should be added to the category
          },
          {
            "a": "Next answer placeholder goes here",
            "pts": 15
          },
          {
            "a": "Last answer placeholder goes here",
            "pts": 0
          }
        ]
      },
      {
        "q": "Question placeholder goes here",
        "area": "b",
        "answers": [
          {
            "a": "Answer placeholder goes here",
            "pts": 10
          },
          {
            "a": "Next answer placeholder goes here",
            "pts": 15
          },
          {
            "a": "Last answer placeholder goes here",
            "pts": 0
          }
        ]
      },
    ]
  },
  {
    "level": "basic",
    "questions": [
      {
        "q":"Question placeholder goes here",
        "area":"c",
        "answers": [
          {
            "a": "Answer placeholder goes here",
            "pts": 10
          },
          {
            "a": "Next answer placeholder goes here",
            "pts": 15
          },
          {
            "a": "Last answer placeholder goes here",
            "pts": 0
          }
        ]
      },
      {
        "q": "Question placeholder goes here",
        "area": "c",
        "answers": [
          {
            "a": "Answer placeholder goes here",
            "pts": 10
          },
          {
            "a": "Next answer placeholder goes here",
            "pts": 15
          },
          {
            "a": "Last answer placeholder goes here",
            "pts": 0
          }
        ]
      },
    ]
  },
  {
    "level": "advanced",
    "questions": [
      {
        "q":"Question placeholder goes here",
        "area":"d",
        "answers": [
          {
            "a": "Answer placeholder goes here",
            "pts": 10
          },
          {
            "a": "Next answer placeholder goes here",
            "pts": 15
          },
          {
            "a": "Last answer placeholder goes here",
            "pts": 0
          }
        ]
      },
      {
        "q": "Question placeholder goes here",
        "area": "d",
        "answers": [
          {
            "a": "Answer placeholder goes here",
            "pts": 10
          },
          {
            "a": "Next answer placeholder goes here",
            "pts": 15
          },
          {
            "a": "Last answer placeholder goes here",
            "pts": 0
          }
        ]
      },
    ]
  }
];

var rs = [ // contains all evaluation content
  {
    "area": "a", // which score-collection category is this
    "why": "Explanation of this area goes here", // why is this recommended (all levels)
    "eg": "Fictional example of this area goes here", // example scenario
    "results": [ // contains result text for this category
      {
        "assess": "below", // assessed level, based on score
        "desc": "Description of this evaluation goes here", // explanation of what this means
        "recs": [ // contains recommendations for this level
          {
            "title": "Recommendation placeholder goes here", // title of this recommendation
            "desc": "Description of this recommendation goes here" // explanation of this recommendation
          },
          {
            "title": "Next recommendation placeholder goes here",
            "desc": "Description of this recommendation goes here"
          },
        ]
      },
      {
        "assess": "ok",
        "desc": "Description of this evaluation goes here",
        "recs": [
          {
            "title": "Recommendation placeholder goes here",
            "desc": "Description of this recommendation goes here"
          },
          {
            "title": "Next recommendation placeholder goes here",
            "desc": "Description of this recommendation goes here"
          },
        ]
      },
      {
        "assess": "exceeds",
        "desc": "Description of this evaluation goes here",
        "recs": [
          {
            "title": "Recommendation placeholder goes here",
            "desc": "Description of this recommendation goes here"
          },
          {
            "title": "Next recommendation placeholder goes here",
            "desc": "Description of this recommendation goes here"
          },
        ]
      }
    ]
  },
  {
    "area": "b",
    "why": "Explanation of this area goes here",
    "example": "Fictional example of this area goes here",
    "results": [
      {
        "assess": "below",
        "desc": "Description of this evaluation goes here",
        "recs": [
          {
            "title": "Recommendation placeholder goes here",
            "desc": "Description of this recommendation goes here"
          },
          {
            "title": "Next recommendation placeholder goes here",
            "desc": "Description of this recommendation goes here"
          },
        ]
      },
      {
        "assess": "ok",
        "desc": "Description of this evaluation goes here",
        "recs": [
          {
            "title": "Recommendation placeholder goes here",
            "desc": "Description of this recommendation goes here"
          },
          {
            "title": "Next recommendation placeholder goes here",
            "desc": "Description of this recommendation goes here"
          },
        ]
      },
      {
        "assess": "exceeds",
        "desc": "Description of this evaluation goes here",
        "recs": [
          {
            "title": "Recommendation placeholder goes here",
            "desc": "Description of this recommendation goes here"
          },
          {
            "title": "Next recommendation placeholder goes here",
            "desc": "Description of this recommendation goes here"
          },
        ]
      }
    ]
  }
]
