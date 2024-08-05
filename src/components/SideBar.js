import Link from "./Link";


function SideBar({ links }) {

    const linkToBeRenderd = links.map((link) => {
        return <Link activeClassName="font-bold border-l-4 border-blue-500 pl-2" className="mb-2" key={link.label} to={link.path}>{link.label}</Link>
    });

    return (
        <div className="sticky top-0 flex flex-col items-start h-screen">
            {linkToBeRenderd}
        </div>
    )
}

export default SideBar;