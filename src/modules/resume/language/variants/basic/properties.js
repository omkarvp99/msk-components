import propertyTypes from 'msk-property-types';
import themes from 'msk-themes';

const properties = {
  theme: {
    name: 'Theme',
    type: propertyTypes.THEME,
    value: themes.dark.midnightBlue,
    required: true
  },
  headlineText: {
    name: 'Headline text',
    type: propertyTypes.STRING,
    value: 'Language Set',
    required: true
  },
  langs: {
    name: 'Langs',
    type: propertyTypes.ARRAY,
    value: [
      {
        name: 'Lang',
        type: propertyTypes.STRING,
        value: 'Lang 1',
        required: true
      },
      {
        name: 'Lang',
        type: propertyTypes.STRING,
        value: 'Lang 2',
        required: true
      },
      {
        name: 'Lang',
        type: propertyTypes.STRING,
        value: 'Lang 3',
        required: true
      }
    ],
    required: true
  }
};

export default properties;
