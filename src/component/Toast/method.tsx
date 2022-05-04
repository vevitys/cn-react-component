import { log } from 'console';
import {createRef, forwardRef, useEffect, useImperativeHandle, useMemo, useState} from 'react';
import ReactDOM from 'react-dom';
import ToastView, { ToastViewProps} from './toast';

const defaultProps = {
    duration: 2000,
    maskClickable: true,
}

type toastShowProps = Omit<ToastViewProps, 'visible'>

export type ToastHandler = {
    close: () => void
  }
  
type ToastShowRef = ToastHandler
const containers = [] as HTMLDivElement[]
export const show = (props: toastShowProps) => {
    // const props = typeof p === 'string' ? {...defaultProps, content: p} : {...defaultProps, ...p}
    props = {
        ...defaultProps,
        ...props,
    }
    let timer: any = null;
    const TempToast = forwardRef<ToastShowRef>((tempProps, ref) => {
        const [visible, setVisible] = useState(true);

        useEffect(() => {
            console.log(props.duration, '12321')
            timer = setTimeout(() => {
                setVisible(false);
                unmount(container);
            }, props.duration) 
            return () => {
                window.clearTimeout(timer)
            }
        }, [])
        useImperativeHandle(ref, () => {
            return {
                close: () => {
                    setVisible(false)
                }
            }
        })
        return (
            <ToastView {...props} visible={visible} />
        );
    })

    const container = document.createElement('div');
    document.body.appendChild(container);
    clear();
    containers.push(container);
    const toastRef = createRef<ToastShowRef>();
    ReactDOM.render(<TempToast ref={toastRef}/>, container)
}

export function clear () {
    const container = containers.pop();
    console.log(container)
    if (container) {
        unmount(container)
    }
}

function unmount(container: HTMLDivElement) {
    console.log(111);
    
    const unmountResult = ReactDOM.unmountComponentAtNode(container)
    console.log(unmountResult, container);
    if (unmountResult && container.parentNode) {
      container.parentNode.removeChild(container)
    }
}

const Toast = {
    show,
}

export default Toast;