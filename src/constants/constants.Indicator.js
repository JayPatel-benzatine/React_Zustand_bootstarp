/**
 * @fileoverview To create new indicator filters, 4 files needs to be updated
 * 1. constants.indicator.js is the file for new indicator declaration
 * 2. constants.js is the file to provide default values for each indicator
 * 3. constants.popover.js is the file to provide help text for indicator field
 * 4. workspaceWindow/utils.js is the file in which the function defination has
 *    to be created for the new indicator.
 * (Search for comment,"DEFINE NEW INDICATOR", to define indicators in required files)
 */

import {MATH_ONLIST_OPERATOR_MAX} from "blockly/msg/en";

/**
 * **Warning:** Do not change
 * @description Datatypes supported for indicator fields
 */
export const INDICATOR_DATATYPES = {
    STRING: "string",
    INTEGER: "integer",
    DOUBLE: "double",
    ENUM: "enum",
    DATE: "date",
};

/**
 * Enumerations for the indicator fields
 * Define new enums for new indicators here.
 */
const TIME_FRAME_ENUM_MQL5 = {};

const TIME_FRAME_ENUM = {
    CURRENT: "PERIOD_CURRENT",
    M1: "PERIOD_M1",
    M5: "PERIOD_M5",
    M15: "PERIOD_M15",
    M30: "PERIOD_M30",
    H1: "PERIOD_H1",
    H4: "PERIOD_H4",
    D1: "PERIOD_D1",
    W1: "PERIOD_W1",
    MN1: "PERIOD_MN1",
    ...TIME_FRAME_ENUM_MQL5,
};

const APPLIED_PRICE_ENUM = {
    CLOSE: "PRICE_CLOSE",
    OPEN: "PRICE_OPEN",
    HIGH: "PRICE_HIGH",
    LOW: "PRICE_LOW",
    MEDIAN: "PRICE_MEDIAN",
    TYPICAL: "PRICE_TYPICAL",
    WEIGHTED: "PRICE_WEIGHTED",
};
const PRICE_FIELD_ENUM = {
    CLOSE: "PRICE_CLOSE",
    OPEN: "PRICE_OPEN",
    HIGH: "PRICE_HIGH",
    LOW: "PRICE_LOW",
};
const PRICE_STOCHASTIC_ENUM = {
    STO_LOWHIGH: "STO_LOWHIGH",
    STO_CLOSECLOSE: "STO_CLOSECLOSE",
};
const APPLIED_VOLUME_ENUM = {
    VOLUME_TICK: "VOLUME_TICK",
    VOLUME_REAL: "VOLUME_REAL",
};

const ADX_MODE_ENUM = {
    MAIN: "MODE_MAIN",
    PLUS_DI: "MODE_PLUSDI",
    MINUS_DI: "MODE_MINUSDI",
};

const LINE_MODE_ENUM = {
    MAIN: "MODE_MAIN",
    SIGNAL: "MODE_SIGNAL",
};

const ALLIGATOR_MODE_ENUM = {
    GATORJAW: "MODE_GATORJAW",
    GATORTEETH: "MODE_GATORTEETH",
    GATORLIPS: "MODE_GATORLIPS",
};

const ICHI_MODE_ENUM = {
    TENKANSEN: "MODE_TENKANSEN",
    KIJUNSEN: "MODE_KIJUNSEN",
    SENKOUSPANA: "MODE_SENKOUSPANA",
    SENKOUSPANB: "MODE_SENKOUSPANB",
    CHIKOUSPAN: "MODE_CHIKOUSPAN",
};

const MODE_ENUM = {
    MAIN: "MODE_MAIN",
    UPPER: "MODE_UPPER",
    LOWER: "MODE_LOWER",
};

const METHOD_ENUM = {
    SIMPLE: "MODE_SMA",
    EXPONENTIAL: "MODE_EMA",
    SMOOTHED: "MODE_SMMA",
    LINEAR_WEIGHTED: "MODE_LWMA",
};

/**
 * **Important:** Field must be defined
 * @description Any new type of field must be defined here
 */
