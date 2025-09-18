import { TIME_PARAMETER_TYPE, CUSTOM_CODE_PARAMETER_TYPE } from "./constants";
import { CONFIGURE_PARAMETER, ALERT_PARAMETER, MARTINGALE_PARAMETER, AUTO_MONEY_PARAMETER } from "./constants.filter";
import { ADX, ACCELERATOR, ALLIGATOR, AWESOME, ATR, BEARS_POWER, BULLS_POWER, BOLLINGER_BANDS, CCI, DEMARKER, CUSTOM_INDICATOR, ENVELOPES, FORCE, FRACTALS, GATOR, ICHIMOKU, BWMFI, MOMENTUM, MFI, MOVING_AVERAGE, OSMA, RSI, HIGH, LOW, OPEN, CLOSE, PARAMETER_TYPE } from "./constants.Indicator";

/**
 * Default help text for all parameters. If new 
 * paramter type is added define its help text here.
 */
const COMMON_HELP_TEXT = {
    [PARAMETER_TYPE.SYMBOL.NAME]: 'This is symbol',
    [PARAMETER_TYPE.CANDLE_ID.NAME]: 'This is candle id',
    [PARAMETER_TYPE.PERIOD.NAME]: 'This is period',
    [PARAMETER_TYPE.SHIFT.NAME]: 'This is shift',
    [PARAMETER_TYPE.DEVIATION.NAME]: 'This is deviation',
    [PARAMETER_TYPE.MODE.NAME]: 'This is mode',
    [PARAMETER_TYPE.METHOD.NAME]: 'This is method',
    [PARAMETER_TYPE.TIMEFRAME.NAME]: 'This is timeframe',
    [PARAMETER_TYPE.APPLIED_PRICE.NAME]: 'This is Applied price',
    [PARAMETER_TYPE.CUSTOM_INDICATOR_NAME.NAME]: 'Do not enter the file extension',
    [PARAMETER_TYPE.CUSTOM_INDICATOR_PARAMETER.NAME]: 'Enter comma separated values',
    [PARAMETER_TYPE.BUFFER_MODE.NAME]: 'This is buffer mode'

    /**
     * TODO: DEFINE NEW INDICATOR
     * If new PARAMETER_TYPE has been added, 
     * define it's default help text else not required
     */
}

/**
 * Map help text to each indicator type.Override help text 
 * for specific field if required. Refer to avilable indicators.
 */
