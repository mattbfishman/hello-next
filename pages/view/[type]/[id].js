import { useRouter } from 'next/router';
import helpers from '../../../helpers/general';
var makeRequest = helpers.makeRequest;


function ViewPage(props) {
  let router = useRouter(),
      {type, id} = router.query;
      console.log(props);
    return (
      <div>
        <h1>{type} {id}</h1>

      </div>
    )
}

export async function getServerSideProps({query}){
  const {id} = query;
  const variables = {
    id: id 
  };  
  const res = await makeRequest('getItem', variables);
  const data = res.getItem;  
  
  return {
    props: {
      data
    }
  };
}

  
export default ViewPage