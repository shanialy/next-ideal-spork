import Head from "next/head";
import { Fragment, useContext, useState, useEffect } from "react";
import Breadcrumb from "@components/ui/breadcrumb";
import ShopGrid from "@components/shop/ShopGrid";
import { HeaderOne as Header } from "@components/header";
import { FooterOne as Footer } from "@components/footer";
import { ProductsContext } from "@global/ProductsContext";
import { HomePagesNavData as navContent } from "@data/navbar";
import withApollo from "../../hocs/withApollo";
import { withSearchkit, withSearchkitRouting } from "@searchkit/client";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";

const PageShopLeftSidebar = () => {
  const { products } = useContext(ProductsContext);

  const logo = "/assets/images/no-placeholder/logo.png";

  return (
    <Fragment>
      <Head>
        <title>
          Shop Left Sidebar - Wokiee :: React Next JS Multipurpose eCommerce
          Template
        </title>
        <meta
          name="description"
          content="React Next JS Multipurpose eCommerce Template"
        />
      </Head>

      <Header
        logo={logo}
        navbar={true}
        navData={navContent}
        navbarAlignment="left"
      />

      <ContentWrapper>
        <Breadcrumb />

        <ShopGrid
          // products={products}
          sidebar={true}
          sidebarPosition="left"
          containerFluid={false}
        />
      </ContentWrapper>

      <Footer logo={logo} />
    </Fragment>
  );
};

// export default PageShopLeftSidebar;
export default withApollo(withSearchkit(PageShopLeftSidebar));
