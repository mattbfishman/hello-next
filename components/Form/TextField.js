var PropTypes = require('prop-types');
import styles from '../../styles/form.module.scss';

function TextField(props) {
    var {label, update, keyName, placeholder} = props;

    return( 
        <div className={styles.TextFieldContainer}>
            <label htmlFor={keyName}>{label}</label>
            <input type="text" name={keyName} onChange={update} placeholder={placeholder}></input>
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
  