import React, { Component } from "react";

const Product = (props) => {
  return (
    <div className='News' onClick=''>
      <img src={props.img} alt={props.name} />
      <div>
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        <ul>
          {props.props.map((i) => (
            <li>{i}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

class ScooterShop extends Component {
  state = {
    scoots: [
      {
        name: "Гироскутер Smart Balance PRO PREMIUM 10.5 V3 AQUA, огонь",
        rating: "4.8",
        price: "9 500 ₽",
        review: "1 отзыв",
        props: [
          'диаметр колеса: 10.5"',
          "пробег на одном заряде: до 20 км",
          "аккумулятор: 4.4 А·ч",
          "максимальная скорость: 20 км/ч",
          "лёгкий вес",
        ],
        img: "https://avatars.mds.yandex.net/get-mpic/4615588/img_id2351940935568118915.jpeg/x248_trim",
      },
      {
        name: "Гироскутер Smart Balance PRO PREMIUM 10.5 V2, огонь и лед",
        rating: "4.1",
        price: "9 490 ₽",
        review: "68 отзывов",
        props: [
          'диаметр колеса: 9.5"',
          "пробег на одном заряде: до 21 км",
          "аккумулятор: 4.2 А·ч",
          "максимальная скорость: 24 км/ч",
          "дизайн",
        ],
        img: "https://avatars.mds.yandex.net/get-mpic/3694390/img_id5262418840356388149.jpeg/x248_trim",
      },
      {
        name: "Гироскутер Smart Balance PRO PREMIUM 10.5 V3 AQUA, огонь",
        rating: "4.8",
        price: "9 500 ₽",
        review: "1 отзыв",
        props: [
          'диаметр колеса: 10.5"',
          "пробег на одном заряде: до 20 км",
          "аккумулятор: 4.4 А·ч",
          "максимальная скорость: 20 км/ч",
          "лёгкий вес",
        ],
        img: "https://avatars.mds.yandex.net/get-mpic/4615588/img_id2351940935568118915.jpeg/x248_trim",
      },
      {
        name: "Гироскутер Smart Balance PRO PREMIUM 10.5 V2, огонь и лед",
        rating: "4.1",
        price: "9 490 ₽",
        review: "68 отзывов",
        props: [
          'диаметр колеса: 9.5"',
          "пробег на одном заряде: до 21 км",
          "аккумулятор: 4.2 А·ч",
          "максимальная скорость: 24 км/ч",
          "дизайн",
        ],
        img: "https://avatars.mds.yandex.net/get-mpic/3694390/img_id5262418840356388149.jpeg/x248_trim",
      },
    ],
  };

  render() {
    const fdata = this.state.scoots.map((props) => Product(props));
    return <div className='App-content'>{fdata}</div>;
  }
}

export default ScooterShop;
