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
                "errorText": "Too many answers selected. Please choose only three.",
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
                "errorText": "Too many answers selected. Please choose only three.",
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
      "2023 Ford Foundation, all rights reserved."
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
          "progress": ["You are ", " complete."],
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
  },
    "results": {
        "intro": "This assessment was completed on [[date]]. Here is how you scored in each section:",
        "feedback": {
            "title": "Help Us Make The Cybersecurity Assessment Tool Better!",
            "btn": "Give feedback",
            "cta": "Get your results"
        },
        "save": [
            {
                "btn":"Generate link",
                "link": ""
            },
            {
                "btn": "Email",
                "link": ""
            },
            {
                "btn": "Print",
                "link": ""
            }
        ]
    }
};

// this is old recommendations text - replace when updated text available
var en_rs = { // contains all evaluation content
  "title": "Results and Recommendations",
  "reusables": {
    "below": {
      "title": "Below",
      "content": "Your organization has scored as [[level]] level of security in the [[section]] category. This puts it below our recommended security level for civil society organizations. Don’t worry! We’ve put together some recommendations to improve your organization’s cybersecurity.",
      "threshold": 15
    },
    "ok": {
      "title": "Reasonable",
      "content": "Your organization has scored as [[level]] level of security in the [[section]] category. This means it has a reasonable level of security in this area. Good job! There are still areas for improvement, so we’ve put together some recommendations to improve your organization's cybersecurity even more.",
      "threshold": 16
    },
    "exceeds": {
      "title": "Exceeds",
      "content": "Your organization has scored as [[level]] level of security in the [[section]] category. This means it has a high level of security in this area. Good work! There are still areas for improvement, so we’ve put together some recommendations to improve your organization’s cybersecurity even more.",
      "threshold": 30
    },
    "general": {
      "what": "What We Recommend",
      "why": "Why We Recommend This", // title for each content.general.why below
      "eg": "A Real World Example" // title for each content.general.eg below
    }
  },
  "content": {
      "your-org":{
          "section": "Understanding Risk",
          "title": "About Your Organization",
          "general": {
              "why": [
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor. Elementum tempus egestas sed sed risus pretium. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum. Et ligula ullamcorper malesuada proin libero. Non arcu risus quis varius quam quisque id. Elementum sagittis vitae et leo. Adipiscing tristique risus nec feugiat in fermentum. Id interdum velit laoreet id donec ultrices. Viverra suspendisse potenti nullam ac tortor vitae purus. Eget mi proin sed libero enim sed faucibus turpis in. A diam maecenas sed enim ut. Vel fringilla est ullamcorper eget nulla facilisi etiam. At risus viverra adipiscing at in tellus integer feugiat scelerisque. Vestibulum sed arcu non odio euismod. Semper feugiat nibh sed pulvinar proin. A erat nam at lectus urna duis convallis. Venenatis urna cursus eget nunc. Nibh ipsum consequat nisl vel pretium lectus quam id. Gravida neque convallis a cras semper auctor neque.",
              ],
              "eg": [
                  "Lacinia quis vel eros donec ac. Tortor pretium viverra suspendisse potenti nullam. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Velit dignissim sodales ut eu sem integer. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Nibh nisl condimentum id venenatis. Convallis posuere morbi leo urna molestie at. Dolor magna eget est lorem ipsum dolor sit amet consectetur. Nunc eget lorem dolor sed viverra ipsum nunc aliquet. Nunc id cursus metus aliquam. Quis blandit turpis cursus in hac. Vitae sapien pellentesque habitant morbi tristique senectus et. Id ornare arcu odio ut sem. Euismod in pellentesque massa placerat. Mi eget mauris pharetra et ultrices. Habitant morbi tristique senectus et. Malesuada fames ac turpis egestas integer eget aliquet.",
              ]
          },
          "results": {
              "below": [
                  {
                      "title": "Determine your threat model.",
                      "content": [
                          "Tellus molestie nunc non blandit massa. Sagittis nisl rhoncus mattis rhoncus urna neque. Dignissim suspendisse in est ante in nibh mauris. Amet venenatis urna cursus eget nunc. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Vestibulum lorem sed risus ultricies tristique. Mattis rhoncus urna neque viverra justo nec. Lacus laoreet non curabitur gravida arcu ac tortor dignissim. Eget egestas purus viverra accumsan in. Arcu vitae elementum curabitur vitae.",
                      ]
                  },
                  {
                      "title": "Create a risk matrix.",
                      "content": [
                          "Eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar. Sed elementum tempus egestas sed sed risus pretium quam. Consequat mauris nunc congue nisi vitae suscipit. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Sed risus ultricies tristique nulla aliquet enim tortor. Scelerisque fermentum dui faucibus in ornare. Condimentum vitae sapien pellentesque habitant morbi tristique senectus et netus. Leo vel fringilla est ullamcorper. Justo donec enim diam vulputate ut. Tortor at risus viverra adipiscing.",
                      ]
                  }
              ],
              "ok": [
                  {
                      "title": "Develop an incident response plan.",
                      "content": [
                          "Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Duis tristique sollicitudin nibh sit amet commodo nulla. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Ut enim blandit volutpat maecenas. Elit ullamcorper dignissim cras tincidunt lobortis. Eget nullam non nisi est sit amet facilisis magna etiam. Accumsan sit amet nulla facilisi morbi. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Lacus sed viverra tellus in hac habitasse platea. Aliquam eleifend mi in nulla. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Tempor id eu nisl nunc mi ipsum faucibus vitae. Iaculis eu non diam phasellus vestibulum lorem. Faucibus in ornare quam viverra orci sagittis eu volutpat. Luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor.",
                      ]
                  }
              ],
              "exceeds": [
                  {
                      "title": "Run a tabletop exercise.",
                      "content": [
                          "Aliquam vestibulum morbi blandit cursus. Id volutpat lacus laoreet non curabitur gravida. Id porta nibh venenatis cras sed felis eget velit. Vulputate odio ut enim blandit volutpat maecenas. Nam at lectus urna duis. Etiam erat velit scelerisque in dictum non consectetur a. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Varius quam quisque id diam vel. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque. Quis commodo odio aenean sed. Pellentesque diam volutpat commodo sed egestas egestas fringilla. Semper auctor neque vitae tempus quam pellentesque nec nam. Eleifend donec pretium vulputate sapien nec. Ante metus dictum at tempor commodo ullamcorper a lacus vestibulum. Lacinia at quis risus sed vulputate odio ut enim blandit. Sed vulputate odio ut enim. Urna molestie at elementum eu. Nam libero justo laoreet sit amet.",
                      ]                      
                  }
              ]
          }
      },
      "external-threats":{
          "section": "Understanding Risk",
          "title": "External Threats",
          "general": {
              "why": [ // text for reusables.general.why above
                  "Understanding your risk is critical to keeping your organization safe. All good safety and security planning begins with a thorough understanding of the possible threats we face. Investing time and effort into better understanding your threat model will make reducing your risk much easier in the future. Remember also that threats evolve, so you may need to update your threat model as your organization and the landscape around you change.",
                  "Once you have developed policies, plans, and documentation, consider a tabletop exercise. Just remember to encourage an open, nonjudgmental space; learning about security vulnerabilities doesn’t require individual finger-pointing or blame.",
                  "When—not if—a real incident occurs, it can be scary, stressful, and chaotic. Following these best practices increases the likelihood of best possible outcomes. And don’t forget that you will need to assign at least one member of your staff  to oversee the cybersecurity effort within your organization."
              ],
              "eg": [
                  "ADE Worldwide is a civil society organization that helps train farmers and agricultural workers around the world to use water sustainably while advocating for better global environmental policy. The group’s advocacy for water rights has upset powerful landowners in several nations.",
                  "ADE sees itself as a nonpartisan, nonpolitical agricultural advisor. After its website is hacked and defaced, however, ADE realizes it needs to conduct a threat model analysis to better understand the risks the group faces around the world.",
                  "This process helps it realize that the likelihood of these digital attacks is high for groups working on similar issues. While ADE staff members don’t see their mission as controversial, they realize their own organization’s risk profile is high due to the effectiveness and publicity of their work. As a result, they develop an incident response plan and checklist for physical or cybersecurity incidents.",
                  "The ADE staff decides to proactively lead a series of tabletop exercises talking through how they would respond in the event of a security incident. As a result, when the field staff receive some verbal threats from regional landowners, they are prepared with a plan to manage any potential risk."
              ]
          },
          "results": {
              "below": [
                  {
                      "title": "Determine your threat model.",
                      "content": [
                          "When thinking about the risks that face your organization in the digital world, it’s helpful to think about all the risks that your staff  faces outside of cybersecurity, including physical, legal, and organizational challenges. After all, many digital threats begin in the “offline” world, such as risks posed by governments, law enforcement, criminal groups, and lawsuits.",
                          "Documenting and analyzing your risk is a process known in cybersecurity as “threat modeling.”, which allows you to focus on the threats that are most feasible and realistic. If you’re just getting started with cybersecurity for your organization—or refreshing your approach after an attack—start with your threat model. This process will not only identify cybersecurity risks but also help you find vulnerabilities across your organization. The Electronic Frontier Foundation provides a step-by-step guide on threat modeling [[here]](links.eff.tmodel). Access Now Helpdesk offers an easy guide to threat models with examples [[here]](links.an.tmodel)."
                      ]
                  },
                  {
                      "title": "Create a risk matrix.",
                      "content": [
                          "Every organization’s risks are unique, and the context in which you work will help you better map out which risks are both most likely and most dangerous for your staff . It’s helpful to think about risks to your organization’s security based on the likelihood and the impact of particular threats. Just because an event is likely doesn’t mean it deserves your full attention. There may be less frequent threats that could have significantly more of an impact on your organization. For example, some threats—such as physical damage to your phone—may be highly likely but not very effective or dangerous. Other threats, such as a corporate-sponsored cyberattack, may be much less likely but very dangerous.",
                          "You can map these risks using a tool called a “risk matrix,” which represents your different threats on a chart with likelihood on one axis and impact on the other.",
                          "Here's an example.",
                          {
                              "type": "table",
                              "rows": [
                                ["", "Low Likelihood", "High Likelihood"],
                                ["Low Consequence", "Printer is stolen from your office", "Physical damage to your phone"],
                                ["High Consequence", "Corporate-sponsored cyberattack", "Phishing attack on your email account"]
                              ]
                            },
                          "This is very helpful for members of your organization to quickly see which risks are both most likely and most dangerous. The Electronic Frontier Foundation has a good model for a risk matrix in its threat modeling guide, which you can access [[here]](links.eff.matrix). Tactical Tech’s Holistic Security offers [[additional reading]](links.ttech.matrices) on these matrices."
                      ]
                  }
              ],
              "ok": [
                  {
                      "title": "Develop an incident response plan.",
                      "content": [
                          "Working with your staff, develop a basic incident response plan. To do this, ask yourself what steps you would take if a particular threat occurred. Cybersecurity professionals often use risk frameworks, such as SANS Incident Response, [[NIST Cybersecurity]](links.nist.framework), ISO 27001, and the [[MITRE ATT&CK Matrix]](links.mitre.matrix), to identify common threats and determine the best way to respond. These advanced frameworks may not be relevant to your organization's needs at this point, but the basic framework below can help you begin to plan those steps.",
                          {
                              "type": "table",
                              "rows": [
                                ["If an attacker...", "How would you respond..."],
                                ["...sent a malicious link that was clicked on", ""],
                                ["...hacked our social media", ""],
                                ["...hacked our email account", ""],
                                ["...hacked our laptops/phones", ""],
                                ["...hacked or defaced our website", ""],
                                ["...tricked our organization by impersonating donors/funders", ""],
                                ["...found/discovered our data", ""],
                                ["...harassed a member of our staff online.", ""],
                                ["...disrupted our internal communications", ""],
                                ["...may have stolen our laptops or devices", ""]
                              ]
                          },
                          "Don’t worry if you don’t have all the answers. Fill in as much information as you can. This step will be very useful when working with a security provider who can help develop solutions to these threats.",
                          "We have also developed [[an incident response plan questionnaire]](links.cat.irplan) to help guide your team in putting together an incident-specific plan."
                      ]
                  },
                  {
                      "title": "Understand how incident response phases work together.", 
                      "content": [ 
                        "In cybersecurity, you can think of four stages to respond to an incident: prepare, detect, contain/eradicate/recover, and then process/learn.", 
                        [ 
                            {
                              "type": "title",
                              "heading": "Prepare:",
                                "content": "The quote “Chance favors the prepared mind” is credited to Louis Pasteur. With that in mind, there are steps your staff can take before an incident to improve your organization’s resiliency. One of them is to ask yourself the following questions:"
                            },
                            {
                              "type": "ul",
                              "items": [
                                "How many devices do we have?",
                                "Which are the most important?",
                                "How do we keep those devices updated and safe?",
                                "Do we have internal policies and a crisis communications plan from our departments that are easy to follow in a digital crisis?",
                                "Can we come up with a master checklist to follow during a crisis? During an incident, panic often clouds our best thinking and a checklist will help."]
                            },
                            {
                              "type": "title",
                              "heading": "Detect:",
                                "content": "This phase occurs when your organization identifies what is happening and plans a path forward. To do this, consider the following steps:"
                            },
                            {
                              "type": "ul",
                              "items": [
                                "As best you can, identify an incident while it’s occurring or shortly after it has occurred",
                                "Collect everything you can about the incident as soon as possible. Log dates and times, capture screenshots, record suspicious websites and links, stop using the device, and disconnect the device from the Internet (but don’t turn it off).",
                                "Make sure to notify your internal teams about the incident, but don’t forget that cybersecurity attacks can affect other organizations, too. If outside groups are affected, you should inform them as soon as possible."
                              ]
                            },
                            {
                              "type": "title",
                              "heading": "Contain/Eradicate/Recover:",
                                "content": "This stage is actually made up of three steps."
                            },
                            {
                              "type": "ul",
                              "items": [
                                "In the first “containment” step, your staff can identify the cause and scope of the incident and take steps to stop or block immediate harm.",
                                "In the second “eradicate” step, your staff can fully stop the incident and remove any discovered threats from your system.",
                                "In the third “recovery” step, your staff can bring operations back online to their pre-incident state and address any remaining damage."
                              ]
                            },
                            {
                              "type": "title",
                              "heading": "Process/Learn:",
                                "content": "This phase isn’t about blaming others, but rather reviewing how each phase unfolded and evaluating how your organization can improve the process and your future response."
                            },
                        ]
                      ]
                  },
                  {
                      "title": "Find a security provider that you can afford.",
                      "content": [ 
                            "Now that you have an understanding of the risks and threats facing your organization, you can begin to think about how to respond to those threats. This is when many people feel uncertain, especially if they don’t have a background in technology or security. Luckily, there are security providers who can help. When vetting a security provider, we recommend asking a series of questions to determine whether they are a good fit for your organization. We feel the most important ones are:",
                            {
                              "type": "ul",
                              "items": [
                                "Why do you do this work?",
                                "Are you familiar with our region, culture, or language?",
                                "Do you work with CSOs/NGOs? If so, what is the difference between your approach to this work and the work of your other clients?",
                                "Have you worked with a group of my size before? Can you tell me more about this work?",
                                "Have you worked on incidents or issues that are similar to ours in the past? Please provide a case study.",
                                "How many clients are you currently working with? What percentage of your time will go to me?",
                                "What is your understanding of the risks we face?"
                              ]
                            },
                            "A security provider can’t fix all your organization’s challenges on their own. Understand that you will need a designated person on your staff  who will manage this work and act as a liaison between your organization and the security provider."
                        ]
                  },
              ],
              "exceeds": [
                  {
                      "title": "Run a tabletop exercise.",
                      "content": [
                          "It’s important to test your thinking about security by putting your organization through a simulated test. In the cybersecurity world, we call one of these tests a “tabletop exercise,” although your staff  doesn’t need to be physically gathered around a table to complete one. During an exercise, you can discuss how your organization would handle a hypothetical threat, step by step, and what areas still need to be improved. One idea is to write out scenarios of different incidents on index cards, drop them all in a box, and then schedule a few hours on your organization’s calendar to pull a few cards out to start the exercise.",
                          "When you’re ready for your first tabletop exercise, here are key steps to get started. Some cybersecurity providers incorporate the [[MITRE Corp.’s guidelines on tabletop exercises]](links.mitre.tabletop).",
                          {
                              "type": "ul",
                              "items": [
                                "Determine what you would like to test (usually by choosing one of your top identified threats).",
                                "Designate a group leader to run the exercise.",
                                "Create a plausible storyline that includes the threat you want to test your response to.",
                                "Gather the staff that would be responsible for managing this threat.",
                                "Walk the staff  through the scenario and ask for their responses, step by step.",
                                "Document gaps, concerns, and weak points in the threat response."
                              ]
                          },
                          "You can use the knowledge gained from a tabletop exercise to identify areas of concern and begin to develop strategies to reduce those risks."
                      ]                      
                  }
              ]
          }
      },
    "policy-docs": {
        "section": "Operational Security",
      "title": "Documentation and Policy",
      "general": {
          "why": [
            "Before you can upgrade your security, you need to have the fundamentals in place. Putting together a security policy and road map for your organization can help you be proactive about your security while also preparing for worst-case scenarios.",
            "Even the most well-intentioned organizations sometimes struggle to put security policies into practice on an everyday basis. That’s why it’s important to adopt a nonjudgmental, empathetic approach to helping staff become compliant. Reward the successes and manage the failures, and remember that changing behavior takes time.",
            "Once you have a policy in place within your organization, you might be hesitant to make any changes and upset the status quo. Remember, though, that policies and road maps must adapt to changing threats to be effective. Designating certain staff members to keep these documents updated can help reduce unexpected risks in the future."
          ], // explanation of what this means
          "eg": [
            "ADE Worldwide is growing quickly. What started as an organization with headquarters in Washington, DC, and a single field office in Latin America has quickly expanded to other locations around the world. Now that the organization is growing, more ADE staff members are reporting possible security challenges. Luckily, no security challenge has escalated into an incident, but management is growing concerned with the organization’s existing security policy.",
            "To help close this gap, the executive management team conducts a policy review session. They find that their current security policy has notable gaps but accurately reflects how the majority of staff handles cybersecurity. They realize they need to do more to make security a key part of the organization’s workflow. In response, they patch the gaps by moving security goals from their road map to their policy, making these steps a reality.",
            "Then, they take steps to ensure that more of the staff complies with the newly revised policy. These include starting every staff meeting with a recognition of staff members who have demonstrated good security practices, while asking those falling behind to take part in a tabletop exercise that will demonstrate firsthand the risks of ignoring the new policy.",
            "When they add a new field office in Thailand, they realize their policies need to be updated to reflect this new region. The CEO of ADE creates a working group to make changes to the policy, monitor threats across the offices and update policies at least once a year."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below": // assessed level, based on score
          [ // contains recommendations for this level
            {
              "title": "Document your security policy and your future road map.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "As an established civil society organization, you probably have strategic documents, policies, and plans to help you reach your key goals. Now that you’re focusing on strengthening your cybersecurity, it’s time to develop a security policy and road map, too.",
                "A security policy explains your day-to-day cybersecurity operations currently. A security road map, on the other hand, is a more aspirational document that states your medium- and long-term goals for your cybersecurity policy.",
                "Luckily, this doesn’t have to be too daunting. While some organizations may have a series of complex security policies and plans, you can get started with something much simpler. The key steps to a successfully documenting a security policy are:",
                {
                  "type": "ul",
                  "items": [
                    "Document whatever steps more than 80 percent of your staff currently take to face cybersecurity threats.",
                    "Conduct an honest assessment of your current approach toward cybersecurity threats.",
                  ]
                },
                "The more honest your policy, the more your organization can improve. If you are fully honest, you should be able to find room for improvement within your organization. For example, you may find that only some of your staff members use a cybersecurity tool you’ve purchased. Once you’ve taken a look at your policy and identified gaps, you can start to put together a security road map.",
                "The key steps to developing a security road map are:",
                {
                  "type": "ul",
                  "items": [
                    "Understand and define your key threats and risks (see Risk Analysis and Threat Assessment).",
                    "Compare your existing policy against the key threats to identify what is missing in your security approach",
                    "Document what you would like to implement in the future to improve your security approach.",
                  ]
                },
                "When you’re ready to create your first security policy, you can use the highly useful [[SOAP tool]](links.soap.tool) or the [[SANS templates]](links.sans.templates) to generate a policy through a series of step-by-step questions.",
                "Remember that your security policy is a living document—try to update it with new guidelines based on changing threats at least once per year."
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "Gently enforce the rules.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "You’ve invested time and resources into creating a security policy and road map for your organization. But despite your best efforts, you notice that some staff members aren’t always following the rules. This is common, especially in organizations where security isn’t a key component of staff  culture.",
                "Don’t worry; integrating “security thinking” into an organization is possible, if time-consuming. One of the most effective ways to get the staff  thinking about security is to gradually introduce security concepts into your everyday workflow until they become part of your staff’s routine.",
                "Here is one strategy to help your staff incorporate your security policies into their operations.",
                {
                  "type": "ol",
                  "items": [
                    "Determine an effective way to measure staff compliance in the areas that you want to improve.",
                    "Gather your executive team and ask them to identify the weakest links in your organization (individuals who aren’t complying with much of your security policy) as well as possible challenges or roadblocks.",
                    "Deputize those weakest links for simple tasks, such as ensuring that their colleagues are following a basic requirement of your security policy.",
                    "Reward positive behavior change, especially among staff members who previously were not compliant, with praise and other motivators. Be empathetic.",
                    "Don’t punish slow or lax compliance. Technology can be intimidating to many people and may have a steep learning curve. After a certain publicly announced date or time, cut off services (such as emails, logins, etc.) for users who don’t comply. Other services, such as two-factor authentication, can simply be made mandatory. Be prepared to provide additional support when this happens.",
                    "Run a tabletop exercise with your staff so they can better understand the risks of not following policy.",
                    "Share news and updates on other organizations that have been targets of cybersecurity attacks as teachable moments for your staff. This may require you to emphasize how similar threats could face your organization.",
                    "Begin again with the measurement phase."
                  ]
                },
                "If results are slow, don’t worry. Organizational change can sometimes take a year or more to fully take place. Keep working at this process steadily over time.",
                "You could also consider giving different levels of access based on their security compliance, for example by giving access to sensitive data to those who have enabled two-factor authentication."
              ]
            },
          ],
        "exceeds": // assessed level, based on score
          [ // contains recommendations for this level
            {
              "title": "Keep your policy and road map updated.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your organization has strong security policies and procedures, and your staff members understand the importance of security in their everyday work. It’s important to remember, though, that even the strongest security policy and road map will become outdated and obsolete as technology and threats evolve.",
                "To help, we recommend you think of your security policy and road map as ‘living” documents that need to be updated regularly to meet new risks and threats. Keeping these documents updated doesn’t require an extensive commitment, but it does require regular check-ins.",
                "Here is one strategy to keep policies and road maps up to date by creating a governance structure for cybersecurity within your organization.",
                {
                  "type": "ol",
                  "items": [
                    "Create a working group to investigate new threats, risks, and tools as they appear. This group may want to meet as frequently as monthly or quarterly or as infrequently as once or twice a year.",
                    "Develop criteria for including new software and systems into your workflow. Before adding a new piece of software or online tool, the working group should consider whether that decision fits with your existing security policy or road map.",
                    "Designate a staff member to be responsible for updating the policy based on feedback from your working group.",
                  ]
                },
                "Remember that outside forces should cause your security policy to change, just as your organizational goals and approaches change, to meet new challenges."
              ]
            },
          ]
      }
    },
    "internal-risks": {
          "section": "Operational Security",
      "title": "Internal Risks (Intentional or Unintentional)",
      "general": {
          "why": [
            "Knowledge is power. By equipping your staff members with a checklist that allows them to identify cybersecurity risks, you’re empowering them to take action and increase their awareness. This step also provides you with a useful record of your staff’s overall level of cybersecurity.",
            "Once you’ve implemented a “do it yourself” checklist, remember that even the most dedicated staff member can make a mistake. Having a technical solution that allows your organization to access work devices can create a safety net for unpredictable moments or staff accidents, but you must balance this against your staff’s right to privacy."
          ], // explanation of what this means
          "eg": [
            "Whenever a new person started at ADE Worldwide, managers sent them lots of information in an employee handbook. Included in it were guidelines on how to maintain their work devices for maximum cybersecurity.",
            "Upon closer inspection, managers found about half of the staff followed the guidelines. Busy schedules, impending deadlines, and the pressures of the work were keeping staff from taking the necessary steps to keep their devices safe.",
            "Rather than impose penalties on their staff, ADE managers asked all staff members to conduct a check-up on their devices and discuss their results with their supervisors. This allows staff  members to tighten their security without feeling judged or censured by leadership.",
            "Not long after adopting the checklist, ADE was able to partner with Papua Water Rights, a two-person advocacy group in Papua New Guinea. This was a major breakthrough for ADE as it has never been able to have a presence in Oceania before. While extremely effective, Papua Water Rights has fewer resources than ADE and must balance security needs with limited time and capacity. To help, they put together a detailed and mandatory checklist focused on keeping their devices safe. This is particularly important because they can’t afford to replace devices that may be compromised."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below": // assessed level, based on score
          [ // contains recommendations for this level
            {
              "title": "Do a check-up on your organization’s cybersecurity.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff members are vital to the mission of your organization. But sometimes, intentionally or unintentionally, their decisions and actions can put your organization at risk. This is especially true in today’s digital world, where a wrong click or a missed security setting can leave the entire staff vulnerable.",
                "One of the easiest ways of checking up on your cybersecurity is to assemble a basic checklist of security settings that your staff members can follow; such a checklist should be part of the onboarding process of any new staff member. Here are suggestions for Windows devices, and here are suggestions for Mac devices. Once they have completed the checklist, they can sign a certificate of completion that indicates they have taken basic steps toward compliance. Their supervisor can then also sign off that they have completed the checklist. These documents can then be stored in their employee file.",
              ]
            },
          ],
        "ok": // assessed level, based on score
          [ // contains recommendations for this level
            {
              "title": "Add clear language to employment agreements.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff members are proactive about monitoring their cybersecurity and understand the importance of complying with your organization’s security policy. They may periodically meet with supervisors to discuss their cybersecurity and complete required security checklists.",
                "You can start to incorporate cybersecurity into their job description. This helps emphasize that security is not just a part of their workflow but also a core responsibility for them as a member of your organization.One effective way to do this is to ensure that employment agreements have language about privacy and security that is clear, truthful, and easy to understand. We recommend including language about:",
                [
                    {
                      "type": "title",
                      "heading": "Data:",
                        "content": "What responsibilities do staff members have with your organization’s data, and vice versa? Which categories of data can particular staff members access and which can they not access?"
                    },
                    {
                      "type": "title",
                      "heading": "Terms of use:",
                        "content": "What legal arrangements govern your staff members’ use of technology, particularly any software, hardware, or systems that your organization owns?"
                    },
                    {
                      "type": "title",
                      "heading": "Acceptable use policy:",
                        "content": "When staff members access your organization’s internal systems, what policies and guidelines must they follow?"
                    },
                    {
                      "type": "title",
                      "heading": "Onboarding policy:",
                        "content": "How are staff members expected to learn about and use your organization’s technology when they join the organization?"
                    },
                    {
                      "type": "title",
                      "heading": "Offboarding policy:",
                        "content": "What steps need to take place when a staff member leaves your organization?"
                    },
                  ],
                "You may want to enlist a lawyer to help you draft this language. There may also be other sections that apply directly to your situation. Just remember: the goal here is to be clear and informative, not to overwhelm your staff with legalese. Try to keep employment agreements to one page if possible, including a checklist, and make sure they are signed by the staff members and supervisors."
              ]
            },
          ],
        "exceeds": // assessed level, based on score
          [ // contains recommendations for this level
            {
              "title": "Consider device management systems.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff regularly checks in with management about cybersecurity risks and has read and reviewed the cybersecurity requirements in their employment agreements.",
                "Even the most informed and engaged staff members can still make mistakes, however.That’s why we recommend finding a method for managing devices that is consistent with your organization’s values and goals. For example, software known as “device management” platforms can allow organizations to manage work devices remotely. While the convenience and increased security of device management tools is an advantage, remember that you must always balance security with a level of privacy for your staff.",
                "Device management software includes tools such as G Suite’s Google Devices, Apple’s Mobile Device Management, and [[Prey]](links.prey.web), which allow tracking and remote data erasure on devices, and solutions from companies including IBM, Citrix, and VMWare.",
                "A technical provider can also help you use these tools to force organization-owned devices to “comply” with security policies or restrict the ability for your staff to install their own software or change settings."
              ]
            },
          ]
      }
    },
    "training-support": {
          "section": "Operational Security",
      "title": "Staff Training and Support",
      "general": {
          "why": [
            "Your staff may find cybersecurity intimidating or technology daunting. Alternatively, some staff members may be advanced technology users while others may be embarrassed to admit their shortcomings. Not making assumptions on the cybersecurity knowledge of your staff allows your entire staff to establish a baseline level of security knowledge before moving on to more advanced topics.",
            "Remember that whether we are learning a new language or technical skill, we learn best with repetition, practice, and time. Incorporating these strategies into our cybersecurity training can help break complex topics down into digestible details.",
            "While in-person training can help establish a baseline level of knowledge, your staff also needs access to information and lessons on their own schedule. Setting up a learning management system or other tool can bridge this gap while also documenting key security lessons that your organization has incorporated into your workflow."
          ], // explanation of what this means
          "eg": [
            "Staff members at ADE Worldwide pride themselves on a “can-do” approach. If they don’t know the answer to a problem, they will seek out the resources necessary to solve it on their own.",
            "As a result, they  hesitate to admit when they lack sufficient knowledge to fix a problem, including improving their security footprint. ADE managers realize the only way to ensure that everyone moves forward with needed security updates is to require all staff to meet the same level of cybersecurity training, giving them permission to ask for help as needed without embarrassment.",
            "Once the initial training is over, there’s little time to invest on refreshers. That’s why ADE managers then start “Learning Lunches” every two weeks, when each office holds a refresher training over the lunch hour on Wednesdays. This provides staff with an interactive opportunity to practice their skills in an open, conversational setting with little pressure, but also reminds them of the importance of keeping their skills sharp.",
            "Even with these initiatives, though, managers notice that staff are still struggling to implement some of the lessons. Since ADE has a global staff working across different time zones, it isn’t feasible to have a single point of contact to answer questions and troubleshoot. To help, ADE’s management institute a learning management system with all the content from earlier training sessions so staff can look up resources and lessons at any time of day on any device."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below":
          [ // contains recommendations for this level
            {
              "title": "Set expectations for security knowledge.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff members are passionate, driven, motivated, and hard-working. They may be experts in fields such as human rights law and voting advocacy. Most likely, however, they are not cybersecurity experts. And while it’s easy to assume that most people have a basic level of experience with technology, that’s not always the case.",
                "Instead of assuming that your staff understands the basics of cybersecurity, assume that you are starting with a blank slate. From here, you can take a series of effective steps:",
                [
                    {
                      "type": "title",
                      "heading": "Familiarize yourself with cybersecurity basics.",
                        "content": "Excellent resources to get started include the Electronic Frontier Foundation’s [[Surveillance Self-Defense curriculum]](links.eff.ssd) and the [[Data Detox Kit]](links.ttech.detox) from Tactical Tech."
                    },
                    {
                      "type": "title",
                      "heading": "Begin training.",
                        "content": "Work with a cybersecurity provider, as needed, to conduct introductory “digital best practices” training for your staff."
                    },
                    {
                      "type": "title",
                      "heading": "Share your organization’s security history with staff.",
                        "content": "In fast-paced organizations, it’s easy for generational knowledge about security incidents to disappear, leaving newer staff unaware of risk. Document this history as much as possible so your staff members are fully informed."
                    }
                ],
                "Starting with introductory knowledge can ensure that all staff members are on an equal footing."
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "Introduce training in small bites.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff members are busy professionals. It’s important to remember that they will forget most of the content that they hear, read, or watch during training.",
                "That’s why repetition of key points in “small bites” is one of the most effective learning strategies for hard-working staffs. Begin by identifying the most critical behaviors, actions, and tools you need your staff to understand and implement.",
                "Then gradually introduce training sessions into your organization’s workflow. Perhaps an hour once a month is dedicated to reviewing cybersecurity basics, or maybe a weekly lunch break is converted into a practice session. Day-long training will disrupt workflow and lead to tired, overwhelmed staff members. Use smaller, bite-sized training sessions instead to keep material fresh and approachable."
              ]
            },
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title": "Create a knowledge base.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "While live instruction, either in-person or online, is helpful for teaching big concepts, your organization can’t rely on training alone to enhance cybersecurity. Instead, you must create an institutionalized version of this knowledge that can be accessed by any staff member at any time.",
                "A good interim solution can be a basic online quiz accompanied by a 2- to 3-minute recap video to test the staff’s knowledge and refresh their memories.",
                "Alternatively, digital tools for learning—sometimes known as learning management systems, or LMS—are widely available. We like open-source options such as [[Moodle]](links.moodle.web) and [[ILIAS]](links.ilias.web) or commercial versions such as [[LearnDash]](links.learndash.web) (built for the content management system WordPress) or [[Docebo]](links.docebo.web).",
                "You may also want to consider a third-party learning platform like [[Totem Project]](links.totem.web) to help your staff practice their cybersecurity skills.",
                "You may need to work with a technical assistance provider to implement this tool, but the effort can pay dividends. A well-designed LMS can help you capture not only cybersecurity lessons but also help your staff answer time-sensitive questions without having to track down an instructor. Most LMS platforms provide a scoring mechanism, too, so you can map your staff’s progress."
              ]
            },
          ],
      }
    },
    "travel-policy": {
          "section": "Operational Security",
      "title": "Travel Security",
      "general": {
          "why": [
            "Organizations that don’t plan for risks in the field leave themselves vulnerable to surprises. Having an open conversation with your staff about travel security can encourage an important dialogue about risk within your organization and may even highlight some vulnerabilities you hadn’t noticed previously. You can then use those findings to help create policies to mitigate travel risks."
          ], // explanation of what this means
          "eg": [
            "ADE Worldwide now has offices in nearly every region of the world. Staff often travel to meet colleagues overseas, attend large conferences, or oversee fieldwork. While staff have a basic understanding of how to stay safe while traveling, ADE realizes it hasn’t done its due diligence regarding travel security as an organization. As a result, it institutes a series of organizational open meetings to collect feedback about travel risks, then begins the process of drafting a formal travel security policy.",
            "One part of the new policy governs the use of work devices outside the office. Field staff at ADE Worldwide work in rural areas with farmers and agricultural workers, often in tough conditions. When headquarters staff travel into the field, they bring their work devices to take photographs, notes, and record data. After a series of devices were lost on a recent field visit, ADE management now requires all travelers to upload their data to an encrypted cloud storage provider, accessing only the files they absolutely need while on the road.",
            "When the majority of ADE’s staff needs to work remotely full-time due to the global pandemic, they use these travel policies to govern their work devices."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below": // assessed level, based on score
          [ // contains recommendations for this level
            {
              "title": "Understand the risks.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Travel is an exciting opportunity for staff to advance your organization’s mission. When your staff members travel, however, they are temporarily removed from the regular security habits they use at home or the office. This poses risks when they are carrying work devices or accessing sensitive information. Even losing their personal devices can cause a threat to your organization’s work."
              ]
            },
            {
              "title": "Develop travel security policies.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "It’s important to emphasize to staff members just how vulnerable they really are when they are working away from home. Have a candid discussion about the repercussions of losing a work device while traveling, for example. Other topics you will want to cover include:",
                {
                  "type": "ul",
                  "items": [
                    "How should staff members and your organization handle the loss or theft of a work device?",
                    "Does your organization have a device insurance policy for staff travel?",
                    "How can staff members back up data from their device and restore it, as needed?",
                    "What is the process for border crossings with work devices or data?",
                    "How will you handle travel to areas with low or no Internet connectivity?",
                    "How will you prepare for different legal requirements and expectations as you travel, particularly laws governing cybersecurity?"
                  ]
                },
                "While every organization is different and risks vary greatly between countries and regions, you may want to consider establishing policies around the use of work devices when traveling. Some organizations choose to “pre-flight” a device by removing sensitive information, deleting certain apps, and using only essential services while on the road. Other organizations prohibit staff from bringing their work or personal devices while traveling at all, instead issuing them travel-specific devices.",
                "You may want to consult with a security provider to determine the best solution for your organization."
              ]
            },
            {
              "title": "Create a checklist to maintain your travel devices.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Traveling with a digital device can often bring a higher level of risk. If your organization plans to use work devices while traveling, you should plan to take proactive steps to stay safe. Consider developing checklists to guide your staff through the necessary steps to keep their devices safe. These steps should include plans to:",
                {
                  "type": "ul",
                  "items": [
                    "Safely back up your data outside of the device",
                    "Safely clean (or wipe) the device before and after travel",
                    "Install and update necessary apps and software before travel",
                    "Remove any apps or software that may be controversial or illegal in the destination country or region",
                    "Determine what type of data is stored on the device or can be accessed from apps and accounts on the device"
                  ]
                },
                "Again, you may benefit from the guidance of a security provider for your specific context and travel plans."
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "Incorporate cloud storage.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff members understand the risks posed by travel, and you’ve briefed them on your organization’s policies governing work travel. You may have even chosen to use dedicated travel-specific devices for your staff.",
                "Now, you can enhance the precautions that your staff members take when they travel. One of the most effective ways to protect against device theft or damage while traveling is to store data in the cloud. While there are many cloud storage services to consider, we recommend using encrypted ones when traveling. These services include [[SpiderOak One]](links.soak.web), a US-based provider, and [[Tresorit]](links.tresorit.web), a Swiss provider. Self-hosted solutions include [[NextCloud]](links.nextcloud.web) and [[OwnCloud]](links.ocloud.web). Alternatively, you may use a tool such as [[Cryptomator]](links.cmator.web) to encrypt your files locally and store them in your nonencrypted cloud storage service, such as Dropbox or Google Drive. (Files on Google Drive and other popular services are encrypted but can be accessed by the cloud storage provider in response to legal requests.)",
                "You may need a security provider to help with this process and to select the right cloud service for you."
              ]
            },
          ],
        "exceeds": // assessed level, based on score
          [ // contains recommendations for this level
            {
              "title": "Source travel-specific devices and develop a policy for their use.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "You’ve made good progress on keeping your staff and your data safe during work-related travel. To further improve your travel security, you should consider using dedicated travel-specific devices. This will require both an investment of time and money, as well as the creation of new policies around the safe use of these devices. Used effectively, however, travel devices can greatly reduce risk, even if they fall into the wrong hands.",
                "Rather than having staff use their personal or work devices while traveling, consider using dedicated travel devices instead.",
                "To start, you will want to identify the types of devices that your staff members use in the field. If they typically need a laptop while traveling, consider a reliable but inexpensive alternative like a [[Chromebook]](links.google.cbook).",
                "Once you’ve identified the types of devices appropriate for your organization, you will need to develop a clear policy and process for handling travel devices before, during, and after their use. This will likely include a “pre-flight” process to prepare the device and a return check-in with the staff  member who used the device to learn about any challenges they may have had in the field. You will also need to wipe the device clean before and after travel.",
                "Each of these device management phases can be time-consuming, so they should be spelled out in detail and written down. You may want to work with a security provider to implement this process smoothly.",
                "Alternatively, you can ask a security provider to help you set up a “virtual machine.” This allows you to use your work computer to access another separate device through a web browser and software such as [[VMWare Work Station Player]](links.vmware.player) (Linux/PC), Fusion (Mac), or [[VirtualBox]](links.vbox.web). This will require an Internet connection, so it may not be suitable for every type of field travel. Ask a provider whether this is a good option for you."
              ]
            },
          ]
      }
    },
    "managing-data": {
          "section": "Operational Security",
      "title": "Data Security",
      "general": {
          "why": [
            "Like physical mail, important pieces of data can pile up in a digital corner if we don’t stay organized. This makes it much easier for an attacker to seize sensitive data simply by accessing your accounts. Undertaking a data categorization exercise helps your staff identify what information they need to access frequently and what can be stored away securely.",
            "Staying safe always requires a balance between convenience and security. Instituting an email archive policy, for example, can remove sensitive emails from inboxes while still making them accessible in an archive. This is also a good first step as you move your organization toward routinely categorizing and storing data based on its sensitivity.",
            "Data security isn’t only focused on preventing attacks from outside the organization. When handled properly, secure data are also a resource to keep an organization running during crises when they may be unable to access their offices or work devices."
          ], // explanation of what this means
          "eg": [
            "In its early years as a young organization, ADE Worldwide worked with a lean technology setup and a shoestring budget. Now, as an established player in the agricultural development space, ADE is slowly moving beyond its old technology. This means that the staff is now moving much of the data in inboxes and online accounts into secure cloud and physical storage instead.",
            "This is useful when ADE’s office in Puerto Rico is rattled by a sudden, unexpected earthquake. Since this office is near the epicenter, staff members aren’t able to return to it for weeks. Luckily, the central office on the mainland has access to critical data in encrypted cloud storage and is therefore able to grant the staff temporary access so they can continue operating in the aftermath of the earthquake."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below": // assessed level, based on score
          [ // contains recommendations for this level
            {
              "title": "Consider what’s valuable and how to protect it.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Data are the lifeblood of our digital systems. Your organization’s data contain incredible amounts of information—some trivial (such as your lunchtime calendar reminder) and some vital (such as the names and home addresses of your staff).",
                "Many people across organizations have access to tremendous amounts of data, often more than they realistically need to do their jobs properly. An attacker, however, can do significant damage when they gain such access. One effective way to reduce your digital risk is to also reduce access to unnecessary data within your organization.",
                "If you’re just getting started managing your data, it’s helpful to take two steps upfront.",
                [
                    {
                      "type": "title",
                      "heading": "Understand the connection between retention and protection.",
                        "content": "Remember this rule of thumb when it comes to managing your data: \"if it’s not there, they can’t steal it.\" For example, if your colleague doesn’t need 10 years’ worth of tax data on their laptop, find a safer place to store that information. Consider whether everyone in your organization needs access to a decade’s worth of emails or the entire staff directory and regularly delete data you don’t need any more. Determining which data is valuable and requires additional protection will help you take appropriate next steps.",
                    },
                    {
                      "type": "title",
                      "heading": "Conduct a data categorization exercise.",
                        "content": "If you are working with a technical assistance provider, you may be able to conduct this exercise on your internal system. If not, you can also conduct a tabletop version of this exercise with your staff. Consider a blunt but effective measure: list the key data sources within your organization and determine who actually needs access to them. These could include email archives, staff directories, financial records, and project details. To access this data moving forward, staff  members need to specifically request the data they need. You can then determine whether they should be granted access permanently, for a 30-day window, or even for a supervised 24-hour block of time."
                    }
                ],
                "While these steps may seem challenging, changing the status quo around data access within your organization can greatly reduce the risk that a genuine mistake can lead to a data breach."
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "Reduce the amount of data you keep and for how long.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Email is one major area in which organizations tend to neglect good data management practices. Inboxes often overflow with unread messages while sent mail folders date back years.",
                "As a way of improving your data management policies, consider instituting a limit on the amount of email that is stored in your staff’s mailboxes. Archiving email is a relatively easy practice that does not delete or remove the email itself. Instead, this practice removes a set of emails from the active mailbox to be stored somewhere more secure. A technical assistance provider can help you with this process.",
                "To start, consider archiving all email more than five years old in your staff  inboxes. After your staff has adjusted to this change, try changing the limit to any emails more than three years old. Some organizations may have a legal requirement to keep emails in an accessible format, so consult with a lawyer before determining the right policy for your organization.",
                "Though this process can be time-consuming, having a limited number of emails in your organization’s accounts greatly reduces your risk if you fall victim to a data breach.",
                "Additionally, work with a technical provider to determine how best to categorize your organization’s remaining data by sensitivity. Some data—such as financial or tax records—should be considered highly sensitive and stored in encrypted storage. Others may not require such a high level of protection.",
                "Wherever you store your data, make sure you institute a backup policy, ensuring that a copy of your information is stored securely on a regular basis. Again, a technical assistance provider can advise you on the best backup process for your needs, although we recommend no less than every business quarter."
              ]
            },
          ],
        "exceeds": // assessed level, based on score
          [ // contains recommendations for this level
            {
              "title": "Plan to keep your organization running.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "While none of us wants to experience a crisis that disrupts our organization’s work, we need a plan to maintain our operations should a challenge occur. This is a process known as “business continuity planning” and differs for every organization. For example, an investigative journalism network may have different continuity procedures than an organization that works with foreign policy.",
                "A key element of business continuity is the ability to access your data and continue your work even when you aren’t physically in your office or on your work device. This means that your current backup policy must be robust enough to allow you to maintain your operations using your most recent backup. Ask yourself how long you could use your most recent backup to keep your operations running. If the answer is sooner than you expected, consider increasing the frequency of data backups within your organization.",
                "If you increase the frequency of backups, you should also increase the amount of time you spend practicing restoring your backups. We recommend testing your backups at least once a year and ideally every six months. You don’t want to rely on a backup process that you have not tested.",
                "Backups are also essential protections against ransomware threats. Ransomware is a form of malicious software that encrypts your device until you pay a fee. If you have a previous backup of your device stored separately from the device (on an external hard drive or cloud storage, for example), you can “turn back the clock” on your data prior to the ransomware attack. This allows you to regain access to the data you stored before the attack took place.",
                "Finally, you can work with a security provider to continue the data categorization process. Now that you’ve determined which staff members need access to which data and for how long, you can go a step further and hyper-categorize access. For example, your accounting staff may need access to sensitive financial records, but only the manager of that group will be granted access to personnel records. This categorization of data by tiers can further tighten your organization’s data security."
              ]
            },
          ]
      }
    },
    "web-security": {
          "section": "Operational Security",
      "title": "Website Security",
      "general": {
          "why": [
            "Securing your website can prevent everything from embarrassing defacement to harmful intrusions. Luckily, there are basic steps you can take to “harden” your site using widely available services. While these won’t prevent highly sophisticated attacks, they will make your site a more difficult target, discouraging some low-level threats.",
            "Many organizations believe the primary threat to their website is a cyberattack. Organizations might not be as aware thatIn reality, attackers can also use the publicly available information on a website for social engineering and other threats. Social engineering occurs when an attacker targets the weakest part of an organization—the human beings who work there. An example of a social engineering attack would be an attacker impersonating a staff member to gain access to information about computer systems from a customer service department. Another example would be an attacker waiting outside a locked door with a fake delivery package until someone lets them inside.",
            "Removing unnecessary information about your staff and projects can help limit the amount of usable details an attacker can find on your site. This, of course, asks for a difficult balance between informing the public about your mission and not sharing overly sensitive details that could put your staff or work at risk. A good way to find the appropriate balance is to assess your organization’s work alongside your risk climate. There is no right or wrong answer here; do what is best for your organization at this moment in time."
          ], // explanation of what this means
          "eg": [
            "As an agricultural advocacy organization focused on responsible water usage, ADE Worldwide management didn’t believe they needed much security for their website. When they noticed some unusual traffic spikes from nations where they don’t have offices, however, they became concerned that they might be targeted for a cyberattack. To help, they implemented a few basic recommendations, including enabling HTTPs and installing a CDN, to lessen their risk of attacks.",
            "Another threat arises when they hired a new head of their office in Indonesia. The new hire, a well-known environmental activist,  attracted some controversy for his outspoken advocacy of rural farmers. Not long after he was hired, he received a threatening note while volunteering at a local charity. ADE staff realized that the new hire had mentioned his work at the charity in his biography on the website, making it easy for an adversary to track him there. In response, the organization removed overly specific information from several staff biographies on the site."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below":
          [ // contains recommendations for this level
            {
              "title": "",
              "content": [
                "For many organizations, your website is both your front door and your face to the world. As a result, people who want to harm your work may target your website for defacement, hacking, or other types of attacks. Luckily, there are some basic steps you can take to strengthen your web presence. Here are three measures you can take, with assistance from a technical assistance provider, to improve your website security."
              ]
            },
            {
              "title": "Reduce your risk of DDOS attacks.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "If someone dislikes your organization’s work or wants to harm your efforts, one strategy they may use is to temporarily force your website offline. This is often accomplished through a distributed denial of service (DDOS) attack, in which attackers overwhelm your website with visits to temporarily shut it down. A qualified technical assistance provider can help you reduce your vulnerability to these attacks by installing a content delivery network (CDN). A CDN delivers the content of your website from several different locations across the web, reducing your dependence on a single point of failure that can be crippled by a DDOS attack. You can read more about these attacks in [[this article by CloudFlare]](links.cflare.ddos). [[CloudFlare’s free Galileo]](links.cflare.gal) and Google’s free [[Project Shield]](links.google.shield) are both ideal CDNs for civil society organizations, as is [[Equalite’s Deflect]](links.equalite.deflect)."
              ]
            },
            {
              "title": "Understand and implement HTTPS.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "When you visit a website, you may see the letters “http” in front of the web address. This allows the site to communicate and provide directions to your web browser. In the early years of the Internet, HTTP was the default form of communication between websites and browsers. Now, a more secure form of communication, known as HTTPS, provides greater protection for users visiting your website. This means that if they search for sensitive information or submit information to you via a form, their data are encrypted from outside eyes.",
                "Increasingly, popular search engines such as Google are flagging sites that do not use HTTPS as insecure, which also reduces the number of people who are comfortable visiting your site. You can read more about HTTPS in [[this article by CloudFlare]](links.cflare.https).",
              ]
            },
            {
              "title": "Understand how Google “dorking” can harm your organization.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Despite the silly name, Google “dorking” is a serious threat to civil society organizations. The practice involves using a popular search engine, such as Google, to search for vulnerabilities within particular websites. For example, if your website includes a particular snippet of code from an outdated application, searchers can use Google to locate and attack insecure pages. Google dorking can also be used to detect the current version of your content management system, helping attackers find vulnerabilities to exploit. This practice can also reveal potentially sensitive documents that you may be storing on your site in areas that are accessible to search engines.",
                "You can work with a technical assistance provider to identify areas of your site that need to be updated to protect against this practice.",
              ]
            },
            {
              "title": "Keep your website updated.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Many websites run on content management systems (CMS) that allow nontechnical users to easily maintain the site. As with all software, you must update your CMS when new features and security updates become available. Any plug-ins or themes (the code that provides the look and feel of your site) should also be updated to plug any vulnerabilities. A technical assistance provider can help you keep your CMS updated on a regular basis.",
                "If you don’t have the resources to keep your site updated, consider switching to a hosted provider such as Wix, Squarespace or wordpress.com. For a monthly fee, these services update automatically and require less maintenance than a self-hosted site."
              ]
            },
            {
              "title": "Conduct a basic audit of your website security setup.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your organization, like many nonprofits, is busy pushing forward with your mission and goals. But in order to safeguard your work, you should take time to regularly audit your website security. This doesn't have to be a complex, time-consuming process. In fact, you can get started with a basic website security audit with just a few questions. Start by asking yourself these:",
                {
                  "type": "ul",
                  "items": [
                    "Is your website's content management system (CMS) updated?",
                    "Does your website have DDOS protections? (See recommendations above)",
                    "Who manages your website? Can you contact them easily in an emergency?",
                    "Who owns the DNS for your website? Can you contact them easily in an emergency?"]
                },
                "You may need the assistance of your IT department, a technical assistance provider, or others to help answer these questions. Try to conduct this basic audit at least once per year."
              ]
            },
          ],
        "ok": // assessed level, based on score
          [ // contains recommendations for this level
            {
              "title": "",
              "content": [
                "You’ve taken a series of concrete steps to help reduce vulnerabilities on your website. Now, you can turn your attention to the information you include on it. In addition to finding technical loopholes in your website, dedicated attackers will also comb the website itself, looking for valuable information. This information can include details about your organization, location, and staff that they can use for more attacks. Here are two steps to consider to reduce your risk."
              ]
            },
            {
              "title": "Understand the connection between online and physical harassment.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Though cyberbullying and doxxing (the release of private information online) may seem like digital risks, they may also be warning signs for physical harassment. Leaked information such as home addresses can put staff members at risk of physical harm, and attacks by trolls on social media can indicate increased risk of real-life harassment. Don’t assume that online attacks only stay online and consider increasing your physical security."
              ]
            },
            {
              "title": "Comb your website and social media profiles for unnecessary information.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "People who want to harm your organization will use any available information to make their attacks more effective. This includes using seemingly innocent details on your website or social media profiles. For example, sharing full names, staff photos, and biographical details on your website can allow an attacker to identify a target more easily.",
                "Consider using a first name and last initial policy for your website and social media sites such as LinkedIn, and being careful with sharing details about work assignments and location. Document your requirements in an official organizational policy so your staff members follow the appropriate guidelines, too."
              ]
            },
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title": "",
              "content": [
                "Now that you have HTTPS and a CDN enabled, consider working with a technical assistance provider to more closely monitor how your website is being used. Here are three key steps you can take to remain watchful."
              ]
            },
            {
              "title": "Enable rate limits.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "People who want to do harm to your organization will use any available channels to slow down or hamper your operations. This can include useful features on your website, such as online contact forms or other tools, which they can overwhelm with automated requests. To help lessen this risk, you can work with a technical assistance provider to enable rate limits, which can reduce the number of attempts an individual user can make on a particular part of your website. You can read more about how rate limits can be used in [[this article from Google]](links.google.rlimits)."
              ]
            },
            {
              "title": "Harden your content management system.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Using a content management system (CMS) can save you time and effort when updating your website. But these systems require users to log into the website from a live login page. Unless you take proactive steps, an attacker can access this login page, determine which CMS you are using, and attempt to force their way inside.",
                "There are steps you can take to mitigate this risk with varying degrees of technical complexity. One of the easiest steps is to enable [[two-factor authentication]](links.2fa.web) on your website CMS, which requires an additional step to log in. You can also work with a technical provider to enable a single-sign-on (SSO) system that allows your staff  members to use one master login across the organization. This improves both usability and security, although it can be complicated to set up. Last, you can work with a provider to limit access to the login page to only a pre-approved list of users, which would require the use of a virtual private network (VPN).",
                "There are other steps you can take to make your CMS more difficult to attack. Many CMS platforms will support third-party applications that can help strengthen their security. For example, [[WordPress]](links.wfence.web), one of the world's most popular CMS platforms, supports WordFence, a third-party intrusion detection and prevention system.",
                "Additionally, you can change the settings on your CMS to make attacks less likely. For example, many CMS platforms allow you to identify and “sleep” any user accounts that have not published any new content in a set period of time, such as 6 to 9 months. This can reduce the risk of a defunct user account being hijacked by an attacker looking for a way into your system."
              ]
            },
            {
              "title": "Monitor your analytics and traffic.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "If you’re concerned about attacks from a particular region or country, you can use analytics, the data that your website collects, to track sources of traffic. A spike in usage from a particular country may be a red flag, as well as sudden changes in the source of traffic or the sites that are referring traffic to yours.",
                "Additionally, you should monitor search terms that bring users to your site. Negative or threatening search terms that drive traffic to your site can be an indicator of an ongoing campaign against your organization’s work or reputation. Working with a security provider, you may be able to use these search terms to identify the source of these attacks, as well. A reputable provider can also show you how to monitor particular users of your site that are linked to regions, countries, or Internet connections that you have identified as risky."
              ]
            },
          ]
      }
    },
    "office-security": {
          "section": "Operational Security",
      "title": "Office Security",
      "general": {
          "why": [
            "It’s easy to overlook office security risks because, as humans, we naturally fall into patterns of behavior. If we routinely leave our laptop on our desk at the end of the day, for example, we may see this action as normal and not risky. Taking another look at our daily patterns of behavior can help us see which of these actions are actually leaving us at risk. And installing a basic security system can provide an added level of protection for moments we didn’t anticipate in our policies.",
            "Without formal policies, busy professionals are likely to forget an important step, particularly at the end of the day. Instituting clear guidelines and posting them in public spaces (or asking staff to display them at home) can help tired staff members follow best practices.",
            "Though digital threats are critical, it’s important not to overlook other sources of sensitive information. These can often come from unpredictable places, such as the trash your office discards or the printed documents your staff bring home. Implementing a shredding policy within your office can reduce the chance that printed materials will inadvertently leave your possession."
          ], // explanation of what this means
          "eg": [
            "ADE Worldwide’s headquarters is in a busy office building in Washington, DC. Though the building requires individuals to sign a logbook for entry, there is little oversight once someone enters the offices themselves. After a report that an office is burglarized on a lower floor, ADE management institutes a clean desk policy for staff to secure valuable items at the end of the day. Anyone entering the office during the work day will also need to show ID and verify their identity with the office administrator who sits by the entrance.",
            "Meanwhile, the ADE Worldwide offices in Kolkata, India, move to a new location near a high-traffic intersection. One weekday evening, a man on a motorbike threatens an ADE employee for their work on water rights, then speeds away. In response, ADE managers in Kolkata conduct a last person out exercise to make sure their staff is better protected when leaving the office at the end of the day. Ultimately, they put together a series of steps, including requiring staff members to exit the office in pairs.",
            "At ADE Worldwide’s European headquarters in Berlin, the company that manages the offices promised that all documents placed in a secure lockbox would be shredded. Later, the company reports that it accidentally threw several lockboxes’ worth of material into the building’s recycling bins. To ensure more control over sensitive documents, ADE management institutes a shredding policy for the Berlin office, with the hope that they can eventually institute this policy throughout the organization."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below":
          [ // contains recommendations for this level
            {
              "title": "",
              "content": [
                "We don’t always make the connection between our physical security and our cybersecurity. But with our digital devices becoming more portable and our data becoming more valuable, the risk of device theft, seizure, damage, and loss is greater than ever. Here are two steps you can take to help reduce your organization’s immediate physical security risks."
              ]
            },
            {
              "title": "Establish an entrance policy.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Whether your organization has offices in secure buildings, co-working spaces, or staff members’ homes, you can implement a “last line of defense” entrance policy to control access to your office space. Implementing a mandatory identification policy can add an extra hurdle to your schedule but allows you to keep a clear record of who enters your space. While requiring proper identification won’t stop a dedicated attacker, it may deter low-level opportunistic threats or people who are testing your defenses. If your staff works outside of the office and holds in-person meetings, consider extending this policy so individuals must show an ID before a face-to-face meeting (which ideally should not take place in an employee’s home office, but rather a public space).",
                "Make sure that all policies match the culture of your organization. Your staff and visitors are less likely to follow a policy that doesn’t match your values. For example, if you are a community-based organization with a communal office, you may want to consider an entrance policy that reflects your mission. In that case, you could assign a color code to help categorize visitors. For organizations in areas where official ID is rare, consider requiring an escort after the guest has been verified face-to-face by someone in your organization.",
                "If you choose a more relaxed entry policy, you may want to tighten your cybersecurity policies, such as requiring office devices to screen lock after a short period of time. There may also be an area of your office that you choose to leave “off-limits” to the public, such as a storage room or internal meeting rooms."
              ]
            },
            {
              "title": "Establish a “clean desk” policy.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "At the end of a busy work day, it is tempting to leave devices, paperwork, and files on our desks for the next day. While convenient, this leaves an easy target for attackers who gain entry during off-hours. Institute a clean desk policy that requires staff members to secure their devices and paperwork in a locked space before leaving for the day. This same policy should apply across offices, even if staff members work from home. It may be useful to print a reminder checklist for staff members to leave on their desk as a visual cue."
              ]
            }
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "",
              "content": [
                "You’ve taken some important incremental steps toward increasing your organization’s physical safety. As with all aspects of security, though, physical security requires a flexible approach that adjusts as threats change. One of the most effective ways to determine whether your current policy meets your current threats is to conduct an inter-office exercise."
              ]
            },
            {
              "title": "Conduct a “last person out” exercise.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "To measure whether your organization’s clean desk policy is as effective as it could be, conduct a “last person out” exercise. If you have multiple offices, you may need to ask staff members across your different regions to help. If they work from home, they can conduct this test themselves. When the last person in the office leaves for the day, designate a staff member to enter the office shortly afterward and note what’s been left in the open and what’s been properly secured.",
                "This exercise is not designed to “name and shame” anyone who might be neglecting the rules. Rather, it’s intended to note any missed opportunities that need to be incorporated into your clean desk policy. For example, you may need to develop special rules for the last person who leaves the office and post them prominently in a public place. For staff working remotely, they can use printouts to remind them of any necessary steps."
              ]
            },
            {
              "title": "Create a minimum viable security system.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Physical security systems can be highly complex, involving video and audio monitoring, entry cards, and visitor registration. If you don’t currently have a security system, however, you don’t need to start with the most advanced option. Instead, you can work with a security provider to implement a low-cost solution using basic equipment such as a dedicated smartphone or streaming camera. As your threat level increases or you increase your budget, you can work with a provider to install or implement a more elaborate solution.",
                "Remember that video monitoring systems may not be appropriate for every organization. If you choose to use a video system, make sure to use systems that balance the need for security with the need for privacy, such as [[Haven]](links.gproj.haven) by the Guardian Project. Video feeds should be encrypted to protect your organization further. Both [[Surveillance Station]](links.synology.station) by Synology and [[Haicam]](links.haicam.web) can support encrypted video.",
                "Organizations that use video-based security systems should remember that video surveillance has an effect on your staff and visitors. Workers should always know where cameras are placed and you should designate a \"no camera\" zone where staff can congregate without being recorded."
              ]
            }
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title": "",
              "content": [
                "Now that you have a tested office security policy and a basic security system, you can go a step further and make sure you have more control over the information that leaves your office. One of the most common vulnerabilities for many offices is the use of printed documents. If you’ve already secured who can enter your office and what they can access, you also need to control the printed material that leaves your office in trash or recycling containers."
              ]
            },
            {
              "title": "Make sure your staff shreds all sensitive documents.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Implementing an inter-office document shredding policy reduces the amount of printed material that an outsider can access from your operations. Using a mandatory shredding policy will help your staff incorporate the practice into their workflow. (Don’t forget to recycle non-sensitive paper.) Buy individual “cross-cut” shredding machines for each desk and station them closer to staff than trash cans. If staff members work remotely or from home, make sure they have a shredder and are complying with the policy as well."
              ]
            },
          ]
      }
    },
    "legal-risks": {
          "section": "Operational Security",
      "title": "Legal Risks",
      "general": {
          "why": [
            "Security threats facing civil society organizations aren’t restricted to physical or digital attacks. Legal challenges can force organizations to divulge sensitive information, slow down or stop projects, or simply spend time and money responding to frivolous lawsuits. Consulting with a lawyer familiar with your country’s law is a good first step in protecting your organization from these challenges.",
            "Proactively managing data before a legal challenge better equips your organization to quarantine data that may be needed in the event of a lawsuit. Before archiving or relocating employee information, however, explain clearly to your staff when and how their data may be accessed and used."
          ], // explanation of what this means
          "eg": [
            "ADE Worldwide runs a one-person office in Guatemala that works with local farmers to better manage their water usage. As an environmental advocacy organization in a region where powerful interests own vast amounts of land, ADE understands that this office may be the target of a legal challenge. To help prepare, ADE management asks the staff member there, alongside the organization’s legal counsel, to review and archive sensitive data in the system.",
            "A local landowner threatens to sue the organization for defamation he claims he experienced thanks to its water sustainability campaigns. The attorneys in ADE’s Mexico City regional headquarters say they believe they can handle the potential lawsuit themselves, but quickly realize they must bring on local representation in Guatemala to better understand and comply with local laws and requirements."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below":
          [ // contains recommendations for this level
            {
              "title":"",
              "content":[
                "Legal risk can be complex. Laws vary from country to country, and even region to region. As a civil society organization, it’s vital that you have a basic grounding in your legal responsibilities and restrictions, as well as any possible risks you face from lawsuits or other legal action. If you’ve never met with a lawyer before, here are two tips to get started:"
              ]
            },
            {
              "title": "Educate yourself about civil society law in your country and region.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Law can be highly complicated, but your staff  can learn the basics. An excellent resource (apart from a lawyer in your area) is the [[International Center for Not-For-Profit Law]](links.icnl.web), which has an online library with case studies from around the world, as well as reports and resources for nearly every nation. ",
                "It is also important to become familiar with how (well) the relevant laws are enforced."
              ]
            },
            {
              "title": "Meet with a lawyer.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "While this may seem like an obvious suggestion, finding a qualified lawyer in your area may be challenging. If you’re able to meet with a lawyer to discuss your organization, make sure to discuss key areas of concern about legal liability. If you aren’t able to meet with a lawyer, you may have better luck consulting with a free clinic at a local law school or a legal scholar or researcher. Many lawyers may be willing to work with a civil society organization pro bono, but that may not always be the case.",
                "A good resource for finding qualified lawyers in your region is the [[International Bar Association]](links.iba.web), which advocates for lawyers worldwide.",
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "",
              "content": [
                "You’ve met with a lawyer to discuss legal risks to your organization, and perhaps you now have a lawyer on retainer for emergencies. Even with these steps, you still face some legal vulnerabilities that you can reduce using cybersecurity principles. Here’s how."
              ]
            },
            {
              "title": "Identify and archive data.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Though legal systems vary around the world, most lawsuits include a “discovery” period, in which lawyers may request documents pertaining to their case. While discovery was once mainly focused on paper records, lawyers may now request vast amounts of electronic information that may be useful to their case, including emails, instant messages, and even messages on collaboration platforms such as Slack.",
                "While some of this information may be used for legitimate legal purposes, so-called “nuisance” or frivolous lawsuits can also force organizations to disclose sensitive information as part of discovery. One way to prepare for such lawsuits is to identify concerning keywords within electronic communication that would be targeted in a lawsuit. From there, with your lawyer’s advice, you can archive or “quarantine” this information in a secure location, such as off-line storage devices or encrypted cloud storage.",
              ]
            },
            {
              "title": "Establish a data removal policy.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Not every organization has the resources—either financial or technological—to archive sensitive data. However, most organizations do have the ability to selectively remove or delete emails from staff inboxes. When done properly, this can help  manage the flow of information better within your organization. When abused, however, this power can infringe on your staff’s right to privacy and your ethical responsibility as an employer. For this reason, we recommend that most organizations put into place an easy-to-understand policy around when you will remove data or messages from staff members’ systems and make sure they are familiar with this policy."
              ]
            }
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title":"",
              "content": [
                "Now that you’ve begun to identify and archive data, as well as put together policies for ethically removing data, you can take additional steps to safeguard your organization’s private data from frivolous lawsuits. It’s important to work alongside a lawyer familiar with your situation whenever you are handling legally sensitive data."
              ]
            },
            {
              "title": "Use an e-discovery platform.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "With the legal discovery process now encompassing a vast array of data, many lawyers have begun using e-discovery tools that allow them to search through vast amounts of information using a computer. Your organization can also use these tools, such as [[Google’s G Suite Vault]](links.google.vault), to search your own data for additional keywords, terms, and documents that should be removed and archived. These may include documents and attachments from volunteers, temporary staff, or vendors who have access to your system. Working with a lawyer, identify sensitive information and store it within the e-discovery platform.",
              ]
            },
            {
              "title": "Test your defenses with an annual drill.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Just as you have conducted inter-office exercises to test your physical security and your security policies, you can also conduct a drill to test your response to a legal request. In this drill, you would simulate an outside legal request for particular information. You may even want to work with your lawyer on this. Can your staff locate and secure this information? Does this request expose your organization to a particular legal risk? Does the legal request itself temporarily stop your organization from carrying out its work? Understanding the impact of a lawsuit—even a fictional one—on your organization can help you better prepare for the real-life risk."
              ]
            },
          ]
      }
    },
    "messaging-collab": {
          "section": "Device and Account Security",
      "title": "Messaging and Collaboration",
      "general": {
          "why": [
            "Encrypted communication can help keep your organization’s messages, data, and activities more secure. Implementing encrypted messaging and collaboration tools also instills the values of compartmentalization, which helps ensure that your organization’s sensitive data are not in a single system.",
            "Encrypted communication is most effective when users understand how best to use advanced settings such as disappearing messages and data retention. You may want to consider formally documenting your organization’s recommendations in your security policy so users can begin using these tools quickly and easily."
          ], // explanation of what this means
          "eg": [
            "ADE Worldwide staff throughout Chile use unencrypted communications to reach each other in a large network of rural offices. These communications include sensitive information such as project details and login credentials for office accounts. When an influential landowner who has opposed ADE’s work takes over a national corporation, ADE managers realize they need to take added steps to keep their communication more secure. As a result, they implement an encrypted messaging service throughout the offices in the country."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below":
          [ // contains recommendations for this level
            {
              "title": "",
              "content": [
                "Your organization is only effective if your staff  members can communicate and work together easily. But in a busy, fast-paced, and sometimes remote work environment, it’s easy to trade security for convenience. Luckily, there are ways to incorporate safer communication and collaboration tools without slowing down your workflow."
              ]
            },
            {
              "title": "Understand the risks of unencrypted communication.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "If your staff members are unfamiliar with cybersecurity, they may have communicated only using unencrypted technology, such as their standard smartphone or email. As a result, they may not understand the amount of information that can be hacked, uncovered through surveillance, or seized through a legal or government request when using unencrypted communication. This is especially true during moments of crisis, when many governments and other groups may increase their surveillance of regular communication channels.",
                "Educating your staff members on how encryption works is a good first start to introducing this concept. The Electronic Frontier Foundation’s \"[[Communicating with Others]](links.eff.comms)\" in its Surveillance Self-Defense curriculum is useful reading. If you’re using a dedicated mobile phone number for work, consider switching to a  voice-over Internet protocol (VOIP) number that connects via the Internet. You can find such numbers through services such as Google Voice or Skype, allowing you to avoid having to use a country-specific SIM card in your smartphone. Using a VOIP number can also protect you from threats including cell site simulators, also known as [[Stingrays]](links.aclu.stingrays), and vulnerabilities in cellular technology, such as [[SS7]](links.guardian.ss7) attacks.",
              ]
            },
            {
              "title": "Begin introducing encrypted alternatives.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "To help your staff become accustomed to encrypted communications, you shouldn’t expect them to use this new technology overnight. Instead, introduce encrypted platforms gradually, perhaps over 8 to 10 months, before making them mandatory. You may want to publicly praise staff members who are early adopters. Those who are resistant can become members of a working group dedicated to adopting the tools, making them more likely to use them.",
                "At the time of writing, a few encrypted communication tools we recommend are the messenger applications [[Signal]](links.signal.web) and [[Wire]](links.wire.web). You may also want to consider a self-hosted workplace messenger like [[Mattermost]](links.mmost.web) or the [[collaboration tool Element]](links.element.web) as an alternative to popular software such as Slack. A technical assistance provider can help you enable any of these tools, or find alternatives.",
                "If you work in a highly regulated space, such as legal advocacy, you may be required to keep records of your communications. In this case, remember to take screenshots of any encrypted messaging or collaboration tools, especially if the messages are set to disappear."
              ]
            },
            {
              "title": "Understand when to use which platform.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "At first, your staff members don’t need to use the encrypted platforms for every communication. Instead, reserve the use of encrypted tools only for your most sensitive work. This will also help staff members associate encrypted tools with a higher level of security and privacy that isn’t available with standard tools. "
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "",
              "content": [
                "You’ve already adopted an encrypted messenger such as Signal or a collaboration tool such as Element. Your staff members are incorporating these tools into their workflow and understand the distinction between encrypted and unencrypted communication. Here are three additional steps to further enhance your communication security."
              ]
            },
            {
              "title": "Try out more advanced settings.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Many encrypted tools, including Signal and Wire, have more advanced settings that allow you to choose how long your messages should exist before they auto-delete, as well as removing and archiving data you no longer need or use. Gradually begin to incorporate these more advanced settings into your everyday operations. For example, members of your staff working on a particularly sensitive topic may choose to set their encrypted messages to auto-delete every 24 hours."
              ]
            },
            {
              "title": "Create a policy for how long to keep messages.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Understand that data lingers, even when encrypted. If you don’t need to store months of messages or years of projects on your tools, both encrypted and unencrypted, consider an archiving policy. Many tools allow you to easily export messages to an archive on an alternate storage device. If you’re not sure how to do this, your technical assistance provider can help."
              ]
            },
            {
              "title": "Provide clear guidelines on communication.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Encrypted tools are only powerful when used appropriately. Not every work-related topic needs to be discussed on an encrypted tool, but some highly sensitive topics shouldn’t be discussed on unencrypted platforms. To help your staff know which platform to choose for which topic, create clear communications guidelines for your staff . They should understand when to switch from an unecrypted tool such as Mattermost or Slack to an encrypted tool such as Signal. Staff should also understand how to use each of these tools and be able to identify which are encrypted and which are not.",
                "Additionally, guidelines should incorporate the idea of fragmentation, or spreading your communications across several different platforms. If your organization does all its work on Slack, for example, you risk significant harm if the platform is hacked, breached, or fails. Instead, try to spread your work (and risk) across several different collaboration tools."
              ]
            },
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title": "",
              "content": [
                "Your staff has widely adopted encrypted communication tools and understand when to use them appropriately. Now, you can take a step further to help improve the way they communicate and collaborate using encrypted tools."
              ]
            },
            {
              "title": "Categorize your use by sensitivity.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "You’ve already worked with your staff to understand when to use encrypted tools instead of unencrypted ones. For added security, begin to categorize their use of encrypted tools by the sensitivity of the information or project. For example, you may designate urgent and highly sensitive communications to stay on Signal, but sensitive project work to be conducted only on an encrypted collaborative platform such as Element. Preventing information from gathering in one place makes it more difficult for an adversary to access all your sensitive information at once."
              ]
            },
            {
              "title": "Try several collaborative tools.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff is already familiar with the idea of fragmentation, or spreading out their work across several different tools. When working on a highly sensitive project, they can incorporate the idea of fragmentation with encrypted tools as well. In this case, staff members conduct all work on a sensitive project within encrypted tools, but, rather than relying on a single encrypted platform, they spread their work across several collaboration tools. For example, project planning could take place in Element while project brainstorms could take place in Wire. This decreases the amount of information that an attacker could get if they gained access to your messages."
              ]
            },
          ]
      }
    },
    "installing-software": {
          "section": "Device and Account Security",
      "title": "Installing software",
      "general": {
          "why": [
            "Software is the backbone of any organization’s digital work. But using illegal, bootleg, or unlicensed software can open your organization up to unnecessary risk. With free, open-source alternatives, as well as discounted licenses available for nonprofits, don’t take the risk of inadvertently bringing malware onto your work devices.",
            "In addition to being vigilant about software, your organization can also be strict about where software comes from, who can install it, and how it works. A technical assistance provider can help you be sure that software comes from legitimate sources and can be changed or altered only by dedicated staff members."
          ], // explanation of what this means
          "eg": [
            "When ADE Worldwide opens an office in Guam, local staff struggle to find software they can afford for their small, two-person operation. To help them avoid having to use bootleg software, ADE negotiates with a regional software vendor for a series of discounted licenses. Then, to help keep key software updated, ADE IT staff install a device management system to push needed updates even from thousands of miles away."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "You use software every day—web browsers, word processors, and numerous other types. Yet if your organization is using unlicensed, illegal, or bootleg software, you could be putting yourself at risk. While licensed software can be costly, illegal or unlicensed versions of that same software, often downloaded from the Internet, can be weaponized with malware and other threats."
              ]
            },
            {
              "title": "Apply for discounted licensed software.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Depending on your nonprofit status in your country, you may qualify for nonprofit discounts on popular commercial programs such as Microsoft Office. For example, the [[technology provider TechSoup]](links.techsoup.web) provides deeply discounted software licenses to registered nonprofit groups. Some major software retailers also provide discounts. Make sure to confirm whether you qualify for such discounts based on your organization’s current legal status or type of work."
              ]
            },
            {
              "title": "Use free, open-source software.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Many of the most popular paid programs have free, open- source alternatives. We’ve listed a few below. These programs aren’t the right fit for every organization, so do your research before relying on them.",
                {
                  "type": "ul",
                  "items": [
                    "Microsoft Office can be replaced with [[OpenOffice]](links.apache.oofice) or [[LibreOffice]](links.libre.office)",
                    "Adobe Photoshop can be replaced with Canva (available with a nonprofit license), Sumopaint, and Pixlr",
                    "Microsoft Outlook can be replaced with [[Mozilla Thunderbird]](links.mozilla.tbird)"
                  ]
                },
                "While open-source software is often free and convenient, there are some caveats. Be sure to download open-source software only from trusted sources. And because open-source programs are often maintained by a small staff , they may not be as user-friendly as commercial programs and may not be updated as often or at all. Use caution."
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "You’ve cracked down on your organization’s use of illegal or unlicensed software and found alternatives. Now, you can take steps to protect your work systems from untrusted software, too."
              ]
            },
            {
              "title": "Be strict about who can install software.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Working with a technical assistance provider, you can restrict your staff from installing software on their work devices. One of the easiest ways to do this by making sure your staff members are not administrators of their own work devices. Instead, make sure the administrator is a trusted person in the office, preferably with some technical experience. You’ll also want to designate a backup administrator with access in case your primary administrator isn’t unavailable and you need to make changes to a work device.",
                "In consultation with your technical provider, you may want to also consider restricting your organization’s software to only what is available in official stores from your operating system, such as Microsoft and Apple. Any software you do download should be digitally signed, although be aware that this is not a guarantee of safety."
              ]
            },
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "You are now regulating the type of software used by your organization and you’re ready to further strengthen your security posture. There are several steps you can take."
              ]
            },
            {
              "title": "Establish a strong policy on the use of personal devices.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "While convenience is important, allowing staff members to connect their personal devices to work networks quickly transforms your office system into the equivalent of an Internet cafe. Instead, establish a strong policy that explicitly states which devices employees may use and where, including when working from home. This reduces the risk that staff will unwittingly connect a compromised device to your network. You may also consider running a separate, less secure WiFi network."
              ]
            },
            {
              "title": "Take steps to tighten your oversight.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Working with a technical assistance provider, you may want to consider implementing a “zero trust” network, which allows an individual to connect to your internal systems only after they go through an authentication process. One way to do this is through single sign-on, which uses a single password across accounts and devices. Alternatively, you can establish a network administrator role to make sure that all staff log in through a central domain that can track and manage who is connected. Last, consider using device management software to remotely install needed software and wipe work devices as needed."
              ]
            },
          ]
      }
    },
    "data-encryption": {
          "section": "Device and Account Security",
      "title": "Data Encryption",
      "general": {
          "why": [
            "Understanding and enabling data encryption on work devices isn’t as daunting as it may seem. While it’s critical to understand how encryption works (including when services use at-rest encryption), taking steps toward better safeguarding data is within reach for most organizations.",
            "More advanced implementation can include “zero-knowledge” cloud storage and individual encryption of files and folders on specific devices. These can be implemented with the help of a technical assistance provider."
          ], // explanation of what this means
          "eg": [
            "ADE Worldwide’s office in Zambia is  raided unexpectedly. The intruders seize the office’s two laptops and one desktop computer. Luckily, before the raid, ADE required all devices be full-disk encrypted. Therefore the staff in Zambia is reassured that their data remain safe while the devices are outside of their control."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "If you associate encryption only with code-breaking and financial transactions, you’re not alone. Most people don’t encrypt any of the digital information they possess. As a result, their data can be easily accessed by an attacker if their computer is lost or stolen,  even if it is secured with a password. Only when a device is fully disk encrypted is your data protected (with some caveats below). Here are two steps to help your organization incorporate encryption into your workflow."
              ]
            },
            {
              "title": "Turn on full disk encryption on work devices.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Work with a technical assistance provider to enable full disk encryption on any computers that your organization uses for work. This may be time-consuming, especially for busy organizations with little downtime, but can be performed during off hours as needed. Windows computers must be upgraded to at least Windows 10 Pro (which typically costs around US $50) to enable [[BitLocker]](links.ms.bitlocker), the built-in full disk encryption software. Apple computers have access to built-in [[FileVault]](links.apple.filevault) software that can be enabled at any time. Linux computers use [[Luks]](links.redhat.luks), which must be enabled when the operating system is being installed.",
                "It’s also important to understand how your encryption system works. Much encryption software, including Microsoft’s BitLocker, encrypts data “at rest,” meaning the data are encrypted only when the device is turned off. Some encrypted cloud storage also works this way, only encrypting data when the user is not actively connected to the system. This is important to consider when setting up these systems so there is no misunderstanding about how extensively you have protected your data."
              ]
            },
            {
              "title": "Consider more secure hard drive alternatives.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Currently, you may store some of your data on external hard drives, which are very portable and convenient. By default, however, most of these devices are not encrypted, leaving your data accessible to anyone who has the drive itself. Consider replacing these devices with more secure alternatives. One option would be to replace external hard drives with hard drives that require physical PIN codes. [[Apricorn]](links.apricorn.web) and [[iStorageUK]](links.istorageuk.web) sell these encrypted drives, which have keypads to enter the codes and access the data within."
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Now that you’ve enabled full disk encryption on your organization’s devices, you can use encrypted options for other types of storage as well. One of the most popular types of storage for many organizations is in the cloud, or storing files and information on servers run by popular services such as Dropbox and Google Drive. These are convenient, affordable storage options, but they aren’t the best choice for storing sensitive information. Here is a safer alternative."
              ]
            },
            {
              "title": "Use “zero-knowledge” encrypted cloud storage.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "For highly sensitive information, consider using a “zero-knowledge” cloud storage provider. This term refers to a cloud storage provider that has no “knowledge” of the files or data you store. They simply provide storage and the encryption functionality necessary to keep your data safe. This means that your organization alone has access to the files and data you store there.",
                "While this greatly strengthens your ability to store sensitive information, there is also a downside: if you lose or forget your credentials to the service, you won’t be able to access your data. And since the provider doesn’t have access to your data, either, they can’t retrieve it for you. With this knowledge in mind, be selective about the data you choose to store with a zero-knowledge provider, choosing only sensitive data that you have backed up elsewhere. Popular zero-knowledge encrypted cloud storage providers include [[Tresorit]](links.tresorit.web), [[SpiderOak One]](links.soak.web), and the open-source alternative [[NextCloud]](links.nextcloud.web) or [[OwnCloud]](links.ocloud.web).",
              ]
            },
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your organization has made major progress in keeping your sensitive data encrypted and secure. Your staff has enabled full disk encryption on all work devices and uses encrypted cloud storage for additional protection. Now you can take encryption one step further by teaching your staff members to encrypt individual files and data on their work devices. A technical assistance provider can help you incorporate this process into your workflow.",
              ]
            },
            {
              "title": "Encrypt sensitive information on your computer", // title of this recommendation
              "content": [ // explanation of this recommendation
                "While we recommend full disk encryption on all devices, it has its limitations. What happens, for example, if a staff member leaves their work laptop unlocked while they use the restroom and someone clicks on a sensitive file on their desktop? For individual files that could pose a risk if they fell into the wrong hands, consider teaching your staff members how to encrypt files and folders. If files are encrypted, individuals will be prompted for a password to open them. You can accomplish this through the use of file encryption software such as [[VeraCrypt]](links.vera.web) or [[Cryptomator]](links.cmator.web). A technical assistance provider can help you get started.",
                "One important note: when using some types of this software, encrypted files may appear to be missing and not present in file folders or on the desktop. These files only appear when a user opens the appropriate software and enters their password."
              ]
            },
          ]
      }
    },
      "device-compartmentalization": {
          "section": "Device and Account Security",
      "title": "Device Compartmentalization",
      "general": {
          "why": [
            "Compartmentalization can take many different forms, depending on your organization and your mission.",
            "Just as you wouldn’t store all your valuables in one desk drawer, you don’t want to keep all your sensitive data in one location, system, or platform. Implementing the principles of compartmentalization can help you keep your data safe even if your devices are hacked, attacked, or stolen.",
            "If your organization is heavily research-based, using a dedicated \"research only\" browser can help keep online activities separate. Your staff can also make their work devices—particularly mobile devices—safer by storing data outside of the device itself. These easily implemented steps can contribute to a safer organizational culture.",
            "As threats increase, you may want to consider more advanced options such as a virtual machine or end-point protection, both of which a technical assistance provider can set up."
          ], // explanation of what this means
          "eg": [
            "ADE Worldwide has offices around the world. In some regions, up-to-date devices are reasonably priced, but in others, it’s difficult to buy affordable new technology. To help staff keep their data more secure, ADE management institutes a work-only account policy, instructing regional IT staff to create user accounts that staff should use on work devices. Only IT personnel have the ability to install software and change settings.",
            "They also require ADE’s research staff to use a dedicated browser on their computer for work-related research, while highly sensitive information is handled only through a virtual machine."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "intro": {
          "title": "",
          "content": [
            "You may already be familiar with the need for fragmentation, or spreading your data across several different platforms. Another related best practice is compartmentalization, which means using several different devices or services to lessen your risk. If your staff primarily uses the same device at both work and home, or relies entirely on Google’s G Suite for your work, you should consider compartmentalizing your organization’s workflow further. Here are a few ways to do so."
          ]
        },
        "below":
          [ // contains recommendations for this level
            {
              "title": "Understand the connection between personal and professional use.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Members of your staff wouldn’t have the same conversations at work that they would at home or over dinner with a friend. The same rule of thumb applies when it comes to their digital lives as well. Using the same device for both personal and professional uses magnifies their risk of being targeted at both work and home.",
                "For example, a staff member who uses their work laptop to play online games may be targeted by hackers who then have access to sensitive work files. By contrast, a staff member who is targeted for their work may find that hackers now have access to their personal files. Educating your staff on the importance of separating these two data streams is important.",
              ]
            },
            {
              "title": "Implement the right solution for your organization.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "The right solution to help your staff compartmentalize their data depends on a variety of different factors, including your budget, technical ability, and the availability of computers and smartphones in your region. Possible solutions, sorted by price and complexity, include:",
                {
                  "type": "ul",
                  "items": [
                    "Purchase dedicated work devices (laptops and/or smartphones) for staff members. (Most expensive, least complex)",
                    "Create new work-only accounts on staff computers. (Least expensive, somewhat complex)",
                    "Use a USB or external hard drive to load a separate operating system on staff computers. (Less expensive, most complex)"
                  ]
                },
                "You will want to work with a technical assistance provider on all of these options to customize these strategies for your organization."
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff is familiar with the concept of compartmentalization, and you've taken some initial steps to keep your organization’s work and personal data separate. Now, you can implement a few more changes to further strengthen that boundary.",
              ]
            },
            {
              "title": "Use a dedicated browser for different types of work.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Even within your work device, you can further compartmentalize your online footprint. One easy way to do this is to use a different browser for different types of work. This reduces the chances that an attacker can compromise one single browser and access all your staff’s search history and other data."
              ]
            },
            {
              "title": "Store less information on work devices.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Rather than storing files locally on work devices, implement ways for your staff to store their data on encrypted cloud or external storage. This lessens the risk of an attacker being able to steal a device and access all the data stored within it. We would also recommend you work with your technical assistance provider to set up a remote wipe policy, which allows you to remotely erase work accounts on staff devices if they are lost, stolen, or compromised.",
                "In addition to data storage, be wary of plugins, or small pieces of code added to the programs that you use on your work device. For example, some users rely on third-party keyboards to type in other languages or to use icons and other graphics in their messaging. Unfortunately, these can sometimes be compromised by bad actors. Using your native keyboard when entering information into your work device is preferable."
              ]
            },
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "You’ve made great progress on helping your staff compartmentalize their personal and professional lives. Now, your goal should be full compartmentalization, so there is very little data left for outside adversaries to locate. You will need to work with a technical assistance provider on these next steps."
              ]
            },
            {
              "title": "Use a virtual machine.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "If you have access to high-speed Internet, your staff can use software such as [[VMWare]](links.vmware.virtualization) or [[Microsoft Hypervisor]](links.ms.hyperv) to virtually access another machine through their own. This allows them to do their work without leaving much traceable data on their work devices. All their work is instead saved on a shared drive, so if their device is electronically compromised or physically stolen, there is little to no risk of exposing sensitive information. This is a technical solution that requires maintaining and updating your work devices, so it may not be appropriate for every organization.",
              ]
            },
            {
              "title": "Implement biometrics, if appropriate.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Many organizations rely on passwords as the first line of defense for work devices. This is, in part, because organizations based in the United States have higher legal defenses against disclosing their passwords to government authorities. In other parts of the world, however, biometric solutions (such as scanning a fingerprint) may be more secure and less vulnerable to challenges from law enforcement and governments. If that is the case in your region, a biometric solution may be a good fit for accessing work devices. Many biometric password systems also allow administrators to maintain an active log of devices that are currently connected to their network."
              ]
            },
            {
              "title": "Incorporate end-point security solutions.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Organizations of many different sizes frequently have firewalls set up to protect them from outside threats. But what happens when the threat comes from within via a hacked or compromised work device? End-point security solutions, including [[Microsoft Defender for Endpoint]](links.ms.defender) and [[Bitdefender GravityZone Ultra Security Suite]](links.bitdefender.gzultra), monitor the actual devices connected to the network. If these software packages detect abnormal or disruptive behavior from any of these devices, they can  disconnect them automatically from the network. You can read more about end-point security in [[this resource from SANS]](links.sans.endpoint)."
              ]
            },
          ]
      }
    },
    "passwords-authentication": {
          "section": "Device and Account Security",
      "title": "Password Management and Authentication",
      "general": {
          "why": [
            "Passwords allow us to access the hundreds of services we use online each day. Because we juggle so many passwords, it’s important that we keep them organized, secure, and easily managed. Implementing a password manager may be logistically complicated depending on your organization’s size but immediately makes your accounts and staff safer.",
            "Combining a password manager with two-factor authentication is a relatively painless way to greatly improve your security footprint. Adding additional steps, such as a physical security key or even SSO functionality, can take your security one step further."
          ], // explanation of what this means
          "eg": [
            "A few years ago, ADE Worldwide required all staff to start using two-factor authentication alongside password managers for work accounts. When a third-party social media platform they use is compromised, staff are able to easily update their passwords with a new password generated by their password manager."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Passwords are like your house keys: something you use every day that can be easily stolen. Unlike house keys, however, many people use the same password for many different accounts—the equivalent of using the same key for your home, office, car, and desk drawer. Luckily, just as you can take steps to secure your locks, you can also take steps to strengthen your passwords and online accounts."
              ]
            },
            {
              "title": "Understand how passwords are compromised online.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Passwords are valuable to people interested in accessing your organization’s information online. They can include attackers looking to compromise your organization or cybercriminals looking to steal or sell data. Most online services— such as email and social media platforms—will eventually be compromised. When this happens, attackers sell and trade passwords until they are gradually released on the public Internet.",
                "Sooner or later, staff members will suffer from a breach that exposes at least one of their passwords. If they use that password across several different accounts, they increase their risk and the risk to your organization. You can detect whether your current passwords have been breached by using the website [[Have I Been Pwned]](links.hibp.web)."
              ]
            },
            {
              "title": "Establish a password policy across your organization.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "When given the option, most people will choose basic or easy-to-remember passwords that are easily cracked. To make your organization’s passwords stronger, consider establishing a password policy. It should govern what your organization defines as a strong password or passphrase, how staff can generate passwords (we recommend a password manager for this purpose), where passwords should be stored (again, a password manager is our preference), and other rules governing password-related security, such as how to handle security questions on a work account."
              ]
            },
            {
              "title": "Enable a password manager.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Every online service your staff members use needs a unique password. Unfortunately, with many of us managing hundreds of different online services, it’s virtually impossible to remember so many unique passwords. A password management tool—also known as a password manager—can help organize our passwords, store them securely, and allow us to generate random, stronger passwords for our services. Some password managers can even share passwords with your staff for accounts that they all use regularly.",
                "Popular and easy-to-use password managers for staff include [[1Password Business]](links.1pass.biz) ([[which offers 50% discount for NGOs]](links.1pass.discount)), [[LastPass Enterprise]](links.lpass.web), [[Dashlane]](links.dlane.web), [[KeePassxc]](links.kpassxc.web), [[Keeper]](links.keeper.web), and [[Bitwarden]](links.bwarden.web). A technical assistance provider can help you determine the right password manager for your organization."
              ]
            },
            {
              "title": "Require two-factor authentication.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Just as we can strengthen our home security by adding an alarm system and other measures, we can strengthen our online accounts in the event that someone does gain access to our passwords. This process is known as two-factor or multi-factor authentication and requires something you know (your password) in combination with something you have (an authentication code or tool).",
                "We recommend enabling two-factor authentication for every online service that your organization uses. Using a site such as twofactorauth.org, in combination with an outside security provider, can help your staff  enable two-factor authentication quickly and efficiently on most services."
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your organization has taken steps to strengthen your password processes. With minimal effort, you can further improve your security footing."
              ]
            },
            {
              "title": "Use an authenticator app or token.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "When first enabled, most two-factor authentication services use SMS, or text, messages to send the codes your staff  will need to access their accounts. However, because SMS messages are easily intercepted and manipulated, this isn’t the most secure way to send authentication codes. Instead, we recommend switching from SMS to either an authenticator app that will run on your staff ’s smartphones or, for an even more secure solution, a hardware token that plugs into the physical computer’s USB port. We recommend [[Authy]](links.authy.web), [[Google Authenticator]](links.google.auth), and [[Microsoft Authenticator]](links.ms.auth). Reputable hardware tokens include [[Yubikey]](links.yubico.key), [[Solo Key]](links.solo.key), and [[Titan Key]](links.titan.key)."
              ]
            },
            {
              "title": "Strengthen your password policies.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Even the strongest password policies have to work with your staff’s workflow. Review your existing policies and determine areas that can be improved and made stronger and clearer. For example, how should staff handle a situation when they are locked out of their account or lack the needed two-factor authentication credentials? Clarifying these steps can help reduce risk, particularly when staff are traveling, of inadvertently allowing an attacker into your system.",
                "You will also want to take a look at your organization’s password policies across work devices. For example, local administrators on your work devices should be able to reset passwords themselves at regular intervals, such as every 180 days. A technical assistance provider can help you walk through your existing policies and find areas for improvement."
              ]
            },
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Instituting password managers and enabling two-factor authentication on individual accounts will greatly improve your organization’s security. Working with a technical assistance provider, you can take these efforts one step further through an organization-wide setup. Find out more below."
              ]
            },
            {
              "title": "Use single sign-on throughout your organization.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "By instituting a comprehensive or single sign-on (SSO) system, you’re improving both your staff’s workflow and their security. SSO requires your staff to use the same username, password, and two-factor authentication for all accounts they use for work. The system also gives an administrator greater control over security preferences, as well as the ability to more closely monitor staff usage of work accounts.",
                "SSO can be complicated to set up, especially for a large organization with established security protocols, but a technical assistance provider can help. We recommend SSO systems [[Duo]](links.duo.web) and [[Okta]](links.okta.web). The [[Advanced Protection Program from Google]](links.google.applan) can help establish a similar system for high-risk users. Just remember that to be effective, all accounts within your organization that require a log-in need to be governed by SSO.",
                "The reason that SSO is more secure than using hundreds of different accounts is because it lowers your “attack surface.” Rather than having several different accounts and passwords for an attacker to target, SSO puts all your accounts behind a single gate, usually with a high level of protection. Most SSO providers also require two-factor authentication for an added layer of security, as well as oversight by an administrator who can deactivate accounts as needed."
              ]
            },
          ]
      }
    },
    "system-updates": {
          "section": "Device and Account Security",
      "title": "Updates",
      "general": {
          "why": [
            "By not updating our software and operating systems, we are leaving ourselves vulnerable to unnecessary risks. Luckily, updates don’t have to be time-consuming and annoying. Enabling automatic updates, establishing master administrator accounts for manual updates, or even pushing updates to devices can all be done with a little help from a technical assistance provider. "
          ], // explanation of what this means
          "eg": [
            "The ADE Worldwide finance staff  consists of three members and a manager based in Washington, DC. As busy professionals, they are juggling financial oversight of a major global nonprofit. When they see a pop-up alert on their devices reminding them to update their accounting software, they generally ignore the notification and continue working. Unfortunately, a security flaw in their accounting software poses a risk to their systems unless it is updated, so ADE management requires the staff to enable automatic updates on their software moving forward. Then, they add that requirement to their updates policy to ensure staff continue following this best practice."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "The software that organizations rely on for their work relies on updates to run smoothly and securely. Yet for many office workers, pop-up boxes asking to install updates are an annoyance to be ignored, not a vital part of their workflow. Luckily, you can take steps to make updates a more regular part of your organization’s technology use."
              ]
            },
            {
              "title": "Make sure that staff enable automatic updates.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "One of the most effective and least time-consuming ways to update software is to automate the process. Most software allows users to select an automatic update option, which will force the software to install available updates and restart as needed. We would recommend making sure that all staff members enable this option on all available software and send an email to their supervisors confirming they have done so."
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff has enabled automatic updates on their software, which is a key step toward a more secure workflow. But what happens if you have many different work devices, all running different versions of different software platforms? It’s easy for employees to overlook a particular piece of software, leaving the organization vulnerable. Here’s how to respond."
              ]
            },
            {
              "title": "Manually install updates as needed.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "If you’re concerned that your staff may be overlooking essential updates on their systems, work with a technical assistance provider to create a master administrator account on all work devices. Then, when the devices are not being used, such as after work hours, manually install all updates as needed using the administrator account."
              ]
            },
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "When your organization is growing or spreading across several offices in different regions or countries, it may no longer be feasible for IT staff to manually install updates or to rely on your employees to enable automatic updates. Instead, you may want to consider:"
              ]
            },
            {
              "title": "Pushing updates as needed to work devices.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "For large organizations with several offices, using device management software can allow your IT department to “push” updates to work devices without having to be physically present in the office. This can ensure that critical updates reach work devices around the world while giving your organization more hands-on management of software and security. Apple supplies [[their own device management software]](links.apple.management), while Google provides a [[similar service]](links.google.management) through their G Suite platform. You may be able to use an open source alternative such as [[Miradore]](links.miradore.web).",
                "You can also configure your internal systems to prevent access to users who are running older versions of operating systems and software."
              ]
            },
          ]
      }
    },
    "op-continuity": {
          "section": "Device and Account Security",
      "title": "Operational Continuity",
      "general": {
          "why": [
            "Disasters and crises aren’t always predictable. That’s why we recommend that your organization invest time now in creating plans to make sure you can continue operating even when situations drastically change. This type of planning isn’t limited to natural disasters, either, as illness, conflict, or simply a flooded office can all derail your staff’s ability to work effectively."
          ], // explanation of what this means
          "eg": [
            "ADE Worldwide works with local farming communities in rural parts of Colorado, Utah, and Wyoming. During wildfire season, it’s not uncommon for staff to temporarily relocate from their offices to safer locations away from zones that are susceptible to the fires. After a few years of this cycle, ADE management realizes they need to better support these offices during these seasonal crises. They implement an incident response plan and alternate communication channels to be used when fires break out."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "None of us want to experience a device theft, fire, flood, natural disaster, or pandemic. But crises do happen, and organizations that prioritize planning and continuity are better prepared when disaster strikes. To get started, we recommend the following step."
              ]
            },
            {
              "title": "Conduct a drill to plan for worst-case scenarios.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "There's no better time to plan for a crisis than before it takes place. A drill can help you do so. The level of complexity is up to you, but you should focus on how your organization would respond to a single threat, such as an Internet shutdown, inability to get into the office, or a natural disaster. Working with your managers, assess how your organization would respond to such a threat, making sure to identify any weaknesses or vulnerabilities that come up during the drill."
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Once you have a sense of the risks that your organization faces, you can begin to plan for crises and disasters. Ensuring that your plans are documented and accessible to your staff is your top priority, followed by communicating during a difficult moment."
              ]
            },
            {
              "title": "Create incident response and \"rainy day\" plans.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "In a crisis, individuals tend to perform better when they can follow a clear, step-by-step checklist. Take time now to create incident response plans for particular threats, such as a natural disaster or Internet outage. From there, you can create a “rainy day” plan that allows you to keep working even in difficult conditions. A security provider can help you with this planning phase."
              ]
            },
            {
              "title": "Set up an alternate communication channel.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "In an emergency, the normal communication channels that your organization relies on, such as Slack and email, may not be available. Consider creating an account with a different service, such as encrypted email provider [[ProtonMail]](links.pmail.web) or encrypted messenger [[Threema]](links.3ma.web), to use during a crisis. Make sure to practice logging in and using these accounts to communicate during drills every three to six months."
              ]
            },
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Now that you have plans in place for individual crises, spend time focusing on what your staff needs to continue their work during a difficult moment. This can include technical solutions as well as support for their emotional well-being and stress level."
              ]
            },
            {
              "title": "Develop a modified work schedule for crises.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "During stressful moments, understand that your staff may not perform at the same level as they would normally. Consider requiring fewer work days each week to avoid burnout and provide resources for their emotional well-being. Investing in your staff demonstrates solidarity during a difficult time, improves organizational security, and encourages staff to take much-needed breaks."
              ]
            },
            {
              "title": "Introduce alternatives to physical meetings.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "When staff can’t meet in person, productivity can sometimes dip. While using popular videoconferencing platforms is ideal for standard meetings, consider a more secure and end-to-end encrypted alternative for sensitive staff  meetings, such as [[Cisco Webex]](links.cisco.webex), Zoom or Signal."
              ]
            },
            {
              "title": "Try a secure collaborative platform.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Slack and other collaboration tools are useful for everyday office communications and nonsensitive information and projects. For more sensitive projects, consider an encrypted collaboration platform such as Mattermost, Element or Semaphor. These platforms sometimes have a slightly steeper learning curve and may require technical assistance to set up, but they provide a much higher degree of security."
              ]
            },
            {
              "title": "Develop remote work guidelines.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "When staff are using work devices outside of the office, consider putting together easy-to-follow guidelines on remote work. Consult with a technical assistance provider to determine the level of access a staff member should have to their work device. For example, most organizations will want to restrict staff from installing personal software on their work devices."
              ]
            },
          ]
      }
    },
    "third-party": {
          "section": "Device and Account Security",
      "title": "Third-Party Services",
      "general": {
          "why": [
            "Increasingly, we rely on third-party services such as social media platforms and cloud-based software for much of our workflow. And while these tools can be tremendously useful for our work, they also carry significant risks and drawbacks. Understanding how to manage third-party services properly can keep your organization safer and your staff more informed about how they should carry out their work."
          ], // explanation of what this means
          "eg": [
            "Staff at the ADE Worldwide office in Honduras are outspoken about the threat facing the small farming communities they represent. This has caught the attention of several vocal landowners, who feel that the organization is biased in its advocacy. As a result, ADE experiences a wave of online harassment to its Honduran-linked social media accounts. To help avoid any further risks to their staff, ADE management in Honduras enables two-factor authentication across their social media channels and removes personal information about staff from the website."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Every day, organizations rely on third-party services and platforms to get work done, from social media services such as Twitter and Facebook to software-as-a-service (SaaS) tools such as Adobe Creative Suite and Salesforce. Yet third-party services can also be entry points for misinformation, disruption, and cyberattacks. This is a particular risk for social media platforms, which have become frequent targets for manipulation and harassment."
              ]
            },
            {
              "title": "Create a public and private organizational account on social media platforms.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "On social media, verification is essential. An account that claims to represent your organization can sow misinformation, mislead your community, and discredit your efforts. To help prevent this risk, create both a public and private account for your organization. If your public account is compromised or attacked, your private account can issue public statements and clarifications. Most social media platforms allow dual accounts, although Facebook may be more restrictive due to its “real name” policy, which requires users to use a verifiable name.",
                "Nonetheless, Facebook has extended some special permissions for certain types of accounts, such as [[accounts belonging to journalists]](links.fb.journos).",
                "In addition to dual accounts, you will want to make sure that two-factor authentication and other security features are enabled on all third-party accounts, as well as making sure your staff understands privacy settings on social media, such as turning off location data."
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Now that you’ve taken steps to decrease misinformation risks, you can further lock down your social media accounts to prevent unauthorized access or takeover. Here are two steps to help with that process."
              ]
            },
            {
              "title": "Verify your organization on social media.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Apply for the checkmark verification on all official social media accounts used by your organization. This requires an application process with the individual social media platforms, but indicates a level of trust and authenticity to the public."
              ]
            },
            {
              "title": "Make sure you have several administrators.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "All official social media accounts should have several staff members with the highest level credentials. If one user leaves the organization, the remaining ones can reset access to the account and make other changes as needed. Additionally, all high-level users should use two-factor authentication on their accounts, which may require a shared authentication setup process. A technical assistance provider can help you do so using the quick response (QR) code the platform provided during setup.",
                "If your staff uses social media management tools such as TweetDeck, Hootsuite, or Sprout, make sure they use a work-administered account for all work-related social media profiles.",
                "It’s also wise to institute an offboarding process for departing staff who manage social media for your organization, including changing passwords upon their departure."
              ]
            },
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your organization has made good progress in securing your accounts, including enabling two-factor authentication and establishing multiple administrators. Here are two additional steps to further secure third-party services."
              ]
            },
            {
              "title": "Make sure you can delete or decommission your account.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "When a staff member leaves your organization or temporarily becomes unavailable, it’s important to be able to access and decommission any third-party services they may have used. While this is important for all services, it’s particularly critical for social media platforms, which can often contain sensitive communications or interoffice messaging. Ensuring that staff members have needed login credentials and other access can help reduce the risks of leaving these accounts unattended."
              ]
            },
            {
              "title": "Use defensive tactics against doxxing.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Doxxing, or the practice of releasing personally identifiable information on the Internet, can be personally and professionally challenging. Luckily, there are several anti-doxxing measures your organization can take to lessen this risk. These include proactively searching the names of your staff on popular search engines and removing the names of staff members from data brokerage sites using services such as [[Abine DeleteMe]](links.deleteme.web) and [[Norton LifeLock]](links.lifelock.web).",
                "Other defensive measures you can take to strengthen staff accounts include establishing trusted backup access to third-party accounts in case of a staff member’s illness, imprisonment, or death, and claiming similar-sounding social media account names using a service such as [[DNSTwist]](links.dnstwist.web).",
              ]
            },
          ]
      }
    },
    "vp-network": {
          "section": "Device and Account Security",
      "title": "Virtual Private Network (VPN)",
      "general": {
          "why": [
            "A VPN enables us to have a greater degree of privacy as we do our work online. Yet selecting and implementing the right VPN isn't always the easiest decision. Work with a technical assistance provider to determine which VPN service is right for you and to better understand the advantages and disadvantages of using this software."
          ], // explanation of what this means
          "eg": [
            "The ADE Worldwide office in Berlin often conducts sensitive research into land rights and property records around the world. The research department often uses Tor when browsing sensitive topics, while the entire office uses a specific VPN.",
            "Eventually, managers in the Berlin office realize they need even more control over their browsing data and decide to build their own VPN using Google’s Outline service with the help of a local technical assistance provider."
          ] // example scenario
      },
      "results": { // contains result text for this category
        "below":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your organization may have considered a virtual private network (VPN), but was unsure about which to choose. Alternatively, perhaps this is the first time you’ve ever heard of a VPN. Either way, VPN usage is becoming more popular across the web due to concerns over data privacy and protection. In general, we recommend your organization use a VPN. Here's how to get started."
              ]
            },
            {
              "title": "Understand the advantages and disadvantages of VPN usage.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "When you browse the Internet without a VPN, your Internet service provider (ISP) can see all the websites you visit, as well as the date and time you visit them. Increasingly, the websites themselves also track high levels of your data as you browse.",
                "When you use a VPN, you are blurring some of the information that your ISP can collect, as well as some information websites track. You are giving that information to your VPN provider, who is encrypting your connection to the Internet.",
                "Depending on your VPN provider, this could be safer, riskier, or as risky as giving your data to your ISP. Generally, if you choose a reputable paid VPN provider, your data are more secure than browsing without a VPN. And if you pay for your VPN under your organization’s name, you will have added privacy—even more so if you pay for the service using an alias.",
                "Your technical assistance provider can help you with this step. It is also important to note that some countries and regions have made VPN usage illegal, so be aware of your local restrictions before selecting a service. You can read more about VPN use in this article from Consumer Reports."
              ]
            },
            {
              "title": "Evaluate your budget and choose a VPN accordingly.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "VPNs come in all varieties and price points. Luckily, most VPNs are reasonably priced. We discourage most organizations from relying on an entirely free VPN because of concerns about your data security and privacy. There are a small number of trusted free alternatives, including [[Psiphon]](links.psiphon.web), [[Lantern]](links.lantern.web), and [[BitMask]](links.bmask.web). Many VPN companies, including [[Tunnel Bear]](links.tbear.web) and [[Mullvad]](links.mvad.web), also provide free annual subscriptions to deserving organizations, but these are best left for groups with little to no financial resources. You can consult with a technical assistance provider for advice on choosing a VPN and read articles like [[this New York Times Wirecutter guide]](links.nyt.vpns) for more details."
              ]
            },
            {
              "title": "Understand the difference between “incognito mode” and VPN usage.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Despite some disclaimers within the browser, incognito or private browsing mode remains confusing to many Internet users. This mode opens a new window in your browser that does not save your web searches or site visits. While this may seem like your browsing history is fully secure, your ISP can still track the sites you visit, although your browser does not save your history. A VPN, by contrast, prevents your ISP from collecting that data but may collect that data itself.",
                "While incognito or private browsing mode prevents in-browser tracking by websites, using a VPN alone does not. Understanding these distinctions is important for your staff as they choose which steps to take during their everyday work."
              ]
            },
          ],
        "ok":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your organization understands the advantages and disadvantages of VPN services and has chosen a service that works for your needs. If you’re using a standard commercial VPN, there may be other, slightly more complex options that could improve your security."
              ]
            },
            {
              "title": "Consider a more technical alternative.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Creating your own VPN can be technically complicated but allows you to better control your own data and privacy. Rather than relying on a commercial provider, a build-your-own VPN allows you to better customize a specific tool to meet your security needs.",
                "Google offers [[a service called Outline]](links.google.outline) which allows organizations to build their own VPN for approximately US $10 a month. Outline works well for most contexts, including areas where VPN use may be noticed or blocked. (It is not a solution for countries or regions where VPNs are banned.) Alternatively, a slightly more complex option is [[Algo by the security firm Trail of Bits]](links.trailbits.algo), which helps organizations set up their own VPN server.",
                "While not a VPN, a tool such as [[Firefox DoH]](links.mozilla.doh) can also make your web browsing safer and can be used in conjunction with your existing VPN service. You will probably need to work with a technical assistance provider to enable any of these solutions for your organization."
              ]
            },
          ],
        "exceeds":
          [ // contains recommendations for this level
            {
              "title": "", // title of this recommendation
              "content": [ // explanation of this recommendation
                "You’ve invested time, money, and effort into finding the right VPN solution for your organization. Now, you can extend your use of private networks to safeguard access to your website and your online research."
              ]
            },
            {
              "title": "Create “acceptable” and “block” lists.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Most VPN services give users the option to generate static Internet protocol (IP) addresses for users. This means that a staff member at your organization can use the same IP address—the identifying information associated with their Internet connection—every time they use that VPN. This allows your administrators to create “acceptable” lists of users from a range of pre-approved IP addresses that can take certain actions, such as visit the back end of your website or your organization’s Intranet. All others would be placed on a “block” list that would not grant them access to these sensitive parts of your system. A technical assistance provider can help you set up such lists with your VPN of choice."
              ]
            },
            {
              "title": "Understand when to use Tor.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "The [[Tor browser]](links.tor.browser) has been a popular choice for journalists, researchers, and advocates who are concerned about their online activities being tracked by ISPs, governments, and other organizations. Tor provides a higher degree of privacy and anonymity than a standard browser or a VPN because it bounces the user’s traffic through a series of servers, making it much more difficult for an adversary to determine where the traffic originated. You can read more about how Tor works at the Tor Project website.",
                "Many organizations use Tor for sensitive research only, as the browsing experience can be slower than a standard browser and there is a learning curve to use the tool properly. Nonetheless, Tor is a trusted, reputable option for anonymous browsing. Talk to your technical assistance provider about how to incorporate Tor into your workflow."
              ]
            },
          ]
      }
    }
  }
};