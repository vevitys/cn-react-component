import React from "react";
import classnames from 'classnames';

export type MaskProps = {
    className?: string
    style?:string
    visible?: boolean
    afterShow?: () => void
    afterClose?: () => void
    disableBodyScroll?: boolean
    children?: React.ReactNode
    clickable?: boolean
}

const MaskView: React.FC<MaskProps> = (props) => {
    const {className, visible} = props;
    const classname = classnames('mask', props.className)

    return  visible? (
        <div className={classname}>{props.children}</div>
    ): null;
}

export default MaskView;