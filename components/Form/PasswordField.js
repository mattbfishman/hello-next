import constants from '../../helpers/date';
import styles from '../../styles/form.module.scss';
import moment from 'moment';
import { includes } from 'lodash';
var ALL = 'all';


var PropTypes  = require('prop-types'),
    FULL_DATE  = constants.FULL_DATE,
    DATE_TYPES = constants.DATE_TYPES;


function PasswordField(props) {
    var {label, update, keyName, placeholder, value, span} = props,
        isDate = includes(DATE_TYPES, keyName),
        style  = {};

    if (isDate) {
        value = moment(value).format(FULL_DATE);
    }
    
    if (span === ALL){
        style.gridColumnStart = 1;
        style.gridColumnEnd = -1;
    }

    return( 
        <div className={styles.TextFieldContainer} style={style}>
            <label htmlFor={keyName}>{label}</label>
            <input type="password" disabled={isDate} name={keyName} onChange={update} placeholder={placeholder} value={value}></input>
        </div>
    )
}

PasswordField.propTypes = {
    label: PropTypes.string,
    keyName: PropTypes.string,
    placeholder: PropTypes.string,
}

PasswordField.defaultProps = {
    label: '',
    keyName: '',
    placeholder: '',
}

export default PasswordField;
  