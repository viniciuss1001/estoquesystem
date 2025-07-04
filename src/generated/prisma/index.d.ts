
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model WareHouse
 * 
 */
export type WareHouse = $Result.DefaultSelection<Prisma.$WareHousePayload>
/**
 * Model WarehouseProduct
 * 
 */
export type WarehouseProduct = $Result.DefaultSelection<Prisma.$WarehouseProductPayload>
/**
 * Model StockMovement
 * 
 */
export type StockMovement = $Result.DefaultSelection<Prisma.$StockMovementPayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model SupplierInvoice
 * 
 */
export type SupplierInvoice = $Result.DefaultSelection<Prisma.$SupplierInvoicePayload>
/**
 * Model AuditLog
 * 
 */
export type AuditLog = $Result.DefaultSelection<Prisma.$AuditLogPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Delivery
 * 
 */
export type Delivery = $Result.DefaultSelection<Prisma.$DeliveryPayload>
/**
 * Model PasswordResetToken
 * 
 */
export type PasswordResetToken = $Result.DefaultSelection<Prisma.$PasswordResetTokenPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Office: {
  ADMIN: 'ADMIN',
  GESTOR: 'GESTOR'
};

export type Office = (typeof Office)[keyof typeof Office]


export const MovementType: {
  IN: 'IN',
  OUT: 'OUT',
  TRANSFER: 'TRANSFER'
};

export type MovementType = (typeof MovementType)[keyof typeof MovementType]


export const MovementStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED'
};

export type MovementStatus = (typeof MovementStatus)[keyof typeof MovementStatus]


export const DeliveryStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  CANCELED: 'CANCELED',
  LATE: 'LATE'
};

export type DeliveryStatus = (typeof DeliveryStatus)[keyof typeof DeliveryStatus]


export const UsageStatus: {
  IN_STOCK: 'IN_STOCK',
  IN_USE: 'IN_USE',
  CONSUMED: 'CONSUMED'
};

export type UsageStatus = (typeof UsageStatus)[keyof typeof UsageStatus]


export const InvoiceStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  OVERDUE: 'OVERDUE',
  CANCELED: 'CANCELED'
};

export type InvoiceStatus = (typeof InvoiceStatus)[keyof typeof InvoiceStatus]


export const UnitType: {
  UNIT: 'UNIT',
  KILOGRAM: 'KILOGRAM',
  LITER: 'LITER',
  SQUARE_METER: 'SQUARE_METER'
};

export type UnitType = (typeof UnitType)[keyof typeof UnitType]

}

export type Office = $Enums.Office

export const Office: typeof $Enums.Office

export type MovementType = $Enums.MovementType

export const MovementType: typeof $Enums.MovementType

export type MovementStatus = $Enums.MovementStatus

export const MovementStatus: typeof $Enums.MovementStatus

export type DeliveryStatus = $Enums.DeliveryStatus

export const DeliveryStatus: typeof $Enums.DeliveryStatus

export type UsageStatus = $Enums.UsageStatus

export const UsageStatus: typeof $Enums.UsageStatus

export type InvoiceStatus = $Enums.InvoiceStatus

export const InvoiceStatus: typeof $Enums.InvoiceStatus

export type UnitType = $Enums.UnitType

