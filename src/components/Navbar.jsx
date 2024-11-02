import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartModal from "../pages/shop/CartModal";
import avatarImg from "../assets/avatar.png";
import { useLogoutUserMutation } from "../redux/feature/auth/authApi";
import { logout } from "../redux/feature/auth/authSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const [isCarOpen, setIsCarOpen] = useState(false);
  const handleCartToggle = () => {
    setIsCarOpen(!isCarOpen);
  };

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const [logoutUser] = useLogoutUserMutation();
  const navigate = useNavigate();
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const handleDropDownOpen = () => {
    setIsDropDownOpen(!isDropDownOpen);
  };

  const adminDropDownMenus = [
    { label: "Dashboard", path: "/dashboard/admin" },
    { label: "Manage Product", path: "/dashboard/manage-products" },
    { label: "All Orders", path: "/dashboard/manage-orders" },
    { label: "Add Product", path: "/dashboard/add-product" },
  ];

  const userDropDownMenus = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Profile", path: "/dashboard/profile" },
    { label: "Payments", path: "/dashboard/payments" },
    { label: "Orders", path: "/dashboard/orders" },
  ];

  const dropDownMenus =
    user?.role === "admin" ? [...adminDropDownMenus] : [...userDropDownMenus];

  const handleLogout = async () => {
    try {
      await logoutUser();
      dispatch(logout());
      navigate("/");
    } catch (error) {
      console.error("Failed to logout", error);
    }
  };

  return (
    <header className="fixed-nav-bar w-nav">
      <nav className="max-w-screen-2xl mx-auto px-4 flex justify-between">
        <ul className="nav__links">
          <li className="link">
            <Link to="/">Home</Link>
          </li>
          <li className="link">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="link">
            <Link to="/">Pages</Link>
          </li>
          <li className="link">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="nav__logo">
          <Link>
            Bobby<span>.</span>
          </Link>
        </div>
        <div className="nav__icons relative">
          <span>
            <Link to="/search">
              <i className="ri-search-line"></i>
            </Link>
          </span>
          <span>
            <button onClick={handleCartToggle} className="hover:text-primary">
              <i className="ri-shopping-bag-line"></i>
              <sup className="text-sm inline-block px-1.5 text-white rounded-full bg-primary">
                {products.length}
              </sup>
            </button>
          </span>
          <span>
            {user ? (
              <>
                <img
                  onClick={handleDropDownOpen}
                  src={user?.profileImage || avatarImg}
                  alt=""
                  className="size-6 rounded-full cursor-pointer"
                />
                {isDropDownOpen && (
                  <div className="absolute right-0 mt-3 p-4 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                    <ul className="font-medium space-y-4 p-2">
                      {dropDownMenus.map((menu, index) => (
                        <li key={index}>
                          <Link
                            onClick={() => setIsDropDownOpen(false)}
                            className="dropdown-items"
                            to={menu.path}
                          >
                            {menu.label}
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link onClick={handleLogout} className="dropdown-items">
                          Logout
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </>
            ) : (
              <Link to="/login">
                <i className="ri-user-line"></i>
              </Link>
            )}
          </span>
        </div>
      </nav>
      {isCarOpen && (
        <CartModal
          products={products}
          isOpen={isCarOpen}
          onClose={handleCartToggle}
        />
      )}
    </header>
  );
};

export default Navbar;
