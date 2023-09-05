import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { fetchKifiProductCategory, fetchKifiProductSearch } from "../../../views/desktop/kifi/kifi.slice";
import { fetchKifiProductCategory } from "../../../views/desktop/kifi/Category/Category.slice";
import { fetchKifiProductSubCategory } from "../../../views/desktop/kifi/Category/SubCategory.slice";
function HeaderSub() {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const KifiStore = useSelector((state: any) => state.Category);
  const KifiStoreSubCategory = useSelector((state:any)=>state.SubCategory)
  useEffect(() => {
    //@ts-ignore
    dispatch(fetchKifiProductCategory());
     //@ts-ignore
    dispatch(fetchKifiProductSubCategory())
  }, []);
  // const val =KifiStore?.data?.data?.map((data: any, index: any) => {
  //   return (data?.category)
  // })
  // console.log("value from header ",KifiStore?.data?.data);
  const filteredDataMarine = KifiStoreSubCategory?.data?.data?.filter((category_id:any)=>{return (category_id?.category_id == 2 )});
  const filteredDataShell = KifiStoreSubCategory?.data?.data?.filter((category_id:any)=>{return (category_id?.category_id == 3 )});
  
  const filteredDataFarmed = KifiStoreSubCategory?.data?.data?.filter((category_id:any)=>{return (category_id?.category_id == 1 )});

  const shellFishImage = KifiStore?.data?.data?.map((category_id:any)=>{return (category_id)})?.filter((data:any)=>{return(data?.name=="Shell Fish")})?.map((data:any)=>{return(data?.image_url)})
  const MarineFishImage = KifiStore?.data?.data?.map((category_id:any)=>{return (category_id)})?.filter((data:any)=>{return(data?.name=="Marine Fish")})?.map((data:any)=>{return(data?.image_url)})
  const FarmedFishImage = KifiStore?.data?.data?.map((category_id:any)=>{return (category_id)})?.filter((data:any)=>{return(data?.name=="Farmed Fish")})?.map((data:any)=>{return(data?.image_url)})

  // console.log(
  //   "KifiStore header",val?.map((category: any) => {return category?.name}))
//   console.log("KifiStore?.data?.data[0])",KifiStore?.data?.data?.map((category_id:any)=>{return (category_id)}))
// console.log("header sub",shellFishImage?.map((data:any)=>{return(data?.image_url)}));

  return (
    <div>
      <nav className="desktop-navigation-menu">
        <div className="container">
          <ul className="desktop-menu-category-list">
            <li className="menu-category">
              <a href="#" className="menu-title">
                Home
              </a>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Categories
              </a>

              <div className="dropdown-panel">
                {/* {KifiStore?.data?.data?.map((category: any) => { */}
                  {/* return ( */}
                    <ul  className="dropdown-panel-list">
                      <li className="menu-title">
                        <a >
                          Farmed Fish
                        {/* {KifiStore?.data?.data[0]?.name ? KifiStore?.data?.data[0]?.name:null} */}
                        </a>
                      </li>
                        {filteredDataFarmed?.map((subCat:any)=>{return(
                          <li className="panel-list-item">
                          <a >{subCat?.name}</a>
                        </li>
                        )})}
                      <li className="panel-list-item ">
                        <a href="#" >
                          <img
                          // className="mt-4 pt-8"
                          style={{height:"80%"}}
                          src={FarmedFishImage}
                            // src="./assets/images/Farmed-fish1 (2).jpeg"
                            alt="Fish collection"
                            // width="230"
                            // height="119"
                          />
                        </a>
                      </li>
                    </ul>

                    
                    <ul  className="dropdown-panel-list">
                      <li className="menu-title">
                        <a >
                          Marine Fish
                        {/* {KifiStore?.data?.data[1]?.name} */}
                        </a>
                      </li>
                        {filteredDataMarine?.map((subCat:any)=>{return(
                          <li className="panel-list-item">
                          <a >{subCat?.name}</a>
                        </li>
                        )})}
                      <li className="panel-list-item">
                        <a href="#">
                          <img
                          src={MarineFishImage}
                            // src="./assets/images/Farmed-fish1 (2).jpeg"
                            alt="Fish collection"
                            width="250"
                            height="119"
                          />
                        </a>
                      </li>
                    </ul>
                    
                    
                    <ul  className="dropdown-panel-list">
                      <li className="menu-title">
                        <a >
                          Shell Fish
                        {/* {KifiStore?.data?.data[2]?.name} */}
                        </a>
                      </li>
                        {filteredDataShell?.map((subCat:any)=>{return(
                          <li className="panel-list-item">
                          <a >{subCat?.name}</a>
                        </li>
                        )})}
                      <li className="panel-list-item">
                      

                        <a href="#">
                          <img
                          src={shellFishImage}
                            // src="./assets/images/Farmed-fish1 (2).jpeg"
                            alt="Fish collection"
                            width="250"
                            height="119"
                          />
                        </a>
                       
                      </li>
                    </ul>
                    
                  {/* ); */}
                {/* })} */}
                {/* <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Marine Fish</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Oil sardine</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Indian mackerel</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Silver pomfret</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Seer fish</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Pink perch</a>
                  </li>

                  <li className="panel-list-item ">
                    <a href="#">
                      <img
                        src="./assets/images/Marine-fish1 (1).jpeg"
                        alt="women's fashion"
                        width="250"
                        // height="59"
                      />
                    </a>
                  </li>
                </ul>

                <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Shell Fish</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Mussels</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Scallops</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Clams</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Shrimp</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Crab</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">
                      <img
                        src="./assets/images/shell-fish2 (1).jpeg"
                        alt="mouse collection"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul> */}
                {/* <ul className="dropdown-panel-list">
                  <li className="menu-title">
                    <a href="#">Other Fish</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Gold Fish</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Betta Fish</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Platy Fish</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Tetra Fish</a>
                  </li>

                  <li className="panel-list-item">
                    <a href="#">Guppies</a>
                  </li>

                  <li className="panel-list-item ">
                    <a href="#">
                      <img
                        src="./assets/images/other-fish1 (1).jpeg"
                        alt="men's fashion"
                        width="250"
                        height="119"
                      />
                    </a>
                  </li>
                </ul> */}
              </div>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Products
              </a>
              <ul
                onClick={() => Navigate("/ProductFiltered")}
                className="dropdown-list"
              >
              {KifiStore?.data?.data?.map((subCat:any)=>{return(

                <li key={subCat?.id} className="dropdown-item">
                  <a href="#">{subCat?.name}</a>
                </li>
                )})}
                </ul>
                
                {/* <li className="dropdown-item">
                  <a href="#">Farmed Fish</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Shell Fish</a>
                </li> */}

                {/* <li className="dropdown-item">
                  <a href="#">Other Fish</a>
                </li> */}
              {/* </ul> */}
                
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Blog
              </a>

              <ul className="dropdown-list">
                <li className="dropdown-item">
                  <a href="#Blog">Blog</a>
                </li>

                <li className="dropdown-item">
                  <a href="#">Blog Details</a>
                </li>

                {/* <li className="dropdown-item">
                    <a href="#">Necklace</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Makeup Kit</a>
                  </li> */}
              </ul>
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                About
              </a>

              {/* <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Earrings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Couple Rings</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Necklace</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Bracelets</a>
                  </li>
                </ul> */}
            </li>

            <li className="menu-category">
              <a href="#" className="menu-title">
                Contact
              </a>

              {/* <ul className="dropdown-list">
                  <li className="dropdown-item">
                    <a href="#">Clothes Perfume</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Deodorant</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Flower Fragrance</a>
                  </li>

                  <li className="dropdown-item">
                    <a href="#">Air Freshener</a>
                  </li>
                </ul> */}
            </li>

            {/* <li className="menu-category">
                <a href="#" className="menu-title">
                  Blog
                </a>
              </li> */}

            <li className="menu-category">
              <a href="#" className="menu-title">
                Hot Offers
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default HeaderSub;
