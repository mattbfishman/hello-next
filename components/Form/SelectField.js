var PropTypes = require('prop-types');
import map from 'lodash/map';
import styles from '../../styles/form.module.scss';

function SelectField(props) {
    var {items, label, update, keyName} = props,
        options = map(items, function(item, idx){
            return <SelectOption key={idx} {...item} />
        });

    return( 
        <div className={styles.SelectFieldContainer}>
            <label htmlFor={keyName}>{label}</label>
            <select type="text" name={keyName} onChange={update}>
                {options}
            </select>
        </div>
    )
  }

SelectField.propTypes = {
    label: PropTypes.string,
    items : PropTypes.array,
    keyName: PropTypes.string

}

SelectField.defaultProps = {
    label: '',
    items: [],
    keyName: ''
}

function SelectOption(props){
    var {value, title} = props;

    return <option value={value}>{title}</option>;
}

SelectOption.propTypes = {
    value: PropTypes.PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    title: PropTypes.string,
}


SelectOption.defaultProps = {
    value: false,
    title: '',
}

export default SelectField;
  