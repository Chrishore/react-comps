import useNavigation from "../hooks/use-navigation";
import { useContext } from "react";
import classNames from "classnames";

function Link({ to, activeClassName, children, ...rest }) {

    const { navigate, currentPath } = useNavigation();
    const classes = classNames(rest.className, "text-blue-500", "hover:underline underline-offset-2", "p-1", "cursor-pointer", currentPath === to && activeClassName);
    const handleLinkclick = (event) => {
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();
        navigate(to);
    }

    return (
        <a className={classes} onClick={handleLinkclick}>{children}</a>
    );
}

export default Link;