/**
 * @fileoverview To create new indicator filters, 4 files needs to be updated
 * 1. constants.indicator.js is the file for new indicator declaration
 * 2. constants.js is the file to provide default values for each indicator
 * 3. constants.popover.js is the file to provide help text for indicator field
 * 4. workspaceWindow/utils.js is the file in which the function defination has 
 *    to be created for the new indicator. 
 * (Search for comment,"DEFINE NEW INDICATOR", to define indicators in required files)
 */

import { MATH_ONLIST_OPERATOR_MAX } from "blockly/msg/en"
import {PARAMETER_TYPE} from './constants.Indicator';

/**
 * **Warning:** Do not change
 * @description Datatypes supported for indicator fields
 */
export const BAR_DATATYPES = {
    STRING: 'string',
    INTEGER: 'integer',
    DOUBLE: 'double',
    ENUM: 'enum',
}

/**
 * Enumerations for the indicator fields
 * Define new enums for new indicators here.
 */
const TIME_FRAME_ENUM_MQL5 = {}

const TIME_FRAME_ENUM = {
    CURRENT: 'PERIOD_CURRENT',
    M1: 'PERIOD_M1',
    M5: 'PERIOD_M5',
    M15: 'PERIOD_M15',
    M30: 'PERIOD_M30',
    H1: 'PERIOD_H1',
    H4: 'PERIOD_H4',
    D1: 'PERIOD_D1',
    W1: 'PERIOD_W1',
    MN1: 'PERIOD_MN1',
    ...TIME_FRAME_ENUM_MQL5
}



/**
 * **Important:** Field must be defined
 * @description Any new type of field must be defined here
 */
export const BAR_PARAMETER_TYPE = {
    SYMBOL: {
        NAME: 'Symbol',
        DATATYPE: BAR_DATATYPES.STRING,
        REQUIRED: false
    },
    
    TIMEFRAME: {
        NAME: 'Timeframe',
        DATATYPE: BAR_DATATYPES.ENUM,
        DATA: TIME_FRAME_ENUM
    },
    
    
    CANDLE_ID: {
        NAME: 'Candle Id',
        DATATYPE: BAR_DATATYPES.INTEGER,
        REQUIRED: true
    },
    
}



export const HIGH = 'High';
export const LOW = 'Low';
export const OPEN = 'Open';
export const CLOSE = 'Close';
export const ASK = 'Ask';
export const BID = 'Bid';
export const ALERT = 'Alert';

// Provide a prefix name for bar type


export const HIGH_PREFIX = '';
export const LOW_PREFIX = '';
export const OPEN_PREFIX = '';
export const CLOSE_PREFIX = '';

/**
 * **Important:** Dropdown for indicator filter
 * @description defines the order of the dropdown list
 */



export const BAR_DRAWER_STATE = 
{
   [HIGH]: [
    PARAMETER_TYPE.SYMBOL,
    PARAMETER_TYPE.TIMEFRAME,
    PARAMETER_TYPE.CANDLE_ID
    ],
    [LOW]: [
    PARAMETER_TYPE.SYMBOL,
    PARAMETER_TYPE.TIMEFRAME,
    PARAMETER_TYPE.CANDLE_ID
    ],
    [OPEN]: [
    PARAMETER_TYPE.SYMBOL,
    PARAMETER_TYPE.TIMEFRAME,
    PARAMETER_TYPE.CANDLE_ID
    ],
    [CLOSE]: [
    PARAMETER_TYPE.SYMBOL,
    PARAMETER_TYPE.TIMEFRAME,
    PARAMETER_TYPE.CANDLE_ID
    ]
}

export const BLOCKLY_DROPDOWN_BAR = [
    [HIGH, HIGH],
    [LOW, LOW],
    [OPEN, OPEN],
    [CLOSE, CLOSE]
]
   
/**
 * **Important:** Function signature for the bar type
 * @description include function signature corresponding to indicator type
 */

export const BAR_FUNCTIONS = {
    [HIGH]: 'iHigh',
    [LOW]: 'iLow',
    [OPEN]: 'iOpen',
    [CLOSE]: 'iClose'
}

/*
// Enumeration variable for required enums
export const ENUMERATION_TYPE = {
    [BAR_PARAMETER_TYPE.TIMEFRAME.NAME]: 'ENUM_TIMEFRAMES',
    [BAR_PARAMETER_TYPE.APPLIED_PRICE.NAME]: 'ENUM_APPLIED_PRICE',
    [BAR_PARAMETER_TYPE.METHOD.NAME]: 'ENUM_MA_METHOD',
}
*/




