import SearchPageResult from "../SearchPageResult/SearchPageResult";
const SearchPageResults = ({ searchPageResults = [] }) => {
  const searchResults = searchPageResults.map((searchPageResult) => (
    <SearchPageResult
      key={searchPageResult.gameID}
      gameId={searchPageResult.gameID}
      cheapestDealId={searchPageResult.cheapestDealID}
      gameName={searchPageResult.external}
      thumbnail={searchPageResult.thumb}
    />
  ));
  return <div>{searchResults}</div>;
};

export default SearchPageResults;
