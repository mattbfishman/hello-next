import { useRouter } from 'next/router';
import Table from '../../components/Table/Table';
import helpers from '../../helpers/general';

var getConfig   = helpers.getConfig,
    makeRequest = helpers.makeRequest;


function ExplorePage(props) {
  let router                   = useRouter(),
      {type}                   = router.query,
      config                   = getConfig(type),
      {keyBlacklist, headings} = config,
      {data}                   = props;

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

export async function getServerSideProps(){
  const res = await makeRequest('getItems');  
  const data = res.getItems;  

  return {
    props: {
      data
    }  
  };
}
  
export default ExplorePage