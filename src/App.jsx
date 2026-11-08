import React from 'react';
import { useState } from 'react';
import { ArrowUpRight, Menu, X, Instagram, MapPin, Clock3, Phone, Leaf, Star, ChevronDown } from 'lucide-react';

const menuItems = [
  { name: 'Honey ricotta toast', category: 'Breakfast', price: 'Rs. 890', description: 'Whipped ricotta, wildflower honey, toasted sourdough.', image: 'photo-1484723091739-30a097e8f929', tag: 'Guest favourite' },
  { name: 'Garden brunch bowl', category: 'Breakfast', price: 'Rs. 1,150', description: 'Soft eggs, avocado, greens, herbed yoghurt and seeds.', image: 'photo-1512621776951-a57141f2eefd', tag: 'Fresh & bright' },
  { name: 'Truffle mushroom pasta', category: 'Lunch', price: 'Rs. 1,650', description: 'Silky parmesan sauce, wild mushrooms, a hint of truffle.', image: 'photo-1473093295043-cdd812d0e601', tag: 'House signature' },
  { name: 'Stone-baked flatbread', category: 'Lunch', price: 'Rs. 1,290', description: 'Roasted tomato, mozzarella, basil and olive oil.', image: 'photo-1579751626657-72bc17010498', tag: 'Made to share' },
  { name: 'Pistachio cloud cake', category: 'Dessert', price: 'Rs. 780', description: 'A delicate, soft cake with pistachio cream.', image: 'photo-1578985545062-69928b1d9587', tag: 'A little treat' },
  { name: 'Iced vanilla latte', category: 'Drinks', price: 'Rs. 650', description: 'Double espresso, cold milk and house vanilla.', image: 'photo-1461023058943-07fcbe16d735', tag: 'All day mood' }
];

const imageUrl = (id) => id === 'photo-1579751626657-72bc17010498'
  ? 'https://images.unsplash.com/photo- pizza-placeholder'
  : `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=85`;

