'use strict';

/**
 * member controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController("api::member.member", ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
  
      const entity = await strapi.db.query("api::member.member").findOne({
        where: { slug: id },
        populate: ["deep"],
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
  
      return this.transformResponse(sanitizedEntity);
    },
  }));
