import helpers from '../../../helpers/general';
import constants from '../../../constants/general';
import Form from '../../../components/Form/Form';


var makeRequest = helpers.makeRequest,
    getConfig   = helpers.getConfig,
    pageNames   = constants.PAGE_NAMES,
    VIEW        = pageNames.VIEW;


function ViewPage(props) {
    let {type, id, data, config, queryNames} = props,
        {modify} = queryNames,
        {formConfig, variables}  = config;

    return (
      <div>
        <h1>{type} {id}</h1>
        <Form form={formConfig} pageData={data} variables={variables} queries={modify} defaultDisable={true}/>
      </div>
    )
}

export async function getServerSideProps({query}){
  const {id, type} = query,
        variables  = {
          id: id
        },
        config       = getConfig(type, VIEW),
        {queryNames} = config,
        {get}        = queryNames,
        res          = await makeRequest(get, variables),
        data         = res && res[get];

  return {
    props: {
      data,
      id,
      type,
      config,
      queryNames
    }
  };
}

  
export default ViewPage