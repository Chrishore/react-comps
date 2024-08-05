import classNames from "classnames";


function Panel({ children, className, ...rest }) {
    const mergedClassName = classNames("cursor-pointer border rounded p-3 shadow bg-white w-full", className);
    return (
        <div {...rest} className={mergedClassName} >
            {children}
        </div>
    )
}

export default Panel;