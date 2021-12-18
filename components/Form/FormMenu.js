import Button from '../Button/Button';
import { FaLock, FaLockOpen } from "react-icons/fa";

var PropTypes = require('prop-types');


function FormMenu(props) {
    var {btnUpdate, editing, defaultDisable} = props,
    icon = editing ? FaLock : FaLockOpen;

    return( 
        <div className="formMenu">
            { defaultDisable ? <Button btnType="toggle" Icon={icon} onClick={btnUpdate}/> : null }
            <Button btnType="save" label="save changes"></Button>
        </div>
    )
}

FormMenu.propTypes = {
    btnUpdate: PropTypes.func,
    editing: PropTypes.bool,
    defaultDisable: PropTypes.bool
}

FormMenu.defaultProps = {
    btnUpdate:  () => {},
    editing: false,
    defaultDisable: false
}

export default FormMenu;
  