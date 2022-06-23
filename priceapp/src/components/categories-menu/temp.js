import Link from "next/link";
import { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { Col, Row } from "react-bootstrap";

// Icons Import
import Shoe from "@assets/images/svg/shoe.svg";
import MenIcon from "@assets/images/svg/men.svg";
import BuyTemplate from "@assets/images/svg/buy.svg";
import WomenIcon from "@assets/images/svg/women.svg";
import GiftCard from "@assets/images/svg/gift-card.svg";
import Clearance from "@assets/images/svg/clearance.svg";
import Accessories from "@assets/images/svg/accessories.svg";
import NewArrivals from "@assets/images/svg/new-arrivals.svg";
import SpecialOffers from "@assets/images/svg/special-offers.svg";

const CategoriesMenu = ({ className, initialVisibility }) => {
  const [dropdownToggle, setDropdownToggle] = useState(initialVisibility);
  const router = useRouter();
  const productype = "trouser";
  const onToggleHandler = () => {
    setDropdownToggle((prevState) => !prevState);
  };

  return (
    <div className={`tt-menu-categories ${className ? className : ""}`}>
      <button
        className={`tt-dropdown-toggle ${dropdownToggle ? "active" : ""}`}
        onClick={onToggleHandler}
      >
        CATEGORIES
      </button>
      <div className={`tt-dropdown-menu ${dropdownToggle ? "active" : ""}`}>
        <nav>
          <ul>
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <WomenIcon />
                  <span>Groceries & Pets</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Beverages
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Breakfast, Choco & Snacks
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* ////////////SEcond//////////////////////?? */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <WomenIcon />
                  <span>Health & Beauty</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Bath & Body
                        </a>
                      </Link>
                      <ul className="tt-megamenu-submenu">
                        <li>
                          <Link
                            href={{
                              pathname: "/shop/left-sidebar",
                              query: { ...router.query, productype },
                            }}
                            passHref
                            shallow
                            replace
                          >
                            <a
                              style={{
                                fontSize: "17px",
                                paddingBottom: "15px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              tshirt
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link
                            href={{
                              pathname: "/shop/left-sidebar",
                              query: { ...router.query, productype },
                            }}
                            passHref
                            shallow
                            replace
                          >
                            <a
                              style={{
                                fontSize: "17px",
                                paddingBottom: "15px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              trouser
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "17px",
                                paddingBottom: "15px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Foot Care
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "17px",
                                paddingBottom: "15px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hair Removal
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "17px",
                                paddingBottom: "15px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Hand Care
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "17px",
                                paddingBottom: "15px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Body Moisturizers
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "17px",
                                paddingBottom: "15px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Breast Care
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "17px",
                                paddingBottom: "15px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Talcum Powder
                            </a>
                          </Link>
                        </li>
                        <li>
                          <Link href="/shop/left-sidebar">
                            <a
                              style={{
                                fontSize: "17px",
                                paddingBottom: "15px",
                                paddingTop: "10px",
                                paddingLeft: "5px",
                              }}
                            >
                              Bath & Body Accessories
                            </a>
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Fragrances
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Hair Care
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Makeup
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Men's Care
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Skin Care
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* /////////////THIRD////////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <WomenIcon />
                  <span>Women's Fashion</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Unstitched Fabric
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Kurtas & Shalwar Kameez
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Muslim Wear
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Tops
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Pants, Jeans & Leggings
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Winter Clothing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Shoes
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Girls Clothing
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            {/* ///////////////FOUR//////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <MenIcon />
                  <span>Men's Fashion</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          T-Shirts & Tanks
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Shirts & Polo
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Pants & Jeans
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Shorts, Joggers & Sweats
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Pants, Jeans & Leggings
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Kurtas & Shalwar Kameez
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Winter Clothing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Inner Wear
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Shoes
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Boy's Clothing
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Men's Accessories
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* ///////////////////////FIVE???????? */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <Accessories />
                  <span>Electronic Devices</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Smart Phones
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Feature Phones
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Tablets
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Laptops
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Desktops
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Smart Watches
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Gaming Consoles
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Cameras & Drones
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Security Cameras
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Apple
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* ////////SIX//////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <Accessories />
                  <span>Electronic Accessories</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Mobile Accessories
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Headphones & Headsets
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Camera Accessories
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Computer Accessories
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Storage
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Computer Components
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Portable Speakers
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* ////////////////SEVEN////////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <Clearance />
                  <span>TV & Home Appliances</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          LED Televisions
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Smart Televisions
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Home Audio
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          TV Accessories
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Home Audio & Theater
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Kitchen Appliances
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Small Kitchen Appliances
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Cooling & Heating
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Irons & Garment Care
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Vacuums & Floor Care
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Washers & Dryers
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* ////////////////EIGHT//////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <WomenIcon />
                  <span>Sports & Outdoor</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Supplements
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Team Sports
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* ////////////NINE///////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <WomenIcon />
                  <span>Watches, Bags & Jewellery</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Men's Watches
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Women's Watches
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Womens Bags
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Mens Bags
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Sunglasses & Eyewear
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* //////////TEN??????????????????? */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <WomenIcon />
                  <span>Automotive</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Accessories
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Audio & Video Accessories
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Care Accessories
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Exterior Accessories
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Mats
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Perfume & Fragrances
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Security Gadgets
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          LED & Lightening
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Interior Accessories
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Modification Accessories
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Motorcycles
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Motorcycle Parts
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Coronavirus Essentials
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Top Covers
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Tires & Wheels
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Oils & Fluids
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Interior Accessories
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Tools & Equipment
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Parts & Spares
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Care
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Exterior Accessories
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Electronics
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Car Safety & Security
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* //////////////TWELVE////////////// */}
            <li className="tt-submenu">
              <Link href="/product/category/women">
                <a>
                  <WomenIcon />
                  <span>Health-and-care</span>
                </a>
              </Link>
              <div
                className="dropdown-menu size-md "
                style={{ width: "250px" }}
              >
                <div className="dropdown-menu-wrapper p-0">
                  <ul className="tt-megamenu-submenu">
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Heating Pad
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Thermometer
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Nebulizer
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Hearing Amplifier
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Pillow
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Blanket
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Air Dehumidifier
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Air Purifier
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Hygrometer
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Test Strips
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Pulse Oximeter
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Weighing Scale
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Air
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Blood Pressure
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Body Temperature
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Blood Glucose
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          ECG Monitor
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Massage
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Sleep & Rest
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Gentle Therapy
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Baby Care
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Beauty
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Bee Pollen
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Drinks
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Nutritional
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Personal Care
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Weight Management
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Adult Diapers & Pads
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Stethoscope
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/left-sidebar">
                        <a
                          style={{
                            fontSize: "17px",
                            paddingBottom: "15px",
                            paddingTop: "10px",
                            paddingLeft: "5px",
                          }}
                        >
                          Hemoglobin
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

CategoriesMenu.defaultProps = {
  initialVisibility: false,
};

CategoriesMenu.propTypes = {
  initialVisibility: PropTypes.bool,
};

export default CategoriesMenu;
