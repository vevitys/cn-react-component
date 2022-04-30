import React from "react";
interface BaseButtonProps {
    className?: string;
    size?: ButtonSize;
    disabled?: boolean;
    children: React.ReactNode;
    href?: string;
    btnType?: ButtonType;
}
export declare type ButtonSize = 'small' | 'middle' | 'large';
export declare type ButtonType = 'link' | 'primary' | 'danger';
declare type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
declare type NativeLinkProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export declare type ButtonProps = Partial<NativeButtonProps & NativeLinkProps>;
declare const Button: React.FC<ButtonProps>;
export default Button;