export const PARAMETER_TYPE = {
    SYMBOL: {
        NAME: "Symbol",
        DATATYPE: INDICATOR_DATATYPES.STRING,
        REQUIRED: false,
    },
    CUSTOM_INDICATOR_NAME: {
        NAME: "Custom Indicator Name",
        DATATYPE: INDICATOR_DATATYPES.STRING,
        REQUIRED: true,
    },
    CUSTOM_INDICATOR_PARAMETER: {
        NAME: "Custom Indicator Parameter",
        DATATYPE: INDICATOR_DATATYPES.STRING,
        REQUIRED: true,
    },
    TIMEFRAME: {
        NAME: "Timeframe",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: TIME_FRAME_ENUM,
    },
    PERIOD: {
        NAME: "Period",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    TENKANSEN_PERIOD: {
        NAME: "TenkanSen Period",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    KIJUNSEN_PERIOD: {
        NAME: "KijunSen Period",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    SENKOUSPANB_PERIOD: {
        NAME: "Senkou Span B Period",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    JAW_PERIOD: {
        NAME: "Jaw Period",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    K_PERIOD: {
        NAME: "K Period",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    D_PERIOD: {
        NAME: "D Period",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    SLOWING: {
        NAME: "Slowing",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    TEETH_PERIOD: {
        NAME: "Teeth Period",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    LIPS_PERIOD: {
        NAME: "Lips Period",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    FAST_EMA_PERIOD: {
        NAME: "Fast EMA Period",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    SLOW_EMA_PERIOD: {
        NAME: "Slow EMA Period",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    SIGNAL_PERIOD: {
        NAME: "Signal Period",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    STEP: {
        NAME: "Step",
        DATATYPE: INDICATOR_DATATYPES.DOUBLE,
        REQUIRED: true,
    },
    MAXIMUM: {
        NAME: "Maximun",
        DATATYPE: INDICATOR_DATATYPES.DOUBLE,
        REQUIRED: true,
    },
    DEVIATION: {
        NAME: "Deviation",
        DATATYPE: INDICATOR_DATATYPES.DOUBLE,
        REQUIRED: true,
    },
    SHIFT: {
        NAME: "Shift",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    JAW_SHIFT: {
        NAME: "Jaw Shift",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    TEETH_SHIFT: {
        NAME: "Teeth Shift",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    LIPS_SHIFT: {
        NAME: "Lips Shift",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    APPLIED_PRICE: {
        NAME: "Applied Price",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: APPLIED_PRICE_ENUM,
    },
    PRICE_FIELD: {
        NAME: "Price Field",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: PRICE_FIELD_ENUM,
    },
    PRICE_STOCHASTIC_FIELD: {
        NAME: "STOCHASTIC Price Field",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: PRICE_STOCHASTIC_ENUM,
    },
    APPLIED_VOLUM: {
        NAME: "Applied Volume",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: APPLIED_VOLUME_ENUM,
    },
    MODE: {
        NAME: "Mode",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: MODE_ENUM,
    },
    ADX_MODE: {
        NAME: "Adx Mode",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: ADX_MODE_ENUM,
    },
    ACC_MODE: {
        NAME: "Accumulation/Distribution",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: APPLIED_VOLUME_ENUM,
    },
    LINE_MODE: {
        NAME: "Line Mode",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: LINE_MODE_ENUM,
    },
    ALLIGATOR_MODE: {
        NAME: "Alligator Mode",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: ALLIGATOR_MODE_ENUM,
    },
    ICHI_MODE: {
        NAME: "Ichimoku Mode",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: ICHI_MODE_ENUM,
    },
    CANDLE_ID: {
        NAME: "Candle Id",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
    METHOD: {
        NAME: "Method",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: METHOD_ENUM,
    },
    BUFFER_MODE: {
        NAME: "Buffer Mode",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
};

// Provide a display Name for indicator type
export const ACCELERATOR = "Accelerator/Decelerator";
const VALUE = "Value";
export const ACCUMULATION = "Accumulation/Distribution";
export const ADX = "ADX";
export const AWESOME = "Awesome Oscillator";
export const ALLIGATOR = "Alligator";
export const ATR = "ATR";
export const BEARS_POWER = "Bears Power";
export const BULLS_POWER = "Bulls Power";
export const BOLLINGER_BANDS = "Bollinger Bands";
export const CCI = "Commodity Channel Index";
export const DEMARKER = "DeMarker";
export const ENVELOPES = "Envelopes";
export const FORCE = "Force Index";
export const FRACTALS = "Fractals";
export const GATOR = "Gator";
export const ICHIMOKU = "Ichimoku";
export const BWMFI = "Market Facilitation Index";
export const MOMENTUM = "Momentum";
export const MFI = "Money Flow Index";
export const MOVING_AVERAGE = "Moving Average";
export const OSMA = "MA of Oscillator";
export const MACD = "MACD";
export const OBV = "On Balance Volume";
export const SAR = "Parabolic SAR";
export const RSI = "Relative Strength Index";
export const RVI = "Relative Vigor Index";
export const STDDEV = "Standard Deviation";
export const STOCHASTIC = "Stochastic Oscillator";
export const WILLIAMS = "Williams Percent Rage";
export const CUSTOM_INDICATOR = "Custom Indicator";

export const HIGH = "High";
export const LOW = "Low";
export const OPEN = "Open";
export const CLOSE = "Close";

// Provide a prefix name for indicator type
export const ACCELERATOR_PREFIX = "ACC";
export const ACCUMULATION_PREFIX = "ACCU";
export const ADX_PREFIX = "ADX";
export const ALLIGATOR_PREFIX = "ALLI";
export const ATR_PREFIX = "ATR";
export const AWESOME_PREFIX = "AWE";
export const BEARS_POWER_PREFIX = "BEARS";
export const BULLS_POWER_PREFIX = "BULL";
export const CCI_PREFIX = "CCI";
export const BOLLINGER_BANDS_PREFIX = "BB";
export const DEMARKER_PREFIX = "DeM";
export const ENVELOPES_PREFIX = "ENV";
export const FORCE_PREFIX = "FORCE";
export const FRACTALS_PREFIX = "FRACTALS";
export const GATOR_PREFIX = "GATOR";
export const ICHIMOKU_PREFIX = "ICHI";
export const BWMFI_PREFIX = "BWMFI";
export const MOMENTUM_PREFIX = "MOMENTUM";
export const MFI_PREFIX = "MFI";
export const MOVING_AVERAGE_PREFIX = "MA";
export const OSMA_PREFIX = "OSMA";
export const MACD_PREFIX = "MACD";
export const OBV_PREFIX = "OBV";
export const SAR_PREFIX = "SAR";
export const RSI_PREFIX = "RSI";
export const RVI_PREFIX = "RVI";
export const STDDEV_PREFIX = "STDDEV";
export const STOCHASTIC_PREFIX = "STOCH";
export const WILLIAMS_PREFIX = "WPR";
export const CUSTOM_INDICATOR_PREFIX = "";

export const HIGH_PREFIX = "";
export const LOW_PREFIX = "";
export const OPEN_PREFIX = "";
export const CLOSE_PREFIX = "";

/**
 * **Important:** Dropdown for indicator filter
 * @description defines the order of the dropdown list
 */
export const BLOCKLY_DROPDOWN_INDICATOR = [
    [MOVING_AVERAGE, MOVING_AVERAGE],
    [ACCELERATOR, ACCELERATOR],
    [ACCUMULATION, ACCUMULATION],
    [ADX, ADX],
    [ALLIGATOR, ALLIGATOR],
    [AWESOME, AWESOME],
    [ATR, ATR],
    [BEARS_POWER, BEARS_POWER],
    [BULLS_POWER, BULLS_POWER],
    [BOLLINGER_BANDS, BOLLINGER_BANDS],
    [CCI, CCI],
    [DEMARKER, DEMARKER],
    [ENVELOPES, ENVELOPES],
    [FORCE, FORCE],
    [FRACTALS, FRACTALS],
    [GATOR, GATOR],
    [ICHIMOKU, ICHIMOKU],
    [BWMFI, BWMFI],
    [MOMENTUM, MOMENTUM],
    [MFI, MFI],
    [OSMA, OSMA],
    [MACD, MACD],
    [OBV, OBV],
    [RSI, RSI],
    [SAR, SAR],
    [RVI, RVI],
    [STDDEV, STDDEV],
    [STOCHASTIC, STOCHASTIC],
    [WILLIAMS, WILLIAMS],
    [CUSTOM_INDICATOR, CUSTOM_INDICATOR],
];

/**
 * **Important:** Drawer fields for indicator type
 * @description include paramters fields required for each indicator type
 */

export const VALUE_CODE_PARAMETER_DRAWER_STATE = {
    VALUE: {
        NAME: "Value",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
        REQUIRED: true,
    },
};

export const DEFAULT_VALUE_CODE_DRAWER_STATE = {
    [VALUE]: [VALUE_CODE_PARAMETER_DRAWER_STATE.VALUE],
};
export const INDICATOR_DRAWER_STATE = {
    [ACCELERATOR]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.CANDLE_ID],
    [ACCUMULATION]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.SHIFT,
        PARAMETER_TYPE.APPLIED_VOLUM,
    ],
    [ADX]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.PERIOD,
        PARAMETER_TYPE.APPLIED_PRICE,
        PARAMETER_TYPE.ADX_MODE,
        PARAMETER_TYPE.CANDLE_ID,
    ],
    [ALLIGATOR]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.JAW_PERIOD,
        PARAMETER_TYPE.JAW_SHIFT,
        PARAMETER_TYPE.TEETH_PERIOD,
        PARAMETER_TYPE.TEETH_SHIFT,
        PARAMETER_TYPE.LIPS_PERIOD,
        PARAMETER_TYPE.LIPS_SHIFT,
        PARAMETER_TYPE.METHOD,
        PARAMETER_TYPE.APPLIED_PRICE,
        PARAMETER_TYPE.ALLIGATOR_MODE,
        PARAMETER_TYPE.CANDLE_ID,
    ],
    [AWESOME]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.CANDLE_ID],
    [ATR]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.PERIOD, PARAMETER_TYPE.CANDLE_ID],
    [BEARS_POWER]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.PERIOD,
        PARAMETER_TYPE.APPLIED_PRICE,
        PARAMETER_TYPE.CANDLE_ID,
    ],
    [BULLS_POWER]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.PERIOD,
        PARAMETER_TYPE.APPLIED_PRICE,
        PARAMETER_TYPE.CANDLE_ID,
    ],
    [BOLLINGER_BANDS]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.PERIOD,
        PARAMETER_TYPE.DEVIATION,
        PARAMETER_TYPE.SHIFT,
        PARAMETER_TYPE.CANDLE_ID,
        // Enums
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.MODE,
        PARAMETER_TYPE.APPLIED_PRICE,
    ],
    [CCI]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.PERIOD,
        PARAMETER_TYPE.APPLIED_PRICE,
        PARAMETER_TYPE.CANDLE_ID,
    ],
    [DEMARKER]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.PERIOD, PARAMETER_TYPE.CANDLE_ID],
    [ENVELOPES]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.PERIOD,
        PARAMETER_TYPE.DEVIATION,
        PARAMETER_TYPE.SHIFT,
        PARAMETER_TYPE.CANDLE_ID,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.MODE,
        PARAMETER_TYPE.METHOD,
        PARAMETER_TYPE.APPLIED_PRICE,
    ],
    [FORCE]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.PERIOD,
        PARAMETER_TYPE.METHOD,
        PARAMETER_TYPE.APPLIED_PRICE,
        PARAMETER_TYPE.CANDLE_ID,
        PARAMETER_TYPE.APPLIED_VOLUM,
    ],
    [FRACTALS]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.MODE, PARAMETER_TYPE.CANDLE_ID],
    [GATOR]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.JAW_PERIOD,
        PARAMETER_TYPE.JAW_SHIFT,
        PARAMETER_TYPE.TEETH_PERIOD,
        PARAMETER_TYPE.TEETH_SHIFT,
        PARAMETER_TYPE.LIPS_PERIOD,
        PARAMETER_TYPE.LIPS_SHIFT,
        PARAMETER_TYPE.METHOD,
        PARAMETER_TYPE.APPLIED_PRICE,
        PARAMETER_TYPE.MODE,
        PARAMETER_TYPE.CANDLE_ID,
    ],
    [ICHIMOKU]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.TENKANSEN_PERIOD,
        PARAMETER_TYPE.KIJUNSEN_PERIOD,
        PARAMETER_TYPE.SENKOUSPANB_PERIOD,
        PARAMETER_TYPE.ICHI_MODE,
        PARAMETER_TYPE.CANDLE_ID,
    ],
    [BWMFI]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.CANDLE_ID],
    [OBV]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.CANDLE_ID, PARAMETER_TYPE.APPLIED_PRICE],
    [MOMENTUM]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.PERIOD,
        PARAMETER_TYPE.APPLIED_PRICE,
        PARAMETER_TYPE.CANDLE_ID,
    ],
    [MFI]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.PERIOD, PARAMETER_TYPE.CANDLE_ID],
    [MOVING_AVERAGE]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.PERIOD,
        PARAMETER_TYPE.SHIFT,
        PARAMETER_TYPE.CANDLE_ID,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.METHOD,
        PARAMETER_TYPE.APPLIED_PRICE,
    ],
    [OSMA]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.FAST_EMA_PERIOD,
        PARAMETER_TYPE.SLOW_EMA_PERIOD,
        PARAMETER_TYPE.SIGNAL_PERIOD,
        PARAMETER_TYPE.APPLIED_PRICE,
        PARAMETER_TYPE.CANDLE_ID,
    ],
    [MACD]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.FAST_EMA_PERIOD,
        PARAMETER_TYPE.SLOW_EMA_PERIOD,
        PARAMETER_TYPE.SIGNAL_PERIOD,
        PARAMETER_TYPE.APPLIED_PRICE,
        PARAMETER_TYPE.LINE_MODE,
        PARAMETER_TYPE.CANDLE_ID,
    ],
    [RSI]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.PERIOD,
        PARAMETER_TYPE.APPLIED_PRICE,
        PARAMETER_TYPE.CANDLE_ID,
    ],
    [CUSTOM_INDICATOR]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.CUSTOM_INDICATOR_NAME,
        PARAMETER_TYPE.CUSTOM_INDICATOR_PARAMETER,
        PARAMETER_TYPE.BUFFER_MODE,
        PARAMETER_TYPE.CANDLE_ID,
        PARAMETER_TYPE.TIMEFRAME,
    ],
    [HIGH]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.CANDLE_ID],
    [LOW]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.CANDLE_ID],
    [OPEN]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.CANDLE_ID],
    [CLOSE]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.CANDLE_ID],
    [SAR]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.STEP,
        PARAMETER_TYPE.MAXIMUM,
        PARAMETER_TYPE.SHIFT,
    ],
    [RVI]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.PERIOD,
        PARAMETER_TYPE.LINE_MODE,
        PARAMETER_TYPE.SHIFT,
        PARAMETER_TYPE.CANDLE_ID,
    ],
    [STDDEV]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.PERIOD,
        PARAMETER_TYPE.SHIFT,
        PARAMETER_TYPE.METHOD,
        PARAMETER_TYPE.APPLIED_PRICE,
        PARAMETER_TYPE.CANDLE_ID,
    ],

    [WILLIAMS]: [PARAMETER_TYPE.SYMBOL, PARAMETER_TYPE.TIMEFRAME, PARAMETER_TYPE.PERIOD, PARAMETER_TYPE.CANDLE_ID],
    [STOCHASTIC]: [
        PARAMETER_TYPE.SYMBOL,
        PARAMETER_TYPE.TIMEFRAME,
        PARAMETER_TYPE.K_PERIOD,
        PARAMETER_TYPE.D_PERIOD,
        PARAMETER_TYPE.SLOWING,
        PARAMETER_TYPE.METHOD,
        PARAMETER_TYPE.PRICE_STOCHASTIC_FIELD,
        PARAMETER_TYPE.LINE_MODE,
        PARAMETER_TYPE.SHIFT,
        PARAMETER_TYPE.CANDLE_ID,
    ],
};

