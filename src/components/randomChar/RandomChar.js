import { useState,useEffect } from 'react';
import MarvelServices from '../../services/MarvelServices';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../../components/spinner/spinner';
import Error from '../Error/Error';

const RandomChar = ()=> {

    const [char,setChar] = useState({})
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)

        // this.state = {
        //     char: {},
        //     loading: true,
        //     error: false
        // }
        //console.log('constructor')
        //setInterval(this.updateCharacter,3000)
       
   

   const  marvelService = new MarvelServices();

    useEffect(()=>{
        updateCharacter()
         const timerId = setInterval(updateCharacter,100000)
         return () =>{
            clearInterval(timerId)
         }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // componentDidMount(){
    //     //console.log('Mounted')
    //     this.updateCharacter()
    //  //this.timerId = setInterval(this.updateCharacter,3000)
    // }

    // componentWillUnmount(){
    //     console.log('unMounted')
    //     clearInterval(this.timerId)
    // }

   const  onCharLoaded = (char) => {
       setChar(char)
       setLoading(false)
        // this.setState({ char: char, loading: false })
    }

    const onCharLoading = () => {
        setLoading(true)
        // this.setState({ loading: true })
    }

    const onError = () =>{
        setLoading(false)
        setError(true)
        // this.setState({loading:false,error:true})
    }

    const updateCharacter = () => {
        //console.log("update")
        const id = Math.floor(Math.random() * (1011400 - 1011000 + 1) + 1011000);
        onCharLoading()
        marvelService.getCharacter(id)
            .then(onCharLoaded)
            .catch(onError)
        
    }


   
        const errorMesage = error? <Error/> :null
        const spinner = loading? <Spinner/>:null
        const content = !(loading || error)? <View char={char}/>: null

        

        return (
            <div className="randomchar" >
                {/* {loading ? <Spinner/> : <View char={char} />} */}
                {errorMesage}
                {spinner}
                {content}

                <div className="randomchar__static">
                    <p className="randomchar__title">
                        Random character for today!<br />
                        Do you want to get to know him better?
                    </p>
                    <p className="randomchar__title">
                        Or choose another one
                    </p>
                    <button
                     className="button button__main"
                     onClick={updateCharacter}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
                </div>
            </div>
        )
    }


const View = ({ char }) => {
    const { name, description, thumbnail, homepage, wiki } = char
    return (
        <div className="randomchar__block">
            <img src={thumbnail} alt="Random character" className="randomchar__img" />
            <div className="randomchar__info">
                <p className="randomchar__name">{name}</p>
                <p className="randomchar__descr">
                    {description}
                </p>
                <div className="randomchar__btns">

                    <a href={homepage} className="button button__main">
                        <div className="inner">Homepage</div>
                    </a>
                    <a href={wiki} className="button button__secondary">
                        <div className="inner">Wiki</div>
                    </a>

                </div>
            </div>
        </div>
    )
}

export default RandomChar;