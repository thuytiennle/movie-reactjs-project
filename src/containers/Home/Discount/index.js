import React from 'react';
import DiscountItem from '../../../components/DiscountItem';
import * as Styled from './styledDiscount';

export default function Discount() {
  return (
    <Styled.DiscountSection>
      <Styled.DiscoutTitle> Discount</Styled.DiscoutTitle>
      <DiscountItem />
    </Styled.DiscountSection>
  );
}
