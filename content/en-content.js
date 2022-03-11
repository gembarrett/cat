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
    },
    {
      "area": "data-security", // which score-collection category is this
      "title": "Data Security",
      "score": "Your organization has scored [[X]] points in the data security category.", // explanation of what this means
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
      "results": [ // contains result text for this category
        {
          "assess": "below", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "Consider what’s valuable and how to protect it.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Data are the lifeblood of our digital systems. Your organization’s data contain incredible amounts of information—some trivial (such as your lunchtime calendar reminder) and some vital (such as the names and home addresses of your staff).",
                "Many people across organizations have access to tremendous amounts of data, often more than they realistically need to do their jobs properly. An attacker, however, can do significant damage when they gain such access. One effective way to reduce your digital risk is to also reduce access to unnecessary data within your organization.",
                "If you’re just getting started managing your data, it’s helpful to take two steps upfront."
                {
                  "type": "title",
                  "heading": "Understand the connection between retention and protection.",
                },
                "Remember this rule of thumb when it comes to managing your data: \"if it’s not there, they can’t steal it.\" For example, if your colleague doesn’t need 10 years’ worth of tax data on their laptop, find a safer place to store that information. Consider whether everyone in your organization needs access to a decade’s worth of emails or the entire staff  directory and regularly delete data you don’t need any more. Determining which data is valuable and requires additional protection will help you take appropriate next steps.",
                {
                  "type": "title",
                  "heading": "Conduct a data categorization exercise."
                },
                "If you are working with a technical assistance provider, you may be able to conduct this exercise on your internal system. If not, you can also conduct a tabletop version of this exercise with your staff. Consider a blunt but effective measure: list the key data sources within your organization and determine who actually needs access to them. These could include email archives, staff directories, financial records, and project details. To access this data moving forward, staff  members need to specifically request the data they need. You can then determine whether they should be granted access permanently, for a 30-day window, or even for a supervised 24-hour block of time.",
                "While these steps may seem challenging, changing the status quo around data access within your organization can greatly reduce the risk that a genuine mistake can lead to a data breach."
              ]
            },
          ]
        },
        {
          "assess": "ok", // assessed level, based on score
          "recs": [ // contains recommendations for this level
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
          ]
        },
        {
          "assess": "exceeds", // assessed level, based on score
          "recs": [ // contains recommendations for this level
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
      ]
    },
    {
      "area": "web-security", // which score-collection category is this
      "title": "Website Security",
      "score": "Your organization has scored X points in the website security category.", // explanation of what this means
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
      "results": [ // contains result text for this category
        {
          "assess": "below", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "",
              "content": [
                "For many organizations, your website is both your front door and your face to the world. As a result, people who want to harm your work may target your website for defacement, hacking, or other types of attacks. Luckily, there are some basic steps you can take to strengthen your web presence. Here are three measures you can take, with assistance from a technical assistance provider, to improve your website security."
              ]
            },
            {
              "title": "Reduce your risk of DDOS attacks.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "If someone dislikes your organization’s work or wants to harm your efforts, one strategy they may use is to temporarily force your website offline. This is often accomplished through a distributed denial of service (DDOS) attack, in which attackers overwhelm your website with visits to temporarily shut it down. A qualified technical assistance provider can help you reduce your vulnerability to these attacks by installing a content delivery network (CDN). A CDN delivers the content of your website from several different locations across the web, reducing your dependence on a single point of failure that can be crippled by a DDOS attack. You can read more about these attacks in [this article by CloudFlare](links.cflare.ddos). [CloudFlare’s free Galileo](links.cflare.gal) and Google’s free [Project Shield](links.google.shield) are both ideal CDNs for civil society organizations, as is [Equalite’s Deflect](links.equalite.deflect).",
                "String 2",
              ]
            },
            {
              "title": "Understand and implement HTTPS.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "When you visit a website, you may see the letters “http” in front of the web address. This allows the site to communicate and provide directions to your web browser. In the early years of the Internet, HTTP was the default form of communication between websites and browsers. Now, a more secure form of communication, known as HTTPS, provides greater protection for users visiting your website. This means that if they search for sensitive information or submit information to you via a form, their data are encrypted from outside eyes.",
                "Increasingly, popular search engines such as Google are flagging sites that do not use HTTPS as insecure, which also reduces the number of people who are comfortable visiting your site. You can read more about HTTPS in [this article by CloudFlare](links.cflare.https).",
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
          ]
        },
        {
          "assess": "ok", // assessed level, based on score
          "recs": [ // contains recommendations for this level
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
          ]
        },
        {
          "assess": "exceeds", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": "",
              "content": [
                "Now that you have HTTPS and a CDN enabled, consider working with a technical assistance provider to more closely monitor how your website is being used. Here are three key steps you can take to remain watchful."
              ]
            },
            {
              "title": "Enable rate limits.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "People who want to do harm to your organization will use any available channels to slow down or hamper your operations. This can include useful features on your website, such as online contact forms or other tools, which they can overwhelm with automated requests. To help lessen this risk, you can work with a technical assistance provider to enable rate limits, which can reduce the number of attempts an individual user can make on a particular part of your website. You can read more about how rate limits can be used in [this article from Google](links.google.rlimits)."
              ]
            },
            {
              "title": "Harden your content management system.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "Using a content management system (CMS) can save you time and effort when updating your website. But these systems require users to log into the website from a live login page. Unless you take proactive steps, an attacker can access this login page, determine which CMS you are using, and attempt to force their way inside.",
                "There are steps you can take to mitigate this risk with varying degrees of technical complexity. One of the easiest steps is to enable [two-factor authentication](links.2fa.web) on your website CMS, which requires an additional step to log in. You can also work with a technical provider to enable a single-sign-on (SSO) system that allows your staff  members to use one master login across the organization. This improves both usability and security, although it can be complicated to set up. Last, you can work with a provider to limit access to the login page to only a pre-approved list of users, which would require the use of a virtual private network (VPN).",
                "There are other steps you can take to make your CMS more difficult to attack. Many CMS platforms will support third-party applications that can help strengthen their security. For example, [WordPress](links.wfence.web), one of the world's most popular CMS platforms, supports WordFence, a third-party intrusion detection and prevention system.",
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
      ]
    },
    {
      "area": "office-security", // which score-collection category is this
      "title": "Office Security",
      "score": "Your organization has scored X points in the office security category.", // explanation of what this means
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
      "results": [ // contains result text for this category
        {
          "assess": "below", // assessed level, based on score
          "recs": [ // contains recommendations for this level
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
          ]
        },
        {
          "assess": "ok", // assessed level, based on score
          "recs": [ // contains recommendations for this level
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
                "Remember that video monitoring systems may not be appropriate for every organization. If you choose to use a video system, make sure to use systems that balance the need for security with the need for privacy, such as [Haven](links.gproj.haven) by the Guardian Project. Video feeds should be encrypted to protect your organization further. Both [Surveillance Station](links.synology.station) by Synology and [Haicam](links.haicam.web) can support encrypted video.",
                "Organizations that use video-based security systems should remember that video surveillance has an effect on your staff and visitors. Workers should always know where cameras are placed and you should designate a \"no camera\" zone where staff can congregate without being recorded."
              ]
            }
          ]
        },
        {
          "assess": "exceeds", // assessed level, based on score
          "recs": [ // contains recommendations for this level
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
      ]
    },
    {
      "area": "messaging-collab", // which score-collection category is this
      "title": "Title Of This Evaluation Area",
      "score": "Your organization has scored [[X]] points in the messaging and collaboration category.", // explanation of what this means
      "general": {
          "why": [
            "Encrypted communication can help keep your organization’s messages, data, and activities more secure. Implementing encrypted messaging and collaboration tools also instills the values of compartmentalization, which helps ensure that your organization’s sensitive data are not in a single system.",
            "Encrypted communication is most effective when users understand how best to use advanced settings such as disappearing messages and data retention. You may want to consider formally documenting your organization’s recommendations in your security policy so users can begin using these tools quickly and easily."
          ], // explanation of what this means
          "eg": [
            "ADE Worldwide staff throughout Chile use unencrypted communications to reach each other in a large network of rural offices. These communications include sensitive information such as project details and login credentials for office accounts. When an influential landowner who has opposed ADE’s work takes over a national corporation, ADE managers realize they need to take added steps to keep their communication more secure. As a result, they implement an encrypted messaging service throughout the offices in the country."
          ] // example scenario
      },
      "results": [ // contains result text for this category
        {
          "assess": "below", // assessed level, based on score
          "recs": [ // contains recommendations for this level
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
                "Educating your staff members on how encryption works is a good first start to introducing this concept. The Electronic Frontier Foundation’s \"[Communicating with Others](links.eff.comms)\" in its Surveillance Self-Defense curriculum is useful reading. If you’re using a dedicated mobile phone number for work, consider switching to a  voice-over Internet protocol (VOIP) number that connects via the Internet. You can find such numbers through services such as Google Voice or Skype, allowing you to avoid having to use a country-specific SIM card in your smartphone. Using a VOIP number can also protect you from threats including cell site simulators, also known as [Stingrays](links.aclu.stingrays), and vulnerabilities in cellular technology, such as [SS7](links.guardian.ss7) attacks.",
              ]
            },
            {
              "title": "Begin introducing encrypted alternatives.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "To help your staff become accustomed to encrypted communications, you shouldn’t expect them to use this new technology overnight. Instead, introduce encrypted platforms gradually, perhaps over 8 to 10 months, before making them mandatory. You may want to publicly praise staff members who are early adopters. Those who are resistant can become members of a working group dedicated to adopting the tools, making them more likely to use them.",
                "At the time of writing, a few encrypted communication tools we recommend are the messenger applications [Signal](links.signal.web) and [Wire](links.wire.web). You may also want to consider a self-hosted workplace messenger like [Mattermost](links.mmost.web) or the [collaboration tool Element](links.element.web) as an alternative to popular software such as Slack. A technical assistance provider can help you enable any of these tools, or find alternatives.",
                "If you work in a highly regulated space, such as legal advocacy, you may be required to keep records of your communications. In this case, remember to take screenshots of any encrypted messaging or collaboration tools, especially if the messages are set to disappear."
              ]
            },
            {
              "title": "Understand when to use which platform.", // title of this recommendation
              "content": [ // explanation of this recommendation
                "At first, your staff members don’t need to use the encrypted platforms for every communication. Instead, reserve the use of encrypted tools only for your most sensitive work. This will also help staff members associate encrypted tools with a higher level of security and privacy that isn’t available with standard tools. "
              ]
            },
          ]
        },
        {
          "assess": "ok", // assessed level, based on score
          "recs": [ // contains recommendations for this level
            {
              "title": ""
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
          ]
        },
        {
          "assess": "exceeds", // assessed level, based on score
          "recs": [ // contains recommendations for this level
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
