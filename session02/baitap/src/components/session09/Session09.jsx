import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Menu from "./Menu";
import ListProduct from "./ListProduct";

export default function Session09(props) {
  const { item } = props;

  return (
    <>
      {/* Header  */}
      <Header />
      {/* End header area */}
      {/* End site branding area */}
      <Menu />
      {/* End mainmenu area */}
      <div className="product-big-title-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="product-bit-title text-center">
                <h2>Shop</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* List product */}
      <ListProduct />
      {/* Footer area */}
      <Footer />
      {/* Latest jQuery form server */}
      {/* Bootstrap JS form CDN */}
      {/* jQuery sticky menu */}
      {/* jQuery easing */}
      {/* Main Script */}
      <script src="https://code.jquery.com/jquery.min.js"></script>

      <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>

      <script src="js/owl.carousel.min.js"></script>
      <script src="js/jquery.sticky.js"></script>

      <script src="js/jquery.easing.1.3.min.js"></script>

      <script src="js/main.js"></script>
    </>
  );
}