function App() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [reservationSent, setReservationSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', date: '', guests: '2 guests' });

  const filteredItems = activeFilter === 'All'
    ? menuItems
    : menuItems.filter(item => item.category === activeFilter);

  const closeMenu = () => setMobileOpen(false);

  function handleReservation(event) {
    event.preventDefault();
    setReservationSent(true);
    setForm({ name: '', email: '', date: '', guests: '2 guests' });
  }

  return (
    <div className="site-shell">
      <div className="topline"><span>GOOD FOOD. GOOD PEOPLE. GOOD DAYS.</span><span>OPEN DAILY · 8:00 AM — 10:00 PM</span></div>
      <header className="header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Saffron and Stone home">
          <span className="brand-mark">S<span>&</span>S</span>
          <span className="brand-name">SAFFRON <i>&</i> STONE<small>CAFE · KITCHEN · COMPANY</small></span>
        </a>
        <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle navigation">
          {mobileOpen ? <X /> : <Menu />}
        </button>
        <nav className={mobileOpen ? 'nav nav-open' : 'nav'}>
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#menu" onClick={closeMenu}>The menu</a>
          <a href="#space" onClick={closeMenu}>The space</a>
          <a href="#visit" onClick={closeMenu}>Find us</a>
          <a className="nav-cta" href="#reserve" onClick={closeMenu}>Book a table <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <div className="eyebrow light"><span /> YOUR NEW FAVOURITE CORNER</div>
            <h1>Come for the<br/><em>coffee.</em> Stay for<br/>everything else.</h1>
            <p>Thoughtful plates, beautiful brews, and a seat saved just for you.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#menu">Explore the menu <ArrowUpRight size={17}/></a>
              <a className="text-link light-link" href="#story">A little about us <span>↗</span></a>
            </div>
          </div>
          <div className="hero-note"><span>01 / 03</span><span className="note-line"/><span>MADE WITH A LITTLE MORE HEART</span></div>
          <div className="hero-stamp"><span>FRESH<br/>EVERY<br/>DAY</span><Leaf size={19}/></div>
        </section>

        <section className="intro section-pad" id="story">
          <div className="intro-label"><span className="eyebrow">A PLACE TO PAUSE</span><span className="vertical-line"/></div>
          <div className="intro-copy">
            <h2>Not just another<br/>coffee <em>stop.</em></h2>
            <div className="intro-bottom">
              <p>We believe the best moments happen around a table. That's why we bring seasonal ingredients, honest cooking, and a warm welcome together under one roof.</p>
              <a className="underlined-link" href="#space">Get to know our place <ArrowUpRight size={16}/></a>
            </div>
          </div>
          <div className="intro-image-wrap"><img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?auto=format&fit=crop&w=1000&q=85" alt="Warm cafe interior with a welcoming counter"/><span className="image-caption">A SLOWER KIND OF EVERYDAY</span></div>
        </section>

        <section className="menu-section section-pad" id="menu">
          <div className="section-heading">
            <div><span className="eyebrow">FROM OUR KITCHEN</span><h2>A few <em>good things.</em></h2></div>
            <p>Made from scratch, served with love.<br/>A menu that follows the seasons.</p>
          </div>
          <div className="filters" role="group" aria-label="Filter menu">
            {['All', 'Breakfast', 'Lunch', 'Dessert', 'Drinks'].map(filter => (
              <button key={filter} className={activeFilter === filter ? 'filter active' : 'filter'} onClick={() => setActiveFilter(filter)}>{filter}</button>
            ))}
          </div>
          <div className="menu-grid">
            {filteredItems.map((item, index) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-photo">
                  <img src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=900&q=85`} alt={item.name} onError={(e) => { e.currentTarget.src = 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=85'; }} />
                  <span className="menu-number">0{index + 1}</span>
                </div>
                <div className="menu-meta"><span>{item.tag}</span><span>{item.price}</span></div>
                <h3>{item.name}</h3><p>{item.description}</p>
              </article>
            ))}
          </div>
          <div className="menu-foot"><span>GOOD FOOD, NO SHORTCUTS.</span><a className="underlined-link" href="#reserve">Come taste for yourself <ArrowUpRight size={16}/></a></div>
        </section>

        <section className="quote-band">
          <div className="quote-image"/>
          <div className="quote-content"><span className="eyebrow light">THE SAFFRON & STONE WAY</span><div className="quote-mark">“</div><h2>Make room for<br/><em>the little things.</em></h2><p>One more cup. One more story. One more reason to stay a little longer.</p><div className="quote-sign">SEE YOU AROUND THE TABLE <span>✳</span></div></div>
        </section>

        <section className="space-section section-pad" id="space">
          <div className="section-heading">
            <div><span className="eyebrow">YOUR CORNER OF THE WORLD</span><h2>Stay a <em>while.</em></h2></div>
            <p>Bring your laptop, your favourite people,<br/>or absolutely no plans at all.</p>
          </div>
          <div className="space-gallery">
            <img className="space-large" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85" alt="Sunlit cafe seating area"/>
            <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=900&q=85" alt="Freshly brewed coffee"/>
            <img src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=900&q=85" alt="Barista preparing coffee"/>
          </div>
          <div className="space-caption"><span>01 — A TABLE FOR EVERY KIND OF DAY</span><span>02 — GOOD COFFEE, ALWAYS</span><span>03 — CRAFTED WITH CARE</span></div>
        </section>

        <section className="reservation-section" id="reserve">
          <div className="reservation-left"><span className="eyebrow light">LET'S MAKE A PLAN</span><h2>Your table<br/>is <em>waiting.</em></h2><p>For catch-ups, celebrations, or just because. Leave the details and we'll be in touch.</p><div className="reservation-detail"><Clock3 size={17}/><span>Every day, 8:00 AM — 10:00 PM</span></div></div>
          <form className="reservation-form" onSubmit={handleReservation}>
            <h3>Book a table</h3><p>We'll confirm your reservation shortly.</p>
            <label>Your name<input required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="e.g. Alex Morgan"/></label>
            <label>Email address<input required type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="alex@email.com"/></label>
            <div className="form-row"><label>Date<input required type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}/></label><label>Party size<select value={form.guests} onChange={e => setForm({...form, guests: e.target.value})}><option>2 guests</option><option>3 guests</option><option>4 guests</option><option>5 guests</option><option>6+ guests</option></select></label></div>
            <button className="button button-dark" type="submit">Request a reservation <ArrowUpRight size={17}/></button>
            {reservationSent && <div className="success-message" role="status">Thanks! Your demo reservation request has been received.</div>}
            <small>* Demo form only — connect a booking service to receive real reservations.</small>
          </form>
        </section>
      </main>

      <footer className="footer" id="visit">
        <div className="footer-top"><div><a className="brand footer-brand" href="#home"><span className="brand-mark">S<span>&</span>S</span><span className="brand-name">SAFFRON <i>&</i> STONE<small>CAFE · KITCHEN · COMPANY</small></span></a><p>Good food. Good people.<br/>A little more heart in every day.</p></div><div className="footer-col"><span className="eyebrow">COME FIND US</span><p><MapPin size={15}/> F-7 Markaz, Islamabad, Pakistan</p><p><Phone size={15}/> +92 300 123 4567</p><p><Instagram size={15}/> @saffronandstone</p></div><div className="footer-col"><span className="eyebrow">OPENING HOURS</span><p>Monday — Sunday</p><p>8:00 AM — 10:00 PM</p><a href="#reserve" className="footer-book">Save me a seat <ArrowUpRight size={15}/></a></div><div className="footer-col footer-links"><span className="eyebrow">TAKE A LOOK</span><a href="#story">Our story</a><a href="#menu">The menu</a><a href="#space">The space</a><a href="#reserve">Reservations</a></div></div>
        <div className="footer-bottom"><span>© 2026 SAFFRON & STONE. MADE WITH CARE.</span><a href="#home">BACK TO TOP ↑</a><span>DEMO WEBSITE · FICTIONAL BUSINESS</span></div>
      </footer>
    </div>
  );
}

export default App;
