import React from "react";
import classnames from 'classnames';
// import './_style.scss';

interface BaseButtonProps {
    className?: string;
    size?: ButtonSize;
    disabled?:boolean;
    children: React.ReactNode;
    href?: string;
    btnType?: ButtonType
}

export type ButtonSize  = 'small' | 'middle' | 'large';

export type ButtonType = 'link' | 'primary'|'danger';

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>
type NativeLinkProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>

export type ButtonProps = Partial<NativeButtonProps&NativeLinkProps>

const Button: React.FC<ButtonProps> = (props) => {
    const {btnType,size, disabled,href,children, className, ...rest} = props;
    const buttonClass= classnames('button',{
        [`btn-${btnType}`]: btnType,
        [`btn-${size}`]: size,
        disabled: btnType === 'link' && disabled,
    }, className)

    if (props.btnType==='link') {
        return <a className={buttonClass} href={href} {...rest}>{children}</a>
    }
    return (
        <button disabled={disabled} className={buttonClass}  {...rest}>{children}</button>
    )
}

Button.defaultProps = {
    btnType: 'primary',
    size: 'middle',
    disabled: false,
}
export default Button;