
import classnames from 'classnames';
import { twMerge } from 'tailwind-merge'

function Button({ children, primary, secondary, warning, danger, success, outline, rounded, ...rest }) {
    const baseClassName = twMerge(classnames(rest.className,"flex items-center", "px-3", "py-1.5", "border", {
        'border-blue-500 bg-blue-500 text-white': primary,
        'border-gray-500 bg-gray-500 text-white': secondary,
        'border-yellow-500 bg-yellow-500 text-white': warning,
        'border-red-500 bg-red-500 text-white': danger,
        'border-green-500 bg-green-500 text-white': success,
        'rounded-full': rounded,
        'bg-white': outline,
        'text-blue-500': outline && primary,
        'text-gray-500': outline && secondary,
        'text-yellow-500': outline && warning,
        'text-red-500': outline && danger,
        'text-green-500': outline && success
    }))
    return (
        <button {...rest} className={baseClassName} >{children}</button>
    )
}
Button.prototype = {
    checkVariationValue: ({ primary, secondary, warning, danger, success, outline, rounded }) => {
        const count = Number(!!primary) + Number(!!secondary) + Number(!!warning) + Number(!!danger) + Number(!!success);
        if (count > 1) {
            return new Error("Button must only one color");
        }
    }
}
export default Button;