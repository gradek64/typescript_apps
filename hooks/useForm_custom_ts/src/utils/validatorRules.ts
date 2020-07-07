/*
    this library validate.js will validate your filds based on 

    [input.name]{
      [rule]:{conditionObject}
    }

    validate.js comes with ts index.d.tx definition file therefore it just need this in tsconfig.com
    "moduleResolution": "node" 
*/

const validatorRules = {
  name: {
    length: {
      presence: false,
      minimum: 6,
      // message: 'must be at least 6 characters',
    },
  },
  surname: {
    length: {
      minimum: 6,
      message: 'must be at least 6 characters',
    },
  },
  about: {
    length: {
      minimum: 10,
      maximum: 20,
      message: 'must be between 10 and 20 charackters',
    },
  },
};
export { validatorRules };
