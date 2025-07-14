import { useDispatch, useSelector } from 'react-redux';
import FullPageLoader from './components/FullPageLoader';
import OfflinePage from './pages/OfflinePage'; // import this
import { useEffect } from 'react';
import { fetchEvents } from './features/event/eventSlice';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider'

// Import pages
import Home from './pages/Home'
import About from './pages/About'
import AboutClub from './pages/AboutClub'
import Careers from './pages/Careers'
import Contact from './pages/Contact'
import Events from './pages/Events'
import EventDetails from './pages/EventDetails'
import EventTickets from './pages/EventTickets'
import FAQs from './pages/FAQs'
import Functions from './pages/Functions'
import Gallery from './pages/Gallery'
import Music from './pages/Music'
import Residents from './pages/Residents'
import SpecialEvents from './pages/SpecialEvents'
import TermsAndConditions from './pages/TermsAndConditions'
import Venue from './pages/Venue'
import VipTables from './pages/VipTables'
import AdminDashboard from './pages/admin/AdminDashboard'
import AdminAddEvent from './pages/admin/AdminAddEvent'
import AdminLogin from './pages/admin/AdminLogin'
import PublicLayout from './layout/PublicLayout'
import AdminLayout from './layout/AdminLayout'
import RequireAdminAuth from './components/admin/RequireAdminAuth'
import AdminEditSingleEvent from './pages/admin/AdminEditSingleEvent'
import AdminAddAdmin from './pages/admin/AdminAddAdmin'
import NotFound from './pages/NotFound'
import NewsSection from './pages/NewsSection';
import Offerlist from './pages/Offerlist';
import AdminCreateOffer from './pages/admin/AdminCreateOffer';
import { fetchOffers } from './features/offers/offerSlice';
import OfferDetailsPage from './pages/OfferDetailsPage';
import NewsItem from './pages/NewsItem';
import PostNewsForm from './pages/admin/test';

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.Events.loading);
  const offline = useSelector(state => state.Events.offline);

  useEffect(() => {
    dispatch(fetchEvents());
    dispatch(fetchOffers());

  }, [dispatch]);

  if (offline) {
    return <OfflinePage />;
  }

  if (loading) {
    return (
      <FullPageLoader />
    );
  }

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
      <Router>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            {/* <Route path="about" element={<About />} /> */}
            <Route path="about-club" element={<AboutClub />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />
            <Route path="events" element={<Events />} />
            {/* <Route path="event/:slug" element={<EventDetails />} /> */}
            {/* <Route path="event/tickets/:slug" element={<EventTickets />} /> */}
            <Route path="faqs" element={<FAQs />} />
            <Route path="functions" element={<Functions />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="music" element={<Music />} />
            <Route path="offers" element={<Offerlist />} />
            <Route path="offers/:id" element={<OfferDetailsPage />} /> 
            {/* <Route path="residents" element={<Residents />} /> */}
            {/* <Route path="special-events" element={<SpecialEvents />} /> */}
            <Route path="terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="venue" element={<Venue />} />
            <Route path="vip-tables" element={<VipTables />} />
            <Route path="news" element={<NewsSection />} />
            <Route path="news/:id" element={<NewsItem />} />

            <Route path="test" element={<></>} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminLogin />} />
            <Route path="login" element={<AdminLogin />} />

            <Route element={<RequireAdminAuth />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="add-admin" element={<AdminAddAdmin />} />
              <Route path="edit-event/:id" element={<AdminEditSingleEvent />} />
              <Route path="add-event" element={<AdminAddEvent />} />
              <Route path="add-offer" element={<AdminCreateOffer />} />
              <Route path="news" element={<PostNewsForm />} />
              
            </Route>
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
