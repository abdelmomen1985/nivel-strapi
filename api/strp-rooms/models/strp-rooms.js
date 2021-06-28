'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify');
module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      if (data.name?.en) {
        data.slug = slugify(data.name.en, {lower: true});
      }
    },
    async beforeUpdate(params, data) {
      if (data.name?.en) {
        data.slug = slugify(data.name.en, {lower: true});
      }
    },
  },
};
