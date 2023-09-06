import React, { useState } from "react";
import classes from "./index.module.css";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  delay?: number;
}

const Tooltip: React.FC<TooltipProps> = ({ children, content, delay = 150 }) => {
  let timeout: NodeJS.Timeout | undefined;
  const [active, setActive] = useState(false);

  const showTip = () => {
    timeout = setTimeout(() => setActive(true), delay);
  };

  const hideTip = () => {
    if (timeout) {
      clearTimeout(timeout);
    }
    setActive(false);
  };

  return (
    <div
      className={classes["tooltip-wrapper"]}
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {children}
      {active && (
        <div className={classes["tooltip-note"]}>
          <div className={`${classes["tooltip-tip"]} ${classes["carrierTooltip"]}`}>
            {content}
          </div>
        </div>
      )}
    </div>
  );
};

export { Tooltip };