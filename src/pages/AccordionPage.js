import Accordion from "../components/Accordion";

const AccordionPage = function () {
    const items = [
        {
            id: "2123",
            label: "Title 1",
            content: "This Accordion 1"
        },
        {
            id: "3rw",
            label: "Title 2",
            content: "This Accordion 2"
        },
        {
            id: "23rwer",
            label: "Title 3",
            content: "This Accordion 3"
        }
    ];
    return (
        <div>
            <Accordion items={items}></Accordion>
        </div>
    );

}


export default AccordionPage;