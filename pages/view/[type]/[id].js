import helpers from '../../../helpers/general';
import constants from '../../../constants/general';
import Form from '../../../components/Form/Form';


var makeRequest = helpers.makeRequest,
    getConfig   = helpers.getConfig,
    pageNames   = constants.PAGE_NAMES,
    VIEW        = pageNames.VIEW;


function ViewPage(props) {
    let {type, id, data, config} = props,
        {formConfig}             = config;

    return (
      <div>
        <h1>{type} {id}</h1>
        <Form form={formConfig} pageData={data} defaultDisable={true}/>
      </div>
    )
}

export async function getServerSideProps({query}){
  const {id, type}  = query,
        variables   = {
          id: id
        },
        config      = getConfig(type, VIEW),
        {queryName} = config,
        res         = await makeRequest(queryName, variables),
        data        = res && res[queryName];

  return {
    props: {
      data,
      id,
      type,
      config
    }
  };
}

  
export default ViewPage