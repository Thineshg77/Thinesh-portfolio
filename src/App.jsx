import './App.css'
import profile from './assets/profile.png'
import html from './assets/html.png'
import css from './assets/css.png'
import Javvascript from './assets/js.png'
import bootstrap from './assets/bootstrap.png'
import mangodb from './assets/mangodb.png'
import reacts from './assets/react.svg'

function Skills(){
  return(
    <div className="skills">
      <h3 className='subtittle'>SKILLS</h3>
      <div className="skill">
      <img src={html} alt="" />
      <img src={css} alt="" />
      <img src={Javvascript} alt=""  className='man'/>
      </div>
      <div className="skill">
      <img src={bootstrap} alt="" />
      <img src={reacts} alt="" />
      <img src={mangodb} alt=""/>
      </div>
     </div>
  );
};

function Project(){
  return(
    <div className="inform">
      <h1>PROJECTS</h1>
      <div className="btn">
       <a href='https://github.com/Thineshg77/Weather-app'><button className='btnd'>Weather App</button></a>
       <a href='https://github.com/Thineshg77/Advice'><button className='btnd'>Advice App</button></a>
       <a href='https://github.com/Thineshg77/my-website'><button className='btnd'>Ecommerce Website</button></a>
       </div>
    </div>
  );
};
function Contact(){
  return(
    <>
    <div className="archive">
      <h3>CONTACT</h3>
      <div className="inpt">
        <label htmlFor="">NAME</label>
        <input type="text"  />
      </div>
      <div className="inpts">
      <label htmlFor="">EMAIL ID</label>
        <input type="text"/>
      </div>
      
      <div className="inpte">
      <label htmlFor="">DETAILS</label>
       <input type="text" name="" id="" className='textarea' />
      </div>
      <div className="bt">
        <button type='submit' className='btns'>
          Submit
        </button>
      </div>
      </div>
      <div className="copy">
        <p>&copy;Designesd by <span>THINESH</span></p>
      </div>
    </>
  )
};
function About(){
  return(
    <>
   <div>
      <h1 className='tit'>ABOUT</h1>
      <div className="home">
        <div className="abou">
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque nesciunt natus nobis eos adipisci nemo similique qui placeat, numquam cum minima ducimus ipsa quo ea voluptates blanditiis obcaecati laborum magnam ad voluptate, aliquam fuga in! Aperiam error, repellendus rerum corrupti tempora nostrum quidem harum odio necessitatibus corporis nam, quaerat saepe sapiente. Eligendi et asperiores laboriosam mollitia velit modi consequuntur! Consequatur, non? Assumenda repellendus excepturi velit mollitia reiciendis at sapiente, quasi impedit exercitationem a dolorem! Expedita, nam, optio sapiente porro labore ipsum quia sit dicta consequatur iusto, saepe in? Deleniti, odio cumque in aperiam quo laudatus odit, consectetur laborum voluptatem autem aspernatur at. Mollitia commodi, distinctio hic voluptate id, odio neque aliquam maiores sed perferendis nam alias rem. Quibusdam quasi praesentium eveniet incidunt ad cupiditate error quaerat amet, commodi architecto corporis vitae perferendis impedit, exercitationem voluptate quis ab unde.</p>
        </div>
        <div className="certify">
        <a href="inform">
          <button className='b'>CERTIFICATES</button>
        </a>

        </div>
      </div>
     </div>
  </>
  )
}
function App() {
  return(
    <>
    <div className='container'>
    <h2 className='title'>THINESH</h2>
         <nav className="navbar">
          <table>
            <tbody>
              
            <div class="topnav">
               <a class="active" href="#home">Home</a>
               <a href="#news">About</a>
               <a href="#contact">Skills</a>
               <a href="#about">Contact</a>
            </div>
            </tbody>
          </table>
         </nav>
    </div>
    <div className="about">
      <h1 className='head'>Hi,I'm THINESH G  <p className='para'>Lorem
         ipsum dolor, sit amet 
        consectetur adipisicing elit. Iste consectetur 
        quo quae veritatis ipsum. 
        Maxime deserunt cupiditate modi non, sint 
        repellat quia ut minima tempora voluptatum, 
        aliquam corporis? Quos, voluptate!</p></h1>
      <img src={profile} alt="" className='imgs' />
      </div>
      <About/>
     <Skills/>
     <Project/>
     <Contact/>
    
    
     
    </>
  )
}
 

  

export default App
