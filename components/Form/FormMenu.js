import Button from '../Button/Button';
import { FaLock, FaLockOpen } from "react-icons/fa";
import styles from '../../styles/form.module.scss';

var PropTypes = require('prop-types');


function FormMenu(props) {
    var {btnUpdate, editing, defaultDisable, submit} = props,
    icon = editing ? FaLock : FaLockOpen;

    return( 
        <div className={styles.formMenu}>
            <Button btnType="save" label="save changes" onClick={submit}></Button>
            { defaultDisable ? <Button btnType="toggle" Icon={icon} onClick={btnUpdate}/> : null }
        </div>
    )
}

FormMenu.propTypes = {
    btnUpdate: PropTypes.func,
    submit: PropTypes.func,
    editing: PropTypes.bool,
    defaultDisable: PropTypes.bool
}

FormMenu.defaultProps = {
    btnUpdate:  () => {},
    submit: () => {},
    editing: false,
    defaultDisable: false
}

export default FormMenu;
  