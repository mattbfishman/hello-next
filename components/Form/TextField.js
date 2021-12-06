var PropTypes = require('prop-types')

function TextField(props) {
    var {label, update} = props;

    return( 
        <div>
            <label htmlFor={label}>{label}:</label>
            <input type="text" name={label} onChange={update}></input>
        </div>
    )
  }

TextField.propTypes = {
    label: PropTypes.string
}

TextField.defaultProps = {
    label: ''
}

export default TextField;
  