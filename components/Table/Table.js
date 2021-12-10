// import { useState } from 'react';
// import map from 'lodash/map';
// import styles from '../../styles/form.module.scss';
import TableHeadings from "./TableHeadings";
import TableBody from "./TableBody";

var PropTypes = require('prop-types');


function Table(props) {
    var {headings, tableData} = props;

    return( 
        <div>
            <table>
                <TableHeadings headings={headings}/>
                <TableBody tableData={tableData}/>
            </table>
        </div>
    )
}

Table.propTypes = {
    headings: PropTypes.array,
    tableData: PropTypes.array
}

Table.defaultProps = {
    headings: [],
    tableData: []
}

export default Table;
  