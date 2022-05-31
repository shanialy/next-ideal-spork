import { getBlogPosts } from "@utils/blog";

import { Fragment, useContext } from "react";
import { getProductsBySkin } from "@utils/product";

import { ProductsContext } from "@global/ProductsContext";

import PageShopLeftSidebar from "./shop/left-sidebar";
import React, { Suspense, lazy } from "react";
// const PageShopLeftSidebar = React.lazy(() => import("./shop/left-sidebar"));
const Home = ({ blogs }) => {
  const { products } = useContext(ProductsContext);
  const productsFashion = getProductsBySkin(products, "fashion");
  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
        <PageShopLeftSidebar />
      {/* </Suspense> */}
      {/* <Head>
                <title>Wokiee - React Next JS Multipurpose eCommerce Template</title>
            </Head>

            <Header
                logo={logo}
                navbar={true}
                dark={false}
                navData={navContent}
                navbarAlignment="left"
            />

            <ContentWrapper>
                <Slider
                    dots={true}
                    arrows={true}
                    data={sliderData}
                    className="nomargin"
                />
                <Categories/>
                <Tending
                    products={productsFashion}
                />
                <PromoBanners/>
                <BestSelling
                    products={productsFashion}
                />
                <LatestBlog
                    blogs={blogs}
                />
                <Services/>
            </ContentWrapper>

            <Footer
                logo={logo}
                dark={false}
                newsletter={true}
            /> */}
    </Fragment>
  );
};

export async function getStaticProps() {
  const blogs = getBlogPosts(
    ["title", "excerpt", "date", "author", "thumb", "slug", "categories"],
    3
  );

  return {
    props: {
      blogs: blogs,
    },
  };
}

export default Home;
