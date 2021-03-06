import {environment} from '../../environments/environment';

export const globalConstant = {
  FORMS: {
    MIN_LENGTH: '8',
    MAX_LENGTH: '50',
    TYPE_TEXT: 'text',
    TYPE_PASSWORD: 'password',
    NAME_USERNAME: 'username',
    NAME_PASSWORD: 'password',
    NAME_SESSION: 'session',
    AUTO_COMPLETE_USERNAME: 'username',
    AUTO_COMPLETE_PASSWORD: 'current-password',
  },
  FORMS_STYLES: {
    ACTIVE: 'active',
  },
  GENERAL_STYLES: {
    COLLAPSE: 'collapse',
    ANIMATED: 'animated',
    OVERFLOW: 'overflow',
    AUTO: 'auto',
    HIDDEN: 'hidden',
    WIDTH: 'width',
  },
  REGEXP: {
    ONLY_ALPHANUMERIC: /^([0-9a-zA-ZñÑ]+)$/i,
    EXCLUDE_SPECIAL_CHARACTER: /^([0-9a-zA-ZñÑ%!€#$&@¿?¡+\-çÇ^]+)$/i,
    CIF: /^([a-z]|[A-Z]|[0-9])[0-9]{7}([a-z]|[A-Z]|[0-9])/i,
    NIE: /^[XYZxyz][0-9]{7}[A-Za-z]$/i,
    DNI: /^[0-9]{8,8}[A-Za-z]$/i,
  },
  GENERAL: {
    EMPTY_STRING: '',
    FALSE: false,
    LANG_DEFAULT: 'es',
    VERSION: environment.version,
    BLANK: '_blank',
  },
  EVENTS: {
    CLICK: 'click',
  },
  TYPES_DOCUMENTS: {
    DNI: 'D',
    PASSPORT: 'P',
    NIE: 'N',
    CIF: 'C',
  },
  DIGIT_CONTROL_DOCUMENT: {
    CIF: ['J', 'A', 'B', 'C', 'D', 'F', 'G', 'H', 'I'],
    CIF_KEY_SOCIETY: ['P', 'Q', 'R', 'S', 'W', 'N', 'X'],
    CIF_KEY_OTHER: ['A', 'B', 'E', 'H'],
    NIE: [
      'T',
      'R',
      'W',
      'A',
      'G',
      'M',
      'Y',
      'F',
      'P',
      'D',
      'X',
      'B',
      'N',
      'J',
      'Z',
      'S',
      'Q',
      'V',
      'H',
      'L',
      'C',
      'K',
      'E',
    ],
  },
  COLOR_TYPES: {
    DISABLED: 'disabled',
    LOADING: 'isLoading',
    SUCCESS: 'success',
    INFO: 'info',
    WARNING: 'warning',
    DANGER: 'danger',
    ERROR: 'error',
    DEFAULT: 'default',
    NO_SHADOW: 'no-shadow',
    FLOAT: 'float',
  },
  MEASURE_CSS: {
    PX: 'px',
    EM: 'em',
    VH: 'vh',
  },
  ANIMATIONS: {
    ENTER: ':enter',
  },
  PREFIX_DEVICE_DETECT: {
    IOS: '(iP',
    ANDROID: 'Android',
  },
  FORM_VALIDATION: {
    VALID: 'VALID',
    INVALID: 'INVALID',
  },
  HOSTNAME: 'noark-suite.es',
  URL_LOGO: './assets/images/noark-suite-rc.svg',
};
