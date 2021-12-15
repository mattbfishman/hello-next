import { useState } from 'react';
import map from 'lodash/map';
import SelectField from './SelectField';
import TextField from './TextField';
import Button from '../Button/Button';
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
    updateEditState = () => {
        setEditState(!editing);
    },
    {form, defaultEdit, pageData} = props,
    [formData, setFormData]   = useState(pageData),
    [editing, setEditState]   = useState(!defaultEdit),
    formElements              = map(form, function(formItem, idx){
            let {type, keyName} = formItem,
                Component       = componets[type],
                value           = formData && formData[keyName];

            return <Component key={idx} {...formItem} value={value} update={changeFormData}/>
        });

    return( 
        <div className={styles.FormContainer}>
            <Button type="button" label="Toggle Edit" onClick={updateEditState}/>
            <form>
                <fieldset disabled={editing} className={styles.InnerContainer}>
                    {formElements}
                </fieldset>
            </form>
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
  