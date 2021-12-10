import map from 'lodash/map';
// import styles from '../../styles/form.module.scss';

var PropTypes = require('prop-types');

function TableBody(props) {
    var {tableData} = props,
        tableRows = map(tableData, function(row, idx){
            return <TableRow key={idx} row={row} />
        });

    return( 
        <tbody>
            {tableRows}
        </tbody>
    )
}

TableBody.propTypes = {
    tableData: PropTypes.array
}

TableBody.defaultProps = {
    tableData: []
}

function TableRow(props) {
    var {row} = props,
        items = map(row, function(item, idx){
            return idx !== 'id' ? <TableItem key={idx} item={item}/> : null //change to property or blacklist for certain keys
        });

    return <tr>{items}</tr>;
}

TableRow.propTypes = {
    row: PropTypes.object
}

TableRow.defaultProps = {
    tableData: {}
}

function TableItem(props){
    var {item} = props;

    return <td>{item}</td>;
}

TableItem.propTypes = {
    item: PropTypes.string
}

TableItem.defaultProps = {
    item: ''
}

export default TableBody;
  