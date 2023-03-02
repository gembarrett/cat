var en_qs = [
  {
    "section": "understand-risk",
    "title": "Understanding Risk",
    "subs": [
        {
          "name": "your-org",
          "subtitle": "About Your Organization",
          "questions": [
            {
              "q": "How would you best describe your approach to cybersecurity?",
              "area": "risks",
              "required": "true",
              "type": "radio",
              "answers": [
                {
                  "a": "We have a staff member who manages cybersecurity as part of their job.",
                  "pts": 0
                },
                {
                  "a": "We have a third-party consultant who manages cybersecurity.",
                  "pts": 0
                },
                {
                  "a": "We haven’t thought about cybersecurity much within our organization.",
                  "pts": 15
                },
                {
                  "a": "We have a staff member who handles cybersecurity when needed.",
                  "pts": 0
                },
                {
                  "a": "We don’t know.",
                  "pts": 15
                }
              ]
            },
            {
              "q": "What is the mood when cybersecurity comes up in conversation?",
              "area": "risks",
              "required": "true",
              "type": "radio",
              "answers": [
                {
                  "a": "We are excited.",
                  "pts": 0
                },
                {
                  "a": "We are stressed, worried, or anxious.",
                  "pts": 0
                },
                {
                  "a": "We are confused.",
                  "pts": 0
                },
                {
                  "a": "We are bored.",
                  "pts": 0
                },
                {
                  "a": "We never talk about cybersecurity.",
                  "pts": 15
                }
              ]
            },
            {
              "q": "On average, how eager are your staff members to keep your organization secure?",
              "area": "risks",
              "required": "true",
              "type": "radio",
              "answers": [
                {
                  "a":"We are very eager.",
                  "pts": 0
                },
                {
                  "a": "We are somewhat eager.",
                  "pts": 5
                },
                {
                  "a": "We are not eager.",
                  "pts": 5
                },
                {
                  "a": "We don’t know.",
                  "pts": 15
                }
              ]
            },
            {
              "q":"Does your organization (or the communities you work with) face potential backlash from groups who disagree with you?",
              "area": "risks",
              "required": "true",
              "type": "radio",
              "answers": [
                {
                  "a": "Yes",
                  "pts": 10
                },
                {
                  "a": "No",
                  "pts": 0
                },
                {
                  "a": "We don’t know.",
                  "pts": 5
                }
              ]
            },
            {
              "q": "Does your organization support a minority group?",
              "area": "risks",
              "required": "true",
              "type": "radio",
              "answers": [
                {
                  "a": "Yes",
                  "pts": 10
                },
                {
                  "a": "No",
                  "pts": 0
                },
                {
                  "a": "We don't know.",
                  "pts": 5
                }
              ]
            },
            {
              "q": "Does your organization support new immigrants to your country?",
              "area": "risks",
              "required": "true",
              "type": "radio",
              "answers": [
                {
                  "a": "Yes",
                  "pts": 10
                },
                {
                  "a": "No",
                  "pts": 0
                },
                {
                  "a": "We don't know.",
                  "pts": 5
                }
              ]
            },
            {
              "q": "Which areas of your organization's work do you believe create additional risk? Choose your top three.",
              "area": "risks",
              "required": "true",
              "type": "checkbox",
              "answers": [
                {
                  "a": "Publications and journalism",
                  "pts": 0
                },
                {
                  "a": "Community outreach and advocacy",
                  "pts": 0
                },
                {
                  "a": "Research",
                  "pts": 0
                },
                {
                  "a": "Grantmaking",
                  "pts": 0
                },
                {
                  "a": "Partnerships",
                  "pts": 0
                },
                {
                  "a": "Working directly with minority groups",
                  "pts": 0
                },
                {
                  "a": "Other",
                  "pts": 0
                },
                {
                  "a": "We have no additional risks.",
                  "pts": 5
                },
                {
                  "a": "We have never thought about it.",
                  "pts": 10
                }
              ]
            },
            {
              "q": "Does your organization have specific cybersecurity concerns? Choose your top three.",
              "area": "risks",
              "required": "true",
              "type": "checkbox",
              "answers": [
                {
                  "a": "Attacks from large groups who disagree with us",
                  "pts": 0
                },
                {
                  "a": "Attacks from small groups or individuals who disagree with us",
                  "pts": 0
                },
                {
                  "a": "Lack of staff awareness about cybersecurity",
                  "pts": 0
                },
                {
                  "a": "Our concerns aren’t listed here.",
                  "pts": 0
                },
                {
                  "a": "We don’t have any concerns currently.",
                  "pts": 15
                },
                {
                  "a": "We don’t know.",
                  "pts": 10
                }
              ]
            },
            {
              "q": "How often do you consider cybersecurity when you make decisions about internal workflow and processes?",
              "area": "risks",
              "required": "true",
              "type": "radio",
              "answers": [
                {
                  "a": "Always",
                  "pts": 0
                },
                {
                  "a": "Sometimes",
                  "pts": 0
                },
                {
                  "a": "Rarely",
                  "pts": 0
                },
                {
                  "a": "Never",
                  "pts": 0
                },
                {
                  "a": "We don’t know.",
                  "pts": 15
                }
              ]
            },
            {
              "q": "How does your organization pay for cybersecurity?",
              "area": "risks",
              "required": "true",
              "type": "radio",
              "answers": [
                {
                  "a": "Cybersecurity is part of our operations budget.",
                  "pts": 0
                },
                {
                  "a": "Cybersecurity has its own line item in our annual budget.",
                  "pts": 0
                },
                {
                  "a": "We raise funds for cybersecurity.",
                  "pts": 0
                },
                {
                  "a": "We do not pay for cybersecurity but receive free assistance.",
                  "pts": 0
                },
                {
                  "a": "We do not have a consistent way to pay for cybersecurity.",
                  "pts": 15
                }
              ]
            }
          ]
        },
        {
          "name": "external-threats",
          "subtitle": "External Threats",
          "questions": [
              {
                "q": "Has anyone at your organization experienced “doxxing” (when someone targets you and publishes your private information online)?",
                "area": "a-risks",
                "required": "true",
                "type": "radio",
                "answers": [
                  {
                    "a": "Yes, one or more staff members have had their private information published online.",
                    "pts": 50
                  },
                  {
                    "a": "No, no one has had their private information published online.",
                    "pts": 0
                  },
                  {
                    "a": "We don’t know.",
                    "pts": 15
                  }
                ]
              },
              {
                "q": "Has anyone at your organization experienced harassment (abusive language or behavior) online?",
                "area": "a-risks",
                "required": "true",
                "type": "radio",
                "answers": [
                  {
                    "a": "Yes, one or more staff members have been harassed online.",
                    "pts": 60
                  },
                  {
                    "a": "No, no one has been harassed online.",
                    "pts": 0
                  },
                  {
                    "a": "We don’t know.",
                    "pts": 15
                  }
                ]
              },
              {
                "q": "Has anyone at your organization been physically harassed (followed or attacked) by someone outside of your organization?",
                "area": "a-risks",
                "required": "true",
                "type": "radio",
                "answers": [
                  {
                    "a": "Yes, one or more staff members have been physically harassed.",
                    "pts": 70
                  },
                  {
                    "a": "No, no one has been physically harassed.",
                    "pts": 0
                  },
                  {
                    "a": "We don’t know.",
                    "pts": 15
                  }
                ]
              },
              {
                "q": "Has anyone at your organization, or the organization itself, been the target of online impersonation (a fake account that spreads misleading or discrediting information)?",
                "area": "a-risks",
                "required": "true",
                "type": "radio",
                "answers": [
                  {
                    "a": "Yes, one or more staff members have been impersonated online. ",
                    "pts": 20
                  },
                  {
                    "a": "No, no one has been impersonated online.",
                    "pts": 0
                  },
                  {
                    "a": "We don’t know.",
                    "pts": 15
                  }
                ]
              },
              {
                "q": "Has anyone ever hacked or defaced your website in the past five years?",
                "area": "a-risks",
                "required": "true",
                "type": "radio",
                "answers": [
                  {
                    "a": "Yes",
                    "pts": 20
                  },
                  {
                    "a": "No",
                    "pts": 0
                  },
                  {
                    "a": "We don't know.",
                    "pts": 15
                  },
                  {
                    "a": "We don’t have a website.",
                    "pts": 0
                  }
                ]
              },
              {
                "q": "Has your organization had a major security incident in the past five years?",
                "area": "a-risks",
                "required": "true",
                "type": "radio",
                "answers": [
                  {
                    "a": "Yes",
                    "pts": 20
                  },
                  {
                    "a": "No",
                    "pts": 0
                  },
                  {
                    "a": "We don't know.",
                    "pts": 15
                  }
                ]
              }
            ]
        }
    ]
  },
  {
    "section": "op-sec",
    "title": "Operational Security",
    "subs": [
      {
      "name": "policy-docs",
        "subtitle": "Policy & Documentation",
        "questions": [
          {
            "q": "Does your organization have a formal or informal security policy?",
            "area": "docs",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "We have a formal documented policy.",
                "pts": 0
              },
              {
                "a": "We discuss policies but do not document them.",
                "pts": 5
              },
              {
                "a": "We do not have a policy.",
                "pts": 10
              },
              {
                "a": "My organization is not familiar with security policies.",
                "pts": 15
              }
            ]
          },
          {
            "q": "[If yes] Does your security policy cover any aspect of cybersecurity, such as safe use of mobile devices or computers?",
            "area": "docs",
            "required": "false",
            "type": "radio",
            "answers": [
              {
                "a": "Our security policy includes a section on cybersecurity.",
                "pts": 0
              },
              {
                "a": "Our security policy has one or two references to cybersecurity.",
                "pts": 5
              },
              {
                "a": "Our security policy only covers physical security.",
                "pts": 10
              },
              {
                "a": "We do not have a policy.",
                "pts": 10
              },
              {
                "a": "My organization is not familiar with security policies.",
                "pts": 15
              }
            ]
          },
          {
            "q": "[If yes] When was the last time you updated or reviewed your security policies?",
            "area": "docs",
            "required": "false",
            "type": "radio",
            "answers": [
              {
                "a": "We update our policy once a year or more.",
                "pts": 0
              },
              {
                "a": "We update our policy only after a threat occurs.",
                "pts": 5
              },
              {
                "a": "We have never updated our policy.",
                "pts": 10
              },
              {
                "a": "We don’t have a policy.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 10
              }
            ]
          },
          {
            "q": "[If yes] How often do you believe your staff members are following your security policies?",
            "area": "docs",
            "required": "false",
            "type": "radio",
            "answers": [
              {
                "a": "Often",
                "pts": 0
              },
              {
                "a": "Sometimes",
                "pts": 5
              },
              {
                "a": "Rarely",
                "pts": 10
              },
              {
                "a": "Never",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          }
        ]
      },
      {
        "name":"internal-risks",
        "subtitle": "Internal Risks",
        "questions": [
          {
            "q": "How many times in the past year have you identified problems with your organization’s security?",
            "area": "i-risks",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "10+ times",
                "pts": 0
              },
              {
                "a": "3-10 times",
                "pts": 5
              },
              {
                "a": "1-2 times",
                "pts": 10
              },
              {
                "a": "Never",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "Do you feel that your staff members have identified and understand the cybersecurity risks to your organization?",
            "area": "i-risks",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, everyone has identified and understands these risks.",
                "pts": 0
              },
              {
                "a": "Some staff members have identified and understand these risks better than others.",
                "pts": 5
              },
              {
                "a": "No one has identified and understood these risks.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "Do you have a policy for removing access to data after a staff member leaves your organization?",
            "area": "i-risks",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we have a policy.",
                "pts": 0
              },
              {
                "a": "No, we do not have a policy.",
                "pts": 15
              },
              {
                "a": "Nobody has left yet, but we do have such a policy.",
                "pts": 5
              },
              {
                "a": "We are not concerned about this risk.",
                "pts": 10
              }
            ]
          },
          {
            "q": "Do your staff members understand that working for your organization may make them a target for cyberattacks?",
            "area": "i-risks",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Everyone understands these risks.",
                "pts": 0
              },
              {
                "a": "Some staff members understand these risks.",
                "pts": 10
              },
              {
                "a": "Few staff members understand these risks.",
                "pts": 15
              },
              {
                "a": "Our organization does not face these risks.",
                "pts": 5
              }
            ]
          },
          {
            "q": "Is anyone on staff responsible for information technology (IT) in your organization?",
            "area": "i-risks",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "We have at least one staff member responsible for IT.",
                "pts": 0
              },
              {
                "a": "We use a third-party IT provider or consultant.",
                "pts": 5
              },
              {
                "a": "We use volunteers.",
                "pts": 10
              },
              {
                "a": "We do not have any IT support.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          }
        ]
      },
      {
        "name":"training-support",
        "subtitle": "Staff Training & Support",
        "questions": [
            {
              "q": "Which groups within your organization currently receive cybersecurity training?",
              "area": "training",
              "required": "true",
              "type": "radio",
              "answers": [
                {
                  "a": "Staff only",
                  "pts": 10
                },
                {
                  "a": "Staff, volunteers and contractors",
                  "pts": 0
                },
                {
                  "a": "Staff, volunteers and contractors, and any individual or organization we work with frequently",
                  "pts": 0
                },
                {
                  "a": "No one receives cybersecurity training.",
                  "pts": 15
                },
                {
                  "a": "None of these apply.",
                  "pts": 5
                },
                {
                  "a": "We don’t know.",
                  "pts": 15
                }
              ]
            },
            {
              "q": "[If yes] How often do these groups in your organization receive cybersecurity training?",
              "area": "training",
              "required": "false",
              "type": "radio",
              "answers": [
                {
                  "a": "Once a month or more",
                  "pts": 0
                },
                {
                  "a": "Once a quarter",
                  "pts": 5
                },
                {
                  "a": "Once a year",
                  "pts": 10
                },
                {
                  "a": "Only during onboarding",
                  "pts": 15
                },
                {
                  "a": "Only after a threat occurs",
                  "pts": 10
                },
                {
                  "a": "We don’t know.",
                  "pts": 15
                }
              ]
            },
            {
              "q": "[If yes] Do new staff members at your organization receive cybersecurity training (onboarding)?",
              "area": "training",
              "required": "false",
              "type": "radio",
              "answers": [
                {
                  "a": "Yes",
                  "pts": 0
                },
                {
                  "a": "Yes, but only to some staff members",
                  "pts": 10
                },
                {
                  "a": "No",
                  "pts": 15
                },
                {
                  "a": "We don’t know.",
                  "pts": 15
                }
              ]
            },
            {
              "q": "When a staff member leaves, does your organization have a documented offboarding process that includes cybersecurity procedures?",
              "area": "training",
              "required": "true",
              "type": "radio",
              "answers": [
                {
                  "a": "Yes, and we always follow the process.",
                  "pts": 0
                },
                {
                  "a": "Yes, but we do not always follow the process.",
                  "pts": 5
                },
                {
                  "a": "No",
                  "pts": 15
                },
                {
                  "a": "We don’t know.",
                  "pts": 10
                }
              ]
            },
            {
              "q": "Does your organization conduct exit interviews with departing staff members that include an honest conversation about security vulnerabilities and areas of improvement that they’ve noticed?",
              "area": "training",
              "required": "true",
              "type": "radio",
              "answers": [
                {
                  "a": "Yes, we always conduct exit interviews that include questions about security.",
                  "pts": 0
                },
                {
                  "a": "Yes, we sometimes conduct exit interviews that include questions about security.",
                  "pts": 5
                },
                {
                  "a": "No, we conduct exit interviews but do not ask about security.",
                  "pts": 10
                },
                {
                  "a": "We don’t conduct exit interviews.",
                  "pts": 15
                },
                {
                  "a": "We don’t know.",
                  "pts": 15
                }
              ]
            }
          ]
      },
      {
        "name":"travel-policy",
        "subtitle": "Travel Policy",
        "questions": [
          {
            "q": "Does your organization have security-related policies in place for travel",
            "area": "travel",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, and we mostly follow these policies.",
                "pts": 0
              },
              {
                "a": "Yes, but we do not always follow these policies.",
                "pts": 5
              },
              {
                "a": "No, we do not have travel safety policies.",
                "pts": 15
              },
              {
                "a": "No, we do not travel for work.",
                "pts": 0
              },
              {
                "a": "We don’t know.",
                "pts": 10
              }
            ]
          },
          {
            "q": "[If yes] What risks are covered in your travel security-related policy?",
            "area": "travel",
            "required": "false",
            "type": "radio",
            "answers": [
              {
                "a": "Physical security and cybersecurity, including device policies and usage practices",
                "pts": 0
              },
              {
                "a": "Physical security only",
                "pts": 10
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          }
        ]
      },
      {
        "name":"managing-data",
        "subtitle": "Managing Data",
        "questions": [
          {
            "q": "What data retention policy (a policy that controls what you store, where you store it, and how long you store it for) does your organization have?",
            "area": "data",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "We have a policy for all data.",
                "pts": 0
              },
              {
                "a": "We have a policy for some categories of data (e.g. email, work-related files).",
                "pts": 5
              },
              {
                "a": "We do not have a data retention policy.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 10
              }
            ]
          },
          {
            "q": "Does your organization categorize the data you handle by how sensitive it is (low, medium, and high)?",
            "area": "data",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we categorize all our data by sensitivity.",
                "pts": 0
              },
              {
                "a": "Yes, we categorize some of our data by sensitivity.",
                "pts": 5
              },
              {
                "a": "No, we don't categorize our data by sensitivity. ",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 10
              }
            ]
          },
          {
            "q": "Does your organization control who has access to the data you store based on how sensitive it is?",
            "area": "data",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we have a process for authorizing select staff members to access sensitive data.",
                "pts": 0
              },
              {
                "a": "Yes, we only allow senior and executive staff members to access sensitive data.",
                "pts": 5
              },
              {
                "a": "No, anyone in our organization can access sensitive data.",
                "pts": 10
              },
              {
                "a": "No, we do not organize our data by sensitivity.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "How does your organization keep regular backups of its most important data?",
            "area": "data",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "We use our own automated backups.",
                "pts": 0
              },
              {
                "a": "We manually back up our data ourselves.",
                "pts": 5
              },
              {
                "a": "We use a third-party contractor to back up our data.",
                "pts": 5
              },
              {
                "a": "We do not back up our data regularly.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 10
              }
            ]
          }
        ]
      },
      {
        "name":"web-security",
        "subtitle": "Website Security",
        "questions": [
          {
            "q": "Does your organization have a website?",
            "area": "web",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes",
                "pts": 0
              },
              {
                "a": "No",
                "pts": 0
              }
            ]
          },
          {
            "q": "[If yes] How concerned are you that your website will become a target for people who want to do harm to your organization?",
            "area": "web",
            "required": "false",
            "type": "radio",
            "answers": [
              {
                "a": "Very concerned",
                "pts": 0
              },
              {
                "a": "Somewhat concerned",
                "pts": 10
              },
              {
                "a": "Not concerned",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "[If yes] Does your organization share information of public interest on your website that could upset groups that disagree with you?",
            "area": "web",
            "required": "false",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we frequently share this kind of information.",
                "pts": 15
              },
              {
                "a": "Yes, we sometimes share this kind of information.",
                "pts": 10
              },
              {
                "a": "Yes, we rarely share this kind of information.",
                "pts": 5
              },
              {
                "a": "No, we never share this kind of information.",
                "pts": 0
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "[If yes] If someone hacked your organization’s website, what types of information could they get?",
            "area": "web",
            "required": "false",
            "type": "radio",
            "answers": [
              {
                "a": "Only publicly available information",
                "pts": 5
              },
              {
                "a": "Publicly available information and unpublished information (draft blog posts, press releases, etc.)",
                "pts": 10
              },
              {
                "a": "Publicly available information and sensitive private information (addresses, payment records, etc.)",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              },
              {
                "a": "We don’t have a website.",
                "pts": 0
              }
            ]
          },
          {
            "q": "[If yes] What is your process for keeping a regularly updated backup of your website?",
            "area": "web",
            "required": "false",
            "type": "radio",
            "answers": [
              {
                "a": "We use automated backups.",
                "pts": 0
              },
              {
                "a": "We use manual backups.",
                "pts": 5
              },
              {
                "a": "We use a third-party provider to manage our backups.",
                "pts": 10
              },
              {
                "a": "We do not back up our website regularly.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              },
              {
                "a": "We don’t have a website.",
                "pts": 0
              }
            ]
          },
          {
            "q": "[If yes] Try typing your organization’s website into a browser address bar starting with 'http://' and then with 'https://'. What happens?",
            "area": "web",
            "required": "false",
            "type": "radio",
            "answers": [
              {
                "a": "When I type 'http' it remains 'http'",
                "pts": 30
              },
              {
                "a": "When I type 'http' it turns to 'https'",
                "pts": 0
              },
              {
                "a": "When I type 'https' my browser gives a warning about an insecure website.",
                "pts": 15
              }
            ]
          }
        ]
      },
      {
        "name":"office-security",
        "subtitle": "Office Policies & Systems",
        "questions": [
          {
            "q": "Does your organization have a policy that controls who enters your offices?",
            "area": "office",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "No, we don’t have a policy (visitors can come and go at will).",
                "pts": 15
              },
              {
                "a": "No, we don’t have a policy (we let visitors in when we recognize them).",
                "pts": 10
              },
              {
                "a": "Yes, we have a policy, but we don’t enforce it.",
                "pts": 8
              },
              {
                "a": "Yes, only visitors who comply with our policy can enter our offices.",
                "pts": 5
              },
              {
                "a": "We work in a shared space that controls access.",
                "pts": 5
              },
              {
                "a": "We don’t have a physical office.",
                "pts": 0
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "Does your organization have an alarm system in your offices?",
            "area": "office",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we have an alarm system that will capture the time and date when it goes off.",
                "pts": 0
              },
              {
                "a": "Yes, we have an alarm system that only makes warning noises.",
                "pts": 10
              },
              {
                "a": "Yes, we have an alarm system with other types of functionality.",
                "pts": 5
              },
              {
                "a": "No, we have no alarm system.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "Does your organization have security cameras in your offices?",
            "area": "office",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we have some form of video monitoring for our office.",
                "pts": 10
              },
              {
                "a": "Yes, we have an encrypted video monitoring system.",
                "pts": 0
              },
              {
                "a": "No, we do not have security cameras.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "Do you have a process for closing up at the end of the day in all your offices?",
            "area": "office",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we have a checklist document",
                "pts": 0
              },
              {
                "a": "Yes, we have a verbal procedure.",
                "pts": 5
              },
              {
                "a": "No, we do not have a formal process.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "Does your organization have a clean desk policy (a process for storing devices and clearing off desks) in all of your offices?",
            "area": "office",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we have a documented checklist that includes processes for storing devices and clearing off desks.",
                "pts": 0
              },
              {
                "a": "Yes, we have a verbal procedure that includes processes for storing devices and clearing off desks.",
                "pts": 5
              },
              {
                "a": "No, we do not have a formal process.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "Do you have a process for throwing away printed information?",
            "area": "office",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we keep paper shredders closer to our desks than garbage cans and shred all sensitive information. ",
                "pts": 0
              },
              {
                "a": "Yes, we have a single paper shredder, and staff members are told to shred all sensitive materials.",
                "pts": 5
              },
              {
                "a": "No, there is no particular process on what gets shredded or disposed of. ",
                "pts": 10
              },
              {
                "a": "No, we do not dispose of printed information.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          }
        ]
      },
      {
        "name":"legal-risks",
        "subtitle": "Legal Risks",
        "questions": [
          {
            "q": "Are you concerned about legal requests for your organization’s internal documents?",
            "area": "legal",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "We are very concerned about legal requests for internal documents.",
                "pts": 0
              },
              {
                "a": "We are somewhat concerned about legal requests for internal documents.",
                "pts": 5
              },
              {
                "a": "We are not concerned about legal requests for internal documents.",
                "pts": 10
              },
              {
                "a": "We don’t know.",
                "pts": 10
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "section": "devices-accounts",
    "title": "Device & Account Security",
    "subs": [
      {
        "name":"messaging-collab",
        "subtitle": "Messaging & Collaboration",
        "questions": [
          {
            "q": "How do your staff members message each other one-on-one or talk casually? Select the option that applies most often within your organization.",
            "area": "collab",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "We use secure messaging tools (Signal, Wire, etc.).",
                "pts": 0
              },
              {
                "a": "We use our personal devices and personal email accounts.",
                "pts": 16
              },
              {
                "a": "We use work email on our personal devices.",
                "pts": 15
              },
              {
                "a": "We don’t use any special tools to message each other securely.",
                "pts": 20
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "How do your staff members message their teams or talk about work? Select the option that applies most often within your organization.",
            "area": "collab",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "We use secure messaging and collaboration tools (Wire, Mattermost, Element, etc.).",
                "pts": 0
              },
              {
                "a": "We use our personal devices and personal email accounts.",
                "pts": 16
              },
              {
                "a": "We use work email on our personal devices.",
                "pts": 15
              },
              {
                "a": "We don’t use any special tools to collaborate securely.",
                "pts": 20
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "Does your organization have a process for working on sensitive topics?",
            "area": "collab",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we have a dedicated process for working on sensitive topics.",
                "pts": 0
              },
              {
                "a": "No, some staff members have a different workflow, but we have no official process.",
                "pts": 5
              },
              {
                "a": "No, we don’t have a process for working on sensitive topics.",
                "pts": 15
              },
              {
                "a": "We don’t work on sensitive topics.",
                "pts": 0
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          }
        ]
      },
      {
        "name":"installing-software",
        "subtitle": "Installing Software",
        "questions": [
          {
            "q": "How does your organization get new software?",
            "area": "software",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Our staff members buy software from an online marketplace (app store, retailer, etc.).",
                "pts": 5
              },
              {
                "a": "We share software with another organization.",
                "pts": 10
              },
              {
                "a": "We use other means to get our software.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "Do your staff members download and install software from outside of approved marketplaces at home or at work?",
            "area": "software",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, our staff members download software from outside of approved marketplaces.",
                "pts": 35
              },
              {
                "a": "No, our staff members only download software from approved marketplaces.",
                "pts": 0
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          }
        ]
      },
      {
        "name":"data-encryption",
        "subtitle": "Data Encryption",
        "questions": [
          {
            "q": "Does your organization encrypt cloud backups and/or external storage devices (hard drives, USB drives, etc.)?",
            "area": "encryption",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we encrypt both cloud backups and external storage devices.",
                "pts": 0
              },
              {
                "a": "Yes, we encrypt cloud backups but not external storage devices.",
                "pts": 4
              },
              {
                "a": "Yes, we encrypt external storage devices but not cloud backups.",
                "pts": 4
              },
              {
                "a": "No",
                "pts": 8
              },
              {
                "a": "We don’t know.",
                "pts": 10
              }
            ]
          },
          {
            "q": "Do you have a process for acquiring, maintaining, and disposing of hardware and devices that include security procedures (e.g., erasing devices between uses)?",
            "area": "encryption",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes",
                "pts": 0
              },
              {
                "a": "No",
                "pts": 20
              },
              {
                "a": "We don't know.",
                "pts": 5
              }
            ]
          }
        ]
      },
      {
        "name":"device-compartmentalization",
        "subtitle": "Compartmentalization",
        "questions": [
          {
            "q": "Do your staff members use their personal email for work-related tasks?",
            "area": "compartmentalization",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, all staff members do.",
                "pts": 15
              },
              {
                "a": "Yes, some staff members do.",
                "pts": 10
              },
              {
                "a": "No, our staff members do not.",
                "pts": 0
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          }
        ]
      },
      {
        "name":"passwords-authentication",
        "subtitle": "Passwords & Authentication",
        "questions": [
          {
            "q": "Do your staff members store their passwords in a password manager?",
            "area": "auth",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, everyone does.",
                "pts": 0
              },
              {
                "a": "Yes, some people do.",
                "pts": 5
              },
              {
                "a": "No, no one does.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "[If yes] Do your staff members also use their password managers to generate new passwords?",
            "area": "auth",
            "required": "false",
            "type": "radio",
            "answers": [
              {
                "a": "Yes",
                "pts": 5
              },
              {
                "a": "No",
                "pts": 10
              },
              {
                "a": "We don't know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "To log in to your email and other services, do your staff members use two-factor or multi-factor authentication (e.g. Okta, DUO Security, Google Authenticator, Authy, RSA ID)?",
            "area": "auth",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, everyone does.",
                "pts": 0
              },
              {
                "a": "Yes, some people do.",
                "pts": 5
              },
              {
                "a": "No one at our organization does.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          }
        ]
      },
      {
        "name":"system-updates",
        "subtitle": "System Updates",
        "questions": [
          {
            "q": "How does your organization make sure that critical systems (computers, servers, etc.) receive the latest security updates in a timely manner?",
            "area": "updates",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Our internal IT staff installs updates on a regular and standard schedule.",
                "pts": 0
              },
              {
                "a": "A third-party contractor or provider installs updates on a regular and standard schedule.",
                "pts": 5
              },
              {
                "a": "We do not have a standard procedure for system updates.",
                "pts": 15
              },
              {
                "a": "Installing updates is the responsibility of each individual user.",
                "pts": 10
              },
              {
                "a": "We do not install system updates regularly.",
                "pts": 20
              },
              {
                "a": "We don’t know.",
                "pts": 20
              }
            ]
          }
        ]
      },
      {
        "name":"op-continuity",
        "subtitle": "Operational Continuity",
        "questions": [
          {
            "q": "Does your organization have a contingency plan in case your main method of communication (e.g. email) becomes unreliable?",
            "area": "continuity",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we have a documented contingency plan.",
                "pts": 0
              },
              {
                "a": "Yes, we have a contingency plan, but it’s not documented.",
                "pts": 10
              },
              {
                "a": "No, we do not have a contingency plan.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "How would you continue your organization’s operations in case an emergency prevents access to your physical office or online systems (e.g. a natural disaster)?",
            "area": "continuity",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "We have a documented contingency plan.",
                "pts": 0
              },
              {
                "a": "We have a verbal plan but no document.",
                "pts": 10
              },
              {
                "a": "We do not have a contingency plan for such a situation.",
                "pts": 15
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "How would your organization recover from fire, flood, theft, or other incidents?",
            "area": "continuity",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "We could start over because we have full copies of the data on our devices in a different location from our offices.",
                "pts": 0
              },
              {
                "a": "We could start over because our data is stored in the cloud.",
                "pts": 10
              },
              {
                "a": "We have some printed documents and materials that we might be able to use to recover.",
                "pts": 15
              },
              {
                "a": "This would be catastrophic because we do not have any backups of our data.",
                "pts": 20
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          }
        ]
      },
      {
        "name":"third-party",
        "subtitle": "Third-Party Services",
        "questions": [
          {
            "q": "Are you  tracking the third-party online services (e.g. social media, Github, etc.) that your organization uses?",
            "area": "services",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we track them in a document that is regularly updated",
                "pts": 0
              },
              {
                "a": "Yes, we track them in a document but it is not up to date.",
                "pts": 10
              },
              {
                "a": "Yes, we have a verbal list but we do not have a document.",
                "pts": 15
              },
              {
                "a": "No, we do not track them.",
                "pts": 20
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "Do you have a guidelines document within your organization on how to use third-party online services safely?",
            "area": "services",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we have a guidelines document.",
                "pts": 0
              },
              {
                "a": "No, we have no document but we have a verbal understanding.",
                "pts": 10
              },
              {
                "a": "No, we do not have any guidelines for using these services.",
                "pts": 20
              },
              {
                "a": "We don’t know.",
                "pts": 20
              }
            ]
          },
          {
            "q": "Do you use non-business platforms (e.g. Facebook Messenger, WeTransfer, Instagram) to share or receive sensitive information?",
            "area": "services",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we often share or receive sensitive information via non-business platforms.",
                "pts": 20
              },
              {
                "a": "Yes, we sometimes share or receive sensitive information via non-business platforms.",
                "pts": 10
              },
              {
                "a": "No, we rarely share or receive sensitive information via non-business platforms.",
                "pts": 0
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "When you upgrade or stop using a third-party service, is there a process for turning it off or deleting accounts?",
            "area": "services",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we have a documented process.",
                "pts": 0
              },
              {
                "a": "Yes, we have a verbal process but no document.",
                "pts": 10
              },
              {
                "a": "No, we do not have a process.",
                "pts": 20
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          },
          {
            "q": "Does your organization have a process for assessing third-party vendors?",
            "area": "services",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, we have a documented process.",
                "pts": 0
              },
              {
                "a": "Yes, we have a verbal process but no document.",
                "pts": 10
              },
              {
                "a": "No, we do not have a process.",
                "pts": 20
              },
              {
                "a": "We don’t know.",
                "pts": 15
              }
            ]
          }
        ]
      },
      {
        "name":"vp-network",
        "subtitle": "VPN",
        "questions": [
          {
            "q": "Do your staff members use a VPN (virtual private network) when connecting to the Internet?",
            "area": "vpn",
            "required": "true",
            "type": "radio",
            "answers": [
              {
                "a": "Yes, all staff members do.",
                "pts": 0
              },
              {
                "a": "Yes, most staff members do.",
                "pts": 5
              },
              {
                "a": "Yes, some staff members do.",
                "pts": 10
              },
              {
                "a": "No, our staff members do not.",
                "pts": 20
              },
              {
                "a": "We don’t know.",
                "pts": 20
              }
            ]
          }
        ]
      }
    ]
  }
];

