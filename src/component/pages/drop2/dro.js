import { Link } from 'react-router-dom';
import './dro.css';

function Dro() {
  return (
    <div>
      <h3 className="d7">Drop Down</h3>
      <div className="drop">
        <ul>
          <li><Link to="/li-1">What windows looked like in '96</Link></li>
          <li><Link to="/li-2">Make a website</Link></li>
          <li><Link to="/li-3">Some things I learned and know of</Link></li>
          <li><Link to="/li-4">Good house-cleaning tips and ideas</Link></li>
          <li><Link to="/li-5">Grass cutting tips</Link></li>
          <li><Link to="/li-6">A part in a show I liked</Link></li>
        </ul>
        <ul>
          <li><Link to="/li-7">My own favorite games of all time</Link></li>
          <li><Link to="/li-8">My drawings</Link></li>
          <li><Link to="/li-9">About me</Link></li>
          <li><Link to="/li-10">What the computers were like years ago</Link></li>
          <li><Link to="/li-11">My list of favorite links</Link></li>
        </ul>
        <ul>
          <li><Link to="/li-12">The food I like and don't like</Link></li>
          <li><Link to="/li-13">Candy I like</Link></li>
          <li><Link to="/li-14">Candy I don't like</Link></li>
          <li><Link to="/li-15">Drinks I like</Link></li>
          <li><Link to="/li-16">Drinks I don't like</Link></li>
          <li><Link to="/li-17">My favorite quotes</Link></li>
        </ul>
        <ul>
          <li><Link to="/li-18">My interests</Link></li>
          <li><Link to="/li-19">The phone these days</Link></li>
          <li><Link to="/li-20">My favorite actors and actresses</Link></li>
          <li><Link to="/li-21">Old comedy TV show I like</Link></li>
          <li><Link to="/li-22">The TV today plus it in my day </Link></li>
          <li><Link to="/li-23"> Things I don't like</Link></li>
          <li><Link to="/li-24">TV show I like</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Dro;
