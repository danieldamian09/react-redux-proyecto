import {useEffect} from "react";
import {useParams} from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import ResultsList from "./components/ResultsList";
import NoResults from "./components/NoResults";
import Header from "../../components/Header";
import Spinner from "../../components/Spinner";

//* para Redux
import {useDispatch} from "react-redux";
import {fetchSuperheroes} from "../../redux/actions/superHero";
import {useSelector, shallowEqual} from "react-redux";
//* los selectores
import {
	isFectchingSuperheroSel,
	superHeroesErrorSel,
	superheroesSel,
} from "../../redux/selector";

export default function Results() {
	const {searchText} = useParams();

	//* instanciar useDispatch
	const dispatch = useDispatch();
	//* nuestras banderas que viene de los selectores
	const isFectchingSuperhero = useSelector(isFectchingSuperheroSel, shallowEqual);
  const superHeroesErr = useSelector(superHeroesErrorSel, shallowEqual)
  const superHeroes = useSelector(superheroesSel, shallowEqual)

	//* en el useEffect disparo mi actions que va a hacer la llamada a la API por medio del thunk
	useEffect(() => {
		dispatch(fetchSuperheroes(searchText));
	}, []);

	return (
		<div>
			<Header />
			<div className="px-3 pb-2 mt-12">
				<h2 className="text-xl font-bold">Resultados para: {searchText}</h2>
				{isFectchingSuperhero && <Spinner />}
        <ErrorComponent error={superHeroesErr} />
        <ResultsList data={superHeroes} />
        {!isFectchingSuperhero && !superHeroes?.length && <NoResults />}
			</div>
		</div>
	);
}
