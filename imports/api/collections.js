import { Mongo } from 'meteor/mongo';

export const LinksCollection = new Mongo.Collection('links');
export const Products = new Mongo.Collection('products');
export const Parts = new Mongo.Collection('parts');