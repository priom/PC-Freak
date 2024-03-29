<?php
/*category.php
This page displays all products in a single category,
and to do so it includes and runs the following scripts:
connectToDatabase.php
displayOneCategory.php
*/
session_start();
include ('../common/document_head.php');
?>
  <body>
    <header>
      <?php
      include("../common/banner.php");
      include ('../common/mainmenu.php');
      include("../scripts/connectToDatabase.php");
      ?>
    </header>
    <main>
      <article class="ProductList">
        <h4 class="ProductHeader">Product List for
          Your Chosen Category</h4>
        <?php
        include("../scripts/displayOneCategoryItems.php");
        ?>
      </article>
    </main>
    <footer>
      <?php
include ('../common/footer_content.php');
      ?>
    </footer>
  </body>
</html>
