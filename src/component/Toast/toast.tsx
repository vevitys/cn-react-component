import React, {ReactNode, useMemo} from "react";
import Mask from "../Mask/index";
import classnames from 'classnames';

export type ToastViewProps = {
    visible?: boolean
    duration?: number
    afterClose?: () => void
    content?: ReactNode
    icon?: 'success' | 'fail' | 'info' | 'loading' | ReactNode
    position?: 'center' | 'top' | 'bottom'
    maskClickable?: boolean
    contentClassName?: string
    iconClassName?: string
}

const ToastView: React.FC<ToastViewProps> = (props) => {
    
    const { maskClickable, content, icon, position, iconClassName, contentClassName, afterClose } = props
    const pStyle = useMemo(() => {
        switch(position) {
            case 'top':
                return '20%'
            case 'bottom':
            return '80%'
            default:
            return '50%'
        }
    }, [position])
    return (
        <Mask visible={props.visible} clickable={maskClickable} afterClose={afterClose}>
            <div className="toast" style={{top:pStyle}}>
                <div className={classnames('icon', iconClassName)}>{icon}</div>
                <div className={classnames('content', contentClassName)}>{content}</div>
            </div>
        </Mask>
    )
}

export default ToastView;