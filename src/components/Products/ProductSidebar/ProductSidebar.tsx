import React, { useState } from "react";
import {Accordion, AccordionBody, AccordionHeader, AccordionItem} from "react-headless-accordion";
import {
  IoIosAdd,
  IoIosHeartEmpty,
  IoIosRemove,
  IoIosRepeat,
  IoIosStar,
  IoIosStarHalf,
  IoIosStarOutline,
} from "react-icons/io";
import { useNavigate } from "react-router-dom";
function ProductSidebar() {
  // const [open,setOpen] = useState(false)
  const handleAdd = () =>{
    // setOpen(true)
    console.log("add ",open);
    
  }
  const Navigate = useNavigate();
  const values = [
    {title: "Title 1", content: "Lorem ipsum dolor sit amet."},
    {title: "Title 2", content: "Lorem ipsum dolor sit amet."},
    {title: "Title 3", content: "Lorem ipsum dolor sit amet."},
];
  return (
    <div>
      <div className="sidebar has-scrollbar min-w-[250px]" data-mobile-menu>
        <div className="sidebar-category min-w-[250px]">
          <div className="sidebar-top">
            <h2 className="sidebar-title">Category</h2>

            <button className="sidebar-close-btn" data-mobile-menu-close-btn>
              {/* <ion-icon name="close-outline"></ion-icon> */}
            </button>
          </div>

          <ul className="sidebar-menu-category-list">
            <li className="sidebar-menu-category">
              <button className="sidebar-accordion-menu" data-accordion-btn>
                <div className="menu-title-flex">
                  <img
                    src="./assets/images/Farmed-fish.png"
                    alt="clothes"
                    width="40"
                    height="40"
                    className="menu-title-img"
                  />

                  <p className="menu-title">Farmed Fish</p>
                </div>

                <div>
                  <IoIosAdd className="add-icon"  onClick={handleAdd}/>
                  <IoIosRemove className="remove-icon" />
                  {/* <ion-icon name="add-outline" className="add-icon"></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className="remove-icon"
                      ></ion-icon> */}
                </div>
              </button>
                      {/* {open?
              <ul className="sidebar-submenu-category-list" data-accordion>
                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Shirt</p>
                    <data value="300" className="stock" title="Available Stock">
                      300
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">shorts & jeans</p>
                    <data value="60" className="stock" title="Available Stock">
                      60
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">jacket</p>
                    <data value="50" className="stock" title="Available Stock">
                      50
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">dress & frock</p>
                    <data value="87" className="stock" title="Available Stock">
                      87
                    </data>
                  </a>
                </li>
              </ul>
              :null} */}
              <Accordion>
            {values.map((item, index) => (
                  //@ts-ignore
                <AccordionItem key={index}>
                    {({
                      //@ts-ignore
                      open}) => (
                        <>
                            <AccordionHeader>
                                <h3 className={`accordion-title ${open ? 'accordion-active' : ''}`}>{item.title}</h3>
                            </AccordionHeader>

                            <AccordionBody>
                                <div className="accordion-body">
                                    {item.content}
                                </div>
                            </AccordionBody>
                        </>
                    )}
                </AccordionItem>
            ))}
        </Accordion>
            </li>

            <li className="sidebar-menu-category">
              <button className="sidebar-accordion-menu" data-accordion-btn>
                <div className="menu-title-flex">
                  <img
                    src="./assets/images/MarineFish.png"
                    alt="footwear"
                    className="menu-title-img"
                    width="40"
                    height="40"
                  />

                  <p className="menu-title">Marine Fish</p>
                </div>

                <div>
                  <IoIosAdd className="add-icon" />
                  <IoIosRemove className="remove-icon" />
                  {/* <ion-icon name="add-outline" className="add-icon"></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className="remove-icon"
                      ></ion-icon> */}
                </div>
              </button>

              <ul className="sidebar-submenu-category-list" data-accordion>
                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Sports</p>
                    <data value="45" className="stock" title="Available Stock">
                      45
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Formal</p>
                    <data value="75" className="stock" title="Available Stock">
                      75
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Casual</p>
                    <data value="35" className="stock" title="Available Stock">
                      35
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Safety Shoes</p>
                    <data value="26" className="stock" title="Available Stock">
                      26
                    </data>
                  </a>
                </li>
              </ul>
            </li>

            <li className="sidebar-menu-category">
              <button className="sidebar-accordion-menu" data-accordion-btn>
                <div className="menu-title-flex">
                  <img
                    src="./assets/images/ShellFish.png"
                    alt="clothes"
                    className="menu-title-img"
                    width="40"
                    height="40"
                  />

                  <p className="menu-title">Shell Fish</p>
                </div>

                <div>
                  <IoIosAdd className="add-icon" />
                  <IoIosRemove className="remove-icon" />
                  {/* <ion-icon name="add-outline" className="add-icon"></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className="remove-icon"
                      ></ion-icon> */}
                </div>
              </button>

              <ul className="sidebar-submenu-category-list" data-accordion>
                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Earrings</p>
                    <data value="46" className="stock" title="Available Stock">
                      46
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Couple Rings</p>
                    <data value="73" className="stock" title="Available Stock">
                      73
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Necklace</p>
                    <data value="61" className="stock" title="Available Stock">
                      61
                    </data>
                  </a>
                </li>
              </ul>
            </li>

            <li className="sidebar-menu-category">
              <button className="sidebar-accordion-menu" data-accordion-btn>
                <div className="menu-title-flex">
                  <img
                    src="./assets/images/OtherFish.png"
                    alt="perfume"
                    className="menu-title-img"
                    width="40"
                    height="40"
                  />

                  <p className="menu-title">Other Fishes</p>
                </div>

                <div>
                  <IoIosAdd className="add-icon" />
                  <IoIosRemove className="remove-icon" />
                  {/* <ion-icon name="add-outline" className="add-icon"></ion-icon>
                      <ion-icon
                        name="remove-outline"
                        className="remove-icon"
                      ></ion-icon> */}
                </div>
              </button>

              <ul className="sidebar-submenu-category-list" data-accordion>
                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Clothes Perfume</p>
                    <data value="12" className="stock" title="Available Stock">
                      12 pcs
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">Deodorant</p>
                    <data value="60" className="stock" title="Available Stock">
                      60 pcs
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">jacket</p>
                    <data value="50" className="stock" title="Available Stock">
                      50 pcs
                    </data>
                  </a>
                </li>

                <li className="sidebar-submenu-category">
                  <a href="#" className="sidebar-submenu-title">
                    <p className="product-name">dress & frock</p>
                    <data value="87" className="stock" title="Available Stock">
                      87 pcs
                    </data>
                  </a>
                </li>
              </ul>
            </li>

            {/*  */}
          </ul>
        </div>

        <div className="product-showcase">
          <h3 className="showcase-heading">best sellers</h3>

          <div className="showcase-wrapper">
            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/Best_seller1.png"
                    alt="baby fabric shoes"
                    width="75"
                    height="75"
                    className="showcase-img"
                  />
                </a>

                <div
                  className="showcase-content"
                  onClick={() =>
                    Navigate("/ProductView", {
                      state: {
                        name: "Mackerel / അയല",
                        price: "5.00",
                        image: "/assets/images/products/Best_seller1.png",
                      },
                    })
                  }
                >
                  <a>
                    <h4 className="showcase-title">Mackerel / അയല</h4>
                  </a>

                  <div className="showcase-rating">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />

                    {/* <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon> */}
                  </div>

                  <div className="price-box">
                    <del>&#8377;5.00</del>
                    <p className="price">&#8377;4.00</p>
                  </div>
                </div>
              </div>

              <div
                className="showcase"
                onClick={() =>
                  Navigate("/ProductView", {
                    state: {
                      name: "Trevally / വറ്റ",
                      price: "5.00",
                      image: "./assets/images/products/Best_seller2.png",
                    },
                  })
                }
              >
                <a className="showcase-img-box">
                  <img
                    src="./assets/images/products/Best_seller2.png"
                    alt="men's hoodies t-shirt"
                    className="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>

                <div className="showcase-content">
                  <a>
                    <h4 className="showcase-title">Trevally / വറ്റ</h4>
                  </a>
                  <div className="showcase-rating">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarOutline />

                    {/* <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon> */}
                  </div>

                  <div className="price-box">
                    <del>&#8377;17.00</del>
                    <p className="price">&#8377;7.00</p>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/Best_seller3.png"
                    alt="girls t-shirt"
                    className="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>

                <div
                  className="showcase-content"
                  onClick={() =>
                    Navigate("/ProductView", {
                      state: {
                        name: "Tuna / ചൂര",
                        price: "5.00",
                        image: "/assets/images/products/Best_seller3.png",
                      },
                    })
                  }
                >
                  <a>
                    <h4 className="showcase-title">Tuna / ചൂര</h4>
                  </a>
                  <div className="showcase-rating">
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />

                    {/* <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star-half-outline"></ion-icon> */}
                  </div>

                  <div className="price-box">
                    <del>&#8377;5.00</del>
                    <p className="price">&#8377;3.00</p>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/Best_seller4.png"
                    alt="woolen hat for men"
                    className="showcase-img"
                    width="75"
                    height="75"
                  />
                </a>

                <div
                  className="showcase-content"
                  onClick={() =>
                    Navigate("/ProductView", {
                      state: {
                        name: "Catla / കട്ല",
                        price: "5.00",
                        image: "/assets/images/products/Best_seller4.png",
                      },
                    })
                  }
                >
                  <a>
                    <h4 className="showcase-title">Catla / കട്ല</h4>
                  </a>
                  <div className="showcase-rating">
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />
                    <IoIosStarOutline />

                    {/* <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon>
                        <ion-icon name="star"></ion-icon> */}
                  </div>

                  <div className="price-box">
                    <del>&#8377;15.00</del>
                    <p className="price">&#8377;12.00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductSidebar;
