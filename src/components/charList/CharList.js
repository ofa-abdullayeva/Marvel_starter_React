import { useState,useEffect, useRef } from 'react';

import MarvelServices from '../../services/MarvelServices';
import Error from '../Error/Error';
import Spinner from '../spinner/spinner';

// import abyss from '../../resources/img/abyss.jpg';
import './charList.scss';


const CharList =(props) => {

    const [characters,setCharacters] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [newItemLoading,setNewItemLoading] = useState(false)
    const [offset,setOffset] = useState(1540)
    const [charEnded,setCharEnded] = useState(false)

    // state = {
    //     characters: [],
    //     loading: true,
    //     error: false,
    //     newItemLoading: false,
    //     offset: 1540,
    //     charEnded:false
    // }

    const marvelService = new MarvelServices();


    const onCharListLoading = (chars) => {

        setNewItemLoading(true);

        // this.setState({
        //  newItemLoading:true,
        // })
    }

    // getCharacList = () => {
    //     this.marvelService
    //         .getAllCharacters()
    //         .then(this.onCharListLoaded)
    //         .catch(this.onError)
    // }
    useEffect(()=>{
        onRequest()
    })
    // componentDidMount() {
    //     // this.getCharacList();
    //     this.onRequest()
    // }

    const onRequest =(offset)=>{
        onCharListLoading()
        marvelService
            .getAllCharacters(offset)
            .then(onCharListLoaded)
            .catch(onError)
    }

    const onCharListLoaded = (chars) => {
        let endded = false;
        if(chars.lenght < 9){
            endded = true
        }

        setCharacters(characters=>[...characters,...chars]);
        setLoading(loading => false);
        setNewItemLoading(newItemLoading=>false);
        setOffset(offset => offset + 9);
        setCharEnded(charEnded => endded);


        // this.setState(({characters, offset})=>({
        //     characters: [...characters,...chars],
        //     loading:false,
        //     newItemLoading:false,
        //     offset: offset + 9,
        //     charEnded: endded
        // }))
    }
 

    const  onError = () => {

        setError(true);
        setLoading(false);
        // this.setState({
        //     error: true,
        //     loading: false
        // })
    }
    const itemRefs = useRef([])

    const renderedItems = (arr) => {
        const renderedArr = arr.map((item,i) => {
            let imageStyle = { 'objectFit': 'cover' };
            if (item.thumbnail.includes('image_not_available')) {
                imageStyle = { 'objectFit': 'unset' };
            }
            return (
                <li
                    key={item.id}
                    ref={(elem) => itemRefs.current[i] = elem}
                    onClick={() => props.onCharSelected(item.id)}
                    className="char__item">
                    <img
                        src={item.thumbnail}
                        style={imageStyle}
                        alt={item.name} />
                    <div className="char__name">{item.name}</div>
                </li>
            )
        });
        return (
            <ul className="char__grid">
                {renderedArr}
            </ul>
        )
    }



        
        const items = renderedItems(characters);
        const errorMesage = error ? <Error/> : null;
        const spinner = loading ? <Spinner /> : null;
        const content = !(loading || error) ? items : null;
        return (
            <div className="char__list">
                {errorMesage}
                {spinner}
                {content}
                <button
                disabled= {newItemLoading}
                onClick = {()=>{onRequest(offset)}}
                style = {{ 'display' : charEnded ? 'none': 'block' }}
                    className="button button__main button__long">
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }


export default CharList;



// import './charList.scss';
// //import abyss from '../../resources/img/abyss.jpg';
// import MarvelServices from '../../services/MarvelServices';
// import Error from '../Error/Error';
// import { Component } from 'react';
// import Spinner from '../spinner/spinner';

// class CharList extends Component {

//     constructor(props) {
//         super(props);

//         this.state = {
//             characters: [],
//             loading: true,
//             error: false
//         }



//     }

//     marvelService = new MarvelServices();

//     getCharacterList = () => {
//         this.marvelService
//             .getAllCharacters()
//             .then(this.onCharListLoaded)
//             .catch(this.onError)
//     }

//     componentDidMount() {
//         this.getCharacterList()
//     }

//     onCharListLoaded = (chars) => {
//         this.setState({
//             characters: chars,
//             loading: false
//         })
//     }

//     onError = () => {
//         this.setState({
//             loading: false,
//             error: true
//         })
//     }


//     renderedItem(arr) {
//         const renderedItems = arr.map(item => {
//             return (
//                 <li className="char__item">
//                     <img src={item.thumbNail} alt="abyss" />
//                     <div className="char__name">{item.name}</div>
//                 </li>
//             )
//         });


//         return (
//             <ul className="char__grid">
//                 {renderedItems}
//             </ul>
//         )
//     }
//     render() {
//         const { characters, loading, error } = this.state
//         const items = this.renderedItems(characters)
//         const errorMesage = error ? <Error /> : null
//         const spinner = loading ? <Spinner /> : null
//         const content = !(loading || error) ? items : null

//         return (
//             <div className="char__list">
//                 {errorMesage}
//                 {spinner}
//                 {content}
//                 <button
//                     className="button button__main button__long">
//                     <div className="inner">load more</div>
//                 </button>
//             </div>
//         )
//     }
// }

