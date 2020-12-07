import logo from './logo.svg';
import './App.css';
import ShakespeareBibliography from './ShakespeareBibliography';
import MyFavoriteMovie from './MyFavoriteMovie';

function App() {

  // ShakespeareBibliography start
  let bibliographyPart1 = "part1";
  let bibliographyPart2 = "part2";
  let bibliographicalList = [
    "part3",
    "part4",
    "part5",
    "part6",
    "part7"
  ];
  // ShakespeareBibliography end


  //MyFavoriteMovie start
  let movie = {
    name: "Дежа вю",
    writer: "Тони Скотт",
    year: "2006",
    actors: [
      "Дензел Вашингтон",
      "Джеймс Кэвизел",
      "Пола Пэттон",
      "Вэл Килмер",
      "Брюс Гринвуд",
      "Адам Голдберг",
    ],
    filmStudio: "Jerry Bruckheimer Films",
    poster: "https://upload.wikimedia.org/wikipedia/ru/thumb/e/ef/D%C3%A9j%C3%A0_Vu.jpg/303px-D%C3%A9j%C3%A0_Vu.jpg"
  };
  //MyFavoriteMovie end

  return (
    <div>
      <h1>Learning props in React</h1>
      <h2>Patrs of Shakespeare's bibliography</h2>
      <ShakespeareBibliography partOne={bibliographyPart1} partTwo={bibliographyPart2} partsList={bibliographicalList}></ShakespeareBibliography>
      <hr/><hr/>
      <h2>My favorite movie</h2>
      <MyFavoriteMovie movie={movie}></MyFavoriteMovie>
    </div>
  );
}

export default App;
