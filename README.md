CAT x SOAP
==============================

## SYNOPSIS

The [Cybersecurity Assessment Tool (CAT)](https://www.fordfoundation.org/work/our-grants/building-institutions-and-networks/cybersecurity-assessment-tool/) is designed to assess the maturity, resiliency and strength of an organization’s cybersecurity efforts. It works by asking users to complete a questionnaire and at the end provides them with ratings and recommendations for improvement in each of the question groups. [SOAP](https://usesoap.app/) works in a similar fashion to build custom security policies and is therefore ideally placed to serve as the foundation for a rebuiild of the CAT tool, which is currently hosted on a third-party site. The SOAP code in this repository mirrors that of the SOAP v1.2.0 codebase, and should include all relevant history needed. The codebases will now diverge from one another, but the [SOAP repository](https://github.com/gembarrett/soap) can be referred to if necessary. To run the site locally, type the following into a Terminal from the root of your project folder: ```python3 -m http.server``` (requires Python 3).

## FOLDER STRUCTURE

* **index.html**: sits at the root and is the place where all the JavaScript is injected
* **content**: holds all the text content for the site in JSON format
* **assets**: contains CSS files, images, report PDFs and JavaScript files
* **assets/js**: holds several files containing various feature-specific functions
* **assets/js/views**: files here direct the controller files to pull the data into the templates and serve it up for display. For example, views/questionsView.js calls on controllers/questionPage.js to get all the question data and plug it into templates/questionsTemplate.js
* **assets/js/controllers**: these files are instructed by their counterparts in the views folder to get all the data needed for that section and parcel it up ready for the corresponding template
* **assets/js/templates**: these files take the data provided and plug it into the appropriate HTML elements for serving back to the controller, who then renders it in the browser
