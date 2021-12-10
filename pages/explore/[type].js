import { useRouter } from 'next/router';
import Table from '../../components/Table/Table';
import helpers from '../../helpers/general';
import items from '../../mockData/items';
var getConfig = helpers.getConfig;

function ExplorePage() {
  let router                   = useRouter(),
      {type}                   = router.query,
      config                   = getConfig(type),
      {keyBlacklist, headings} = config,
      {data}                   = items;

    return (
      <div>
        <h1>Explore {type}</h1>
        <Table 
          tableData={data} 
          headings={headings}
          keyBlacklist={keyBlacklist}
        />
      </div>
    )
  }
  
  export default ExplorePage