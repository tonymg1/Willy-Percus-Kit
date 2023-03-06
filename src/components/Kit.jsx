import { useEffect } from 'react';
import crash from '../assets/imgs/crash.png';
import kick from '../assets/imgs/kick.png';
import snare from '../assets/imgs/snare.png';
import tom1 from '../assets/imgs/tom1.png';
import tom2 from '../assets/imgs/tom2.png';
import tom3 from '../assets/imgs/tom3.png';
import tom4 from '../assets/imgs/tom4.png';
import crashSound from '../assets/sounds/crash.mp3';
import snareSound from '../assets/sounds/snare.mp3';
import tom1Sound from '../assets/sounds/tom-1.mp3';
import tom2Sound from '../assets/sounds/tom-2.mp3';
import tom3Sound from '../assets/sounds/tom-3.mp3';
import tom4Sound from '../assets/sounds/tom-4.mp3';
import kickSound from '../assets/sounds/kick.mp3';

export const Kit = () => {

  const playSound = (sound) => {
    const audio = new Audio(sound);
    audio.play();
  };

  const handleKeyDown = (event) => {
    switch (event.key) {
      case 'w':
        playSound(tom1Sound);
        break;
      case 'a':
        playSound(tom2Sound);
        break;
      case 's':
        playSound(tom3Sound);
        break;
      case 'd':
        playSound(tom4Sound);
        break;
      case 'j':
        playSound(snareSound);
        break;
      case 'k':
        playSound(crashSound);
        break;
      case 'l':
        playSound(kickSound);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // El array vacío indica que se ejecutará solo una vez al montar el componente.

  return (
    <>
      <button onClick={() => playSound(tom1Sound)}>
        <img src={tom1} alt="" />
        <span className='button-text'>w</span>
      </button>
      <button onClick={() => playSound(tom2Sound)}>
        <img src={tom2} alt="" />
        <span className='button-text'>a</span>
      </button>
      <button onClick={() => playSound(tom3Sound)}>
        <img src={tom3} alt="" />
        <span className='button-text'>s</span>
      </button>
      <button onClick={() => playSound(tom4Sound)}>
        <img src={tom4} alt="" />
        <span className='button-text'>d</span>
      </button>
      <button onClick={() => playSound(snareSound)}>
        <img src={snare} alt="" />
        <span className='button-text'>j</span>
      </button>
      <button onClick={() => playSound(crashSound)}>
        <img src={crash} alt="" />
        <span className='button-text'>k</span>
      </button>
      <button onClick={() => playSound(kickSound)}>
        <img src={kick} alt="" />
        <span className='button-text'>l</span>
      </button>
    </>
  );
};