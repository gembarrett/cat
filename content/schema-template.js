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
        "pts": 0,
        "excludes": [] // does this answer render any of the subsequent questions irrelevant?
      }
    ]
  },
}


"title": "Evaluation & feedback",
"reusables": { // content that appears in multiple evaluation areas
  "below": {
    "title": "Below",
    "content": "String"
  },
  "ok": {
    "title": "OK",
    "content": "String"
  },
  "exceeds": {
    "title": "Exceeds",
    "content": "String"
  },
  "general": {
    "what": "String",
    "why": "String", // title for each content.general.why below
    "eg": "String" // title for each content.general.eg below
  }
},
"content": [
  {
    "area": "this-area-ref", // which score-collection category is this
    "title": "Title Of This Evaluation Area",
    "score": "Your org scored [[X]] in this evaluation category", // explanation of what this means
    "general": {
        "why": ["String 1", "String 2"], // explanation of what this means
        "eg": ["String 1", "String 2"] // example scenario
    },
    "results": [ // contains result text for this category
      {
        "assess": "below", // assessed level, based on score
        "recs": [ // contains recommendations for this level
          {
            "title": "Title string", // title of this recommendation
            "content": [ // explanation of this recommendation
              "String 1",
              "String 2",
              {
                "type": "title",
                "heading": "String",
              },
              {
                "type": "ol",
                "items": ["Item 1", "Item 2", "Item 3", "Item 4"]
              },
              {
                "type": "table",
                "rows": [
                  ["", "Low", "High"],
                  ["Low", "Printer stolen", "Damage to phone"],
                  ["High", "Cyberattack", "Phishing attack"]
                ]
              },
              "String 3"
            ]
          },
        ]
      }
    ]
  }
]
