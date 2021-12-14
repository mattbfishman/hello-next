import { useRouter } from 'next/router';
import Table from '../../components/Table/Table';
import helpers from '../../helpers/general';
import { gql } from '@apollo/client';
import { request } from "graphql-request";

var getConfig = helpers.getConfig;
const GET_ITEMS = gql`
  query getItems {
    getItems{
      id
      name
      description
      date
    }
  }
`;


function ExplorePage(props) {
  let router                   = useRouter(),
      {type}                   = router.query,
      config                   = getConfig(type),
      {keyBlacklist, headings} = config,
      {data}                   = props;
      console.log(props);

    return (
      <div>
        <h1>Explore {type}</h1>
        <Table 
          tableData={data} 
          headings={headings}
          keyBlacklist={keyBlacklist}
          type={type}
        />
      </div>
    )
}

export async function getServerSideProps({query}){
  const res = await request('http://localhost:4000/graphql', GET_ITEMS); // Line 3  
  const data = res.getItems;  
 return {
   props: {
     data
   }
 };
}
  
export default ExplorePage