import { useRouter } from 'next/router'

function ViewPage() {
  let router = useRouter(),
      {type, id} = router.query;

    return (
      <div>
        <h1>{type} {id}</h1>
      </div>
    )
  }
  
  export default ViewPage