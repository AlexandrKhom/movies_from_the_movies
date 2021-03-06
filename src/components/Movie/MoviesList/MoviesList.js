import { useSelector } from "react-redux";

import styles from "./MoviesList.module.css";
import { MoviesListCard } from "../MoviesListCard";
import { Loading } from "../Loading";
import { Pagination } from "../Pagination";
import {ScrollToTopOnMount} from "../../CV/ScrollToTopOnMount/ScrollToTopOnMount";
import {ScrollToTop} from "../Mobile/ScrollToTop";

export const MoviesList = () => {
  const { movies, isLoading } = useSelector(({ movies: { movies, isLoading } }) => ({ movies, isLoading }))

  if (isLoading) {
    return (<Loading/>)
  }

  return (
      <div className={styles.wrapper}>
        {!!movies.length && <Pagination/>}
        <div className={styles.wrapperList}>
            <ScrollToTop/>
          {
            movies.length
                ? movies.map(movie => <MoviesListCard key={movie.id} item={movie}/>)
                : <div><h2>Sorry... Film not found 🥺</h2></div>
          }
        </div>
          <ScrollToTopOnMount/>
          {!!movies.length && <Pagination/>}
      </div>
  );
}
