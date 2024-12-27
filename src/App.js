import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './component/navbar/nav'
// import Footer from './components/footer/fo';
import Home from "./component/pages/Home/home";
import About from "./component/pages/about/about";
import Owner from './component/pages/owner/owner'
import SomeStoveIknowAbout from "./component/pages/somestoveiknowabout/somestoveiknowabout";
import Drop1 from './component/pages/drop1/dr';
import Drop2 from './component/pages/drop2/dro';
import Somenews from "./component/pages/somenews/somenews";
import Footer from "./component/footer/footer";
import Li1 from "./component/pages/drop2/droppages/li-1";
import Li2 from "./component/pages/drop2/droppages/li-2";
import Li3 from "./component/pages/drop2/droppages/li-3";
import Li4 from "./component/pages/drop2/droppages/li-4";
import Li5 from "./component/pages/drop2/droppages/li-5";
import Li6 from "./component/pages/drop2/droppages/li-6";
import Li7 from "./component/pages/drop2/droppages/li-7";
import Li8 from "./component/pages/drop2/droppages/li-8";
import Li9 from "./component/pages/drop2/droppages/li-9";
import Li10 from "./component/pages/drop2/droppages/li-10";
import Li11 from "./component/pages/drop2/droppages/li-11";
import Li12 from "./component/pages/drop2/droppages/li-12";
import Li13 from "./component/pages/drop2/droppages/li-13";
import Li14 from "./component/pages/drop2/droppages/li-14";
import Li15 from "./component/pages/drop2/droppages/li-15";
import Li16 from "./component/pages/drop2/droppages/li-16";
import Li17 from "./component/pages/drop2/droppages/li-17";
import Li18 from "./component/pages/drop2/droppages/li-18";
import Li19 from "./component/pages/drop2/droppages/li-19";
import Li20 from "./component/pages/drop2/droppages/li-20";
import Li21 from "./component/pages/drop2/droppages/li-21";
import Li22 from "./component/pages/drop2/droppages/li-22";
import Li23 from "./component/pages/drop2/droppages/li-23";
import Li24 from "./component/pages/drop2/droppages/li-24";
import Fol1 from "./component/pages/drop1/droppage/fol1/fol1"
import Fol2 from "./component/pages/drop1/droppage/fol2/fol2"
import Fol3 from "./component/pages/drop1/droppage/fol3/fol3"
import Fol4 from "./component/pages/drop1/droppage/fol4/fol4"
import Fol5 from "./component/pages/drop1/droppage/fol5/fol5"
import Fol6 from "./component/pages/drop1/droppage/fol6/fol6"
import Fol7 from "./component/pages/drop1/droppage/fol7/fol7"
import Fol8 from "./component/pages/drop1/droppage/fol8/fol8"
import Fol9 from "./component/pages/drop1/droppage/fol9/fol9"
import Fol10 from "./component/pages/drop1/droppage/fol10/fol10"
import Fol11 from "./component/pages/drop1/droppage/fol11/fol11"
import Fol12 from "./component/pages/drop1/droppage/fol12/fol12"
import Fol13 from "./component/pages/drop1/droppage/fol13/fol13"
import Fol14 from "./component/pages/drop1/droppage/fol14/fol14"
import Fol15 from "./component/pages/drop1/droppage/fol15/fol15"
import Fol16 from "./component/pages/drop1/droppage/fol16/fol16"
import Fol17 from "./component/pages/drop1/droppage/fol17/fol17"
import Fol18 from "./component/pages/drop1/droppage/fol18/fol18"
import Fol19 from "./component/pages/drop1/droppage/fol19/fol19"
import Fol20 from "./component/pages/drop1/droppage/fol20/fol20"
import Fol21 from "./component/pages/drop1/droppage/fol21/fol21"
import Fol22 from "./component/pages/drop1/droppage/fol21/fol21"
import Fol23 from "./component/pages/drop1/droppage/fol22/fol22"
import Fol24 from "./component/pages/drop1/droppage/fol24/fol24"

function App() {
  return (
    <Router>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/src/component/pages/owner/owner.js" element={<Owner/>} /> {/* Fixed route path */}
        <Route path="/src/component/pages/somestoveiknowabout/somestoveiknowabout.js" element={<SomeStoveIknowAbout />} /> {/* Changed route to avoid conflict */}
        <Route path="/src/component/pages/drop1/dr.js" element={<Drop1/>} /> {/* Changed route to avoid conflict */}
        <Route path="/src/component/pages/drop2/dro.js" element={<Drop2 />} /> {/* Changed route to avoid conflict */}
        <Route path="/somenews" element={<Somenews />} /> {/* Changed route to avoid conflict */}
        <Route path="/li-1" element={<Li1 />} />
        <Route path="/li-2" element={<Li2 />} />
        <Route path="/li-3" element={<Li3 />} />
        <Route path="/li-4" element={<Li4 />} />
        <Route path="/li-5" element={<Li5 />} />
        <Route path="/li-6" element={<Li6 />} />
        <Route path="/li-7" element={<Li7 />} />
        <Route path="/li-8" element={<Li8 />} />
        <Route path="/li-9" element={<Li9 />} />
        <Route path="/li-10" element={<Li10 />} />
        <Route path="/li-11" element={<Li11 />} />
        <Route path="/li-12" element={<Li12 />} />
        <Route path="/li-13" element={<Li13 />} />
        <Route path="/li-14" element={<Li14 />} />
        <Route path="/li-15" element={<Li15 />} />
        <Route path="/li-16" element={<Li16 />} />
        <Route path="/li-17" element={<Li17 />} />
        <Route path="/li-18" element={<Li18 />} />
        <Route path="/li-19" element={<Li19 />} />
        <Route path="/li-20" element={<Li20 />} />
        <Route path="/li-21" element={<Li21 />} />
        <Route path="/li-22" element={<Li22 />} />
        <Route path="/li-23" element={<Li23 />} />
        <Route path="/li-24" element={<Li24 />} />
        <Route path="/fol1" element={<Fol1 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol2" element={<Fol2 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol3" element={<Fol3 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol4" element={<Fol4 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol5" element={<Fol5 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol6" element={<Fol6 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol7" element={<Fol7 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol8" element={<Fol8 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol9" element={<Fol9 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol10" element={<Fol10 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol11" element={<Fol11 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol12" element={<Fol12 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol13" element={<Fol13/>} /> {/* Changed route to avoid conflict */}
        <Route path="/fol14" element={<Fol14 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol15" element={<Fol15 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol16" element={<Fol16 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol17" element={<Fol17 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol18" element={<Fol18 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol19" element={<Fol19 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol20" element={<Fol20 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol21" element={<Fol21 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol22" element={<Fol22 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol23" element={<Fol23 />} /> {/* Changed route to avoid conflict */}
        <Route path="/fol24" element={<Fol24 />} /> {/* Changed route to avoid conflict */}


      </Routes>
      
      <Footer />
    </Router>
  );
}

export default App;
