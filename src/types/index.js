/**
 * types/index.js — JSDoc type definitions.
 * Kept in sync with Django serializer fields.
 * No runtime code — pure IDE documentation.
 */

/**
 * Standard API envelope returned by every backend endpoint.
 * @typedef {Object} APIResponse
 * @property {{ success: boolean, code: number, message: string }} status
 * @property {*} data
 */

/**
 * Authenticated user stored in Redux after login.
 * Matches VerifyOTPSerializer response shape.
 * @typedef {Object} AuthUser
 * @property {string} id        - UUID
 * @property {string} email
 * @property {string} role      - 'CUSTOMER' | 'AUTHOR' | 'ADMIN'
 * @property {string} full_name
 */

/**
 * @typedef {Object} Book
 * @property {string}   id
 * @property {string}   title
 * @property {string}   isbn
 * @property {number}   price
 * @property {string}   cover_image
 * @property {string[]} authors
 * @property {string[]} categories
 * @property {string}   language
 * @property {boolean}  is_active
 */

/**
 * @typedef {Object} CartItem
 * @property {string} id
 * @property {Book}   book
 * @property {number} quantity
 */

/**
 * @typedef {Object} Order
 * @property {string}     id
 * @property {CartItem[]} items
 * @property {number}     total_amount
 * @property {string}     status  - 'pending'|'confirmed'|'processing'|'shipped'|'delivered'|'cancelled'
 * @property {string}     created_at
 */
