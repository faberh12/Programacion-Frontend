import '../styles/Footer.css';

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='footer-section'>
                <h4>About Us</h4>
                <p>We are a company dedicated to providing top-notch services and products to our customers.</p>
            </div>
            <div className='footer-section'>
                <h4>Quick Links</h4>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className='footer-section'>
                <h4>Contact Us</h4>
                <p>Email: fabian.hernandezc@autonoma.edu.co</p>
                <p>Phone: 3158522281</p>
                <p>Address: Manizales, Caldas</p>
            </div>
            <div className='footer-section social-media'>
                <h4>Follow Us</h4>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
            </div>
            <div className='footer-bottom'>
                <p>&copy; 2024 Your Company Name. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
