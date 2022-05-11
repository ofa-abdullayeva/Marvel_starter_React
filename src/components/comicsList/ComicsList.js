import { useState,useEffect } from 'react';
import './comicsList.scss';
import MarvelServices from '../../services/MarvelServices';


import Error from '../Error/Error';
import Spinner from '../spinner/spinner'


const ComicsList = () => {

    const [comicsList,setComicsList] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [newItemLoading,setNewItemLoading] = useState(false)
    const [offset,setOffset] = useState(0)
    const [charEnded,setCharEnded] = useState(false)


    const marvelService = new MarvelServices();


    useEffect(()=>{
        onRequest();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const onCharListLoading = (chars) => {

        setNewItemLoading(true);

    }

    const onRequest =(offset)=>{
        onCharListLoading()
        marvelService
            .getAllComics(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }

    const onCharListLoaded = (newComicsList) => {
        let endded = false;
        if(newComicsList.lenght < 8){
            endded = true
        }

        setComicsList(comicsList=>[...comicsList,...newComicsList]);
        setLoading(loading => false);
        setNewItemLoading(newItemLoading=>false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => endded);


    }
 

    const  onError = () => {

        setError(true);
        setLoading(false);
        
    }

    const renderItems = (arr) => {
        const items = arr.map((item, i) => {
            return (
                <li className="comics__item" key={i}>
                    <a href="#!">
                        <img src={item.thumbnail} alt={item.title} className="comics__item-img" />
                        <div className="comics__item-name">{item.title}</div>
                        <div className="comics__item-price">{item.price}</div>
                    </a>
                </li>
            )
        });
        return (
            <ul className="comics__grid">
                {items}
            </ul>
        )
    }
    const items = renderItems(comicsList);
    const errorMessage = error ? <Error/> : null;
    const spinner = loading && !newItemLoading ? <Spinner/> : null;

    return (
        <div className="comics__list">
            {errorMessage}
            {spinner}
            {items}
            <button
                disabled={newItemLoading}
                style={{ 'display': charEnded ? 'none' : 'block' }}
                onClick={() => onRequest(offset)}
                className="button button__main button__long">
                <div className="inner">load more</div>
            </button>
        </div>
    )
}

export default ComicsList;