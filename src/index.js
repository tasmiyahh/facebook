import React from 'react';
import ReactDOM from 'react-dom';
import profileImg from './images/profile.jpg';
import postImg from './images/post.jpg'
import defenceDay from './images/defenceday.jpg'
import quote from './images/quote.jpg'
import './style.css'


function Post({ profile, name, date, text, imageUrl ,like , comment , share}) {
   return <div className='main'>
      <div className='body'>
         <div className='head'>
            <img className='profile' src={profile} alt="" />
            <span className='profilename'> <p className='name'>{name} </p>  {date}  </span>
         </div>
         <p className='text'>
            {text}

         </p>
         <img className='post' src={imageUrl} alt="" />
         

         <p className='interaction'> <span>{like}</span>  <span>{comment}</span>  <span>{share}</span> </p>
         <p className='buttons'>
        
          <button >Like</button> <button>Comment</button> <button>Share </button> 
         </p>
      </div>
   </div>
}

ReactDOM.render(
 <>

<Post
   profile={profileImg}
   name="Tasmiyah hussain"
   date={"8 sept 2022"}
   text="Nothing is impossible in this world, the word it self says I AM POSSIBLE! "
   imageUrl={quote}
   like = {"200 likes"}
   comment = {"100 comments"}
   share = {"300 shares"}
   

/>
<Post
   profile={profileImg}
   name="Tasmiyah hussain"
   date={"7 sept 2022"}
   text="PAKISTAN won by ONE wicket against AFGHANISTAN "
   imageUrl={postImg}
   like = {"100l likes"}
   comment = {"600 comments"}
   share = {"500 shares"}

/>

<Post
   profile={profileImg}
   name="Tasmiyah hussain"
   date={"6 sept 2022"}
   text="A salute to the bravery that defended our FREEDOM "
   imageUrl={defenceDay}
   like = {"1.5k likes"}
   comment = {"300 comments"}
   share = {"20k shares"}

/>


</>
, document.querySelector("#root"));