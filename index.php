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
        <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
        <script src="content/en-content.js"></script>
        <script src="content/links.js"></script>

        <script src="assets/js/utils.js"></script>
        <script src="assets/js/init.js"></script>


        <!-- these may need to be moved further down or refactored -->
        <script src="assets/js/start.js"></script>
        <script src="assets/js/keyboard.js"></script>
        <script src="assets/js/policy.js"></script>
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
                  <option value="es">Español</option>
                </select>
              </ul>
            </div>
            <!-- when other languages are added this will need to be updated -->
            <div id="nav-container">
                <div id="survey-menu">
                    <div id="section-trigger">
                        <p>Go to section...</p>
                        <img src="assets/images/menu-forward.png" alt="View survey sections"/>
                    </div>
                    <hr />
                    <p>Save &amp; resume later</p>
                </div>
            </div>
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
            <p id="copyright">&#169; 2022 The Ford Foundation, all rights reserved.</p>
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
        <script src="assets/js/templates/warning.js"></script>

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
        <script src="assets/js/snapshot.js"></script>
        <script src="assets/js/translation.js"></script>
        <script src="assets/js/progress.js"></script>
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
