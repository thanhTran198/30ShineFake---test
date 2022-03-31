import clsx from 'clsx'
import css from './30shineShop.module.css'
import Footer from './footer'
import { FaAngleDown } from 'react-icons/fa';
import { AiFillCaretDown } from "react-icons/ai";

function HairStore() {

    const Navbar = () => {
        return(
            <div className={css.navbar}>
                <ul className={css.navbarList}>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>DANH MỤC</h4>
                        <AiFillCaretDown/>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>COMBO SIÊU HỜI</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>SẢN PHẨM BÁN CHẠY</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>SẢN PHẨM MỚI</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>THƯƠNG HIỆU ĐỘC QUYỀN</h4>
                        <AiFillCaretDown/>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>GIỚI THIỆU</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>LIÊN HỆ</h4>
                    </li>
                    <li className={css.navbarItem}>
                        <h4 className={css.navbarItemText}>BLOG</h4>
                    </li>
                </ul>
            </div>
        )
    }







    return (
        <div className={``}>
            <Navbar/>
            <Footer/>
        </div>
    )
}

export default HairStore