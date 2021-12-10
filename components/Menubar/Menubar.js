import Button from '../Button/Button';
import data from '../../configs/menu';
import MenuGroup from '../MenuGroup/MenuGroup';
import Link from 'next/link';
import map from 'lodash/map';

const Menubar = () => {
    var {menu} = data,
        menuItems = map(menu, function(item, idx){
            return <MenuGroup key={idx} {...item}/>
        });
    
    return (
        <nav>
            <div>
                <Link href="/">
                    <a>
                        <h1>Fish CMS</h1>
                    </a>
                </Link>
                <hr/>
                <Link href="/create">
                    <a>
                        <Button
                            label="Create New Item"
                            btnType="menu"
                        />
                    </a>
                </Link>
                {menuItems}
            </div>
        </nav>
    )
}

export default Menubar;