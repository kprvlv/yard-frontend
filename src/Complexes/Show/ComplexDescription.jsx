import React, { Component } from "react";
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Title = styled.h2`
  font-family: "Philosopher";
  font-size: 24px;
  font-weight: bold;
  line-height: 1.13;
  text-align: left;
  color: #3e4247;
  padding-top: 0;
  margin-top: 0;
  margin-bottom: 0;
`;

const Text = styled.p`
  font-size: 16px;
  text-align: left;
  color: #3e4247;
  font-weight: 400;
  margin-top: 0;
  margin-bottom: 24px;
  line-height: 1.56;
`;

export default () => {
  return (
    <Row>
      <Col xs={2}>
        <Title>Описание</Title>
      </Col>

      <Col xs={10}>
        <Text>
          ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля.
          Территория разделена на три зоны: жилой район, центральный стадион
          «Динамо» и большой спортивный парк.
        </Text>

        <Text>
          Жилой район — это 13 корпусов: апартаменты, штаб-квартира «Динамо»,
          отель
          «Hyatt Regency Moscow» и четыре современных бизнес-центра. На
          территории —
          рестораны, спа-комплекс, фитнес-центр, химчистка, аптеки, магазины и
          отделения банков. В каждом корпусе работает консьерж и круглосуточная
          охрана. Для жителей оборудованы технические помещения под хранение
          колясок
          и велосипедов, комнаты для домашних животных и уютные вестибюли с
          мягкими
          креслами для встреч с друзьями и соседями.
        </Text>

        <Text>
          Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились музей,
          торгово-развлекательный комплекс, подземная парковка для гостей и две
          крупные спортивные арены. Жизнь квартала сосредоточена в этой зоне:
          здесь
          можно сходить на концерт или фестиваль, поболеть за любимую команду и
          купить новую рубашку в торговом комплексе.
        </Text>

        <Text>
          Тихий жилой район от шумного стадиона отделяет Парк Физкультуры и
          Отдыха.
          Здесь каждый найдет занятие: для детей оборудованы игровые зоны, для
          подростков — спортивные площадки на открытом воздухе, для взрослых —
          велосипедные дорожки и зоны отдыха, где можно подышать свежим воздухом
          во
          время рабочего перерыва.
        </Text>
      </Col>
    </Row>
  );
};