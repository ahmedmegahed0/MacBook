import {navLinks} from "../constants";

const NavBar = () => {
    const handleNavClick = (label) => {
        
        const sectionIds = {
            'Home': 'hero',
            'ProductView': 'product-viewer',
            'ShowCase': 'showcase',
            'Performance': 'performance',
            'features': 'features',
            'HighLights': 'highlights'
        };

        const sectionId = sectionIds[label];
        if (sectionId) {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    return (
        <header>
            <nav>
                <img src="/logo.svg" alt="Apple logo" />

                <ul>
                    {navLinks.map(({ label }) => (
                        <li 
                            key={label}
                            onClick={() => handleNavClick(label)}
                            className="cursor-pointer hover:text-gray-300 transition-colors"
                        >
                            {label}
                        </li>
                    ))}
                </ul>

                <div className="flex-center gap-3">
                    <button>
                        <img src="/search.svg" alt="Search" />
                    </button>
                    <button>
                        <img src="/cart.svg" alt="Cart" />
                    </button>
                </div>
            </nav>
        </header>
    )
}
export default NavBar