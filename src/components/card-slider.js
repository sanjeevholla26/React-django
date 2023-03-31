import React from "react";

export default function Slider(){
    const Card = (props) => (
        <div className="card">
          <img src={ props.imgUrl } 
            alt={ props.alt || 'Image' } />
          <div className="card-content">
            <h2>{ props.title }</h2>
            <p>{ props.content }</p>
          </div>
        </div>
      );
      
      const CardContainer = (props) => (
        <div className="cards-container">
          {
            props.cards.map((card) => (
              <Card title={ card.title }
                content={ card.content }
                imgUrl={ card.imgUrl } />
            ))
          }
        </div>
      );

      const cardsData = [
        {id: 1, title: 'CONNECT', content: 'Clark Kent', imgUrl: 'https://unsplash.it/200/200'},
        {id: 2, title: 'Know more', content: 'Bruce Wayne', imgUrl: 'https://unsplash.it/201/200'},
        {id: 3, title: 'HELP!!', content: 'Peter Parker', imgUrl: 'https://unsplash.it/200/201'},
        {id: 4, title: 'Contact-us', content: 'Tony Stark', imgUrl: 'https://unsplash.it/201/201'},
        {id: 5, title: 'Donate', content: 'Reed Richards', imgUrl: 'https://unsplash.it/202/200'},
        {id: 6, title: 'Gallery', content: 'Wade Wilson', imgUrl: 'https://unsplash.it/200/199'},
      ]

      return(
        <div className="container">
            <h1 style={{ 'text-align': 'center' }}>
            See MORE
            </h1>
            <CardContainer cards={ cardsData } />
        </div>
      )
}