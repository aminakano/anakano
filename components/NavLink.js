import MenuItems from "../components/MenuItems";
import { Component } from "react";
import window from "global";
import HamburgerMenu from "react-hamburger-menu";

class NavLink extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
    }
  }
  handleClick = () => {
    this.setState({ open: !this.state.open });
  }

  displayHamburgerMenu = () => {
    return (
      <HamburgerMenu
        isOpen={this.state.open}
        menuClicked={this.handleClick.bind(this)}
        width={25}
        height={20}
        strokeWidth={3}
        rotate={0}
        color={"#fff"}
        borderRadius={2}
        animationDuration={0.5}
      />
    );
  }

  displayNavBar = () => <MenuItems menuType="nav" />;

  displayMobileMenu = () => <MenuItems menuType="hamburgerDropDown" />;


  render () {

    const burgerStyle = {
      menuBtn: {
        margin: "6.4rem 0 0 0",
        backgroundColor: "rgba(0,0,0,0.4)",
        zIndex: "10"
      },
    };
    
    return (
      <>
        <div
          className="navbar"
          style={this.state.open ? burgerStyle.menuBtn : null}
        >
          {window.innerWidth > 600
            ? this.displayNavBar()
            : this.displayHamburgerMenu()}
          {this.state.open ? this.displayMobileMenu() : null}
        </div>
        <style jsx>
          {`
            @media screen and (max-width: 600px) {
              .navbar {
                margin: 0.5rem;
                padding: 1rem;
              }
            }
          `}
        </style>
      </>
    );
  }
}

export default NavLink;