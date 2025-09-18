//Validation regexp

import {
    ACCELERATOR,
    ACCELERATOR_PREFIX,
    ADX,
    ADX_PREFIX,
    ALLIGATOR,
    ALLIGATOR_PREFIX,
    AWESOME,
    AWESOME_PREFIX,
    ATR,
    ATR_PREFIX,
    BEARS_POWER,
    BEARS_POWER_PREFIX,
    BULLS_POWER,
    BULLS_POWER_PREFIX,
    BOLLINGER_BANDS,
    BOLLINGER_BANDS_PREFIX,
    CCI,
    CCI_PREFIX,
    DEMARKER,
    DEMARKER_PREFIX,
    FORCE,
    FORCE_PREFIX,
    FRACTALS,
    FRACTALS_PREFIX,
    GATOR,
    GATOR_PREFIX,
    ICHIMOKU,
    ICHIMOKU_PREFIX,
    BWMFI,
    BWMFI_PREFIX,
    MOMENTUM,
    MOMENTUM_PREFIX,
    MFI,
    MFI_PREFIX,
    MOVING_AVERAGE,
    MOVING_AVERAGE_PREFIX,
    OSMA,
    OSMA_PREFIX,
    RSI,
    RSI_PREFIX,
    PARAMETER_TYPE,
    ENVELOPES,
    ENVELOPES_PREFIX,
    CUSTOM_INDICATOR,
    CUSTOM_INDICATOR_PREFIX,
    HIGH,
    HIGH_PREFIX,
    LOW,
    LOW_PREFIX,
    OPEN,
    OPEN_PREFIX,
    CLOSE,
    CLOSE_PREFIX,
    INDICATOR_DATATYPES,
    MACD,
    MACD_PREFIX,
    ACCUMULATION,
    ACCUMULATION_PREFIX,
    OBV,
    OBV_PREFIX,
    SAR,
    SAR_PREFIX,
    RVI,
    RVI_PREFIX,
    STDDEV,
    STDDEV_PREFIX,
    WILLIAMS,
    WILLIAMS_PREFIX,
    STOCHASTIC,
    STOCHASTIC_PREFIX,
} from "./constants.Indicator";
import {
    CONFIGURE_PARAMETER,
    TIME_PARAMETER,
    ALERT_PARAMETER,
    BOOL_ENUM,
    MARTINGALE_PARAMETER,
    AUTO_MONEY_PARAMETER,
    CUSTOM_CODE_PARAMETER,
    AI_CONFIGURE_PARAMETER,
    VALUE_CODE_PARAMETER,
} from "./constants.filter";
//import { ALERT } from "./constants.Bar";

