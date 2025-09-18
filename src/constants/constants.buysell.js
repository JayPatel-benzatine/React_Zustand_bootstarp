/**
 * @fileoverview Constant code options for Buy and Sell filter
 */
export const BUY_OPTIONS_CODE = [
    `if [!IsLong[] && !IsShort[]]
    {
        result = PlaceMarketOrder[LONG]^
    }
    `,
    `if [!IsLong[] ]
    {
        result = PlaceMarketOrder[LONG]^
    }
    
    `,
    `result = PlaceMarketOrder[LONG]^`
]


export const SELL_OPTION_CODE = [
    `if [!IsLong[] && !IsShort[]]
    {
        result = PlaceMarketOrder[SHORT]^
    }    
    `,
    `if [!IsShort[]]
    {
        result = PlaceMarketOrder[SHORT]^
    }    
    `,
    `result = PlaceMarketOrder[SHORT]^`
]
export const SELL_OPTION_CODE_CONDITION = [
    `&& TradeDirection == SHORT`
]
export const BUY_OPTIONS_CODE_CONDITION = [
    `&& TradeDirection == LONG`
]