import './Footer.scss'
import { FaTwitter,FaLinkedinIn } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';
import { IoLogoWhatsapp} from 'react-icons/io';



function Footer() {
  return (
 
  <footer class="footer">
    <div class="container">
      <div class="row">

        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4 footer-header">PRODUCT</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#man">MAN</a></li>
            <li class="mb-2"><a href="#woman">WOMAN</a></li>
            <li class="mb-2"><a href="#kids">KIDS</a></li>
            <li class="mb-2"><a href="#sneakers">SNEAKERS</a></li>
          </ul>
        </div>

        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4 footer-header">GET HELP</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#delievery">DELIVERY</a></li>
            <li class="mb-2"><a href="#payment">PAYMENT OPTIONS</a></li>
            <li class="mb-2"><a href="#returns">RETURNS</a></li>
            <li class="mb-2"><a href="#contactUs">CONTACT US</a></li>
          </ul>
        </div>
        
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4 footer-header">COMPANY</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#aboutUs">ABOUT US</a></li>
            <li class="mb-2"><a href="#community">COMMUNITY</a></li>
            <li class="mb-2"><a href="#reviews">REVIEWS</a></li>
            <li class="mb-2"><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div class="col-lg-2 col-md-6 mb-4 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4 footer-header">LEGAL</h6>
          <ul class="list-unstyled mb-0">
            <li class="mb-2"><a href="#privacy">PRIVACY POLICY</a></li>
            <li class="mb-2"><a href="#terms">TERMS</a></li>
            <li class="mb-2"><a href="#conditions">CONDITIONS</a></li>
          </ul>
        </div>
        <div class="col-lg-4 col-md-6 mb-lg-0">
          <h6 class="text-uppercase font-weight-bold mb-4 footer-header">SOCIAL MEDIA</h6>
          <p class='footer-copywrite'>DESIGNED & DEVELOPED BY OLADUNIWATERS</p>
          <ul class="list-inline mt-4">
            <li class="list-inline-item"><a href="https://github.com/OladunniWaters" target="_blank" rel="noreferrer" title="twitter"><BsGithub className='footer-icon'/></a></li>
            <li class="list-inline-item"><a href="https://twitter.com/OladunniCath?t=E_aahJv7o2kv2D8U6Kvf9Q&s=09" target="_blank" rel="noreferrer" title="facebook"><FaTwitter className='footer-icon'/></a></li>
            <li class="list-inline-item"><a href="https://wa.me/message/F6VY6KSDRRP4J1" target="_blank" rel="noreferrer" title="instagram"><IoLogoWhatsapp className='footer-icon'/></a></li>
            <li class="list-inline-item"><a href="https://www.linkedin.com/in/oladunni-waters-851b201b0" target="_blank" rel="noreferrer" title="pinterest"><FaLinkedinIn  className='footer-icon'/></a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  );
}
export default Footer;


