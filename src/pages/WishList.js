import React from 'react';
import PageTitle from "../components/PageTitle"
import img from '../images/product-detail-page/camelia-reversible-big1.jpg'

const Data = [
  {
    img: { img },
    product: 'Woven Solid Midi Shirt Dress',
    price: '$150.00',
    stock: true,
  },
  {
    img: { img },
    product: 'Woven Solid Midi Shirt Dress',
    price: '$150.00',
    stock: false,
  },
  {
    img: { img },
    product: 'Woven Solid Midi Shirt Dress',
    price: '$150.00',
    stock: true,
  },
]
function WishList() {
  return (
    <>
      <PageTitle title="Wish List" />
      <div class="container">
        <div class="row">
          <div class="col-12 col-sm-12 col-md-12 col-lg-12 main-col">
            <form action="#">
              <div class="wishlist-table table-content table-responsive">
                <table class="table table-bordered">
                  <thead>
                    <tr>
                      <th class="product-name text-center alt-font">Remove</th>
                      <th class="product-price text-center alt-font">Images</th>
                      <th class="product-name alt-font">Product</th>
                      <th class="product-price text-center alt-font">Unit Price</th>
                      <th class="stock-status text-center alt-font">Stock Status</th>
                      <th class="product-subtotal text-center alt-font">Add to Cart</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      Data.map((v, i) => {
                        return (
                          <tr>
                            <td class="product-remove text-center" valign="middle"><a href="#"><i class="icon icon anm anm-times-l"></i></a></td>
                            <td class="product-thumbnail text-center">
                              <a href="#"><img src={v.img.img} alt="" title="" /></a>
                            </td>
                            <td class="product-name"><h4 class="no-margin"><a href="#">{v.product}</a></h4></td>
                            <td class="product-price text-center"><span class="amount">{v.price}</span></td>
                            <td class="stock text-center">
                              {
                                v.stock?<span class="in-stock">In stock</span>:<span class="in-stock">Out of stock</span>
                              }
                            </td>
                            <td class="product-subtotal text-center"><button type="button" class="btn btn-small">Add To Cart</button></td>
                          </tr>
                        )
                      })
                    }

                  </tbody>
                </table>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default WishList;
