import {INDICATOR_DATATYPES} from "./constants.Indicator";
//import { BOOL_ENUM } from './constants'

export const BOOL_ENUM = {
    TRUE: "true",
    FALSE: "false",
};

export const CONFIGURE_PARAMETER = {
    TAKE_PROFIT: {
        NAME: "Take Profit",
        DATATYPE: INDICATOR_DATATYPES.DOUBLE,
    },
    STOP_LOSS: {
        NAME: "Stop Loss",
        DATATYPE: INDICATOR_DATATYPES.DOUBLE,
    },
    LOTS: {
        NAME: "LOTS",
        DATATYPE: INDICATOR_DATATYPES.DOUBLE,
    },
};
export const VALUE_CODE_PARAMETER = {
    VALUE: {
        NAME: "Value",
        DATATYPE: INDICATOR_DATATYPES.INTEGER,
    },
};

const TIME_FRAME_ENUM = {
    CURRENT: "PERIOD_M15",
    M15: "PERIOD_M15",
    M30: "PERIOD_M30",
    H1: "PERIOD_H1",
    H4: "PERIOD_H4",
    D1: "PERIOD_D1",
};
export const AI_CONFIGURE_PARAMETER = {
    SYMBOL: {
        NAME: "Symbol",
        DATATYPE: INDICATOR_DATATYPES.STRING,
        REQUIRED: false,
    },
    TIMEFRAME: {
        NAME: "Timeframe",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: TIME_FRAME_ENUM,
    },
    START_DATE: {
        NAME: "Start Date",
        DATATYPE: INDICATOR_DATATYPES.DATE, // Make sure this type exists in your enum
        REQUIRED: true,
    },
    END_DATE: {
        NAME: "End Date",
        DATATYPE: INDICATOR_DATATYPES.DATE, // Same here
        REQUIRED: true,
    },
};

export const MARTINGALE_PARAMETER = {
    USE_INTELLIGENT_MARTINGALE: {
        NAME: "Use Intelligent Martingale",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: {true: "true", false: "false"},
    },
    MARTINGALE_MULTIPLIER: {
        NAME: "Martingale Multiplier",
        DATATYPE: INDICATOR_DATATYPES.DOUBLE,
    },
    MAX_MARTINGALE_LOT_SIZE: {
        NAME: "Maximum Martingale Lot Size",
        DATATYPE: INDICATOR_DATATYPES.DOUBLE,
    },
};

export const AUTO_MONEY_PARAMETER = {
    USE_AUTO_MONEY_MANAGEMENT: {
        NAME: "Use Automatic Money Management",
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: {true: "true", false: "false"},
    },
    TRADE_RISK_PERCENTAGE: {
        NAME: "Trade Risk Percentage",
        DATATYPE: INDICATOR_DATATYPES.DOUBLE,
    },
};
export const ALERT_PARAMETER = {
    /*
    DO_ALERT: {
        NAME: 'Do Alert',
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: BOOL_ENUM
    },
    */
    ALERT_MESSAGE: {
        NAME: "Alert Message",
        DATATYPE: INDICATOR_DATATYPES.STRING,
    },
};

export const TIME_PARAMETER = {
    TIME: {
        NAME: "Time",
        DATATYPE: INDICATOR_DATATYPES.STRING,
    },
};

export const CUSTOM_CODE_PARAMETER = {
    CUSTOM_CODE: {
        NAME: "Custom Code",
        DATATYPE: INDICATOR_DATATYPES.STRING,
    },
};
