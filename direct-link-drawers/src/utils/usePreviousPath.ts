import React from "react";

/**
 * @link https://stackoverflow.com/a/53446665
 * @author Shubham Khatri
 */
export const usePreviousPath = <T = any>(value: T) => {
  const ref = React.useRef<T | null>(null);

  React.useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};
