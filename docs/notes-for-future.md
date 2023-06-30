# Notes for future development
Just a few points to note for the next round of development.

## Twitter embeds
The embedded Tweets part of the home page can slow down the loading of the site. In addition, the currently unpredictable nature of Twitter API functionality means it could be worth implementing backup content to be shown while Twitter is loading/failing. Unless the embed is being removed, I would recommend keeping the backup content the same size and position to avoid the page "jumping".

## Survey progress indicators
On the survey page (desktop view), the submenu items display circles beside them, the "filled/empty" style of which indicates the user's progress through the survey. The provided design seems to indicate that the "filled" style should be attached to an "in-progress" subsection (i.e. 1+ questions have been answered), while an "empty" circle shows the subsection has zero questions answered. This is, therefore, how the functionality now stands. However, I would suggest that perhaps it could be helpful to the user to see which sections they have completed, in addition to which they have started or not started. Adding a third status would require additional design and development hours though, and so user testing could be useful to determine whether this is a necessary change.

## Thresholds and answer values
Currently, the thresholds defined in resultsTemplate.js apply across all the questions:
* high scores (currently 10+) translate to "below" result
* low scores (currently <5) translate to "exceeds" result
* between the high and low thresholds (currently 5-10) translates to an "ok" result

However, some sections only have one question (e.g. legal risks) and the points for the negative answers are low enough to ensure that an "exceeds" result is guaranteed.

A related issue is the assignment of 0 points to the positive answers. The current implementation of the results processing functionality means that if there are no answers in local storage, going to /#results redirects to the home page. The intended user flow, of course, is to complete the survey and then be presented with full results. However, there is an in-between state/loophole whereby a user can partially complete the survey and then go to /#results in order to receive their results. When the results are tallied up, the unanswered sections show as 0 - leading to an "exceeds" evaluation.

These two issues warrant further consideration around the points-based system and its implementation, as well as the impact on user experience and, finally, the technical updates required. I suggest the following solutions:
* In sections where there are very few required questions, increase the points to ensure a fair assessment against the thresholds
* Where answers have 0 points, replace the value with 1 or some other low number to indicate a) there is an answer, and b) it is a positive one
    * Results processing can then check for tallys of 0, indicating an incomplete answerset
    * A message regarding the incompleteness can then be displayed to the user
    * Note: this is an edge case, since few users will want incomplete results and even fewer will try changing the url to achieve them. However, it could be useful if plans arise in the future to accommodate those who want "mini-assessments".

## Question numbering
In the survey, the questions are numbered sequentially, including optional questions. However, when optional questions are hidden (to be shown when the relevant answer is selected) the numbers are out of sync, and the gaps could be confusing to the user. I would recommend either: 
a) adding nested numbering to the optional questions (e.g. 17a, 17b, etc.), or
b) removing the numbering altogether

## Additional tasks
As of EOD June 30th, the following tasks remain for future development of the Cybersecurity Assessment Tool (CAT):
* update the Results & Recommendations content - current gaps are being filled with lorem ipsum placeholder text
* replacing any remaining hard-coded values
* adding language change functionality - localised content files are required to fully implement this
* refactor code and optimise to improve loading times