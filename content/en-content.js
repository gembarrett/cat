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

var rs = [
  "title": "Evaluation & feedback",
  "reusables": {
    "below": {
      "title": "Below",
      "content": "This puts it below our recommended security level for civil society organizations. Don’t worry! We’ve put together some recommendations to improve your organization’s cybersecurity."
    },
    "ok": {
      "title": "OK",
      "content": "This means it has a reasonable level of security in this area. Good job! There are still areas for improvement, so we’ve put together some recommendations to improve your organization's cybersecurity even more."
    },
    "exceeds": {
      "title": "Exceeds",
      "content": "This means it has a high level of security in this area. Good work! There are still areas for improvement, so we’ve put together some recommendations to improve your organization’s cybersecurity even more."
    },
    "general": {
      "what": "What We Recommend:",
      "why": "Why We Recommend This:", // title for each content.general.why below
      "eg": "A Fictional Example:" // title for each content.general.eg below
    }
  },
  "content": [
    {
      "area": "risk-threat", // which score-collection category is this
      "title": "Risk Analysis and Threat Assessment",
      "score": "Your organization has scored [[X]] points in the risk analysis and threat assessment category.", // explanation of what this means
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
          ] // example scenario
      },
      "results": [ // contains result text for this category
        {
          "assess": "below", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "Determine your threat model.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "When thinking about the risks that face your organization in the digital world, it’s helpful to think about all the risks that your staff  faces outside of cybersecurity, including physical, legal, and organizational challenges. After all, many digital threats begin in the “offline” world, such as risks posed by governments, law enforcement, criminal groups, and lawsuits.",
                "Documenting and analyzing your risk is a process known in cybersecurity as “threat modeling.”, which allows you to focus on the threats that are most feasible and realistic. If you’re just getting started with cybersecurity for your organization—or refreshing your approach after an attack—start with your threat model. This process will not only identify cybersecurity risks but also help you find vulnerabilities across your organization. The Electronic Frontier Foundation provides a step-by-step guide on threat modeling [here](links.eff.tmodel). Access Now Helpdesk offers an easy guide to threat models with examples [here](links.an.tmodel)."
              ]
            },
            {
              "title": "Create a risk matrix.", // title of this recommendation
              "content": [ // explanation of this recommendation
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
                "This is very helpful for members of your organization to quickly see which risks are both most likely and most dangerous. The Electronic Frontier Foundation has a good model for a risk matrix in its threat modeling guide, which you can access [here](links.eff.matrix). Tactical Tech’s Holistic Security offers [additional reading](links.ttech.matrices) on these matrices."
              ]
            },
          ]
        },
        {
          "assess": "ok", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "Develop an incident response plan.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Working with your staff, develop a basic incident response plan. To do this, ask yourself what steps you would take if a particular threat occurred. Cybersecurity professionals often use risk frameworks, such as SANS Incident Response, [NIST Cybersecurity](links.nist.framework), ISO 27001, and the [MITRE ATT&CK Matrix](links.mitre.matrix), to identify common threats and determine the best way to respond. These advanced frameworks may not be relevant to your organization's needs at this point, but the basic framework below can help you begin to plan those steps.",
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
                "We have also developed [an incident response plan questionnaire](links.cat.irplan) to help guide your team in putting together an incident-specific plan."
              ]
            },
            {
              "title": "Understand how incident response phases work together.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "In cybersecurity, you can think of four stages to respond to an incident: prepare, detect, contain/eradicate/recover, and then process/learn.",
                {
                  "type": "title",
                  "heading": "Prepare:",
                },
                "The quote “Chance favors the prepared mind” is credited to Louis Pasteur. With that in mind, there are steps your staff can take before an incident to improve your organization’s resiliency. One of them is to ask yourself the following questions:",
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
                },
                "This phase occurs when your organization identifies what is happening and plans a path forward. To do this, consider the following steps:",
                {
                  "type": "ul",
                  "items": [
                    "As best you can, identify an incident while it’s occurring or shortly after it has occurred",
                    "Collect everything you can about the incident as soon as possible. Log dates and times, capture screenshots, record suspicious websites and links, stop using the device, and disconnect the device from the Internet (but don’t turn it off).", // TODO: find out if this should include subitem from 2nd sentence
                    "Make sure to notify your internal teams about the incident, but don’t forget that cybersecurity attacks can affect other organizations, too. If outside groups are affected, you should inform them as soon as possible."
                  ]
                },
                {
                  "type": "title",
                  "heading": "Contain/Eradicate/Recover:",
                },
                "This stage is actually made up of three steps.",
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
                },
                "This phase isn’t about blaming others, but rather reviewing how each phase unfolded and evaluating how your organization can improve the process and your future response."
              ]
            },
            {
              "title": "Find a security provider that you can afford.", // title of this recommendation
              "content": [ // explanation of this recommendation
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
          ]
        },
        {
          "assess": "exceeds", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "Run a tabletop exercise.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "It’s important to test your thinking about security by putting your organization through a simulated test. In the cybersecurity world, we call one of these tests a “tabletop exercise,” although your staff  doesn’t need to be physically gathered around a table to complete one. During an exercise, you can discuss how your organization would handle a hypothetical threat, step by step, and what areas still need to be improved. One idea is to write out scenarios of different incidents on index cards, drop them all in a box, and then schedule a few hours on your organization’s calendar to pull a few cards out to start the exercise.",
                "When you’re ready for your first tabletop exercise, here are key steps to get started. Some cybersecurity providers incorporate the [MITRE Corp.’s guidelines on tabletop exercises](links.mitre.tabletop).",
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
            },
          ]
        }
      ]
    },
    {
      "area": "docs-policy", // which score-collection category is this
      "title": "Documentation and Policy",
      "score": "Your organization has scored [[X]] points in the documentation and policy category.", // explanation of what this means
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
      "results": [ // contains result text for this category
        {
          "assess": "below", // assessed level, based on score
          "recs": [ // contains recommendations for this level
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
                "When you’re ready to create your first security policy, you can use the highly useful [SOAP tool](links.soap.tool) or the [SANS templates](links.sans.templates) to generate a policy through a series of step-by-step questions.",
                "Remember that your security policy is a living document—try to update it with new guidelines based on changing threats at least once per year."
              ]
            },
          ]
        },
        {
          "assess": "ok", // assessed level, based on score
          "recs": [ // contains recommendations for this level
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
          ]
        },
        {
          "assess": "exceeds", // assessed level, based on score
          "recs": [ // contains recommendations for this level
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
      ]
    },
    {
      "area": "internal-risks", // which score-collection category is this
      "title": "Internal Risks (Intentional or Unintentional)",
      "score": "Your organization has scored X points in the internal risks category.", // explanation of what this means
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
      "results": [ // contains result text for this category
        {
          "assess": "below", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "Do a check-up on your organization’s cybersecurity.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff members are vital to the mission of your organization. But sometimes, intentionally or unintentionally, their decisions and actions can put your organization at risk. This is especially true in today’s digital world, where a wrong click or a missed security setting can leave the entire staff vulnerable.",
                "One of the easiest ways of checking up on your cybersecurity is to assemble a basic checklist of security settings that your staff members can follow; such a checklist should be part of the onboarding process of any new staff member. Here are suggestions for Windows devices, and here are suggestions for Mac devices. Once they have completed the checklist, they can sign a certificate of completion that indicates they have taken basic steps toward compliance. Their supervisor can then also sign off that they have completed the checklist. These documents can then be stored in their employee file.",
              ]
            },
          ]
        },
        {
          "assess": "ok", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "Add clear language to employment agreements.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff members are proactive about monitoring their cybersecurity and understand the importance of complying with your organization’s security policy. They may periodically meet with supervisors to discuss their cybersecurity and complete required security checklists.",
                "You can start to incorporate cybersecurity into their job description. This helps emphasize that security is not just a part of their workflow but also a core responsibility for them as a member of your organization.One effective way to do this is to ensure that employment agreements have language about privacy and security that is clear, truthful, and easy to understand. We recommend including language about:",
                {
                  "type": "title",
                  "heading": "Data:",
                },
                "what responsibilities do staff members have with your organization’s data, and vice versa? Which categories of data can particular staff members access and which can they not access?",
                {
                  "type": "title",
                  "heading": "Terms of use:",
                },
                "what legal arrangements govern your staff members’ use of technology, particularly any software, hardware, or systems that your organization owns?",
                {
                  "type": "title",
                  "heading": "Acceptable use policy:",
                },
                "when staff members access your organization’s internal systems, what policies and guidelines must they follow?",
                {
                  "type": "title",
                  "heading": "Onboarding policy:",
                },
                "how are staff members expected to learn about and use your organization’s technology when they join the organization?",
                {
                  "type": "title",
                  "heading": "Offboarding policy:",
                },
                "what steps need to take place when a staff member leaves your organization?",
                "You may want to enlist a lawyer to help you draft this language. There may also be other sections that apply directly to your situation. Just remember: the goal here is to be clear and informative, not to overwhelm your staff with legalese. Try to keep employment agreements to one page if possible, including a checklist, and make sure they are signed by the staff members and supervisors."
              ]
            },
          ]
        },
        {
          "assess": "exceeds", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "Consider device management systems.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff regularly checks in with management about cybersecurity risks and has read and reviewed the cybersecurity requirements in their employment agreements.",
                "Even the most informed and engaged staff members can still make mistakes, however.That’s why we recommend finding a method for managing devices that is consistent with your organization’s values and goals. For example, software known as “device management” platforms can allow organizations to manage work devices remotely. While the convenience and increased security of device management tools is an advantage, remember that you must always balance security with a level of privacy for your staff.",
                "Device management software includes tools such as G Suite’s Google Devices, Apple’s Mobile Device Management, and [Prey](links.prey.web), which allow tracking and remote data erasure on devices, and solutions from companies including IBM, Citrix, and VMWare.",
                "A technical provider can also help you use these tools to force organization-owned devices to “comply” with security policies or restrict the ability for your staff to install their own software or change settings."
              ]
            },
          ]
        }
      ]
    },
    {
      "area": "training-support", // which score-collection category is this
      "title": "Staff Training and Support",
      "score": "Your organization has scored [[X]] points in the staff training and support category.", // explanation of what this means
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
      "results": [ // contains result text for this category
        {
          "assess": "below", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "Set expectations for security knowledge.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff members are passionate, driven, motivated, and hard-working. They may be experts in fields such as human rights law and voting advocacy. Most likely, however, they are not cybersecurity experts. And while it’s easy to assume that most people have a basic level of experience with technology, that’s not always the case.",
                "Instead of assuming that your staff understands the basics of cybersecurity, assume that you are starting with a blank slate. From here, you can take a series of effective steps:",
                {
                  "type": "title",
                  "heading": "Familiarize yourself with cybersecurity basics.",
                },
                "Excellent resources to get started include the Electronic Frontier Foundation’s [Surveillance Self-Defense curriculum](links.eff.ssd) and the [Data Detox Kit](links.ttech.detox) from Tactical Tech."
                {
                  "type": "title",
                  "heading": "Begin training.",
                },
                "Work with a cybersecurity provider, as needed, to conduct introductory “digital best practices” training for your staff.",
                {
                  "type": "title",
                  "heading": "Share your organization’s security history with staff.",
                },
                "In fast-paced organizations, it’s easy for generational knowledge about security incidents to disappear, leaving newer staff unaware of risk. Document this history as much as possible so your staff members are fully informed.",
                "Starting with introductory knowledge can ensure that all staff members are on an equal footing."
              ]
            },
          ]
        },
        {
          "assess": "ok", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "Introduce training in small bites.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff members are busy professionals. It’s important to remember that they will forget most of the content that they hear, read, or watch during training.",
                "That’s why repetition of key points in “small bites” is one of the most effective learning strategies for hard-working staffs. Begin by identifying the most critical behaviors, actions, and tools you need your staff to understand and implement.",
                "Then gradually introduce training sessions into your organization’s workflow. Perhaps an hour once a month is dedicated to reviewing cybersecurity basics, or maybe a weekly lunch break is converted into a practice session. Day-long training will disrupt workflow and lead to tired, overwhelmed staff members. Use smaller, bite-sized training sessions instead to keep material fresh and approachable."
              ]
            },
          ]
        },
        {
          "assess": "exceeds", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "Create a knowledge base.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "While live instruction, either in-person or online, is helpful for teaching big concepts, your organization can’t rely on training alone to enhance cybersecurity. Instead, you must create an institutionalized version of this knowledge that can be accessed by any staff member at any time.",
                "A good interim solution can be a basic online quiz accompanied by a 2- to 3-minute recap video to test the staff’s knowledge and refresh their memories.",
                "Alternatively, digital tools for learning—sometimes known as learning management systems, or LMS—are widely available. We like open-source options such as [Moodle](links.moodle.web) and [ILIAS](links.ilias.web) or commercial versions such as [LearnDash](links.learndash.web) (built for the content management system WordPress) or [Docebo](links.docebo.web).",
                "You may also want to consider a third-party learning platform like [Totem Project](links.totem.web) to help your staff practice their cybersecurity skills.",
                "You may need to work with a technical assistance provider to implement this tool, but the effort can pay dividends. A well-designed LMS can help you capture not only cybersecurity lessons but also help your staff answer time-sensitive questions without having to track down an instructor. Most LMS platforms provide a scoring mechanism, too, so you can map your staff’s progress."
              ]
            },
          ]
        }
      ]
    },
    {
      "area": "travel-security", // which score-collection category is this
      "title": "Travel Security",
      "score": "Your organization has scored [[X]] points in the travel security category.", // explanation of what this means
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
      "results": [ // contains result text for this category
        {
          "assess": "below", // assessed level, based on score
          "recs": [ // contains recommendations for this level
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
          ]
        },
        {
          "assess": "ok", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "Incorporate cloud storage.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Your staff members understand the risks posed by travel, and you’ve briefed them on your organization’s policies governing work travel. You may have even chosen to use dedicated travel-specific devices for your staff.",
                "Now, you can enhance the precautions that your staff members take when they travel. One of the most effective ways to protect against device theft or damage while traveling is to store data in the cloud. While there are many cloud storage services to consider, we recommend using encrypted ones when traveling. These services include [SpiderOak One](links.soak.web), a US-based provider, and [Tresorit](links.tresorit.web), a Swiss provider. Self-hosted solutions include [NextCloud](links.ncloud.web) and [OwnCloud](links.ocloud.web). Alternatively, you may use a tool such as [Cryptomator](links.cmator.web) to encrypt your files locally and store them in your nonencrypted cloud storage service, such as Dropbox or Google Drive. (Files on Google Drive and other popular services are encrypted but can be accessed by the cloud storage provider in response to legal requests.)",
                "You may need a security provider to help with this process and to select the right cloud service for you."
              ]
            },
          ]
        },
        {
          "assess": "exceeds", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "Source travel-specific devices and develop a policy for their use.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "You’ve made good progress on keeping your staff and your data safe during work-related travel. To further improve your travel security, you should consider using dedicated travel-specific devices. This will require both an investment of time and money, as well as the creation of new policies around the safe use of these devices. Used effectively, however, travel devices can greatly reduce risk, even if they fall into the wrong hands.",
                "Rather than having staff use their personal or work devices while traveling, consider using dedicated travel devices instead.",
                "To start, you will want to identify the types of devices that your staff members use in the field. If they typically need a laptop while traveling, consider a reliable but inexpensive alternative like a [Chromebook](links.google.cbook).",
                "Once you’ve identified the types of devices appropriate for your organization, you will need to develop a clear policy and process for handling travel devices before, during, and after their use. This will likely include a “pre-flight” process to prepare the device and a return check-in with the staff  member who used the device to learn about any challenges they may have had in the field. You will also need to wipe the device clean before and after travel.",
                "Each of these device management phases can be time-consuming, so they should be spelled out in detail and written down. You may want to work with a security provider to implement this process smoothly.",
                "Alternatively, you can ask a security provider to help you set up a “virtual machine.” This allows you to use your work computer to access another separate device through a web browser and software such as [VMWare Work Station Player](links.vmware.player) (Linux/PC),  Fusion (Mac), or [VirtualBox](links.vbox.web). This will require an Internet connection, so it may not be suitable for every type of field travel. Ask a provider whether this is a good option for you."
              ]
            },
          ]
        }
      ]
    }
  ]
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
