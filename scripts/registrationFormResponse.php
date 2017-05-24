<?php
//registrationFormResponse.php
include("../common/document_head.php");
?>
  <body>
    <header>
      <?php
      include("../common/banner.php");
      include("../common/mainmenu.php");
      include("../scripts/connectToDatabase.php");
      ?>
    </header>
    <main>
      <article class="Registration">
        <?php
        include("../scripts/registrationFormProcess.php");
        ?>
      </article>
    </main>
    <footer>
      <?php
      include("../common/footer_content.php");
      ?>
    </footer>
  </body>
</html>