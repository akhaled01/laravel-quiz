import { useEffect } from "react";

const Cardio = () => {
  useEffect(() => {
    async function getLoader() {
      const { quantum } = await import("ldrs");
      quantum.register();
    }
    
    getLoader();
  }, []);
  return <l-quantum color="#2E294E" size={100} speed={5}></l-quantum>;
};

export default Cardio;
