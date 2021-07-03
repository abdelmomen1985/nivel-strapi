'use strict';
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const slugify = require('slugify');
module.exports = {
  lifecycles: {
    async afterFindOne(result, params, populate) {
      result.name_ar = result.name.ar;
      result.name_en = result.name.en;
    },
    async beforeCreate(data) {
      if (data.name?.en) {
        data.slug = slugify(data.name.en, {lower: true});
      }
      data.name = {ar:data.name_ar,en:data.name_en};
    },
    async beforeUpdate(params, data) {
      if (data.name?.en) {
        data.slug = slugify(data.name.en, {lower: true});
      }
      data.name = {ar:data.name_ar,en:data.name_en};
    },
  },
};