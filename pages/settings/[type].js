import { useRouter } from 'next/router'

function SettingsPage() {
  let router = useRouter(),
      {type} = router.query;

    return (
      <div>
        <h1>Settings {type}</h1>
      </div>
    )
  }
  
  export default SettingsPage