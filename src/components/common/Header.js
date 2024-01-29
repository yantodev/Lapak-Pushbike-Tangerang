import React, {useContext, useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {AiOutlineSearch, AiOutlineShop, AiOutlineShoppingCart} from 'react-icons/ai';
import {dropdownMenu} from '../../data/headerData';
import commonContext from '../../contexts/common/commonContext';
import cartContext from '../../contexts/cart/cartContext';
import AccountForm from '../form/AccountForm';
import SearchBar from './SearchBar';
import logo from '../../assets/image/Lapak PBT.png'


const Header = () => {

    const {formUserInfo, toggleForm, toggleSearch} = useContext(commonContext);
    const {cartItems} = useContext(cartContext);
    const [isSticky, setIsSticky] = useState(false);


    // handle the sticky-header
    useEffect(() => {
        const handleIsSticky = () => window.scrollY >= 50 ? setIsSticky(true) : setIsSticky(false);

        window.addEventListener('scroll', handleIsSticky);

        return () => {
            window.removeEventListener('scroll', handleIsSticky);
        };
    }, [isSticky]);


    const cartQuantity = cartItems.length;


    return (
        <>
            <header id="header" className={isSticky ? 'sticky' : ''}>
                <div className="container">
                    <div className="navbar">
                        {/*<h2 className="nav_logo">*/}
                        {/*    <Link to="/">Lapak PBT</Link>*/}
                        {/*</h2>*/}
                        <Link to="/">
                            <img className="nav_logo" src={logo} alt="logo" width={110}/>
                        </Link>
                        <nav className="nav_actions">
                            <div className="search_action">
                                <span onClick={() => toggleSearch(true)}>
                                    <AiOutlineSearch/>
                                </span>
                                <div className="tooltip">Cari</div>
                            </div>

                            <div className="product_action">
                                <Link to="/all-products">
                                    <AiOutlineShop/>
                                </Link>
                                <div className="tooltip">Produk</div>
                            </div>

                            <div className="cart_action">
                                <Link to="/cart">
                                    <AiOutlineShoppingCart/>
                                    {
                                        cartQuantity > 0 && (
                                            <span className="badge">{cartQuantity}</span>
                                        )
                                    }
                                </Link>
                                <div className="tooltip">Keranjang</div>
                            </div>

                            <div className="user_action">
                                <span>
                                    {
                                        formUserInfo ? (
                                            <img src="https://png.pngtree.com/png-clipart/20231203/original/pngtree-logout-blue-glossy-web-icon-pushbutton-photo-png-image_13759153.png"
                                                 alt="user-login" width={25}/>

                                        ) : (
                                            <img
                                                src="https://www.clipartmax.com/png/full/290-2908659_login-icon-png-free-user-access-icon.png"
                                                alt="user-login" width={25}/>
                                        )
                                    }

                                </span>
                                <div className="dropdown_menu">
                                    <h4>Hello! {formUserInfo && <Link to="*">&nbsp;{formUserInfo}</Link>}</h4>
                                    <p>Access account and manage orders</p>
                                    {
                                        !formUserInfo && (
                                            <button
                                                type="button"
                                                onClick={() => toggleForm(true)}
                                            >
                                                Login / Signup
                                            </button>
                                        )
                                    }
                                    <div className="separator"></div>
                                    <ul>
                                        {
                                            dropdownMenu.map(item => {
                                                const {id, link, path} = item;
                                                return (
                                                    <li key={id}>
                                                        <Link to={path}>{link}</Link>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <SearchBar/>
            <AccountForm/>
        </>
    );
};

export default Header;
