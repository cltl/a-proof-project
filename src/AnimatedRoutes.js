// from tutorial on page transitions in React: https://www.youtube.com/watch?v=FdrEjwymzdY
import About from './about';
import Team from './team';
import Publications from './publications';
import Contact from './contact';
import {
    Route,
    Routes,
    useLocation,
} from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

export default function AnimatedRoutes() {
    const location = useLocation();
    return(
        <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path='/publications' element={<Publications />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/team' element={<Team />} />
            <Route path='/about' element={<About />} />
            <Route path='/a-proof-project/' element={<About />} />
            <Route path='/' element={<About />} />
        </Routes>
        </AnimatePresence>
    );
}