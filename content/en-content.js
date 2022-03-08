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
    "headline": "Evaluation & feedback",
    "subtitles": [
      "levels": ["Below", "OK", "Exceeds"],
      "sub-rec": "What we recommend",
      "sub-why": "Why we recommend this",
      "sub-eg": "A fictional example"
    ],
    "reusables": {
      "below": "This puts it below our recommended security level for civil society organizations. Don’t worry! We’ve put together some recommendations to improve your organization’s cybersecurity.",
      "ok": "This means it has a reasonable level of security in this area. Good job! There are still areas for improvement, so we’ve put together some recommendations to improve your organization’s cybersecurity even more.",
      "exceeds": "This means it has a high level of security in this area. Good work! There are still areas for improvement, so we’ve put together some recommendations to improve your organization’s cybersecurity even more."
    },
    "content": [
      {
        "area": "risk-and-threat", // which score-collection category is this
        "title": "Risk Analysis and Threat Assessment",
        "desc": "Your organization has scored [[X]] points in the risk analysis and threat assessment category.", // explanation of what this means
        "all-levels": [
          {
            "why": ["Understanding your risk is critical to keeping your organization safe. All good safety and security planning begins with a thorough understanding of the possible threats we face. Investing time and effort into better understanding your threat model will make reducing your risk much easier in the future. Remember also that threats evolve, so you may need to update your threat model as your organization and the landscape around you change.", "Once you have developed policies, plans, and documentation, consider a tabletop exercise. Just remember to encourage an open, nonjudgmental space; learning about security vulnerabilities doesn’t require individual finger-pointing or blame.", "When—not if—a real incident occurs, it can be scary, stressful, and chaotic. Following these best practices increases the likelihood of best possible outcomes. And don’t forget that you will need to assign at least one member of your staff  to oversee the cybersecurity effort within your organization."], // why is this recommended (all levels)
            "eg": ["ADE Worldwide is a civil society organization that helps train farmers and agricultural workers around the world to use water sustainably while advocating for better global environmental policy. The group’s advocacy for water rights has upset powerful landowners in several nations.", "ADE sees itself as a nonpartisan, nonpolitical agricultural advisor. After its website is hacked and defaced, however, ADE realizes it needs to conduct a threat model analysis to better understand the risks the group faces around the world.", "This process helps it realize that the likelihood of these digital attacks is high for groups working on similar issues. While ADE staff members don’t see their mission as controversial, they realize their own organization’s risk profile is high due to the effectiveness and publicity of their work. As a result, they develop an incident response plan and checklist for physical or cybersecurity incidents.", "The ADE staff decides to proactively lead a series of tabletop exercises talking through how they would respond in the event of a security incident. As a result, when the field staff receive some verbal threats from regional landowners, they are prepared with a plan to manage any potential risk."], // example scenario
          }
        ],
        "results": [ // contains result text for this category
          {
            "assess": "below", // assessed level, based on score
            "recs": [ // contains recommendations for this level
              {
                "title": "Determine your threat model.", // title of this recommendation
                "desc": ["When thinking about the risks that face your organization in the digital world, it’s helpful to think about all the risks that your staff  faces outside of cybersecurity, including physical, legal, and organizational challenges. After all, many digital threats begin in the “real” world, such as risks posed by governments, law enforcement, criminal groups, and lawsuits.", "Documenting and analyzing your risk is a process known in cybersecurity as “threat modeling.” If you’re just getting started with cybersecurity for your organization—or refreshing your approach after an attack—start with your threat model. This process will not only identify cybersecurity risks but also help you find vulnerabilities across your organization. The Electronic Frontier Foundation provides [a step-by-step guide on threat modeling](eff.tmodel) here. Access Now Helpdesk offers [an easy guide to threat models with examples here](an.tmodel)."] // explanation of this recommendation
              },
              {
                "title": "Create a risk matrix.",
                "desc": ["Every organization’s risks are unique, and the context in which you work will help you better map out which risks are both most likely and most dangerous for your staff . It’s helpful to think about risks to your organization’s security based on the likelihood and the impact of particular threats. Just because an event is likely doesn’t mean it deserves your full attention. There may be less frequent threats that could have significantly more of an impact on your organization. For example, some threats—such as physical damage to your phone—may be highly likely but not very effective or dangerous. Other threats, such as a corporate-sponsored cyberattack, may be much less likely but very dangerous.", "You can map these risks using a tool called a “risk matrix,” which represents your different threats on a chart with likelihood on one axis and impact on the other."],
                "table": {
                  "intro": "Here’s an example.",
                  "rows": [["", "Low Likelihood", "High Likelihood"], ["Low Consequence", "Printer is stolen from your office", "Physical damage to your phone"], ["High Consequence", "Corporate-sponsored cyberattack", "Phishing attack on your email account"]],
                  "p": "This is very helpful for members of your organization to quickly see which risks are both most likely and most dangerous. The Electronic Frontier Foundation has [a good model for a risk matrix in its threat modeling guide, which you can access here](ttech.matrices). Tactical Tech’s Holistic Security offers additional reading on these matrices."
                }
              },
            ]
          },
          {
            "assess": "ok",
            "recs": [
              {
                "title": "Develop an incident response plan.",
                "desc": "Working with your staff, develop a basic incident response plan. To do this, ask yourself what steps you would take if a particular threat occurred. Cybersecurity professionals often use risk frameworks, such as SANS Incident Response, [NIST Cybersecurity](nist.framework), ISO 27001, and the [MITRE ATT&CK Matrix](mitre.matrix), to identify common threats and determine the best way to respond. These frameworks are probably more advanced than you need at this point. Your organization can use a framework such as the one below to start to answer that question.",
                "table": {
                  "rows": [["If an attacker...", "How would you respond..."], ["Our staff clicked on a strange link.", ""], ["Our social media was hacked.", ""], ["Our email account was hacked.", ""], ["Our laptops/phones were hacked.", ""], ["Our website was hacked or defaced.", ""], ["Our organization was tricked by impersonated donors/funders.", ""], ["Our data were found/discovered.", ""], ["A member of our staff was harassed online.", ""], ["Our internal communications were disrupted.", ""], ["Our laptops or devices may have been stolen.", ""]],
                  "p": ["Don’t worry if you don’t have all the answers. Fill in as much information as you can. This step will be very useful when working with a security provider who can help develop solutions to these threats.", "We have also developed [an incident response plan questionnaire](cat.irplan) to help guide your team in putting together an incident-specific plan."],
                }
              },
              {
                "title": "Understand how incident response phases work together.",
                "desc": "In cybersecurity, you can think of four stages to respond to an incident: prepare, detect, contain/eradicate/recover, and then process/learn.",
                "subs": [
                  {
                    "title": "Prepare:",
                    "p": "The quote “Chance favors the prepared mind” is credited to Louis Pasteur. There are steps your staff can take before an incident to improve your organization’s resiliency. One of them is to ask yourself the following questions:",
                    "list": ["How many devices do we have?", "Which are the most important?", "How do we keep those devices safe?", "Do we have internal policies from our departments that are easy to follow in a digital crisis?", "Can we come up with a master checklist to follow during a crisis? During an incident, panic often clouds our best thinking and a checklist will help."]
                  },
                  {
                    "title": "Detect:",
                    "p": "This phase occurs when your organization identifies what is happening and plans a path forward. To do this, consider the following steps:",
                    "list": ["As best you can, identify an incident while it’s occurring or shortly after it has occurred", "Collect everything you can about the incident as soon as possible. Log dates and times, capture screenshots, record suspicious websites and links, stop using the device, and disconnect the device from the Internet (but don’t turn it off).", "Make sure to notify your internal teams about the incident, but don’t forget that cybersecurity attacks can affect other organizations, too. If outside groups are affected, you should inform them as soon as possible."]
                  },
                  {
                    "title": "Contain/Eradicate/Recover:",
                    "p": "This stage is actually made up of three steps.",
                    "list": ["In the first “containment” step, your staff can identify the cause and scope of the incident and take steps to stop or block immediate harm.", "In the second “eradicate” step, your staff can fully stop the incident and remove any discovered threats from your system.", "In the third “recovery” step, your staff can bring operations back online to their pre-incident state and address any remaining damage."]
                  },
                  {
                    "title": "Process/learn:",
                    "p": "This phase isn’t about blaming others, but rather reviewing how each phase unfolded and evaluating how your organization can improve the process and your future response."
                  }
                ]
              },
              {
                "title": "Find a security provider.",
                "desc": "Now that you have an understanding of the risks and threats facing your organization, you can begin to think about how to respond to those threats. This is when many people feel uncertain, especially if they don’t have a background in technology or security. Luckily, there are security providers who can help. When vetting a security provider, we recommend asking a series of questions to determine whether they are a good fit for your organization. We feel the most important ones are:",
                "list": ["Why do you do this work?", "Are you familiar with our region, culture, or language?", "Do you work with CSOs/NGOs? If so, what is the difference between your approach to this work and the work of your other clients?", "Have you worked with a group of my size before? Can you tell me more about this work?", "Have you worked on incidents or issues that are similar to ours in the past? Please provide a case study.", "How many clients are you currently working with? What percentage of your time will go to me?", "What is your understanding of the risks we face?"],
                "p": "A security provider can’t fix all your organization’s challenges on their own. Understand that you will need a designated person on your staff  who will manage this work and act as a liaison between your organization and the security provider."
              }
            ]
          },
          {
            "assess": "exceeds",
            "recs": [
              {
                "title": "Run a tabletop exercise.",
                "desc": ["It’s important to test your thinking about security by putting your organization through a simulated test. In the cybersecurity world, we call one of these tests a “tabletop exercise,” although your staff  doesn’t need to be physically gathered around a table to complete one. During an exercise, you can discuss how your organization would handle a hypothetical threat, step by step, and what areas still need to be improved. One idea is to write out scenarios of different incidents on index cards, drop them all in a box, and then schedule a few hours on your organization’s calendar to pull a few cards out to start the exercise.", "When you’re ready for your first tabletop exercise, here are key steps to get started. Some cybersecurity providers incorporate the [MITRE Corp.’s guidelines on tabletop exercises](mitre.tabletop)."],
                "list": ["Determine what you would like to test (usually by choosing one of your top identified threats).", "Designate a group leader to run the exercise.", "Create a plausible storyline that includes the threat you want to test.", "Gather the staff  that would be responsible for managing this threat.", "Walk the staff  through the scenario and ask for their responses, step by step.", "Document gaps, concerns, and weak points in the threat response."],
                "p": "You can use the knowledge gained from a tabletop exercise to identify areas of concern and begin to develop strategies to reduce those risks."
              },
            ]
          }
        ]
      },
      {
        "area": "docs-and-policy",
        "title": "Documentation and Policy",
        "desc": "Your organization has scored [[X]] points in the documentation and policy category.",
        "all-levels": [
          "why": ["Before you can upgrade your security, you need to have the fundamentals in place. Putting together a security policy and road map for your organization can help you be proactive about your security while also preparing for worst-case scenarios.", "Even the most well-intentioned organizations sometimes struggle to put security policies into practice on an everyday basis. That’s why it’s important to adopt a nonjudgmental, empathetic approach to helping staff become compliant. Reward the successes and manage the failures, and remember that changing behavior takes time.", "Once you have a policy in place within your organization, you might be hesitant to make any changes and upset the status quo. Remember, though, that policies and road maps must adapt to changing threats to be effective. Designating certain staff members to keep these documents updated can help reduce unexpected risks in the future."],
          "eg": ["ADE Worldwide is growing quickly. What started as an organization with headquarters in Washington, DC, and a single field office in Latin America has quickly expanded to other locations around the world. Now that the organization is growing, more ADE staff members are reporting possible security challenges. Luckily, no security challenge has escalated into an incident, but management is growing concerned with the organization’s existing security policy.", "To help close this gap, the executive management team conducts a policy review session. They find that their current security policy has notable gaps but accurately reflects how the majority of staff handles cybersecurity. They realize they need to do more to make security a key part of the organization’s workflow. In response, they patch the gaps by moving security goals from their road map to their policy, making these steps a reality.", "Then, they take steps to ensure that more of the staff complies with the newly revised policy. These include starting every staff meeting with a recognition of staff members who have demonstrated good security practices, while asking those falling behind to take part in a tabletop exercise that will demonstrate firsthand the risks of ignoring the new policy.", "When they add a new field office in Thailand, they realize their policies need to be updated to reflect this new region. The CEO of ADE creates a working group to make changes to the policy, monitor threats across the offices and update policies at least once a year."],
        ],
        "results": [
          {
            "assess": "below",
            "recs": [
              {
                "title": "Document your security policy and your future road map.",
                "desc": ["As an established civil society organization, you probably have strategic documents, policies, and plans to help you reach your key goals. Now that you’re focusing on strengthening your cybersecurity, it’s time to develop a security policy and road map, too.", "A security policy explains your day-to-day cybersecurity operations currently. A security road map, on the other hand, is a more aspirational document that states your medium- and long-term goals for your cybersecurity policy.", "Luckily, this doesn’t have to be too daunting. While some organizations may have a series of complex security policies and plans, you can get started with something much simpler. The key steps to a successfully documenting a security policy are:"],
                "list": [
                  "Document whatever steps more than 80 percent of your staff currently take to face cybersecurity threats.",
                  "Conduct an honest assessment of your current approach toward cybersecurity threats."
                ],
                "p": ["The more honest your policy, the more your organization can improve. If you are fully honest, you should be able to find room for improvement within your organization. For example, you may find that only some of your staff members use a cybersecurity tool you’ve purchased. Once you’ve taken a look at your policy and identified gaps, you can start to put together a security road map.", "The key steps to developing a security road map are:"],
                "list": [
                  "Understand and define your key threats and risks (see Risk Analysis and Threat Assessment).",
                  "Compare your existing policy against the key threats to identify what is missing in your security approach",
                  "Document what you would like to implement in the future to improve your security approach."
                ],
                "p": ["When you’re ready to create your first security policy, you can use the highly useful [SOAP tool](soap.tool) to generate a policy through a series of step-by-step questions.", "Remember that your security policy is a living document—try to update it with new guidelines based on changing threats at least once per year."]
              }
            ]
          },
          {
            "assess": "ok",
            "recs": [
              {
                "title": "Gently enforce the rules.",
                "desc": ["You’ve invested time and resources into creating a security policy and road map for your organization. But despite your best efforts, you notice that some staff members aren’t always following the rules. This is common, especially in organizations where security isn’t a key component of staff culture.", "Don’t worry; integrating “security thinking” into an organization is possible, if time-consuming. One of the most effective ways to get the staff  thinking about security is to gradually introduce security concepts into your everyday workflow until they become part of your staff’s routine.", "Here is one strategy to help your staff incorporate your security policies into their operations."],
                "olist": [
                  "Determine an effective way to measure staff compliance in the areas that you want to improve.",
                  "Gather your executive team and ask them to identify the weakest links in your organization (individuals who aren’t complying with much of your security policy).",
                  "Deputize those weakest links for simple tasks, such as ensuring that their colleagues are following a basic requirement of your security policy.",
                  "Reward positive behavior change, especially among staff members who previously were not compliant, with praise and other motivators. Be empathetic.",
                  "Don’t punish slow or lax compliance. Technology can be intimidating to many people and may have a steep learning curve. After a certain publicly announced date or time, cut off services (such as emails, logins, etc.) for users who don’t comply. Other services, such as two-factor authentication, can simply be made mandatory. Be prepared to provide additional support when this happens.",
                  "Run a tabletop exercise with your staff so they can better understand the risks of not following policy.",
                  "Share news and updates on other organizations that have been targets of cybersecurity attacks as teachable moments for your staff. This may require you to emphasize how similar threats could face your organization.",
                  "Begin again with the measurement phase.",
                ],
                "p": "If results are slow, don’t worry. Organizational change can sometimes take a year or more to fully take place. Keep working at this process steadily over time."
              }
            ]
          },
          {
            "assess": "exceeds",
            "recs": [
              {
                "title": "Keep your policy and road map updated.",
                "desc": ["Your organization has strong security policies and procedures, and your staff members understand the importance of security in their everyday work. It’s important to remember, though, that even the strongest security policy and road map will become outdated and obsolete as technology and threats evolve.", "To help, we recommend you think of your security policy and road map as ‘living” documents that need to be updated regularly to meet new risks and threats. Keeping these documents updated doesn’t require an extensive commitment, but it does require regular check-ins.", "Here is one strategy to keep policies and road maps up to date by creating a governance structure for cybersecurity within your organization."],
                "olist": [
                  "Create a working group to investigate new threats, risks, and tools as they appear. This group may want to meet as frequently as monthly or quarterly or as infrequently as once or twice a year.",
                  "Develop criteria for including new software and systems into your workflow. Before adding a new piece of software or online tool, the working group should consider whether that decision fits with your existing security policy or road map.",
                  "Designate a staff member to be responsible for updating the policy based on feedback from your working group.",
                ],
                "p": "Remember that outside forces should cause your security policy to change, just as your organizational goals and approaches change, to meet new challenges."
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
  }
];

var oc = [ // contains all other content
  {
    "type": "ux",
    "title": "",
    "content": [
      {
        "type": "",
        "text": "SAVE & RESUME LATER"
      },
      {
        "type": "",
        "text": "Use this link to resume your CAT session. Copy the link below and save it in a safe place!"
      },
      {
        "type": "",
        "text": "COPY LINK"
      },
      {
        "type": "",
        "text": "Want us to email this link to you? Enter your email below."
      },
      {
        "type": "",
        "text": "YOUR EMAIL"
      },
      {
        "type": "",
        "text": "SEND LINK"
      },
      {
        "type": "",
        "text": "This CAT SESSION will expire in 30 DAYS. Without the link, the data you have entered cannot be retrieved, and you will have to start from the beginning."
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
