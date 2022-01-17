var PropTypes = require('prop-types');
import Form from '../Form/Form';
import helpers from '../../helpers/general';
import styles from '../../styles/login.module.scss';

var getConfig = helpers.getConfig,
    LOGIN    = 'login';

const Login = (props, context) => {
    var {setUser}    = props,
        data         = getConfig(LOGIN),
        {formConfig, variables} = data;


    return( 
        <div className={styles.LoginContainer}>
            <div className={styles.InnerLoginContainer}>
                <Form form={formConfig} variables={variables} create={false} hideFormMenu={true} className={styles.LoginForm} setUser={setUser}/>
            </div>
        </div>
    )
}

Login.propTypes = {
    // label: PropTypes.string,
    // btnType: PropTypes.string,
}

Login.defaultProps = {
    // label: '',
    // btnType: 'default'
}

export default Login;