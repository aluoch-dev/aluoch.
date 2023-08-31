import { HashLink as Link } from "react-router-hash-link";

const LinkItem = ({ item, itemOnClick}) => {
    return (
        <Link to={itemOnClick} className="inline-flex items-center p-2 text-lg text-beige border-green hover:text-white font-bold font-chilanka">
            {item}
        </Link>
    );
}

const NavBar = ({navItems}) => {
    
    return (
        <header className="bg-green">
            <nav className="container mx-auto px-4 py-4 sticky top-0">
                <div className="container mx-auto px-4">
                    <ul class="py-3">
                        {navItems.map(({link, linkOnClick}) => {
                            return (
                                <LinkItem
                                    item={link}
                                    itemOnClick={linkOnClick}
                                />
                            );
                        })}
                    </ul>
                </div>
            </nav>
        </header>
    )
}


export default NavBar;