import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';
import Home from './routes/home/home.component';
import SignIn from './routes/sign-in/sign-in.component';


const App = () => {
  return (
    <Routes>
      {/*
        For nested routes:
          <Route path="/" element={<Home />}>
            <Route path="about" element={<About />} />
            <Route path="events" element={<Events />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        And in the component:
          <Outlet />

        And for dynamic routes:
          <Route path="/" element={<Home />}>
            <Route path=":id" element={<Event />} />
          </Route>
      */}
      <Route path="/" element={<Navigation />}> {/* or <Route path="*" element={<Navigation />}> and <Route path="/" element={<Home />} /> */}
        {/* index is a special keyword that matches the root of the route, which means that it will match the route when the path is exactly the same as the parent route. */}
        <Route index element={<Home />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
