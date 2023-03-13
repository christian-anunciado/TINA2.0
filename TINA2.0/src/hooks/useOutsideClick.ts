import { useEffect } from "react";

type Callback = () => void;
type Ref = React.MutableRefObject<HTMLElement | null>;
type ParentRef = React.MutableRefObject<HTMLElement | null>;

export const useClickOutside = (
  parentRef: ParentRef,
  ref: Ref,
  callback: Callback
) => {
  const handleClick = (e) => {
    if (!ref.current || ref.current.contains(e.target)) {
      return;
    }
    if (parentRef.current && parentRef.current.contains(e.target)) {
      return;
    }
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};
