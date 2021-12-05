var PropTypes = require('prop-types');
import map from 'lodash/map';

const MenuGroup = (props) => {
    let {title, items} = props,
        innerLinks = map(items, function(link, idx){
            return <li key={idx}>{link}</li>
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

export default MenuGroup;