import Button from '../Button/Button';
import data from '../../configs/menu';
import MenuGroup from '../MenuGroup/MenuGroup';
import map from 'lodash/map';

const Menubar = () => {
    var {menu} = data,
        menuItems = map(menu, function(item, idx){
            return <MenuGroup key={idx} {...item}/>
        });
    
    return (
        <nav>
            <div>
                <h1>Fish CMS</h1>
                <hr/>
                <Button
                    text="Create New Item"
                    type="menu"
                />
                {menuItems}
            </div>
        </nav>
    )
}

export default Menubar;