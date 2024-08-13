'use strict';

/**
 * business-morning service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::business-morning.business-morning');
