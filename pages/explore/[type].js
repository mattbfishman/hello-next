import { useRouter } from 'next/router'

function ExplorePage() {
  let router = useRouter(),
      {type} = router.query;

    return (
      <div>
        <h1>Explore {type}</h1>
      </div>
    )
  }
  
  export default ExplorePage