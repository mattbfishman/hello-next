import map from 'lodash/map';
// import styles from '../../styles/form.module.scss';

var PropTypes = require('prop-types');

function TableHeadings(props) {
    var {headings} = props,
        headingItems = map(headings, function(heading, idx){
            return <th key={idx}>{heading}</th>
        });

    return( 
        <thead>
            <tr>
                {headingItems}
            </tr>
        </thead>
    )
}

TableHeadings.propTypes = {
    headings: PropTypes.array
}

TableHeadings.defaultProps = {
    headings: []
}

export default TableHeadings;
  