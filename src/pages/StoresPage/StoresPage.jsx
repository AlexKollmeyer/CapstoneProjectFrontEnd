import { useEffect, useState } from "react";
import axios from "axios";
import Stores from "../../components/Stores/Stores";
const StoresPage = ({}) => {
  const [stores, setStores] = useState([]);
  const fetchstores = async () => {
    try {
      let response = await axios.get(
        "https://www.cheapshark.com/api/1.0/stores"
      );
      return response.data;
    } catch (error) {
      console.warn("Error with stores get request", error);
    }
  };
  useEffect(() => {
    const fetchActiveStores = async () => {
      try {
        const data = await fetchstores();
        let activeStores = data.filter((item) => item.isActive === 1);
        setStores(activeStores);
        console.log(activeStores);
      } catch (error) {
        console.error("Error fetching or filtering stores:", error);
      }
    };

    fetchActiveStores();
  }, []);
  return (
    <div>
      <Stores stores={stores}></Stores>
    </div>
  );
};

export default StoresPage;