export const UnitType: typeof $Enums.UnitType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Products
 * const products = await prisma.product.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Products
   * const products = await prisma.product.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.wareHouse`: Exposes CRUD operations for the **WareHouse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WareHouses
    * const wareHouses = await prisma.wareHouse.findMany()
    * ```
    */
  get wareHouse(): Prisma.WareHouseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.warehouseProduct`: Exposes CRUD operations for the **WarehouseProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WarehouseProducts
    * const warehouseProducts = await prisma.warehouseProduct.findMany()
    * ```
    */
  get warehouseProduct(): Prisma.WarehouseProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockMovement`: Exposes CRUD operations for the **StockMovement** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockMovements
    * const stockMovements = await prisma.stockMovement.findMany()
    * ```
    */
  get stockMovement(): Prisma.StockMovementDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplierInvoice`: Exposes CRUD operations for the **SupplierInvoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SupplierInvoices
    * const supplierInvoices = await prisma.supplierInvoice.findMany()
    * ```
    */
  get supplierInvoice(): Prisma.SupplierInvoiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.auditLog`: Exposes CRUD operations for the **AuditLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AuditLogs
    * const auditLogs = await prisma.auditLog.findMany()
    * ```
    */
  get auditLog(): Prisma.AuditLogDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.delivery`: Exposes CRUD operations for the **Delivery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Deliveries
    * const deliveries = await prisma.delivery.findMany()
    * ```
    */
  get delivery(): Prisma.DeliveryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.passwordResetToken`: Exposes CRUD operations for the **PasswordResetToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PasswordResetTokens
    * const passwordResetTokens = await prisma.passwordResetToken.findMany()
    * ```
    */
  get passwordResetToken(): Prisma.PasswordResetTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Product: 'Product',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    WareHouse: 'WareHouse',
    WarehouseProduct: 'WarehouseProduct',
    StockMovement: 'StockMovement',
    Supplier: 'Supplier',
    SupplierInvoice: 'SupplierInvoice',
    AuditLog: 'AuditLog',
    Category: 'Category',
    Delivery: 'Delivery',
    PasswordResetToken: 'PasswordResetToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "product" | "account" | "session" | "user" | "wareHouse" | "warehouseProduct" | "stockMovement" | "supplier" | "supplierInvoice" | "auditLog" | "category" | "delivery" | "passwordResetToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      WareHouse: {
        payload: Prisma.$WareHousePayload<ExtArgs>
        fields: Prisma.WareHouseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WareHouseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WareHouseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          findFirst: {
            args: Prisma.WareHouseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WareHouseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          findMany: {
            args: Prisma.WareHouseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>[]
          }
          create: {
            args: Prisma.WareHouseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          createMany: {
            args: Prisma.WareHouseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WareHouseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>[]
          }
          delete: {
            args: Prisma.WareHouseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          update: {
            args: Prisma.WareHouseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          deleteMany: {
            args: Prisma.WareHouseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WareHouseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WareHouseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>[]
          }
          upsert: {
            args: Prisma.WareHouseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WareHousePayload>
          }
          aggregate: {
            args: Prisma.WareHouseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWareHouse>
          }
          groupBy: {
            args: Prisma.WareHouseGroupByArgs<ExtArgs>
            result: $Utils.Optional<WareHouseGroupByOutputType>[]
          }
          count: {
            args: Prisma.WareHouseCountArgs<ExtArgs>
            result: $Utils.Optional<WareHouseCountAggregateOutputType> | number
          }
        }
      }
      WarehouseProduct: {
        payload: Prisma.$WarehouseProductPayload<ExtArgs>
        fields: Prisma.WarehouseProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WarehouseProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WarehouseProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseProductPayload>
          }
          findFirst: {
            args: Prisma.WarehouseProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WarehouseProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseProductPayload>
          }
          findMany: {
            args: Prisma.WarehouseProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseProductPayload>[]
          }
          create: {
            args: Prisma.WarehouseProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseProductPayload>
          }
          createMany: {
            args: Prisma.WarehouseProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WarehouseProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseProductPayload>[]
          }
          delete: {
            args: Prisma.WarehouseProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseProductPayload>
          }
          update: {
            args: Prisma.WarehouseProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseProductPayload>
          }
          deleteMany: {
            args: Prisma.WarehouseProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WarehouseProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WarehouseProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseProductPayload>[]
          }
          upsert: {
            args: Prisma.WarehouseProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WarehouseProductPayload>
          }
          aggregate: {
            args: Prisma.WarehouseProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWarehouseProduct>
          }
          groupBy: {
            args: Prisma.WarehouseProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<WarehouseProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.WarehouseProductCountArgs<ExtArgs>
            result: $Utils.Optional<WarehouseProductCountAggregateOutputType> | number
          }
        }
      }
      StockMovement: {
        payload: Prisma.$StockMovementPayload<ExtArgs>
        fields: Prisma.StockMovementFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockMovementFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockMovementFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findFirst: {
            args: Prisma.StockMovementFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockMovementFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          findMany: {
            args: Prisma.StockMovementFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          create: {
            args: Prisma.StockMovementCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          createMany: {
            args: Prisma.StockMovementCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockMovementCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          delete: {
            args: Prisma.StockMovementDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          update: {
            args: Prisma.StockMovementUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          deleteMany: {
            args: Prisma.StockMovementDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockMovementUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockMovementUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>[]
          }
          upsert: {
            args: Prisma.StockMovementUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockMovementPayload>
          }
          aggregate: {
            args: Prisma.StockMovementAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockMovement>
          }
          groupBy: {
            args: Prisma.StockMovementGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockMovementGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockMovementCountArgs<ExtArgs>
            result: $Utils.Optional<StockMovementCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      SupplierInvoice: {
        payload: Prisma.$SupplierInvoicePayload<ExtArgs>
        fields: Prisma.SupplierInvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierInvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierInvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierInvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierInvoicePayload>
          }
          findFirst: {
            args: Prisma.SupplierInvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierInvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierInvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierInvoicePayload>
          }
          findMany: {
            args: Prisma.SupplierInvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierInvoicePayload>[]
          }
          create: {
            args: Prisma.SupplierInvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierInvoicePayload>
          }
          createMany: {
            args: Prisma.SupplierInvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierInvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierInvoicePayload>[]
          }
          delete: {
            args: Prisma.SupplierInvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierInvoicePayload>
          }
          update: {
            args: Prisma.SupplierInvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierInvoicePayload>
          }
          deleteMany: {
            args: Prisma.SupplierInvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierInvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierInvoiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierInvoicePayload>[]
          }
          upsert: {
            args: Prisma.SupplierInvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierInvoicePayload>
          }
          aggregate: {
            args: Prisma.SupplierInvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplierInvoice>
          }
          groupBy: {
            args: Prisma.SupplierInvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierInvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierInvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierInvoiceCountAggregateOutputType> | number
          }
        }
      }
      AuditLog: {
        payload: Prisma.$AuditLogPayload<ExtArgs>
        fields: Prisma.AuditLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AuditLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findFirst: {
            args: Prisma.AuditLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          findMany: {
            args: Prisma.AuditLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          create: {
            args: Prisma.AuditLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          createMany: {
            args: Prisma.AuditLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          delete: {
            args: Prisma.AuditLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          update: {
            args: Prisma.AuditLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          deleteMany: {
            args: Prisma.AuditLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AuditLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>[]
          }
          upsert: {
            args: Prisma.AuditLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AuditLogPayload>
          }
          aggregate: {
            args: Prisma.AuditLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAuditLog>
          }
          groupBy: {
            args: Prisma.AuditLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<AuditLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.AuditLogCountArgs<ExtArgs>
            result: $Utils.Optional<AuditLogCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Delivery: {
        payload: Prisma.$DeliveryPayload<ExtArgs>
        fields: Prisma.DeliveryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findFirst: {
            args: Prisma.DeliveryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          findMany: {
            args: Prisma.DeliveryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          create: {
            args: Prisma.DeliveryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          createMany: {
            args: Prisma.DeliveryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          delete: {
            args: Prisma.DeliveryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          update: {
            args: Prisma.DeliveryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          deleteMany: {
            args: Prisma.DeliveryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>[]
          }
          upsert: {
            args: Prisma.DeliveryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryPayload>
          }
          aggregate: {
            args: Prisma.DeliveryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDelivery>
          }
          groupBy: {
            args: Prisma.DeliveryGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryCountAggregateOutputType> | number
          }
        }
      }
      PasswordResetToken: {
        payload: Prisma.$PasswordResetTokenPayload<ExtArgs>
        fields: Prisma.PasswordResetTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PasswordResetTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findFirst: {
            args: Prisma.PasswordResetTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          findMany: {
            args: Prisma.PasswordResetTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          create: {
            args: Prisma.PasswordResetTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          createMany: {
            args: Prisma.PasswordResetTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          delete: {
            args: Prisma.PasswordResetTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          update: {
            args: Prisma.PasswordResetTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          deleteMany: {
            args: Prisma.PasswordResetTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PasswordResetTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>[]
          }
          upsert: {
            args: Prisma.PasswordResetTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PasswordResetTokenPayload>
          }
          aggregate: {
            args: Prisma.PasswordResetTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePasswordResetToken>
          }
          groupBy: {
            args: Prisma.PasswordResetTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.PasswordResetTokenCountArgs<ExtArgs>
            result: $Utils.Optional<PasswordResetTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    product?: ProductOmit
    account?: AccountOmit
    session?: SessionOmit
    user?: UserOmit
    wareHouse?: WareHouseOmit
    warehouseProduct?: WarehouseProductOmit
    stockMovement?: StockMovementOmit
    supplier?: SupplierOmit
    supplierInvoice?: SupplierInvoiceOmit
    auditLog?: AuditLogOmit
    category?: CategoryOmit
    delivery?: DeliveryOmit
    passwordResetToken?: PasswordResetTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    delivery: number
    stockMovements: number
    warehouseProduct: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | ProductCountOutputTypeCountDeliveryArgs
    stockMovements?: boolean | ProductCountOutputTypeCountStockMovementsArgs
    warehouseProduct?: boolean | ProductCountOutputTypeCountWarehouseProductArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountStockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountWarehouseProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseProductWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    AuditLog: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    AuditLog?: boolean | UserCountOutputTypeCountAuditLogArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type WareHouseCountOutputType
   */

  export type WareHouseCountOutputType = {
    stockMovementsDestination: number
    stockMovementsOrigin: number
    warehouseProduct: number
    Delivery: number
  }

  export type WareHouseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockMovementsDestination?: boolean | WareHouseCountOutputTypeCountStockMovementsDestinationArgs
    stockMovementsOrigin?: boolean | WareHouseCountOutputTypeCountStockMovementsOriginArgs
    warehouseProduct?: boolean | WareHouseCountOutputTypeCountWarehouseProductArgs
    Delivery?: boolean | WareHouseCountOutputTypeCountDeliveryArgs
  }

  // Custom InputTypes
  /**
   * WareHouseCountOutputType without action
   */
  export type WareHouseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouseCountOutputType
     */
    select?: WareHouseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WareHouseCountOutputType without action
   */
  export type WareHouseCountOutputTypeCountStockMovementsDestinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }

  /**
   * WareHouseCountOutputType without action
   */
  export type WareHouseCountOutputTypeCountStockMovementsOriginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
  }

  /**
   * WareHouseCountOutputType without action
   */
  export type WareHouseCountOutputTypeCountWarehouseProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseProductWhereInput
  }

  /**
   * WareHouseCountOutputType without action
   */
  export type WareHouseCountOutputTypeCountDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    delivery: number
    products: number
    SupplierInvoice: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | SupplierCountOutputTypeCountDeliveryArgs
    products?: boolean | SupplierCountOutputTypeCountProductsArgs
    SupplierInvoice?: boolean | SupplierCountOutputTypeCountSupplierInvoiceArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountSupplierInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierInvoiceWhereInput
  }


  /**
   * Count Type SupplierInvoiceCountOutputType
   */

  export type SupplierInvoiceCountOutputType = {
    Delivery: number
  }

  export type SupplierInvoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Delivery?: boolean | SupplierInvoiceCountOutputTypeCountDeliveryArgs
  }

  // Custom InputTypes
  /**
   * SupplierInvoiceCountOutputType without action
   */
  export type SupplierInvoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoiceCountOutputType
     */
    select?: SupplierInvoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierInvoiceCountOutputType without action
   */
  export type SupplierInvoiceCountOutputTypeCountDeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    quantity: number | null
    price: number | null
    minimumStock: number | null
  }

  export type ProductSumAggregateOutputType = {
    quantity: number | null
    price: number | null
    minimumStock: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: string | null
    name: string | null
    sku: string | null
    quantity: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    supplierId: string | null
    categoryId: string | null
    minimumStock: number | null
    unit: $Enums.UnitType | null
    expirationDate: Date | null
    usageStatus: $Enums.UsageStatus | null
  }

  export type ProductMaxAggregateOutputType = {
    id: string | null
    name: string | null
    sku: string | null
    quantity: number | null
    price: number | null
    createdAt: Date | null
    updatedAt: Date | null
    supplierId: string | null
    categoryId: string | null
    minimumStock: number | null
    unit: $Enums.UnitType | null
    expirationDate: Date | null
    usageStatus: $Enums.UsageStatus | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    sku: number
    quantity: number
    price: number
    createdAt: number
    updatedAt: number
    supplierId: number
    categoryId: number
    minimumStock: number
    unit: number
    expirationDate: number
    usageStatus: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    quantity?: true
    price?: true
    minimumStock?: true
  }

  export type ProductSumAggregateInputType = {
    quantity?: true
    price?: true
    minimumStock?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    supplierId?: true
    categoryId?: true
    minimumStock?: true
    unit?: true
    expirationDate?: true
    usageStatus?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    supplierId?: true
    categoryId?: true
    minimumStock?: true
    unit?: true
    expirationDate?: true
    usageStatus?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    sku?: true
    quantity?: true
    price?: true
    createdAt?: true
    updatedAt?: true
    supplierId?: true
    categoryId?: true
    minimumStock?: true
    unit?: true
    expirationDate?: true
    usageStatus?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt: Date
    updatedAt: Date
    supplierId: string | null
    categoryId: string | null
    minimumStock: number | null
    unit: $Enums.UnitType
    expirationDate: Date | null
    usageStatus: $Enums.UsageStatus
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplierId?: boolean
    categoryId?: boolean
    minimumStock?: boolean
    unit?: boolean
    expirationDate?: boolean
    usageStatus?: boolean
    delivery?: boolean | Product$deliveryArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    supplier?: boolean | Product$supplierArgs<ExtArgs>
    stockMovements?: boolean | Product$stockMovementsArgs<ExtArgs>
    warehouseProduct?: boolean | Product$warehouseProductArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplierId?: boolean
    categoryId?: boolean
    minimumStock?: boolean
    unit?: boolean
    expirationDate?: boolean
    usageStatus?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    supplier?: boolean | Product$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    sku?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplierId?: boolean
    categoryId?: boolean
    minimumStock?: boolean
    unit?: boolean
    expirationDate?: boolean
    usageStatus?: boolean
    category?: boolean | Product$categoryArgs<ExtArgs>
    supplier?: boolean | Product$supplierArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    sku?: boolean
    quantity?: boolean
    price?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplierId?: boolean
    categoryId?: boolean
    minimumStock?: boolean
    unit?: boolean
    expirationDate?: boolean
    usageStatus?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "sku" | "quantity" | "price" | "createdAt" | "updatedAt" | "supplierId" | "categoryId" | "minimumStock" | "unit" | "expirationDate" | "usageStatus", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | Product$deliveryArgs<ExtArgs>
    category?: boolean | Product$categoryArgs<ExtArgs>
    supplier?: boolean | Product$supplierArgs<ExtArgs>
    stockMovements?: boolean | Product$stockMovementsArgs<ExtArgs>
    warehouseProduct?: boolean | Product$warehouseProductArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    supplier?: boolean | Product$supplierArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | Product$categoryArgs<ExtArgs>
    supplier?: boolean | Product$supplierArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      delivery: Prisma.$DeliveryPayload<ExtArgs>[]
      category: Prisma.$CategoryPayload<ExtArgs> | null
      supplier: Prisma.$SupplierPayload<ExtArgs> | null
      stockMovements: Prisma.$StockMovementPayload<ExtArgs>[]
      warehouseProduct: Prisma.$WarehouseProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      sku: string
      quantity: number
      price: number
      createdAt: Date
      updatedAt: Date
      supplierId: string | null
      categoryId: string | null
      minimumStock: number | null
      unit: $Enums.UnitType
      expirationDate: Date | null
      usageStatus: $Enums.UsageStatus
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    delivery<T extends Product$deliveryArgs<ExtArgs> = {}>(args?: Subset<T, Product$deliveryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    category<T extends Product$categoryArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoryArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    supplier<T extends Product$supplierArgs<ExtArgs> = {}>(args?: Subset<T, Product$supplierArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    stockMovements<T extends Product$stockMovementsArgs<ExtArgs> = {}>(args?: Subset<T, Product$stockMovementsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    warehouseProduct<T extends Product$warehouseProductArgs<ExtArgs> = {}>(args?: Subset<T, Product$warehouseProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly sku: FieldRef<"Product", 'String'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
    readonly supplierId: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'String'>
    readonly minimumStock: FieldRef<"Product", 'Int'>
    readonly unit: FieldRef<"Product", 'UnitType'>
    readonly expirationDate: FieldRef<"Product", 'DateTime'>
    readonly usageStatus: FieldRef<"Product", 'UsageStatus'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.delivery
   */
  export type Product$deliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Product.category
   */
  export type Product$categoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
  }

  /**
   * Product.supplier
   */
  export type Product$supplierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    where?: SupplierWhereInput
  }

  /**
   * Product.stockMovements
   */
  export type Product$stockMovementsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * Product.warehouseProduct
   */
  export type Product$warehouseProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductInclude<ExtArgs> | null
    where?: WarehouseProductWhereInput
    orderBy?: WarehouseProductOrderByWithRelationInput | WarehouseProductOrderByWithRelationInput[]
    cursor?: WarehouseProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseProductScalarFieldEnum | WarehouseProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    providerType: string | null
    providerId: string | null
    providerAccountId: string | null
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    providerType: number
    providerId: number
    providerAccountId: number
    refreshToken: number
    accessToken: number
    accessTokenExpires: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    providerType?: true
    providerId?: true
    providerAccountId?: true
    refreshToken?: true
    accessToken?: true
    accessTokenExpires?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken: string | null
    accessToken: string | null
    accessTokenExpires: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AccountCountAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    providerType?: boolean
    providerId?: boolean
    providerAccountId?: boolean
    refreshToken?: boolean
    accessToken?: boolean
    accessTokenExpires?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "providerType" | "providerId" | "providerAccountId" | "refreshToken" | "accessToken" | "accessTokenExpires" | "createdAt" | "updatedAt", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      providerType: string
      providerId: string
      providerAccountId: string
      refreshToken: string | null
      accessToken: string | null
      accessTokenExpires: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly providerType: FieldRef<"Account", 'String'>
    readonly providerId: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refreshToken: FieldRef<"Account", 'String'>
    readonly accessToken: FieldRef<"Account", 'String'>
    readonly accessTokenExpires: FieldRef<"Account", 'DateTime'>
    readonly createdAt: FieldRef<"Account", 'DateTime'>
    readonly updatedAt: FieldRef<"Account", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    expires: Date | null
    sessionToken: string | null
    accessToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    userId: number
    expires: number
    sessionToken: number
    accessToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    userId?: true
    expires?: true
    sessionToken?: true
    accessToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    userId: string
    expires: Date
    sessionToken: string
    accessToken: string
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    userId?: boolean
    expires?: boolean
    sessionToken?: boolean
    accessToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "expires" | "sessionToken" | "accessToken" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      expires: Date
      sessionToken: string
      accessToken: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly accessToken: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    office: $Enums.Office | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    department: string | null
    description: string | null
    phone: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    office: $Enums.Office | null
    createdAt: Date | null
    updatedAt: Date | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    department: string | null
    description: string | null
    phone: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    office: number
    createdAt: number
    updatedAt: number
    emailVerified: number
    image: number
    password: number
    department: number
    description: number
    phone: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    office?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    image?: true
    password?: true
    department?: true
    description?: true
    phone?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    office?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    image?: true
    password?: true
    department?: true
    description?: true
    phone?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    office?: true
    createdAt?: true
    updatedAt?: true
    emailVerified?: true
    image?: true
    password?: true
    department?: true
    description?: true
    phone?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    office: $Enums.Office
    createdAt: Date
    updatedAt: Date
    emailVerified: Date | null
    image: string | null
    password: string
    department: string | null
    description: string | null
    phone: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    office?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    department?: boolean
    description?: boolean
    phone?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    AuditLog?: boolean | User$AuditLogArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    PasswordResetToken?: boolean | User$PasswordResetTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    office?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    department?: boolean
    description?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    office?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    department?: boolean
    description?: boolean
    phone?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    office?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    department?: boolean
    description?: boolean
    phone?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "office" | "createdAt" | "updatedAt" | "emailVerified" | "image" | "password" | "department" | "description" | "phone", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    AuditLog?: boolean | User$AuditLogArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    PasswordResetToken?: boolean | User$PasswordResetTokenArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      AuditLog: Prisma.$AuditLogPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      PasswordResetToken: Prisma.$PasswordResetTokenPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      office: $Enums.Office
      createdAt: Date
      updatedAt: Date
      emailVerified: Date | null
      image: string | null
      password: string
      department: string | null
      description: string | null
      phone: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    AuditLog<T extends User$AuditLogArgs<ExtArgs> = {}>(args?: Subset<T, User$AuditLogArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    PasswordResetToken<T extends User$PasswordResetTokenArgs<ExtArgs> = {}>(args?: Subset<T, User$PasswordResetTokenArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly office: FieldRef<"User", 'Office'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly department: FieldRef<"User", 'String'>
    readonly description: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.AuditLog
   */
  export type User$AuditLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    cursor?: AuditLogWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.PasswordResetToken
   */
  export type User$PasswordResetTokenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    where?: PasswordResetTokenWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model WareHouse
   */

  export type AggregateWareHouse = {
    _count: WareHouseCountAggregateOutputType | null
    _min: WareHouseMinAggregateOutputType | null
    _max: WareHouseMaxAggregateOutputType | null
  }

  export type WareHouseMinAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
  }

  export type WareHouseMaxAggregateOutputType = {
    id: string | null
    name: string | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
    description: string | null
  }

  export type WareHouseCountAggregateOutputType = {
    id: number
    name: number
    location: number
    createdAt: number
    updatedAt: number
    description: number
    _all: number
  }


  export type WareHouseMinAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    description?: true
  }

  export type WareHouseMaxAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    description?: true
  }

  export type WareHouseCountAggregateInputType = {
    id?: true
    name?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    description?: true
    _all?: true
  }

  export type WareHouseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WareHouse to aggregate.
     */
    where?: WareHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WareHouses to fetch.
     */
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WareHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WareHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WareHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WareHouses
    **/
    _count?: true | WareHouseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WareHouseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WareHouseMaxAggregateInputType
  }

  export type GetWareHouseAggregateType<T extends WareHouseAggregateArgs> = {
        [P in keyof T & keyof AggregateWareHouse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWareHouse[P]>
      : GetScalarType<T[P], AggregateWareHouse[P]>
  }




  export type WareHouseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WareHouseWhereInput
    orderBy?: WareHouseOrderByWithAggregationInput | WareHouseOrderByWithAggregationInput[]
    by: WareHouseScalarFieldEnum[] | WareHouseScalarFieldEnum
    having?: WareHouseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WareHouseCountAggregateInputType | true
    _min?: WareHouseMinAggregateInputType
    _max?: WareHouseMaxAggregateInputType
  }

  export type WareHouseGroupByOutputType = {
    id: string
    name: string
    location: string | null
    createdAt: Date
    updatedAt: Date
    description: string | null
    _count: WareHouseCountAggregateOutputType | null
    _min: WareHouseMinAggregateOutputType | null
    _max: WareHouseMaxAggregateOutputType | null
  }

  type GetWareHouseGroupByPayload<T extends WareHouseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WareHouseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WareHouseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WareHouseGroupByOutputType[P]>
            : GetScalarType<T[P], WareHouseGroupByOutputType[P]>
        }
      >
    >


  export type WareHouseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
    stockMovementsDestination?: boolean | WareHouse$stockMovementsDestinationArgs<ExtArgs>
    stockMovementsOrigin?: boolean | WareHouse$stockMovementsOriginArgs<ExtArgs>
    warehouseProduct?: boolean | WareHouse$warehouseProductArgs<ExtArgs>
    Delivery?: boolean | WareHouse$DeliveryArgs<ExtArgs>
    _count?: boolean | WareHouseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["wareHouse"]>

  export type WareHouseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
  }, ExtArgs["result"]["wareHouse"]>

  export type WareHouseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
  }, ExtArgs["result"]["wareHouse"]>

  export type WareHouseSelectScalar = {
    id?: boolean
    name?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    description?: boolean
  }

  export type WareHouseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "location" | "createdAt" | "updatedAt" | "description", ExtArgs["result"]["wareHouse"]>
  export type WareHouseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockMovementsDestination?: boolean | WareHouse$stockMovementsDestinationArgs<ExtArgs>
    stockMovementsOrigin?: boolean | WareHouse$stockMovementsOriginArgs<ExtArgs>
    warehouseProduct?: boolean | WareHouse$warehouseProductArgs<ExtArgs>
    Delivery?: boolean | WareHouse$DeliveryArgs<ExtArgs>
    _count?: boolean | WareHouseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WareHouseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type WareHouseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WareHousePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WareHouse"
    objects: {
      stockMovementsDestination: Prisma.$StockMovementPayload<ExtArgs>[]
      stockMovementsOrigin: Prisma.$StockMovementPayload<ExtArgs>[]
      warehouseProduct: Prisma.$WarehouseProductPayload<ExtArgs>[]
      Delivery: Prisma.$DeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      location: string | null
      createdAt: Date
      updatedAt: Date
      description: string | null
    }, ExtArgs["result"]["wareHouse"]>
    composites: {}
  }

  type WareHouseGetPayload<S extends boolean | null | undefined | WareHouseDefaultArgs> = $Result.GetResult<Prisma.$WareHousePayload, S>

  type WareHouseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WareHouseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WareHouseCountAggregateInputType | true
    }

  export interface WareHouseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WareHouse'], meta: { name: 'WareHouse' } }
    /**
     * Find zero or one WareHouse that matches the filter.
     * @param {WareHouseFindUniqueArgs} args - Arguments to find a WareHouse
     * @example
     * // Get one WareHouse
     * const wareHouse = await prisma.wareHouse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WareHouseFindUniqueArgs>(args: SelectSubset<T, WareHouseFindUniqueArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WareHouse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WareHouseFindUniqueOrThrowArgs} args - Arguments to find a WareHouse
     * @example
     * // Get one WareHouse
     * const wareHouse = await prisma.wareHouse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WareHouseFindUniqueOrThrowArgs>(args: SelectSubset<T, WareHouseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WareHouse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseFindFirstArgs} args - Arguments to find a WareHouse
     * @example
     * // Get one WareHouse
     * const wareHouse = await prisma.wareHouse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WareHouseFindFirstArgs>(args?: SelectSubset<T, WareHouseFindFirstArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WareHouse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseFindFirstOrThrowArgs} args - Arguments to find a WareHouse
     * @example
     * // Get one WareHouse
     * const wareHouse = await prisma.wareHouse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WareHouseFindFirstOrThrowArgs>(args?: SelectSubset<T, WareHouseFindFirstOrThrowArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WareHouses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WareHouses
     * const wareHouses = await prisma.wareHouse.findMany()
     * 
     * // Get first 10 WareHouses
     * const wareHouses = await prisma.wareHouse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const wareHouseWithIdOnly = await prisma.wareHouse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WareHouseFindManyArgs>(args?: SelectSubset<T, WareHouseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WareHouse.
     * @param {WareHouseCreateArgs} args - Arguments to create a WareHouse.
     * @example
     * // Create one WareHouse
     * const WareHouse = await prisma.wareHouse.create({
     *   data: {
     *     // ... data to create a WareHouse
     *   }
     * })
     * 
     */
    create<T extends WareHouseCreateArgs>(args: SelectSubset<T, WareHouseCreateArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WareHouses.
     * @param {WareHouseCreateManyArgs} args - Arguments to create many WareHouses.
     * @example
     * // Create many WareHouses
     * const wareHouse = await prisma.wareHouse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WareHouseCreateManyArgs>(args?: SelectSubset<T, WareHouseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WareHouses and returns the data saved in the database.
     * @param {WareHouseCreateManyAndReturnArgs} args - Arguments to create many WareHouses.
     * @example
     * // Create many WareHouses
     * const wareHouse = await prisma.wareHouse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WareHouses and only return the `id`
     * const wareHouseWithIdOnly = await prisma.wareHouse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WareHouseCreateManyAndReturnArgs>(args?: SelectSubset<T, WareHouseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WareHouse.
     * @param {WareHouseDeleteArgs} args - Arguments to delete one WareHouse.
     * @example
     * // Delete one WareHouse
     * const WareHouse = await prisma.wareHouse.delete({
     *   where: {
     *     // ... filter to delete one WareHouse
     *   }
     * })
     * 
     */
    delete<T extends WareHouseDeleteArgs>(args: SelectSubset<T, WareHouseDeleteArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WareHouse.
     * @param {WareHouseUpdateArgs} args - Arguments to update one WareHouse.
     * @example
     * // Update one WareHouse
     * const wareHouse = await prisma.wareHouse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WareHouseUpdateArgs>(args: SelectSubset<T, WareHouseUpdateArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WareHouses.
     * @param {WareHouseDeleteManyArgs} args - Arguments to filter WareHouses to delete.
     * @example
     * // Delete a few WareHouses
     * const { count } = await prisma.wareHouse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WareHouseDeleteManyArgs>(args?: SelectSubset<T, WareHouseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WareHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WareHouses
     * const wareHouse = await prisma.wareHouse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WareHouseUpdateManyArgs>(args: SelectSubset<T, WareHouseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WareHouses and returns the data updated in the database.
     * @param {WareHouseUpdateManyAndReturnArgs} args - Arguments to update many WareHouses.
     * @example
     * // Update many WareHouses
     * const wareHouse = await prisma.wareHouse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WareHouses and only return the `id`
     * const wareHouseWithIdOnly = await prisma.wareHouse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WareHouseUpdateManyAndReturnArgs>(args: SelectSubset<T, WareHouseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WareHouse.
     * @param {WareHouseUpsertArgs} args - Arguments to update or create a WareHouse.
     * @example
     * // Update or create a WareHouse
     * const wareHouse = await prisma.wareHouse.upsert({
     *   create: {
     *     // ... data to create a WareHouse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WareHouse we want to update
     *   }
     * })
     */
    upsert<T extends WareHouseUpsertArgs>(args: SelectSubset<T, WareHouseUpsertArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WareHouses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseCountArgs} args - Arguments to filter WareHouses to count.
     * @example
     * // Count the number of WareHouses
     * const count = await prisma.wareHouse.count({
     *   where: {
     *     // ... the filter for the WareHouses we want to count
     *   }
     * })
    **/
    count<T extends WareHouseCountArgs>(
      args?: Subset<T, WareHouseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WareHouseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WareHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WareHouseAggregateArgs>(args: Subset<T, WareHouseAggregateArgs>): Prisma.PrismaPromise<GetWareHouseAggregateType<T>>

    /**
     * Group by WareHouse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WareHouseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WareHouseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WareHouseGroupByArgs['orderBy'] }
        : { orderBy?: WareHouseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WareHouseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWareHouseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WareHouse model
   */
  readonly fields: WareHouseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WareHouse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WareHouseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stockMovementsDestination<T extends WareHouse$stockMovementsDestinationArgs<ExtArgs> = {}>(args?: Subset<T, WareHouse$stockMovementsDestinationArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockMovementsOrigin<T extends WareHouse$stockMovementsOriginArgs<ExtArgs> = {}>(args?: Subset<T, WareHouse$stockMovementsOriginArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    warehouseProduct<T extends WareHouse$warehouseProductArgs<ExtArgs> = {}>(args?: Subset<T, WareHouse$warehouseProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Delivery<T extends WareHouse$DeliveryArgs<ExtArgs> = {}>(args?: Subset<T, WareHouse$DeliveryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WareHouse model
   */
  interface WareHouseFieldRefs {
    readonly id: FieldRef<"WareHouse", 'String'>
    readonly name: FieldRef<"WareHouse", 'String'>
    readonly location: FieldRef<"WareHouse", 'String'>
    readonly createdAt: FieldRef<"WareHouse", 'DateTime'>
    readonly updatedAt: FieldRef<"WareHouse", 'DateTime'>
    readonly description: FieldRef<"WareHouse", 'String'>
  }
    

  // Custom InputTypes
  /**
   * WareHouse findUnique
   */
  export type WareHouseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouse to fetch.
     */
    where: WareHouseWhereUniqueInput
  }

  /**
   * WareHouse findUniqueOrThrow
   */
  export type WareHouseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouse to fetch.
     */
    where: WareHouseWhereUniqueInput
  }

  /**
   * WareHouse findFirst
   */
  export type WareHouseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouse to fetch.
     */
    where?: WareHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WareHouses to fetch.
     */
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WareHouses.
     */
    cursor?: WareHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WareHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WareHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WareHouses.
     */
    distinct?: WareHouseScalarFieldEnum | WareHouseScalarFieldEnum[]
  }

  /**
   * WareHouse findFirstOrThrow
   */
  export type WareHouseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouse to fetch.
     */
    where?: WareHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WareHouses to fetch.
     */
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WareHouses.
     */
    cursor?: WareHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WareHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WareHouses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WareHouses.
     */
    distinct?: WareHouseScalarFieldEnum | WareHouseScalarFieldEnum[]
  }

  /**
   * WareHouse findMany
   */
  export type WareHouseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter, which WareHouses to fetch.
     */
    where?: WareHouseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WareHouses to fetch.
     */
    orderBy?: WareHouseOrderByWithRelationInput | WareHouseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WareHouses.
     */
    cursor?: WareHouseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WareHouses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WareHouses.
     */
    skip?: number
    distinct?: WareHouseScalarFieldEnum | WareHouseScalarFieldEnum[]
  }

  /**
   * WareHouse create
   */
  export type WareHouseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * The data needed to create a WareHouse.
     */
    data: XOR<WareHouseCreateInput, WareHouseUncheckedCreateInput>
  }

  /**
   * WareHouse createMany
   */
  export type WareHouseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WareHouses.
     */
    data: WareHouseCreateManyInput | WareHouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WareHouse createManyAndReturn
   */
  export type WareHouseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * The data used to create many WareHouses.
     */
    data: WareHouseCreateManyInput | WareHouseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WareHouse update
   */
  export type WareHouseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * The data needed to update a WareHouse.
     */
    data: XOR<WareHouseUpdateInput, WareHouseUncheckedUpdateInput>
    /**
     * Choose, which WareHouse to update.
     */
    where: WareHouseWhereUniqueInput
  }

  /**
   * WareHouse updateMany
   */
  export type WareHouseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WareHouses.
     */
    data: XOR<WareHouseUpdateManyMutationInput, WareHouseUncheckedUpdateManyInput>
    /**
     * Filter which WareHouses to update
     */
    where?: WareHouseWhereInput
    /**
     * Limit how many WareHouses to update.
     */
    limit?: number
  }

  /**
   * WareHouse updateManyAndReturn
   */
  export type WareHouseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * The data used to update WareHouses.
     */
    data: XOR<WareHouseUpdateManyMutationInput, WareHouseUncheckedUpdateManyInput>
    /**
     * Filter which WareHouses to update
     */
    where?: WareHouseWhereInput
    /**
     * Limit how many WareHouses to update.
     */
    limit?: number
  }

  /**
   * WareHouse upsert
   */
  export type WareHouseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * The filter to search for the WareHouse to update in case it exists.
     */
    where: WareHouseWhereUniqueInput
    /**
     * In case the WareHouse found by the `where` argument doesn't exist, create a new WareHouse with this data.
     */
    create: XOR<WareHouseCreateInput, WareHouseUncheckedCreateInput>
    /**
     * In case the WareHouse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WareHouseUpdateInput, WareHouseUncheckedUpdateInput>
  }

  /**
   * WareHouse delete
   */
  export type WareHouseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    /**
     * Filter which WareHouse to delete.
     */
    where: WareHouseWhereUniqueInput
  }

  /**
   * WareHouse deleteMany
   */
  export type WareHouseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WareHouses to delete
     */
    where?: WareHouseWhereInput
    /**
     * Limit how many WareHouses to delete.
     */
    limit?: number
  }

  /**
   * WareHouse.stockMovementsDestination
   */
  export type WareHouse$stockMovementsDestinationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * WareHouse.stockMovementsOrigin
   */
  export type WareHouse$stockMovementsOriginArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    cursor?: StockMovementWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * WareHouse.warehouseProduct
   */
  export type WareHouse$warehouseProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductInclude<ExtArgs> | null
    where?: WarehouseProductWhereInput
    orderBy?: WarehouseProductOrderByWithRelationInput | WarehouseProductOrderByWithRelationInput[]
    cursor?: WarehouseProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WarehouseProductScalarFieldEnum | WarehouseProductScalarFieldEnum[]
  }

  /**
   * WareHouse.Delivery
   */
  export type WareHouse$DeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * WareHouse without action
   */
  export type WareHouseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
  }


  /**
   * Model WarehouseProduct
   */

  export type AggregateWarehouseProduct = {
    _count: WarehouseProductCountAggregateOutputType | null
    _avg: WarehouseProductAvgAggregateOutputType | null
    _sum: WarehouseProductSumAggregateOutputType | null
    _min: WarehouseProductMinAggregateOutputType | null
    _max: WarehouseProductMaxAggregateOutputType | null
  }

  export type WarehouseProductAvgAggregateOutputType = {
    quantity: number | null
  }

  export type WarehouseProductSumAggregateOutputType = {
    quantity: number | null
  }

  export type WarehouseProductMinAggregateOutputType = {
    warehouseId: string | null
    productId: string | null
    quantity: number | null
  }

  export type WarehouseProductMaxAggregateOutputType = {
    warehouseId: string | null
    productId: string | null
    quantity: number | null
  }

  export type WarehouseProductCountAggregateOutputType = {
    warehouseId: number
    productId: number
    quantity: number
    _all: number
  }


  export type WarehouseProductAvgAggregateInputType = {
    quantity?: true
  }

  export type WarehouseProductSumAggregateInputType = {
    quantity?: true
  }

  export type WarehouseProductMinAggregateInputType = {
    warehouseId?: true
    productId?: true
    quantity?: true
  }

  export type WarehouseProductMaxAggregateInputType = {
    warehouseId?: true
    productId?: true
    quantity?: true
  }

  export type WarehouseProductCountAggregateInputType = {
    warehouseId?: true
    productId?: true
    quantity?: true
    _all?: true
  }

  export type WarehouseProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarehouseProduct to aggregate.
     */
    where?: WarehouseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseProducts to fetch.
     */
    orderBy?: WarehouseProductOrderByWithRelationInput | WarehouseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WarehouseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WarehouseProducts
    **/
    _count?: true | WarehouseProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WarehouseProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WarehouseProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WarehouseProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WarehouseProductMaxAggregateInputType
  }

  export type GetWarehouseProductAggregateType<T extends WarehouseProductAggregateArgs> = {
        [P in keyof T & keyof AggregateWarehouseProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWarehouseProduct[P]>
      : GetScalarType<T[P], AggregateWarehouseProduct[P]>
  }




  export type WarehouseProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WarehouseProductWhereInput
    orderBy?: WarehouseProductOrderByWithAggregationInput | WarehouseProductOrderByWithAggregationInput[]
    by: WarehouseProductScalarFieldEnum[] | WarehouseProductScalarFieldEnum
    having?: WarehouseProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WarehouseProductCountAggregateInputType | true
    _avg?: WarehouseProductAvgAggregateInputType
    _sum?: WarehouseProductSumAggregateInputType
    _min?: WarehouseProductMinAggregateInputType
    _max?: WarehouseProductMaxAggregateInputType
  }

  export type WarehouseProductGroupByOutputType = {
    warehouseId: string
    productId: string
    quantity: number
    _count: WarehouseProductCountAggregateOutputType | null
    _avg: WarehouseProductAvgAggregateOutputType | null
    _sum: WarehouseProductSumAggregateOutputType | null
    _min: WarehouseProductMinAggregateOutputType | null
    _max: WarehouseProductMaxAggregateOutputType | null
  }

  type GetWarehouseProductGroupByPayload<T extends WarehouseProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WarehouseProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WarehouseProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WarehouseProductGroupByOutputType[P]>
            : GetScalarType<T[P], WarehouseProductGroupByOutputType[P]>
        }
      >
    >


  export type WarehouseProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouseId?: boolean
    productId?: boolean
    quantity?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouseProduct"]>

  export type WarehouseProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouseId?: boolean
    productId?: boolean
    quantity?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouseProduct"]>

  export type WarehouseProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    warehouseId?: boolean
    productId?: boolean
    quantity?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["warehouseProduct"]>

  export type WarehouseProductSelectScalar = {
    warehouseId?: boolean
    productId?: boolean
    quantity?: boolean
  }

  export type WarehouseProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"warehouseId" | "productId" | "quantity", ExtArgs["result"]["warehouseProduct"]>
  export type WarehouseProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
  }
  export type WarehouseProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
  }
  export type WarehouseProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
  }

  export type $WarehouseProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WarehouseProduct"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      warehouse: Prisma.$WareHousePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      warehouseId: string
      productId: string
      quantity: number
    }, ExtArgs["result"]["warehouseProduct"]>
    composites: {}
  }

  type WarehouseProductGetPayload<S extends boolean | null | undefined | WarehouseProductDefaultArgs> = $Result.GetResult<Prisma.$WarehouseProductPayload, S>

  type WarehouseProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WarehouseProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WarehouseProductCountAggregateInputType | true
    }

  export interface WarehouseProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WarehouseProduct'], meta: { name: 'WarehouseProduct' } }
    /**
     * Find zero or one WarehouseProduct that matches the filter.
     * @param {WarehouseProductFindUniqueArgs} args - Arguments to find a WarehouseProduct
     * @example
     * // Get one WarehouseProduct
     * const warehouseProduct = await prisma.warehouseProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WarehouseProductFindUniqueArgs>(args: SelectSubset<T, WarehouseProductFindUniqueArgs<ExtArgs>>): Prisma__WarehouseProductClient<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WarehouseProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WarehouseProductFindUniqueOrThrowArgs} args - Arguments to find a WarehouseProduct
     * @example
     * // Get one WarehouseProduct
     * const warehouseProduct = await prisma.warehouseProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WarehouseProductFindUniqueOrThrowArgs>(args: SelectSubset<T, WarehouseProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WarehouseProductClient<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WarehouseProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseProductFindFirstArgs} args - Arguments to find a WarehouseProduct
     * @example
     * // Get one WarehouseProduct
     * const warehouseProduct = await prisma.warehouseProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WarehouseProductFindFirstArgs>(args?: SelectSubset<T, WarehouseProductFindFirstArgs<ExtArgs>>): Prisma__WarehouseProductClient<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WarehouseProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseProductFindFirstOrThrowArgs} args - Arguments to find a WarehouseProduct
     * @example
     * // Get one WarehouseProduct
     * const warehouseProduct = await prisma.warehouseProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WarehouseProductFindFirstOrThrowArgs>(args?: SelectSubset<T, WarehouseProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__WarehouseProductClient<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WarehouseProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WarehouseProducts
     * const warehouseProducts = await prisma.warehouseProduct.findMany()
     * 
     * // Get first 10 WarehouseProducts
     * const warehouseProducts = await prisma.warehouseProduct.findMany({ take: 10 })
     * 
     * // Only select the `warehouseId`
     * const warehouseProductWithWarehouseIdOnly = await prisma.warehouseProduct.findMany({ select: { warehouseId: true } })
     * 
     */
    findMany<T extends WarehouseProductFindManyArgs>(args?: SelectSubset<T, WarehouseProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WarehouseProduct.
     * @param {WarehouseProductCreateArgs} args - Arguments to create a WarehouseProduct.
     * @example
     * // Create one WarehouseProduct
     * const WarehouseProduct = await prisma.warehouseProduct.create({
     *   data: {
     *     // ... data to create a WarehouseProduct
     *   }
     * })
     * 
     */
    create<T extends WarehouseProductCreateArgs>(args: SelectSubset<T, WarehouseProductCreateArgs<ExtArgs>>): Prisma__WarehouseProductClient<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WarehouseProducts.
     * @param {WarehouseProductCreateManyArgs} args - Arguments to create many WarehouseProducts.
     * @example
     * // Create many WarehouseProducts
     * const warehouseProduct = await prisma.warehouseProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WarehouseProductCreateManyArgs>(args?: SelectSubset<T, WarehouseProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WarehouseProducts and returns the data saved in the database.
     * @param {WarehouseProductCreateManyAndReturnArgs} args - Arguments to create many WarehouseProducts.
     * @example
     * // Create many WarehouseProducts
     * const warehouseProduct = await prisma.warehouseProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WarehouseProducts and only return the `warehouseId`
     * const warehouseProductWithWarehouseIdOnly = await prisma.warehouseProduct.createManyAndReturn({
     *   select: { warehouseId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WarehouseProductCreateManyAndReturnArgs>(args?: SelectSubset<T, WarehouseProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WarehouseProduct.
     * @param {WarehouseProductDeleteArgs} args - Arguments to delete one WarehouseProduct.
     * @example
     * // Delete one WarehouseProduct
     * const WarehouseProduct = await prisma.warehouseProduct.delete({
     *   where: {
     *     // ... filter to delete one WarehouseProduct
     *   }
     * })
     * 
     */
    delete<T extends WarehouseProductDeleteArgs>(args: SelectSubset<T, WarehouseProductDeleteArgs<ExtArgs>>): Prisma__WarehouseProductClient<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WarehouseProduct.
     * @param {WarehouseProductUpdateArgs} args - Arguments to update one WarehouseProduct.
     * @example
     * // Update one WarehouseProduct
     * const warehouseProduct = await prisma.warehouseProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WarehouseProductUpdateArgs>(args: SelectSubset<T, WarehouseProductUpdateArgs<ExtArgs>>): Prisma__WarehouseProductClient<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WarehouseProducts.
     * @param {WarehouseProductDeleteManyArgs} args - Arguments to filter WarehouseProducts to delete.
     * @example
     * // Delete a few WarehouseProducts
     * const { count } = await prisma.warehouseProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WarehouseProductDeleteManyArgs>(args?: SelectSubset<T, WarehouseProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarehouseProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WarehouseProducts
     * const warehouseProduct = await prisma.warehouseProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WarehouseProductUpdateManyArgs>(args: SelectSubset<T, WarehouseProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WarehouseProducts and returns the data updated in the database.
     * @param {WarehouseProductUpdateManyAndReturnArgs} args - Arguments to update many WarehouseProducts.
     * @example
     * // Update many WarehouseProducts
     * const warehouseProduct = await prisma.warehouseProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WarehouseProducts and only return the `warehouseId`
     * const warehouseProductWithWarehouseIdOnly = await prisma.warehouseProduct.updateManyAndReturn({
     *   select: { warehouseId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WarehouseProductUpdateManyAndReturnArgs>(args: SelectSubset<T, WarehouseProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WarehouseProduct.
     * @param {WarehouseProductUpsertArgs} args - Arguments to update or create a WarehouseProduct.
     * @example
     * // Update or create a WarehouseProduct
     * const warehouseProduct = await prisma.warehouseProduct.upsert({
     *   create: {
     *     // ... data to create a WarehouseProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WarehouseProduct we want to update
     *   }
     * })
     */
    upsert<T extends WarehouseProductUpsertArgs>(args: SelectSubset<T, WarehouseProductUpsertArgs<ExtArgs>>): Prisma__WarehouseProductClient<$Result.GetResult<Prisma.$WarehouseProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WarehouseProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseProductCountArgs} args - Arguments to filter WarehouseProducts to count.
     * @example
     * // Count the number of WarehouseProducts
     * const count = await prisma.warehouseProduct.count({
     *   where: {
     *     // ... the filter for the WarehouseProducts we want to count
     *   }
     * })
    **/
    count<T extends WarehouseProductCountArgs>(
      args?: Subset<T, WarehouseProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WarehouseProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WarehouseProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WarehouseProductAggregateArgs>(args: Subset<T, WarehouseProductAggregateArgs>): Prisma.PrismaPromise<GetWarehouseProductAggregateType<T>>

    /**
     * Group by WarehouseProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WarehouseProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WarehouseProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WarehouseProductGroupByArgs['orderBy'] }
        : { orderBy?: WarehouseProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WarehouseProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWarehouseProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WarehouseProduct model
   */
  readonly fields: WarehouseProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WarehouseProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WarehouseProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WareHouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WareHouseDefaultArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WarehouseProduct model
   */
  interface WarehouseProductFieldRefs {
    readonly warehouseId: FieldRef<"WarehouseProduct", 'String'>
    readonly productId: FieldRef<"WarehouseProduct", 'String'>
    readonly quantity: FieldRef<"WarehouseProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * WarehouseProduct findUnique
   */
  export type WarehouseProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseProduct to fetch.
     */
    where: WarehouseProductWhereUniqueInput
  }

  /**
   * WarehouseProduct findUniqueOrThrow
   */
  export type WarehouseProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseProduct to fetch.
     */
    where: WarehouseProductWhereUniqueInput
  }

  /**
   * WarehouseProduct findFirst
   */
  export type WarehouseProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseProduct to fetch.
     */
    where?: WarehouseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseProducts to fetch.
     */
    orderBy?: WarehouseProductOrderByWithRelationInput | WarehouseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarehouseProducts.
     */
    cursor?: WarehouseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarehouseProducts.
     */
    distinct?: WarehouseProductScalarFieldEnum | WarehouseProductScalarFieldEnum[]
  }

  /**
   * WarehouseProduct findFirstOrThrow
   */
  export type WarehouseProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseProduct to fetch.
     */
    where?: WarehouseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseProducts to fetch.
     */
    orderBy?: WarehouseProductOrderByWithRelationInput | WarehouseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WarehouseProducts.
     */
    cursor?: WarehouseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WarehouseProducts.
     */
    distinct?: WarehouseProductScalarFieldEnum | WarehouseProductScalarFieldEnum[]
  }

  /**
   * WarehouseProduct findMany
   */
  export type WarehouseProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductInclude<ExtArgs> | null
    /**
     * Filter, which WarehouseProducts to fetch.
     */
    where?: WarehouseProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WarehouseProducts to fetch.
     */
    orderBy?: WarehouseProductOrderByWithRelationInput | WarehouseProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WarehouseProducts.
     */
    cursor?: WarehouseProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WarehouseProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WarehouseProducts.
     */
    skip?: number
    distinct?: WarehouseProductScalarFieldEnum | WarehouseProductScalarFieldEnum[]
  }

  /**
   * WarehouseProduct create
   */
  export type WarehouseProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductInclude<ExtArgs> | null
    /**
     * The data needed to create a WarehouseProduct.
     */
    data: XOR<WarehouseProductCreateInput, WarehouseProductUncheckedCreateInput>
  }

  /**
   * WarehouseProduct createMany
   */
  export type WarehouseProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WarehouseProducts.
     */
    data: WarehouseProductCreateManyInput | WarehouseProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WarehouseProduct createManyAndReturn
   */
  export type WarehouseProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * The data used to create many WarehouseProducts.
     */
    data: WarehouseProductCreateManyInput | WarehouseProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WarehouseProduct update
   */
  export type WarehouseProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductInclude<ExtArgs> | null
    /**
     * The data needed to update a WarehouseProduct.
     */
    data: XOR<WarehouseProductUpdateInput, WarehouseProductUncheckedUpdateInput>
    /**
     * Choose, which WarehouseProduct to update.
     */
    where: WarehouseProductWhereUniqueInput
  }

  /**
   * WarehouseProduct updateMany
   */
  export type WarehouseProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WarehouseProducts.
     */
    data: XOR<WarehouseProductUpdateManyMutationInput, WarehouseProductUncheckedUpdateManyInput>
    /**
     * Filter which WarehouseProducts to update
     */
    where?: WarehouseProductWhereInput
    /**
     * Limit how many WarehouseProducts to update.
     */
    limit?: number
  }

  /**
   * WarehouseProduct updateManyAndReturn
   */
  export type WarehouseProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * The data used to update WarehouseProducts.
     */
    data: XOR<WarehouseProductUpdateManyMutationInput, WarehouseProductUncheckedUpdateManyInput>
    /**
     * Filter which WarehouseProducts to update
     */
    where?: WarehouseProductWhereInput
    /**
     * Limit how many WarehouseProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WarehouseProduct upsert
   */
  export type WarehouseProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductInclude<ExtArgs> | null
    /**
     * The filter to search for the WarehouseProduct to update in case it exists.
     */
    where: WarehouseProductWhereUniqueInput
    /**
     * In case the WarehouseProduct found by the `where` argument doesn't exist, create a new WarehouseProduct with this data.
     */
    create: XOR<WarehouseProductCreateInput, WarehouseProductUncheckedCreateInput>
    /**
     * In case the WarehouseProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WarehouseProductUpdateInput, WarehouseProductUncheckedUpdateInput>
  }

  /**
   * WarehouseProduct delete
   */
  export type WarehouseProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductInclude<ExtArgs> | null
    /**
     * Filter which WarehouseProduct to delete.
     */
    where: WarehouseProductWhereUniqueInput
  }

  /**
   * WarehouseProduct deleteMany
   */
  export type WarehouseProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WarehouseProducts to delete
     */
    where?: WarehouseProductWhereInput
    /**
     * Limit how many WarehouseProducts to delete.
     */
    limit?: number
  }

  /**
   * WarehouseProduct without action
   */
  export type WarehouseProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WarehouseProduct
     */
    select?: WarehouseProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WarehouseProduct
     */
    omit?: WarehouseProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WarehouseProductInclude<ExtArgs> | null
  }


  /**
   * Model StockMovement
   */

  export type AggregateStockMovement = {
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  export type StockMovementAvgAggregateOutputType = {
    quantity: number | null
    quantityAfter: number | null
    quantityBefore: number | null
  }

  export type StockMovementSumAggregateOutputType = {
    quantity: number | null
    quantityAfter: number | null
    quantityBefore: number | null
  }

  export type StockMovementMinAggregateOutputType = {
    id: string | null
    type: $Enums.MovementType | null
    quantity: number | null
    productId: string | null
    createdAt: Date | null
    notes: string | null
    destinationWarehouseId: string | null
    originWarehouseId: string | null
    status: $Enums.MovementStatus | null
    quantityAfter: number | null
    quantityBefore: number | null
  }

  export type StockMovementMaxAggregateOutputType = {
    id: string | null
    type: $Enums.MovementType | null
    quantity: number | null
    productId: string | null
    createdAt: Date | null
    notes: string | null
    destinationWarehouseId: string | null
    originWarehouseId: string | null
    status: $Enums.MovementStatus | null
    quantityAfter: number | null
    quantityBefore: number | null
  }

  export type StockMovementCountAggregateOutputType = {
    id: number
    type: number
    quantity: number
    productId: number
    createdAt: number
    notes: number
    destinationWarehouseId: number
    originWarehouseId: number
    status: number
    quantityAfter: number
    quantityBefore: number
    _all: number
  }


  export type StockMovementAvgAggregateInputType = {
    quantity?: true
    quantityAfter?: true
    quantityBefore?: true
  }

  export type StockMovementSumAggregateInputType = {
    quantity?: true
    quantityAfter?: true
    quantityBefore?: true
  }

  export type StockMovementMinAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    productId?: true
    createdAt?: true
    notes?: true
    destinationWarehouseId?: true
    originWarehouseId?: true
    status?: true
    quantityAfter?: true
    quantityBefore?: true
  }

  export type StockMovementMaxAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    productId?: true
    createdAt?: true
    notes?: true
    destinationWarehouseId?: true
    originWarehouseId?: true
    status?: true
    quantityAfter?: true
    quantityBefore?: true
  }

  export type StockMovementCountAggregateInputType = {
    id?: true
    type?: true
    quantity?: true
    productId?: true
    createdAt?: true
    notes?: true
    destinationWarehouseId?: true
    originWarehouseId?: true
    status?: true
    quantityAfter?: true
    quantityBefore?: true
    _all?: true
  }

  export type StockMovementAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovement to aggregate.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockMovements
    **/
    _count?: true | StockMovementCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockMovementAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockMovementSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockMovementMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockMovementMaxAggregateInputType
  }

  export type GetStockMovementAggregateType<T extends StockMovementAggregateArgs> = {
        [P in keyof T & keyof AggregateStockMovement]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockMovement[P]>
      : GetScalarType<T[P], AggregateStockMovement[P]>
  }




  export type StockMovementGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockMovementWhereInput
    orderBy?: StockMovementOrderByWithAggregationInput | StockMovementOrderByWithAggregationInput[]
    by: StockMovementScalarFieldEnum[] | StockMovementScalarFieldEnum
    having?: StockMovementScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockMovementCountAggregateInputType | true
    _avg?: StockMovementAvgAggregateInputType
    _sum?: StockMovementSumAggregateInputType
    _min?: StockMovementMinAggregateInputType
    _max?: StockMovementMaxAggregateInputType
  }

  export type StockMovementGroupByOutputType = {
    id: string
    type: $Enums.MovementType
    quantity: number
    productId: string
    createdAt: Date
    notes: string | null
    destinationWarehouseId: string | null
    originWarehouseId: string | null
    status: $Enums.MovementStatus
    quantityAfter: number | null
    quantityBefore: number | null
    _count: StockMovementCountAggregateOutputType | null
    _avg: StockMovementAvgAggregateOutputType | null
    _sum: StockMovementSumAggregateOutputType | null
    _min: StockMovementMinAggregateOutputType | null
    _max: StockMovementMaxAggregateOutputType | null
  }

  type GetStockMovementGroupByPayload<T extends StockMovementGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockMovementGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockMovementGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
            : GetScalarType<T[P], StockMovementGroupByOutputType[P]>
        }
      >
    >


  export type StockMovementSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    productId?: boolean
    createdAt?: boolean
    notes?: boolean
    destinationWarehouseId?: boolean
    originWarehouseId?: boolean
    status?: boolean
    quantityAfter?: boolean
    quantityBefore?: boolean
    destinationWarehouse?: boolean | StockMovement$destinationWarehouseArgs<ExtArgs>
    originWareHouse?: boolean | StockMovement$originWareHouseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    productId?: boolean
    createdAt?: boolean
    notes?: boolean
    destinationWarehouseId?: boolean
    originWarehouseId?: boolean
    status?: boolean
    quantityAfter?: boolean
    quantityBefore?: boolean
    destinationWarehouse?: boolean | StockMovement$destinationWarehouseArgs<ExtArgs>
    originWareHouse?: boolean | StockMovement$originWareHouseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    quantity?: boolean
    productId?: boolean
    createdAt?: boolean
    notes?: boolean
    destinationWarehouseId?: boolean
    originWarehouseId?: boolean
    status?: boolean
    quantityAfter?: boolean
    quantityBefore?: boolean
    destinationWarehouse?: boolean | StockMovement$destinationWarehouseArgs<ExtArgs>
    originWareHouse?: boolean | StockMovement$originWareHouseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockMovement"]>

  export type StockMovementSelectScalar = {
    id?: boolean
    type?: boolean
    quantity?: boolean
    productId?: boolean
    createdAt?: boolean
    notes?: boolean
    destinationWarehouseId?: boolean
    originWarehouseId?: boolean
    status?: boolean
    quantityAfter?: boolean
    quantityBefore?: boolean
  }

  export type StockMovementOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "quantity" | "productId" | "createdAt" | "notes" | "destinationWarehouseId" | "originWarehouseId" | "status" | "quantityAfter" | "quantityBefore", ExtArgs["result"]["stockMovement"]>
  export type StockMovementInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinationWarehouse?: boolean | StockMovement$destinationWarehouseArgs<ExtArgs>
    originWareHouse?: boolean | StockMovement$originWareHouseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type StockMovementIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinationWarehouse?: boolean | StockMovement$destinationWarehouseArgs<ExtArgs>
    originWareHouse?: boolean | StockMovement$originWareHouseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type StockMovementIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    destinationWarehouse?: boolean | StockMovement$destinationWarehouseArgs<ExtArgs>
    originWareHouse?: boolean | StockMovement$originWareHouseArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $StockMovementPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockMovement"
    objects: {
      destinationWarehouse: Prisma.$WareHousePayload<ExtArgs> | null
      originWareHouse: Prisma.$WareHousePayload<ExtArgs> | null
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.MovementType
      quantity: number
      productId: string
      createdAt: Date
      notes: string | null
      destinationWarehouseId: string | null
      originWarehouseId: string | null
      status: $Enums.MovementStatus
      quantityAfter: number | null
      quantityBefore: number | null
    }, ExtArgs["result"]["stockMovement"]>
    composites: {}
  }

  type StockMovementGetPayload<S extends boolean | null | undefined | StockMovementDefaultArgs> = $Result.GetResult<Prisma.$StockMovementPayload, S>

  type StockMovementCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockMovementFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockMovementCountAggregateInputType | true
    }

  export interface StockMovementDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockMovement'], meta: { name: 'StockMovement' } }
    /**
     * Find zero or one StockMovement that matches the filter.
     * @param {StockMovementFindUniqueArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockMovementFindUniqueArgs>(args: SelectSubset<T, StockMovementFindUniqueArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockMovement that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockMovementFindUniqueOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockMovementFindUniqueOrThrowArgs>(args: SelectSubset<T, StockMovementFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMovement that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockMovementFindFirstArgs>(args?: SelectSubset<T, StockMovementFindFirstArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockMovement that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindFirstOrThrowArgs} args - Arguments to find a StockMovement
     * @example
     * // Get one StockMovement
     * const stockMovement = await prisma.stockMovement.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockMovementFindFirstOrThrowArgs>(args?: SelectSubset<T, StockMovementFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockMovements that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockMovements
     * const stockMovements = await prisma.stockMovement.findMany()
     * 
     * // Get first 10 StockMovements
     * const stockMovements = await prisma.stockMovement.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockMovementFindManyArgs>(args?: SelectSubset<T, StockMovementFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockMovement.
     * @param {StockMovementCreateArgs} args - Arguments to create a StockMovement.
     * @example
     * // Create one StockMovement
     * const StockMovement = await prisma.stockMovement.create({
     *   data: {
     *     // ... data to create a StockMovement
     *   }
     * })
     * 
     */
    create<T extends StockMovementCreateArgs>(args: SelectSubset<T, StockMovementCreateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockMovements.
     * @param {StockMovementCreateManyArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockMovementCreateManyArgs>(args?: SelectSubset<T, StockMovementCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockMovements and returns the data saved in the database.
     * @param {StockMovementCreateManyAndReturnArgs} args - Arguments to create many StockMovements.
     * @example
     * // Create many StockMovements
     * const stockMovement = await prisma.stockMovement.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockMovementCreateManyAndReturnArgs>(args?: SelectSubset<T, StockMovementCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockMovement.
     * @param {StockMovementDeleteArgs} args - Arguments to delete one StockMovement.
     * @example
     * // Delete one StockMovement
     * const StockMovement = await prisma.stockMovement.delete({
     *   where: {
     *     // ... filter to delete one StockMovement
     *   }
     * })
     * 
     */
    delete<T extends StockMovementDeleteArgs>(args: SelectSubset<T, StockMovementDeleteArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockMovement.
     * @param {StockMovementUpdateArgs} args - Arguments to update one StockMovement.
     * @example
     * // Update one StockMovement
     * const stockMovement = await prisma.stockMovement.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockMovementUpdateArgs>(args: SelectSubset<T, StockMovementUpdateArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockMovements.
     * @param {StockMovementDeleteManyArgs} args - Arguments to filter StockMovements to delete.
     * @example
     * // Delete a few StockMovements
     * const { count } = await prisma.stockMovement.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockMovementDeleteManyArgs>(args?: SelectSubset<T, StockMovementDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockMovementUpdateManyArgs>(args: SelectSubset<T, StockMovementUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockMovements and returns the data updated in the database.
     * @param {StockMovementUpdateManyAndReturnArgs} args - Arguments to update many StockMovements.
     * @example
     * // Update many StockMovements
     * const stockMovement = await prisma.stockMovement.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockMovements and only return the `id`
     * const stockMovementWithIdOnly = await prisma.stockMovement.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockMovementUpdateManyAndReturnArgs>(args: SelectSubset<T, StockMovementUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockMovement.
     * @param {StockMovementUpsertArgs} args - Arguments to update or create a StockMovement.
     * @example
     * // Update or create a StockMovement
     * const stockMovement = await prisma.stockMovement.upsert({
     *   create: {
     *     // ... data to create a StockMovement
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockMovement we want to update
     *   }
     * })
     */
    upsert<T extends StockMovementUpsertArgs>(args: SelectSubset<T, StockMovementUpsertArgs<ExtArgs>>): Prisma__StockMovementClient<$Result.GetResult<Prisma.$StockMovementPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockMovements.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementCountArgs} args - Arguments to filter StockMovements to count.
     * @example
     * // Count the number of StockMovements
     * const count = await prisma.stockMovement.count({
     *   where: {
     *     // ... the filter for the StockMovements we want to count
     *   }
     * })
    **/
    count<T extends StockMovementCountArgs>(
      args?: Subset<T, StockMovementCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockMovementCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockMovementAggregateArgs>(args: Subset<T, StockMovementAggregateArgs>): Prisma.PrismaPromise<GetStockMovementAggregateType<T>>

    /**
     * Group by StockMovement.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockMovementGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockMovementGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockMovementGroupByArgs['orderBy'] }
        : { orderBy?: StockMovementGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockMovementGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockMovementGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockMovement model
   */
  readonly fields: StockMovementFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockMovement.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockMovementClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    destinationWarehouse<T extends StockMovement$destinationWarehouseArgs<ExtArgs> = {}>(args?: Subset<T, StockMovement$destinationWarehouseArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    originWareHouse<T extends StockMovement$originWareHouseArgs<ExtArgs> = {}>(args?: Subset<T, StockMovement$originWareHouseArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockMovement model
   */
  interface StockMovementFieldRefs {
    readonly id: FieldRef<"StockMovement", 'String'>
    readonly type: FieldRef<"StockMovement", 'MovementType'>
    readonly quantity: FieldRef<"StockMovement", 'Int'>
    readonly productId: FieldRef<"StockMovement", 'String'>
    readonly createdAt: FieldRef<"StockMovement", 'DateTime'>
    readonly notes: FieldRef<"StockMovement", 'String'>
    readonly destinationWarehouseId: FieldRef<"StockMovement", 'String'>
    readonly originWarehouseId: FieldRef<"StockMovement", 'String'>
    readonly status: FieldRef<"StockMovement", 'MovementStatus'>
    readonly quantityAfter: FieldRef<"StockMovement", 'Int'>
    readonly quantityBefore: FieldRef<"StockMovement", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * StockMovement findUnique
   */
  export type StockMovementFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findUniqueOrThrow
   */
  export type StockMovementFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement findFirst
   */
  export type StockMovementFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findFirstOrThrow
   */
  export type StockMovementFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovement to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockMovements.
     */
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement findMany
   */
  export type StockMovementFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter, which StockMovements to fetch.
     */
    where?: StockMovementWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockMovements to fetch.
     */
    orderBy?: StockMovementOrderByWithRelationInput | StockMovementOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockMovements.
     */
    cursor?: StockMovementWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockMovements from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockMovements.
     */
    skip?: number
    distinct?: StockMovementScalarFieldEnum | StockMovementScalarFieldEnum[]
  }

  /**
   * StockMovement create
   */
  export type StockMovementCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to create a StockMovement.
     */
    data: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
  }

  /**
   * StockMovement createMany
   */
  export type StockMovementCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockMovement createManyAndReturn
   */
  export type StockMovementCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data used to create many StockMovements.
     */
    data: StockMovementCreateManyInput | StockMovementCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockMovement update
   */
  export type StockMovementUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The data needed to update a StockMovement.
     */
    data: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
    /**
     * Choose, which StockMovement to update.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement updateMany
   */
  export type StockMovementUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
  }

  /**
   * StockMovement updateManyAndReturn
   */
  export type StockMovementUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * The data used to update StockMovements.
     */
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyInput>
    /**
     * Filter which StockMovements to update
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockMovement upsert
   */
  export type StockMovementUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * The filter to search for the StockMovement to update in case it exists.
     */
    where: StockMovementWhereUniqueInput
    /**
     * In case the StockMovement found by the `where` argument doesn't exist, create a new StockMovement with this data.
     */
    create: XOR<StockMovementCreateInput, StockMovementUncheckedCreateInput>
    /**
     * In case the StockMovement was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockMovementUpdateInput, StockMovementUncheckedUpdateInput>
  }

  /**
   * StockMovement delete
   */
  export type StockMovementDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
    /**
     * Filter which StockMovement to delete.
     */
    where: StockMovementWhereUniqueInput
  }

  /**
   * StockMovement deleteMany
   */
  export type StockMovementDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockMovements to delete
     */
    where?: StockMovementWhereInput
    /**
     * Limit how many StockMovements to delete.
     */
    limit?: number
  }

  /**
   * StockMovement.destinationWarehouse
   */
  export type StockMovement$destinationWarehouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    where?: WareHouseWhereInput
  }

  /**
   * StockMovement.originWareHouse
   */
  export type StockMovement$originWareHouseArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WareHouse
     */
    select?: WareHouseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WareHouse
     */
    omit?: WareHouseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WareHouseInclude<ExtArgs> | null
    where?: WareHouseWhereInput
  }

  /**
   * StockMovement without action
   */
  export type StockMovementDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockMovement
     */
    select?: StockMovementSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockMovement
     */
    omit?: StockMovementOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockMovementInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    contactPhone: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deliveryTime: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    contactPhone: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    deliveryTime: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    email: number
    contactPhone: number
    description: number
    createdAt: number
    updatedAt: number
    deliveryTime: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    contactPhone?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deliveryTime?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    contactPhone?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deliveryTime?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    contactPhone?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    deliveryTime?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    name: string
    email: string
    contactPhone: string
    description: string
    createdAt: Date
    updatedAt: Date
    deliveryTime: Date | null
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    contactPhone?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryTime?: boolean
    delivery?: boolean | Supplier$deliveryArgs<ExtArgs>
    products?: boolean | Supplier$productsArgs<ExtArgs>
    SupplierInvoice?: boolean | Supplier$SupplierInvoiceArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    contactPhone?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryTime?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    contactPhone?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryTime?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    contactPhone?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    deliveryTime?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "contactPhone" | "description" | "createdAt" | "updatedAt" | "deliveryTime", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    delivery?: boolean | Supplier$deliveryArgs<ExtArgs>
    products?: boolean | Supplier$productsArgs<ExtArgs>
    SupplierInvoice?: boolean | Supplier$SupplierInvoiceArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      delivery: Prisma.$DeliveryPayload<ExtArgs>[]
      products: Prisma.$ProductPayload<ExtArgs>[]
      SupplierInvoice: Prisma.$SupplierInvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      contactPhone: string
      description: string
      createdAt: Date
      updatedAt: Date
      deliveryTime: Date | null
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    delivery<T extends Supplier$deliveryArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$deliveryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends Supplier$productsArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    SupplierInvoice<T extends Supplier$SupplierInvoiceArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$SupplierInvoiceArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly contactPhone: FieldRef<"Supplier", 'String'>
    readonly description: FieldRef<"Supplier", 'String'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
    readonly deliveryTime: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.delivery
   */
  export type Supplier$deliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Supplier.products
   */
  export type Supplier$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Supplier.SupplierInvoice
   */
  export type Supplier$SupplierInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceInclude<ExtArgs> | null
    where?: SupplierInvoiceWhereInput
    orderBy?: SupplierInvoiceOrderByWithRelationInput | SupplierInvoiceOrderByWithRelationInput[]
    cursor?: SupplierInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SupplierInvoiceScalarFieldEnum | SupplierInvoiceScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model SupplierInvoice
   */

  export type AggregateSupplierInvoice = {
    _count: SupplierInvoiceCountAggregateOutputType | null
    _avg: SupplierInvoiceAvgAggregateOutputType | null
    _sum: SupplierInvoiceSumAggregateOutputType | null
    _min: SupplierInvoiceMinAggregateOutputType | null
    _max: SupplierInvoiceMaxAggregateOutputType | null
  }

  export type SupplierInvoiceAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type SupplierInvoiceSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type SupplierInvoiceMinAggregateOutputType = {
    id: string | null
    supplierId: string | null
    title: string | null
    description: string | null
    amount: Decimal | null
    dueDate: Date | null
    status: $Enums.InvoiceStatus | null
    fileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierInvoiceMaxAggregateOutputType = {
    id: string | null
    supplierId: string | null
    title: string | null
    description: string | null
    amount: Decimal | null
    dueDate: Date | null
    status: $Enums.InvoiceStatus | null
    fileUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierInvoiceCountAggregateOutputType = {
    id: number
    supplierId: number
    title: number
    description: number
    amount: number
    dueDate: number
    status: number
    fileUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierInvoiceAvgAggregateInputType = {
    amount?: true
  }

  export type SupplierInvoiceSumAggregateInputType = {
    amount?: true
  }

  export type SupplierInvoiceMinAggregateInputType = {
    id?: true
    supplierId?: true
    title?: true
    description?: true
    amount?: true
    dueDate?: true
    status?: true
    fileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierInvoiceMaxAggregateInputType = {
    id?: true
    supplierId?: true
    title?: true
    description?: true
    amount?: true
    dueDate?: true
    status?: true
    fileUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierInvoiceCountAggregateInputType = {
    id?: true
    supplierId?: true
    title?: true
    description?: true
    amount?: true
    dueDate?: true
    status?: true
    fileUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierInvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierInvoice to aggregate.
     */
    where?: SupplierInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierInvoices to fetch.
     */
    orderBy?: SupplierInvoiceOrderByWithRelationInput | SupplierInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SupplierInvoices
    **/
    _count?: true | SupplierInvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SupplierInvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SupplierInvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierInvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierInvoiceMaxAggregateInputType
  }

  export type GetSupplierInvoiceAggregateType<T extends SupplierInvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplierInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplierInvoice[P]>
      : GetScalarType<T[P], AggregateSupplierInvoice[P]>
  }




  export type SupplierInvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierInvoiceWhereInput
    orderBy?: SupplierInvoiceOrderByWithAggregationInput | SupplierInvoiceOrderByWithAggregationInput[]
    by: SupplierInvoiceScalarFieldEnum[] | SupplierInvoiceScalarFieldEnum
    having?: SupplierInvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierInvoiceCountAggregateInputType | true
    _avg?: SupplierInvoiceAvgAggregateInputType
    _sum?: SupplierInvoiceSumAggregateInputType
    _min?: SupplierInvoiceMinAggregateInputType
    _max?: SupplierInvoiceMaxAggregateInputType
  }

  export type SupplierInvoiceGroupByOutputType = {
    id: string
    supplierId: string
    title: string
    description: string
    amount: Decimal
    dueDate: Date
    status: $Enums.InvoiceStatus
    fileUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: SupplierInvoiceCountAggregateOutputType | null
    _avg: SupplierInvoiceAvgAggregateOutputType | null
    _sum: SupplierInvoiceSumAggregateOutputType | null
    _min: SupplierInvoiceMinAggregateOutputType | null
    _max: SupplierInvoiceMaxAggregateOutputType | null
  }

  type GetSupplierInvoiceGroupByPayload<T extends SupplierInvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierInvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierInvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierInvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierInvoiceGroupByOutputType[P]>
        }
      >
    >


  export type SupplierInvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    Delivery?: boolean | SupplierInvoice$DeliveryArgs<ExtArgs>
    _count?: boolean | SupplierInvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierInvoice"]>

  export type SupplierInvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierInvoice"]>

  export type SupplierInvoiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    supplierId?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplierInvoice"]>

  export type SupplierInvoiceSelectScalar = {
    id?: boolean
    supplierId?: boolean
    title?: boolean
    description?: boolean
    amount?: boolean
    dueDate?: boolean
    status?: boolean
    fileUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierInvoiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "supplierId" | "title" | "description" | "amount" | "dueDate" | "status" | "fileUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["supplierInvoice"]>
  export type SupplierInvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    Delivery?: boolean | SupplierInvoice$DeliveryArgs<ExtArgs>
    _count?: boolean | SupplierInvoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierInvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type SupplierInvoiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $SupplierInvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SupplierInvoice"
    objects: {
      supplier: Prisma.$SupplierPayload<ExtArgs>
      Delivery: Prisma.$DeliveryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      supplierId: string
      title: string
      description: string
      amount: Prisma.Decimal
      dueDate: Date
      status: $Enums.InvoiceStatus
      fileUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplierInvoice"]>
    composites: {}
  }

  type SupplierInvoiceGetPayload<S extends boolean | null | undefined | SupplierInvoiceDefaultArgs> = $Result.GetResult<Prisma.$SupplierInvoicePayload, S>

  type SupplierInvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierInvoiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierInvoiceCountAggregateInputType | true
    }

  export interface SupplierInvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SupplierInvoice'], meta: { name: 'SupplierInvoice' } }
    /**
     * Find zero or one SupplierInvoice that matches the filter.
     * @param {SupplierInvoiceFindUniqueArgs} args - Arguments to find a SupplierInvoice
     * @example
     * // Get one SupplierInvoice
     * const supplierInvoice = await prisma.supplierInvoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierInvoiceFindUniqueArgs>(args: SelectSubset<T, SupplierInvoiceFindUniqueArgs<ExtArgs>>): Prisma__SupplierInvoiceClient<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SupplierInvoice that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierInvoiceFindUniqueOrThrowArgs} args - Arguments to find a SupplierInvoice
     * @example
     * // Get one SupplierInvoice
     * const supplierInvoice = await prisma.supplierInvoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierInvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierInvoiceClient<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplierInvoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierInvoiceFindFirstArgs} args - Arguments to find a SupplierInvoice
     * @example
     * // Get one SupplierInvoice
     * const supplierInvoice = await prisma.supplierInvoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierInvoiceFindFirstArgs>(args?: SelectSubset<T, SupplierInvoiceFindFirstArgs<ExtArgs>>): Prisma__SupplierInvoiceClient<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SupplierInvoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierInvoiceFindFirstOrThrowArgs} args - Arguments to find a SupplierInvoice
     * @example
     * // Get one SupplierInvoice
     * const supplierInvoice = await prisma.supplierInvoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierInvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierInvoiceClient<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SupplierInvoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierInvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SupplierInvoices
     * const supplierInvoices = await prisma.supplierInvoice.findMany()
     * 
     * // Get first 10 SupplierInvoices
     * const supplierInvoices = await prisma.supplierInvoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierInvoiceWithIdOnly = await prisma.supplierInvoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierInvoiceFindManyArgs>(args?: SelectSubset<T, SupplierInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SupplierInvoice.
     * @param {SupplierInvoiceCreateArgs} args - Arguments to create a SupplierInvoice.
     * @example
     * // Create one SupplierInvoice
     * const SupplierInvoice = await prisma.supplierInvoice.create({
     *   data: {
     *     // ... data to create a SupplierInvoice
     *   }
     * })
     * 
     */
    create<T extends SupplierInvoiceCreateArgs>(args: SelectSubset<T, SupplierInvoiceCreateArgs<ExtArgs>>): Prisma__SupplierInvoiceClient<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SupplierInvoices.
     * @param {SupplierInvoiceCreateManyArgs} args - Arguments to create many SupplierInvoices.
     * @example
     * // Create many SupplierInvoices
     * const supplierInvoice = await prisma.supplierInvoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierInvoiceCreateManyArgs>(args?: SelectSubset<T, SupplierInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SupplierInvoices and returns the data saved in the database.
     * @param {SupplierInvoiceCreateManyAndReturnArgs} args - Arguments to create many SupplierInvoices.
     * @example
     * // Create many SupplierInvoices
     * const supplierInvoice = await prisma.supplierInvoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SupplierInvoices and only return the `id`
     * const supplierInvoiceWithIdOnly = await prisma.supplierInvoice.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierInvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SupplierInvoice.
     * @param {SupplierInvoiceDeleteArgs} args - Arguments to delete one SupplierInvoice.
     * @example
     * // Delete one SupplierInvoice
     * const SupplierInvoice = await prisma.supplierInvoice.delete({
     *   where: {
     *     // ... filter to delete one SupplierInvoice
     *   }
     * })
     * 
     */
    delete<T extends SupplierInvoiceDeleteArgs>(args: SelectSubset<T, SupplierInvoiceDeleteArgs<ExtArgs>>): Prisma__SupplierInvoiceClient<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SupplierInvoice.
     * @param {SupplierInvoiceUpdateArgs} args - Arguments to update one SupplierInvoice.
     * @example
     * // Update one SupplierInvoice
     * const supplierInvoice = await prisma.supplierInvoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierInvoiceUpdateArgs>(args: SelectSubset<T, SupplierInvoiceUpdateArgs<ExtArgs>>): Prisma__SupplierInvoiceClient<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SupplierInvoices.
     * @param {SupplierInvoiceDeleteManyArgs} args - Arguments to filter SupplierInvoices to delete.
     * @example
     * // Delete a few SupplierInvoices
     * const { count } = await prisma.supplierInvoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierInvoiceDeleteManyArgs>(args?: SelectSubset<T, SupplierInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierInvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SupplierInvoices
     * const supplierInvoice = await prisma.supplierInvoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierInvoiceUpdateManyArgs>(args: SelectSubset<T, SupplierInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SupplierInvoices and returns the data updated in the database.
     * @param {SupplierInvoiceUpdateManyAndReturnArgs} args - Arguments to update many SupplierInvoices.
     * @example
     * // Update many SupplierInvoices
     * const supplierInvoice = await prisma.supplierInvoice.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SupplierInvoices and only return the `id`
     * const supplierInvoiceWithIdOnly = await prisma.supplierInvoice.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierInvoiceUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierInvoiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SupplierInvoice.
     * @param {SupplierInvoiceUpsertArgs} args - Arguments to update or create a SupplierInvoice.
     * @example
     * // Update or create a SupplierInvoice
     * const supplierInvoice = await prisma.supplierInvoice.upsert({
     *   create: {
     *     // ... data to create a SupplierInvoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SupplierInvoice we want to update
     *   }
     * })
     */
    upsert<T extends SupplierInvoiceUpsertArgs>(args: SelectSubset<T, SupplierInvoiceUpsertArgs<ExtArgs>>): Prisma__SupplierInvoiceClient<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SupplierInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierInvoiceCountArgs} args - Arguments to filter SupplierInvoices to count.
     * @example
     * // Count the number of SupplierInvoices
     * const count = await prisma.supplierInvoice.count({
     *   where: {
     *     // ... the filter for the SupplierInvoices we want to count
     *   }
     * })
    **/
    count<T extends SupplierInvoiceCountArgs>(
      args?: Subset<T, SupplierInvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierInvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SupplierInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierInvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierInvoiceAggregateArgs>(args: Subset<T, SupplierInvoiceAggregateArgs>): Prisma.PrismaPromise<GetSupplierInvoiceAggregateType<T>>

    /**
     * Group by SupplierInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierInvoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierInvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierInvoiceGroupByArgs['orderBy'] }
        : { orderBy?: SupplierInvoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SupplierInvoice model
   */
  readonly fields: SupplierInvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SupplierInvoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierInvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    Delivery<T extends SupplierInvoice$DeliveryArgs<ExtArgs> = {}>(args?: Subset<T, SupplierInvoice$DeliveryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SupplierInvoice model
   */
  interface SupplierInvoiceFieldRefs {
    readonly id: FieldRef<"SupplierInvoice", 'String'>
    readonly supplierId: FieldRef<"SupplierInvoice", 'String'>
    readonly title: FieldRef<"SupplierInvoice", 'String'>
    readonly description: FieldRef<"SupplierInvoice", 'String'>
    readonly amount: FieldRef<"SupplierInvoice", 'Decimal'>
    readonly dueDate: FieldRef<"SupplierInvoice", 'DateTime'>
    readonly status: FieldRef<"SupplierInvoice", 'InvoiceStatus'>
    readonly fileUrl: FieldRef<"SupplierInvoice", 'String'>
    readonly createdAt: FieldRef<"SupplierInvoice", 'DateTime'>
    readonly updatedAt: FieldRef<"SupplierInvoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SupplierInvoice findUnique
   */
  export type SupplierInvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierInvoice to fetch.
     */
    where: SupplierInvoiceWhereUniqueInput
  }

  /**
   * SupplierInvoice findUniqueOrThrow
   */
  export type SupplierInvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierInvoice to fetch.
     */
    where: SupplierInvoiceWhereUniqueInput
  }

  /**
   * SupplierInvoice findFirst
   */
  export type SupplierInvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierInvoice to fetch.
     */
    where?: SupplierInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierInvoices to fetch.
     */
    orderBy?: SupplierInvoiceOrderByWithRelationInput | SupplierInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierInvoices.
     */
    cursor?: SupplierInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierInvoices.
     */
    distinct?: SupplierInvoiceScalarFieldEnum | SupplierInvoiceScalarFieldEnum[]
  }

  /**
   * SupplierInvoice findFirstOrThrow
   */
  export type SupplierInvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierInvoice to fetch.
     */
    where?: SupplierInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierInvoices to fetch.
     */
    orderBy?: SupplierInvoiceOrderByWithRelationInput | SupplierInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SupplierInvoices.
     */
    cursor?: SupplierInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SupplierInvoices.
     */
    distinct?: SupplierInvoiceScalarFieldEnum | SupplierInvoiceScalarFieldEnum[]
  }

  /**
   * SupplierInvoice findMany
   */
  export type SupplierInvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which SupplierInvoices to fetch.
     */
    where?: SupplierInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SupplierInvoices to fetch.
     */
    orderBy?: SupplierInvoiceOrderByWithRelationInput | SupplierInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SupplierInvoices.
     */
    cursor?: SupplierInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SupplierInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SupplierInvoices.
     */
    skip?: number
    distinct?: SupplierInvoiceScalarFieldEnum | SupplierInvoiceScalarFieldEnum[]
  }

  /**
   * SupplierInvoice create
   */
  export type SupplierInvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a SupplierInvoice.
     */
    data: XOR<SupplierInvoiceCreateInput, SupplierInvoiceUncheckedCreateInput>
  }

  /**
   * SupplierInvoice createMany
   */
  export type SupplierInvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SupplierInvoices.
     */
    data: SupplierInvoiceCreateManyInput | SupplierInvoiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SupplierInvoice createManyAndReturn
   */
  export type SupplierInvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * The data used to create many SupplierInvoices.
     */
    data: SupplierInvoiceCreateManyInput | SupplierInvoiceCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierInvoice update
   */
  export type SupplierInvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a SupplierInvoice.
     */
    data: XOR<SupplierInvoiceUpdateInput, SupplierInvoiceUncheckedUpdateInput>
    /**
     * Choose, which SupplierInvoice to update.
     */
    where: SupplierInvoiceWhereUniqueInput
  }

  /**
   * SupplierInvoice updateMany
   */
  export type SupplierInvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SupplierInvoices.
     */
    data: XOR<SupplierInvoiceUpdateManyMutationInput, SupplierInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which SupplierInvoices to update
     */
    where?: SupplierInvoiceWhereInput
    /**
     * Limit how many SupplierInvoices to update.
     */
    limit?: number
  }

  /**
   * SupplierInvoice updateManyAndReturn
   */
  export type SupplierInvoiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * The data used to update SupplierInvoices.
     */
    data: XOR<SupplierInvoiceUpdateManyMutationInput, SupplierInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which SupplierInvoices to update
     */
    where?: SupplierInvoiceWhereInput
    /**
     * Limit how many SupplierInvoices to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SupplierInvoice upsert
   */
  export type SupplierInvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the SupplierInvoice to update in case it exists.
     */
    where: SupplierInvoiceWhereUniqueInput
    /**
     * In case the SupplierInvoice found by the `where` argument doesn't exist, create a new SupplierInvoice with this data.
     */
    create: XOR<SupplierInvoiceCreateInput, SupplierInvoiceUncheckedCreateInput>
    /**
     * In case the SupplierInvoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierInvoiceUpdateInput, SupplierInvoiceUncheckedUpdateInput>
  }

  /**
   * SupplierInvoice delete
   */
  export type SupplierInvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceInclude<ExtArgs> | null
    /**
     * Filter which SupplierInvoice to delete.
     */
    where: SupplierInvoiceWhereUniqueInput
  }

  /**
   * SupplierInvoice deleteMany
   */
  export type SupplierInvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SupplierInvoices to delete
     */
    where?: SupplierInvoiceWhereInput
    /**
     * Limit how many SupplierInvoices to delete.
     */
    limit?: number
  }

  /**
   * SupplierInvoice.Delivery
   */
  export type SupplierInvoice$DeliveryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    cursor?: DeliveryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * SupplierInvoice without action
   */
  export type SupplierInvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceInclude<ExtArgs> | null
  }


  /**
   * Model AuditLog
   */

  export type AggregateAuditLog = {
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  export type AuditLogMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AuditLogMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    entity: string | null
    entityId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type AuditLogCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    entity: number
    entityId: number
    description: number
    createdAt: number
    _all: number
  }


  export type AuditLogMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    createdAt?: true
  }

  export type AuditLogMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    createdAt?: true
  }

  export type AuditLogCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    entity?: true
    entityId?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type AuditLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLog to aggregate.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AuditLogs
    **/
    _count?: true | AuditLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AuditLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AuditLogMaxAggregateInputType
  }

  export type GetAuditLogAggregateType<T extends AuditLogAggregateArgs> = {
        [P in keyof T & keyof AggregateAuditLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAuditLog[P]>
      : GetScalarType<T[P], AggregateAuditLog[P]>
  }




  export type AuditLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AuditLogWhereInput
    orderBy?: AuditLogOrderByWithAggregationInput | AuditLogOrderByWithAggregationInput[]
    by: AuditLogScalarFieldEnum[] | AuditLogScalarFieldEnum
    having?: AuditLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AuditLogCountAggregateInputType | true
    _min?: AuditLogMinAggregateInputType
    _max?: AuditLogMaxAggregateInputType
  }

  export type AuditLogGroupByOutputType = {
    id: string
    userId: string
    action: string
    entity: string
    entityId: string | null
    description: string
    createdAt: Date
    _count: AuditLogCountAggregateOutputType | null
    _min: AuditLogMinAggregateOutputType | null
    _max: AuditLogMaxAggregateOutputType | null
  }

  type GetAuditLogGroupByPayload<T extends AuditLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AuditLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AuditLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
            : GetScalarType<T[P], AuditLogGroupByOutputType[P]>
        }
      >
    >


  export type AuditLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["auditLog"]>

  export type AuditLogSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    entity?: boolean
    entityId?: boolean
    description?: boolean
    createdAt?: boolean
  }

  export type AuditLogOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "entity" | "entityId" | "description" | "createdAt", ExtArgs["result"]["auditLog"]>
  export type AuditLogInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AuditLogIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AuditLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AuditLog"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      entity: string
      entityId: string | null
      description: string
      createdAt: Date
    }, ExtArgs["result"]["auditLog"]>
    composites: {}
  }

  type AuditLogGetPayload<S extends boolean | null | undefined | AuditLogDefaultArgs> = $Result.GetResult<Prisma.$AuditLogPayload, S>

  type AuditLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AuditLogFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AuditLogCountAggregateInputType | true
    }

  export interface AuditLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AuditLog'], meta: { name: 'AuditLog' } }
    /**
     * Find zero or one AuditLog that matches the filter.
     * @param {AuditLogFindUniqueArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AuditLogFindUniqueArgs>(args: SelectSubset<T, AuditLogFindUniqueArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one AuditLog that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AuditLogFindUniqueOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AuditLogFindUniqueOrThrowArgs>(args: SelectSubset<T, AuditLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AuditLogFindFirstArgs>(args?: SelectSubset<T, AuditLogFindFirstArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first AuditLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindFirstOrThrowArgs} args - Arguments to find a AuditLog
     * @example
     * // Get one AuditLog
     * const auditLog = await prisma.auditLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AuditLogFindFirstOrThrowArgs>(args?: SelectSubset<T, AuditLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more AuditLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AuditLogs
     * const auditLogs = await prisma.auditLog.findMany()
     * 
     * // Get first 10 AuditLogs
     * const auditLogs = await prisma.auditLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AuditLogFindManyArgs>(args?: SelectSubset<T, AuditLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a AuditLog.
     * @param {AuditLogCreateArgs} args - Arguments to create a AuditLog.
     * @example
     * // Create one AuditLog
     * const AuditLog = await prisma.auditLog.create({
     *   data: {
     *     // ... data to create a AuditLog
     *   }
     * })
     * 
     */
    create<T extends AuditLogCreateArgs>(args: SelectSubset<T, AuditLogCreateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many AuditLogs.
     * @param {AuditLogCreateManyArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AuditLogCreateManyArgs>(args?: SelectSubset<T, AuditLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AuditLogs and returns the data saved in the database.
     * @param {AuditLogCreateManyAndReturnArgs} args - Arguments to create many AuditLogs.
     * @example
     * // Create many AuditLogs
     * const auditLog = await prisma.auditLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AuditLogCreateManyAndReturnArgs>(args?: SelectSubset<T, AuditLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a AuditLog.
     * @param {AuditLogDeleteArgs} args - Arguments to delete one AuditLog.
     * @example
     * // Delete one AuditLog
     * const AuditLog = await prisma.auditLog.delete({
     *   where: {
     *     // ... filter to delete one AuditLog
     *   }
     * })
     * 
     */
    delete<T extends AuditLogDeleteArgs>(args: SelectSubset<T, AuditLogDeleteArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one AuditLog.
     * @param {AuditLogUpdateArgs} args - Arguments to update one AuditLog.
     * @example
     * // Update one AuditLog
     * const auditLog = await prisma.auditLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AuditLogUpdateArgs>(args: SelectSubset<T, AuditLogUpdateArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more AuditLogs.
     * @param {AuditLogDeleteManyArgs} args - Arguments to filter AuditLogs to delete.
     * @example
     * // Delete a few AuditLogs
     * const { count } = await prisma.auditLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AuditLogDeleteManyArgs>(args?: SelectSubset<T, AuditLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AuditLogUpdateManyArgs>(args: SelectSubset<T, AuditLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AuditLogs and returns the data updated in the database.
     * @param {AuditLogUpdateManyAndReturnArgs} args - Arguments to update many AuditLogs.
     * @example
     * // Update many AuditLogs
     * const auditLog = await prisma.auditLog.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more AuditLogs and only return the `id`
     * const auditLogWithIdOnly = await prisma.auditLog.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AuditLogUpdateManyAndReturnArgs>(args: SelectSubset<T, AuditLogUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one AuditLog.
     * @param {AuditLogUpsertArgs} args - Arguments to update or create a AuditLog.
     * @example
     * // Update or create a AuditLog
     * const auditLog = await prisma.auditLog.upsert({
     *   create: {
     *     // ... data to create a AuditLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AuditLog we want to update
     *   }
     * })
     */
    upsert<T extends AuditLogUpsertArgs>(args: SelectSubset<T, AuditLogUpsertArgs<ExtArgs>>): Prisma__AuditLogClient<$Result.GetResult<Prisma.$AuditLogPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of AuditLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogCountArgs} args - Arguments to filter AuditLogs to count.
     * @example
     * // Count the number of AuditLogs
     * const count = await prisma.auditLog.count({
     *   where: {
     *     // ... the filter for the AuditLogs we want to count
     *   }
     * })
    **/
    count<T extends AuditLogCountArgs>(
      args?: Subset<T, AuditLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AuditLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AuditLogAggregateArgs>(args: Subset<T, AuditLogAggregateArgs>): Prisma.PrismaPromise<GetAuditLogAggregateType<T>>

    /**
     * Group by AuditLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AuditLogGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AuditLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AuditLogGroupByArgs['orderBy'] }
        : { orderBy?: AuditLogGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AuditLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAuditLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AuditLog model
   */
  readonly fields: AuditLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AuditLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AuditLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AuditLog model
   */
  interface AuditLogFieldRefs {
    readonly id: FieldRef<"AuditLog", 'String'>
    readonly userId: FieldRef<"AuditLog", 'String'>
    readonly action: FieldRef<"AuditLog", 'String'>
    readonly entity: FieldRef<"AuditLog", 'String'>
    readonly entityId: FieldRef<"AuditLog", 'String'>
    readonly description: FieldRef<"AuditLog", 'String'>
    readonly createdAt: FieldRef<"AuditLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AuditLog findUnique
   */
  export type AuditLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findUniqueOrThrow
   */
  export type AuditLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog findFirst
   */
  export type AuditLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findFirstOrThrow
   */
  export type AuditLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLog to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AuditLogs.
     */
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog findMany
   */
  export type AuditLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter, which AuditLogs to fetch.
     */
    where?: AuditLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AuditLogs to fetch.
     */
    orderBy?: AuditLogOrderByWithRelationInput | AuditLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AuditLogs.
     */
    cursor?: AuditLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AuditLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AuditLogs.
     */
    skip?: number
    distinct?: AuditLogScalarFieldEnum | AuditLogScalarFieldEnum[]
  }

  /**
   * AuditLog create
   */
  export type AuditLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to create a AuditLog.
     */
    data: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
  }

  /**
   * AuditLog createMany
   */
  export type AuditLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AuditLog createManyAndReturn
   */
  export type AuditLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to create many AuditLogs.
     */
    data: AuditLogCreateManyInput | AuditLogCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog update
   */
  export type AuditLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The data needed to update a AuditLog.
     */
    data: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
    /**
     * Choose, which AuditLog to update.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog updateMany
   */
  export type AuditLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
  }

  /**
   * AuditLog updateManyAndReturn
   */
  export type AuditLogUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * The data used to update AuditLogs.
     */
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyInput>
    /**
     * Filter which AuditLogs to update
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * AuditLog upsert
   */
  export type AuditLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * The filter to search for the AuditLog to update in case it exists.
     */
    where: AuditLogWhereUniqueInput
    /**
     * In case the AuditLog found by the `where` argument doesn't exist, create a new AuditLog with this data.
     */
    create: XOR<AuditLogCreateInput, AuditLogUncheckedCreateInput>
    /**
     * In case the AuditLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AuditLogUpdateInput, AuditLogUncheckedUpdateInput>
  }

  /**
   * AuditLog delete
   */
  export type AuditLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
    /**
     * Filter which AuditLog to delete.
     */
    where: AuditLogWhereUniqueInput
  }

  /**
   * AuditLog deleteMany
   */
  export type AuditLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AuditLogs to delete
     */
    where?: AuditLogWhereInput
    /**
     * Limit how many AuditLogs to delete.
     */
    limit?: number
  }

  /**
   * AuditLog without action
   */
  export type AuditLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AuditLog
     */
    select?: AuditLogSelect<ExtArgs> | null
    /**
     * Omit specific fields from the AuditLog
     */
    omit?: AuditLogOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AuditLogInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createAt: Date | null
    updatedAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createAt: number
    updatedAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updatedAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updatedAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    createAt: Date
    updatedAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
    updatedAt?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createAt?: boolean
    updatedAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createAt" | "updatedAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createAt: FieldRef<"Category", 'DateTime'>
    readonly updatedAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Delivery
   */

  export type AggregateDelivery = {
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  export type DeliveryAvgAggregateOutputType = {
    quantity: number | null
  }

  export type DeliverySumAggregateOutputType = {
    quantity: number | null
  }

  export type DeliveryMinAggregateOutputType = {
    id: string | null
    productId: string | null
    supplierId: string | null
    quantity: number | null
    expectedAt: Date | null
    updatedAt: Date | null
    status: $Enums.DeliveryStatus | null
    createdAt: Date | null
    warehouseId: string | null
    supplierInvoiceId: string | null
  }

  export type DeliveryMaxAggregateOutputType = {
    id: string | null
    productId: string | null
    supplierId: string | null
    quantity: number | null
    expectedAt: Date | null
    updatedAt: Date | null
    status: $Enums.DeliveryStatus | null
    createdAt: Date | null
    warehouseId: string | null
    supplierInvoiceId: string | null
  }

  export type DeliveryCountAggregateOutputType = {
    id: number
    productId: number
    supplierId: number
    quantity: number
    expectedAt: number
    updatedAt: number
    status: number
    createdAt: number
    warehouseId: number
    supplierInvoiceId: number
    _all: number
  }


  export type DeliveryAvgAggregateInputType = {
    quantity?: true
  }

  export type DeliverySumAggregateInputType = {
    quantity?: true
  }

  export type DeliveryMinAggregateInputType = {
    id?: true
    productId?: true
    supplierId?: true
    quantity?: true
    expectedAt?: true
    updatedAt?: true
    status?: true
    createdAt?: true
    warehouseId?: true
    supplierInvoiceId?: true
  }

  export type DeliveryMaxAggregateInputType = {
    id?: true
    productId?: true
    supplierId?: true
    quantity?: true
    expectedAt?: true
    updatedAt?: true
    status?: true
    createdAt?: true
    warehouseId?: true
    supplierInvoiceId?: true
  }

  export type DeliveryCountAggregateInputType = {
    id?: true
    productId?: true
    supplierId?: true
    quantity?: true
    expectedAt?: true
    updatedAt?: true
    status?: true
    createdAt?: true
    warehouseId?: true
    supplierInvoiceId?: true
    _all?: true
  }

  export type DeliveryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Delivery to aggregate.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Deliveries
    **/
    _count?: true | DeliveryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DeliveryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DeliverySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryMaxAggregateInputType
  }

  export type GetDeliveryAggregateType<T extends DeliveryAggregateArgs> = {
        [P in keyof T & keyof AggregateDelivery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDelivery[P]>
      : GetScalarType<T[P], AggregateDelivery[P]>
  }




  export type DeliveryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryWhereInput
    orderBy?: DeliveryOrderByWithAggregationInput | DeliveryOrderByWithAggregationInput[]
    by: DeliveryScalarFieldEnum[] | DeliveryScalarFieldEnum
    having?: DeliveryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryCountAggregateInputType | true
    _avg?: DeliveryAvgAggregateInputType
    _sum?: DeliverySumAggregateInputType
    _min?: DeliveryMinAggregateInputType
    _max?: DeliveryMaxAggregateInputType
  }

  export type DeliveryGroupByOutputType = {
    id: string
    productId: string
    supplierId: string
    quantity: number
    expectedAt: Date
    updatedAt: Date
    status: $Enums.DeliveryStatus
    createdAt: Date
    warehouseId: string
    supplierInvoiceId: string | null
    _count: DeliveryCountAggregateOutputType | null
    _avg: DeliveryAvgAggregateOutputType | null
    _sum: DeliverySumAggregateOutputType | null
    _min: DeliveryMinAggregateOutputType | null
    _max: DeliveryMaxAggregateOutputType | null
  }

  type GetDeliveryGroupByPayload<T extends DeliveryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryGroupByOutputType[P]>
        }
      >
    >


  export type DeliverySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    supplierId?: boolean
    quantity?: boolean
    expectedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    createdAt?: boolean
    warehouseId?: boolean
    supplierInvoiceId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    supplierInvoice?: boolean | Delivery$supplierInvoiceArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    supplierId?: boolean
    quantity?: boolean
    expectedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    createdAt?: boolean
    warehouseId?: boolean
    supplierInvoiceId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    supplierInvoice?: boolean | Delivery$supplierInvoiceArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    supplierId?: boolean
    quantity?: boolean
    expectedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    createdAt?: boolean
    warehouseId?: boolean
    supplierInvoiceId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    supplierInvoice?: boolean | Delivery$supplierInvoiceArgs<ExtArgs>
  }, ExtArgs["result"]["delivery"]>

  export type DeliverySelectScalar = {
    id?: boolean
    productId?: boolean
    supplierId?: boolean
    quantity?: boolean
    expectedAt?: boolean
    updatedAt?: boolean
    status?: boolean
    createdAt?: boolean
    warehouseId?: boolean
    supplierInvoiceId?: boolean
  }

  export type DeliveryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "supplierId" | "quantity" | "expectedAt" | "updatedAt" | "status" | "createdAt" | "warehouseId" | "supplierInvoiceId", ExtArgs["result"]["delivery"]>
  export type DeliveryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    supplierInvoice?: boolean | Delivery$supplierInvoiceArgs<ExtArgs>
  }
  export type DeliveryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    supplierInvoice?: boolean | Delivery$supplierInvoiceArgs<ExtArgs>
  }
  export type DeliveryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
    warehouse?: boolean | WareHouseDefaultArgs<ExtArgs>
    supplierInvoice?: boolean | Delivery$supplierInvoiceArgs<ExtArgs>
  }

  export type $DeliveryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Delivery"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      supplier: Prisma.$SupplierPayload<ExtArgs>
      warehouse: Prisma.$WareHousePayload<ExtArgs>
      supplierInvoice: Prisma.$SupplierInvoicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      productId: string
      supplierId: string
      quantity: number
      expectedAt: Date
      updatedAt: Date
      status: $Enums.DeliveryStatus
      createdAt: Date
      warehouseId: string
      supplierInvoiceId: string | null
    }, ExtArgs["result"]["delivery"]>
    composites: {}
  }

  type DeliveryGetPayload<S extends boolean | null | undefined | DeliveryDefaultArgs> = $Result.GetResult<Prisma.$DeliveryPayload, S>

  type DeliveryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryCountAggregateInputType | true
    }

  export interface DeliveryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Delivery'], meta: { name: 'Delivery' } }
    /**
     * Find zero or one Delivery that matches the filter.
     * @param {DeliveryFindUniqueArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryFindUniqueArgs>(args: SelectSubset<T, DeliveryFindUniqueArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Delivery that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryFindUniqueOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryFindFirstArgs>(args?: SelectSubset<T, DeliveryFindFirstArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Delivery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindFirstOrThrowArgs} args - Arguments to find a Delivery
     * @example
     * // Get one Delivery
     * const delivery = await prisma.delivery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Deliveries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Deliveries
     * const deliveries = await prisma.delivery.findMany()
     * 
     * // Get first 10 Deliveries
     * const deliveries = await prisma.delivery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryWithIdOnly = await prisma.delivery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryFindManyArgs>(args?: SelectSubset<T, DeliveryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Delivery.
     * @param {DeliveryCreateArgs} args - Arguments to create a Delivery.
     * @example
     * // Create one Delivery
     * const Delivery = await prisma.delivery.create({
     *   data: {
     *     // ... data to create a Delivery
     *   }
     * })
     * 
     */
    create<T extends DeliveryCreateArgs>(args: SelectSubset<T, DeliveryCreateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Deliveries.
     * @param {DeliveryCreateManyArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryCreateManyArgs>(args?: SelectSubset<T, DeliveryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Deliveries and returns the data saved in the database.
     * @param {DeliveryCreateManyAndReturnArgs} args - Arguments to create many Deliveries.
     * @example
     * // Create many Deliveries
     * const delivery = await prisma.delivery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Deliveries and only return the `id`
     * const deliveryWithIdOnly = await prisma.delivery.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Delivery.
     * @param {DeliveryDeleteArgs} args - Arguments to delete one Delivery.
     * @example
     * // Delete one Delivery
     * const Delivery = await prisma.delivery.delete({
     *   where: {
     *     // ... filter to delete one Delivery
     *   }
     * })
     * 
     */
    delete<T extends DeliveryDeleteArgs>(args: SelectSubset<T, DeliveryDeleteArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Delivery.
     * @param {DeliveryUpdateArgs} args - Arguments to update one Delivery.
     * @example
     * // Update one Delivery
     * const delivery = await prisma.delivery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryUpdateArgs>(args: SelectSubset<T, DeliveryUpdateArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Deliveries.
     * @param {DeliveryDeleteManyArgs} args - Arguments to filter Deliveries to delete.
     * @example
     * // Delete a few Deliveries
     * const { count } = await prisma.delivery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryDeleteManyArgs>(args?: SelectSubset<T, DeliveryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryUpdateManyArgs>(args: SelectSubset<T, DeliveryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Deliveries and returns the data updated in the database.
     * @param {DeliveryUpdateManyAndReturnArgs} args - Arguments to update many Deliveries.
     * @example
     * // Update many Deliveries
     * const delivery = await prisma.delivery.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Deliveries and only return the `id`
     * const deliveryWithIdOnly = await prisma.delivery.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Delivery.
     * @param {DeliveryUpsertArgs} args - Arguments to update or create a Delivery.
     * @example
     * // Update or create a Delivery
     * const delivery = await prisma.delivery.upsert({
     *   create: {
     *     // ... data to create a Delivery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Delivery we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryUpsertArgs>(args: SelectSubset<T, DeliveryUpsertArgs<ExtArgs>>): Prisma__DeliveryClient<$Result.GetResult<Prisma.$DeliveryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Deliveries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryCountArgs} args - Arguments to filter Deliveries to count.
     * @example
     * // Count the number of Deliveries
     * const count = await prisma.delivery.count({
     *   where: {
     *     // ... the filter for the Deliveries we want to count
     *   }
     * })
    **/
    count<T extends DeliveryCountArgs>(
      args?: Subset<T, DeliveryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryAggregateArgs>(args: Subset<T, DeliveryAggregateArgs>): Prisma.PrismaPromise<GetDeliveryAggregateType<T>>

    /**
     * Group by Delivery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Delivery model
   */
  readonly fields: DeliveryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Delivery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    warehouse<T extends WareHouseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WareHouseDefaultArgs<ExtArgs>>): Prisma__WareHouseClient<$Result.GetResult<Prisma.$WareHousePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplierInvoice<T extends Delivery$supplierInvoiceArgs<ExtArgs> = {}>(args?: Subset<T, Delivery$supplierInvoiceArgs<ExtArgs>>): Prisma__SupplierInvoiceClient<$Result.GetResult<Prisma.$SupplierInvoicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Delivery model
   */
  interface DeliveryFieldRefs {
    readonly id: FieldRef<"Delivery", 'String'>
    readonly productId: FieldRef<"Delivery", 'String'>
    readonly supplierId: FieldRef<"Delivery", 'String'>
    readonly quantity: FieldRef<"Delivery", 'Int'>
    readonly expectedAt: FieldRef<"Delivery", 'DateTime'>
    readonly updatedAt: FieldRef<"Delivery", 'DateTime'>
    readonly status: FieldRef<"Delivery", 'DeliveryStatus'>
    readonly createdAt: FieldRef<"Delivery", 'DateTime'>
    readonly warehouseId: FieldRef<"Delivery", 'String'>
    readonly supplierInvoiceId: FieldRef<"Delivery", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Delivery findUnique
   */
  export type DeliveryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findUniqueOrThrow
   */
  export type DeliveryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery findFirst
   */
  export type DeliveryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findFirstOrThrow
   */
  export type DeliveryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Delivery to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Deliveries.
     */
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery findMany
   */
  export type DeliveryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter, which Deliveries to fetch.
     */
    where?: DeliveryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Deliveries to fetch.
     */
    orderBy?: DeliveryOrderByWithRelationInput | DeliveryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Deliveries.
     */
    cursor?: DeliveryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Deliveries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Deliveries.
     */
    skip?: number
    distinct?: DeliveryScalarFieldEnum | DeliveryScalarFieldEnum[]
  }

  /**
   * Delivery create
   */
  export type DeliveryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to create a Delivery.
     */
    data: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
  }

  /**
   * Delivery createMany
   */
  export type DeliveryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Delivery createManyAndReturn
   */
  export type DeliveryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * The data used to create many Deliveries.
     */
    data: DeliveryCreateManyInput | DeliveryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery update
   */
  export type DeliveryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The data needed to update a Delivery.
     */
    data: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
    /**
     * Choose, which Delivery to update.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery updateMany
   */
  export type DeliveryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
  }

  /**
   * Delivery updateManyAndReturn
   */
  export type DeliveryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * The data used to update Deliveries.
     */
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyInput>
    /**
     * Filter which Deliveries to update
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Delivery upsert
   */
  export type DeliveryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * The filter to search for the Delivery to update in case it exists.
     */
    where: DeliveryWhereUniqueInput
    /**
     * In case the Delivery found by the `where` argument doesn't exist, create a new Delivery with this data.
     */
    create: XOR<DeliveryCreateInput, DeliveryUncheckedCreateInput>
    /**
     * In case the Delivery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryUpdateInput, DeliveryUncheckedUpdateInput>
  }

  /**
   * Delivery delete
   */
  export type DeliveryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
    /**
     * Filter which Delivery to delete.
     */
    where: DeliveryWhereUniqueInput
  }

  /**
   * Delivery deleteMany
   */
  export type DeliveryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Deliveries to delete
     */
    where?: DeliveryWhereInput
    /**
     * Limit how many Deliveries to delete.
     */
    limit?: number
  }

  /**
   * Delivery.supplierInvoice
   */
  export type Delivery$supplierInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierInvoice
     */
    select?: SupplierInvoiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SupplierInvoice
     */
    omit?: SupplierInvoiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInvoiceInclude<ExtArgs> | null
    where?: SupplierInvoiceWhereInput
  }

  /**
   * Delivery without action
   */
  export type DeliveryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Delivery
     */
    select?: DeliverySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Delivery
     */
    omit?: DeliveryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryInclude<ExtArgs> | null
  }


  /**
   * Model PasswordResetToken
   */

  export type AggregatePasswordResetToken = {
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  export type PasswordResetTokenMinAggregateOutputType = {
    token: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type PasswordResetTokenMaxAggregateOutputType = {
    token: string | null
    userId: string | null
    expiresAt: Date | null
  }

  export type PasswordResetTokenCountAggregateOutputType = {
    token: number
    userId: number
    expiresAt: number
    _all: number
  }


  export type PasswordResetTokenMinAggregateInputType = {
    token?: true
    userId?: true
    expiresAt?: true
  }

  export type PasswordResetTokenMaxAggregateInputType = {
    token?: true
    userId?: true
    expiresAt?: true
  }

  export type PasswordResetTokenCountAggregateInputType = {
    token?: true
    userId?: true
    expiresAt?: true
    _all?: true
  }

  export type PasswordResetTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetToken to aggregate.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PasswordResetTokens
    **/
    _count?: true | PasswordResetTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PasswordResetTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type GetPasswordResetTokenAggregateType<T extends PasswordResetTokenAggregateArgs> = {
        [P in keyof T & keyof AggregatePasswordResetToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePasswordResetToken[P]>
      : GetScalarType<T[P], AggregatePasswordResetToken[P]>
  }




  export type PasswordResetTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PasswordResetTokenWhereInput
    orderBy?: PasswordResetTokenOrderByWithAggregationInput | PasswordResetTokenOrderByWithAggregationInput[]
    by: PasswordResetTokenScalarFieldEnum[] | PasswordResetTokenScalarFieldEnum
    having?: PasswordResetTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PasswordResetTokenCountAggregateInputType | true
    _min?: PasswordResetTokenMinAggregateInputType
    _max?: PasswordResetTokenMaxAggregateInputType
  }

  export type PasswordResetTokenGroupByOutputType = {
    token: string
    userId: string
    expiresAt: Date
    _count: PasswordResetTokenCountAggregateOutputType | null
    _min: PasswordResetTokenMinAggregateOutputType | null
    _max: PasswordResetTokenMaxAggregateOutputType | null
  }

  type GetPasswordResetTokenGroupByPayload<T extends PasswordResetTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PasswordResetTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PasswordResetTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
            : GetScalarType<T[P], PasswordResetTokenGroupByOutputType[P]>
        }
      >
    >


  export type PasswordResetTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["passwordResetToken"]>

  export type PasswordResetTokenSelectScalar = {
    token?: boolean
    userId?: boolean
    expiresAt?: boolean
  }

  export type PasswordResetTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"token" | "userId" | "expiresAt", ExtArgs["result"]["passwordResetToken"]>
  export type PasswordResetTokenInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PasswordResetTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PasswordResetToken"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      token: string
      userId: string
      expiresAt: Date
    }, ExtArgs["result"]["passwordResetToken"]>
    composites: {}
  }

  type PasswordResetTokenGetPayload<S extends boolean | null | undefined | PasswordResetTokenDefaultArgs> = $Result.GetResult<Prisma.$PasswordResetTokenPayload, S>

  type PasswordResetTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PasswordResetTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PasswordResetTokenCountAggregateInputType | true
    }

  export interface PasswordResetTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PasswordResetToken'], meta: { name: 'PasswordResetToken' } }
    /**
     * Find zero or one PasswordResetToken that matches the filter.
     * @param {PasswordResetTokenFindUniqueArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PasswordResetTokenFindUniqueArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PasswordResetToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PasswordResetTokenFindUniqueOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PasswordResetTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PasswordResetTokenFindFirstArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PasswordResetToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindFirstOrThrowArgs} args - Arguments to find a PasswordResetToken
     * @example
     * // Get one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PasswordResetTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, PasswordResetTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PasswordResetTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany()
     * 
     * // Get first 10 PasswordResetTokens
     * const passwordResetTokens = await prisma.passwordResetToken.findMany({ take: 10 })
     * 
     * // Only select the `token`
     * const passwordResetTokenWithTokenOnly = await prisma.passwordResetToken.findMany({ select: { token: true } })
     * 
     */
    findMany<T extends PasswordResetTokenFindManyArgs>(args?: SelectSubset<T, PasswordResetTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PasswordResetToken.
     * @param {PasswordResetTokenCreateArgs} args - Arguments to create a PasswordResetToken.
     * @example
     * // Create one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.create({
     *   data: {
     *     // ... data to create a PasswordResetToken
     *   }
     * })
     * 
     */
    create<T extends PasswordResetTokenCreateArgs>(args: SelectSubset<T, PasswordResetTokenCreateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PasswordResetTokens.
     * @param {PasswordResetTokenCreateManyArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PasswordResetTokenCreateManyArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PasswordResetTokens and returns the data saved in the database.
     * @param {PasswordResetTokenCreateManyAndReturnArgs} args - Arguments to create many PasswordResetTokens.
     * @example
     * // Create many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PasswordResetTokens and only return the `token`
     * const passwordResetTokenWithTokenOnly = await prisma.passwordResetToken.createManyAndReturn({
     *   select: { token: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PasswordResetTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, PasswordResetTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PasswordResetToken.
     * @param {PasswordResetTokenDeleteArgs} args - Arguments to delete one PasswordResetToken.
     * @example
     * // Delete one PasswordResetToken
     * const PasswordResetToken = await prisma.passwordResetToken.delete({
     *   where: {
     *     // ... filter to delete one PasswordResetToken
     *   }
     * })
     * 
     */
    delete<T extends PasswordResetTokenDeleteArgs>(args: SelectSubset<T, PasswordResetTokenDeleteArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PasswordResetToken.
     * @param {PasswordResetTokenUpdateArgs} args - Arguments to update one PasswordResetToken.
     * @example
     * // Update one PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PasswordResetTokenUpdateArgs>(args: SelectSubset<T, PasswordResetTokenUpdateArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PasswordResetTokens.
     * @param {PasswordResetTokenDeleteManyArgs} args - Arguments to filter PasswordResetTokens to delete.
     * @example
     * // Delete a few PasswordResetTokens
     * const { count } = await prisma.passwordResetToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PasswordResetTokenDeleteManyArgs>(args?: SelectSubset<T, PasswordResetTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PasswordResetTokenUpdateManyArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PasswordResetTokens and returns the data updated in the database.
     * @param {PasswordResetTokenUpdateManyAndReturnArgs} args - Arguments to update many PasswordResetTokens.
     * @example
     * // Update many PasswordResetTokens
     * const passwordResetToken = await prisma.passwordResetToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PasswordResetTokens and only return the `token`
     * const passwordResetTokenWithTokenOnly = await prisma.passwordResetToken.updateManyAndReturn({
     *   select: { token: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PasswordResetTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PasswordResetToken.
     * @param {PasswordResetTokenUpsertArgs} args - Arguments to update or create a PasswordResetToken.
     * @example
     * // Update or create a PasswordResetToken
     * const passwordResetToken = await prisma.passwordResetToken.upsert({
     *   create: {
     *     // ... data to create a PasswordResetToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PasswordResetToken we want to update
     *   }
     * })
     */
    upsert<T extends PasswordResetTokenUpsertArgs>(args: SelectSubset<T, PasswordResetTokenUpsertArgs<ExtArgs>>): Prisma__PasswordResetTokenClient<$Result.GetResult<Prisma.$PasswordResetTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PasswordResetTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenCountArgs} args - Arguments to filter PasswordResetTokens to count.
     * @example
     * // Count the number of PasswordResetTokens
     * const count = await prisma.passwordResetToken.count({
     *   where: {
     *     // ... the filter for the PasswordResetTokens we want to count
     *   }
     * })
    **/
    count<T extends PasswordResetTokenCountArgs>(
      args?: Subset<T, PasswordResetTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PasswordResetTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PasswordResetTokenAggregateArgs>(args: Subset<T, PasswordResetTokenAggregateArgs>): Prisma.PrismaPromise<GetPasswordResetTokenAggregateType<T>>

    /**
     * Group by PasswordResetToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PasswordResetTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PasswordResetTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PasswordResetTokenGroupByArgs['orderBy'] }
        : { orderBy?: PasswordResetTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PasswordResetTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPasswordResetTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PasswordResetToken model
   */
  readonly fields: PasswordResetTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PasswordResetToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PasswordResetTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PasswordResetToken model
   */
  interface PasswordResetTokenFieldRefs {
    readonly token: FieldRef<"PasswordResetToken", 'String'>
    readonly userId: FieldRef<"PasswordResetToken", 'String'>
    readonly expiresAt: FieldRef<"PasswordResetToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PasswordResetToken findUnique
   */
  export type PasswordResetTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findUniqueOrThrow
   */
  export type PasswordResetTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken findFirst
   */
  export type PasswordResetTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findFirstOrThrow
   */
  export type PasswordResetTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetToken to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PasswordResetTokens.
     */
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken findMany
   */
  export type PasswordResetTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter, which PasswordResetTokens to fetch.
     */
    where?: PasswordResetTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PasswordResetTokens to fetch.
     */
    orderBy?: PasswordResetTokenOrderByWithRelationInput | PasswordResetTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PasswordResetTokens.
     */
    cursor?: PasswordResetTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PasswordResetTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PasswordResetTokens.
     */
    skip?: number
    distinct?: PasswordResetTokenScalarFieldEnum | PasswordResetTokenScalarFieldEnum[]
  }

  /**
   * PasswordResetToken create
   */
  export type PasswordResetTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to create a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
  }

  /**
   * PasswordResetToken createMany
   */
  export type PasswordResetTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PasswordResetToken createManyAndReturn
   */
  export type PasswordResetTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to create many PasswordResetTokens.
     */
    data: PasswordResetTokenCreateManyInput | PasswordResetTokenCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken update
   */
  export type PasswordResetTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The data needed to update a PasswordResetToken.
     */
    data: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
    /**
     * Choose, which PasswordResetToken to update.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken updateMany
   */
  export type PasswordResetTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
  }

  /**
   * PasswordResetToken updateManyAndReturn
   */
  export type PasswordResetTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * The data used to update PasswordResetTokens.
     */
    data: XOR<PasswordResetTokenUpdateManyMutationInput, PasswordResetTokenUncheckedUpdateManyInput>
    /**
     * Filter which PasswordResetTokens to update
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PasswordResetToken upsert
   */
  export type PasswordResetTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * The filter to search for the PasswordResetToken to update in case it exists.
     */
    where: PasswordResetTokenWhereUniqueInput
    /**
     * In case the PasswordResetToken found by the `where` argument doesn't exist, create a new PasswordResetToken with this data.
     */
    create: XOR<PasswordResetTokenCreateInput, PasswordResetTokenUncheckedCreateInput>
    /**
     * In case the PasswordResetToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PasswordResetTokenUpdateInput, PasswordResetTokenUncheckedUpdateInput>
  }

  /**
   * PasswordResetToken delete
   */
  export type PasswordResetTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
    /**
     * Filter which PasswordResetToken to delete.
     */
    where: PasswordResetTokenWhereUniqueInput
  }

  /**
   * PasswordResetToken deleteMany
   */
  export type PasswordResetTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PasswordResetTokens to delete
     */
    where?: PasswordResetTokenWhereInput
    /**
     * Limit how many PasswordResetTokens to delete.
     */
    limit?: number
  }

  /**
   * PasswordResetToken without action
   */
  export type PasswordResetTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PasswordResetToken
     */
    select?: PasswordResetTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PasswordResetToken
     */
    omit?: PasswordResetTokenOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PasswordResetTokenInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    sku: 'sku',
    quantity: 'quantity',
    price: 'price',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    supplierId: 'supplierId',
    categoryId: 'categoryId',
    minimumStock: 'minimumStock',
    unit: 'unit',
    expirationDate: 'expirationDate',
    usageStatus: 'usageStatus'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    providerType: 'providerType',
    providerId: 'providerId',
    providerAccountId: 'providerAccountId',
    refreshToken: 'refreshToken',
    accessToken: 'accessToken',
    accessTokenExpires: 'accessTokenExpires',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    expires: 'expires',
    sessionToken: 'sessionToken',
    accessToken: 'accessToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    office: 'office',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    department: 'department',
    description: 'description',
    phone: 'phone'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WareHouseScalarFieldEnum: {
    id: 'id',
    name: 'name',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    description: 'description'
  };

  export type WareHouseScalarFieldEnum = (typeof WareHouseScalarFieldEnum)[keyof typeof WareHouseScalarFieldEnum]


  export const WarehouseProductScalarFieldEnum: {
    warehouseId: 'warehouseId',
    productId: 'productId',
    quantity: 'quantity'
  };

  export type WarehouseProductScalarFieldEnum = (typeof WarehouseProductScalarFieldEnum)[keyof typeof WarehouseProductScalarFieldEnum]


  export const StockMovementScalarFieldEnum: {
    id: 'id',
    type: 'type',
    quantity: 'quantity',
    productId: 'productId',
    createdAt: 'createdAt',
    notes: 'notes',
    destinationWarehouseId: 'destinationWarehouseId',
    originWarehouseId: 'originWarehouseId',
    status: 'status',
    quantityAfter: 'quantityAfter',
    quantityBefore: 'quantityBefore'
  };

  export type StockMovementScalarFieldEnum = (typeof StockMovementScalarFieldEnum)[keyof typeof StockMovementScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    contactPhone: 'contactPhone',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    deliveryTime: 'deliveryTime'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const SupplierInvoiceScalarFieldEnum: {
    id: 'id',
    supplierId: 'supplierId',
    title: 'title',
    description: 'description',
    amount: 'amount',
    dueDate: 'dueDate',
    status: 'status',
    fileUrl: 'fileUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierInvoiceScalarFieldEnum = (typeof SupplierInvoiceScalarFieldEnum)[keyof typeof SupplierInvoiceScalarFieldEnum]


  export const AuditLogScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createAt: 'createAt',
    updatedAt: 'updatedAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const DeliveryScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    supplierId: 'supplierId',
    quantity: 'quantity',
    expectedAt: 'expectedAt',
    updatedAt: 'updatedAt',
    status: 'status',
    createdAt: 'createdAt',
    warehouseId: 'warehouseId',
    supplierInvoiceId: 'supplierInvoiceId'
  };

  export type DeliveryScalarFieldEnum = (typeof DeliveryScalarFieldEnum)[keyof typeof DeliveryScalarFieldEnum]


  export const PasswordResetTokenScalarFieldEnum: {
    token: 'token',
    userId: 'userId',
    expiresAt: 'expiresAt'
  };

  export type PasswordResetTokenScalarFieldEnum = (typeof PasswordResetTokenScalarFieldEnum)[keyof typeof PasswordResetTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'UnitType'
   */
  export type EnumUnitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnitType'>
    


  /**
   * Reference to a field of type 'UnitType[]'
   */
  export type ListEnumUnitTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UnitType[]'>
    


  /**
   * Reference to a field of type 'UsageStatus'
   */
  export type EnumUsageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsageStatus'>
    


  /**
   * Reference to a field of type 'UsageStatus[]'
   */
  export type ListEnumUsageStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UsageStatus[]'>
    


  /**
   * Reference to a field of type 'Office'
   */
  export type EnumOfficeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Office'>
    


  /**
   * Reference to a field of type 'Office[]'
   */
  export type ListEnumOfficeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Office[]'>
    


  /**
   * Reference to a field of type 'MovementType'
   */
  export type EnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType'>
    


  /**
   * Reference to a field of type 'MovementType[]'
   */
  export type ListEnumMovementTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementType[]'>
    


  /**
   * Reference to a field of type 'MovementStatus'
   */
  export type EnumMovementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementStatus'>
    


  /**
   * Reference to a field of type 'MovementStatus[]'
   */
  export type ListEnumMovementStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MovementStatus[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'InvoiceStatus'
   */
  export type EnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus'>
    


  /**
   * Reference to a field of type 'InvoiceStatus[]'
   */
  export type ListEnumInvoiceStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InvoiceStatus[]'>
    


  /**
   * Reference to a field of type 'DeliveryStatus'
   */
  export type EnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus'>
    


  /**
   * Reference to a field of type 'DeliveryStatus[]'
   */
  export type ListEnumDeliveryStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DeliveryStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    quantity?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    supplierId?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    minimumStock?: IntNullableFilter<"Product"> | number | null
    unit?: EnumUnitTypeFilter<"Product"> | $Enums.UnitType
    expirationDate?: DateTimeNullableFilter<"Product"> | Date | string | null
    usageStatus?: EnumUsageStatusFilter<"Product"> | $Enums.UsageStatus
    delivery?: DeliveryListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    supplier?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
    stockMovements?: StockMovementListRelationFilter
    warehouseProduct?: WarehouseProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    minimumStock?: SortOrderInput | SortOrder
    unit?: SortOrder
    expirationDate?: SortOrderInput | SortOrder
    usageStatus?: SortOrder
    delivery?: DeliveryOrderByRelationAggregateInput
    category?: CategoryOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
    stockMovements?: StockMovementOrderByRelationAggregateInput
    warehouseProduct?: WarehouseProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sku?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    quantity?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    supplierId?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    minimumStock?: IntNullableFilter<"Product"> | number | null
    unit?: EnumUnitTypeFilter<"Product"> | $Enums.UnitType
    expirationDate?: DateTimeNullableFilter<"Product"> | Date | string | null
    usageStatus?: EnumUsageStatusFilter<"Product"> | $Enums.UsageStatus
    delivery?: DeliveryListRelationFilter
    category?: XOR<CategoryNullableScalarRelationFilter, CategoryWhereInput> | null
    supplier?: XOR<SupplierNullableScalarRelationFilter, SupplierWhereInput> | null
    stockMovements?: StockMovementListRelationFilter
    warehouseProduct?: WarehouseProductListRelationFilter
  }, "id" | "sku">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplierId?: SortOrderInput | SortOrder
    categoryId?: SortOrderInput | SortOrder
    minimumStock?: SortOrderInput | SortOrder
    unit?: SortOrder
    expirationDate?: SortOrderInput | SortOrder
    usageStatus?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Product"> | string
    name?: StringWithAggregatesFilter<"Product"> | string
    sku?: StringWithAggregatesFilter<"Product"> | string
    quantity?: IntWithAggregatesFilter<"Product"> | number
    price?: FloatWithAggregatesFilter<"Product"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    supplierId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    categoryId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    minimumStock?: IntNullableWithAggregatesFilter<"Product"> | number | null
    unit?: EnumUnitTypeWithAggregatesFilter<"Product"> | $Enums.UnitType
    expirationDate?: DateTimeNullableWithAggregatesFilter<"Product"> | Date | string | null
    usageStatus?: EnumUsageStatusWithAggregatesFilter<"Product"> | $Enums.UsageStatus
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    providerType?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId_providerAccountId?: AccountProviderIdProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    providerType?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "providerId_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrderInput | SortOrder
    accessToken?: SortOrderInput | SortOrder
    accessTokenExpires?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AccountCountOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    providerType?: StringWithAggregatesFilter<"Account"> | string
    providerId?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refreshToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessToken?: StringNullableWithAggregatesFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableWithAggregatesFilter<"Account"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Account"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    sessionToken?: StringFilter<"Session"> | string
    accessToken?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    accessToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken" | "accessToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    accessToken?: StringWithAggregatesFilter<"Session"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    office?: EnumOfficeFilter<"User"> | $Enums.Office
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    description?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    AuditLog?: AuditLogListRelationFilter
    sessions?: SessionListRelationFilter
    PasswordResetToken?: XOR<PasswordResetTokenNullableScalarRelationFilter, PasswordResetTokenWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    office?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrder
    department?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    AuditLog?: AuditLogOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    PasswordResetToken?: PasswordResetTokenOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    office?: EnumOfficeFilter<"User"> | $Enums.Office
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    department?: StringNullableFilter<"User"> | string | null
    description?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    accounts?: AccountListRelationFilter
    AuditLog?: AuditLogListRelationFilter
    sessions?: SessionListRelationFilter
    PasswordResetToken?: XOR<PasswordResetTokenNullableScalarRelationFilter, PasswordResetTokenWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    office?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrder
    department?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    office?: EnumOfficeWithAggregatesFilter<"User"> | $Enums.Office
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    department?: StringNullableWithAggregatesFilter<"User"> | string | null
    description?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type WareHouseWhereInput = {
    AND?: WareHouseWhereInput | WareHouseWhereInput[]
    OR?: WareHouseWhereInput[]
    NOT?: WareHouseWhereInput | WareHouseWhereInput[]
    id?: StringFilter<"WareHouse"> | string
    name?: StringFilter<"WareHouse"> | string
    location?: StringNullableFilter<"WareHouse"> | string | null
    createdAt?: DateTimeFilter<"WareHouse"> | Date | string
    updatedAt?: DateTimeFilter<"WareHouse"> | Date | string
    description?: StringNullableFilter<"WareHouse"> | string | null
    stockMovementsDestination?: StockMovementListRelationFilter
    stockMovementsOrigin?: StockMovementListRelationFilter
    warehouseProduct?: WarehouseProductListRelationFilter
    Delivery?: DeliveryListRelationFilter
  }

  export type WareHouseOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    stockMovementsDestination?: StockMovementOrderByRelationAggregateInput
    stockMovementsOrigin?: StockMovementOrderByRelationAggregateInput
    warehouseProduct?: WarehouseProductOrderByRelationAggregateInput
    Delivery?: DeliveryOrderByRelationAggregateInput
  }

  export type WareHouseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WareHouseWhereInput | WareHouseWhereInput[]
    OR?: WareHouseWhereInput[]
    NOT?: WareHouseWhereInput | WareHouseWhereInput[]
    name?: StringFilter<"WareHouse"> | string
    location?: StringNullableFilter<"WareHouse"> | string | null
    createdAt?: DateTimeFilter<"WareHouse"> | Date | string
    updatedAt?: DateTimeFilter<"WareHouse"> | Date | string
    description?: StringNullableFilter<"WareHouse"> | string | null
    stockMovementsDestination?: StockMovementListRelationFilter
    stockMovementsOrigin?: StockMovementListRelationFilter
    warehouseProduct?: WarehouseProductListRelationFilter
    Delivery?: DeliveryListRelationFilter
  }, "id">

  export type WareHouseOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: WareHouseCountOrderByAggregateInput
    _max?: WareHouseMaxOrderByAggregateInput
    _min?: WareHouseMinOrderByAggregateInput
  }

  export type WareHouseScalarWhereWithAggregatesInput = {
    AND?: WareHouseScalarWhereWithAggregatesInput | WareHouseScalarWhereWithAggregatesInput[]
    OR?: WareHouseScalarWhereWithAggregatesInput[]
    NOT?: WareHouseScalarWhereWithAggregatesInput | WareHouseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WareHouse"> | string
    name?: StringWithAggregatesFilter<"WareHouse"> | string
    location?: StringNullableWithAggregatesFilter<"WareHouse"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"WareHouse"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"WareHouse"> | Date | string
    description?: StringNullableWithAggregatesFilter<"WareHouse"> | string | null
  }

  export type WarehouseProductWhereInput = {
    AND?: WarehouseProductWhereInput | WarehouseProductWhereInput[]
    OR?: WarehouseProductWhereInput[]
    NOT?: WarehouseProductWhereInput | WarehouseProductWhereInput[]
    warehouseId?: StringFilter<"WarehouseProduct"> | string
    productId?: StringFilter<"WarehouseProduct"> | string
    quantity?: IntFilter<"WarehouseProduct"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    warehouse?: XOR<WareHouseScalarRelationFilter, WareHouseWhereInput>
  }

  export type WarehouseProductOrderByWithRelationInput = {
    warehouseId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    product?: ProductOrderByWithRelationInput
    warehouse?: WareHouseOrderByWithRelationInput
  }

  export type WarehouseProductWhereUniqueInput = Prisma.AtLeast<{
    warehouseId_productId?: WarehouseProductWarehouseId_productIdCompoundUniqueInput
    AND?: WarehouseProductWhereInput | WarehouseProductWhereInput[]
    OR?: WarehouseProductWhereInput[]
    NOT?: WarehouseProductWhereInput | WarehouseProductWhereInput[]
    warehouseId?: StringFilter<"WarehouseProduct"> | string
    productId?: StringFilter<"WarehouseProduct"> | string
    quantity?: IntFilter<"WarehouseProduct"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    warehouse?: XOR<WareHouseScalarRelationFilter, WareHouseWhereInput>
  }, "warehouseId_productId" | "warehouseId_productId">

  export type WarehouseProductOrderByWithAggregationInput = {
    warehouseId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
    _count?: WarehouseProductCountOrderByAggregateInput
    _avg?: WarehouseProductAvgOrderByAggregateInput
    _max?: WarehouseProductMaxOrderByAggregateInput
    _min?: WarehouseProductMinOrderByAggregateInput
    _sum?: WarehouseProductSumOrderByAggregateInput
  }

  export type WarehouseProductScalarWhereWithAggregatesInput = {
    AND?: WarehouseProductScalarWhereWithAggregatesInput | WarehouseProductScalarWhereWithAggregatesInput[]
    OR?: WarehouseProductScalarWhereWithAggregatesInput[]
    NOT?: WarehouseProductScalarWhereWithAggregatesInput | WarehouseProductScalarWhereWithAggregatesInput[]
    warehouseId?: StringWithAggregatesFilter<"WarehouseProduct"> | string
    productId?: StringWithAggregatesFilter<"WarehouseProduct"> | string
    quantity?: IntWithAggregatesFilter<"WarehouseProduct"> | number
  }

  export type StockMovementWhereInput = {
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    type?: EnumMovementTypeFilter<"StockMovement"> | $Enums.MovementType
    quantity?: IntFilter<"StockMovement"> | number
    productId?: StringFilter<"StockMovement"> | string
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    notes?: StringNullableFilter<"StockMovement"> | string | null
    destinationWarehouseId?: StringNullableFilter<"StockMovement"> | string | null
    originWarehouseId?: StringNullableFilter<"StockMovement"> | string | null
    status?: EnumMovementStatusFilter<"StockMovement"> | $Enums.MovementStatus
    quantityAfter?: IntNullableFilter<"StockMovement"> | number | null
    quantityBefore?: IntNullableFilter<"StockMovement"> | number | null
    destinationWarehouse?: XOR<WareHouseNullableScalarRelationFilter, WareHouseWhereInput> | null
    originWareHouse?: XOR<WareHouseNullableScalarRelationFilter, WareHouseWhereInput> | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type StockMovementOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    destinationWarehouseId?: SortOrderInput | SortOrder
    originWarehouseId?: SortOrderInput | SortOrder
    status?: SortOrder
    quantityAfter?: SortOrderInput | SortOrder
    quantityBefore?: SortOrderInput | SortOrder
    destinationWarehouse?: WareHouseOrderByWithRelationInput
    originWareHouse?: WareHouseOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type StockMovementWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockMovementWhereInput | StockMovementWhereInput[]
    OR?: StockMovementWhereInput[]
    NOT?: StockMovementWhereInput | StockMovementWhereInput[]
    type?: EnumMovementTypeFilter<"StockMovement"> | $Enums.MovementType
    quantity?: IntFilter<"StockMovement"> | number
    productId?: StringFilter<"StockMovement"> | string
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    notes?: StringNullableFilter<"StockMovement"> | string | null
    destinationWarehouseId?: StringNullableFilter<"StockMovement"> | string | null
    originWarehouseId?: StringNullableFilter<"StockMovement"> | string | null
    status?: EnumMovementStatusFilter<"StockMovement"> | $Enums.MovementStatus
    quantityAfter?: IntNullableFilter<"StockMovement"> | number | null
    quantityBefore?: IntNullableFilter<"StockMovement"> | number | null
    destinationWarehouse?: XOR<WareHouseNullableScalarRelationFilter, WareHouseWhereInput> | null
    originWareHouse?: XOR<WareHouseNullableScalarRelationFilter, WareHouseWhereInput> | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type StockMovementOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    notes?: SortOrderInput | SortOrder
    destinationWarehouseId?: SortOrderInput | SortOrder
    originWarehouseId?: SortOrderInput | SortOrder
    status?: SortOrder
    quantityAfter?: SortOrderInput | SortOrder
    quantityBefore?: SortOrderInput | SortOrder
    _count?: StockMovementCountOrderByAggregateInput
    _avg?: StockMovementAvgOrderByAggregateInput
    _max?: StockMovementMaxOrderByAggregateInput
    _min?: StockMovementMinOrderByAggregateInput
    _sum?: StockMovementSumOrderByAggregateInput
  }

  export type StockMovementScalarWhereWithAggregatesInput = {
    AND?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    OR?: StockMovementScalarWhereWithAggregatesInput[]
    NOT?: StockMovementScalarWhereWithAggregatesInput | StockMovementScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockMovement"> | string
    type?: EnumMovementTypeWithAggregatesFilter<"StockMovement"> | $Enums.MovementType
    quantity?: IntWithAggregatesFilter<"StockMovement"> | number
    productId?: StringWithAggregatesFilter<"StockMovement"> | string
    createdAt?: DateTimeWithAggregatesFilter<"StockMovement"> | Date | string
    notes?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    destinationWarehouseId?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    originWarehouseId?: StringNullableWithAggregatesFilter<"StockMovement"> | string | null
    status?: EnumMovementStatusWithAggregatesFilter<"StockMovement"> | $Enums.MovementStatus
    quantityAfter?: IntNullableWithAggregatesFilter<"StockMovement"> | number | null
    quantityBefore?: IntNullableWithAggregatesFilter<"StockMovement"> | number | null
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    email?: StringFilter<"Supplier"> | string
    contactPhone?: StringFilter<"Supplier"> | string
    description?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    deliveryTime?: DateTimeNullableFilter<"Supplier"> | Date | string | null
    delivery?: DeliveryListRelationFilter
    products?: ProductListRelationFilter
    SupplierInvoice?: SupplierInvoiceListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contactPhone?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryTime?: SortOrderInput | SortOrder
    delivery?: DeliveryOrderByRelationAggregateInput
    products?: ProductOrderByRelationAggregateInput
    SupplierInvoice?: SupplierInvoiceOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    name?: StringFilter<"Supplier"> | string
    email?: StringFilter<"Supplier"> | string
    contactPhone?: StringFilter<"Supplier"> | string
    description?: StringFilter<"Supplier"> | string
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    deliveryTime?: DateTimeNullableFilter<"Supplier"> | Date | string | null
    delivery?: DeliveryListRelationFilter
    products?: ProductListRelationFilter
    SupplierInvoice?: SupplierInvoiceListRelationFilter
  }, "id">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contactPhone?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryTime?: SortOrderInput | SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    email?: StringWithAggregatesFilter<"Supplier"> | string
    contactPhone?: StringWithAggregatesFilter<"Supplier"> | string
    description?: StringWithAggregatesFilter<"Supplier"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    deliveryTime?: DateTimeNullableWithAggregatesFilter<"Supplier"> | Date | string | null
  }

  export type SupplierInvoiceWhereInput = {
    AND?: SupplierInvoiceWhereInput | SupplierInvoiceWhereInput[]
    OR?: SupplierInvoiceWhereInput[]
    NOT?: SupplierInvoiceWhereInput | SupplierInvoiceWhereInput[]
    id?: StringFilter<"SupplierInvoice"> | string
    supplierId?: StringFilter<"SupplierInvoice"> | string
    title?: StringFilter<"SupplierInvoice"> | string
    description?: StringFilter<"SupplierInvoice"> | string
    amount?: DecimalFilter<"SupplierInvoice"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFilter<"SupplierInvoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"SupplierInvoice"> | $Enums.InvoiceStatus
    fileUrl?: StringNullableFilter<"SupplierInvoice"> | string | null
    createdAt?: DateTimeFilter<"SupplierInvoice"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierInvoice"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    Delivery?: DeliveryListRelationFilter
  }

  export type SupplierInvoiceOrderByWithRelationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplier?: SupplierOrderByWithRelationInput
    Delivery?: DeliveryOrderByRelationAggregateInput
  }

  export type SupplierInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SupplierInvoiceWhereInput | SupplierInvoiceWhereInput[]
    OR?: SupplierInvoiceWhereInput[]
    NOT?: SupplierInvoiceWhereInput | SupplierInvoiceWhereInput[]
    supplierId?: StringFilter<"SupplierInvoice"> | string
    title?: StringFilter<"SupplierInvoice"> | string
    description?: StringFilter<"SupplierInvoice"> | string
    amount?: DecimalFilter<"SupplierInvoice"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFilter<"SupplierInvoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"SupplierInvoice"> | $Enums.InvoiceStatus
    fileUrl?: StringNullableFilter<"SupplierInvoice"> | string | null
    createdAt?: DateTimeFilter<"SupplierInvoice"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierInvoice"> | Date | string
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    Delivery?: DeliveryListRelationFilter
  }, "id">

  export type SupplierInvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    supplierId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierInvoiceCountOrderByAggregateInput
    _avg?: SupplierInvoiceAvgOrderByAggregateInput
    _max?: SupplierInvoiceMaxOrderByAggregateInput
    _min?: SupplierInvoiceMinOrderByAggregateInput
    _sum?: SupplierInvoiceSumOrderByAggregateInput
  }

  export type SupplierInvoiceScalarWhereWithAggregatesInput = {
    AND?: SupplierInvoiceScalarWhereWithAggregatesInput | SupplierInvoiceScalarWhereWithAggregatesInput[]
    OR?: SupplierInvoiceScalarWhereWithAggregatesInput[]
    NOT?: SupplierInvoiceScalarWhereWithAggregatesInput | SupplierInvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SupplierInvoice"> | string
    supplierId?: StringWithAggregatesFilter<"SupplierInvoice"> | string
    title?: StringWithAggregatesFilter<"SupplierInvoice"> | string
    description?: StringWithAggregatesFilter<"SupplierInvoice"> | string
    amount?: DecimalWithAggregatesFilter<"SupplierInvoice"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeWithAggregatesFilter<"SupplierInvoice"> | Date | string
    status?: EnumInvoiceStatusWithAggregatesFilter<"SupplierInvoice"> | $Enums.InvoiceStatus
    fileUrl?: StringNullableWithAggregatesFilter<"SupplierInvoice"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"SupplierInvoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SupplierInvoice"> | Date | string
  }

  export type AuditLogWhereInput = {
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AuditLogOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AuditLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AuditLogWhereInput | AuditLogWhereInput[]
    OR?: AuditLogWhereInput[]
    NOT?: AuditLogWhereInput | AuditLogWhereInput[]
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AuditLogOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrderInput | SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    _count?: AuditLogCountOrderByAggregateInput
    _max?: AuditLogMaxOrderByAggregateInput
    _min?: AuditLogMinOrderByAggregateInput
  }

  export type AuditLogScalarWhereWithAggregatesInput = {
    AND?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    OR?: AuditLogScalarWhereWithAggregatesInput[]
    NOT?: AuditLogScalarWhereWithAggregatesInput | AuditLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AuditLog"> | string
    userId?: StringWithAggregatesFilter<"AuditLog"> | string
    action?: StringWithAggregatesFilter<"AuditLog"> | string
    entity?: StringWithAggregatesFilter<"AuditLog"> | string
    entityId?: StringNullableWithAggregatesFilter<"AuditLog"> | string | null
    description?: StringWithAggregatesFilter<"AuditLog"> | string
    createdAt?: DateTimeWithAggregatesFilter<"AuditLog"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    createAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    createAt?: DateTimeFilter<"Category"> | Date | string
    updatedAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    createAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type DeliveryWhereInput = {
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    id?: StringFilter<"Delivery"> | string
    productId?: StringFilter<"Delivery"> | string
    supplierId?: StringFilter<"Delivery"> | string
    quantity?: IntFilter<"Delivery"> | number
    expectedAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    status?: EnumDeliveryStatusFilter<"Delivery"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    warehouseId?: StringFilter<"Delivery"> | string
    supplierInvoiceId?: StringNullableFilter<"Delivery"> | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    warehouse?: XOR<WareHouseScalarRelationFilter, WareHouseWhereInput>
    supplierInvoice?: XOR<SupplierInvoiceNullableScalarRelationFilter, SupplierInvoiceWhereInput> | null
  }

  export type DeliveryOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
    quantity?: SortOrder
    expectedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    warehouseId?: SortOrder
    supplierInvoiceId?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
    warehouse?: WareHouseOrderByWithRelationInput
    supplierInvoice?: SupplierInvoiceOrderByWithRelationInput
  }

  export type DeliveryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DeliveryWhereInput | DeliveryWhereInput[]
    OR?: DeliveryWhereInput[]
    NOT?: DeliveryWhereInput | DeliveryWhereInput[]
    productId?: StringFilter<"Delivery"> | string
    supplierId?: StringFilter<"Delivery"> | string
    quantity?: IntFilter<"Delivery"> | number
    expectedAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    status?: EnumDeliveryStatusFilter<"Delivery"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    warehouseId?: StringFilter<"Delivery"> | string
    supplierInvoiceId?: StringNullableFilter<"Delivery"> | string | null
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
    warehouse?: XOR<WareHouseScalarRelationFilter, WareHouseWhereInput>
    supplierInvoice?: XOR<SupplierInvoiceNullableScalarRelationFilter, SupplierInvoiceWhereInput> | null
  }, "id">

  export type DeliveryOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
    quantity?: SortOrder
    expectedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    warehouseId?: SortOrder
    supplierInvoiceId?: SortOrderInput | SortOrder
    _count?: DeliveryCountOrderByAggregateInput
    _avg?: DeliveryAvgOrderByAggregateInput
    _max?: DeliveryMaxOrderByAggregateInput
    _min?: DeliveryMinOrderByAggregateInput
    _sum?: DeliverySumOrderByAggregateInput
  }

  export type DeliveryScalarWhereWithAggregatesInput = {
    AND?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    OR?: DeliveryScalarWhereWithAggregatesInput[]
    NOT?: DeliveryScalarWhereWithAggregatesInput | DeliveryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Delivery"> | string
    productId?: StringWithAggregatesFilter<"Delivery"> | string
    supplierId?: StringWithAggregatesFilter<"Delivery"> | string
    quantity?: IntWithAggregatesFilter<"Delivery"> | number
    expectedAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    status?: EnumDeliveryStatusWithAggregatesFilter<"Delivery"> | $Enums.DeliveryStatus
    createdAt?: DateTimeWithAggregatesFilter<"Delivery"> | Date | string
    warehouseId?: StringWithAggregatesFilter<"Delivery"> | string
    supplierInvoiceId?: StringNullableWithAggregatesFilter<"Delivery"> | string | null
  }

  export type PasswordResetTokenWhereInput = {
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    token?: StringFilter<"PasswordResetToken"> | string
    userId?: StringFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PasswordResetTokenOrderByWithRelationInput = {
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type PasswordResetTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    userId?: string
    AND?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    OR?: PasswordResetTokenWhereInput[]
    NOT?: PasswordResetTokenWhereInput | PasswordResetTokenWhereInput[]
    expiresAt?: DateTimeFilter<"PasswordResetToken"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "token" | "userId">

  export type PasswordResetTokenOrderByWithAggregationInput = {
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
    _count?: PasswordResetTokenCountOrderByAggregateInput
    _max?: PasswordResetTokenMaxOrderByAggregateInput
    _min?: PasswordResetTokenMinOrderByAggregateInput
  }

  export type PasswordResetTokenScalarWhereWithAggregatesInput = {
    AND?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    OR?: PasswordResetTokenScalarWhereWithAggregatesInput[]
    NOT?: PasswordResetTokenScalarWhereWithAggregatesInput | PasswordResetTokenScalarWhereWithAggregatesInput[]
    token?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    userId?: StringWithAggregatesFilter<"PasswordResetToken"> | string
    expiresAt?: DateTimeWithAggregatesFilter<"PasswordResetToken"> | Date | string
  }

  export type ProductCreateInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
    delivery?: DeliveryCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    supplier?: SupplierCreateNestedOneWithoutProductsInput
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
    warehouseProduct?: WarehouseProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierId?: string | null
    categoryId?: string | null
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
    delivery?: DeliveryUncheckedCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
    warehouseProduct?: WarehouseProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
    delivery?: DeliveryUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    supplier?: SupplierUpdateOneWithoutProductsNestedInput
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
    warehouseProduct?: WarehouseProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
    delivery?: DeliveryUncheckedUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
    warehouseProduct?: WarehouseProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierId?: string | null
    categoryId?: string | null
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
  }

  export type ProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
  }

  export type AccountCreateInput = {
    id?: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    userId: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    userId: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    office?: $Enums.Office
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    department?: string | null
    description?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    AuditLog?: AuditLogCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    office?: $Enums.Office
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    department?: string | null
    description?: string | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    AuditLog?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    office?: EnumOfficeFieldUpdateOperationsInput | $Enums.Office
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    AuditLog?: AuditLogUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    office?: EnumOfficeFieldUpdateOperationsInput | $Enums.Office
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    AuditLog?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    office?: $Enums.Office
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    department?: string | null
    description?: string | null
    phone?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    office?: EnumOfficeFieldUpdateOperationsInput | $Enums.Office
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    office?: EnumOfficeFieldUpdateOperationsInput | $Enums.Office
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WareHouseCreateInput = {
    id?: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    stockMovementsDestination?: StockMovementCreateNestedManyWithoutDestinationWarehouseInput
    stockMovementsOrigin?: StockMovementCreateNestedManyWithoutOriginWareHouseInput
    warehouseProduct?: WarehouseProductCreateNestedManyWithoutWarehouseInput
    Delivery?: DeliveryCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseUncheckedCreateInput = {
    id?: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    stockMovementsDestination?: StockMovementUncheckedCreateNestedManyWithoutDestinationWarehouseInput
    stockMovementsOrigin?: StockMovementUncheckedCreateNestedManyWithoutOriginWareHouseInput
    warehouseProduct?: WarehouseProductUncheckedCreateNestedManyWithoutWarehouseInput
    Delivery?: DeliveryUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockMovementsDestination?: StockMovementUpdateManyWithoutDestinationWarehouseNestedInput
    stockMovementsOrigin?: StockMovementUpdateManyWithoutOriginWareHouseNestedInput
    warehouseProduct?: WarehouseProductUpdateManyWithoutWarehouseNestedInput
    Delivery?: DeliveryUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockMovementsDestination?: StockMovementUncheckedUpdateManyWithoutDestinationWarehouseNestedInput
    stockMovementsOrigin?: StockMovementUncheckedUpdateManyWithoutOriginWareHouseNestedInput
    warehouseProduct?: WarehouseProductUncheckedUpdateManyWithoutWarehouseNestedInput
    Delivery?: DeliveryUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseCreateManyInput = {
    id?: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
  }

  export type WareHouseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WareHouseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type WarehouseProductCreateInput = {
    quantity?: number
    product: ProductCreateNestedOneWithoutWarehouseProductInput
    warehouse: WareHouseCreateNestedOneWithoutWarehouseProductInput
  }

  export type WarehouseProductUncheckedCreateInput = {
    warehouseId: string
    productId: string
    quantity?: number
  }

  export type WarehouseProductUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutWarehouseProductNestedInput
    warehouse?: WareHouseUpdateOneRequiredWithoutWarehouseProductNestedInput
  }

  export type WarehouseProductUncheckedUpdateInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type WarehouseProductCreateManyInput = {
    warehouseId: string
    productId: string
    quantity?: number
  }

  export type WarehouseProductUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type WarehouseProductUncheckedUpdateManyInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type StockMovementCreateInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    createdAt?: Date | string
    notes?: string | null
    status?: $Enums.MovementStatus
    quantityAfter?: number | null
    quantityBefore?: number | null
    destinationWarehouse?: WareHouseCreateNestedOneWithoutStockMovementsDestinationInput
    originWareHouse?: WareHouseCreateNestedOneWithoutStockMovementsOriginInput
    product: ProductCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    productId: string
    createdAt?: Date | string
    notes?: string | null
    destinationWarehouseId?: string | null
    originWarehouseId?: string | null
    status?: $Enums.MovementStatus
    quantityAfter?: number | null
    quantityBefore?: number | null
  }

  export type StockMovementUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
    destinationWarehouse?: WareHouseUpdateOneWithoutStockMovementsDestinationNestedInput
    originWareHouse?: WareHouseUpdateOneWithoutStockMovementsOriginNestedInput
    product?: ProductUpdateOneRequiredWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    destinationWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    originWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockMovementCreateManyInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    productId: string
    createdAt?: Date | string
    notes?: string | null
    destinationWarehouseId?: string | null
    originWarehouseId?: string | null
    status?: $Enums.MovementStatus
    quantityAfter?: number | null
    quantityBefore?: number | null
  }

  export type StockMovementUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockMovementUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    destinationWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    originWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type SupplierCreateInput = {
    id?: string
    name: string
    email: string
    contactPhone: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryTime?: Date | string | null
    delivery?: DeliveryCreateNestedManyWithoutSupplierInput
    products?: ProductCreateNestedManyWithoutSupplierInput
    SupplierInvoice?: SupplierInvoiceCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    contactPhone: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryTime?: Date | string | null
    delivery?: DeliveryUncheckedCreateNestedManyWithoutSupplierInput
    products?: ProductUncheckedCreateNestedManyWithoutSupplierInput
    SupplierInvoice?: SupplierInvoiceUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery?: DeliveryUpdateManyWithoutSupplierNestedInput
    products?: ProductUpdateManyWithoutSupplierNestedInput
    SupplierInvoice?: SupplierInvoiceUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery?: DeliveryUncheckedUpdateManyWithoutSupplierNestedInput
    products?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
    SupplierInvoice?: SupplierInvoiceUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    name: string
    email: string
    contactPhone: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryTime?: Date | string | null
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SupplierInvoiceCreateInput = {
    id?: string
    title: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutSupplierInvoiceInput
    Delivery?: DeliveryCreateNestedManyWithoutSupplierInvoiceInput
  }

  export type SupplierInvoiceUncheckedCreateInput = {
    id?: string
    supplierId: string
    title: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Delivery?: DeliveryUncheckedCreateNestedManyWithoutSupplierInvoiceInput
  }

  export type SupplierInvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutSupplierInvoiceNestedInput
    Delivery?: DeliveryUpdateManyWithoutSupplierInvoiceNestedInput
  }

  export type SupplierInvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Delivery?: DeliveryUncheckedUpdateManyWithoutSupplierInvoiceNestedInput
  }

  export type SupplierInvoiceCreateManyInput = {
    id?: string
    supplierId: string
    title: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierInvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierInvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    description: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogInput
  }

  export type AuditLogUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    entity: string
    entityId?: string | null
    description: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogNestedInput
  }

  export type AuditLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogCreateManyInput = {
    id?: string
    userId: string
    action: string
    entity: string
    entityId?: string | null
    description: string
    createdAt?: Date | string
  }

  export type AuditLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    createAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    createAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateInput = {
    id?: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutDeliveryInput
    supplier: SupplierCreateNestedOneWithoutDeliveryInput
    warehouse: WareHouseCreateNestedOneWithoutDeliveryInput
    supplierInvoice?: SupplierInvoiceCreateNestedOneWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateInput = {
    id?: string
    productId: string
    supplierId: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    warehouseId: string
    supplierInvoiceId?: string | null
  }

  export type DeliveryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutDeliveryNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutDeliveryNestedInput
    warehouse?: WareHouseUpdateOneRequiredWithoutDeliveryNestedInput
    supplierInvoice?: SupplierInvoiceUpdateOneWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    supplierInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryCreateManyInput = {
    id?: string
    productId: string
    supplierId: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    warehouseId: string
    supplierInvoiceId?: string | null
  }

  export type DeliveryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    supplierInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PasswordResetTokenCreateInput = {
    token: string
    expiresAt: Date | string
    user: UserCreateNestedOneWithoutPasswordResetTokenInput
  }

  export type PasswordResetTokenUncheckedCreateInput = {
    token: string
    userId: string
    expiresAt: Date | string
  }

  export type PasswordResetTokenUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput
  }

  export type PasswordResetTokenUncheckedUpdateInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenCreateManyInput = {
    token: string
    userId: string
    expiresAt: Date | string
  }

  export type PasswordResetTokenUpdateManyMutationInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateManyInput = {
    token?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumUnitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeFilter<$PrismaModel> | $Enums.UnitType
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumUsageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UsageStatus | EnumUsageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UsageStatus[] | ListEnumUsageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsageStatus[] | ListEnumUsageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUsageStatusFilter<$PrismaModel> | $Enums.UsageStatus
  }

  export type DeliveryListRelationFilter = {
    every?: DeliveryWhereInput
    some?: DeliveryWhereInput
    none?: DeliveryWhereInput
  }

  export type CategoryNullableScalarRelationFilter = {
    is?: CategoryWhereInput | null
    isNot?: CategoryWhereInput | null
  }

  export type SupplierNullableScalarRelationFilter = {
    is?: SupplierWhereInput | null
    isNot?: SupplierWhereInput | null
  }

  export type StockMovementListRelationFilter = {
    every?: StockMovementWhereInput
    some?: StockMovementWhereInput
    none?: StockMovementWhereInput
  }

  export type WarehouseProductListRelationFilter = {
    every?: WarehouseProductWhereInput
    some?: WarehouseProductWhereInput
    none?: WarehouseProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DeliveryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StockMovementOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WarehouseProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplierId?: SortOrder
    categoryId?: SortOrder
    minimumStock?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrder
    usageStatus?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    minimumStock?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplierId?: SortOrder
    categoryId?: SortOrder
    minimumStock?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrder
    usageStatus?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    sku?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    supplierId?: SortOrder
    categoryId?: SortOrder
    minimumStock?: SortOrder
    unit?: SortOrder
    expirationDate?: SortOrder
    usageStatus?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
    minimumStock?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumUnitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel> | $Enums.UnitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitTypeFilter<$PrismaModel>
    _max?: NestedEnumUnitTypeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumUsageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsageStatus | EnumUsageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UsageStatus[] | ListEnumUsageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsageStatus[] | ListEnumUsageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUsageStatusWithAggregatesFilter<$PrismaModel> | $Enums.UsageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsageStatusFilter<$PrismaModel>
    _max?: NestedEnumUsageStatusFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderIdProviderAccountIdCompoundUniqueInput = {
    providerId: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    providerType?: SortOrder
    providerId?: SortOrder
    providerAccountId?: SortOrder
    refreshToken?: SortOrder
    accessToken?: SortOrder
    accessTokenExpires?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    sessionToken?: SortOrder
    accessToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumOfficeFilter<$PrismaModel = never> = {
    equals?: $Enums.Office | EnumOfficeFieldRefInput<$PrismaModel>
    in?: $Enums.Office[] | ListEnumOfficeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Office[] | ListEnumOfficeFieldRefInput<$PrismaModel>
    not?: NestedEnumOfficeFilter<$PrismaModel> | $Enums.Office
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type AuditLogListRelationFilter = {
    every?: AuditLogWhereInput
    some?: AuditLogWhereInput
    none?: AuditLogWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type PasswordResetTokenNullableScalarRelationFilter = {
    is?: PasswordResetTokenWhereInput | null
    isNot?: PasswordResetTokenWhereInput | null
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AuditLogOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    office?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    department?: SortOrder
    description?: SortOrder
    phone?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    office?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    department?: SortOrder
    description?: SortOrder
    phone?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    office?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    department?: SortOrder
    description?: SortOrder
    phone?: SortOrder
  }

  export type EnumOfficeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Office | EnumOfficeFieldRefInput<$PrismaModel>
    in?: $Enums.Office[] | ListEnumOfficeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Office[] | ListEnumOfficeFieldRefInput<$PrismaModel>
    not?: NestedEnumOfficeWithAggregatesFilter<$PrismaModel> | $Enums.Office
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfficeFilter<$PrismaModel>
    _max?: NestedEnumOfficeFilter<$PrismaModel>
  }

  export type WareHouseCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
  }

  export type WareHouseMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
  }

  export type WareHouseMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type WareHouseScalarRelationFilter = {
    is?: WareHouseWhereInput
    isNot?: WareHouseWhereInput
  }

  export type WarehouseProductWarehouseId_productIdCompoundUniqueInput = {
    warehouseId: string
    productId: string
  }

  export type WarehouseProductWarehouseIdProductIdCompoundUniqueInput = {
    warehouseId: string
    productId: string
  }

  export type WarehouseProductCountOrderByAggregateInput = {
    warehouseId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type WarehouseProductAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type WarehouseProductMaxOrderByAggregateInput = {
    warehouseId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type WarehouseProductMinOrderByAggregateInput = {
    warehouseId?: SortOrder
    productId?: SortOrder
    quantity?: SortOrder
  }

  export type WarehouseProductSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type EnumMovementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementStatus | EnumMovementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementStatusFilter<$PrismaModel> | $Enums.MovementStatus
  }

  export type WareHouseNullableScalarRelationFilter = {
    is?: WareHouseWhereInput | null
    isNot?: WareHouseWhereInput | null
  }

  export type StockMovementCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    notes?: SortOrder
    destinationWarehouseId?: SortOrder
    originWarehouseId?: SortOrder
    status?: SortOrder
    quantityAfter?: SortOrder
    quantityBefore?: SortOrder
  }

  export type StockMovementAvgOrderByAggregateInput = {
    quantity?: SortOrder
    quantityAfter?: SortOrder
    quantityBefore?: SortOrder
  }

  export type StockMovementMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    notes?: SortOrder
    destinationWarehouseId?: SortOrder
    originWarehouseId?: SortOrder
    status?: SortOrder
    quantityAfter?: SortOrder
    quantityBefore?: SortOrder
  }

  export type StockMovementMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    quantity?: SortOrder
    productId?: SortOrder
    createdAt?: SortOrder
    notes?: SortOrder
    destinationWarehouseId?: SortOrder
    originWarehouseId?: SortOrder
    status?: SortOrder
    quantityAfter?: SortOrder
    quantityBefore?: SortOrder
  }

  export type StockMovementSumOrderByAggregateInput = {
    quantity?: SortOrder
    quantityAfter?: SortOrder
    quantityBefore?: SortOrder
  }

  export type EnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type EnumMovementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementStatus | EnumMovementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementStatusWithAggregatesFilter<$PrismaModel> | $Enums.MovementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementStatusFilter<$PrismaModel>
    _max?: NestedEnumMovementStatusFilter<$PrismaModel>
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SupplierInvoiceListRelationFilter = {
    every?: SupplierInvoiceWhereInput
    some?: SupplierInvoiceWhereInput
    none?: SupplierInvoiceWhereInput
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierInvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contactPhone?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryTime?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contactPhone?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryTime?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    contactPhone?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    deliveryTime?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type EnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type SupplierInvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierInvoiceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SupplierInvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierInvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    supplierId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    amount?: SortOrder
    dueDate?: SortOrder
    status?: SortOrder
    fileUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierInvoiceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type EnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type AuditLogCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type AuditLogMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    entity?: SortOrder
    entityId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type SupplierInvoiceNullableScalarRelationFilter = {
    is?: SupplierInvoiceWhereInput | null
    isNot?: SupplierInvoiceWhereInput | null
  }

  export type DeliveryCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
    quantity?: SortOrder
    expectedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    warehouseId?: SortOrder
    supplierInvoiceId?: SortOrder
  }

  export type DeliveryAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type DeliveryMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
    quantity?: SortOrder
    expectedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    warehouseId?: SortOrder
    supplierInvoiceId?: SortOrder
  }

  export type DeliveryMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    supplierId?: SortOrder
    quantity?: SortOrder
    expectedAt?: SortOrder
    updatedAt?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    warehouseId?: SortOrder
    supplierInvoiceId?: SortOrder
  }

  export type DeliverySumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type PasswordResetTokenCountOrderByAggregateInput = {
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type PasswordResetTokenMaxOrderByAggregateInput = {
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type PasswordResetTokenMinOrderByAggregateInput = {
    token?: SortOrder
    userId?: SortOrder
    expiresAt?: SortOrder
  }

  export type DeliveryCreateNestedManyWithoutProductInput = {
    create?: XOR<DeliveryCreateWithoutProductInput, DeliveryUncheckedCreateWithoutProductInput> | DeliveryCreateWithoutProductInput[] | DeliveryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutProductInput | DeliveryCreateOrConnectWithoutProductInput[]
    createMany?: DeliveryCreateManyProductInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutProductsInput = {
    create?: XOR<SupplierCreateWithoutProductsInput, SupplierUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutProductsInput
    connect?: SupplierWhereUniqueInput
  }

  export type StockMovementCreateNestedManyWithoutProductInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type WarehouseProductCreateNestedManyWithoutProductInput = {
    create?: XOR<WarehouseProductCreateWithoutProductInput, WarehouseProductUncheckedCreateWithoutProductInput> | WarehouseProductCreateWithoutProductInput[] | WarehouseProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WarehouseProductCreateOrConnectWithoutProductInput | WarehouseProductCreateOrConnectWithoutProductInput[]
    createMany?: WarehouseProductCreateManyProductInputEnvelope
    connect?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<DeliveryCreateWithoutProductInput, DeliveryUncheckedCreateWithoutProductInput> | DeliveryCreateWithoutProductInput[] | DeliveryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutProductInput | DeliveryCreateOrConnectWithoutProductInput[]
    createMany?: DeliveryCreateManyProductInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type WarehouseProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<WarehouseProductCreateWithoutProductInput, WarehouseProductUncheckedCreateWithoutProductInput> | WarehouseProductCreateWithoutProductInput[] | WarehouseProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WarehouseProductCreateOrConnectWithoutProductInput | WarehouseProductCreateOrConnectWithoutProductInput[]
    createMany?: WarehouseProductCreateManyProductInputEnvelope
    connect?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumUnitTypeFieldUpdateOperationsInput = {
    set?: $Enums.UnitType
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumUsageStatusFieldUpdateOperationsInput = {
    set?: $Enums.UsageStatus
  }

  export type DeliveryUpdateManyWithoutProductNestedInput = {
    create?: XOR<DeliveryCreateWithoutProductInput, DeliveryUncheckedCreateWithoutProductInput> | DeliveryCreateWithoutProductInput[] | DeliveryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutProductInput | DeliveryCreateOrConnectWithoutProductInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutProductInput | DeliveryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DeliveryCreateManyProductInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutProductInput | DeliveryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutProductInput | DeliveryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type CategoryUpdateOneWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    disconnect?: CategoryWhereInput | boolean
    delete?: CategoryWhereInput | boolean
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type SupplierUpdateOneWithoutProductsNestedInput = {
    create?: XOR<SupplierCreateWithoutProductsInput, SupplierUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutProductsInput
    upsert?: SupplierUpsertWithoutProductsInput
    disconnect?: SupplierWhereInput | boolean
    delete?: SupplierWhereInput | boolean
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutProductsInput, SupplierUpdateWithoutProductsInput>, SupplierUncheckedUpdateWithoutProductsInput>
  }

  export type StockMovementUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutProductInput | StockMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutProductInput | StockMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutProductInput | StockMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type WarehouseProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<WarehouseProductCreateWithoutProductInput, WarehouseProductUncheckedCreateWithoutProductInput> | WarehouseProductCreateWithoutProductInput[] | WarehouseProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WarehouseProductCreateOrConnectWithoutProductInput | WarehouseProductCreateOrConnectWithoutProductInput[]
    upsert?: WarehouseProductUpsertWithWhereUniqueWithoutProductInput | WarehouseProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: WarehouseProductCreateManyProductInputEnvelope
    set?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    disconnect?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    delete?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    connect?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    update?: WarehouseProductUpdateWithWhereUniqueWithoutProductInput | WarehouseProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: WarehouseProductUpdateManyWithWhereWithoutProductInput | WarehouseProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: WarehouseProductScalarWhereInput | WarehouseProductScalarWhereInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DeliveryUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<DeliveryCreateWithoutProductInput, DeliveryUncheckedCreateWithoutProductInput> | DeliveryCreateWithoutProductInput[] | DeliveryUncheckedCreateWithoutProductInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutProductInput | DeliveryCreateOrConnectWithoutProductInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutProductInput | DeliveryUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: DeliveryCreateManyProductInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutProductInput | DeliveryUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutProductInput | DeliveryUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput> | StockMovementCreateWithoutProductInput[] | StockMovementUncheckedCreateWithoutProductInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutProductInput | StockMovementCreateOrConnectWithoutProductInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutProductInput | StockMovementUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: StockMovementCreateManyProductInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutProductInput | StockMovementUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutProductInput | StockMovementUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type WarehouseProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<WarehouseProductCreateWithoutProductInput, WarehouseProductUncheckedCreateWithoutProductInput> | WarehouseProductCreateWithoutProductInput[] | WarehouseProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: WarehouseProductCreateOrConnectWithoutProductInput | WarehouseProductCreateOrConnectWithoutProductInput[]
    upsert?: WarehouseProductUpsertWithWhereUniqueWithoutProductInput | WarehouseProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: WarehouseProductCreateManyProductInputEnvelope
    set?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    disconnect?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    delete?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    connect?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    update?: WarehouseProductUpdateWithWhereUniqueWithoutProductInput | WarehouseProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: WarehouseProductUpdateManyWithWhereWithoutProductInput | WarehouseProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: WarehouseProductScalarWhereInput | WarehouseProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AuditLogCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PasswordResetTokenCreateNestedOneWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput
    connect?: PasswordResetTokenWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type AuditLogUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput
    connect?: PasswordResetTokenWhereUniqueInput
  }

  export type EnumOfficeFieldUpdateOperationsInput = {
    set?: $Enums.Office
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AuditLogUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PasswordResetTokenUpdateOneWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput
    upsert?: PasswordResetTokenUpsertWithoutUserInput
    disconnect?: PasswordResetTokenWhereInput | boolean
    delete?: PasswordResetTokenWhereInput | boolean
    connect?: PasswordResetTokenWhereUniqueInput
    update?: XOR<XOR<PasswordResetTokenUpdateToOneWithWhereWithoutUserInput, PasswordResetTokenUpdateWithoutUserInput>, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type AuditLogUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput> | AuditLogCreateWithoutUserInput[] | AuditLogUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AuditLogCreateOrConnectWithoutUserInput | AuditLogCreateOrConnectWithoutUserInput[]
    upsert?: AuditLogUpsertWithWhereUniqueWithoutUserInput | AuditLogUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AuditLogCreateManyUserInputEnvelope
    set?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    disconnect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    delete?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    connect?: AuditLogWhereUniqueInput | AuditLogWhereUniqueInput[]
    update?: AuditLogUpdateWithWhereUniqueWithoutUserInput | AuditLogUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AuditLogUpdateManyWithWhereWithoutUserInput | AuditLogUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
    connectOrCreate?: PasswordResetTokenCreateOrConnectWithoutUserInput
    upsert?: PasswordResetTokenUpsertWithoutUserInput
    disconnect?: PasswordResetTokenWhereInput | boolean
    delete?: PasswordResetTokenWhereInput | boolean
    connect?: PasswordResetTokenWhereUniqueInput
    update?: XOR<XOR<PasswordResetTokenUpdateToOneWithWhereWithoutUserInput, PasswordResetTokenUpdateWithoutUserInput>, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type StockMovementCreateNestedManyWithoutDestinationWarehouseInput = {
    create?: XOR<StockMovementCreateWithoutDestinationWarehouseInput, StockMovementUncheckedCreateWithoutDestinationWarehouseInput> | StockMovementCreateWithoutDestinationWarehouseInput[] | StockMovementUncheckedCreateWithoutDestinationWarehouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutDestinationWarehouseInput | StockMovementCreateOrConnectWithoutDestinationWarehouseInput[]
    createMany?: StockMovementCreateManyDestinationWarehouseInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type StockMovementCreateNestedManyWithoutOriginWareHouseInput = {
    create?: XOR<StockMovementCreateWithoutOriginWareHouseInput, StockMovementUncheckedCreateWithoutOriginWareHouseInput> | StockMovementCreateWithoutOriginWareHouseInput[] | StockMovementUncheckedCreateWithoutOriginWareHouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutOriginWareHouseInput | StockMovementCreateOrConnectWithoutOriginWareHouseInput[]
    createMany?: StockMovementCreateManyOriginWareHouseInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type WarehouseProductCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<WarehouseProductCreateWithoutWarehouseInput, WarehouseProductUncheckedCreateWithoutWarehouseInput> | WarehouseProductCreateWithoutWarehouseInput[] | WarehouseProductUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: WarehouseProductCreateOrConnectWithoutWarehouseInput | WarehouseProductCreateOrConnectWithoutWarehouseInput[]
    createMany?: WarehouseProductCreateManyWarehouseInputEnvelope
    connect?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
  }

  export type DeliveryCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<DeliveryCreateWithoutWarehouseInput, DeliveryUncheckedCreateWithoutWarehouseInput> | DeliveryCreateWithoutWarehouseInput[] | DeliveryUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutWarehouseInput | DeliveryCreateOrConnectWithoutWarehouseInput[]
    createMany?: DeliveryCreateManyWarehouseInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutDestinationWarehouseInput = {
    create?: XOR<StockMovementCreateWithoutDestinationWarehouseInput, StockMovementUncheckedCreateWithoutDestinationWarehouseInput> | StockMovementCreateWithoutDestinationWarehouseInput[] | StockMovementUncheckedCreateWithoutDestinationWarehouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutDestinationWarehouseInput | StockMovementCreateOrConnectWithoutDestinationWarehouseInput[]
    createMany?: StockMovementCreateManyDestinationWarehouseInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type StockMovementUncheckedCreateNestedManyWithoutOriginWareHouseInput = {
    create?: XOR<StockMovementCreateWithoutOriginWareHouseInput, StockMovementUncheckedCreateWithoutOriginWareHouseInput> | StockMovementCreateWithoutOriginWareHouseInput[] | StockMovementUncheckedCreateWithoutOriginWareHouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutOriginWareHouseInput | StockMovementCreateOrConnectWithoutOriginWareHouseInput[]
    createMany?: StockMovementCreateManyOriginWareHouseInputEnvelope
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
  }

  export type WarehouseProductUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<WarehouseProductCreateWithoutWarehouseInput, WarehouseProductUncheckedCreateWithoutWarehouseInput> | WarehouseProductCreateWithoutWarehouseInput[] | WarehouseProductUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: WarehouseProductCreateOrConnectWithoutWarehouseInput | WarehouseProductCreateOrConnectWithoutWarehouseInput[]
    createMany?: WarehouseProductCreateManyWarehouseInputEnvelope
    connect?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutWarehouseInput = {
    create?: XOR<DeliveryCreateWithoutWarehouseInput, DeliveryUncheckedCreateWithoutWarehouseInput> | DeliveryCreateWithoutWarehouseInput[] | DeliveryUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutWarehouseInput | DeliveryCreateOrConnectWithoutWarehouseInput[]
    createMany?: DeliveryCreateManyWarehouseInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type StockMovementUpdateManyWithoutDestinationWarehouseNestedInput = {
    create?: XOR<StockMovementCreateWithoutDestinationWarehouseInput, StockMovementUncheckedCreateWithoutDestinationWarehouseInput> | StockMovementCreateWithoutDestinationWarehouseInput[] | StockMovementUncheckedCreateWithoutDestinationWarehouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutDestinationWarehouseInput | StockMovementCreateOrConnectWithoutDestinationWarehouseInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutDestinationWarehouseInput | StockMovementUpsertWithWhereUniqueWithoutDestinationWarehouseInput[]
    createMany?: StockMovementCreateManyDestinationWarehouseInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutDestinationWarehouseInput | StockMovementUpdateWithWhereUniqueWithoutDestinationWarehouseInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutDestinationWarehouseInput | StockMovementUpdateManyWithWhereWithoutDestinationWarehouseInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type StockMovementUpdateManyWithoutOriginWareHouseNestedInput = {
    create?: XOR<StockMovementCreateWithoutOriginWareHouseInput, StockMovementUncheckedCreateWithoutOriginWareHouseInput> | StockMovementCreateWithoutOriginWareHouseInput[] | StockMovementUncheckedCreateWithoutOriginWareHouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutOriginWareHouseInput | StockMovementCreateOrConnectWithoutOriginWareHouseInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutOriginWareHouseInput | StockMovementUpsertWithWhereUniqueWithoutOriginWareHouseInput[]
    createMany?: StockMovementCreateManyOriginWareHouseInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutOriginWareHouseInput | StockMovementUpdateWithWhereUniqueWithoutOriginWareHouseInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutOriginWareHouseInput | StockMovementUpdateManyWithWhereWithoutOriginWareHouseInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type WarehouseProductUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<WarehouseProductCreateWithoutWarehouseInput, WarehouseProductUncheckedCreateWithoutWarehouseInput> | WarehouseProductCreateWithoutWarehouseInput[] | WarehouseProductUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: WarehouseProductCreateOrConnectWithoutWarehouseInput | WarehouseProductCreateOrConnectWithoutWarehouseInput[]
    upsert?: WarehouseProductUpsertWithWhereUniqueWithoutWarehouseInput | WarehouseProductUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: WarehouseProductCreateManyWarehouseInputEnvelope
    set?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    disconnect?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    delete?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    connect?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    update?: WarehouseProductUpdateWithWhereUniqueWithoutWarehouseInput | WarehouseProductUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: WarehouseProductUpdateManyWithWhereWithoutWarehouseInput | WarehouseProductUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: WarehouseProductScalarWhereInput | WarehouseProductScalarWhereInput[]
  }

  export type DeliveryUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<DeliveryCreateWithoutWarehouseInput, DeliveryUncheckedCreateWithoutWarehouseInput> | DeliveryCreateWithoutWarehouseInput[] | DeliveryUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutWarehouseInput | DeliveryCreateOrConnectWithoutWarehouseInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutWarehouseInput | DeliveryUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: DeliveryCreateManyWarehouseInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutWarehouseInput | DeliveryUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutWarehouseInput | DeliveryUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutDestinationWarehouseNestedInput = {
    create?: XOR<StockMovementCreateWithoutDestinationWarehouseInput, StockMovementUncheckedCreateWithoutDestinationWarehouseInput> | StockMovementCreateWithoutDestinationWarehouseInput[] | StockMovementUncheckedCreateWithoutDestinationWarehouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutDestinationWarehouseInput | StockMovementCreateOrConnectWithoutDestinationWarehouseInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutDestinationWarehouseInput | StockMovementUpsertWithWhereUniqueWithoutDestinationWarehouseInput[]
    createMany?: StockMovementCreateManyDestinationWarehouseInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutDestinationWarehouseInput | StockMovementUpdateWithWhereUniqueWithoutDestinationWarehouseInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutDestinationWarehouseInput | StockMovementUpdateManyWithWhereWithoutDestinationWarehouseInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type StockMovementUncheckedUpdateManyWithoutOriginWareHouseNestedInput = {
    create?: XOR<StockMovementCreateWithoutOriginWareHouseInput, StockMovementUncheckedCreateWithoutOriginWareHouseInput> | StockMovementCreateWithoutOriginWareHouseInput[] | StockMovementUncheckedCreateWithoutOriginWareHouseInput[]
    connectOrCreate?: StockMovementCreateOrConnectWithoutOriginWareHouseInput | StockMovementCreateOrConnectWithoutOriginWareHouseInput[]
    upsert?: StockMovementUpsertWithWhereUniqueWithoutOriginWareHouseInput | StockMovementUpsertWithWhereUniqueWithoutOriginWareHouseInput[]
    createMany?: StockMovementCreateManyOriginWareHouseInputEnvelope
    set?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    disconnect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    delete?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    connect?: StockMovementWhereUniqueInput | StockMovementWhereUniqueInput[]
    update?: StockMovementUpdateWithWhereUniqueWithoutOriginWareHouseInput | StockMovementUpdateWithWhereUniqueWithoutOriginWareHouseInput[]
    updateMany?: StockMovementUpdateManyWithWhereWithoutOriginWareHouseInput | StockMovementUpdateManyWithWhereWithoutOriginWareHouseInput[]
    deleteMany?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
  }

  export type WarehouseProductUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<WarehouseProductCreateWithoutWarehouseInput, WarehouseProductUncheckedCreateWithoutWarehouseInput> | WarehouseProductCreateWithoutWarehouseInput[] | WarehouseProductUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: WarehouseProductCreateOrConnectWithoutWarehouseInput | WarehouseProductCreateOrConnectWithoutWarehouseInput[]
    upsert?: WarehouseProductUpsertWithWhereUniqueWithoutWarehouseInput | WarehouseProductUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: WarehouseProductCreateManyWarehouseInputEnvelope
    set?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    disconnect?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    delete?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    connect?: WarehouseProductWhereUniqueInput | WarehouseProductWhereUniqueInput[]
    update?: WarehouseProductUpdateWithWhereUniqueWithoutWarehouseInput | WarehouseProductUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: WarehouseProductUpdateManyWithWhereWithoutWarehouseInput | WarehouseProductUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: WarehouseProductScalarWhereInput | WarehouseProductScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutWarehouseNestedInput = {
    create?: XOR<DeliveryCreateWithoutWarehouseInput, DeliveryUncheckedCreateWithoutWarehouseInput> | DeliveryCreateWithoutWarehouseInput[] | DeliveryUncheckedCreateWithoutWarehouseInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutWarehouseInput | DeliveryCreateOrConnectWithoutWarehouseInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutWarehouseInput | DeliveryUpsertWithWhereUniqueWithoutWarehouseInput[]
    createMany?: DeliveryCreateManyWarehouseInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutWarehouseInput | DeliveryUpdateWithWhereUniqueWithoutWarehouseInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutWarehouseInput | DeliveryUpdateManyWithWhereWithoutWarehouseInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutWarehouseProductInput = {
    create?: XOR<ProductCreateWithoutWarehouseProductInput, ProductUncheckedCreateWithoutWarehouseProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutWarehouseProductInput
    connect?: ProductWhereUniqueInput
  }

  export type WareHouseCreateNestedOneWithoutWarehouseProductInput = {
    create?: XOR<WareHouseCreateWithoutWarehouseProductInput, WareHouseUncheckedCreateWithoutWarehouseProductInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutWarehouseProductInput
    connect?: WareHouseWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutWarehouseProductNestedInput = {
    create?: XOR<ProductCreateWithoutWarehouseProductInput, ProductUncheckedCreateWithoutWarehouseProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutWarehouseProductInput
    upsert?: ProductUpsertWithoutWarehouseProductInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutWarehouseProductInput, ProductUpdateWithoutWarehouseProductInput>, ProductUncheckedUpdateWithoutWarehouseProductInput>
  }

  export type WareHouseUpdateOneRequiredWithoutWarehouseProductNestedInput = {
    create?: XOR<WareHouseCreateWithoutWarehouseProductInput, WareHouseUncheckedCreateWithoutWarehouseProductInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutWarehouseProductInput
    upsert?: WareHouseUpsertWithoutWarehouseProductInput
    connect?: WareHouseWhereUniqueInput
    update?: XOR<XOR<WareHouseUpdateToOneWithWhereWithoutWarehouseProductInput, WareHouseUpdateWithoutWarehouseProductInput>, WareHouseUncheckedUpdateWithoutWarehouseProductInput>
  }

  export type WareHouseCreateNestedOneWithoutStockMovementsDestinationInput = {
    create?: XOR<WareHouseCreateWithoutStockMovementsDestinationInput, WareHouseUncheckedCreateWithoutStockMovementsDestinationInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutStockMovementsDestinationInput
    connect?: WareHouseWhereUniqueInput
  }

  export type WareHouseCreateNestedOneWithoutStockMovementsOriginInput = {
    create?: XOR<WareHouseCreateWithoutStockMovementsOriginInput, WareHouseUncheckedCreateWithoutStockMovementsOriginInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutStockMovementsOriginInput
    connect?: WareHouseWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutStockMovementsInput = {
    create?: XOR<ProductCreateWithoutStockMovementsInput, ProductUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockMovementsInput
    connect?: ProductWhereUniqueInput
  }

  export type EnumMovementTypeFieldUpdateOperationsInput = {
    set?: $Enums.MovementType
  }

  export type EnumMovementStatusFieldUpdateOperationsInput = {
    set?: $Enums.MovementStatus
  }

  export type WareHouseUpdateOneWithoutStockMovementsDestinationNestedInput = {
    create?: XOR<WareHouseCreateWithoutStockMovementsDestinationInput, WareHouseUncheckedCreateWithoutStockMovementsDestinationInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutStockMovementsDestinationInput
    upsert?: WareHouseUpsertWithoutStockMovementsDestinationInput
    disconnect?: WareHouseWhereInput | boolean
    delete?: WareHouseWhereInput | boolean
    connect?: WareHouseWhereUniqueInput
    update?: XOR<XOR<WareHouseUpdateToOneWithWhereWithoutStockMovementsDestinationInput, WareHouseUpdateWithoutStockMovementsDestinationInput>, WareHouseUncheckedUpdateWithoutStockMovementsDestinationInput>
  }

  export type WareHouseUpdateOneWithoutStockMovementsOriginNestedInput = {
    create?: XOR<WareHouseCreateWithoutStockMovementsOriginInput, WareHouseUncheckedCreateWithoutStockMovementsOriginInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutStockMovementsOriginInput
    upsert?: WareHouseUpsertWithoutStockMovementsOriginInput
    disconnect?: WareHouseWhereInput | boolean
    delete?: WareHouseWhereInput | boolean
    connect?: WareHouseWhereUniqueInput
    update?: XOR<XOR<WareHouseUpdateToOneWithWhereWithoutStockMovementsOriginInput, WareHouseUpdateWithoutStockMovementsOriginInput>, WareHouseUncheckedUpdateWithoutStockMovementsOriginInput>
  }

  export type ProductUpdateOneRequiredWithoutStockMovementsNestedInput = {
    create?: XOR<ProductCreateWithoutStockMovementsInput, ProductUncheckedCreateWithoutStockMovementsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutStockMovementsInput
    upsert?: ProductUpsertWithoutStockMovementsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutStockMovementsInput, ProductUpdateWithoutStockMovementsInput>, ProductUncheckedUpdateWithoutStockMovementsInput>
  }

  export type DeliveryCreateNestedManyWithoutSupplierInput = {
    create?: XOR<DeliveryCreateWithoutSupplierInput, DeliveryUncheckedCreateWithoutSupplierInput> | DeliveryCreateWithoutSupplierInput[] | DeliveryUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutSupplierInput | DeliveryCreateOrConnectWithoutSupplierInput[]
    createMany?: DeliveryCreateManySupplierInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type ProductCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SupplierInvoiceCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierInvoiceCreateWithoutSupplierInput, SupplierInvoiceUncheckedCreateWithoutSupplierInput> | SupplierInvoiceCreateWithoutSupplierInput[] | SupplierInvoiceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierInvoiceCreateOrConnectWithoutSupplierInput | SupplierInvoiceCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierInvoiceCreateManySupplierInputEnvelope
    connect?: SupplierInvoiceWhereUniqueInput | SupplierInvoiceWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<DeliveryCreateWithoutSupplierInput, DeliveryUncheckedCreateWithoutSupplierInput> | DeliveryCreateWithoutSupplierInput[] | DeliveryUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutSupplierInput | DeliveryCreateOrConnectWithoutSupplierInput[]
    createMany?: DeliveryCreateManySupplierInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type SupplierInvoiceUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<SupplierInvoiceCreateWithoutSupplierInput, SupplierInvoiceUncheckedCreateWithoutSupplierInput> | SupplierInvoiceCreateWithoutSupplierInput[] | SupplierInvoiceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierInvoiceCreateOrConnectWithoutSupplierInput | SupplierInvoiceCreateOrConnectWithoutSupplierInput[]
    createMany?: SupplierInvoiceCreateManySupplierInputEnvelope
    connect?: SupplierInvoiceWhereUniqueInput | SupplierInvoiceWhereUniqueInput[]
  }

  export type DeliveryUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<DeliveryCreateWithoutSupplierInput, DeliveryUncheckedCreateWithoutSupplierInput> | DeliveryCreateWithoutSupplierInput[] | DeliveryUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutSupplierInput | DeliveryCreateOrConnectWithoutSupplierInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutSupplierInput | DeliveryUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: DeliveryCreateManySupplierInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutSupplierInput | DeliveryUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutSupplierInput | DeliveryUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type ProductUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSupplierInput | ProductUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSupplierInput | ProductUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSupplierInput | ProductUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SupplierInvoiceUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierInvoiceCreateWithoutSupplierInput, SupplierInvoiceUncheckedCreateWithoutSupplierInput> | SupplierInvoiceCreateWithoutSupplierInput[] | SupplierInvoiceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierInvoiceCreateOrConnectWithoutSupplierInput | SupplierInvoiceCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierInvoiceUpsertWithWhereUniqueWithoutSupplierInput | SupplierInvoiceUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierInvoiceCreateManySupplierInputEnvelope
    set?: SupplierInvoiceWhereUniqueInput | SupplierInvoiceWhereUniqueInput[]
    disconnect?: SupplierInvoiceWhereUniqueInput | SupplierInvoiceWhereUniqueInput[]
    delete?: SupplierInvoiceWhereUniqueInput | SupplierInvoiceWhereUniqueInput[]
    connect?: SupplierInvoiceWhereUniqueInput | SupplierInvoiceWhereUniqueInput[]
    update?: SupplierInvoiceUpdateWithWhereUniqueWithoutSupplierInput | SupplierInvoiceUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierInvoiceUpdateManyWithWhereWithoutSupplierInput | SupplierInvoiceUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierInvoiceScalarWhereInput | SupplierInvoiceScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<DeliveryCreateWithoutSupplierInput, DeliveryUncheckedCreateWithoutSupplierInput> | DeliveryCreateWithoutSupplierInput[] | DeliveryUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutSupplierInput | DeliveryCreateOrConnectWithoutSupplierInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutSupplierInput | DeliveryUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: DeliveryCreateManySupplierInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutSupplierInput | DeliveryUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutSupplierInput | DeliveryUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput> | ProductCreateWithoutSupplierInput[] | ProductUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutSupplierInput | ProductCreateOrConnectWithoutSupplierInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutSupplierInput | ProductUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: ProductCreateManySupplierInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutSupplierInput | ProductUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutSupplierInput | ProductUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type SupplierInvoiceUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<SupplierInvoiceCreateWithoutSupplierInput, SupplierInvoiceUncheckedCreateWithoutSupplierInput> | SupplierInvoiceCreateWithoutSupplierInput[] | SupplierInvoiceUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: SupplierInvoiceCreateOrConnectWithoutSupplierInput | SupplierInvoiceCreateOrConnectWithoutSupplierInput[]
    upsert?: SupplierInvoiceUpsertWithWhereUniqueWithoutSupplierInput | SupplierInvoiceUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: SupplierInvoiceCreateManySupplierInputEnvelope
    set?: SupplierInvoiceWhereUniqueInput | SupplierInvoiceWhereUniqueInput[]
    disconnect?: SupplierInvoiceWhereUniqueInput | SupplierInvoiceWhereUniqueInput[]
    delete?: SupplierInvoiceWhereUniqueInput | SupplierInvoiceWhereUniqueInput[]
    connect?: SupplierInvoiceWhereUniqueInput | SupplierInvoiceWhereUniqueInput[]
    update?: SupplierInvoiceUpdateWithWhereUniqueWithoutSupplierInput | SupplierInvoiceUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: SupplierInvoiceUpdateManyWithWhereWithoutSupplierInput | SupplierInvoiceUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: SupplierInvoiceScalarWhereInput | SupplierInvoiceScalarWhereInput[]
  }

  export type SupplierCreateNestedOneWithoutSupplierInvoiceInput = {
    create?: XOR<SupplierCreateWithoutSupplierInvoiceInput, SupplierUncheckedCreateWithoutSupplierInvoiceInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutSupplierInvoiceInput
    connect?: SupplierWhereUniqueInput
  }

  export type DeliveryCreateNestedManyWithoutSupplierInvoiceInput = {
    create?: XOR<DeliveryCreateWithoutSupplierInvoiceInput, DeliveryUncheckedCreateWithoutSupplierInvoiceInput> | DeliveryCreateWithoutSupplierInvoiceInput[] | DeliveryUncheckedCreateWithoutSupplierInvoiceInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutSupplierInvoiceInput | DeliveryCreateOrConnectWithoutSupplierInvoiceInput[]
    createMany?: DeliveryCreateManySupplierInvoiceInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type DeliveryUncheckedCreateNestedManyWithoutSupplierInvoiceInput = {
    create?: XOR<DeliveryCreateWithoutSupplierInvoiceInput, DeliveryUncheckedCreateWithoutSupplierInvoiceInput> | DeliveryCreateWithoutSupplierInvoiceInput[] | DeliveryUncheckedCreateWithoutSupplierInvoiceInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutSupplierInvoiceInput | DeliveryCreateOrConnectWithoutSupplierInvoiceInput[]
    createMany?: DeliveryCreateManySupplierInvoiceInputEnvelope
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EnumInvoiceStatusFieldUpdateOperationsInput = {
    set?: $Enums.InvoiceStatus
  }

  export type SupplierUpdateOneRequiredWithoutSupplierInvoiceNestedInput = {
    create?: XOR<SupplierCreateWithoutSupplierInvoiceInput, SupplierUncheckedCreateWithoutSupplierInvoiceInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutSupplierInvoiceInput
    upsert?: SupplierUpsertWithoutSupplierInvoiceInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutSupplierInvoiceInput, SupplierUpdateWithoutSupplierInvoiceInput>, SupplierUncheckedUpdateWithoutSupplierInvoiceInput>
  }

  export type DeliveryUpdateManyWithoutSupplierInvoiceNestedInput = {
    create?: XOR<DeliveryCreateWithoutSupplierInvoiceInput, DeliveryUncheckedCreateWithoutSupplierInvoiceInput> | DeliveryCreateWithoutSupplierInvoiceInput[] | DeliveryUncheckedCreateWithoutSupplierInvoiceInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutSupplierInvoiceInput | DeliveryCreateOrConnectWithoutSupplierInvoiceInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutSupplierInvoiceInput | DeliveryUpsertWithWhereUniqueWithoutSupplierInvoiceInput[]
    createMany?: DeliveryCreateManySupplierInvoiceInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutSupplierInvoiceInput | DeliveryUpdateWithWhereUniqueWithoutSupplierInvoiceInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutSupplierInvoiceInput | DeliveryUpdateManyWithWhereWithoutSupplierInvoiceInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type DeliveryUncheckedUpdateManyWithoutSupplierInvoiceNestedInput = {
    create?: XOR<DeliveryCreateWithoutSupplierInvoiceInput, DeliveryUncheckedCreateWithoutSupplierInvoiceInput> | DeliveryCreateWithoutSupplierInvoiceInput[] | DeliveryUncheckedCreateWithoutSupplierInvoiceInput[]
    connectOrCreate?: DeliveryCreateOrConnectWithoutSupplierInvoiceInput | DeliveryCreateOrConnectWithoutSupplierInvoiceInput[]
    upsert?: DeliveryUpsertWithWhereUniqueWithoutSupplierInvoiceInput | DeliveryUpsertWithWhereUniqueWithoutSupplierInvoiceInput[]
    createMany?: DeliveryCreateManySupplierInvoiceInputEnvelope
    set?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    disconnect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    delete?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    connect?: DeliveryWhereUniqueInput | DeliveryWhereUniqueInput[]
    update?: DeliveryUpdateWithWhereUniqueWithoutSupplierInvoiceInput | DeliveryUpdateWithWhereUniqueWithoutSupplierInvoiceInput[]
    updateMany?: DeliveryUpdateManyWithWhereWithoutSupplierInvoiceInput | DeliveryUpdateManyWithWhereWithoutSupplierInvoiceInput[]
    deleteMany?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAuditLogInput = {
    create?: XOR<UserCreateWithoutAuditLogInput, UserUncheckedCreateWithoutAuditLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogInput, UserUncheckedCreateWithoutAuditLogInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogInput
    upsert?: UserUpsertWithoutAuditLogInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogInput, UserUpdateWithoutAuditLogInput>, UserUncheckedUpdateWithoutAuditLogInput>
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutDeliveryInput = {
    create?: XOR<ProductCreateWithoutDeliveryInput, ProductUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDeliveryInput
    connect?: ProductWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutDeliveryInput = {
    create?: XOR<SupplierCreateWithoutDeliveryInput, SupplierUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutDeliveryInput
    connect?: SupplierWhereUniqueInput
  }

  export type WareHouseCreateNestedOneWithoutDeliveryInput = {
    create?: XOR<WareHouseCreateWithoutDeliveryInput, WareHouseUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutDeliveryInput
    connect?: WareHouseWhereUniqueInput
  }

  export type SupplierInvoiceCreateNestedOneWithoutDeliveryInput = {
    create?: XOR<SupplierInvoiceCreateWithoutDeliveryInput, SupplierInvoiceUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: SupplierInvoiceCreateOrConnectWithoutDeliveryInput
    connect?: SupplierInvoiceWhereUniqueInput
  }

  export type EnumDeliveryStatusFieldUpdateOperationsInput = {
    set?: $Enums.DeliveryStatus
  }

  export type ProductUpdateOneRequiredWithoutDeliveryNestedInput = {
    create?: XOR<ProductCreateWithoutDeliveryInput, ProductUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: ProductCreateOrConnectWithoutDeliveryInput
    upsert?: ProductUpsertWithoutDeliveryInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutDeliveryInput, ProductUpdateWithoutDeliveryInput>, ProductUncheckedUpdateWithoutDeliveryInput>
  }

  export type SupplierUpdateOneRequiredWithoutDeliveryNestedInput = {
    create?: XOR<SupplierCreateWithoutDeliveryInput, SupplierUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutDeliveryInput
    upsert?: SupplierUpsertWithoutDeliveryInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutDeliveryInput, SupplierUpdateWithoutDeliveryInput>, SupplierUncheckedUpdateWithoutDeliveryInput>
  }

  export type WareHouseUpdateOneRequiredWithoutDeliveryNestedInput = {
    create?: XOR<WareHouseCreateWithoutDeliveryInput, WareHouseUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: WareHouseCreateOrConnectWithoutDeliveryInput
    upsert?: WareHouseUpsertWithoutDeliveryInput
    connect?: WareHouseWhereUniqueInput
    update?: XOR<XOR<WareHouseUpdateToOneWithWhereWithoutDeliveryInput, WareHouseUpdateWithoutDeliveryInput>, WareHouseUncheckedUpdateWithoutDeliveryInput>
  }

  export type SupplierInvoiceUpdateOneWithoutDeliveryNestedInput = {
    create?: XOR<SupplierInvoiceCreateWithoutDeliveryInput, SupplierInvoiceUncheckedCreateWithoutDeliveryInput>
    connectOrCreate?: SupplierInvoiceCreateOrConnectWithoutDeliveryInput
    upsert?: SupplierInvoiceUpsertWithoutDeliveryInput
    disconnect?: SupplierInvoiceWhereInput | boolean
    delete?: SupplierInvoiceWhereInput | boolean
    connect?: SupplierInvoiceWhereUniqueInput
    update?: XOR<XOR<SupplierInvoiceUpdateToOneWithWhereWithoutDeliveryInput, SupplierInvoiceUpdateWithoutDeliveryInput>, SupplierInvoiceUncheckedUpdateWithoutDeliveryInput>
  }

  export type UserCreateNestedOneWithoutPasswordResetTokenInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokenInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutPasswordResetTokenNestedInput = {
    create?: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    connectOrCreate?: UserCreateOrConnectWithoutPasswordResetTokenInput
    upsert?: UserUpsertWithoutPasswordResetTokenInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPasswordResetTokenInput, UserUpdateWithoutPasswordResetTokenInput>, UserUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUnitTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeFilter<$PrismaModel> | $Enums.UnitType
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumUsageStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UsageStatus | EnumUsageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UsageStatus[] | ListEnumUsageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsageStatus[] | ListEnumUsageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUsageStatusFilter<$PrismaModel> | $Enums.UsageStatus
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UnitType | EnumUnitTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UnitType[] | ListEnumUnitTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUnitTypeWithAggregatesFilter<$PrismaModel> | $Enums.UnitType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUnitTypeFilter<$PrismaModel>
    _max?: NestedEnumUnitTypeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumUsageStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UsageStatus | EnumUsageStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UsageStatus[] | ListEnumUsageStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UsageStatus[] | ListEnumUsageStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUsageStatusWithAggregatesFilter<$PrismaModel> | $Enums.UsageStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUsageStatusFilter<$PrismaModel>
    _max?: NestedEnumUsageStatusFilter<$PrismaModel>
  }

  export type NestedEnumOfficeFilter<$PrismaModel = never> = {
    equals?: $Enums.Office | EnumOfficeFieldRefInput<$PrismaModel>
    in?: $Enums.Office[] | ListEnumOfficeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Office[] | ListEnumOfficeFieldRefInput<$PrismaModel>
    not?: NestedEnumOfficeFilter<$PrismaModel> | $Enums.Office
  }

  export type NestedEnumOfficeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Office | EnumOfficeFieldRefInput<$PrismaModel>
    in?: $Enums.Office[] | ListEnumOfficeFieldRefInput<$PrismaModel>
    notIn?: $Enums.Office[] | ListEnumOfficeFieldRefInput<$PrismaModel>
    not?: NestedEnumOfficeWithAggregatesFilter<$PrismaModel> | $Enums.Office
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOfficeFilter<$PrismaModel>
    _max?: NestedEnumOfficeFilter<$PrismaModel>
  }

  export type NestedEnumMovementTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeFilter<$PrismaModel> | $Enums.MovementType
  }

  export type NestedEnumMovementStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementStatus | EnumMovementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementStatusFilter<$PrismaModel> | $Enums.MovementStatus
  }

  export type NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementType | EnumMovementTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementType[] | ListEnumMovementTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementTypeWithAggregatesFilter<$PrismaModel> | $Enums.MovementType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementTypeFilter<$PrismaModel>
    _max?: NestedEnumMovementTypeFilter<$PrismaModel>
  }

  export type NestedEnumMovementStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MovementStatus | EnumMovementStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MovementStatus[] | ListEnumMovementStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMovementStatusWithAggregatesFilter<$PrismaModel> | $Enums.MovementStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMovementStatusFilter<$PrismaModel>
    _max?: NestedEnumMovementStatusFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedEnumInvoiceStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusFilter<$PrismaModel> | $Enums.InvoiceStatus
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InvoiceStatus | EnumInvoiceStatusFieldRefInput<$PrismaModel>
    in?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.InvoiceStatus[] | ListEnumInvoiceStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumInvoiceStatusWithAggregatesFilter<$PrismaModel> | $Enums.InvoiceStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInvoiceStatusFilter<$PrismaModel>
    _max?: NestedEnumInvoiceStatusFilter<$PrismaModel>
  }

  export type NestedEnumDeliveryStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusFilter<$PrismaModel> | $Enums.DeliveryStatus
  }

  export type NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DeliveryStatus | EnumDeliveryStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DeliveryStatus[] | ListEnumDeliveryStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDeliveryStatusWithAggregatesFilter<$PrismaModel> | $Enums.DeliveryStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDeliveryStatusFilter<$PrismaModel>
    _max?: NestedEnumDeliveryStatusFilter<$PrismaModel>
  }

  export type DeliveryCreateWithoutProductInput = {
    id?: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutDeliveryInput
    warehouse: WareHouseCreateNestedOneWithoutDeliveryInput
    supplierInvoice?: SupplierInvoiceCreateNestedOneWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateWithoutProductInput = {
    id?: string
    supplierId: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    warehouseId: string
    supplierInvoiceId?: string | null
  }

  export type DeliveryCreateOrConnectWithoutProductInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutProductInput, DeliveryUncheckedCreateWithoutProductInput>
  }

  export type DeliveryCreateManyProductInputEnvelope = {
    data: DeliveryCreateManyProductInput | DeliveryCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CategoryCreateWithoutProductsInput = {
    id?: string
    name: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    createAt?: Date | string
    updatedAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type SupplierCreateWithoutProductsInput = {
    id?: string
    name: string
    email: string
    contactPhone: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryTime?: Date | string | null
    delivery?: DeliveryCreateNestedManyWithoutSupplierInput
    SupplierInvoice?: SupplierInvoiceCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutProductsInput = {
    id?: string
    name: string
    email: string
    contactPhone: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryTime?: Date | string | null
    delivery?: DeliveryUncheckedCreateNestedManyWithoutSupplierInput
    SupplierInvoice?: SupplierInvoiceUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutProductsInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutProductsInput, SupplierUncheckedCreateWithoutProductsInput>
  }

  export type StockMovementCreateWithoutProductInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    createdAt?: Date | string
    notes?: string | null
    status?: $Enums.MovementStatus
    quantityAfter?: number | null
    quantityBefore?: number | null
    destinationWarehouse?: WareHouseCreateNestedOneWithoutStockMovementsDestinationInput
    originWareHouse?: WareHouseCreateNestedOneWithoutStockMovementsOriginInput
  }

  export type StockMovementUncheckedCreateWithoutProductInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    createdAt?: Date | string
    notes?: string | null
    destinationWarehouseId?: string | null
    originWarehouseId?: string | null
    status?: $Enums.MovementStatus
    quantityAfter?: number | null
    quantityBefore?: number | null
  }

  export type StockMovementCreateOrConnectWithoutProductInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput>
  }

  export type StockMovementCreateManyProductInputEnvelope = {
    data: StockMovementCreateManyProductInput | StockMovementCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseProductCreateWithoutProductInput = {
    quantity?: number
    warehouse: WareHouseCreateNestedOneWithoutWarehouseProductInput
  }

  export type WarehouseProductUncheckedCreateWithoutProductInput = {
    warehouseId: string
    quantity?: number
  }

  export type WarehouseProductCreateOrConnectWithoutProductInput = {
    where: WarehouseProductWhereUniqueInput
    create: XOR<WarehouseProductCreateWithoutProductInput, WarehouseProductUncheckedCreateWithoutProductInput>
  }

  export type WarehouseProductCreateManyProductInputEnvelope = {
    data: WarehouseProductCreateManyProductInput | WarehouseProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryUpsertWithWhereUniqueWithoutProductInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutProductInput, DeliveryUncheckedUpdateWithoutProductInput>
    create: XOR<DeliveryCreateWithoutProductInput, DeliveryUncheckedCreateWithoutProductInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutProductInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutProductInput, DeliveryUncheckedUpdateWithoutProductInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutProductInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutProductInput>
  }

  export type DeliveryScalarWhereInput = {
    AND?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    OR?: DeliveryScalarWhereInput[]
    NOT?: DeliveryScalarWhereInput | DeliveryScalarWhereInput[]
    id?: StringFilter<"Delivery"> | string
    productId?: StringFilter<"Delivery"> | string
    supplierId?: StringFilter<"Delivery"> | string
    quantity?: IntFilter<"Delivery"> | number
    expectedAt?: DateTimeFilter<"Delivery"> | Date | string
    updatedAt?: DateTimeFilter<"Delivery"> | Date | string
    status?: EnumDeliveryStatusFilter<"Delivery"> | $Enums.DeliveryStatus
    createdAt?: DateTimeFilter<"Delivery"> | Date | string
    warehouseId?: StringFilter<"Delivery"> | string
    supplierInvoiceId?: StringNullableFilter<"Delivery"> | string | null
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUpsertWithoutProductsInput = {
    update: XOR<SupplierUpdateWithoutProductsInput, SupplierUncheckedUpdateWithoutProductsInput>
    create: XOR<SupplierCreateWithoutProductsInput, SupplierUncheckedCreateWithoutProductsInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutProductsInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutProductsInput, SupplierUncheckedUpdateWithoutProductsInput>
  }

  export type SupplierUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery?: DeliveryUpdateManyWithoutSupplierNestedInput
    SupplierInvoice?: SupplierInvoiceUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutProductsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery?: DeliveryUncheckedUpdateManyWithoutSupplierNestedInput
    SupplierInvoice?: SupplierInvoiceUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type StockMovementUpsertWithWhereUniqueWithoutProductInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutProductInput, StockMovementUncheckedUpdateWithoutProductInput>
    create: XOR<StockMovementCreateWithoutProductInput, StockMovementUncheckedCreateWithoutProductInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutProductInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutProductInput, StockMovementUncheckedUpdateWithoutProductInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutProductInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutProductInput>
  }

  export type StockMovementScalarWhereInput = {
    AND?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    OR?: StockMovementScalarWhereInput[]
    NOT?: StockMovementScalarWhereInput | StockMovementScalarWhereInput[]
    id?: StringFilter<"StockMovement"> | string
    type?: EnumMovementTypeFilter<"StockMovement"> | $Enums.MovementType
    quantity?: IntFilter<"StockMovement"> | number
    productId?: StringFilter<"StockMovement"> | string
    createdAt?: DateTimeFilter<"StockMovement"> | Date | string
    notes?: StringNullableFilter<"StockMovement"> | string | null
    destinationWarehouseId?: StringNullableFilter<"StockMovement"> | string | null
    originWarehouseId?: StringNullableFilter<"StockMovement"> | string | null
    status?: EnumMovementStatusFilter<"StockMovement"> | $Enums.MovementStatus
    quantityAfter?: IntNullableFilter<"StockMovement"> | number | null
    quantityBefore?: IntNullableFilter<"StockMovement"> | number | null
  }

  export type WarehouseProductUpsertWithWhereUniqueWithoutProductInput = {
    where: WarehouseProductWhereUniqueInput
    update: XOR<WarehouseProductUpdateWithoutProductInput, WarehouseProductUncheckedUpdateWithoutProductInput>
    create: XOR<WarehouseProductCreateWithoutProductInput, WarehouseProductUncheckedCreateWithoutProductInput>
  }

  export type WarehouseProductUpdateWithWhereUniqueWithoutProductInput = {
    where: WarehouseProductWhereUniqueInput
    data: XOR<WarehouseProductUpdateWithoutProductInput, WarehouseProductUncheckedUpdateWithoutProductInput>
  }

  export type WarehouseProductUpdateManyWithWhereWithoutProductInput = {
    where: WarehouseProductScalarWhereInput
    data: XOR<WarehouseProductUpdateManyMutationInput, WarehouseProductUncheckedUpdateManyWithoutProductInput>
  }

  export type WarehouseProductScalarWhereInput = {
    AND?: WarehouseProductScalarWhereInput | WarehouseProductScalarWhereInput[]
    OR?: WarehouseProductScalarWhereInput[]
    NOT?: WarehouseProductScalarWhereInput | WarehouseProductScalarWhereInput[]
    warehouseId?: StringFilter<"WarehouseProduct"> | string
    productId?: StringFilter<"WarehouseProduct"> | string
    quantity?: IntFilter<"WarehouseProduct"> | number
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    office?: $Enums.Office
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    department?: string | null
    description?: string | null
    phone?: string | null
    AuditLog?: AuditLogCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name: string
    email: string
    office?: $Enums.Office
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    department?: string | null
    description?: string | null
    phone?: string | null
    AuditLog?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    office?: EnumOfficeFieldUpdateOperationsInput | $Enums.Office
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AuditLog?: AuditLogUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    office?: EnumOfficeFieldUpdateOperationsInput | $Enums.Office
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    AuditLog?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    office?: $Enums.Office
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    department?: string | null
    description?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    AuditLog?: AuditLogCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name: string
    email: string
    office?: $Enums.Office
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    department?: string | null
    description?: string | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    AuditLog?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    office?: EnumOfficeFieldUpdateOperationsInput | $Enums.Office
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    AuditLog?: AuditLogUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    office?: EnumOfficeFieldUpdateOperationsInput | $Enums.Office
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    AuditLog?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AuditLogCreateWithoutUserInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    description: string
    createdAt?: Date | string
  }

  export type AuditLogUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    description: string
    createdAt?: Date | string
  }

  export type AuditLogCreateOrConnectWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogCreateManyUserInputEnvelope = {
    data: AuditLogCreateManyUserInput | AuditLogCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type PasswordResetTokenCreateWithoutUserInput = {
    token: string
    expiresAt: Date | string
  }

  export type PasswordResetTokenUncheckedCreateWithoutUserInput = {
    token: string
    expiresAt: Date | string
  }

  export type PasswordResetTokenCreateOrConnectWithoutUserInput = {
    where: PasswordResetTokenWhereUniqueInput
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    providerType?: StringFilter<"Account"> | string
    providerId?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refreshToken?: StringNullableFilter<"Account"> | string | null
    accessToken?: StringNullableFilter<"Account"> | string | null
    accessTokenExpires?: DateTimeNullableFilter<"Account"> | Date | string | null
    createdAt?: DateTimeFilter<"Account"> | Date | string
    updatedAt?: DateTimeFilter<"Account"> | Date | string
  }

  export type AuditLogUpsertWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    update: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
    create: XOR<AuditLogCreateWithoutUserInput, AuditLogUncheckedCreateWithoutUserInput>
  }

  export type AuditLogUpdateWithWhereUniqueWithoutUserInput = {
    where: AuditLogWhereUniqueInput
    data: XOR<AuditLogUpdateWithoutUserInput, AuditLogUncheckedUpdateWithoutUserInput>
  }

  export type AuditLogUpdateManyWithWhereWithoutUserInput = {
    where: AuditLogScalarWhereInput
    data: XOR<AuditLogUpdateManyMutationInput, AuditLogUncheckedUpdateManyWithoutUserInput>
  }

  export type AuditLogScalarWhereInput = {
    AND?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    OR?: AuditLogScalarWhereInput[]
    NOT?: AuditLogScalarWhereInput | AuditLogScalarWhereInput[]
    id?: StringFilter<"AuditLog"> | string
    userId?: StringFilter<"AuditLog"> | string
    action?: StringFilter<"AuditLog"> | string
    entity?: StringFilter<"AuditLog"> | string
    entityId?: StringNullableFilter<"AuditLog"> | string | null
    description?: StringFilter<"AuditLog"> | string
    createdAt?: DateTimeFilter<"AuditLog"> | Date | string
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    sessionToken?: StringFilter<"Session"> | string
    accessToken?: StringFilter<"Session"> | string
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type PasswordResetTokenUpsertWithoutUserInput = {
    update: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
    create: XOR<PasswordResetTokenCreateWithoutUserInput, PasswordResetTokenUncheckedCreateWithoutUserInput>
    where?: PasswordResetTokenWhereInput
  }

  export type PasswordResetTokenUpdateToOneWithWhereWithoutUserInput = {
    where?: PasswordResetTokenWhereInput
    data: XOR<PasswordResetTokenUpdateWithoutUserInput, PasswordResetTokenUncheckedUpdateWithoutUserInput>
  }

  export type PasswordResetTokenUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PasswordResetTokenUncheckedUpdateWithoutUserInput = {
    token?: StringFieldUpdateOperationsInput | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateWithoutDestinationWarehouseInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    createdAt?: Date | string
    notes?: string | null
    status?: $Enums.MovementStatus
    quantityAfter?: number | null
    quantityBefore?: number | null
    originWareHouse?: WareHouseCreateNestedOneWithoutStockMovementsOriginInput
    product: ProductCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateWithoutDestinationWarehouseInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    productId: string
    createdAt?: Date | string
    notes?: string | null
    originWarehouseId?: string | null
    status?: $Enums.MovementStatus
    quantityAfter?: number | null
    quantityBefore?: number | null
  }

  export type StockMovementCreateOrConnectWithoutDestinationWarehouseInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutDestinationWarehouseInput, StockMovementUncheckedCreateWithoutDestinationWarehouseInput>
  }

  export type StockMovementCreateManyDestinationWarehouseInputEnvelope = {
    data: StockMovementCreateManyDestinationWarehouseInput | StockMovementCreateManyDestinationWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type StockMovementCreateWithoutOriginWareHouseInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    createdAt?: Date | string
    notes?: string | null
    status?: $Enums.MovementStatus
    quantityAfter?: number | null
    quantityBefore?: number | null
    destinationWarehouse?: WareHouseCreateNestedOneWithoutStockMovementsDestinationInput
    product: ProductCreateNestedOneWithoutStockMovementsInput
  }

  export type StockMovementUncheckedCreateWithoutOriginWareHouseInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    productId: string
    createdAt?: Date | string
    notes?: string | null
    destinationWarehouseId?: string | null
    status?: $Enums.MovementStatus
    quantityAfter?: number | null
    quantityBefore?: number | null
  }

  export type StockMovementCreateOrConnectWithoutOriginWareHouseInput = {
    where: StockMovementWhereUniqueInput
    create: XOR<StockMovementCreateWithoutOriginWareHouseInput, StockMovementUncheckedCreateWithoutOriginWareHouseInput>
  }

  export type StockMovementCreateManyOriginWareHouseInputEnvelope = {
    data: StockMovementCreateManyOriginWareHouseInput | StockMovementCreateManyOriginWareHouseInput[]
    skipDuplicates?: boolean
  }

  export type WarehouseProductCreateWithoutWarehouseInput = {
    quantity?: number
    product: ProductCreateNestedOneWithoutWarehouseProductInput
  }

  export type WarehouseProductUncheckedCreateWithoutWarehouseInput = {
    productId: string
    quantity?: number
  }

  export type WarehouseProductCreateOrConnectWithoutWarehouseInput = {
    where: WarehouseProductWhereUniqueInput
    create: XOR<WarehouseProductCreateWithoutWarehouseInput, WarehouseProductUncheckedCreateWithoutWarehouseInput>
  }

  export type WarehouseProductCreateManyWarehouseInputEnvelope = {
    data: WarehouseProductCreateManyWarehouseInput | WarehouseProductCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryCreateWithoutWarehouseInput = {
    id?: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutDeliveryInput
    supplier: SupplierCreateNestedOneWithoutDeliveryInput
    supplierInvoice?: SupplierInvoiceCreateNestedOneWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateWithoutWarehouseInput = {
    id?: string
    productId: string
    supplierId: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    supplierInvoiceId?: string | null
  }

  export type DeliveryCreateOrConnectWithoutWarehouseInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutWarehouseInput, DeliveryUncheckedCreateWithoutWarehouseInput>
  }

  export type DeliveryCreateManyWarehouseInputEnvelope = {
    data: DeliveryCreateManyWarehouseInput | DeliveryCreateManyWarehouseInput[]
    skipDuplicates?: boolean
  }

  export type StockMovementUpsertWithWhereUniqueWithoutDestinationWarehouseInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutDestinationWarehouseInput, StockMovementUncheckedUpdateWithoutDestinationWarehouseInput>
    create: XOR<StockMovementCreateWithoutDestinationWarehouseInput, StockMovementUncheckedCreateWithoutDestinationWarehouseInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutDestinationWarehouseInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutDestinationWarehouseInput, StockMovementUncheckedUpdateWithoutDestinationWarehouseInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutDestinationWarehouseInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutDestinationWarehouseInput>
  }

  export type StockMovementUpsertWithWhereUniqueWithoutOriginWareHouseInput = {
    where: StockMovementWhereUniqueInput
    update: XOR<StockMovementUpdateWithoutOriginWareHouseInput, StockMovementUncheckedUpdateWithoutOriginWareHouseInput>
    create: XOR<StockMovementCreateWithoutOriginWareHouseInput, StockMovementUncheckedCreateWithoutOriginWareHouseInput>
  }

  export type StockMovementUpdateWithWhereUniqueWithoutOriginWareHouseInput = {
    where: StockMovementWhereUniqueInput
    data: XOR<StockMovementUpdateWithoutOriginWareHouseInput, StockMovementUncheckedUpdateWithoutOriginWareHouseInput>
  }

  export type StockMovementUpdateManyWithWhereWithoutOriginWareHouseInput = {
    where: StockMovementScalarWhereInput
    data: XOR<StockMovementUpdateManyMutationInput, StockMovementUncheckedUpdateManyWithoutOriginWareHouseInput>
  }

  export type WarehouseProductUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: WarehouseProductWhereUniqueInput
    update: XOR<WarehouseProductUpdateWithoutWarehouseInput, WarehouseProductUncheckedUpdateWithoutWarehouseInput>
    create: XOR<WarehouseProductCreateWithoutWarehouseInput, WarehouseProductUncheckedCreateWithoutWarehouseInput>
  }

  export type WarehouseProductUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: WarehouseProductWhereUniqueInput
    data: XOR<WarehouseProductUpdateWithoutWarehouseInput, WarehouseProductUncheckedUpdateWithoutWarehouseInput>
  }

  export type WarehouseProductUpdateManyWithWhereWithoutWarehouseInput = {
    where: WarehouseProductScalarWhereInput
    data: XOR<WarehouseProductUpdateManyMutationInput, WarehouseProductUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type DeliveryUpsertWithWhereUniqueWithoutWarehouseInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutWarehouseInput, DeliveryUncheckedUpdateWithoutWarehouseInput>
    create: XOR<DeliveryCreateWithoutWarehouseInput, DeliveryUncheckedCreateWithoutWarehouseInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutWarehouseInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutWarehouseInput, DeliveryUncheckedUpdateWithoutWarehouseInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutWarehouseInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutWarehouseInput>
  }

  export type ProductCreateWithoutWarehouseProductInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
    delivery?: DeliveryCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    supplier?: SupplierCreateNestedOneWithoutProductsInput
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutWarehouseProductInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierId?: string | null
    categoryId?: string | null
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
    delivery?: DeliveryUncheckedCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutWarehouseProductInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutWarehouseProductInput, ProductUncheckedCreateWithoutWarehouseProductInput>
  }

  export type WareHouseCreateWithoutWarehouseProductInput = {
    id?: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    stockMovementsDestination?: StockMovementCreateNestedManyWithoutDestinationWarehouseInput
    stockMovementsOrigin?: StockMovementCreateNestedManyWithoutOriginWareHouseInput
    Delivery?: DeliveryCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseUncheckedCreateWithoutWarehouseProductInput = {
    id?: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    stockMovementsDestination?: StockMovementUncheckedCreateNestedManyWithoutDestinationWarehouseInput
    stockMovementsOrigin?: StockMovementUncheckedCreateNestedManyWithoutOriginWareHouseInput
    Delivery?: DeliveryUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseCreateOrConnectWithoutWarehouseProductInput = {
    where: WareHouseWhereUniqueInput
    create: XOR<WareHouseCreateWithoutWarehouseProductInput, WareHouseUncheckedCreateWithoutWarehouseProductInput>
  }

  export type ProductUpsertWithoutWarehouseProductInput = {
    update: XOR<ProductUpdateWithoutWarehouseProductInput, ProductUncheckedUpdateWithoutWarehouseProductInput>
    create: XOR<ProductCreateWithoutWarehouseProductInput, ProductUncheckedCreateWithoutWarehouseProductInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutWarehouseProductInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutWarehouseProductInput, ProductUncheckedUpdateWithoutWarehouseProductInput>
  }

  export type ProductUpdateWithoutWarehouseProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
    delivery?: DeliveryUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    supplier?: SupplierUpdateOneWithoutProductsNestedInput
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutWarehouseProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
    delivery?: DeliveryUncheckedUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
  }

  export type WareHouseUpsertWithoutWarehouseProductInput = {
    update: XOR<WareHouseUpdateWithoutWarehouseProductInput, WareHouseUncheckedUpdateWithoutWarehouseProductInput>
    create: XOR<WareHouseCreateWithoutWarehouseProductInput, WareHouseUncheckedCreateWithoutWarehouseProductInput>
    where?: WareHouseWhereInput
  }

  export type WareHouseUpdateToOneWithWhereWithoutWarehouseProductInput = {
    where?: WareHouseWhereInput
    data: XOR<WareHouseUpdateWithoutWarehouseProductInput, WareHouseUncheckedUpdateWithoutWarehouseProductInput>
  }

  export type WareHouseUpdateWithoutWarehouseProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockMovementsDestination?: StockMovementUpdateManyWithoutDestinationWarehouseNestedInput
    stockMovementsOrigin?: StockMovementUpdateManyWithoutOriginWareHouseNestedInput
    Delivery?: DeliveryUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateWithoutWarehouseProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockMovementsDestination?: StockMovementUncheckedUpdateManyWithoutDestinationWarehouseNestedInput
    stockMovementsOrigin?: StockMovementUncheckedUpdateManyWithoutOriginWareHouseNestedInput
    Delivery?: DeliveryUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseCreateWithoutStockMovementsDestinationInput = {
    id?: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    stockMovementsOrigin?: StockMovementCreateNestedManyWithoutOriginWareHouseInput
    warehouseProduct?: WarehouseProductCreateNestedManyWithoutWarehouseInput
    Delivery?: DeliveryCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseUncheckedCreateWithoutStockMovementsDestinationInput = {
    id?: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    stockMovementsOrigin?: StockMovementUncheckedCreateNestedManyWithoutOriginWareHouseInput
    warehouseProduct?: WarehouseProductUncheckedCreateNestedManyWithoutWarehouseInput
    Delivery?: DeliveryUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseCreateOrConnectWithoutStockMovementsDestinationInput = {
    where: WareHouseWhereUniqueInput
    create: XOR<WareHouseCreateWithoutStockMovementsDestinationInput, WareHouseUncheckedCreateWithoutStockMovementsDestinationInput>
  }

  export type WareHouseCreateWithoutStockMovementsOriginInput = {
    id?: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    stockMovementsDestination?: StockMovementCreateNestedManyWithoutDestinationWarehouseInput
    warehouseProduct?: WarehouseProductCreateNestedManyWithoutWarehouseInput
    Delivery?: DeliveryCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseUncheckedCreateWithoutStockMovementsOriginInput = {
    id?: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    stockMovementsDestination?: StockMovementUncheckedCreateNestedManyWithoutDestinationWarehouseInput
    warehouseProduct?: WarehouseProductUncheckedCreateNestedManyWithoutWarehouseInput
    Delivery?: DeliveryUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseCreateOrConnectWithoutStockMovementsOriginInput = {
    where: WareHouseWhereUniqueInput
    create: XOR<WareHouseCreateWithoutStockMovementsOriginInput, WareHouseUncheckedCreateWithoutStockMovementsOriginInput>
  }

  export type ProductCreateWithoutStockMovementsInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
    delivery?: DeliveryCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    supplier?: SupplierCreateNestedOneWithoutProductsInput
    warehouseProduct?: WarehouseProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutStockMovementsInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierId?: string | null
    categoryId?: string | null
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
    delivery?: DeliveryUncheckedCreateNestedManyWithoutProductInput
    warehouseProduct?: WarehouseProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutStockMovementsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutStockMovementsInput, ProductUncheckedCreateWithoutStockMovementsInput>
  }

  export type WareHouseUpsertWithoutStockMovementsDestinationInput = {
    update: XOR<WareHouseUpdateWithoutStockMovementsDestinationInput, WareHouseUncheckedUpdateWithoutStockMovementsDestinationInput>
    create: XOR<WareHouseCreateWithoutStockMovementsDestinationInput, WareHouseUncheckedCreateWithoutStockMovementsDestinationInput>
    where?: WareHouseWhereInput
  }

  export type WareHouseUpdateToOneWithWhereWithoutStockMovementsDestinationInput = {
    where?: WareHouseWhereInput
    data: XOR<WareHouseUpdateWithoutStockMovementsDestinationInput, WareHouseUncheckedUpdateWithoutStockMovementsDestinationInput>
  }

  export type WareHouseUpdateWithoutStockMovementsDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockMovementsOrigin?: StockMovementUpdateManyWithoutOriginWareHouseNestedInput
    warehouseProduct?: WarehouseProductUpdateManyWithoutWarehouseNestedInput
    Delivery?: DeliveryUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateWithoutStockMovementsDestinationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockMovementsOrigin?: StockMovementUncheckedUpdateManyWithoutOriginWareHouseNestedInput
    warehouseProduct?: WarehouseProductUncheckedUpdateManyWithoutWarehouseNestedInput
    Delivery?: DeliveryUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseUpsertWithoutStockMovementsOriginInput = {
    update: XOR<WareHouseUpdateWithoutStockMovementsOriginInput, WareHouseUncheckedUpdateWithoutStockMovementsOriginInput>
    create: XOR<WareHouseCreateWithoutStockMovementsOriginInput, WareHouseUncheckedCreateWithoutStockMovementsOriginInput>
    where?: WareHouseWhereInput
  }

  export type WareHouseUpdateToOneWithWhereWithoutStockMovementsOriginInput = {
    where?: WareHouseWhereInput
    data: XOR<WareHouseUpdateWithoutStockMovementsOriginInput, WareHouseUncheckedUpdateWithoutStockMovementsOriginInput>
  }

  export type WareHouseUpdateWithoutStockMovementsOriginInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockMovementsDestination?: StockMovementUpdateManyWithoutDestinationWarehouseNestedInput
    warehouseProduct?: WarehouseProductUpdateManyWithoutWarehouseNestedInput
    Delivery?: DeliveryUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateWithoutStockMovementsOriginInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockMovementsDestination?: StockMovementUncheckedUpdateManyWithoutDestinationWarehouseNestedInput
    warehouseProduct?: WarehouseProductUncheckedUpdateManyWithoutWarehouseNestedInput
    Delivery?: DeliveryUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type ProductUpsertWithoutStockMovementsInput = {
    update: XOR<ProductUpdateWithoutStockMovementsInput, ProductUncheckedUpdateWithoutStockMovementsInput>
    create: XOR<ProductCreateWithoutStockMovementsInput, ProductUncheckedCreateWithoutStockMovementsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutStockMovementsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutStockMovementsInput, ProductUncheckedUpdateWithoutStockMovementsInput>
  }

  export type ProductUpdateWithoutStockMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
    delivery?: DeliveryUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    supplier?: SupplierUpdateOneWithoutProductsNestedInput
    warehouseProduct?: WarehouseProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutStockMovementsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
    delivery?: DeliveryUncheckedUpdateManyWithoutProductNestedInput
    warehouseProduct?: WarehouseProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type DeliveryCreateWithoutSupplierInput = {
    id?: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutDeliveryInput
    warehouse: WareHouseCreateNestedOneWithoutDeliveryInput
    supplierInvoice?: SupplierInvoiceCreateNestedOneWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateWithoutSupplierInput = {
    id?: string
    productId: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    warehouseId: string
    supplierInvoiceId?: string | null
  }

  export type DeliveryCreateOrConnectWithoutSupplierInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutSupplierInput, DeliveryUncheckedCreateWithoutSupplierInput>
  }

  export type DeliveryCreateManySupplierInputEnvelope = {
    data: DeliveryCreateManySupplierInput | DeliveryCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type ProductCreateWithoutSupplierInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
    delivery?: DeliveryCreateNestedManyWithoutProductInput
    category?: CategoryCreateNestedOneWithoutProductsInput
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
    warehouseProduct?: WarehouseProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSupplierInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
    delivery?: DeliveryUncheckedCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
    warehouseProduct?: WarehouseProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput>
  }

  export type ProductCreateManySupplierInputEnvelope = {
    data: ProductCreateManySupplierInput | ProductCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type SupplierInvoiceCreateWithoutSupplierInput = {
    id?: string
    title: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Delivery?: DeliveryCreateNestedManyWithoutSupplierInvoiceInput
  }

  export type SupplierInvoiceUncheckedCreateWithoutSupplierInput = {
    id?: string
    title: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    Delivery?: DeliveryUncheckedCreateNestedManyWithoutSupplierInvoiceInput
  }

  export type SupplierInvoiceCreateOrConnectWithoutSupplierInput = {
    where: SupplierInvoiceWhereUniqueInput
    create: XOR<SupplierInvoiceCreateWithoutSupplierInput, SupplierInvoiceUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierInvoiceCreateManySupplierInputEnvelope = {
    data: SupplierInvoiceCreateManySupplierInput | SupplierInvoiceCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryUpsertWithWhereUniqueWithoutSupplierInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutSupplierInput, DeliveryUncheckedUpdateWithoutSupplierInput>
    create: XOR<DeliveryCreateWithoutSupplierInput, DeliveryUncheckedCreateWithoutSupplierInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutSupplierInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutSupplierInput, DeliveryUncheckedUpdateWithoutSupplierInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutSupplierInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutSupplierInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutSupplierInput, ProductUncheckedUpdateWithoutSupplierInput>
    create: XOR<ProductCreateWithoutSupplierInput, ProductUncheckedCreateWithoutSupplierInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutSupplierInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutSupplierInput, ProductUncheckedUpdateWithoutSupplierInput>
  }

  export type ProductUpdateManyWithWhereWithoutSupplierInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutSupplierInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: StringFilter<"Product"> | string
    name?: StringFilter<"Product"> | string
    sku?: StringFilter<"Product"> | string
    quantity?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    supplierId?: StringNullableFilter<"Product"> | string | null
    categoryId?: StringNullableFilter<"Product"> | string | null
    minimumStock?: IntNullableFilter<"Product"> | number | null
    unit?: EnumUnitTypeFilter<"Product"> | $Enums.UnitType
    expirationDate?: DateTimeNullableFilter<"Product"> | Date | string | null
    usageStatus?: EnumUsageStatusFilter<"Product"> | $Enums.UsageStatus
  }

  export type SupplierInvoiceUpsertWithWhereUniqueWithoutSupplierInput = {
    where: SupplierInvoiceWhereUniqueInput
    update: XOR<SupplierInvoiceUpdateWithoutSupplierInput, SupplierInvoiceUncheckedUpdateWithoutSupplierInput>
    create: XOR<SupplierInvoiceCreateWithoutSupplierInput, SupplierInvoiceUncheckedCreateWithoutSupplierInput>
  }

  export type SupplierInvoiceUpdateWithWhereUniqueWithoutSupplierInput = {
    where: SupplierInvoiceWhereUniqueInput
    data: XOR<SupplierInvoiceUpdateWithoutSupplierInput, SupplierInvoiceUncheckedUpdateWithoutSupplierInput>
  }

  export type SupplierInvoiceUpdateManyWithWhereWithoutSupplierInput = {
    where: SupplierInvoiceScalarWhereInput
    data: XOR<SupplierInvoiceUpdateManyMutationInput, SupplierInvoiceUncheckedUpdateManyWithoutSupplierInput>
  }

  export type SupplierInvoiceScalarWhereInput = {
    AND?: SupplierInvoiceScalarWhereInput | SupplierInvoiceScalarWhereInput[]
    OR?: SupplierInvoiceScalarWhereInput[]
    NOT?: SupplierInvoiceScalarWhereInput | SupplierInvoiceScalarWhereInput[]
    id?: StringFilter<"SupplierInvoice"> | string
    supplierId?: StringFilter<"SupplierInvoice"> | string
    title?: StringFilter<"SupplierInvoice"> | string
    description?: StringFilter<"SupplierInvoice"> | string
    amount?: DecimalFilter<"SupplierInvoice"> | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFilter<"SupplierInvoice"> | Date | string
    status?: EnumInvoiceStatusFilter<"SupplierInvoice"> | $Enums.InvoiceStatus
    fileUrl?: StringNullableFilter<"SupplierInvoice"> | string | null
    createdAt?: DateTimeFilter<"SupplierInvoice"> | Date | string
    updatedAt?: DateTimeFilter<"SupplierInvoice"> | Date | string
  }

  export type SupplierCreateWithoutSupplierInvoiceInput = {
    id?: string
    name: string
    email: string
    contactPhone: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryTime?: Date | string | null
    delivery?: DeliveryCreateNestedManyWithoutSupplierInput
    products?: ProductCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutSupplierInvoiceInput = {
    id?: string
    name: string
    email: string
    contactPhone: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryTime?: Date | string | null
    delivery?: DeliveryUncheckedCreateNestedManyWithoutSupplierInput
    products?: ProductUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutSupplierInvoiceInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutSupplierInvoiceInput, SupplierUncheckedCreateWithoutSupplierInvoiceInput>
  }

  export type DeliveryCreateWithoutSupplierInvoiceInput = {
    id?: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutDeliveryInput
    supplier: SupplierCreateNestedOneWithoutDeliveryInput
    warehouse: WareHouseCreateNestedOneWithoutDeliveryInput
  }

  export type DeliveryUncheckedCreateWithoutSupplierInvoiceInput = {
    id?: string
    productId: string
    supplierId: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    warehouseId: string
  }

  export type DeliveryCreateOrConnectWithoutSupplierInvoiceInput = {
    where: DeliveryWhereUniqueInput
    create: XOR<DeliveryCreateWithoutSupplierInvoiceInput, DeliveryUncheckedCreateWithoutSupplierInvoiceInput>
  }

  export type DeliveryCreateManySupplierInvoiceInputEnvelope = {
    data: DeliveryCreateManySupplierInvoiceInput | DeliveryCreateManySupplierInvoiceInput[]
    skipDuplicates?: boolean
  }

  export type SupplierUpsertWithoutSupplierInvoiceInput = {
    update: XOR<SupplierUpdateWithoutSupplierInvoiceInput, SupplierUncheckedUpdateWithoutSupplierInvoiceInput>
    create: XOR<SupplierCreateWithoutSupplierInvoiceInput, SupplierUncheckedCreateWithoutSupplierInvoiceInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutSupplierInvoiceInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutSupplierInvoiceInput, SupplierUncheckedUpdateWithoutSupplierInvoiceInput>
  }

  export type SupplierUpdateWithoutSupplierInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery?: DeliveryUpdateManyWithoutSupplierNestedInput
    products?: ProductUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutSupplierInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    delivery?: DeliveryUncheckedUpdateManyWithoutSupplierNestedInput
    products?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type DeliveryUpsertWithWhereUniqueWithoutSupplierInvoiceInput = {
    where: DeliveryWhereUniqueInput
    update: XOR<DeliveryUpdateWithoutSupplierInvoiceInput, DeliveryUncheckedUpdateWithoutSupplierInvoiceInput>
    create: XOR<DeliveryCreateWithoutSupplierInvoiceInput, DeliveryUncheckedCreateWithoutSupplierInvoiceInput>
  }

  export type DeliveryUpdateWithWhereUniqueWithoutSupplierInvoiceInput = {
    where: DeliveryWhereUniqueInput
    data: XOR<DeliveryUpdateWithoutSupplierInvoiceInput, DeliveryUncheckedUpdateWithoutSupplierInvoiceInput>
  }

  export type DeliveryUpdateManyWithWhereWithoutSupplierInvoiceInput = {
    where: DeliveryScalarWhereInput
    data: XOR<DeliveryUpdateManyMutationInput, DeliveryUncheckedUpdateManyWithoutSupplierInvoiceInput>
  }

  export type UserCreateWithoutAuditLogInput = {
    id?: string
    name: string
    email: string
    office?: $Enums.Office
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    department?: string | null
    description?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAuditLogInput = {
    id?: string
    name: string
    email: string
    office?: $Enums.Office
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    department?: string | null
    description?: string | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    PasswordResetToken?: PasswordResetTokenUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAuditLogInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogInput, UserUncheckedCreateWithoutAuditLogInput>
  }

  export type UserUpsertWithoutAuditLogInput = {
    update: XOR<UserUpdateWithoutAuditLogInput, UserUncheckedUpdateWithoutAuditLogInput>
    create: XOR<UserCreateWithoutAuditLogInput, UserUncheckedCreateWithoutAuditLogInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogInput, UserUncheckedUpdateWithoutAuditLogInput>
  }

  export type UserUpdateWithoutAuditLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    office?: EnumOfficeFieldUpdateOperationsInput | $Enums.Office
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    office?: EnumOfficeFieldUpdateOperationsInput | $Enums.Office
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    PasswordResetToken?: PasswordResetTokenUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProductCreateWithoutCategoryInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
    delivery?: DeliveryCreateNestedManyWithoutProductInput
    supplier?: SupplierCreateNestedOneWithoutProductsInput
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
    warehouseProduct?: WarehouseProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierId?: string | null
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
    delivery?: DeliveryUncheckedCreateNestedManyWithoutProductInput
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
    warehouseProduct?: WarehouseProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProductCreateWithoutDeliveryInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
    category?: CategoryCreateNestedOneWithoutProductsInput
    supplier?: SupplierCreateNestedOneWithoutProductsInput
    stockMovements?: StockMovementCreateNestedManyWithoutProductInput
    warehouseProduct?: WarehouseProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutDeliveryInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierId?: string | null
    categoryId?: string | null
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
    stockMovements?: StockMovementUncheckedCreateNestedManyWithoutProductInput
    warehouseProduct?: WarehouseProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutDeliveryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutDeliveryInput, ProductUncheckedCreateWithoutDeliveryInput>
  }

  export type SupplierCreateWithoutDeliveryInput = {
    id?: string
    name: string
    email: string
    contactPhone: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryTime?: Date | string | null
    products?: ProductCreateNestedManyWithoutSupplierInput
    SupplierInvoice?: SupplierInvoiceCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateWithoutDeliveryInput = {
    id?: string
    name: string
    email: string
    contactPhone: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deliveryTime?: Date | string | null
    products?: ProductUncheckedCreateNestedManyWithoutSupplierInput
    SupplierInvoice?: SupplierInvoiceUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierCreateOrConnectWithoutDeliveryInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutDeliveryInput, SupplierUncheckedCreateWithoutDeliveryInput>
  }

  export type WareHouseCreateWithoutDeliveryInput = {
    id?: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    stockMovementsDestination?: StockMovementCreateNestedManyWithoutDestinationWarehouseInput
    stockMovementsOrigin?: StockMovementCreateNestedManyWithoutOriginWareHouseInput
    warehouseProduct?: WarehouseProductCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseUncheckedCreateWithoutDeliveryInput = {
    id?: string
    name: string
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    description?: string | null
    stockMovementsDestination?: StockMovementUncheckedCreateNestedManyWithoutDestinationWarehouseInput
    stockMovementsOrigin?: StockMovementUncheckedCreateNestedManyWithoutOriginWareHouseInput
    warehouseProduct?: WarehouseProductUncheckedCreateNestedManyWithoutWarehouseInput
  }

  export type WareHouseCreateOrConnectWithoutDeliveryInput = {
    where: WareHouseWhereUniqueInput
    create: XOR<WareHouseCreateWithoutDeliveryInput, WareHouseUncheckedCreateWithoutDeliveryInput>
  }

  export type SupplierInvoiceCreateWithoutDeliveryInput = {
    id?: string
    title: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutSupplierInvoiceInput
  }

  export type SupplierInvoiceUncheckedCreateWithoutDeliveryInput = {
    id?: string
    supplierId: string
    title: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierInvoiceCreateOrConnectWithoutDeliveryInput = {
    where: SupplierInvoiceWhereUniqueInput
    create: XOR<SupplierInvoiceCreateWithoutDeliveryInput, SupplierInvoiceUncheckedCreateWithoutDeliveryInput>
  }

  export type ProductUpsertWithoutDeliveryInput = {
    update: XOR<ProductUpdateWithoutDeliveryInput, ProductUncheckedUpdateWithoutDeliveryInput>
    create: XOR<ProductCreateWithoutDeliveryInput, ProductUncheckedCreateWithoutDeliveryInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutDeliveryInput, ProductUncheckedUpdateWithoutDeliveryInput>
  }

  export type ProductUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
    category?: CategoryUpdateOneWithoutProductsNestedInput
    supplier?: SupplierUpdateOneWithoutProductsNestedInput
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
    warehouseProduct?: WarehouseProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
    warehouseProduct?: WarehouseProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SupplierUpsertWithoutDeliveryInput = {
    update: XOR<SupplierUpdateWithoutDeliveryInput, SupplierUncheckedUpdateWithoutDeliveryInput>
    create: XOR<SupplierCreateWithoutDeliveryInput, SupplierUncheckedCreateWithoutDeliveryInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutDeliveryInput, SupplierUncheckedUpdateWithoutDeliveryInput>
  }

  export type SupplierUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUpdateManyWithoutSupplierNestedInput
    SupplierInvoice?: SupplierInvoiceUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    contactPhone?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deliveryTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: ProductUncheckedUpdateManyWithoutSupplierNestedInput
    SupplierInvoice?: SupplierInvoiceUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type WareHouseUpsertWithoutDeliveryInput = {
    update: XOR<WareHouseUpdateWithoutDeliveryInput, WareHouseUncheckedUpdateWithoutDeliveryInput>
    create: XOR<WareHouseCreateWithoutDeliveryInput, WareHouseUncheckedCreateWithoutDeliveryInput>
    where?: WareHouseWhereInput
  }

  export type WareHouseUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: WareHouseWhereInput
    data: XOR<WareHouseUpdateWithoutDeliveryInput, WareHouseUncheckedUpdateWithoutDeliveryInput>
  }

  export type WareHouseUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockMovementsDestination?: StockMovementUpdateManyWithoutDestinationWarehouseNestedInput
    stockMovementsOrigin?: StockMovementUpdateManyWithoutOriginWareHouseNestedInput
    warehouseProduct?: WarehouseProductUpdateManyWithoutWarehouseNestedInput
  }

  export type WareHouseUncheckedUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stockMovementsDestination?: StockMovementUncheckedUpdateManyWithoutDestinationWarehouseNestedInput
    stockMovementsOrigin?: StockMovementUncheckedUpdateManyWithoutOriginWareHouseNestedInput
    warehouseProduct?: WarehouseProductUncheckedUpdateManyWithoutWarehouseNestedInput
  }

  export type SupplierInvoiceUpsertWithoutDeliveryInput = {
    update: XOR<SupplierInvoiceUpdateWithoutDeliveryInput, SupplierInvoiceUncheckedUpdateWithoutDeliveryInput>
    create: XOR<SupplierInvoiceCreateWithoutDeliveryInput, SupplierInvoiceUncheckedCreateWithoutDeliveryInput>
    where?: SupplierInvoiceWhereInput
  }

  export type SupplierInvoiceUpdateToOneWithWhereWithoutDeliveryInput = {
    where?: SupplierInvoiceWhereInput
    data: XOR<SupplierInvoiceUpdateWithoutDeliveryInput, SupplierInvoiceUncheckedUpdateWithoutDeliveryInput>
  }

  export type SupplierInvoiceUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutSupplierInvoiceNestedInput
  }

  export type SupplierInvoiceUncheckedUpdateWithoutDeliveryInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutPasswordResetTokenInput = {
    id?: string
    name: string
    email: string
    office?: $Enums.Office
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    department?: string | null
    description?: string | null
    phone?: string | null
    accounts?: AccountCreateNestedManyWithoutUserInput
    AuditLog?: AuditLogCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPasswordResetTokenInput = {
    id?: string
    name: string
    email: string
    office?: $Enums.Office
    createdAt?: Date | string
    updatedAt?: Date | string
    emailVerified?: Date | string | null
    image?: string | null
    password: string
    department?: string | null
    description?: string | null
    phone?: string | null
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    AuditLog?: AuditLogUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPasswordResetTokenInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
  }

  export type UserUpsertWithoutPasswordResetTokenInput = {
    update: XOR<UserUpdateWithoutPasswordResetTokenInput, UserUncheckedUpdateWithoutPasswordResetTokenInput>
    create: XOR<UserCreateWithoutPasswordResetTokenInput, UserUncheckedCreateWithoutPasswordResetTokenInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPasswordResetTokenInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPasswordResetTokenInput, UserUncheckedUpdateWithoutPasswordResetTokenInput>
  }

  export type UserUpdateWithoutPasswordResetTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    office?: EnumOfficeFieldUpdateOperationsInput | $Enums.Office
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUpdateManyWithoutUserNestedInput
    AuditLog?: AuditLogUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPasswordResetTokenInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    office?: EnumOfficeFieldUpdateOperationsInput | $Enums.Office
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    department?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    AuditLog?: AuditLogUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DeliveryCreateManyProductInput = {
    id?: string
    supplierId: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    warehouseId: string
    supplierInvoiceId?: string | null
  }

  export type StockMovementCreateManyProductInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    createdAt?: Date | string
    notes?: string | null
    destinationWarehouseId?: string | null
    originWarehouseId?: string | null
    status?: $Enums.MovementStatus
    quantityAfter?: number | null
    quantityBefore?: number | null
  }

  export type WarehouseProductCreateManyProductInput = {
    warehouseId: string
    quantity?: number
  }

  export type DeliveryUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutDeliveryNestedInput
    warehouse?: WareHouseUpdateOneRequiredWithoutDeliveryNestedInput
    supplierInvoice?: SupplierInvoiceUpdateOneWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    supplierInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    supplierInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockMovementUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
    destinationWarehouse?: WareHouseUpdateOneWithoutStockMovementsDestinationNestedInput
    originWareHouse?: WareHouseUpdateOneWithoutStockMovementsOriginNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    destinationWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    originWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockMovementUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    destinationWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    originWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WarehouseProductUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    warehouse?: WareHouseUpdateOneRequiredWithoutWarehouseProductNestedInput
  }

  export type WarehouseProductUncheckedUpdateWithoutProductInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type WarehouseProductUncheckedUpdateManyWithoutProductInput = {
    warehouseId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type AccountCreateManyUserInput = {
    id?: string
    providerType: string
    providerId: string
    providerAccountId: string
    refreshToken?: string | null
    accessToken?: string | null
    accessTokenExpires?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AuditLogCreateManyUserInput = {
    id?: string
    action: string
    entity: string
    entityId?: string | null
    description: string
    createdAt?: Date | string
  }

  export type SessionCreateManyUserInput = {
    id?: string
    expires: Date | string
    sessionToken: string
    accessToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerType?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessToken?: NullableStringFieldUpdateOperationsInput | string | null
    accessTokenExpires?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AuditLogUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    entity?: StringFieldUpdateOperationsInput | string
    entityId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    accessToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockMovementCreateManyDestinationWarehouseInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    productId: string
    createdAt?: Date | string
    notes?: string | null
    originWarehouseId?: string | null
    status?: $Enums.MovementStatus
    quantityAfter?: number | null
    quantityBefore?: number | null
  }

  export type StockMovementCreateManyOriginWareHouseInput = {
    id?: string
    type: $Enums.MovementType
    quantity: number
    productId: string
    createdAt?: Date | string
    notes?: string | null
    destinationWarehouseId?: string | null
    status?: $Enums.MovementStatus
    quantityAfter?: number | null
    quantityBefore?: number | null
  }

  export type WarehouseProductCreateManyWarehouseInput = {
    productId: string
    quantity?: number
  }

  export type DeliveryCreateManyWarehouseInput = {
    id?: string
    productId: string
    supplierId: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    supplierInvoiceId?: string | null
  }

  export type StockMovementUpdateWithoutDestinationWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
    originWareHouse?: WareHouseUpdateOneWithoutStockMovementsOriginNestedInput
    product?: ProductUpdateOneRequiredWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutDestinationWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    originWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockMovementUncheckedUpdateManyWithoutDestinationWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    originWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockMovementUpdateWithoutOriginWareHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
    destinationWarehouse?: WareHouseUpdateOneWithoutStockMovementsDestinationNestedInput
    product?: ProductUpdateOneRequiredWithoutStockMovementsNestedInput
  }

  export type StockMovementUncheckedUpdateWithoutOriginWareHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    destinationWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type StockMovementUncheckedUpdateManyWithoutOriginWareHouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumMovementTypeFieldUpdateOperationsInput | $Enums.MovementType
    quantity?: IntFieldUpdateOperationsInput | number
    productId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    destinationWarehouseId?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumMovementStatusFieldUpdateOperationsInput | $Enums.MovementStatus
    quantityAfter?: NullableIntFieldUpdateOperationsInput | number | null
    quantityBefore?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type WarehouseProductUpdateWithoutWarehouseInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutWarehouseProductNestedInput
  }

  export type WarehouseProductUncheckedUpdateWithoutWarehouseInput = {
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type WarehouseProductUncheckedUpdateManyWithoutWarehouseInput = {
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
  }

  export type DeliveryUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutDeliveryNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutDeliveryNestedInput
    supplierInvoice?: SupplierInvoiceUpdateOneWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryUncheckedUpdateManyWithoutWarehouseInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryCreateManySupplierInput = {
    id?: string
    productId: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    warehouseId: string
    supplierInvoiceId?: string | null
  }

  export type ProductCreateManySupplierInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId?: string | null
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
  }

  export type SupplierInvoiceCreateManySupplierInput = {
    id?: string
    title: string
    description: string
    amount: Decimal | DecimalJsLike | number | string
    dueDate: Date | string
    status?: $Enums.InvoiceStatus
    fileUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DeliveryUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutDeliveryNestedInput
    warehouse?: WareHouseUpdateOneRequiredWithoutDeliveryNestedInput
    supplierInvoice?: SupplierInvoiceUpdateOneWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    supplierInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DeliveryUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: StringFieldUpdateOperationsInput | string
    supplierInvoiceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ProductUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
    delivery?: DeliveryUpdateManyWithoutProductNestedInput
    category?: CategoryUpdateOneWithoutProductsNestedInput
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
    warehouseProduct?: WarehouseProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
    delivery?: DeliveryUncheckedUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
    warehouseProduct?: WarehouseProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: NullableStringFieldUpdateOperationsInput | string | null
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
  }

  export type SupplierInvoiceUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Delivery?: DeliveryUpdateManyWithoutSupplierInvoiceNestedInput
  }

  export type SupplierInvoiceUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Delivery?: DeliveryUncheckedUpdateManyWithoutSupplierInvoiceNestedInput
  }

  export type SupplierInvoiceUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    dueDate?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumInvoiceStatusFieldUpdateOperationsInput | $Enums.InvoiceStatus
    fileUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DeliveryCreateManySupplierInvoiceInput = {
    id?: string
    productId: string
    supplierId: string
    quantity: number
    expectedAt: Date | string
    updatedAt?: Date | string
    status?: $Enums.DeliveryStatus
    createdAt?: Date | string
    warehouseId: string
  }

  export type DeliveryUpdateWithoutSupplierInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutDeliveryNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutDeliveryNestedInput
    warehouse?: WareHouseUpdateOneRequiredWithoutDeliveryNestedInput
  }

  export type DeliveryUncheckedUpdateWithoutSupplierInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: StringFieldUpdateOperationsInput | string
  }

  export type DeliveryUncheckedUpdateManyWithoutSupplierInvoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    productId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    expectedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    status?: EnumDeliveryStatusFieldUpdateOperationsInput | $Enums.DeliveryStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    warehouseId?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateManyCategoryInput = {
    id?: string
    name: string
    sku: string
    quantity: number
    price: number
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierId?: string | null
    minimumStock?: number | null
    unit?: $Enums.UnitType
    expirationDate?: Date | string | null
    usageStatus?: $Enums.UsageStatus
  }

  export type ProductUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
    delivery?: DeliveryUpdateManyWithoutProductNestedInput
    supplier?: SupplierUpdateOneWithoutProductsNestedInput
    stockMovements?: StockMovementUpdateManyWithoutProductNestedInput
    warehouseProduct?: WarehouseProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
    delivery?: DeliveryUncheckedUpdateManyWithoutProductNestedInput
    stockMovements?: StockMovementUncheckedUpdateManyWithoutProductNestedInput
    warehouseProduct?: WarehouseProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: NullableStringFieldUpdateOperationsInput | string | null
    minimumStock?: NullableIntFieldUpdateOperationsInput | number | null
    unit?: EnumUnitTypeFieldUpdateOperationsInput | $Enums.UnitType
    expirationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    usageStatus?: EnumUsageStatusFieldUpdateOperationsInput | $Enums.UsageStatus
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}