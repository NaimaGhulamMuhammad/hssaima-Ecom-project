import React from "react"
import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { ShoppingData } from "../data/ShoppingData"
import gridImg from "../images/grid.jpg"
import listImg from "../images/list.jpg"

const ShopLeftProducts = () => {
  return (
    <>
      <div class="col-12 col-sm-12 col-md-9 col-lg-9 main-col">
        <div class="category-description">
          <h3>Category Description</h3>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing.</p>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        </div>
        <hr />
        <div class="productList product-load-more">
          <button type="button" class="btn btn-filter d-block d-md-none d-lg-none"> Product Filters</button>
          <div class="toolbar">
            <div class="filters-toolbar-wrapper">
              <div class="row">
                <div class="col-4 col-md-4 col-lg-4 filters-toolbar__item collection-view-as d-flex justify-content-start align-items-center">
                  <Link to="shop-left-sidebar.html" title="Grid View" class="change-view change-view--active">
                    <img src={gridImg} alt="Grid" />
                  </Link>
                  <Link to="shop-listview.html" title="List View" class="change-view">
                    <img src={listImg} alt="List" />
                  </Link>
                </div>
                <div class="col-4 col-md-4 col-lg-4 text-center filters-toolbar__item filters-toolbar__item--count d-flex justify-content-center align-items-center">
                  <span class="filters-toolbar__product-count">Showing: 22</span>
                </div>
                <div class="col-4 col-md-4 col-lg-4 text-right">
                  <div class="filters-toolbar__item">
                    <label for="SortBy" class="hidden">Sort</label>
                    <select name="SortBy" id="SortBy" class="filters-toolbar__input filters-toolbar__input--sort">
                      <option value="title-ascending" selected="selected">Sort</option>
                      <option>Best Selling</option>
                      <option>Alphabetically, A-Z</option>
                      <option>Alphabetically, Z-A</option>
                      <option>Price, low to high</option>
                      <option>Price, high to low</option>
                      <option>Date, new to old</option>
                      <option>Date, old to new</option>
                    </select>
                    <input class="collection-header__default-sort" type="hidden" value="manual" />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* <div class="grid-products grid--view-items">
                            <div class="row">
                                {ShoppingData.map((shopData, key) => {
                                    const {productImg, productName, hoverImg, onSale, price, oldPrice, productLabel} = shopData
                                    return(
                                        <ProductCard key={key} productImg={productImg} productName={productName} price={price}
                                        hoverImg={hoverImg} onSale={onSale} oldPrice={oldPrice} productLabel={productLabel} />
                                    );
                                })}
                            </div>
                        </div>  */}

        </div>
        <div class="grid-products grid--view-items">
          <div class="row">
            {ShoppingData.map((shopData, key) => {
              const { productImg, productName, hoverImg, onSale, price, oldPrice, productLabel } = shopData
              return (
                <ProductCard key={key} productImg={productImg} productName={productName} price={price}
                  hoverImg={hoverImg} onSale={onSale} oldPrice={oldPrice} productLabel={productLabel} />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
export default ShopLeftProducts;