export const HELP_TEXT = {
    [ACCELERATOR]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'Symbol for Bollinger' // Overrides for Help
    },
    [ADX]: {
        ...COMMON_HELP_TEXT,
        [PARAMETER_TYPE.ADX_MODE.NAME]: 'ADX Line Mode'
    },
    [ALLIGATOR]: {
        ...COMMON_HELP_TEXT,
        [PARAMETER_TYPE.JAW_PERIOD.NAME]: 'Alligator Jaw Period',
        [PARAMETER_TYPE.JAW_SHIFT.NAME]: 'Alligator Jaw Shift',
        [PARAMETER_TYPE.TEETH_PERIOD.NAME]: 'Alligator Teeth Period',
        [PARAMETER_TYPE.TEETH_SHIFT.NAME]: 'Alligator Teeth Shift',
        [PARAMETER_TYPE.LIPS_PERIOD.NAME]: 'Alligator Lips Period',
        [PARAMETER_TYPE.LIPS_SHIFT.NAME]: 'Alligator Lips Shift',
        [PARAMETER_TYPE.ALLIGATOR_MODE.NAME]: 'Alligator Line Mode'
    },
    [AWESOME]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'Symbol for Bollinger' // Overrides for Help
    },
    [ATR]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'Symbol for Bollinger' // Overrides for Help
    },
    [BEARS_POWER]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'Symbol for Bollinger' // Overrides for Help
    },
    [BULLS_POWER]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'Symbol for Bollinger' // Overrides for Help
    },
    [BOLLINGER_BANDS]: {
        ...COMMON_HELP_TEXT,
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'This is Symbol for Bollinger'
    },
    [CCI]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'Symbol for Bollinger' // Overrides for Help
    },
    [DEMARKER]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'Symbol for Bollinger' // Overrides for Help
    },
    [ENVELOPES]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'This is Symbol Content for Envelopes'
    },
    [FORCE]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'This is Symbol Content for Moving'
    },
    [FRACTALS]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'This is Symbol Content for Moving'
    },
    [GATOR]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'This is Symbol Content for Moving'
    },
    [ICHIMOKU]: {
        ...COMMON_HELP_TEXT,
        [PARAMETER_TYPE.TENKANSEN_PERIOD.NAME]: 'Tenken-Sen Line Period',
        [PARAMETER_TYPE.KIJUNSEN_PERIOD.NAME]: 'Kijun-Sen Line Period',
        [PARAMETER_TYPE.SENKOUSPANB_PERIOD.NAME]: 'Senkou Span B Line Period',
        [PARAMETER_TYPE.ICHI_MODE.NAME]: 'Ichimoku Line Mode'
    },
    [BWMFI]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'This is Symbol Content for Moving'
    },
    [MOMENTUM]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'This is Symbol Content for Moving'
    },
    [MFI]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'This is Symbol Content for Moving'
    },
    [MOVING_AVERAGE]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'This is Symbol Content for Moving'
    },
    [OSMA]: {
        ...COMMON_HELP_TEXT,
        [PARAMETER_TYPE.FAST_EMA_PERIOD.NAME]: 'Fast EMA Period',
        [PARAMETER_TYPE.SLOW_EMA_PERIOD.NAME]: 'Slow EMA Period',
        [PARAMETER_TYPE.SIGNAL_PERIOD.NAME]: 'Signal Period'
    },
    [RSI]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'Symbol for Bollinger' // Overrides for Help
    },
    [HIGH]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'Symbol for Bollinger' // Overrides for Help
    },
    [LOW]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'Symbol for Bollinger' // Overrides for Help
    },
    [OPEN]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'Symbol for Bollinger' // Overrides for Help
    },
    [CLOSE]: {
        ...COMMON_HELP_TEXT
        //[PARAMETER_TYPE.SYMBOL.NAME]: 'Symbol for Bollinger' // Overrides for Help
    },
    [CUSTOM_INDICATOR]: { ...COMMON_HELP_TEXT, },

    /**
     * TODO: DEFINE NEW INDICATOR
     * Give Help text for each field of indicator type
     * Refer to above indicators and define new indicator
     * (**Important:** Import Display name for new indicator)
     */
}

export const HELP_TEXT_CONFIGURE_DRAWER = {
    [CONFIGURE_PARAMETER.TAKE_PROFIT.NAME]: 'This is Take profit',
    [CONFIGURE_PARAMETER.STOP_LOSS.NAME]: 'This is Stop loss',
    [CONFIGURE_PARAMETER.LOTS.NAME]: 'This is Lots'
}

export const HELP_TEXT_MARTINGALE_DRAWER = {
    [MARTINGALE_PARAMETER.USE_INTELLIGENT_MARTINGALE.NAME]: 'This is Intelligent Martingale',
    [MARTINGALE_PARAMETER.MARTINGALE_MULTIPLIER.NAME]: 'This is Martingale Multiplier',
    [MARTINGALE_PARAMETER.MAX_MARTINGALE_LOT_SIZE.NAME]: 'This is Martingale Lot Size'
}

// Default AUto Money options
export const HELP_TEXT_AUTO_MONEY_DRAWER = {
    [AUTO_MONEY_PARAMETER.USE_AUTO_MONEY_MANAGEMENT.NAME]: 'This is Auto Money Management',
    [AUTO_MONEY_PARAMETER.TRADE_RISK_PERCENTAGE.NAME]: 'This is Trade Risk Percentage',
}

export const HELP_TEXT_TIME_DRAWER = {
    [TIME_PARAMETER_TYPE.TIME.NAME]: 'Enter a Time in HH:MM format'
}
export const HELP_TEXT_ALERT_DRAWER = {
    //[ALERT_PARAMETER.DO_ALERT.NAME]: 'Do Alert - True or False',
    [ALERT_PARAMETER.ALERT_MESSAGE.NAME]: 'Alert Message'
}

export const HELP_TEXT_CUSTOM_CODE_DRAWER = {
    [CUSTOM_CODE_PARAMETER_TYPE.CUSTOM_CODE.NAME]: 'Enter the Custom Code'
}

export const POPOVER_USER_ADJUSTABLE = "User adjustable parameter?";