import React from 'react';
import restaurants from '../sample-restaurants';

class Landing extends React.Component {
  state = {
    display: false,
    title: '',
    url: '',
  };

  displayList = () => {
    console.log('click');
    console.log(this);
  };

  render() {
    return (
      <div className="restaurant_select">
        <div className="restaurant_select_top">
          <div
            onClick={this.displayList}
            className="restaurant_select_top-header font-effect-outline">
            Выбери ресторан
          </div>

          <div className="arrow-picker">
            <div className="arrow-picker-up"></div>
            <div className="arrow-picker-down"></div>
          </div>
        </div>

        <div className="restaurant_select_bottom">
          <ul>
            {restaurants.map((restautant) => {
              return <li key={restautant.id}>{restautant.title}</li>;
            })}
          </ul>
        </div>
        <button>Перейти в ресторан</button>
      </div>
    );
  }
}

export default Landing;
