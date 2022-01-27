import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Footer from './Footer';
import MainBody from './MainBody';
import NavBar from './NavBar';
import Testimonial from './Testimonial';

export default function App() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <div>
        <MainBody />
      </div>
      <div>
        <Testimonial />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
