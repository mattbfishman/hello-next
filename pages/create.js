import Form from '../components/Form/Form';
import data from '../configs/create';


function Create() {
    var {form} = data;
    return( 
        <div>
            <h1>Create</h1>
            <Form form={form}/>
        </div>
    )
  }
  
  export default Create;
  