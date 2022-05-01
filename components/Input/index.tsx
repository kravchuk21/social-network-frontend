import React from 'react';
import styles from "./Input.module.css"

type InputPropsType = {
    className?: string;
    type?: "text" | "password" | "email" | "number" | "select"
    disabled?: boolean
    [x: string]: any
}

const Input: React.FC = (props: InputPropsType) => {
    const {className, type = "text", disabled = false, ...rest} = props

    return (
        <input type={type} className={`${className} ${styles.input}`} disabled={disabled} {...rest}/>
    );
};

export default Input;
