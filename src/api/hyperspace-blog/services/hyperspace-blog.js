'use strict';

/**
 * hyperspace-blog service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hyperspace-blog.hyperspace-blog');
