
import './App.css';
import Header from './component/Header';
import Moviescard from './component/Moviescard';
import user from "../src/user"
import Navbar from './component/Navbar';
function App() {

// const user = [
//   {
//     poster:"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     Name:"Bhisma",
//     Year:"2023"
    
//   },
//   {
//     poster:"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     Name:"Bhisma",
//     Year:"2023"
    
//   },
//   {
//     poster:"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     Name:"Bhisma",
//     Year:"2023"
    
//   },
//   {
//     poster:"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     Name:"Bhisma",
//     Year:"2023"
    
//   },
//   {
//     poster:"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     Name:"Bhisma",
//     Year:"2023"
    
//   },
//   {
//     poster:"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     Name:"Bhisma",
//     Year:"2023"
    
//   },
//   {
//     poster:"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     Name:"Bhisma",
//     Year:"2023"
    
//   },
//   {
//     poster:"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     Name:"Bhisma",
//     Year:"2023"
    
//   },
//   {
//     poster:"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     Name:"Bhisma",
//     Year:"2023"
    
//   },
//   {
//     poster:"https://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg",
//     Name:"Bhisma",
//     Year:"2023"
    
//   },
// ]


//This line is very important for understand to concept .
  // const Avataruser = user.map((user)=> (<Avatar  src={user.img} name={user.name}/>))
// Given above line is very imp for understand 
 
const Moviesuser = user.map((user)=>(
  <Moviescard src={user.poster} name={user.Name} year={user.Year}/>
))



  return (
    <div className="App">
    <Navbar/>

    <Header/>

    <div className='main'>
    

      
  {Moviesuser}
    </div>
    </div>
  );
}

export default App;
