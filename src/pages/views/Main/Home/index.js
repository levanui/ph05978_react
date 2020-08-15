import React from 'react'

const Home = ({list}) => {
    return (
        <div>
            <section className="product spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-4">
        <div className="section-title">
          <h4>New product</h4>
        </div>
      </div>
      <div className="col-lg-8 col-md-8">
        <ul className="filter__controls">
          <li className="active" data-filter="*">All</li>
          <li data-filter=".women">Women’s</li>
          <li data-filter=".men">Men’s</li>
          <li data-filter=".kid">Kid’s</li>
          <li data-filter=".accessories">Accessories</li>
          <li data-filter=".cosmetic">Cosmetics</li>
        </ul>
      </div>
    </div>
    {list.map(({id, name, image, price}, index) =>(
    <div className="row property__gallery">

      <div className="col-lg-3 col-md-4 col-sm-6 mix women">
        <div className="product__item">
          <div className="product__item__pic set-bg" data-setbg="">
          <img className="product__item__pic set-bg" src={image} alt="" />
            <div className="label new">New</div>
            <ul className="product__hover">
              <li><a href={image} className="image-popup"><span className="arrow_expand" /></a></li>
              <li><a href="#"><span className="icon_heart_alt" /></a></li>
              <li><a href="#"><span className="icon_bag_alt" /></a></li>
            </ul>
          </div>
          <div className="product__item__text">
    <h6><a href="#">{name}</a></h6>
            <div className="rating">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </div>
    <div className="product__price">${price}</div>
          </div>
        </div>
      </div>
    </div>
    ))}
  </div>
  
</section>

        </div>
    )
}

export default Home
