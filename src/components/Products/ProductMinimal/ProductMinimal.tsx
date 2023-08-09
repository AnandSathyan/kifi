import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchKifiAsync } from "../../../views/desktop/kifi/kifi.slice";

function ProductMinimal() {
  const dispatch = useAppDispatch();
  const kifiStore = useAppSelector((state) => state.kifi);
  // console.log(kifiStore, "kifiStore");
  const Navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchKifiAsync());
  }, []);
  return (
    <div>
      <div className="product-minimal">
        <div className="product-showcase">
          <h2 className="title">New Arrivals</h2>

          <div className="showcase-wrapper has-scrollbar">
            <div
              className="showcase-container"
              onClick={() => Navigate("/ProductFiltered")}
            >
              {kifiStore?.data?.result?.result?.map((data: any) => {
                // console.log("data.image_url", data.image_url);

                return (
                  <div className="showcase">
                    <a href="#" className="showcase-img-box">
                      <img
                        src={data?.image_url}
                        // alt="relaxed short full sleeve t-shirt"
                        width="70"
                        className="showcase-img"
                      />
                    </a>

                    <div className="showcase-content">
                      <a href="#" onClick={() => Navigate("/ProductFiltered")}>
                        <h4 className="showcase-title">
                          Boal ( ആറ്റുവാള ) Curry cut
                        </h4>
                      </a>

                      <a href="#" className="showcase-category">
                        {data.name}
                      </a>

                      <div className="price-box">
                        <p className="price">&#8377;45.00</p>
                        <del>&#8377;12.00</del>
                      </div>
                    </div>
                  </div>
                );
              })}
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/tuna-cut.png"
                    alt="girls pink embro design top"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Tuna ( ചൂര ) Cubes (380g to 400g Pack)
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Farmed Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;61.00</p>
                    <del>&#8377;9.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/cutla-cut.png"
                    alt="black floral wrap midi skirt"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Cutla ( കട്ല ) Whole cleaned
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Farmed Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;76.00</p>
                    <del>&#8377;25.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/clams-cut.png"
                    alt="pure garment dyed cotton shirt"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">Clams ( കക്ക ) Whole</h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Shell Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;68.00</p>
                    <del>&#8377;31.00</del>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="showcase-container"
              onClick={() => Navigate("/ProductFiltered")}
            >
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    // src="./assets/images/products/jacket-5.jpg"
                    // alt="men yarn fleece full-zip jacket"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      {/* MEN Yarn Fleece Full-Zip Jacket */}
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Shell Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;61.00</p>
                    <del>&#8377;11.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    // src="./assets/images/products/jacket-1.jpg"
                    // alt="mens winter leathers jackets"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      {/* Mens Winter Leathers Jackets */}
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Shell Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;32.00</p>
                    <del>&#8377;20.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    // src="./assets/images/products/jacket-3.jpg"
                    // alt="mens winter leathers jackets"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      {/* Mens Winter Leathers Jackets */}
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Shell Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;50.00</p>
                    <del>&#8377;25.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/BoalFishCut.png"
                    alt="relaxed short full sleeve t-shirt"
                    // src="./assets/images/products/shorts-1.jpg"
                    // alt="better basics french terry sweatshorts"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      {/* Better Basics French Terry Sweatshorts */}
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Marine Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;20.00</p>
                    <del>&#8377;10.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="product-showcase"
          onClick={() => Navigate("/ProductFiltered")}
        >
          <h2 className="title">Trending</h2>

          <div className="showcase-wrapper has-scrollbar">
            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/cutla-cut.png"
                    alt="black floral wrap midi skirt"
                    // src="./assets/images/products/sports-1.jpg"
                    // alt="running & trekking shoes - white"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div
                  className="showcase-content"
                  onClick={() => Navigate("/ProductFiltered")}
                >
                  <a href="#">
                    <h4 className="showcase-title">
                      Cutla ( കട്ല ) Bengali cut
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Farmed Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;49.00</p>
                    <del>&#8377;15.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="../assets/images/perlspot-product.png"
                    // alt="trekking & running shoes - black"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      pearl Spot ( കരിമീൻ ) Whole
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Farmed Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;78.00</p>
                    <del>&#8377;36.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/Pearl-Spot.png"
                    // alt="womens party wear shoes"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Pearl Spot ( കരിമീൻ ) Whole cleaned
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Farmed Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;94.00</p>
                    <del>&#8377;42.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/mackarel-product.png"
                    // alt="sports claw women's shoes"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Mackerel ( അയല ) Boneless Fillet
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Marine Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;54.00</p>
                    <del>&#8377;65.00</del>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    // src="./assets/images/products/sports-6.jpg"
                    // alt="air tekking shoes - white"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Mackerel ( അയല ) Curry Cut
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Marine Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;52.00</p>
                    <del>&#8377;55.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    // src="./assets/images/products/shoe-3.jpg"
                    // alt="Boot With Suede Detail"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      {/* Boot With Suede Detail */}
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Shell Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;20.00</p>
                    <del>&#8377;30.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    // src="./assets/images/products/shoe-1.jpg"
                    // alt="men's leather formal wear shoes"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      {/* Men's Leather Formal Wear shoes */}
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Shell Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;56.00</p>
                    <del>&#8377;78.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    // src="./assets/images/products/shoe-2.jpg"
                    // alt="casual men's brown shoes"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      {/* Casual Men's Brown shoes */}
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Shell Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;50.00</p>
                    <del>&#8377;55.00</del>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="product-showcase"
          onClick={() => Navigate("/ProductFiltered")}
        >
          <h2 className="title">Top Rated</h2>

          <div className="showcase-wrapper has-scrollbar">
            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/BoalFishCut.png"
                    // src="./assets/images/products/BoalFishCut.png"
                    // alt="relaxed short full sleeve t-shirt"
                    width="70"
                    className="showcase-img"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Boal ( ആറ്റുവാള ) Curry cut
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Farmed Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;45.00</p>
                    <del>&#8377;12.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/tuna-cut.png"
                    alt="girls pink embro design top"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Tuna ( ചൂര ) Cubes (380g to 400g Pack)
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Farmed Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;61.00</p>
                    <del>&#8377;9.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/cutla-cut.png"
                    alt="black floral wrap midi skirt"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      Cutla ( കട്ല ) Whole cleaned
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Farmed Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;76.00</p>
                    <del>&#8377;25.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    src="./assets/images/products/clams-cut.png"
                    alt="pure garment dyed cotton shirt"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">Clams ( കക്ക ) Whole</h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Shell Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;68.00</p>
                    <del>&#8377;31.00</del>
                  </div>
                </div>
              </div>
            </div>

            <div className="showcase-container">
              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    // src="./assets/images/products/jacket-5.jpg"
                    // alt="men yarn fleece full-zip jacket"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      {/* MEN Yarn Fleece Full-Zip Jacket */}
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Shell Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;61.00</p>
                    <del>&#8377;11.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    // src="./assets/images/products/jacket-1.jpg"
                    // alt="mens winter leathers jackets"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      {/* Mens Winter Leathers Jackets */}
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Shell Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;32.00</p>
                    <del>&#8377;20.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    // src="./assets/images/products/jacket-3.jpg"
                    // alt="mens winter leathers jackets"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      {/* Mens Winter Leathers Jackets */}
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Shell Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;50.00</p>
                    <del>&#8377;25.00</del>
                  </div>
                </div>
              </div>

              <div className="showcase">
                <a href="#" className="showcase-img-box">
                  <img
                    // src="./assets/images/products/shorts-1.jpg"
                    // alt="better basics french terry sweatshorts"
                    className="showcase-img"
                    width="70"
                  />
                </a>

                <div className="showcase-content">
                  <a href="#">
                    <h4 className="showcase-title">
                      {/* Better Basics French Terry Sweatshorts */}
                    </h4>
                  </a>

                  <a href="#" className="showcase-category">
                    Marine Fish
                  </a>

                  <div className="price-box">
                    <p className="price">&#8377;20.00</p>
                    <del>&#8377;10.00</del>
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

export default ProductMinimal;
