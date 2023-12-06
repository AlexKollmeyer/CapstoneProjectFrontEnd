import { useEffect, useState } from "react";
import StoreDeals from "../StoreDeals/StoreDeals";
const Store = ({ storeId, fetchStoreDeals }) => {
  const [storeDeals, setStoreDeals] = useState();
  const [storeDealsLoaded, setStoreDealsLoaded] = useState(false);

  useEffect(() => {
    let response = fetchStoreDeals(storeId);
    setStoreDeals(response.data);
    console.log(storeDeals);
    setTimeout(() => {
      setStoreDealsLoaded(true);
    }, 1000);
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Original Price</th>
            <th>Sale Price</th>
            <th>Savings</th>
          </tr>
        </thead>
        {storeDealsLoaded ? (
          <StoreDeals storeDeals={storeDeals} />
        ) : (
          <tbody>
            <tr>
              <td>Loading</td>
              <td>Loading</td>
              <td>Loading</td>
              <td>Loading</td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Store;
