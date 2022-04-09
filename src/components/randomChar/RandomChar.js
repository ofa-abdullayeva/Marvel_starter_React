import { Component } from 'react';
import MarvelServices from '../../services/MarvelServices';
import './randomChar.scss';
import mjolnir from '../../resources/img/mjolnir.png';
import Spinner from '../../components/spinner/spinner';
import Error from '../Error/Error';

class RandomChar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            char: {},
            loading: true,
            error: false
        }
        //console.log('constructor')
        //setInterval(this.updateCharacter,3000)
       
    }

    marvelService = new MarvelServices();

    componentDidMount(){
        //console.log('Mounted')
        this.updateCharacter()
     //this.timerId = setInterval(this.updateCharacter,3000)
    }

    // componentWillUnmount(){
    //     console.log('unMounted')
    //     clearInterval(this.timerId)
    // }

    onCharLoaded = (char) => {
        this.setState({ char: char, loading: false })
    }

    onCharLoading = () => {
        this.setState({ loading: true })
    }

    onError = () =>{
        this.setState({loading:false,error:true})
    }

    updateCharacter = () => {
        //console.log("update")
        const id = Math.floor(Math.random() * (1011400 - 1011000 + 1) + 1011000);
        this.onCharLoading()
        this.marvelService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError)
        
    }

    render() {
        //console.log('render')
        const { char, loading, error} = this.state;
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
                     onClick={this.updateCharacter}>
                        <div className="inner">try it</div>
                    </button>
                    <img src={mjolnir} alt="mjolnir" className="randomchar__decoration" />
                </div>
            </div>
        )
    }
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