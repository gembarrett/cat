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
        "p": "COVID-19 has fundamentally changed the way we live and work. During this uncertain time, we are all finding new ways to survive and continue our work. This includes using technology more than ever before, raising the already important issue of cybersecurity within civil society organizations. However, finding where to begin and understanding the best way to tackle this topic can feel daunting for even the best-resourced organizations. That’s why we have created this tool."
      },
      {
        "p": "The Ford Foundation’s Cybersecurity Assessment Tool (CAT) is designed to measure the maturity, resiliency, and strength of an organization’s cybersecurity efforts. We have created this questionnaire with busy nontechnical grant makers, grantee partners, civil society organizations, and nonprofits in mind, and we hope it helps shine some light on a recommended path forward for any organization undertaking a cybersecurity journey. The tool is designed to be taken as a survey in one 30-minute sitting. However, it may require information from several members of your staff, including operations staff or decision makers. We initially created the questionnaire to help BUILD’s grantee partners, and we’re now making a beta version available for public use."
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
        "p": "We designed CAT to help a specific set of civil society organizations and funders around the world. These include:",
        "list": [
          "Grantees of the Ford Foundation BUILD program",
          "Non-governmental organizations (NGOs) or civil society organizations (CSOs) that are funded by other grantmakers or foundations",
          "Civil society organizations using other assessment tools that would like additional information about their cybersecurity preparedness",
          "Civil society organizations that have recently suffered a cybersecurity incident and need to determine their next steps",
          "Grantmakers or other funders seeking to assess their grantees' cybersecurity risk level",
          "Technical assistance providers who would like to measure their clients' cybersecurity awareness",
        ]
      },
      {
        "p": "Don't see your type of organization listed above? This doesn't mean that CAT won't work for you. However, you may need to adjust some of your recommendations for your particular context."
      }
    ]
  },
  {
    "type": "legal",
    "title": "Legal disclaimer",
    "content": [
      {
        "p": "This tool is provided for free to nonprofit organizations for informational purposes only. It is meant to be used as a starting point for organizations with limited resources to assist them in beginning to develop a cybersecurity program. Use of this tool does not guarantee compliance with federal, state or local laws. Please note that the information presented may not be applicable or appropriate for all of your nonprofit organization’s cybersecurity needs. This tool is not intended to be an exhaustive or definitive source on safeguarding your organization's information from privacy and security risks. For more information about cybersecurity assessments, visit SANS Incident Response framework, NIST Cybersecurity, and ISO 27000 series with attention to ISO 27005 risk management."
      },
      {
        "p": "NOTE: The cybersecurity standards provided reflect current best practices in information technology as of the release date of this tool, which means we cannot guarantee it is accurate, up to date, or appropriate for your organization. This tool is not intended to serve as legal advice or as recommendations based on an organization's specific circumstances. We encourage organizations to seek expert advice when evaluating the use of this tool."
      },
      {
        "p": "This tool is meant to help nonprofit organizations:",
        "list": [
          "develop a general sense of the maturity of an organization's cybersecurity program, and",
          "identify potential cybersecurity program components to consider adding or improving.",
        ]
      },
      {
        "p": "The tool does not provide organizations with:",
        "list": [
          "a roadmap for securing the organization against cyberattacks or other misuse of their data or systems,",
          "a basis for determining compliance with any legal obligations, or",
          "a definitive list of the cybersecurity program components an organization should develop.",
        ]
      },
      {
        "p": "By using this tool, you confirm that you have the right to provide all information entered into this tool without violating the privacy, confidentiality or other obligations of your organization in the relevant jurisdictions. The information that you entered into this tool is stored with a third-party service provider. The Ford Foundation does not receive the information entered into this tool; however, it may receive anonymized results about the tool’s general performance to help the Foundation: (1) deliver the tool’s service; (2) ensure that the tool is working as intended and to make improvements to the tool and the content; and (3) in the furtherance of Foundation's mission to support the nonprofit sector."
      }
    ]
  }
]
