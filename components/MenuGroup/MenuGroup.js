var PropTypes = require('prop-types');
import Link from 'next/link';
import map from 'lodash/map';

const MenuGroup = (props) => {
    let {title, items} = props,
        innerLinks = map(items, function(item, idx){
            return <MenuItem key={idx} {...item}/>
        });

    return (
        <div>
            <h2>{title}</h2>
            <ul>
                {innerLinks}
            </ul>
        </div>
    )
}

MenuGroup.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
}

MenuGroup.defaultProps = {
    title: '',
    items: []
}

function MenuItem(props){
    let {to, label} = props;
    return (
        <Link href={to}>
            <a>
                <li>
                    {label}
                </li>
            </a>
        </Link>
    )
}

MenuItem.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string
}

MenuItem.defaultProps = {
    to: '#',
    label: ''
}


export default MenuGroup;