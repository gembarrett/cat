// - Understanding Risk
//   - About Your Organization
//   - External Threats
// - Operational Security
//   - Policy & Documentation
//   - Internal Risks
//   - Staff Training & Support
//   - Travel Policy
//   - Managing Data
//   - Website Security
//   - Office Policies & Systems
//   - Legal Risks
// - Device & Account Security
//   - Installing Software
//   - Data Encryption
//   - Compartmentalization
//   - Passwords & Authentication
//   - System Updates
//   - Operational Continuity
//   - Third-Party Services
//   - VPN
//
// Score areas:
// - risk analysis risk-analysis risks
// - associated risks associated-risks a-risks
// - docs and policy docs-policy docs
// - internal risks internal-risks i-risks
// - training and support training-support training
// - travel security travel-policy travel
// - data security data
// - website security web
// - office security
// - legal risks
// - messaging and collab
// - software security
// - data encryption
// - device and compartmentalization
// - passwords and auth
// - updates
// - op cont
// - third-party
// - vpn

{
  "section": "understand-risk", // which of the sections do these questions belong to
  "title": "Understanding Risk",
  "subs": [{
      "your-org": [{
          "subtitle": "About Your Organization",
          "questions": [{  // contains this level's questions
            "q": "Question placeholder goes here", // what's the question text
            "area": "a", // which category should the score be added to
            "required": "true", // does an answer have to be given (false applies to questions that start "If yes")
            "type": "radio" // type of answers (checkbox applies to questions where users "choose your top three")
            "answers": [ // contains this question's answers
              {
                "a": "Answer placeholder goes here", // what's the answer text
                "pts": 10, // how many points should be added to the category
              },
            ]
          }]
      }]
  }]
},

"q": "",
"area": "",
"required": "true",
"type": "radio",
"answers": [
  {
    "a": "",
    "pts": 0
  },
]


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
