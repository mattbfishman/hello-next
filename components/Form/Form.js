import map from 'lodash/map';
import SelectField from './SelectField';
import TextField from './TextField';

var PropTypes = require('prop-types'),
    componets = {
        select : SelectField,
        text   : TextField
    }


function Form(props) {
    var {form} = props,
        formElements = map(form, function(formItem, idx){
            let type      = formItem.type || null,
                Component = componets[type];
            return <Component key={idx} {...formItem}/>
        });

    return( 
        <div>
            {formElements}
        </div>
    )
  }

Form.propTypes = {
    form: PropTypes.array
}

Form.defaultProps = {
    form: []
}

export default Form;
  