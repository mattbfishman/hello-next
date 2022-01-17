import { useState } from 'react';
import {map, isObject, includes} from 'lodash';
import SelectField from './SelectField';
import PasswordField from './PasswordField';
import TextField from './TextField';
import Button from '../Button/Button';
import FormMenu from './FormMenu';
import styles from '../../styles/form.module.scss';
import { useRouter } from 'next/router';
import {generateID, makeRequest, mapVariables} from '../../helpers/general';

var PropTypes = require('prop-types'),
    componets = {
        select : SelectField,
        text   : TextField,
        button : Button,
        password: PasswordField
    };

    
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
    submitForm = (e) => {
        e.preventDefault();
        if(formUpdated){
            var {variables, queries, validTypes, typeKey, create} = props,
                mappedVariables = mapVariables(variables, formData),
                type = typeKey && formData && formData[typeKey],
                query, isValid;
            
            if(isObject(queries)){
                isValid = includes(validTypes, type);
                if(isValid){
                    query = queries && queries[type];
                }
            } else {
                query = queries;
            }

            if(!mappedVariables._id){
                mappedVariables._id = generateID();
            }

            makeRequest(query, mappedVariables);
            setFormUpdatedState(false);

            if(defaultDisable) {
                updateEditState(e);
            }
            
            if(create){
                setFormData({});
            }
        }
    },
    {form, defaultDisable, pageData, hideFormMenu, className} = props,
    [formData, setFormData]    = useState(pageData),
    [editing, setEditState]    = useState(defaultDisable),
    [formUpdated, setFormUpdatedState] = useState(false),
    formClassName = className ? className : styles.FormContainer,
    formElements               = map(form, function(formItem, idx){
            let {type, keyName} = formItem,
                Component       = componets[type],
                value           = formData && formData[keyName] || '';
            return Component ? <Component key={idx} {...formItem} value={value} update={changeFormData}/> : null;
        });

    return( 
        <div className={formClassName}>
            <form onChange={() => setFormUpdatedState(true)}>
                {!hideFormMenu && <FormMenu btnUpdate={updateEditState} editing={editing} submit={submitForm} defaultDisable={defaultDisable}/>}
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
    defaultDisable: PropTypes.bool,
    variables: PropTypes.array,
    create: PropTypes.bool,
    hideFormMenu: PropTypes.bool,
    className: PropTypes.string
}

Form.defaultProps = {
    form: [],
    pageData: {},
    defaultDisable: false,
    variables: [],
    create: false,
    hideFormMenu: false
}

export default Form;
  