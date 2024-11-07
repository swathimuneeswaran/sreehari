// // Footer.js
// import InstagramIcon from "@mui/icons-material/Instagram";
// import YouTubeIcon from "@mui/icons-material/YouTube";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import Company_logo from "../assets/images/Company_logo.png";
// import { Link } from "react-router-dom";

// function Footer() {
//   return (
//     <>
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-logo">
//             <img src={Company_logo} alt="Company Logo" />
//             <h2>Shree Hari Global Foods</h2>
//             <p>
//               We specialize in high-quality dehydrated vegetable and fruit powders and flakes. Our innovative automated solar dryer works in any climate, day or night, to keep produce fresh and extend shelf life. We help farmers by turning their produce into valuable products and connecting them to global markets.
//             </p>
//             <div className="social-media1">
//               <a
//                 href="https://www.instagram.com/shreehariglobalfoods_kannada/?igsh=MTh1bmJtZG9zcG9yNg%3D%3D"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <InstagramIcon />
//               </a>
//               <a
//                 href="https://www.youtube.com/@ShreeHariGlobalFoods"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <YouTubeIcon />
//               </a>
//               <a
//                 href="https://wa.me/7338490894"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 <WhatsAppIcon />
//               </a>
//             </div>
//           </div>
//           <div className="footer-links">
//             <h3>Quick Links</h3>
//             <ul>
//               <li>
//                 <Link to="/home">Home</Link>
//               </li>
//               <li>
//                 <Link to="/about">About Our Company</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact Us</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="footer-products">
//             <h3>Products</h3>
//             <ul>
//               <li>
//                 <Link to="/product" state={{ navCategories: ["fruit flakes", "fruit powder"] }}>Fruits Flakes & Powders</Link>
//               </li>
//               <li>
//                 <Link to="/product" state={{ navCategories: ["vegetable powder"] }}>Vegetables Flakes & Powders</Link>
//               </li>
//               <li>
//                 <Link to="/product" state={{ navCategories: ["leaf powder", "leaf flakes"] }}>Leaf Flakes & Powders</Link>
//               </li>
//               <li>
//                 <Link to="/product" state={{ navCategories: ["rose"] }}>Rose Flakes & Powders</Link>
//               </li>
//             </ul>
//           </div>
//           <div className="footer-contact">
//             <h3>Contact Us</h3>
//             <p>
//               Plot No. 20/2, Chintamani Road, Mallimakanapura Village, Hoskote Taluk, Bengaluru 562122
//             </p>
//             <span>GSTIN: 29AFIFS2138E1ZX </span>
//             <p>+91 7338490894</p>
//             <p>shreehariglobalfoods@gmail.com</p>
//           </div>
//         </div>
//         <div className="footer-bottom">
//           <p>&copy; 2024 Shree Hari Global Foods. All rights reserved.</p>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;


// Footer.js
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Company_logo from "../assets/images/Company_logo.png";
import { Link, useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLinkClick = (path) => {
    navigate(path); // Navigate to the new route
    window.scrollTo(0, 0); // Scroll to the top of the page
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-logo">
            <img src={Company_logo} alt="Company Logo" />
            <h2>Shree Hari Global Foods</h2>
            <p>
              We specialize in high-quality dehydrated vegetable and fruit powders and flakes. Our innovative automated solar dryer works in any climate, day or night, to keep produce fresh and extend shelf life. We help farmers by turning their produce into valuable products and connecting them to global markets.
            </p>
            <div className="social-media1">
              <a
                href="https://www.instagram.com/shreehariglobalfoods_kannada/?igsh=MTh1bmJtZG9zcG9yNg%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.youtube.com/@ShreeHariGlobalFoods"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </a>
              <a
                href="https://wa.me/7338490894"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon />
              </a>
            </div>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <Link to="/home" onClick={() => handleLinkClick('/home')}>Home</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => handleLinkClick('/about')}>About Our Company</Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => handleLinkClick('/contact')}>Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="footer-products">
            <h3>Products</h3>
            <ul>
              <li>
                <Link to="/product" state={{ navCategories: ["fruit flakes", "fruit powder"] }} onClick={() => handleLinkClick('/product')}>Fruits Flakes & Powders</Link>
              </li>
              <li>
                <Link to="/product" state={{ navCategories: ["vegetable powder"] }} onClick={() => handleLinkClick('/product')}>Vegetables Flakes & Powders</Link>
              </li>
              <li>
                <Link to="/product" state={{ navCategories: ["leaf powder", "leaf flakes"] }} onClick={() => handleLinkClick('/product')}>Leaf Flakes & Powders</Link>
              </li>
              <li>
                <Link to="/product" state={{ navCategories: ["rose"] }} onClick={() => handleLinkClick('/product')}>Rose Flakes & Powders</Link>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Contact Us</h3>
            <p>
              Plot No. 20/2, Chintamani Road, Mallimakanapura Village, Hoskote Taluk, Bengaluru 562122
            </p>
            <span>GSTIN: 29AFIFS2138E1ZX </span>
            <p>+91 7338490894</p>
            <p>shreehariglobalfoods@gmail.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Shree Hari Global Foods. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;

