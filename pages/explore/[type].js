import { useRouter } from 'next/router';
import Table from '../../components/Table/Table';
import helpers from '../../helpers/general';
import items from '../../mockData/items';
var getTableHeadings = helpers.getTableHeadings;

function ExplorePage() {
  let router = useRouter(),
      {type} = router.query,
      {headings} = getTableHeadings(type),
      {data} = items;

    return (
      <div>
        <h1>Explore {type}</h1>
        <Table headings={headings} tableData={data} />
      </div>
    )
  }
  
  export default ExplorePage