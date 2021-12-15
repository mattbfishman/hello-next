import { includes, reduce, map } from 'lodash';
import Link from 'next/link';
import moment from 'moment';
import constants from '../../helpers/date';

var PropTypes = require('prop-types'),
    NAME      = 'name',
    DATE      = constants.DATE,
    FULL_DATE = constants.FULL_DATE;

function TableBody(props) {
    var {tableData, blacklist, type} = props,
        tableRows = map(tableData, function(row, idx){
            return <TableRow key={idx} row={row} blacklist={blacklist} type={type} />
        });

    return( 
        <tbody>
            {tableRows}
        </tbody>
    )
}

TableBody.propTypes = {
    tableData: PropTypes.array,
    blacklist : PropTypes.array,
    type: PropTypes.string
}

TableBody.defaultProps = {
    tableData: [],
    blacklist: [],
    type: ''
}

function TableRow(props) {
    var {row, blacklist, type} = props,
        id = row.id,
        rowData = reduce(row, function(ret, item, key){
            let inBlacklist = includes(blacklist, key);
            if(!inBlacklist){
                ret[key] = item;
            }

            return ret;
        },{}),
        items = map(rowData, function(item, idx){
            var path, tableItem;

            if(idx === NAME && type) {
                path = `/view/${type}/${id}`;
            }

            if(idx === DATE){
                item = moment(item).format(FULL_DATE);
            }

            return tableItem = <TableItem key={idx} item={item} path={path}/>;
        });

    return <tr>{items}</tr>;
}

TableRow.propTypes = {
    row: PropTypes.object,
    blacklist: PropTypes.array,
    type: PropTypes.string
}

TableRow.defaultProps = {
    tableData: {},
    blacklist: [],
    type: ''
}

function TableItem(props){
    var {item, path} = props;

    if(path){
        return (
            <td>
                <Link href={path}>
                    <a>{item}</a>
                </Link>
            </td>
        );

    } else {
        return <td>{item}</td>;
    }
}

TableItem.defaultProps = {
    item: ''
}

export default TableBody;
  