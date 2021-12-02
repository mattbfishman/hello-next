var PropTypes = require('prop-types');
import styles from './Button.module.scss';


const Button = (props) => {
    let {text, type} = props;
    return (
        <button className={`${styles.btn} ${styles[`btn-${type}`]}`}>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    type: PropTypes.string
}

Button.defaultProps = {
    text: 'button',
    type: 'default'
}

export default Button;