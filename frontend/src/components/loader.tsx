import { useEffect } from "react";

const Loader = () => {
  useEffect(() => {
    async function getLoader() {
      const { helix } = await import("ldrs");
      helix.register();
    }
    
    getLoader();
  }, []);
  return <l-helix color="purple"></l-helix>;
};

export default Loader;
