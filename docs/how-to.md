# How-to guide

This file goes over the main tasks related to updating the Cybersecurity Assessment Tool (CAT). It will be updated periodically as new requirements become apparent.

## How to run CAT locally
CAT is temporarily using PHP in order to password-protect the site while it's under development. Underneath, it is pure Javascript (no frameworks), HTML and CSS. To run CAT on your local machine requires only a local web server, such as the simple server set up in the server.py file or if you have PHP installed you can type 
```
php -S localhost:8000
```
into your terminal at the root of the cat repository to run the full site, locally and offline.


## How to add a new question

### First, ask:
* which subsection is this going in?
* is it a required question or does it depend on another question being answered in a certain way?
* can it be answered with multiple choice checkboxes or single-selection radio buttons?
* which answers have higher points and which have lower?

### Next, ensure you have text for the following areas:
* question
* answers
* any additional recommendations for the subsection which relate to this question

### Add your question 
Insert it into the *_qs array of objects, ensuring that it's within the correct subsection and that the commas before and after are appropriate.

Include all data, including answers array, as detailed in the Content Structure Guide.

### Add your recommendations
Locate the correct subsection and level within the content object of *_rs, and add the new recommendations object. In addition to the title and paragraph text, you may wish to include a table or list. Here's how you should structure that within the content array:

```json
"Here's an example.", // previous item in the array
{ // new object within the array
  "type": "table", // this could also be ul or ol
  "rows": [ // if this is a list, replace "rows" with "items"
    ["", "Low Likelihood", "High Likelihood"], // array to be added
    ["Low Consequence", "Printer is stolen from your office", "Physical damage to your phone"],
    ["High Consequence", "Corporate-sponsored cyberattack", "Phishing attack on your email account"]
  ]
},
"This is very helpful for members of your organization" // next item in the array
```

### Test the new question
* Does it show up on the page when you visit the relevant subsection?
* If it's dependent on another question's answer, does it hide and show correctly?
* Does it get included in generated links and is it preselected when the link  is used to resume?
* Do the recommendations show up when they're supposed to?


## How to add a new page

#### Views
Add a new Javascript file to assets/js/views, naming it exampleView.js, e.g. policyView.js, questionsView.js

Your new View file should contain the following code:
```js
views.exampleView = function(data, params){
  controllers['examplePage'](data, params);
}
```
Include a reference to your new View file at the bottom of index.html

#### Controllers
Add a new Javascript file to assets/js/controllers, naming it __Page.js, e.g. policyPage.js, questionsPage.js

Your new Controller file should contain the following code:
```js
controllers.examplePage = function(data, params){
  var exampleContent = templates.example(data);
  utils.render('page', exampleContent);
};
```
Include a reference to your new Controller file at the bottom of index.html

#### Templates
Next, you’ll need to use a template to pull in your data and present it for rendering. If you need a new template for this page’s content, then add a new Javascript file to assets/js/templates and name it according to the type of content it’s templating (e.g. tweets.js)

Your new Template file should contain the following code:
```js
templates.example = function(data){
  var content = `<div id=“exampleDiv"></div>`;
  return content;
};
```
Include a reference to your new Template file at the bottom of index.html

#### Routing
To ensure people can get to the new page, you'll have to add it to the router function within utils.js

Add an else if statement which looks like this:
```js
else if (temp[0] === 'legal') { // the router looks for the word after the /# separator, e.g. domain.com/#legal
        function_to_invoke = 'legalView'; // which view should be shown to the user?
        var data = textStore.oc; // which data should be used to populate this view?
```


## How to add links to your recommendations
To include a link in your recommendations text, use the following structure:
```
...such as [[Haven]](links.gproj.haven) by the Guardian Project...
```
The text to be used as a link should go in the double squared brackets and be followed immediately after by the reference from the link.js file within parentheses. Link references are usually three words separated by full stops, starting with "links", then the company name, and finally the product or page name. They are structured similarly to an object reference because links are stored in objects.

To create a links reference, check the links.js file for a related object (to avoid duplication). For instance, if you wish to link to a Google website, you would look for the "google" object and find there are several Google websites already there. 
``` json
"vault": {
      "en": "https://gsuite.google.com/products/vault/"
    },
```
The link reference for the Google vault object shown above is links.google.vault. Language versions are defined by the page's language and not within the content file, this way the localised version (if available) can be loaded easily.

If there is no chance of duplication, go ahead and add a new object to the links.js file.
```json
"company": {
    "product": {
        "en": "https://company.com/productlink"
    }
}
```