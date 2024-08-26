import { Navbar } from './components/Navbar.js';
import { Home } from './components/Home.js';
import { Advantages } from './components/Advantages.js';
import { HorizonScroll } from './components/HorizonScroll.js';
import { Scholarship } from './components/Scholarship.js';
import { Video } from './components/Video.js';
import { StudyAid } from './components/StudyAid.js';
import { Courses } from './components/Courses.js';
import { Pros } from './components/Pros.js';
import FAQ from './components/FAQ.js';
import Footer from './components/Footer.js';
import SendMessage from './components/Send.js';

function App() {
  return (
    <div>
        <Navbar/>
        <Home/>
        <Advantages/>
        <HorizonScroll/>
        <Scholarship/>
        <Video/>
        <StudyAid/>
        <Courses/>
        <Pros/>
        <FAQ/>
        <SendMessage/>
        <Footer/>
    </div>
  );
}

export default App;
