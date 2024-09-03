import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import { CardCatalog } from "../../components/CardCatalog";

import backgroundImage from "../../assets/images/Background.svg";
import CupCoffee from "../../assets/images/CupCoffee.png";

import { Coffes } from "../../database.js";

import {
  HomeContainer,
  HomeContent,
  Heading,
  Info,
  StampContainer,
  StampHeader,
  CoffeeList,
} from "./styles.js";

export function Home() {
  return (
    <>
      <HomeContainer>
        <HomeContent>
          <div data-aos="fade-right">
            <Heading>
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <h2>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </h2>
            </Heading>

            <Info>
              <div>
                <StampContainer>
                  <StampHeader $stampColor="yellowDark">
                    <ShoppingCart size={16} weight="fill" />
                  </StampHeader>
                  <span>Compra simples e segura</span>
                </StampContainer>

                <StampContainer>
                  <StampHeader $stampColor="yellow">
                    <Timer size={16} weight="fill" />
                  </StampHeader>
                  <span>Entrega rápida e rastreada</span>
                </StampContainer>
              </div>

              <div>
                <StampContainer>
                  <StampHeader $stampColor="gray">
                    <Package size={16} weight="fill" />
                  </StampHeader>
                  <span>Embalagem mantém o café intacto</span>
                </StampContainer>

                <StampContainer>
                  <StampHeader $stampColor="purple">
                    <Coffee size={16} weight="fill" />
                  </StampHeader>
                  <span>O café chega fresquinho até você</span>
                </StampContainer>
              </div>
            </Info>
          </div>

          <img src={CupCoffee} alt="Copo de café." data-aos="zoom-in" />
        </HomeContent>

        <img
          src={backgroundImage}
          alt="Efeito com varios circulos coloridos."
        />
      </HomeContainer>

      <CoffeeList>
        <h3>Nossos cafés</h3>

        <div>
          {Coffes.map((item) => {
            return (
              <CardCatalog
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                tags={item.tags}
                price={item.price}
                image={item.image}
              />
            );
          })}
        </div>
      </CoffeeList>
    </>
  );
}
