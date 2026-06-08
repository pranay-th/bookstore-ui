/**
 * types/index.js — shared shape documentation via JSDoc.
 * No runtime code — pure documentation for IDE autocompletion.
 *
 * TODO: Keep these in sync with the Django serializer fields.
 */

/**
 * @typedef {Object} Book
 * @property {string}   id           - UUID
 * @property {string}   title
 * @property {string}   isbn
 * @property {number}   price
 * @property {string}   coverImage
 * @property {string[]} authors
 * @property {string[]} categories
 */

/**
 * @typedef {Object} CartItem
 * @property {string} id       - UUID
 * @property {Book}   book
 * @property {number} quantity
 * @property {number} subtotal
 */

/**
 * @typedef {Object} Order
 * @property {string}     id         - UUID
 * @property {CartItem[]} items
 * @property {number}     total
 * @property {string}     status     - 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled'
 * @property {string}     createdAt
 */

/**
 * @typedef {Object} UserProfile
 * @property {string} id        - UUID
 * @property {string} firstName
 * @property {string} lastName
 * @property {string} email
 * @property {string} phone
 */
