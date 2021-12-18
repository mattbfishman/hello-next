import { useState } from 'react';
import map from 'lodash/map';
import SelectField from './SelectField';
import TextField from './TextField';
import Button from '../Button/Button';
import FormMenu from './FormMenu';
import styles from '../../styles/form.module.scss';


var PropTypes = require('prop-types'),
    componets = {
        select : SelectField,
        text   : TextField,
        button : Button
    }

    
function Form(props) {     
    const changeFormData = (arg) => {
        var {target}      = arg,
            {value, name} = target,
            newFormData   = {...formData};

        newFormData[name] = value;
        setFormData(newFormData);
    },
    updateEditState = (e) => {
        e.preventDefault();
        setEditState(!editing);
    },
    {form, defaultDisable, pageData} = props,
    [formData, setFormData]   = useState(pageData),
    [editing, setEditState]   = useState(defaultDisable),
    formElements              = map(form, function(formItem, idx){
            let {type, keyName} = formItem,
                Component       = componets[type],
                value           = formData && formData[keyName];

            return <Component key={idx} {...formItem} value={value} update={changeFormData}/>
        });

    return( 
        <div className={styles.FormContainer}>
            <form>
                <FormMenu btnUpdate={updateEditState} editing={editing} defaultDisable={defaultDisable}/>
                <fieldset disabled={editing} className={styles.InnerContainer}>
                    {formElements}
                </fieldset>
            </form>
        </div>
    )
}

Form.propTypes = {
    form: PropTypes.array,
    pageData: PropTypes.object,
    defaultDisable: PropTypes.bool
}

Form.defaultProps = {
    form: [],
    pageData: {},
    defaultDisable: false
}

export default Form;
  