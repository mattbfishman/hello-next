import Table from '../../components/Table/Table';
import helpers from '../../helpers/general';
import constants from '../../constants/general';


var getConfig   = helpers.getConfig,
    makeRequest = helpers.makeRequest,
    pageNames   = constants.PAGE_NAMES,
    EXPLORE     = pageNames.EXPLORE;


function ExplorePage(props) {
  let {data, config, type}           = props,
      {keyBlacklist, headings} = config;

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
  const {type}      = query,
        config      = getConfig(type, EXPLORE),
        {queryName} = config,
        res         = await makeRequest(queryName),
        data        = res && res[queryName];

  return {
    props: {
      data,
      config,
      type
    }  
  };
}
  
export default ExplorePage