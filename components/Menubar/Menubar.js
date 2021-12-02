import Button from '../Button/Button';
const Menubar = () => {
    return (
        <nav>
            <div>
                <h1>Fish CMS</h1>
                <hr/>
                <Button
                    text="Create New Item"
                    type="menu"
                />
                <h2>Explore</h2>
                <ul>
                    <li>
                        Items
                    </li>
                    <li>
                        Pages
                    </li>
                </ul>
                <h2>Settings</h2>
                <ul>
                    <li>
                        View Type
                    </li>
                    <li>
                        Users
                    </li>
                    <li>
                        Content
                    </li>
                    <li>
                        Admin
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menubar;