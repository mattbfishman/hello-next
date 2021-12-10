// import { useState } from 'react';
// import map from 'lodash/map';
import styles from '../../styles/table.module.scss';
import TableHeadings from "./TableHeadings";
import TableBody from "./TableBody";

var PropTypes = require('prop-types');


function Table(props) {
    var {headings, tableData, keyBlacklist, type} = props;

    return( 
        <div className={styles.TableContainer}>
            <table>
                <TableHeadings headings={headings}/>
                <TableBody tableData={tableData} blacklist={keyBlacklist} type={type}/>
            </table>
        </div>
    )
}

Table.propTypes = {
    headings: PropTypes.array,
    tableData: PropTypes.array,
    keyBlacklist: PropTypes.array
}

Table.defaultProps = {
    headings: [],
    tableData: [],
    keyBlacklist: []
}

export default Table;
  