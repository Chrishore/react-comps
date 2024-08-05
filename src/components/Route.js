import useNavigation from "../hooks/use-navigation";
import { useContext } from "react";

function Route({ path, children }) {
    const { currentPath } = useNavigation();
    if (path === currentPath) return children;
    else return null;
    // switch (currentPath) {
    //     case "/":
    //         return <ButtonPage></ButtonPage>
    //     case "/accordion":
    //         return <AccordionPage></AccordionPage>
    //     case "/dropdown":
    //         return <DropdownPage></DropdownPage>
    // }
}

export default Route;