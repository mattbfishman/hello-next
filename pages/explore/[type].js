import Table from '../../components/Table/Table';
import helpers from '../../helpers/general';
import constants from '../../constants/general';
import cookie from 'cookie';


var getConfig   = helpers.getConfig,
    makeRequest = helpers.makeRequest,
    pageNames   = constants.PAGE_NAMES,
    EXPLORE     = pageNames.EXPLORE;


function ExplorePage(props) {
  let {data, config, type}     = props,
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

export async function getServerSideProps({query, req}){
  const cookies     = req.headers.cookie,
        parsed      = cookie.parse(cookies),
        accessToken = parsed['access-token'],
        {type}      = query,
        config      = getConfig(type, EXPLORE),
        {queryName} = config,
        request     = await makeRequest(queryName, null, accessToken),
        data        = request && request[queryName];

    console.log(accessToken);

  return {
    props: {
      data,
      config,
      type
    }  
  };
}
  
export default ExplorePage