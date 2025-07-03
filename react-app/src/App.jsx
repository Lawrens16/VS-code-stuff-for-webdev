import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import Pfp from './assets/Pfp.jpg'
import Irelia from './assets/Irelia.jpeg'
import Riven from './assets/Riven.jpg'
import React, {useEffect, useRef} from 'react'
import Button from './Button.jsx'
import Sett from './assets/Sett.jpeg'
import Placeholder from './assets/Placeholder.jpeg'
import Component from './Component.jsx'

function App() {

  const hiddenRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
          entry.target.classList.add('show');
        }
        else{
          entry.target.classList.remove('show');
        }
      }); 
    });
  
    hiddenRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      hiddenRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };

  },[]);


    return(
      <>
        <Header/>

        
        <section 
          className='Hidden'
          style={{ display: 'block' }}
          ref={(el) => (hiddenRefs.current[0] = el)}>
          <h1 className='sectionTitle'>MY TOP LANE PICKS AND ME</h1>
          
          <div className='cardContainer'>
            <Card
            img={Pfp}
            name="Lawrence"
            desc="Hi! I'm Lawrence. I love to read and breathe"
          />

            <Card className='Card'
              img={Irelia}
              name="Irelia"
              desc="The Blade Dancer. Top lane noob stomper"
            />

            <Card  className='Card'
              img={Riven}
              name="Riven"
              desc="The Exile. High apm ahh pick"
            />

            <Card  className='Card'
              img={Sett}
              name="Sett"
              desc="Cringe braindead champ aaaa"
            />

            <Card  className='Card'
              img={Placeholder}
              name="Lorem"
              desc="Lorem ipsum dolor sit amet, consectetur "
            />
            <Card  className='Card'
              img={Placeholder}
              name="Lorem"
              desc="Lorem ipsum dolor sit amet, consectetur "
            />
            

          </div>
        </section>
        <section
          className='Hidden'
          ref={(el) => (hiddenRefs.current[1] = el)}>
          <h1 className='sectionTitle'>Typeshi..</h1>
        </section>

        <section 
          className='Hidden'
          ref={(el) => (hiddenRefs.current[2] = el)}>
          <h1 className='sectionTitle'>Stop scrolling</h1>
        </section>
        <Button/>
        <Component/>
        <Footer/>
      </>
    );

}

export default App
