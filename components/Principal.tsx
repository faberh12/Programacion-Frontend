import '../styles/Principal.css';
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpeg'; 

export default function Principal() {
  return (
      <div className='main'>
          <div className='aside'>
              <h3>Contact Us</h3>
              <form className="contact-form">
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" required />
                  
                  <label htmlFor="email">Email:</label>
                  <input type="email" id="email" name="email" required />
                  
                  <label htmlFor="message">Message:</label>
                  <textarea id="message" name="message" required></textarea>
                  
                  <button type="submit">Send</button>
              </form>
          </div>
          <div className='main-principal'>
              <img src={image1} alt="Description of Image 1" className="principal-image" />
              <img src={image2} alt="Description of Image 2" className="principal-image" />
              <article className="article">
                  <h2>Article of politic</h2>
                  <p>
                      This is a short article about an interesting topic. 
                      It contains a few sentences that provide some insights and information.
                  </p>
              </article>
          </div>
      </div>
  );
}
