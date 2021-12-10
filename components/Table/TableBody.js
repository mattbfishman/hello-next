import map from 'lodash/map';
import includes from 'lodash/includes';
import filter from 'lodash/filter';
// import styles from '../../styles/form.module.scss';

var PropTypes = require('prop-types');

function TableBody(props) {
    var {tableData, blacklist} = props,
        tableRows = map(tableData, function(row, idx){
            return <TableRow key={idx} row={row} blacklist={blacklist} />
        });

    return( 
        <tbody>
            {tableRows}
        </tbody>
    )
}

TableBody.propTypes = {
    tableData: PropTypes.array,
    blacklist : PropTypes.array
}

TableBody.defaultProps = {
    tableData: [],
    blacklist: []
}

function TableRow(props) {
    var {row, blacklist} = props,
        rowData = filter(row, function(rowItem, key){
            let inBlacklist = includes(blacklist, key);
            return !inBlacklist ? rowItem : false;
        }),
        items = map(rowData, function(item, idx){

            return <TableItem key={idx} item={item}/>;
        });

    return <tr>{items}</tr>;
}

TableRow.propTypes = {
    row: PropTypes.object,
    blacklist: PropTypes.array
}

TableRow.defaultProps = {
    tableData: {},
    blacklist: []
}

function TableItem(props){
    var {item} = props;

    return <td>{item}</td>;
}

TableItem.defaultProps = {
    item: ''
}

export default TableBody;
  