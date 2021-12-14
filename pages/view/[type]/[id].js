import { useRouter } from 'next/router';
import { gql } from '@apollo/client';
import { request } from "graphql-request";

const GET_ITEM = gql`
   query getItem($id: ID!) {
      getItem(
          id: $id
        ) {
          id
          name
          price
          type
          description
        }
      }
 `;

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
  console.log(query);
  const {id} = query;
  console.log(id);
  const variables = {
    id: "23" 
   };  
   const res = await request('http://localhost:4000/graphql', GET_ITEM, variables); // Line 3  
   const data = res.getItem;  
  return {
    props: {
      data
    }
  };
}

  
export default ViewPage