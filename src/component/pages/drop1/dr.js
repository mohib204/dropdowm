
import { Link } from "react-router-dom";
import './dr.css'
function dr() {
  return (
    
    <div>
      <h3 className='d7'>Drop Down</h3>
      <div className="drop">
      <ul>
          <li><Link to="/fol1">a joke from a tv show</Link></li>
          <li><Link to="/fol2">My favourite song</Link></li>
          <li><Link to="/fol3">What I know about the computer</Link></li>
          <li><Link to="/fol4">What I love - absolute favoritest</Link></li>
          <li><Link to="/fol5">Stores that don't exist/are going out of business</Link></li>
          <li><Link to="/fol6">My talk</Link></li>
        </ul>
        <ul>
          <li><Link to="/fol7">Google then and now</Link></li>
          <li><Link to="/fol8">My picture</Link></li>
          <li><Link to="/fol9">My love</Link></li>
          <li><Link to="/fol10">My favourite music 4</Link></li>
          <li><Link to="/fol11">Some pictures I like</Link></li>
          <li><Link to="/fol12">Old comedy TV show I like</Link></li>
        </ul>
        <ul>
          <li><Link to="/fol13">Food I don't like</Link></li>
          <li><Link to="/fol14">Game picture</Link></li>
          <li><Link to="/fol15">Game show I like</Link></li>
          <li><Link to="/fol16">Game I like</Link></li>
          <li><Link to="/fol17">Great advances on the computer</Link></li>
          <li><Link to="/fol18">Movies I like</Link></li>
        </ul>
        <ul>
          <li><Link to="/fol19">What I didn't have that now</Link></li>
          <li><Link to="/fol20">What was then isn't now</Link></li>
          <li><Link to="/fol21">Questions I asked</Link></li>
          <li><Link to="/fol22">Things I hate</Link></li>
          <li><Link to="/fol23">What I know about cars</Link></li>
          <li><Link to="/fol24">What dial-up was in the 90s</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default dr;
