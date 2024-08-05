import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Route from "./components/Route";
import SideBar from "./components/SideBar";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";
import CounterPage from "./pages/CounterPage";

function App() {
    const links = [
        { label: "Accordion", path: "/accordion" },
        { label: "Button", path: "/button" },
        { label: "Dropdown", path: "/dropdown" },
        { label: "Modal", path: "/modal" },
        {label:"Table", path: "/table"},
        {label:"Counter", path: "/counter"}
    ];
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <SideBar links={links}></SideBar>
            <div className="col-span-5">
                <Route path="/dropdown">
                    <DropdownPage></DropdownPage>
                </Route>
                <Route path="/accordion">
                    <AccordionPage></AccordionPage>
                </Route>
                <Route path="/button">
                    <ButtonPage></ButtonPage>
                </Route>
                <Route path="/modal">
                    <ModalPage></ModalPage>
                </Route>
                <Route path="/table">
                    <TablePage></TablePage>
                </Route>
                <Route path="/counter">
                    <CounterPage></CounterPage>
                </Route>
            </div>
        </div>

    )
}

export default App;