var PropTypes = require('prop-types');
import styles from './Button.module.scss';

const Button = (props) => {
    let {label, btnType, onClick} = props;
    return (
        <button className={`${styles.btn} ${styles[`btn-${btnType}`]}`} onClick={onClick}>{label}</button>
    )
}

Button.propTypes = {
    label: PropTypes.string,
    btnType: PropTypes.string
}

Button.defaultProps = {
    label: 'button',
    btnType: 'default'
}

export default Button;