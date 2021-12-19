import constants from '../../helpers/date';
import styles from '../../styles/form.module.scss';
import moment from 'moment';
import { includes } from 'lodash';


var PropTypes  = require('prop-types'),
    FULL_DATE  = constants.FULL_DATE,
    DATE_TYPES = constants.DATE_TYPES;


function TextField(props) {
    var {label, update, keyName, placeholder, value} = props,
        isDate = includes(DATE_TYPES, keyName);

    if (isDate) {
        value = moment(value).format(FULL_DATE);
    }

    return( 
        <div className={styles.TextFieldContainer}>
            <label htmlFor={keyName}>{label}</label>
            <input type="text" disabled={isDate} name={keyName} onChange={update} placeholder={placeholder} value={value}></input>
        </div>
    )
}

TextField.propTypes = {
    label: PropTypes.string,
    keyName: PropTypes.string,
    placeholder: PropTypes.string,
    input: PropTypes.string
}

TextField.defaultProps = {
    label: '',
    keyName: '',
    placeholder: '',
    value: ''
}

export default TextField;
  