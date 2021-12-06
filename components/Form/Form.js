import { useState } from 'react';
import map from 'lodash/map';
import SelectField from './SelectField';
import TextField from './TextField';

var PropTypes = require('prop-types'),
    componets = {
        select : SelectField,
        text   : TextField
    }


function Form(props) {
    const [formData, setFormData] = useState({});       
    const changeFormData = (arg) => {
        var {target} = arg,
            {value, name}  = target,
            newFormData = {...formData};

        newFormData[name] = value;
        setFormData(newFormData);
    }


    var {form} = props,
        formElements = map(form, function(formItem, idx){
            let type      = formItem.type || null,
                Component = componets[type];
            return <Component key={idx} {...formItem} update={changeFormData}/>
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
  