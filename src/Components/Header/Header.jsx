import React, { useRef, useEffect } from "react";

import { Container } from "reactstrap";
import logo from "../../assets/res-logo.png";
import { NavLink, Link, Navigate, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";

import "../../style/header.css";
import { IconButton } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";
import { FaSignInAlt } from "react-icons/fa";
import { logout, reset } from "../../Redux/AuthSlice";
import { useDispatch, useSelector } from "react-redux";

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Cart",
    path: "/cart",
  },
  {
    display: "Contact",
    path: "/contact",
  },
];

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const menuRef = useRef(null);
  const headerRef = useRef(null);
  //   const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  //   const dispatch = useDispatch();

  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
      ) {
        headerRef.current.classList.add("header__shrink");
      } else {
        headerRef.current.classList.remove("header__shrink");
      }
    });
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/home")
    console.log("hii")
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="nav__wrapper d-flex align-items-center justify-content-between">
          <div className="logo">
            <img src={logo} alt="logo" />
            <h5>Tasty Treat</h5>
          </div>

          {/* ======= menu ======= */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  to={item.path}
                  key={index}
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>

          {/* ======== nav right icons ========= */}
          <div className="nav__right d-flex align-items-center gap-4">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={2} color="secondary">
                <ShoppingCart />
              </StyledBadge>
            </IconButton>

            <span className="user">
              <Link
                to="/register"
                style={{ color: "black", textDecoration: "none " , fontWeight:"500" , fontFamily:"fantasy"}}
              >
                <AccountCircleIcon />
                SIGN UP
              </Link>
            </span>

            {!user ?   (
              <span className="user">
                <Link
                  to="/login"
                  style={{ color: "black  ", textDecoration: "none " , fontWeight:"500" , fontFamily:"fantasy"}}
                >
                  <AccountCircleIcon />
                  SIGN IN
                </Link>
              </span>
            ) : (
              <span className="user">
                <Link
                  to="/register"
                  style={{ color: "black", textDecoration: "none " }}
                  onClick={onLogout}
                >
                  <FaSignInAlt />
                  LogOut
                </Link>
              </span>
            )}

            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
