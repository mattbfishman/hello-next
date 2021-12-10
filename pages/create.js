import Form from '../components/Form/Form';
import data from '../configs/create';
import helpers from '../helpers/general';
var getConfig = helpers.getConfig,
    CREATE    = 'create';

function Create() {
    var data   = getConfig(CREATE),
        {form} = data;

    return( 
        <div>
            <h1>Create</h1>
            <Form form={form}/>
        </div>
    )
  }
  
  export default Create;
  