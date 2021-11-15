import React from 'react';
import { PriceOption, PriceGroupWrapper, PriceOptionInner, MostPopularLabel } from "./style.js";
import { RichText } from "components";

export const PriceGroup = ({ priceOptions }) => {

    return (
        <PriceGroupWrapper>
            {priceOptions.map(priceOption => (
                <PriceOption key = {priceOption.id}>
                    <PriceOptionInner isMostPopular={priceOption.mostPopular}>
                        {!!priceOption.mostPopular && 
                            <MostPopularLabel>Most Popular!</MostPopularLabel>
                        }
                        <h2>{priceOption.title}</h2>
                        <h3>£ {priceOption.amountPerMonth} / month</h3>
                        <RichText raw={priceOption.description.raw}></RichText>
                    </PriceOptionInner>
                </PriceOption>
            ))}
        </PriceGroupWrapper>
    )
}
