// @flow

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import type { DetailsType, StatisticsType, RangeType } from '../types';
import { kinds, securityKinds, constructionKinds, quarters } from '../dictionaries';

const Wrapper = styled.div`
  margin-bottom: 48px;
  border-top: solid 1px #eaebf0;
`;

const Title = styled.h2`
  display: block;
  font-family: "Philosopher";
  font-size: 24px;
  font-weight: bold;
  text-align: left;
  color: #3e4247;
  margin-right: 48px;
  line-height: 1.13;
  margin-top: 32px;
  margin-bottom: 0.5rem;
  padding-bottom: 0;
`;

const Block = styled.dl`
  display: flex;
  justify-content: space-between;
  font-family: "Fira Sans";
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #3e4247;
  margin-top: 11px;
  margin-bottom: 0;
`;

const BlockTitle = styled.dt`
  font-family: "Fira Sans";
  font-size: 16px;
  text-align: left;
  font-weight: 400;
  line-height: 1.38;
  color: #a9afb6;
  width: 50%;
  margin-top: 0rem;
  margin-bottom: 0;
`;

const BlockText = styled.dd`
  font-family: "Fira Sans";
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  color: #3e4247;
  margin-left: 48px;
  width: 50%;
  line-height: 1.56;
`;

function formatNumber(number: number, to: number = 2): string {
  return Math.round(number).toFixed(to);
}

function formatArea(area: number): string {
  return formatNumber(area, 1);
}

function formatCeilHeight({ from, to }: RangeType): string {
  const formattedFrom = formatNumber(from);
  const formattedTo = formatNumber(to);

  if (formattedFrom === formattedTo) {
    return `${formattedFrom}`;
  }
  return `${formattedFrom} - ${formattedTo}`;
}

function formatPrice(price: number): string {
  return formatNumber(price / 1000000, 1);
}

function formatParkings(parking: number): string {
  if (!parking || parking === 0) {
    return 'Нет';
  }
  return `${parking} м/м`;
}

type Props = {
  details: DetailsType,
  statistics: StatisticsType,
};

export default (props: Props) => {
  const { details = {}, statistics = {} } = props;
  const {
    propertyKind,
    security,
    constructionKind,
    maintenanceCosts,
    startQuarter,
    startYear,
    commissioningQuarter,
    commissioningYear,
    parkings,
    undergroundGarages,
    ceilHeight = {},
  } = details;
  const { propertiesCount, price = {}, totalArea = {} } = statistics;
  const { from: priceFrom = {}, to: priceTo = {} } = price;

  return (
    <Wrapper>
      <Title>Характеристики</Title>
      <Row>
        <Col xs={4}>
          <Block>
            <BlockTitle>Количество квартир:</BlockTitle>
            <BlockText>
              {propertiesCount}
            </BlockText>
          </Block>
          <Block>
            <BlockTitle>Статус</BlockTitle>
            <BlockText>
              {kinds[propertyKind]}
            </BlockText>
          </Block>
          <Block>
            <BlockTitle>Цены</BlockTitle>
            <BlockText>
              от {formatPrice(priceFrom.rub)} до {formatPrice(priceTo.rub)} млн
            </BlockText>
          </Block>
          <Block>
            <BlockTitle>Безопасность</BlockTitle>
            <BlockText>
              {securityKinds[security]}
            </BlockText>
          </Block>
        </Col>

        <Col xs={4}>
          <Block>
            <BlockTitle>Конструкция корпусов</BlockTitle>
            <BlockText>
              {constructionKinds[constructionKind]}
            </BlockText>
          </Block>
          <Block>
            <BlockTitle>Площадь</BlockTitle>
            <BlockText>
              от {formatArea(totalArea.from)} до {formatArea(totalArea.to)} млн
            </BlockText>
          </Block>
          <Block>
            <BlockTitle>Высота потолков</BlockTitle>
            <BlockText>
              {formatCeilHeight(ceilHeight)}
            </BlockText>
          </Block>
          <Block>
            <BlockTitle>Обслуживание</BlockTitle>
            <BlockText>
              {maintenanceCosts} руб / м² / месяц
            </BlockText>
          </Block>
        </Col>

        <Col xs={4}>
          <Block>
            <BlockTitle>Начало строительства</BlockTitle>
            <BlockText>
              {quarters[startQuarter]} квартал {startYear} года
            </BlockText>
          </Block>
          <Block>
            <BlockTitle>Конец строительства</BlockTitle>
            <BlockText>
              {quarters[commissioningQuarter]} квартал {commissioningYear} года
            </BlockText>
          </Block>

          <Block>
            <BlockTitle>Наземная парковка</BlockTitle>
            <BlockText>
              {formatParkings(parkings)}
            </BlockText>
          </Block>
          <Block>
            <BlockTitle>Подземная парковка</BlockTitle>
            <BlockText>
              {formatParkings(undergroundGarages)}
            </BlockText>
          </Block>
        </Col>
      </Row>
    </Wrapper>
  );
};
