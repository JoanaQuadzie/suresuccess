import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <header className="bg">
          <div className="top-items">
            <h2 class="icon">SURE SUCCESS COLLEGE</h2>
            <nav>
              <li>
                <a href="">HOME</a>
              </li>
              <li>
                <a href="">ABOUT</a>
              </li>
              <li>
                <a href="">CONTACT US</a>
              </li>
              <li>
                <a href="">VISIT US</a>
              </li>
            </nav>
            <div  className="submit"><button>SIGN UP</button></div>
          </div>
        </header>



        <section className="services" >
          <h2>OUR SERVICES</h2>

          <div className="services">
            <div className="services-card">
              <h3>MAY/JUNE REGISTRATION</h3>

              <p>Cranberry juice, Beet juice, Grape juice etc</p>
            </div>

            <div className="services-card">
              <h3>NOV/DEC REGISTRATION</h3>

              <p>Cranberry juice, Beet juice, Grape juice etc</p>
            </div>

            <div className="services-card">
              <h3>DOUBLE & SINGLE TRACK VACATION CLASSES</h3>

              <p>Cranberry juice, Beet juice, Grape juice etc</p>
            </div>

            <div className="services-card">
              <h3>REMEDIAL CLASSES</h3>

              <p>Cranberry juice, Beet juice, Grape juice etc</p>
            </div>
          </div>
        </section>

        <section>


          <footer className="footer-bg">
            <div class="copy"><p>&copy; 2024
              www.SureSuccessCollege.com.
              All rights reserved</p></div>

          </footer>
        </section>


      </div>
    </div>
  );
}

export default App;
