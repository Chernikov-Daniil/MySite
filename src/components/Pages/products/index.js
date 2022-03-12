import { cards } from "../../../utils/constants";
import { Main } from "../../main";
import "./products.scss";

export const Products = () => {
  return (
    <>
      <Main>
        <ul className="main__list">
          {cards.map((item) => (
            <li key={item.id} className="card">
              <h2 className="card__title">{item.name}</h2>
              <p className="card__desc">{item.description}</p>
              <span className="card__price">{`Стоимость: ${item.price}$`}</span>
              <button className="card__btn">Купить</button>
            </li>
          ))}
        </ul>
      </Main>
    </>
  );
};
