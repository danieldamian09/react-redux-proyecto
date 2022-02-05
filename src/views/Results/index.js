import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import ResultsList from "./components/ResultsList";
import NoResults from "./components/NoResults";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";

import { useDispatch } from "react-redux";
import { fetchSuperheroes } from "../../redux/actions/superHero";

export default function Results() {
  const { searchText } = useParams();

  // redux
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchSuperheroes(searchText))
  }, []);

  return (
    <div>
      <Header />
      <div className="px-3 pb-2 mt-12">
        <h2 className="text-xl font-bold">Resultados para: {searchText}</h2>
        {/* {isLoading && <Spinner />}
        <ErrorComponent error={error} />
        <ResultsList data={results} />
        {!isLoading && !results?.length && <NoResults />} */}
      </div>
    </div>
  );
}