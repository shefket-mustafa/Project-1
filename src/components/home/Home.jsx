import { NavLink } from 'react-router';
import './home.css'
import Rain from '../rain/Rain';
import Snow from '../snow/Snow';

export default function Home() {

  return (
      <>

      <Snow />

      <section className="home-section">

        <div className="welcoming-text">
            Welcome to our <strong>Weatherer</strong>
        </div>

        <NavLink className="home-to-catalog">Forecast</NavLink>
        </section>
      </>
    );
}