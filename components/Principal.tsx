import '../styles/Principal.css'
import image1 from '../assets/image1.jpg'; // Asegúrate de que la ruta sea correcta
import image2 from '../assets/image2.jpeg'; // Asegúrate de que la ruta sea correcta

export default function Principal() {
  return (
      <div className='main'>
          <div className='aside'>
              This is the aside
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