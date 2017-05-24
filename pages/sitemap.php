<?php
include ('../common/document_head.php');
?>
  <!-- sitemap.php -->
  <body>
    <header>
      <?php
include ('../common/banner.php');
      include ('../common/mainmenu.php');
?>
    </header>
    <main>
      <article id="siteMap">
        <h3>Site Map</h3>
        <ol>
          <li><a href="index.php">Home</a></li>
          <li><a href="pages/estore.php">e-store</a></li>
          <li>
            <a href="pages/products.php">Products+Services</a> 
            <ul>
              <li><a href="pages/catalog.php">Product Catalog</a></li>
              <li><a href="pages/featured.php">Featured Products</a></li>
              <li><a href="pages/services.php">Services</a></li>
              <li><a href="pages/suppliers.php">Suppliers</a></li>
            </ul>
          </li>
          <li>
              <a href="pages/buildyourpc.php">Build Your PC</a>
              <ul>
                <li><a href="pages/estimator.php">Get An Estimate</a></li>
                <li><a href="pages/resources.php">Resources</a></li>
                <li><a href="pages/expert.php">Ask An Expert</a></li>
                <li><a href="pages/links.php">Useful Links</a></li>
              </ul>
            </li>
          <li>
            <a href="pages/about.php">About Us</a> 
            <ul>
              <li><a href="pages/about.php">About PC-Freak</a></li>
              <li><a href="pages/vision.php">Vision+Mission</a></li>
              <li><a href="pages/employment.php">Job Opportunities</a></li>
              <li><a href="pages/news.php">News Archive</a></li>
            </ul>
          </li>
          <li>
            <a href="pages/about.php">Contact Us</a> 
            <ul>
              <li><a href="pages/locations.php">Locations</a></li>
              <li><a href="pages/feedback.php">Feedback Form</a></li>
            </ul>
          </li>
          <li><a href="pages/sitemap.php">Site Map</a></li>
        </ol>
      </article>
    </main>
    <footer>
      <!-- footer_row.php -->
      <?php
include ('../common/footer_content.php');
?>
    </footer>
  </body>
</html>