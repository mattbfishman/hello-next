var PropTypes = require('prop-types');
import styles from './Button.module.scss';

const Button = (props) => {
    let {label, btnType, onClick, Icon} = props;
    
    return (
        <button className={`${styles.btn} ${styles[`btn-${btnType}`]}`} onClick={onClick}>
            {label} {
            Icon && <Icon/>}
        </button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    btnType: PropTypes.string,
}

Button.defaultProps = {
    label: '',
    btnType: 'default'
}

export default Button;