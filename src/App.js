import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';

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
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
