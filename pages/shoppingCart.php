<?php
  /*shoppingCart.php
  This page provides the "high-level" shopping cart view, if in
  fact the visitor has a shopping cart. Otherwise the visitor is
  redirected to the login page.
  */
  session_start();
  $customerID = $_SESSION['customer_id'];
  if ($customerID == "")
  {
      $_SESSION['purchasePending'] = $productID;
      header("Location: loginForm.php");
  }
  $productID = $_GET['productID'];
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
      <article class="ShoppingCart">
        <h4 class="ShoppingCartHeader">Shopping Cart</h4>
        <?php
        include("../scripts/shoppingCartProcess.php");
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
