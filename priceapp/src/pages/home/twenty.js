import Head from "next/head";
import { Fragment, useContext, useEffect } from "react";
import { getProductsBySkin } from "@utils/product";
import { FooterOne as Footer } from "@components/footer";
import { ProductsContext } from "@global/ProductsContext";
import { HeaderSeven as Header } from "@components/header";
import { HomePagesNavData as navContent } from "@data/navbar";
import { CategoriesTen as Categories } from "@components/categories";
import { HeroBannerFive as HeroBanner } from "@components/hero-banners";
import { ContentWrapperOne as ContentWrapper } from "@components/wrapper";
import { TendingProducts as Tending } from "@components/products";
import Card from "@components/cards/Card";
import { SliderOne as Slider } from "@components/slider";
import sliderData from "@data/slider/home-one.json";
import { gql, useQuery } from "@apollo/client";
import { useSearchkitVariables, useSearchkit } from "@searchkit/client";
const gqlquery = gql`
  query resultSet(
    $query: String
    $filters: [SKFiltersSet]
    $page: SKPageInput
    $sortBy: String
  ) {
    results(query: $query, filters: $filters) {
      summary {
        total
        appliedFilters {
          id
          identifier
          display
          label
          ... on DateRangeSelectedFilter {
            dateMin
            dateMax
            __typename
          }
          ... on ValueSelectedFilter {
            value
            __typename
          }
          __typename
        }
        sortOptions {
          id
          label
          __typename
        }
        query
        __typename
      }
      hits(page: $page, sortBy: $sortBy) {
        page {
          total
          totalPages
          pageNumber
          from
          size
          __typename
        }
        sortedBy
        items {
          ... on ResultHit {
            id
            fields {
              gender
              title
              image
              vendor
              price
              price_before_sale
              domain
              product_type
              is_on_sale
              updatedAt
              product_url
              sku
              discount
              rating
              __typename
            }
            __typename
          }
          __typename
        }
        __typename
      }
      facets {
        identifier
        type
        label
        display
        entries {
          label
          count
          __typename
        }
        __typename
      }
      __typename
    }
  }
`;
const HomeTwenty = () => {
  const { products } = useContext(ProductsContext);
  var api = useSearchkit();
  const productsFashion = getProductsBySkin(products, "fashion");
  const logo = "/assets/images/no-placeholder/logo.png";
  const variables = useSearchkitVariables();
  const {
    previousData,
    data = previousData,
    loading,
  } = useQuery(gqlquery, {
    variables: variables,
  });
  if (data) {
    console.log("Page of Twenty", data);
  }
  // var obj = '{"criteria":"title","domain":["brandsroots.com"]}';

  // api.toggleFilter({ identifier: "CustomFilter", value: obj });
  // api.setPage({ size: 20, from: 0 });

  // api.search();
  useEffect(() => {
    const customState = {
      query: "",
      sortBy: "discount",
      filters: [],
      page: {
        size: 20,
        from: 0,
      },
    };
    api.setSearchState(customState);
    api.search();

    // const customState = {
    //   queryType: "TopSales",
    // };
    // console.log(customState);
    // api.toggleFilter({
    //   identifier: "CustomFilter",
    //   value: customState,
    // });
    // const json = JSON.stringify(customState);
    // api.toggleFilter({ identifier: "CustomFilter", value: json });
    // api.search();
  }, []);

  return (
    <Fragment>
      <Head>
        <title>PriceSure</title>
      </Head>
      <Header logo={logo} navData={navContent} containerFluid={false} />
      <ContentWrapper>
        <HeroBanner className="tt-offset-20" />
        <Categories />
      </ContentWrapper>
      <ContentWrapper>
        <Slider
          dots={true}
          arrows={true}
          data={sliderData}
          className="nomargin"
        />
      </ContentWrapper>
      <h4 style={{ paddingLeft: "20px" }}>Deal Of the Day:</h4>
      <Tending products={productsFashion} data={data?.results?.hits?.items} />
      <h4 style={{ paddingLeft: "20px" }}>Top Rated Products:</h4>
      <Card />
      <Footer logo={logo} newsletter={false} />
    </Fragment>
  );
};

export default HomeTwenty;