/*
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
*/

/**
 * **Important:** Function signature for the indicator type
 * @description include function signature corresponding to indicator type
 */
export const INDICATOR_FUNCTIONS = {
    [ACCELERATOR]: "iAC",
    [ACCUMULATION]: "iAD",
    [ADX]: "iADX",
    [ALLIGATOR]: "iAlligator",
    [AWESOME]: "iAO",
    [ATR]: "iATR",
    [BEARS_POWER]: "iBearsPower",
    [BULLS_POWER]: "iBullsPower",
    [BOLLINGER_BANDS]: "iBands",
    [CCI]: "iCCI",
    [DEMARKER]: "iDeMarker",
    [ENVELOPES]: "iEnvelopes",
    [FORCE]: "iForce",
    [FRACTALS]: "iFractals",
    [GATOR]: "iGator",
    [ICHIMOKU]: "iIchimoku",
    [BWMFI]: "iBWMFI",
    [MOMENTUM]: "iMomentum",
    [MFI]: "iMFI",
    [MOVING_AVERAGE]: "iMA",
    [OSMA]: "iOsMA",
    [MACD]: "iMACD",
    [RSI]: "iRSI",
    [CUSTOM_INDICATOR]: "iCustom",
    [HIGH]: "iHigh",
    [LOW]: "iLow",
    [OPEN]: "iOpen",
    [CLOSE]: "iClose",
    [OBV]: "iOBV",
    [SAR]: "iSAR",
    [RVI]: "iRVI",
    [STDDEV]: "iStdDev",
    [WILLIAMS]: "iWPR",
    [STOCHASTIC]: "iStochastic",
};

export const BAR_FUNCTIONS = {
    [HIGH]: "iHigh",
    [LOW]: "iLow",
    [OPEN]: "iOpen",
    [CLOSE]: "Close",
};

// Enumeration variable for required enums
export const ENUMERATION_TYPE = {
    [PARAMETER_TYPE.TIMEFRAME.NAME]: "ENUM_TIMEFRAMES",
    [PARAMETER_TYPE.APPLIED_PRICE.NAME]: "ENUM_APPLIED_PRICE",
    [PARAMETER_TYPE.METHOD.NAME]: "ENUM_MA_METHOD",
    [PARAMETER_TYPE.APPLIED_VOLUM.NAME]: "ENUM_APPLIED_VOLUME",
    [PARAMETER_TYPE.PRICE_STOCHASTIC_FIELD.NAME]: "ENUM_STO_PRICE",
};
