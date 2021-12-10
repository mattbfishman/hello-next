import Form from '../components/Form/Form';
import helpers from '../helpers/general';
var getConfig = helpers.getConfig,
    CREATE    = 'create';

function Create() {
    var data         = getConfig(CREATE),
        {formConfig} = data;

    return( 
        <div>
            <h1>Create</h1>
            <Form form={formConfig}/>
        </div>
    )
  }
  
  export default Create;
  