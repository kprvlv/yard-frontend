// @flow

import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'react-flexbox-grid';
import type { DetailsType, StatisticsType } from '../types';
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
          {!!propertiesCount &&
            <Block>
              <BlockTitle>Количество квартир:</BlockTitle>
              <BlockText>
                {propertiesCount}
              </BlockText>
            </Block>}
          {!!propertyKind &&
            <Block>
              <BlockTitle>Статус</BlockTitle>
              <BlockText>
                {kinds[propertyKind]}
              </BlockText>
            </Block>}
          {!!priceFrom.rub &&
            !!priceTo.rub &&
            <Block>
              <BlockTitle>Цены</BlockTitle>
              <BlockText>
                от {(priceFrom.rub / 1000000).toFixed(1)} до {(priceTo.rub / 1000000).toFixed(1)}{' '}
                млн
              </BlockText>
            </Block>}
          {!!security &&
            <Block>
              <BlockTitle>Безопасность</BlockTitle>
              <BlockText>
                {securityKinds[security]}
              </BlockText>
            </Block>}
        </Col>

        <Col xs={4}>
          {!!constructionKind &&
            <Block>
              <BlockTitle>Конструкция корпусов</BlockTitle>
              <BlockText>
                {constructionKinds[constructionKind]}
              </BlockText>
            </Block>}
          {!!totalArea.from &&
            !!totalArea.to &&
            <Block>
              <BlockTitle>Площадь</BlockTitle>
              <BlockText>
                от {Math.round(totalArea.from)} до {Math.round(totalArea.to)} м²
              </BlockText>
            </Block>}
          {!!ceilHeight.from &&
            !!ceilHeight.to &&
            <Block>
              <BlockTitle>Высота потолков</BlockTitle>
              <BlockText>
                {' '}от {Math.round(ceilHeight.from * 100) / 100} до{' '}
                {Math.round(ceilHeight.to * 100) / 100} м
              </BlockText>
            </Block>}
          {!!maintenanceCosts &&
            <Block>
              <BlockTitle>Обслуживание</BlockTitle>
              <BlockText>
                {maintenanceCosts} руб / м² / месяц
              </BlockText>
            </Block>}
        </Col>

        <Col xs={4}>
          {!!startQuarter &&
            !!startYear &&
            <Block>
              <BlockTitle>Начало строительства</BlockTitle>
              <BlockText>
                {quarters[startQuarter]} квартал {startYear} года
              </BlockText>
            </Block>}
          {!!commissioningQuarter &&
            !!commissioningYear &&
            <Block>
              <BlockTitle>Конец строительства</BlockTitle>
              <BlockText>
                {quarters[commissioningQuarter]} квартал {commissioningYear} года
              </BlockText>
            </Block>}

          <Block>
            <BlockTitle>наземная парковка</BlockTitle>
            <BlockText>
              {!!parkings && parkings !== 0 ? `${parkings} м/м` : 'Нет'}
            </BlockText>
          </Block>
          <Block>
            <BlockTitle>Подземная парковка</BlockTitle>
            <BlockText>
              {!!undergroundGarages && undergroundGarages !== 0
                ? `${undergroundGarages} м/м`
                : 'Нет'}
            </BlockText>
          </Block>
        </Col>
      </Row>
    </Wrapper>
  );
};
