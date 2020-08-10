import React, { memo } from 'react';
import DiscountItem from '../../../components/DiscountItem';
import * as Styled from './styledDiscount';

function Discount() {
  return (
    <Styled.DiscountSection>
      <Styled.DiscoutTitle> Discount</Styled.DiscoutTitle>
      <DiscountItem />
    </Styled.DiscountSection>
  );
}

export default memo(Discount);
