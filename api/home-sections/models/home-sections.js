"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

module.exports = {
  lifecycles: {
    async beforeCreate(data) {
      data.name = {ar:data.name_ar,en:data.name_en};
    },
    async beforeUpdate(params, data) {
      data.name = {ar:data.name_ar,en:data.name_en};
    },
  },
};
