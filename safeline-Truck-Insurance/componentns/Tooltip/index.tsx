import React, { useRef, useState } from "react";
import { TooltipIcon } from "@/public/assets/svgs/TooltipIcon";
import { Conditional } from "../Conditional";
import classes from './index.module.css';

interface Props {
    message: string;
};

const Tooltip: React.FC<Props> = ({ message }) => {
    const [ show, setShow ] = useState(false);
    const timeoutId = useRef<NodeJS.Timeout | null>(null);

    const clearTimeoutId = () => {
        timeoutId.current && clearTimeout(timeoutId.current)
    };

    const mouseEnter = () => {
        clearTimeoutId();
        setShow(true);
    };

    const mouseLeave = () => {
        clearTimeoutId();
        timeoutId.current = setTimeout(() => {
            setShow(false);
        }, 100);
    };

    return (
        <div
            className={classes.tooltip}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            <TooltipIcon />
            <Conditional condition={Boolean(show && message)}>
                <span className={classes.tooltipMessage}>{message}</span>
            </Conditional>
        </div>
    );
};

export { Tooltip };