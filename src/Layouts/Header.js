import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, DropdownMenu, DropdownToggle, Form } from "reactstrap";

//import images
import logoSm from "../assets/images/logo-light.png";
import logoDark from "../assets/images/logo-light.png";
import logoLight from "../assets/images/navbarBrand/Logo01.png";

//import Components
import SearchOption from "../Components/Common/SearchOption";
import NotificationDropdown from "../Components/Common/NotificationDropdown";
import ProfileDropdown from "../Components/Common/ProfileDropdown";

const Header = ({ headerClass }) => {
  const [search, setSearch] = useState(false);
  const toogleSearch = () => {
    setSearch(!search);
  };

  const toogleMenuBtn = () => {
    var windowSize = document.documentElement.clientWidth;

    if (windowSize > 767)
      document.querySelector(".hamburger-icon").classList.toggle("open");

    //For collapse vertical menu
    if (document.documentElement.getAttribute("data-layout") === "vertical") {
      if (windowSize < 1025 && windowSize > 767) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "sm"
          ? document.documentElement.setAttribute("data-sidebar-size", "")
          : document.documentElement.setAttribute("data-sidebar-size", "sm");
      } else if (windowSize > 1025) {
        document.body.classList.remove("vertical-sidebar-enable");
        document.documentElement.getAttribute("data-sidebar-size") === "lg"
          ? document.documentElement.setAttribute("data-sidebar-size", "sm")
          : document.documentElement.setAttribute("data-sidebar-size", "lg");
      } else if (windowSize <= 767) {
        document.body.classList.add("vertical-sidebar-enable");
        document.documentElement.setAttribute("data-sidebar-size", "lg");
      }
    }
  };
  return (
    <React.Fragment>
      <header id="page-topbar" className={headerClass}>
        <div className="layout-width">
          <div className="navbar-header">
            <div className="horizontal-logo mx-2">
              <Link to="/" className="logo logo-dark">
                <span className="logo-sm">
                  <img src={logoSm} alt="" height="22" />
                </span>
                <span className="logo-lg">
                  <img src={logoDark} alt="" height="17" />
                </span>
              </Link>

              <Link to="/" className="logo logo-light">
                <span className="logo-sm ">
                  <img src={logoLight} alt="" height="60" className="mt-2" />
                </span>
              </Link>
            </div>
            <button
              onClick={toogleMenuBtn}
              type="button"
              className="btn btn-sm px-2 fs-16 header-item vertical-menu-btn topnav-hamburger ham-lg"
            >
              <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>

            <div className="header-box">
              <div className="d-flex ">
                <SearchOption />
              </div>

              <div className="d-flex align-items-center">
                <Dropdown
                  isOpen={search}
                  toggle={toogleSearch}
                  className="d-md-none topbar-head-dropdown header-item"
                >
                  <DropdownToggle
                    type="button"
                    tag="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle"
                  >
                    <i className="bx bx-search fs-22"></i>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-lg dropdown-menu-end p-0">
                    <Form className="p-3">
                      <div className="form-group m-0">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Search ..."
                            aria-label="Recipient's username"
                          />
                          <button className="btn btn-primary" type="submit">
                            <i className="mdi mdi-magnify"></i>
                          </button>
                        </div>
                      </div>
                    </Form>
                  </DropdownMenu>
                </Dropdown>

                {/* FullScreenDropdown 
                <FullScreenDropdown />*/}

                <div className="balance">
                  <i className="fa-thin fa-wallet fs-18"></i>{" "}
                  <span className="">
                    Balance : <b>$597.67</b>
                  </span>
                </div>
                {/* NotificationDropdown */}
                <NotificationDropdown />
                <div className="ms-1 header-item d-sm-flex">
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"
                  >
                    <i className="fa-thin fa-gear fs-18"></i>
                  </button>
                </div>
                <div className="ms-1 header-item d-sm-flex">
                  <button
                    type="button"
                    className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode"
                  >
                    <i className="fa-thin fa-arrow-right-from-bracket fs-18"></i>
                  </button>
                </div>

                {/* ProfileDropdown */}
                <ProfileDropdown />
              </div>
            </div>
            <button
              onClick={toogleMenuBtn}
              type="button"
              className="btn btn-sm px-2 fs-16 header-item vertical-menu-btn topnav-hamburger ham-sm"
            >
              <span className="hamburger-icon">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