export const EMAIL_VALIDATION = /^\s*\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+\s*$/;
// export const PASSWORD_VALIDATION = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,50}$/;
export const PASSWORD_VALIDATION =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>/?`~]).{8,50}$/;

// Allow/Reject Action List
export const ACTION_LIST = [
    {id: 0, name: "True"},
    {id: 1, name: "False"},
];
/*
const BOOL_ENUM = {
    TRUE: 'true',
    FALSE: 'false'
}
*/

export const FREE_TRAIL = "free -> 0.0 USD";
export const FREE_PLAN = "free";
export const ALERT = "Alert";
export const ALERT_PREFIX = "AL";
export const PUSH_NOTIFICATION = "Push Notification";
export const PUSH_NOTIFICATION_PREFIX = "PU";
export const SEND_EMAIL = "Send Email";
export const SEND_EMAIL_PREFIX = "SE";

export const ALERT_PARAMETER_TYPE = {
    /*
    DO_ALERT: {
        NAME: 'Do Alert',
        DATATYPE: INDICATOR_DATATYPES.ENUM,
        DATA: BOOL_ENUM,
        REQUIRED: true
    },
    */
    ALERT_MESSAGE: {
        NAME: "Alert Message",
        DATATYPE: INDICATOR_DATATYPES.STRING,
        REQUIRED: true,
    },
};

export const TIME_PARAMETER_TYPE = {
    TIME: {
        NAME: "Time",
        DATATYPE: INDICATOR_DATATYPES.STRING,
        REQUIRED: true,
    },
};

export const CUSTOM_CODE_PARAMETER_TYPE = {
    CUSTOM_CODE: {
        NAME: "Custom Code",
        DATATYPE: INDICATOR_DATATYPES.STRING,
        REQUIRED: true,
    },
};

// Default states for the week filter
export const DEFAULT_WEEK_LIST = {
    0: {name: "Sunday", action: "True"},
    1: {name: "Monday", action: "True"},
    2: {name: "Tuesday", action: "True"},
    3: {name: "Wednesday", action: "True"},
    4: {name: "Thursday", action: "True"},
    5: {name: "Friday", action: "True"},
    6: {name: "Saturday", action: "True"},
};

// Buy block constant options
export const BUY_OPTIONS_LIST = [
    {id: 0, option: "When No Trade is Open"},
    {id: 1, option: "When No Buy is Open (but a Sell may be open)"},
    {id: 2, option: "ALWAYS (CAUTION - may cause multiple Buys)"},
];

// Sell block constant options
export const SELL_OPTIONS_LIST = [
    {id: 0, option: "When No Trade is Open"},
    {id: 1, option: "When No Sell is Open (but a Buy may be open)"},
    {id: 2, option: "ALWAYS (CAUTION - may cause multiple Sells)"},
];

// Default BUY/SELL option
export const DEFAULT_BUY_SELL_OPTION = {
    id: 0,
    option: "When No Trade is Open",
};

// Default configure options
export const DEFAULT_CONFIGURE_OPTION = {
    [CONFIGURE_PARAMETER.TAKE_PROFIT.NAME]: 90,
    [CONFIGURE_PARAMETER.STOP_LOSS.NAME]: 30,
    [CONFIGURE_PARAMETER.LOTS.NAME]: 0.01,
};
export const DEFAULT_VALUE_CODE_OPTION = {
    [VALUE_CODE_PARAMETER.VALUE.NAME]: {VALUE: 1, ADJUSTABLE: true},
};
const TIME_FRAME_ENUM = {
    CURRENT: "PERIOD_M15",
    M15: "PERIOD_M15",
    M30: "PERIOD_M30",
    H1: "PERIOD_H1",
    H4: "PERIOD_H4",
    D1: "PERIOD_D1",
};

// Default AI engine
const format = (d) =>
    `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}:00:00:00`;

const now = new Date();
const oneMonthAgo = new Date(now);
oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1); // subtract 1 month

export const DEFAULT_CONFIGURE_OPTION_AI = {
    [AI_CONFIGURE_PARAMETER.SYMBOL.NAME]: {value: "GBPUSD"},
    [AI_CONFIGURE_PARAMETER.TIMEFRAME.NAME]: {value: TIME_FRAME_ENUM.CURRENT},
    [AI_CONFIGURE_PARAMETER.START_DATE.NAME]: {value: format(oneMonthAgo)},
    [AI_CONFIGURE_PARAMETER.END_DATE.NAME]: {value: format(now)},
};

// Default Martingale options
export const DEFAULT_MARTINGALE_OPTION = {
    [MARTINGALE_PARAMETER.USE_INTELLIGENT_MARTINGALE.NAME]: "false",
    [MARTINGALE_PARAMETER.MARTINGALE_MULTIPLIER.NAME]: 1.5,
    [MARTINGALE_PARAMETER.MAX_MARTINGALE_LOT_SIZE.NAME]: 1.0,
};

// Default AUto Money options
export const DEFAULT_AUTO_MONEY_OPTION = {
    [AUTO_MONEY_PARAMETER.USE_AUTO_MONEY_MANAGEMENT.NAME]: "false",
    [AUTO_MONEY_PARAMETER.TRADE_RISK_PERCENTAGE.NAME]: 1.0,
};

export const ALERT_DRAWER_STATE = {
    [ALERT]: [
        //ALERT_PARAMETER_TYPE.DO_ALERT,
        ALERT_PARAMETER_TYPE.ALERT_MESSAGE,
    ],
    [PUSH_NOTIFICATION]: [
        //ALERT_PARAMETER_TYPE.DO_ALERT,
        ALERT_PARAMETER_TYPE.ALERT_MESSAGE,
    ],
    [SEND_EMAIL]: [
        //ALERT_PARAMETER_TYPE.DO_ALERT,
        ALERT_PARAMETER_TYPE.ALERT_MESSAGE,
    ],
};

export const DEFAULT_TIME_OPTION = {
    //[TIME_PARAMETER.TIME.NAME]: "10:00"
    [TIME_PARAMETER.TIME.NAME]: {VALUE: "07:00", ADJUSTABLE: true},
};

export const DEFAULT_CUSTOM_CODE_OPTION = {
    [CUSTOM_CODE_PARAMETER.CUSTOM_CODE.NAME]: {VALUE: "", ADJUSTABLE: true},
};

export const BLOCKLY_DROPDOWN_ALERT = [
    [ALERT, ALERT],
    [PUSH_NOTIFICATION, PUSH_NOTIFICATION],
    [SEND_EMAIL, SEND_EMAIL],
];

// Default configure options
export const DEFAULT_ALERT_OPTION = {
    //[ALERT_PARAMETER_TYPE.DO_ALERT.NAME]: { VALUE: ALERT_PARAMETER_TYPE.DO_ALERT.DATA.TRUE, ADJUSTABLE: true },
    [ALERT_PARAMETER_TYPE.ALERT_MESSAGE.NAME]: {
        VALUE: "Test Message",
        ADJUSTABLE: true,
    },
    //[ALERT_PARAMETER_TYPE.DO_ALERT.NAME]: "true",
    //[ALERT_PARAMETER_TYPE.ALERT_MESSAGE.NAME] : "blah2"
};

// Default values for the each alert type
export const DEFAULT_ALERT_STATE = {
    [ALERT]: {
        prefix: ALERT_PREFIX,
        name: ALERT,
        //[ALERT_PARAMETER_TYPE.DO_ALERT.NAME]: { VALUE: ALERT_PARAMETER_TYPE.DO_ALERT.DATA.TRUE, ADJUSTABLE: true },
        [ALERT_PARAMETER_TYPE.ALERT_MESSAGE.NAME]: {
            VALUE: "Test Message",
            ADJUSTABLE: true,
        },
    },

    [PUSH_NOTIFICATION]: {
        prefix: PUSH_NOTIFICATION_PREFIX,
        name: PUSH_NOTIFICATION,
        //[ALERT_PARAMETER_TYPE.DO_ALERT.NAME]: { VALUE: ALERT_PARAMETER_TYPE.DO_ALERT.DATA.TRUE, ADJUSTABLE: true },
        [ALERT_PARAMETER_TYPE.ALERT_MESSAGE.NAME]: {
            VALUE: "Test Message",
            ADJUSTABLE: true,
        },
    },

    [SEND_EMAIL]: {
        prefix: SEND_EMAIL_PREFIX,
        name: SEND_EMAIL,
        //[ALERT_PARAMETER_TYPE.DO_ALERT.NAME]: { VALUE: ALERT_PARAMETER_TYPE.DO_ALERT.DATA.TRUE, ADJUSTABLE: true },
        [ALERT_PARAMETER_TYPE.ALERT_MESSAGE.NAME]: {
            VALUE: "Test Message",
            ADJUSTABLE: true,
        },
        //[ALERT_PARAMETER_TYPE.ALERT_MESSAGE.NAME] : { VALUE: "Test Message", ADJUSTABLE: true }
    },
};
export const ALERT_FUNCTIONS = {
    [ALERT]: "Alert",
    [PUSH_NOTIFICATION]: "SendNotification",
    [SEND_EMAIL]: "SendMail",
};
// Filter types that support drawer options
export const DRAWER_FILTER_TYPE = {
    WEEK: "week_filter",
    TIME: "time_filter",
    INDICATOR: "indicator_filter",
    BAR: "bar_filter",
    BUY: "Buy",
    SELL: "Sell",
    CONFIGURE: "configure_filter",
    VALUE_CODE: "value_code",
    CONFIGUREAI: "configure_filter_ai",
    ASK: "Ask",
    BID: "Bid",
    ALERT: "Alert",
    PUSH: "Push_Notification",
    EMAIL: "Email",
    AUTO_MONEY: "auto_money",
    MARTINGALE: "martingale",
    CUSTOM_CODE: "Custom_Code",
};

// Default values for the each indicator type
export const DEFAULT_INDICATOR_STATE = {
    [ACCELERATOR]: {
        prefix: ACCELERATOR_PREFIX,
        name: ACCELERATOR,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [ACCUMULATION]: {
        prefix: ACCUMULATION_PREFIX,
        name: ACCUMULATION,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.SHIFT.NAME]: {VALUE: 0, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_VOLUM.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_VOLUM.DATA.VOLUME_TICK,
        },
    },
    [ADX]: {
        prefix: ADX_PREFIX,
        name: ADX,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 20, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.CLOSE,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.ADX_MODE.NAME]: {
            VALUE: PARAMETER_TYPE.ADX_MODE.DATA.MAIN,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [ALLIGATOR]: {
        prefix: ALLIGATOR_PREFIX,
        name: ALLIGATOR,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.JAW_PERIOD.NAME]: {VALUE: 13, ADJUSTABLE: false},
        [PARAMETER_TYPE.JAW_SHIFT.NAME]: {VALUE: 8, ADJUSTABLE: false},
        [PARAMETER_TYPE.TEETH_PERIOD.NAME]: {VALUE: 8, ADJUSTABLE: false},
        [PARAMETER_TYPE.TEETH_SHIFT.NAME]: {VALUE: 5, ADJUSTABLE: false},
        [PARAMETER_TYPE.LIPS_PERIOD.NAME]: {VALUE: 5, ADJUSTABLE: false},
        [PARAMETER_TYPE.LIPS_SHIFT.NAME]: {VALUE: 3, ADJUSTABLE: false},
        [PARAMETER_TYPE.METHOD.NAME]: {
            VALUE: PARAMETER_TYPE.METHOD.DATA.SMOOTHED,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.MEDIAN,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.ALLIGATOR_MODE.NAME]: {
            VALUE: PARAMETER_TYPE.ALLIGATOR_MODE.DATA.GATORJAW,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [AWESOME]: {
        prefix: AWESOME_PREFIX,
        name: AWESOME,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [ATR]: {
        prefix: ATR_PREFIX,
        name: ATR,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 14, ADJUSTABLE: false},
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [BEARS_POWER]: {
        prefix: BEARS_POWER_PREFIX,
        name: BEARS_POWER,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 13, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.CLOSE,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [BULLS_POWER]: {
        prefix: BULLS_POWER_PREFIX,
        name: BULLS_POWER,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 13, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.CLOSE,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [BOLLINGER_BANDS]: {
        prefix: BOLLINGER_BANDS_PREFIX,
        name: BOLLINGER_BANDS,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 20, ADJUSTABLE: false},
        [PARAMETER_TYPE.SHIFT.NAME]: {VALUE: 0, ADJUSTABLE: false},
        [PARAMETER_TYPE.DEVIATION.NAME]: {VALUE: 2.0, ADJUSTABLE: false},
        [PARAMETER_TYPE.MODE.NAME]: {
            VALUE: PARAMETER_TYPE.MODE.DATA.MAIN,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.CLOSE,
            ADJUSTABLE: false,
        },
    },
    [CCI]: {
        prefix: CCI_PREFIX,
        name: CCI,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 14, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.CLOSE,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [DEMARKER]: {
        prefix: DEMARKER_PREFIX,
        name: DEMARKER,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 14, ADJUSTABLE: false},
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [ENVELOPES]: {
        prefix: ENVELOPES_PREFIX,
        name: ENVELOPES,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 14, ADJUSTABLE: false},
        [PARAMETER_TYPE.SHIFT.NAME]: {VALUE: 0, ADJUSTABLE: false},
        [PARAMETER_TYPE.DEVIATION.NAME]: {VALUE: 0.1, ADJUSTABLE: false},
        [PARAMETER_TYPE.MODE.NAME]: {
            VALUE: PARAMETER_TYPE.MODE.DATA.MAIN,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.METHOD.NAME]: {
            VALUE: PARAMETER_TYPE.METHOD.DATA.SIMPLE,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.CLOSE,
            ADJUSTABLE: false,
        },
    },
    [FORCE]: {
        prefix: FORCE_PREFIX,
        name: FORCE,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 13, ADJUSTABLE: false},
        [PARAMETER_TYPE.METHOD.NAME]: {
            VALUE: PARAMETER_TYPE.METHOD.DATA.SIMPLE,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.CLOSE,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_VOLUM.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_VOLUM.DATA.VOLUME_TICK,
        },
    },
    [FRACTALS]: {
        prefix: FRACTALS_PREFIX,
        name: FRACTALS,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.MODE.NAME]: {
            VALUE: PARAMETER_TYPE.MODE.DATA.UPPER,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [GATOR]: {
        prefix: GATOR_PREFIX,
        name: GATOR,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.JAW_PERIOD.NAME]: {VALUE: 13, ADJUSTABLE: false},
        [PARAMETER_TYPE.JAW_SHIFT.NAME]: {VALUE: 8, ADJUSTABLE: false},
        [PARAMETER_TYPE.TEETH_PERIOD.NAME]: {VALUE: 8, ADJUSTABLE: false},
        [PARAMETER_TYPE.TEETH_SHIFT.NAME]: {VALUE: 5, ADJUSTABLE: false},
        [PARAMETER_TYPE.LIPS_PERIOD.NAME]: {VALUE: 5, ADJUSTABLE: false},
        [PARAMETER_TYPE.LIPS_SHIFT.NAME]: {VALUE: 3, ADJUSTABLE: false},
        [PARAMETER_TYPE.METHOD.NAME]: {
            VALUE: PARAMETER_TYPE.METHOD.DATA.SMOOTHED,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.MEDIAN,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.MODE.NAME]: {
            VALUE: PARAMETER_TYPE.MODE.DATA.UPPER,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [ICHIMOKU]: {
        prefix: ICHIMOKU_PREFIX,
        name: ICHIMOKU,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.TENKANSEN_PERIOD.NAME]: {VALUE: 9, ADJUSTABLE: false},
        [PARAMETER_TYPE.KIJUNSEN_PERIOD.NAME]: {VALUE: 26, ADJUSTABLE: false},
        [PARAMETER_TYPE.SENKOUSPANB_PERIOD.NAME]: {VALUE: 52, ADJUSTABLE: false},
        [PARAMETER_TYPE.ICHI_MODE.NAME]: {
            VALUE: PARAMETER_TYPE.ICHI_MODE.DATA.TENKANSEN,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [BWMFI]: {
        prefix: BWMFI_PREFIX,
        name: BWMFI,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_VOLUM.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_VOLUM.DATA.VOLUME_TICK,
        },
    },
    [OBV]: {
        prefix: OBV_PREFIX,
        name: OBV,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.M5,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.CLOSE,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_VOLUM.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_VOLUM.DATA.VOLUME_TICK,
        },
    },
    [MOMENTUM]: {
        prefix: MOMENTUM_PREFIX,
        name: MOMENTUM,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 14, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.CLOSE,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [MFI]: {
        prefix: MFI_PREFIX,
        name: MFI,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 14, ADJUSTABLE: false},
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_VOLUM.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_VOLUM.DATA.VOLUME_TICK,
        },
    },
    [MOVING_AVERAGE]: {
        prefix: MOVING_AVERAGE_PREFIX,
        name: MOVING_AVERAGE,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 10, ADJUSTABLE: false},
        [PARAMETER_TYPE.SHIFT.NAME]: {VALUE: 0, ADJUSTABLE: false},
        [PARAMETER_TYPE.METHOD.NAME]: {
            VALUE: PARAMETER_TYPE.METHOD.DATA.EXPONENTIAL,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.CLOSE,
            ADJUSTABLE: false,
        },
    },
    [OSMA]: {
        prefix: OSMA_PREFIX,
        name: OSMA,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.FAST_EMA_PERIOD.NAME]: {VALUE: 12, ADJUSTABLE: false},
        [PARAMETER_TYPE.SLOW_EMA_PERIOD.NAME]: {VALUE: 26, ADJUSTABLE: false},
        [PARAMETER_TYPE.SIGNAL_PERIOD.NAME]: {VALUE: 9, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.OPEN,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [MACD]: {
        prefix: MACD_PREFIX,
        name: MACD,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.FAST_EMA_PERIOD.NAME]: {VALUE: 12, ADJUSTABLE: false},
        [PARAMETER_TYPE.SLOW_EMA_PERIOD.NAME]: {VALUE: 26, ADJUSTABLE: false},
        [PARAMETER_TYPE.SIGNAL_PERIOD.NAME]: {VALUE: 9, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.OPEN,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.LINE_MODE.NAME]: {
            VALUE: PARAMETER_TYPE.LINE_MODE.DATA.MAIN,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [RSI]: {
        prefix: RSI_PREFIX,
        name: RSI,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 14, ADJUSTABLE: false},
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.CLOSE,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [CUSTOM_INDICATOR]: {
        prefix: CUSTOM_INDICATOR_PREFIX,
        name: CUSTOM_INDICATOR,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
        [PARAMETER_TYPE.BUFFER_MODE.NAME]: {VALUE: 1, ADJUSTABLE: false},
        [PARAMETER_TYPE.CUSTOM_INDICATOR_NAME.NAME]: {
            VALUE: "Enter custom indicator file name",
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CUSTOM_INDICATOR_PARAMETER.NAME]: {
            VALUE: "13,5",
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
    },
    [SAR]: {
        prefix: SAR_PREFIX,
        name: SAR,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.STEP.NAME]: {VALUE: 0.2, ADJUSTABLE: false},
        [PARAMETER_TYPE.MAXIMUM.NAME]: {VALUE: 0.2, ADJUSTABLE: false},
        [PARAMETER_TYPE.SHIFT.NAME]: {VALUE: 0, ADJUSTABLE: false},
    },
    [RVI]: {
        prefix: RVI_PREFIX,
        name: RVI,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 20, ADJUSTABLE: false},
        [PARAMETER_TYPE.LINE_MODE.NAME]: {
            VALUE: PARAMETER_TYPE.LINE_MODE.DATA.MAIN,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.SHIFT.NAME]: {VALUE: 0, ADJUSTABLE: false},
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [STDDEV]: {
        prefix: STDDEV_PREFIX,
        name: STDDEV,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 10, ADJUSTABLE: false},
        [PARAMETER_TYPE.SHIFT.NAME]: {VALUE: 0, ADJUSTABLE: false},
        [PARAMETER_TYPE.METHOD.NAME]: {
            VALUE: PARAMETER_TYPE.METHOD.DATA.EXPONENTIAL,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.APPLIED_PRICE.NAME]: {
            VALUE: PARAMETER_TYPE.APPLIED_PRICE.DATA.CLOSE,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [WILLIAMS]: {
        prefix: WILLIAMS_PREFIX,
        name: WILLIAMS,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PERIOD.NAME]: {VALUE: 10, ADJUSTABLE: false},
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [STOCHASTIC]: {
        prefix: STOCHASTIC_PREFIX,
        name: STOCHASTIC,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.K_PERIOD.NAME]: {VALUE: 3, ADJUSTABLE: false},
        [PARAMETER_TYPE.D_PERIOD.NAME]: {VALUE: 3, ADJUSTABLE: false},
        [PARAMETER_TYPE.SLOWING.NAME]: {VALUE: 3, ADJUSTABLE: false},
        [PARAMETER_TYPE.METHOD.NAME]: {
            VALUE: PARAMETER_TYPE.METHOD.DATA.SMOOTHED,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.PRICE_STOCHASTIC_FIELD.NAME]: {
            VALUE: PARAMETER_TYPE.PRICE_STOCHASTIC_FIELD.DATA.STO_LOWHIGH,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.LINE_MODE.NAME]: {
            VALUE: PARAMETER_TYPE.LINE_MODE.DATA.MAIN,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.SHIFT.NAME]: {VALUE: 0, ADJUSTABLE: false},
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    /*
    [HIGH]: {
        prefix: HIGH_PREFIX,
        name: HIGH,
        [PARAMETER_TYPE.SYMBOL.NAME]: { VALUE: null, ADJUSTABLE: false },
        [PARAMETER_TYPE.TIMEFRAME.NAME]: { VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT, ADJUSTABLE: false },
         [PARAMETER_TYPE.CANDLE_ID.NAME]: { VALUE: 1, ADJUSTABLE: false }
    },
    [LOW]: {
        prefix: LOW_PREFIX,
        name: LOW,
        [PARAMETER_TYPE.SYMBOL.NAME]: { VALUE: null, ADJUSTABLE: false },
        [PARAMETER_TYPE.TIMEFRAME.NAME]: { VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT, ADJUSTABLE: false },
         [PARAMETER_TYPE.CANDLE_ID.NAME]: { VALUE: 1, ADJUSTABLE: false }
    },
    [OPEN]: {
        prefix: OPEN_PREFIX,
        name: OPEN,
        [PARAMETER_TYPE.SYMBOL.NAME]: { VALUE: null, ADJUSTABLE: false },
        [PARAMETER_TYPE.TIMEFRAME.NAME]: { VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT, ADJUSTABLE: false },
         [PARAMETER_TYPE.CANDLE_ID.NAME]: { VALUE: 1, ADJUSTABLE: false }
    },
    [CLOSE]: {
        prefix: CLOSE_PREFIX,
        name: CLOSE,
        [PARAMETER_TYPE.SYMBOL.NAME]: { VALUE: null, ADJUSTABLE: false },
        [PARAMETER_TYPE.TIMEFRAME.NAME]: { VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT, ADJUSTABLE: false },
         [PARAMETER_TYPE.CANDLE_ID.NAME]: { VALUE: 1, ADJUSTABLE: false }
    },
    */

    /**
     * TODO: DEFINE NEW INDICATOR
     * Give default values for each indicator type
     * refer to above indicators and define new indicator
     * (**Important:** Import Display name and prefix name for new indicator)
     */
};

// Default values for the each BAR type
export const DEFAULT_BAR_STATE = {
    [HIGH]: {
        prefix: HIGH_PREFIX,
        name: HIGH,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [LOW]: {
        prefix: LOW_PREFIX,
        name: LOW,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [OPEN]: {
        prefix: OPEN_PREFIX,
        name: OPEN,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
    [CLOSE]: {
        prefix: CLOSE_PREFIX,
        name: CLOSE,
        [PARAMETER_TYPE.SYMBOL.NAME]: {VALUE: null, ADJUSTABLE: false},
        [PARAMETER_TYPE.TIMEFRAME.NAME]: {
            VALUE: PARAMETER_TYPE.TIMEFRAME.DATA.CURRENT,
            ADJUSTABLE: false,
        },
        [PARAMETER_TYPE.CANDLE_ID.NAME]: {VALUE: 1, ADJUSTABLE: false},
    },
};
