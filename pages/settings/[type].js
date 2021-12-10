import { useRouter } from 'next/router'

function SettingsPage() {
  let router = useRouter(),
      {type} = router.query;

    return (
      <div>
        <h1>{type}</h1>
      </div>
    )
  }
  
  export default SettingsPage