var en_oc = {
  "footer": {
    "links": [
      "Assessment",
      "Legal information",
      "Contact"
    ],
    "text": [
      "Cybersecurity Assessment Tool",
      "by the Ford Foundation's BUILD program",
      "2022 Ford Foundation, all rights reserved."
    ]
  },
  "languages": [
    {
      "name": "English",
      "code": "en",
      "display": "English"
    },
    {
      "name": "Spanish",
      "code": "es",
      "display": "Spanish (Latin America)"
    },
    {
      "name": "Portuguese",
      "code": "pt",
      "display": "Brazilian Portuguese"
    },
    {
      "name": "Mandarin",
      "code": "zh",
      "display": "Simplified Mandarin"
    },
    {
      "name": "Arabic",
      "code": "ar",
      "display": "Egyptian/Lebanese Arabic"
    },
    {
      "name": "Indonesian",
      "code": "id",
      "display": "Bahasa Indonesian"
    }
  ],
  "header": {
    "title": "Cybersecurity Assessment Tool",
    "subtitle": "Ford Foundation",
    "cta":"Use the tool",
  },
  "intro": {
    "title": "What people on the internet have said about us",
    "content": [
      "COVID-19 has fundamentally changed the way we live and work. This includes using technology more than ever before, raising the already important issue of cybersecurity within civil society organizations. However, finding where to begin and understanding the best way to tackle this topic can feel daunting for even the best-resourced organizations. That’s why we have created this tool.",
      "The Ford Foundation’s Cybersecurity Assessment Tool (CAT) is designed to measure the maturity, resiliency, and strength of an organization’s cybersecurity efforts. We have created this questionnaire with busy nontechnical grant makers, grantee partners, civil society organizations, and nonprofits in mind, and we hope it helps shine some light on a recommended path forward for any organization undertaking a cybersecurity journey. The tool is designed to be taken as a survey in one sitting. However, it may require information from several members of your staff, including operations staff or decision makers. We initially created the questionnaire to help BUILD’s grantee partners, and we’re now making a beta version available for public use."
    ]
  },
  "process": {
    "title": "How it works",
    "cta":"Start your assessment",
    "content": [
      "This questionnaire is designed to help you identify strengths and weaknesses in your cybersecurity approach, as well as provide resources for improvement. After you complete the assessment, you’ll receive a personalized response and recommendations.",
      {
        "type": "ol",
        "text": "The assessment will cover four key areas:",
        "items": [
          "Operational Security",
          "Device Security",
          "Account Security",
          "Associated Risks"
        ]
      },
      "This assessment will take approximately 1 to 2 hours of your organization’s time. You may need to ask other staff members or third-party contractors for answers to some of these questions, depending on how your organization is structured.",
      "The Ford Foundation does not store your data when you use this tool. We do receive anonymous results about the questionnaire’s general performance to help us understand our grantees’ needs."
    ]
  },
  "team": {
    "title": "The team behind CAT",
    "content": [
      {
        "ref":"grooten",
        "name": "Martijn Grooten",
        "text": " worked as an academic mathematician before finding himself with a job at a security company almost 14 years ago. He has a broad interest in security and was the editor of Virus Bulletin for almost six years. He is a regular public speaker and writer and currently works as a security consultant with a particular focus on helping vulnerable groups and people. He is a fellow of the Civilsphere Project and a special advisor to the Coalition Against Stalkerware."
      },
      {
        "ref": "hansen",
        "name": "Matt Hansen",
        "text": "’s work has appeared in the Los Angeles Times, The Week, Chicago Tribune, Baltimore Sun, the San Francisco Chronicle, and KQED-FM. He has also written for organizations including the Committee to Protect Journalists, the Robin Hood Foundation, Smart Design, the Museum of the Moving Image, and Spaceship Media. Matt assists with digital and physical safety training for news and nonprofit clients with GJS, a training provider for high-risk environments."
      },
      {
        "ref": "mitchell",
        "name": "Matt Mitchell",
        "text": " is a tech fellow working with the BUILD and Technology and Society teams to develop cybersecurity training, technical assistance, and safety and security measures for the foundation’s grantee partners. Matt is a hacker and expert on counter surveillance and cybersecurity."
      },
      {
        "ref": "nguyen",
        "name": "Trinh Nguyen",
        "text": " is a holistic security and movement building trainer, currently serving as the head of operations for Team CommUNITY at ARTICLE 19. Trinh has over 15 years of training experience, previously working on campaigns for reproductive justice, anti-oppression, Internet freedom, and pro-democracy efforts in Vietnam. As a movement building trainer, she incorporates capacity building and cybersecurity tactics to help diverse grassroots pro-democracy and human rights movements achieve digital resiliency and organizational security."
      },
      {
        "ref": "sandvik",
        "name": "Runa Sandvik",
        "text": " works on digital security for journalists and other high-risk people. Her work builds upon experience from her time at The New York Times, Freedom of the Press Foundation, and The Tor Project. She is a board member of the Norwegian Online News Association and tweets as @runasand."
      },
      {
        "ref": "tich",
        "name": "Laura Tich",
        "text": " is an information security analyst and cybersecurity trainer with expertise in network security and open source intelligence. She is an advocate for Internet freedom and has worked on various projects around digital security for journalists and civil society organizations across Africa. She is a founder of SheHacks_KE, a community of women cybersecurity professionals and enthusiasts in Kenya. The community empowers women in cybersecurity by facilitating free training workshops and providing mentorship."
      }
    ]
  },
  "users": {
    "title": "Who did we build this tool for?",
    "content": [
        {
          "type": "ul",
          "text": "We designed CAT to help a specific set of civil society organizations and funders around the world. These include:",
          "items": [
            "Grantees of the Ford Foundation BUILD program",
            "Non-governmental organizations (NGOs) or civil society organizations (CSOs) that are funded by other grantmakers or foundations",
            "Civil society organizations using other assessment tools that would like additional information about their cybersecurity preparedness",
            "Civil society organizations that have recently suffered a cybersecurity incident and need to determine their next steps",
            "Grantmakers or other funders seeking to assess their grantees' cybersecurity risk level",
            "Technical assistance providers who would like to measure their clients' cybersecurity awareness"
          ]
        },
      "Don't see your type of organization listed above? This doesn't mean that CAT won't work for you. However, you may need to adjust some of your recommendations for your particular context."
    ]
  },
  "survey": {
    "title": "Let's Get Started",
    "content": [
      "Welcome to the CAT (Cybersecurity Assessment Tool). This is version v2.0, developed for the use of Ford’s BUILD grantees. Once you have completed it, the assessment tool will display a series of recommendations. Print or save that information for your organization's use. If you find any errors, bugs, or issues, please contact ",
    ],
    "ux": {
      "mobile": {
        "buttons": [
          "Share",
          "Continue anyway"
        ],
        "content": "It looks like you are on a mobile device. This assessment typically takes 1-2 hours and we do not recommend doing it on a small screen. Do you want to share a link to this page to move your work or continue on this device anyway?"
      },
      "survey": {
          "next": "Next",
          "prev": "Previous",
          "submit": "Submit",
          "progress": "You are [val]% complete",
          "incomplete":"You need to complete all questions to submit."
      },
      "save": {
        "title": "Save and resume later",
        "copy": {
          "content": [
            "Please copy the link below and save it in a safe place. You can use this link any time within the next 30 days to resume answering questions on the form.",
            "Without the link, the data you have entered cannot be retrieved, and you will have to start filling out the form at the beginning."
          ],
          "cta": "Copy link"
        },
        "email": {
          "content": [
            "Want us to email you this link? Enter your email below."
          ],
          "placeholder": "Enter your email here",
          "cta": "Email link"
        }
      }
    }
  },
  "legal": {
    "title": "Legal disclaimer",
    "content": [
      "This tool is provided for free to nonprofit organizations for informational purposes only. It is meant to be used as a starting point for organizations with limited resources to assist them in beginning to develop a cybersecurity program. Use of this tool does not guarantee compliance with federal, state or local laws. Please note that the information presented may not be applicable or appropriate for all of your nonprofit organization’s cybersecurity needs. This tool is not intended to be an exhaustive or definitive source on safeguarding your organization's information from privacy and security risks. For more information about cybersecurity assessments, visit SANS Incident Response framework, NIST Cybersecurity, and ISO 27000 series with attention to ISO 27005 risk management.",
      "NOTE: The cybersecurity standards provided reflect current best practices in information technology as of the release date of this tool, which means we cannot guarantee it is accurate, up to date, or appropriate for your organization. This tool is not intended to serve as legal advice or as recommendations based on an organization's specific circumstances. We encourage organizations to seek expert advice when evaluating the use of this tool.",
      {
        "type": "ul",
        "text": "This tool is meant to help nonprofit organizations:",
        "items": [
          "develop a general sense of the maturity of an organization's cybersecurity program, and",
          "identify potential cybersecurity program components to consider adding or improving."
        ]
      },
      {
        "type": "ul",
        "text": "The tool does not provide organizations with:",
        "items": [
          "a roadmap for securing the organization against cyberattacks or other misuse of their data or systems,",
          "a basis for determining compliance with any legal obligations, or",
          "a definitive list of the cybersecurity program components an organization should develop."
        ]
      },
      "By using this tool, you confirm that you have the right to provide all information entered into this tool without violating the privacy, confidentiality or other obligations of your organization in the relevant jurisdictions. The information that you entered into this tool is stored with a third-party service provider. The Ford Foundation does not receive the information entered into this tool; however, it may receive anonymized results about the tool’s general performance to help the Foundation: (1) deliver the tool’s service; (2) ensure that the tool is working as intended and to make improvements to the tool and the content; and (3) in the furtherance of Foundation's mission to support the nonprofit sector."
    ]
  }
};
