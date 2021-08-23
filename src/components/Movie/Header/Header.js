import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import styles from './Header.module.css';
import {UserInfo} from "../UserInfo";
import {SearchPanel} from "../SearchPanel";
import {GenresSelect} from "../GenresSelect";
import {ToggleThem} from "../ToggleThem";
import {Navbar} from "../Mob/Navbar";



export const Header = () => {
    const {theme} = useSelector(({theme}) => theme);



    return (
        <div className={`${styles.header} ${theme ? styles.dark : styles.white}`}>
            <Link to="/" className={`${styles.logo} ${theme ? styles.dark : styles.white}`}><b><i>Home</i></b></Link>
            {/*<SearchPanel/>*/}
            {/*<GenresSelect/>*/}
            {/*<ToggleThem/>*/}
            {/*<UserInfo/>*/}

            <Navbar/>

        </div>
    );
}
