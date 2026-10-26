import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Footer from './components/Footer.jsx';
import ProfileCard from './components/ProfileCard.jsx';
import CounterButton from './components/CounterButton.jsx';
import Profile from './components/Profile.jsx'
import ColorPicker from './components/ColorPicker.jsx';
import MovieForm from "./components/MovieForm";
import { useState } from "react";
import LikeCount from "./components/LikeCount";
import LikeButton from "./components/LikeButton";
import PetCard from "./components/PetCard";
import PetButtons from "./components/PetButtons";
import SongCard from './components/SongCard.jsx';
import LightSwitch from './components/LitghtSwitch.jsx';

function App() {
  const [likes, setLikes] = useState(0);

function handleLike() {
  setLikes(prevLikes => prevLikes + 1);
}
  const [pet, setPet] = useState({
  name: "Biscuit",
  hunger: 5,
  happiness: 5
});

function feed() {
  setPet(prevPet => ({
    ...prevPet,
    hunger: prevPet.hunger - 1
  }));
}

function play() {
  setPet(prevPet => ({
    ...prevPet,
    happiness: prevPet.happiness + 1
  }));
}

  return (
    <>
    <Header />
    <AboutMe />
    <Footer />
    <ProfileCard 
      name="Clydie"
      role="Developer"
      isOnline={true}
      skills={["HTML", "CSS", "JS"]}
    />
    <CounterButton />
    <Profile />
    <ColorPicker />
    <MovieForm />
    <LikeCount likes={likes} />
    <LikeButton onLike={handleLike} />
    <PetCard pet={pet} />
    <PetButtons onFeed={feed} onPlay={play} />

    <SongCard
      title="Thriller"
      artist="MJ"
      year="1982"
      />
    
    <SongCard
      title="No Scrubs"
      artist="TLC"
      year="1999"
    />
    <LightSwitch />
    
  </>
  );
}

export default App;
