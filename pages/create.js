import Form from '../components/Form/Form';
import helpers from '../helpers/general';
var getConfig = helpers.getConfig,
    CREATE    = 'create';

function Create() {
    var data         = getConfig(CREATE),
        {formConfig, queryNames, variables, validTypes, typeKey} = data;

    return( 
        <div>
            <h1>Create</h1>
            <Form form={formConfig} variables={variables} queries={queryNames} validTypes={validTypes} typeKey={typeKey} create={true}/>
        </div>
    )
  }
  
  export default Create;
  