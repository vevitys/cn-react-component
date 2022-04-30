import React  from "react";
import { render,fireEvent } from "@testing-library/react";
import Button, {ButtonProps, ButtonType} from './index';

const defaultProps = {
    onClick:jest.fn()
};

const testProps  = {
    className: "klass",
    btnType: ButtonType.danger,
    onClick:jest.fn()
}

const disableProps  = {
    disabled: true,
    btnType: ButtonType.primary,
    onClick:jest.fn()
}



// 分类
describe('test button component', () => {
   
    // it === test
    it('render default button', () => {
        const wrapper = render(<Button {...defaultProps}>nice</Button>)
        const element = wrapper.getByText('nice');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('button btn-primary btn-middle')
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();
    })
    it('render diffrent props button', () => {
        const wrapper = render(<Button {...testProps}>nice</Button>)
        const element = wrapper.getByText('nice');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('button btn-danger btn-middle klass')
        
    })
    it('render link button', () => {
        const wrapper = render(<Button {...testProps} btnType={ButtonType.link}>Link</Button>)
        const element = wrapper.getByText('Link');
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('A');
        expect(element).toHaveClass('button btn-link btn-middle')
    })
    it('render disabled button', () => {
        const wrapper = render(<Button {...disableProps}>Disable</Button>)
        const element = wrapper.getByText('Disable');
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();
        expect(element.tagName).toEqual('BUTTON');
        fireEvent.click(element);
        expect(disableProps.onClick).not.toBeCalled();
    })
})