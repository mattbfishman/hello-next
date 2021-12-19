import constants from '../../helpers/date';
import styles from '../../styles/form.module.scss';
import { includes } from 'lodash';


var PropTypes  = require('prop-types'),
    DATE_TYPES = constants.DATE_TYPES;


function TextField(props) {
    var {label, update, keyName, placeholder, value} = props,
        disable = includes(DATE_TYPES, keyName);

    return( 
        <div className={styles.TextFieldContainer}>
            <label htmlFor={keyName}>{label}</label>
            <input type="text" disabled={disable} name={keyName} onChange={update} placeholder={placeholder} value={value}></input>
        </div>
    )
}

TextField.propTypes = {
    label: PropTypes.string,
    keyName: PropTypes.string,
    placeholder: PropTypes.string
}

TextField.defaultProps = {
    label: '',
    keyName: '',
    placeholder: ''
}

export default TextField;
  