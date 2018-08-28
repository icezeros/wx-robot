/*
 * @Author: icezeros 
 * @Date: 2018-08-28 11:16:52 
 * @Last Modified by: icezeros
 * @Last Modified time: 2018-08-28 11:23:18
 */
'use strict';

module.exports = app => {
  const mongoose = app.mongoose;

  const RatingSchema = new mongoose.Schema(
    {
      name: String,
      rating: String,
      symbol: String,
      type: String,
      contract: String,
      website: String,
      body: Object,
    },
    {
      typeKey: '$type',
      timestamps: {
        createdAt: 'created',
        updatedAt: 'updated',
      },
    }
  );

  return mongoose.model('test', RatingSchema);
};
