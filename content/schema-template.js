"title": "Evaluation & feedback",
"reusables": {
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
    "rec": "String",
    "why": "String",
    "eg": "String"
  }
},
"content": [
  {
    "area": "this-area-ref",
    "title": "Title Of This Evaluation Area",
    "score": "Your org scored [[X]] in this evaluation category",
    "general": {
        "why": ["String 1", "String 2"],
        "eg": ["String 1", "String 2"]
    },
    "results": [
      {
        "assess": "below",
        "recs": [
          {
            "title": "Title string",
            "content": [
              "String 1",
              "String 2",
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
