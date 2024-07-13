import React from 'react'
import '../css/VideoSection.css';
const VideoSection = (props) => {
  return (
    <div className='ccc'>
    <div className='vediosection'>
      <h2>VideoSection</h2>
      <div className='section1'>
        <div className='vedio1'>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/MjRcjAkb8_4?si=MimzFMozEOH3Bigt" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>
        <div className='content1'>
          <h3>Nazariya | UN Women | Sexual Harassment</h3><br/>
          <p>Nazariya (Perspective) deconstructs perspectives and perceptions of women’s experiences of sexual harassment at the workplace, laying a strong emphasis on the “impact” on women, regardless of the “intent” of the behaviour and actions.</p><br/>
          <p>Video depicting the contrast between how a man and a woman perceive an interaction between them at their workplace</p>
          <p>Source: <a href="https://www.youtube.com/watch?v=MjRcjAkb8_4&t=2s">https://www.youtube.com/watch?v=MjRcjAkb8_4&t=2s</a></p>
        </div>
      </div>
      <div className='section1'>
        <div className='vedio1'>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/Ur8G8kOYEfI?si=l9KYoQnrvzLcX3wN" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>
        <div className='content1'>
          <h3>Is This Sexual Harassment? Men & Women Discuss</h3><br/>
          <p>Social experiment hosted by journalist and presenter Ben Zand in which a group of people come together to try to understand what constitutes sexual harassment.</p><br/>
          <p>Through candid discussions and immersive activities, participants explore the nuances and boundaries of behavior that can be considered harassment. Ben Zand facilitates these conversations, providing insights and expert opinions to deepen the understanding of this critical issue.</p>
          <p>Source: <a href="https://www.youtube.com/watch?v=Ur8G8kOYEfI">https://www.youtube.com/watch?v=Ur8G8kOYEfI</a></p>
        </div>
      </div>
      <div className='section1'>
        <div className='vedio1'>
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/nNwrPjV3P38?si=9NgLgAH9WqdYIai5" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
          </iframe>
        </div>
        <div className='content1'>
          <h3>Kaam Ki Baat | UN Women | Workplace Harassment</h3><br/>
          <p>Kaam Ki Baat (When Talking about Work) questions the everyday normalisation of sexual harassment of women at the workplace and advocates for safe and equal workspaces for all women.</p><br/>
          <p>
          "Kaam Ki Baat" is an initiative aimed at addressing and questioning the everyday normalization of sexual harassment faced by women in the workplace. </p>
          <p>Source: <a href="https://www.youtube.com/watch?v=nNwrPjV3P38">https://www.youtube.com/watch?v=nNwrPjV3P38</a></p>

        </div>
      </div>
    </div>
  </div>
  )
}

export default VideoSection
