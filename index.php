<!DOCTYPE html>
<html lang="en" dir="ltr">

<!--REMOVE THIS & ALL PHP CODE IN PROD -->
<?php
require 'config.php';

if(isset($_POST['submit'])){
  if($_POST['username'] == $username && $_POST['password'] == $password){
    ?>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CAT: Cybersecurity Assessment Tool</title>
        <meta name="keywords" content="">
        <meta name="description" content="">
        <link rel="stylesheet" href="assets/css/global.css" />
        <link rel="stylesheet" href="assets/css/granular.css" />
        <link rel="stylesheet" href="assets/css/media.css" />
        <!-- ONLY NEEDED FOR FONT AWESOME <link href="assets/css/all.css" rel="stylesheet"> -->
        <script src="content/en-content.js"></script>
        <script src="content/links.js"></script>

        <script src="assets/js/utils.js"></script>
        <script src="assets/js/init.js"></script>


        <!-- these may need to be moved further down or refactored -->
        <script src="assets/js/start.js"></script>
        <script src="assets/js/keyboard.js"></script>
        <script src="assets/js/results.js"></script>
        <link rel="manifest" href="/site.webmanifest">
      </head>
      <body lang="en">
        <div id="head">
            <div id="menu-triggers">
                <div class="glyph">
                    <img id="mobile-menu" src="assets/images/CAT-mobile-menu.png" alt="Mobile menu button" />
                    <a href="/">
                      <img alt="CAT logo" src="assets/images/CAT-logo.png">
                      <img alt="CAT text logo" id="link-home" src="assets/images/CAT-logo_white.png">
                    </a>
                </div>
                <div class="lang-menu">
                    <p>English</p>
                    <img id="lang-trigger" src="assets/images/globe.png">
                </div>
            </div>  
          <div id="menu-containers">
            <div id="lang-container" class="close">
              <ul id="lang-list" class="title">
                <select name="language">
                  <option value="en">English</option>
                </select>
              </ul>
            </div>
<!--
            <div id="nav-container">
                <div id="sNav">
                    <ul id="nav-main" class="pos2">
                        <li id="go-toCats">Go to section...</li>
                        <li class="later">Save &amp; resume later</li>
                    </ul>
                    <ul id="nav-cats" class="pos3">
                        <li class="go-back-1">Back</li>
                        <li id="go-understand-risk">Understanding Risk</li>
                        <li id="go-op-sec">Operational Security</li>
                        <li id="go-devices-accounts">Device and Account Security</li>
                    </ul>
                    <ul id="sub-understand-risk" class="pos4">
                        <li class="go-back-2">Back</li>
                        <li id="m-your-org">About Your Organization</li>
                        <li id="m-external-threats">External Threats</li>
                    </ul>
                    <ul id="sub-op-sec" class="pos4">
                        <li class="go-back-2">Back</li>
                        <li id="m-policy-docs">Policy &amp; Documentation</li>
                        <li id="m-internal-risks">Internal Risks</li> 
                        <li id="m-training-support">Staff Training &amp; Support</li>
                        <li id="m-travel-policy">Travel Policy</li>        
                        <li id="m-managing-data">Managing Data</li>  
                        <li id="m-web-security">Website Security</li>  
                        <li id="m-office-security">Office Policies &amp; Systems</li>  
                        <li id="m-legal-risks">Legal Risks</li>    
                    </ul>
                    <ul id="sub-devices-accounts" class="pos4">
                        <li class="go-back-2">Back</li>
                        <li id="m-messaging-collab">Messaging &amp; Collaboration</li>
                        <li id="m-installing-software">Installing Software</li>                        
                        <li id="m-data-encryption">Data Encryption</li>  
                        <li id="m-device-compartmentalization">Compartmentalization</li>  
                        <li id="m-passwords-authentication">Passwords &amp; Authentication</li>         
                        <li id="m-system-updates">System Updates</li> 
                        <li id="m-op-continuity">Operational Continuity</li>
                        <li id="m-third-party">Third-Party Services</li>
                        <li id="m-vp-network">VPN</li>                        
                    </ul>
                </div>
                
                
                
                <div id="survey-menu">
                    <div id="section-trigger">
                        <p>Go to section...</p>
                        <img src="assets/images/menu-forward.png" alt="View survey sections"/>
                    </div>
                    <hr />
                    <p class="later">Save &amp; resume later</p>
                </div>
            </div>
-->
          </div>
        </div>
        <div id="page">
          <div id="no-js" class="window">
            <h3>Looks like you've got Javascript disabled</h3>
            <p>You'll need to enable Javascript in order to use this website. Here's how to do that: <a href="https://enable-javascript.com" title="Find out more about enabling Javascript in your browser">enable-javascript.com</a></p>
            <p>If your threat model requires you to keep Javascript disabled, you can instead go to <a href="https://github.com/gembarrett/cat" title="View the open-source CAT code at GitHub">CAT's GitHub repository</a> and grab the code to run the whole website offline on your local computer.</p>
          </div>
        </div>
        <div id="foot">
          <div class="info">
            <img src="assets/images/CAT-logo_bg.png" /><img src="assets/images/CAT-logo_black.png" />
            <p><span>Cybersecurity Assessment Tool</span> by the Ford Foundation's BUILD program</p>
            <p id="copyright">&#169; 2023 The Ford Foundation, all rights reserved.</p>
          </div>
          <div class="links">
            <p><a href="#survey">Assessment</a></p>
            <p><a href="#legal">Legal information</a><p>
          </div>
        </div>

        <script src="assets/js/templates/hero.js"></script>
        <script src="assets/js/templates/about.js"></script>
        <script src="assets/js/templates/tweets.js"></script>
        <script src="assets/js/templates/how.js"></script>
        <script src="assets/js/templates/who.js"></script>
        <script src="assets/js/templates/legal.js"></script>
        <script src="assets/js/templates/team.js"></script>
        <script src="assets/js/templates/overlay.js"></script>

        <script src="assets/js/templates/questionsTemplate.js"></script>
        <script src="assets/js/templates/resultsTemplate.js"></script>

        <script src="assets/js/controllers/home.js"></script>
        <script src="assets/js/controllers/legalPage.js"></script>
        <script src="assets/js/controllers/questionsPage.js"></script>
        <script src="assets/js/controllers/resultsPage.js"></script>

        <script src="assets/js/views/home.js"></script>
        <script src="assets/js/views/legalView.js"></script>
        <script src="assets/js/views/questionsView.js"></script>
        <script src="assets/js/views/resultsView.js"></script>
        <script src="assets/js/overlays.js"></script>
        <script src="assets/js/translation.js"></script>
        <script src="assets/js/progress.js"></script>
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
      </body>
      <?php
  } else {
    echo "Nope.";
  }
} else {
  ?>
  <form method="post">
    <h1 style='font-family: sans-serif'>Log in</h1>
    <p style='font-family: sans-serif'>Username: <input type="text" name="username" /></p>
    <p style='font-family: sans-serif'>Password: <input type="password" name="password" /></p>
    <input type="submit" name="submit" value="submit" />
  </form>
  <?php
}

?>
</html>
