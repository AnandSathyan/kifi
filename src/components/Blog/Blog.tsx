import React from "react";

function Blog() {
  return (
    <div>
      <div id="Blog" className="blog">
        <div className="container">
          <div className="blog-container has-scrollbar">
            <div className="blog-card">
              <a href="#">
                <img
                  src="./assets/images/blog/blog-2.png"
                  alt="Clothes Retail KPIs 2021 Guide for Clothes Executives"
                  width="300"
                  className="blog-banner h-44"
                />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  Soups and Stews
                </a>

                <a href="#">
                  <h3 className="blog-title">
                    Summer Quinoa Salad Jars with Lemon Dill
                  </h3>
                </a>

                <p className="blog-meta">
                  <time dateTime="2022-04-06">Apr 25, 2022</time>{" "}
                  <cite>126k Views </cite> .4 mins read
                </p>
              </div>
            </div>

            <div className="blog-card">
              <a href="#">
                <img
                  src="./assets/images/blog/blog-1.png"
                  alt="Curbside fashion Trends: How to Win the Pickup Battle."
                  className="blog-banner h-44"
                  width="200"
                />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  Side Dish
                </a>

                <h3>
                  <a href="#" className="blog-title">
                    The Intermediate Guide to Healthy Food
                  </a>
                </h3>

                <p className="blog-meta">
                  <time dateTime="2022-01-18">April 25, 2022</time>{" "}
                  <cite>126k Views</cite> .4 mins read
                </p>
              </div>
            </div>

            <div className="blog-card">
              <a href="#">
                <img
                  src="./assets/images/blog/blog-3.png"
                  alt="EBT vendors: Claim Your Share of SNAP Online Revenue."
                  className="blog-banner h-44"
                  width="300"
                />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  Salad
                </a>

                <h3>
                  <a href="#" className="blog-title">
                    Caprese Chicken with Smashed Potatoes
                  </a>
                </h3>

                <p className="blog-meta">
                  <time dateTime="2022-02-10">Apr 25, 2022</time>{" "}
                  <cite>126k Views</cite> .3 mins read
                </p>
              </div>
            </div>

            <div className="blog-card">
              <a href="#">
                <img
                  src="./assets/images/blog/blog-4.png"
                  alt="Curbside fashion Trends: How to Win the Pickup Battle."
                  className="blog-banner h-44"
                  width="300"
                />
              </a>

              <div className="blog-content">
                <a href="#" className="blog-category">
                  Electronics
                </a>

                <h3>
                  <a href="#" className="blog-title">
                    Harissa Chickpeas with Whipped Feta
                  </a>
                </h3>

                <p className="blog-meta">
                  <time dateTime="2022-03-15">Mar 15, 2022</time>{" "}
                  <cite>150k Views</cite> .2 mins read
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
