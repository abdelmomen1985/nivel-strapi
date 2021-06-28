'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async find(ctx) {
        const entity = await strapi.services.layout.find();
        Object.keys(entity).map(singleKey=>{
            if(entity[singleKey].url )
                console.log(entity[singleKey].url);
        })
        return entity;
      },
};
