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
];

var oc = [ // contains all other content
  {
    "type": "ux",
    "title": "",
    "content": [
      {
        "type": "button",
        "text": "Placeholder label goes here"
      },
      {
        "type": "direction",
        "text": "Placeholder instruction goes here"
      }
    ]
  },
  {
    "type": "glossary",
    "title": "Glossary of Terms",
    "content": [
      {
        "word": "Word placeholder goes here",
        "define": "Definition of this word goes here"
      },
      {
        "word": "Next word placeholder goes here",
        "define": "Definition of this word goes here"
      },
      {
        "word": "Another word placeholder goes here",
        "define": "Definition of this word goes here"
      },
    ]
  },
  {
    "type": "proj-intro",
    "title": "Cybersecurity Assessment Tool (CAT)",
    "content": [
      {
        "p": "Paragraph of text goes here"
      },
      {
        "p": "Paragraph of text goes here"
      }
    ]
  },
  {
    "type": "team-intro",
    "title": "Who built this tool",
    "content": [
      {
        "name": "Name placeholder goes here",
        "p": "Paragraph about this person goes here"
      },
      {
        "name": "Next name placeholder goes here",
        "p": "Paragraph about this person goes here"
      },
      {
        "name": "Another name placeholder goes here",
        "p": "Paragraph about this person goes here"
      }
    ]
  },
  {
    "type": "process",
    "title": "How it works",
    "content": [
      {
        "p": "Paragraph of text goes here"
      },
      {
        "p": "Paragraph of text goes here",
        "list": ["item 1", "item 2", "item 3", "item 4"]
      },
      {
        "p": "Paragraph of text goes here"
      },
      {
        "p": "Paragraph of text goes here"
      }
    ]
  },
  {
    "type": "users",
    "title": "Who did we build this tool for?",
    "content": [
      {
        "p": "Paragraph of text goes here"
        "list": [
          "Long placeholder item 1 goes here",
          "Long placeholder item 2 goes here",
          "Long placeholder item 3 goes here",
          "Long placeholder item 4 goes here",
          "Long placeholder item 5 goes here",
          "Long placeholder item 6 goes here",
        ]
      },
      {
        "p": "Paragraph of text goes here"
      }
    ]
  },
  {
    "type": "legal",
    "title": "Legal disclaimer",
    "content": [
      {
        "p": "Paragraph of text goes here"
      },
      {
        "p": "Paragraph of text goes here"
      },
      {
        "p": "Paragraph of text goes here",
        "list": [
          "Long placeholder item 1 goes here",
          "Long placeholder item 2 goes here",
        ]
      },
      {
        "p": "Paragraph of text goes here",
        "list": [
          "Long placeholder item 1 goes here",
          "Long placeholder item 2 goes here",
          "Long placeholder item 3 goes here",
        ]
      },
      {
        "p": "Paragraph of text goes here"
      }
    ]
  }
]
