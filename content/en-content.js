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
        "name": "Martijn Grooten",
        "p": "worked as an academic mathematician before finding himself with a job at a security company almost 14 years ago. He has a broad interest in security and was the editor of Virus Bulletin for almost six years. He is a regular public speaker and writer and currently works as a security consultant with a particular focus on helping vulnerable groups and people. He is a fellow of the Civilsphere Project and a special advisor to the Coalition Against Stalkerware."
      },
      {
        "name": "Matt Hansen",
        "p": "’s work has appeared in the Los Angeles Times, The Week, Chicago Tribune, Baltimore Sun, the San Francisco Chronicle, and KQED-FM. He has also written for organizations including the Committee to Protect Journalists, the Robin Hood Foundation, Smart Design, the Museum of the Moving Image, and Spaceship Media. Matt assists with digital and physical safety training for news and nonprofit clients with GJS, a training provider for high-risk environments."
      },
      {
        "name": "Matt Mitchell",
        "p": "is a tech fellow working with the BUILD and Technology and Society teams to develop cybersecurity training, technical assistance, and safety and security measures for the foundation’s grantee partners. Matt is a hacker and expert on counter surveillance and cybersecurity."
      },
      {
        "name": "Trinh Nguyen",
        "p": "is a holistic security and movement building trainer, currently serving as the head of operations for team community at ARTICLE 19. Trinh has over 15 years of training experience, previously working on campaigns for reproductive justice, anti-oppression, Internet freedom, and pro-democracy efforts in Vietnam. As a movement building trainer, she incorporates capacity building and cybersecurity tactics to help diverse grassroots pro-democracy and human rights movements achieve digital resiliency and organizational security."
      },
      {
        "name": "Runa Sandvik",
        "p": "works on digital security for journalists and other high-risk people. Her work builds upon experience from her time at The New York Times, Freedom of the Press Foundation, and The Tor Project. She is a board member of the Norwegian Online News Association and tweets as @runasand."
      },
      {
        "name": "Laura Tich",
        "p": "is an information security analyst and cybersecurity trainer with expertise in network security and open source intelligence. She is an advocate for Internet freedom and has worked on various projects around digital security for journalists and civil society organizations across Africa. She is a founder of SheHacks_KE, a community of women cybersecurity professionals and enthusiasts in Kenya. The community empowers women in cybersecurity by facilitating free training workshops and providing mentorship."
      }
    ]
  },
  {
    "type": "process",
    "title": "How it works",
    "content": [
      {
        "p": "This questionnaire is designed to help you identify strengths and weaknesses in your cybersecurity approach, as well as provide resources for improvement. After you complete the assessment, you’ll receive a personalized response and recommendations."
      },
      {
        "p": "The assessment will cover four key areas:",
        "list": ["Operational Security", "Device Security", "Account Security", "Associated Risks"]
      },
      {
        "p": "This assessment will take approximately 30 to 40 minutes of your organization’s time. You may need to ask other staff members or third-party contractors for answers to some of these questions, depending on how your organization is structured."
      },
      {
        "p": "The Ford Foundation does not store your data when you use this tool. The data are stored in an encrypted database at FormStack, a leading online provider. We do receive anonymous results about the questionnaire’s general performance to help us understand our grantees’ needs."
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
