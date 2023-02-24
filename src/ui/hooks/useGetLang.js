import { useEffect } from "react";

export default () => {
  useEffect(() => {
    document.documentElement.lang;
  }, []);
};
