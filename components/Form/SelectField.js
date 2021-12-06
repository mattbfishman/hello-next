var PropTypes = require('prop-types');
import map from 'lodash/map';

function SelectField(props) {
    var {items, label, update} = props,
        options = map(items, function(item, idx){
            return <SelectOption key={idx} {...item} />
        });

    return( 
        <div>
            <label htmlFor={label}>{label}:</label>
            <select type="text" name={label} onChange={update}>
                {options}
            </select>
        </div>
    )
  }

SelectField.propTypes = {
    label: PropTypes.string,
    items : PropTypes.array
}

SelectField.defaultProps = {
    label: '',
    items: []
}

function SelectOption(props){
    var {value, title} = props;

    return <option value={value}>{title}</option>;
}

SelectOption.propTypes = {
    value: PropTypes.string,
    title: PropTypes.string
}


SelectOption.defaultProps = {
    value: '',
    title: ''
}

export default SelectField;
  