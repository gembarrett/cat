# Guide to the CAT content structure

## content/_content.js
Language files are kept in /content and named according to the language, for example en-content.js is the English language version of CAT's content. 

Each file should contain the following:
* Survey content is contained in the (language)_qs variable of each content file (e.g. en_qs)
* Results & Recommendations content is held in the (language)_rs variable (e.g. en_rs)
* All other content, including button labels, introduction text and home page content, can be found in the (language)_oc variable (e.g. en_oc)

### Survey content structure
The survey has three sections, each of which contains subsections, questions and answers. The structure of a section and its child subsections is described below, using an example from the Understanding Risk section to demonstrate:

```json
"section": "understand-risk"    // each section has a two-word hyphenated reference that is used through the code
"title": "Understanding Risk",  // the title is used through the display
    "subs": [   // the subs array contains multiple data objects containing the section's subsections
        {   
          "name": "your-org",   // the subsections also use two-word hyphenated names for all in-code references
          "subtitle": "About Your Organization",    // the subtitle for each subsection is used in the display
          "questions": [ // the questions array contains one or more data objects containing the subsection's questions
            {
              "q": "How would you best describe your approach to cybersecurity?", //    the question to be displayed to the user
              "area": "risks",  // used when building the survey
              "required": "true",   // is this question required or optional
              "type": "radio",  // which type of input should be used for these answers
              "answers": [ // the answers array contains multiple data objects containing the question's answers
                {
                  "a": "We have a staff member who manages cybersecurity as part of their job.",    // answer to be displayed to the user
                  "pts": 0  // number of points to be added when user selects this answer
                }
              ]
          }]
      }]
  }
```

### Results & Recommendations content structure
Content for Results & Recommendations is structured a little differently, in that it starts with the title and is followed by two objects:
* reusables: this contains the text that is used repeatedly to introduce the below/ok/exceeds content, and the points threshold for that result level
* content: this contains the results and recommendations for each result level of each subsection. The structure is demonstrated below using an example also from the Understanding Risk section:

```json
      "your-org":{  // uses the same two-word reference as the subsection object did
          "section": "Understanding Risk",  // the section's display title
          "title": "About Your Organization",   // the subsection's display title
          "general": { // this object contains the general results text which explains the content for this subsection's recommendations
              "why": [  // array of paragraphs explaining why this subsection is important
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pellentesque sit amet porttitor eget dolor. Elementum tempus egestas sed sed risus pretium. Pharetra vel turpis nunc eget lorem dolor sed viverra ipsum."
              ],
              "eg": [   // array of paragraphs providing an example relevant to this subsection
                  "Lacinia quis vel eros donec ac. Tortor pretium viverra suspendisse potenti nullam. Id neque aliquam vestibulum morbi blandit cursus risus at ultrices. Mauris nunc congue nisi vitae suscipit tellus mauris a diam. Velit dignissim sodales ut eu sem integer. "
              ]
          },
          "results": {  // the results object contains the recommendation objects for each result level
              "below": [    // if user scores "below" in this subsection, they see the following objects
                  {
                      "title": "Determine your threat model.", // title of this recommendation to display
                      "content": [  // array of paragraphs providing recommendation to user
                          "Tellus molestie nunc non blandit massa. Sagittis nisl rhoncus mattis rhoncus urna neque. Dignissim suspendisse in est ante in nibh mauris. "
                      ]
                  },
              ],
              "ok": [    // if user scores "ok" in this subsection, they see the following objects
                  {
                      "title": "Develop an incident response plan.", // title of this recommendation to display
                      "content": [  // array of paragraphs providing recommendation to user
                          "Amet consectetur adipiscing elit duis tristique sollicitudin nibh sit. Duis tristique sollicitudin nibh sit amet commodo nulla. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Ut enim blandit volutpat maecenas. "
                      ]
                  }
              ],
              "exceeds": [    // if user scores "below" in this subsection, they see the following objects
                  {
                      "title": "Run a tabletop exercise.", // title of this recommendation to display
                      "content": [  // array of paragraphs providing recommendation to user
                          "Aliquam vestibulum morbi blandit cursus. Id volutpat lacus laoreet non curabitur gravida. Id porta nibh venenatis cras sed felis eget velit. Vulputate odio ut enim blandit volutpat maecenas. Nam at lectus urna duis. "
                      ]                      
                  }
              ]
          }
      },
  ```

### Other content structure
The remaining content variable has a varied structure since it contains user interface labels, introduction content, overlay text and other miscellaneous content objects.


## content/links.js
Links to external websites which are referenced in the results text should be stored in the links.js file of the same folder - all language versions are stored in that file, inside of the relevant objects. Note that only the URLs are included in this file, while the linked text is kept in the _rs object.


## ‘Do Not Localize’ list
Any text that is inside < > tags should not be localised. For example, <span>Example text</span> - the word “span” can be ignored, but “Example text” should be localised. In addition, the following keys should be ignored when localising JSON content.

Within *_qs, ignore any values with the following keys:
* section (e.g. “understand-risk”)
* subs > name (e.g. “your-org”)
* subs > questions > area (e.g. “risks”)
* subs > questions > required (e.g. “true”)
* subs > questions > type (e.g. “radio”)
* subs > questions > answers > pts (e.g. 0)
* subs > questions > answers > ifyes (e.g. true)

Within *_oc, ignore any values with the following keys:
* languages > name (e.g. “Portuguese")
* languages > code (e.g. “en”)
* process > content > type (e.g. “ol”)
* team > content > ref (e.g. “grooten”)
* users > content > type (e.g. “ul”)
* legal > type (e.g. “ul”)

Within *_rs, ignore any values with the following keys:
* reusables > below/ok/exceeds > threshold (e.g. 5)
* results > below/ok/exceeds > content > type (e.g. table)
