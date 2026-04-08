import React from "react";

const NavBarMenu = [
  { id: 1, title: "Home", link: "#" },
  { id: 2, title: "About us", link: "#about" },
  { id: 3, title: "Products", link: "#products" },
  { id: 4, title: "Reviews", link: "#reviews" },
  { id: 5, title: "Shop now", link: "#order" },
];

export const NavBar = () => {
  return (
    <>
      <nav>
        <div>
          {/* Logo Section */}
          <div></div>
          {/* Menu Section */}
          <ul>
            {NavBarMenu.map((menu) => (
              <li key={menu.id}>
                <a href=""></a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
