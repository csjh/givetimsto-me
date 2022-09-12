/* my shit */
export interface Errors {
    locations:  Location[];
    message:    string;
    path:       string[];
    extensions: Extensions;
}

interface Extensions {
    code:           string;
    statusCode:     number;
    statusCategory: string;
}

interface Location {
    line:   number;
    column: number;
}

export interface OfferDetails {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    description: Description;
    howToRedeem: HowToRedeem;
    id: string;
    images: Images;
    internalName: string;
    localizedImage: LocalizedImage;
}

interface Description {
    en: EnElement[];
}

interface EnElement {
    _key: string;
    _type: "block";
    children: Child[];
    style: Style;
}

interface Child {
    _key: string;
    _type: "span";
    text: string;
}

enum Style {
    Normal = "normal"
}

interface HowToRedeem {
    _type: string;
    en: EnElement[];
    fr: EnElement[];
}

interface Images {
    _type: string;
    app: ImagesApp;
}

interface ImagesApp {
    _type: string;
    asset: PurpleAsset;
}

interface PurpleAsset {
    _ref: string;
    _type: string;
}

interface LocalizedImage {
    en: LocalizedImageEn;
}

interface LocalizedImageEn {
    app: EnApp;
}

interface EnApp {
    asset: FluffyAsset;
}

interface FluffyAsset {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    assetId: string;
    extension: string;
    metadata: Metadata;
    mimeType: string;
    originalFilename: string;
    path: string;
}

interface Metadata {
    _type: string;
    dimensions: Dimensions;
    hasAlpha: boolean;
    isOpaque: boolean;
    lqip: string;
    palette: Palette;
}

interface Dimensions {
    _type: string;
    aspectRatio: number;
    height: number;
    width: number;
}

interface Palette {
    _type: string;
    darkMuted: DarkMuted;
    darkVibrant: DarkMuted;
    dominant: DarkMuted;
    lightMuted: DarkMuted;
    lightVibrant: DarkMuted;
    muted: DarkMuted;
    vibrant: DarkMuted;
}

interface DarkMuted {
    _type: string;
    background: string;
    foreground: string;
    population: number;
    title: string;
}
// end

export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export enum IsoCountryCode {
    CAN = "CAN",
    CHE = "CHE",
    DEU = "DEU",
    GBR = "GBR",
    NZL = "NZL",
    USA = "USA",
    ZAF = "ZAF",
    CA = "CAN",
    CH = "CHE",
    DE = "DEU",
    GB = "GBR",
    NZ = "NZL",
    US = "USA",
    ZA = "ZAF"
}
export enum Platform {
    APP = "app",
    KIOSK = "kiosk",
    WEB = "web"
}
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
}

export interface IAccount {
    readonly __typename?: "Account";
    readonly accountIdentifier: Maybe<Scalars["String"]>;
    readonly fdAccountId: Maybe<Scalars["String"]>;
    readonly chaseProfileId: Maybe<Scalars["String"]>;
    readonly credit: Maybe<ICreditCard>;
    readonly prepaid: Maybe<IGiftCard>;
    readonly paypal: Maybe<Scalars["Boolean"]>;
    readonly paypalIdentifier: Maybe<Scalars["String"]>;
}

export interface IAccountListResponse {
    readonly __typename?: "AccountListResponse";
    readonly count: Scalars["Int"];
    readonly accounts: Maybe<ReadonlyArray<Maybe<IAccount>>>;
    readonly defaultAccount: Maybe<IAccount>;
    readonly paymentProcessor: Maybe<PaymentProcessor>;
}

export interface IAddAccountInput {
    readonly billingAddress?: Maybe<IBillingAddressInput>;
    readonly fdAccessToken: Scalars["String"];
    readonly fdNonce: Scalars["String"];
    readonly ccBin: Scalars["String"];
    readonly fullName?: Maybe<Scalars["String"]>;
    readonly ccToken?: Maybe<Scalars["String"]>;
    readonly chaseProfileId?: Maybe<Scalars["String"]>;
    readonly cvv?: Maybe<Scalars["String"]>;
    readonly sessionId?: Maybe<Scalars["String"]>;
    readonly makeDefault?: Maybe<Scalars["Boolean"]>;
    readonly threeDSOptions?: Maybe<IThreeDsOptions>;
}

export interface IAddAdyenAccountInput {
    readonly encryptedPayload: IAdyenEncryptedInfo;
}

export interface IAddCreditAccountInput {
    readonly adyenInput?: Maybe<IAddAdyenAccountInput>;
    readonly billingAddress: IBillingAddressInput;
    readonly firstDataInput?: Maybe<IAddAccountInput>;
    readonly fullName: Scalars["String"];
    readonly makeDefault?: Maybe<Scalars["Boolean"]>;
}

export interface IAddGiftAccountInput {
    readonly fundValue: Scalars["Int"];
    readonly fdAccountId?: Maybe<Scalars["String"]>;
    readonly applePayDetails?: Maybe<IApplePay>;
    readonly googlePayDetails?: Maybe<IGooglePay>;
    readonly kountSessionId?: Maybe<Scalars["String"]>;
    readonly sessionId?: Maybe<Scalars["String"]>;
}

export interface IAdyenEncryptedInfo {
    readonly encryptedCN: Scalars["String"];
    readonly encryptedEM: Scalars["String"];
    readonly encryptedEY: Scalars["String"];
    readonly encryptedSC: Scalars["String"];
}

export interface IAdyenPayment {
    readonly accountIdentifier?: Maybe<Scalars["String"]>;
    readonly encryptedPayload?: Maybe<IAdyenEncryptedInfo>;
    readonly paymentType?: Maybe<AdyenPaymentType>;
    readonly savePaymentMethod?: Maybe<Scalars["Boolean"]>;
}

export enum AdyenPaymentType {
    APPLE_PAY = "APPLE_PAY",
    GOOGLE_PAY = "GOOGLE_PAY",
    TOKENIZED_CREDIT_CARD = "TOKENIZED_CREDIT_CARD"
}

export interface IApiMetadata {
    readonly __typename?: "ApiMetadata";
    readonly ping: Scalars["String"];
}

export interface IApplePay {
    readonly signature: Scalars["String"];
    readonly applicationData: Scalars["String"];
    readonly country: CountryCode;
    readonly data: Scalars["String"];
    readonly decryptAlias: Scalars["String"];
    readonly ephemeralPublicKey: Scalars["String"];
    readonly formatted: Scalars["String"];
    readonly primary: Scalars["Boolean"];
    readonly publicKeyHash: Scalars["String"];
    readonly transactionId: Scalars["String"];
    readonly type: Scalars["String"];
    readonly version: Scalars["String"];
    readonly billingAddress: IBillingAddressInput;
    readonly paymentData?: Maybe<Scalars["String"]>;
    readonly PaymentMethodData?: Maybe<IPaymentMethodData>;
}

export interface IAppliedOffer {
    readonly id?: Maybe<Scalars["ID"]>;
    readonly cartId?: Maybe<Scalars["ID"]>;
    readonly sanityId?: Maybe<Scalars["ID"]>;
    readonly swap?: Maybe<ISwapInput>;
    readonly type?: Maybe<OfferType>;
}

export interface IAppliedReward {
    readonly cartId: Scalars["ID"];
    readonly rewardId: Scalars["ID"];
    readonly sanityId?: Maybe<Scalars["ID"]>;
    readonly timesApplied: Scalars["Int"];
}

export interface IAttemptLoginOtpResponse {
    readonly __typename?: "AttemptLoginOTPResponse";
    readonly result: AttemptLoginOtpResult;
    readonly otp: Maybe<ICreateOtp>;
}

export enum AttemptLoginOtpResult {
    FOUND = "FOUND",
    NOT_FOUND = "NOT_FOUND"
}

export interface IBalance {
    readonly __typename?: "Balance";
    readonly alias: Scalars["String"];
    readonly beginBalance: Scalars["Int"];
    readonly currencyCode: Scalars["String"];
    readonly currentBalance: Scalars["Int"];
    readonly expiryMonth: Scalars["String"];
    readonly expiryYear: Scalars["String"];
    readonly fdCorrelationId: Maybe<Scalars["String"]>;
}

export interface IBillingAddress {
    readonly __typename?: "BillingAddress";
    readonly locality: Scalars["String"];
    readonly postalCode: Scalars["String"];
    readonly region: Scalars["String"];
    readonly streetAddress: Scalars["String"];
    readonly unitNumber: Maybe<Scalars["String"]>;
}

export interface IBillingAddressInput {
    readonly locality?: Maybe<Scalars["String"]>;
    readonly postalCode: Scalars["String"];
    readonly region?: Maybe<Scalars["String"]>;
    readonly streetAddress?: Maybe<Scalars["String"]>;
    readonly unitNumber?: Maybe<Scalars["String"]>;
    readonly country?: Maybe<Scalars["String"]>;
}

export enum Brand {
    BK = "BK",
    LTW = "LTW",
    PLK = "PLK",
    TH = "TH"
}

export interface IBrazeUserPhone {
    readonly __typename?: "BrazeUserPhone";
    readonly phone: Maybe<Scalars["String"]>;
}

export interface IBrowserInfoInput {
    readonly colorDepth: Scalars["Int"];
    readonly screenWidth: Scalars["Int"];
    readonly screenHeight: Scalars["Int"];
    readonly timeZoneOffset: Scalars["Int"];
}

export interface ICart {
    readonly __typename?: "Cart";
    readonly brand: Brand;
    readonly cartEntries: Maybe<ReadonlyArray<ICartEntries>>;
    readonly reorderCartEntries: Maybe<ReadonlyArray<ICartEntries>>;
    readonly cartVersion: Maybe<Scalars["Int"]>;
    readonly customerLocale: Maybe<Scalars["String"]>;
    readonly customerName: Scalars["String"];
    readonly deviceOS: Maybe<Scalars["String"]>;
    readonly discounts: Maybe<ReadonlyArray<Maybe<IDiscount>>>;
    readonly donations: Maybe<ReadonlyArray<Maybe<IDonation>>>;
    readonly fees: Maybe<ReadonlyArray<Maybe<IFees>>>;
    readonly offersFeedback: Maybe<
        ReadonlyArray<Maybe<ICouponUserOffersFeedbackEntry>>
    >;
    readonly payment: Maybe<IPayment>;
    readonly platform: Maybe<Platform>;
    readonly posVendor: PosVendor;
    readonly processedAt: Maybe<Scalars["String"]>;
    readonly appliedOffers: Maybe<ReadonlyArray<Maybe<ICartAppliedOffer>>>;
    readonly requestedAmountCents: Scalars["Int"];
    readonly rewardsApplied: Maybe<ReadonlyArray<Maybe<ICartAppliedReward>>>;
    readonly serviceMode: ServiceMode;
    readonly storeAddress: IStoreAddress;
    readonly storeDetails: Maybe<IStoreDetails>;
    readonly storeId: Scalars["String"];
    readonly storePosId: Maybe<Scalars["String"]>;
    readonly swaps: Maybe<ReadonlyArray<Maybe<ICartSwap>>>;
    readonly subTotalCents: Maybe<Scalars["Int"]>;
    readonly taxCents: Maybe<Scalars["Int"]>;
    readonly ticketNumber: Maybe<Scalars["String"]>;
    readonly totalCents: Maybe<Scalars["Int"]>;
    readonly unavailableCartEntries: Maybe<
        ReadonlyArray<Maybe<IUnavailableCartEntry>>
    >;
    readonly userDetails: Maybe<IUserDetails>;
    readonly userId: Maybe<Scalars["String"]>;
    readonly wasLoyaltyEarned: Maybe<Scalars["Boolean"]>;
    readonly vatNumber: Maybe<Scalars["String"]>;
}

export interface ICartAppliedOffer {
    readonly __typename?: "CartAppliedOffer";
    readonly id: Scalars["ID"];
    readonly cartId: Maybe<Scalars["ID"]>;
    readonly sanityId: Maybe<Scalars["ID"]>;
    readonly swap: Maybe<ICartSwap>;
    readonly type: OfferType;
}

export interface ICartAppliedReward {
    readonly __typename?: "CartAppliedReward";
    readonly cartId: Scalars["ID"];
    readonly rewardId: Scalars["ID"];
    readonly sanityId: Maybe<Scalars["ID"]>;
    readonly timesApplied: Scalars["Int"];
}

export interface ICartEntries {
    readonly __typename?: "CartEntries";
    readonly children: Maybe<ReadonlyArray<Maybe<ICartEntries>>>;
    readonly image: Maybe<Scalars["String"]>;
    readonly lineId: Scalars["String"];
    readonly name: Maybe<Scalars["String"]>;
    readonly offerVendorConfigs: Maybe<IVendorConfigs>;
    readonly pickerSelections: Maybe<Scalars["String"]>;
    readonly plu: Maybe<IPlu>;
    readonly price: Maybe<Scalars["Int"]>;
    readonly quantity: Scalars["Int"];
    readonly redeemable: Maybe<Scalars["Boolean"]>;
    readonly isExtra: Maybe<Scalars["Boolean"]>;
    readonly isInMenu: Maybe<Scalars["Boolean"]>;
    readonly isDonation: Maybe<Scalars["Boolean"]>;
    readonly sanityId: Scalars["String"];
    readonly type: CartEntryType;
    readonly url: Maybe<Scalars["String"]>;
    readonly vendorConfigs: Maybe<IVendorConfigs>;
}

export interface ICartEntryInput {
    readonly children?: Maybe<ReadonlyArray<ICartEntryInput>>;
    readonly image?: Maybe<Scalars["String"]>;
    readonly lineId: Scalars["String"];
    readonly name?: Maybe<Scalars["String"]>;
    readonly pickerSelections?: Maybe<Scalars["String"]>;
    readonly price?: Maybe<Scalars["Int"]>;
    readonly quantity: Scalars["Int"];
    readonly sanityId: Scalars["String"];
    readonly type: CartEntryType;
    readonly isExtra?: Maybe<Scalars["Boolean"]>;
    readonly isDonation?: Maybe<Scalars["Boolean"]>;
    readonly url?: Maybe<Scalars["String"]>;
    readonly offerVendorConfigs?: Maybe<IVendorConfigsInput>;
    readonly plu?: Maybe<IPluInput>;
    readonly vendorConfigs?: Maybe<IVendorConfigsInput>;
    readonly productHierarchy?: Maybe<IProductHierarchyInput>;
}

export enum CartEntryType {
    COMBO = "Combo",
    COMBOSLOT = "ComboSlot",
    ITEM = "Item",
    ITEMOPTION = "ItemOption",
    ITEMOPTIONMODIFIER = "ItemOptionModifier",
    OFFERCOMBO = "OfferCombo",
    OFFERDISCOUNT = "OfferDiscount",
    OFFERITEM = "OfferItem"
}

export enum CartOfferState {
    ACTIVE = "ACTIVE",
    CONSUMED = "CONSUMED",
    INACTIVE = "INACTIVE"
}

export enum CartPaymentCardType {
    AMEX = "AMEX",
    APPLE_PAY = "APPLE_PAY",
    CASH = "CASH",
    CREDIT = "CREDIT",
    DINERS = "DINERS",
    DINERS_CLUB = "DINERS_CLUB",
    DISCOVER = "DISCOVER",
    GOOGLE_PAY = "GOOGLE_PAY",
    JCB = "JCB",
    MASTERCARD = "MASTERCARD",
    VISA = "VISA",
    GIFT_CARD = "GIFT_CARD",
    PAYPAL = "PAYPAL"
}

export enum CartPaymentType {
    APPLE_PAY = "APPLE_PAY",
    CASH = "CASH",
    CREDIT_ANONYMOUS = "CREDIT_ANONYMOUS",
    GOOGLE_PAY = "GOOGLE_PAY",
    VAULTED_ACCOUNT = "VAULTED_ACCOUNT"
}

export interface ICartSwap {
    readonly __typename?: "CartSwap";
    readonly from: Scalars["String"];
    readonly to: Scalars["String"];
    readonly cartId: Scalars["String"];
    readonly swapType: Scalars["String"];
}

export interface ICatering {
    readonly __typename?: "Catering";
    readonly declineReason: Maybe<CateringDeclineReasons>;
    readonly notes: Maybe<Scalars["String"]>;
    readonly pickupTime: Scalars["String"];
}

export enum CateringDecision {
    ACCEPT = "Accept",
    DECLINE = "Decline"
}

export enum CateringDeclineReasons {
    CATERING_ORDER_TIME_OUT = "CATERING_ORDER_TIME_OUT",
    INTERNAL_ERROR = "INTERNAL_ERROR",
    INVENTORY = "INVENTORY",
    STAFFING = "STAFFING",
    TIMING = "TIMING"
}

export interface ICateringInfoInput {
    readonly pickupTime: Scalars["String"];
}

export interface ICognitoCredentials {
    readonly __typename?: "CognitoCredentials";
    readonly sessionId: Scalars["String"];
    readonly challengeCode: Scalars["String"];
    readonly user: IUser;
}

export interface ICommitDeliveryInput {
    readonly instructions?: Maybe<Scalars["String"]>;
    readonly pushNotification?: Maybe<Scalars["Boolean"]>;
    readonly tipCents?: Maybe<Scalars["Int"]>;
    readonly dropOff?: Maybe<IDeliveryWaypointInput>;
    readonly dropoff?: Maybe<IDeliveryWaypointInput>;
}

export interface ICommitOrderInput {
    readonly billingAddress?: Maybe<IBillingAddressInput>;
    readonly ccBin?: Maybe<Scalars["String"]>;
    readonly ccExpiryMonth?: Maybe<Scalars["String"]>;
    readonly ccExpiryYear?: Maybe<Scalars["String"]>;
    readonly ccLast4?: Maybe<Scalars["String"]>;
    readonly chaseProfileId?: Maybe<Scalars["String"]>;
    readonly creditType?: Maybe<CartPaymentCardType>;
    readonly storeEmail?: Maybe<Scalars["String"]>;
    readonly fdAccessToken?: Maybe<Scalars["String"]>;
    readonly fdNonce?: Maybe<Scalars["String"]>;
    readonly fdAccountId?: Maybe<Scalars["String"]>;
    readonly fireOrderIn?: Maybe<Scalars["Int"]>;
    readonly fullName?: Maybe<Scalars["String"]>;
    readonly payment?: Maybe<IPaymentInput>;
    readonly rbiOrderId: Scalars["ID"];
    readonly kountSessionId?: Maybe<Scalars["String"]>;
    readonly sessionId?: Maybe<Scalars["String"]>;
    readonly redeemedOn?: Maybe<Scalars["String"]>;
    readonly applePayDetails?: Maybe<IApplePay>;
    readonly googlePayDetails?: Maybe<IGooglePay>;
    readonly threeDSDetails?: Maybe<IResumeThreeDSaleTransaction>;
}

export interface ICommunicationPreference {
    readonly __typename?: "CommunicationPreference";
    readonly id: Maybe<Scalars["String"]>;
    readonly value: Maybe<Scalars["String"]>;
}

export interface ICommunicationPreferenceInput {
    readonly asBoolean?: Maybe<Scalars["Boolean"]>;
    readonly asNumber?: Maybe<Scalars["Boolean"]>;
    readonly id?: Maybe<Scalars["String"]>;
    readonly value?: Maybe<Scalars["String"]>;
}

export interface IConfirmCateringOrderInput {
    readonly cateringJwt: Scalars["String"];
    readonly decision: CateringDecision;
    readonly declineReason?: Maybe<CateringDeclineReasons>;
}

export interface IConnection {
    readonly edges: ReadonlyArray<IEdge>;
    readonly nodes: ReadonlyArray<INode>;
    readonly pageInfo: IPageInfo;
    readonly totalCount: Maybe<Scalars["Int"]>;
}

export interface ICoordinates {
    readonly userLat?: Maybe<Scalars["Float"]>;
    readonly userLng?: Maybe<Scalars["Float"]>;
    readonly searchRadius?: Maybe<Scalars["Float"]>;
}

export interface ICoordinatesInput {
    readonly latitude: Scalars["Float"];
    readonly longitude: Scalars["Float"];
}

export enum CountryCode {
    CA = "CA",
    CH = "CH",
    DE = "DE",
    GB = "GB",
    US = "US",
    ZA = "ZA"
}

export interface ICoupon {
    readonly __typename?: "Coupon";
    readonly couponId: Scalars["ID"];
    readonly createdAt: Scalars["String"];
    readonly expiresOn: Maybe<Scalars["String"]>;
    readonly pk: Scalars["String"];
    readonly redeemedOn: Maybe<Scalars["String"]>;
    readonly revision: Scalars["Int"];
    readonly sk: Scalars["String"];
    readonly updatedAt: Scalars["String"];
    readonly userId: Scalars["ID"];
    readonly userSortKey: Scalars["String"];
}

export interface ICouponEvaluationFeedback {
    readonly __typename?: "CouponEvaluationFeedback";
    readonly code: Scalars["String"];
    readonly condition: Scalars["Boolean"];
    readonly expiresOn: Maybe<Scalars["String"]>;
    readonly message: Scalars["String"];
    readonly redeemableForSeconds: Maybe<Scalars["Int"]>;
    readonly redeemableInSeconds: Maybe<Scalars["Int"]>;
    readonly ruleSetIndex: Maybe<Scalars["Int"]>;
    readonly ruleSetType: Scalars["String"];
    readonly sanityId: Maybe<Scalars["String"]>;
}

export interface ICouponListResponse {
    readonly __typename?: "CouponListResponse";
    readonly count: Scalars["Int"];
    readonly coupons: ReadonlyArray<Maybe<ICoupon>>;
    readonly resumeAfter: Maybe<Scalars["String"]>;
}

export interface ICouponRedemptionEligibility {
    readonly __typename?: "CouponRedemptionEligibility";
    readonly expiresOn: Maybe<Scalars["String"]>;
    readonly evaluationFeedback: ReadonlyArray<
        Maybe<ICouponEvaluationFeedback>
    >;
    readonly isRedeemable: Scalars["Boolean"];
    readonly isValid: Scalars["Boolean"];
    readonly redeemedOn: Scalars["String"];
    readonly validationErrors: ReadonlyArray<Maybe<ICouponValidationError>>;
}

export interface ICouponToken {
    readonly __typename?: "CouponToken";
    readonly comments: Maybe<Scalars["String"]>;
    readonly couponId: Scalars["ID"];
    readonly createdAt: Scalars["String"];
    readonly expiresOn: Maybe<Scalars["String"]>;
    readonly reason: Maybe<Scalars["String"]>;
    readonly pk: Scalars["String"];
    readonly supportCognitoId: Maybe<Scalars["String"]>;
    readonly supportEmail: Maybe<Scalars["String"]>;
    readonly tokenId: Scalars["ID"];
    readonly userId: Scalars["ID"];
}

export interface ICouponTokenListResponse {
    readonly __typename?: "CouponTokenListResponse";
    readonly count: Scalars["Int"];
    readonly resumeAfter: Maybe<Scalars["String"]>;
    readonly tokens: ReadonlyArray<Maybe<ICouponToken>>;
}

export interface ICouponUserOffersFeedback {
    readonly __typename?: "CouponUserOffersFeedback";
    readonly cart: Maybe<ICart>;
    readonly offersFeedback: ReadonlyArray<
        Maybe<ICouponUserOffersFeedbackEntry>
    >;
}

export interface ICouponUserOffersFeedbackEntry {
    readonly __typename?: "CouponUserOffersFeedbackEntry";
    readonly cartEntry: Maybe<ICartEntries>;
    readonly couponId: Scalars["String"];
    readonly isLoyalty: Maybe<Scalars["Boolean"]>;
    readonly offerDetails: Maybe<Scalars["String"]>;
    readonly offerState: Maybe<CartOfferState>;
    readonly offerVariables: Maybe<ReadonlyArray<Maybe<IOfferVariable>>>;
    readonly rank: Maybe<Scalars["Int"]>;
    readonly redemptionEligibility: ICouponRedemptionEligibility;
    readonly tokenId: Maybe<Scalars["String"]>;
}

export interface ICouponValidationError {
    readonly __typename?: "CouponValidationError";
    readonly code: Scalars["String"];
    readonly message: Scalars["String"];
    readonly ruleSetType: Scalars["String"];
}

export interface ICreateOtp {
    readonly __typename?: "CreateOTP";
    readonly maxLoginAttempts: Scalars["Int"];
    readonly maxValidateAttempts: Scalars["Int"];
    readonly ttl: Scalars["Int"];
}

export interface ICreateOtpInput {
    readonly email?: Maybe<Scalars["String"]>;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly platform: Platform;
    readonly sessionId: Scalars["ID"];
}

export interface ICreateQuoteRequestInput {
    readonly dropoffAddress: IDropoffAddressInput;
    readonly platform: Scalars["String"];
}

export interface ICreditCard {
    readonly __typename?: "CreditCard";
    readonly alias: Scalars["String"];
    readonly billingAddress: Maybe<IBillingAddress>;
    readonly cardType: Scalars["String"];
    readonly expiryMonth: Scalars["String"];
    readonly expiryYear: Scalars["String"];
    readonly fullName: Scalars["String"];
    readonly panToken: Maybe<Scalars["String"]>;
}

export interface ICreditCardMetadataInput {
    readonly ccBin?: Maybe<Scalars["String"]>;
    readonly ccExpiryMonth?: Maybe<Scalars["String"]>;
    readonly ccExpiryYear?: Maybe<Scalars["String"]>;
    readonly ccLast4?: Maybe<Scalars["String"]>;
    readonly creditType?: Maybe<CartPaymentCardType>;
}

export interface ICurrencyCode {
    readonly __typename?: "CurrencyCode";
    readonly code: Scalars["String"];
    readonly number: Scalars["Int"];
}

export interface IDay {
    readonly __typename?: "Day";
    readonly close: Maybe<Scalars["String"]>;
    readonly open: Maybe<Scalars["String"]>;
}

export interface IDeleteAccountInput {
    readonly accountIdentifier?: Maybe<Scalars["String"]>;
    readonly fdAccountId?: Maybe<Scalars["String"]>;
}

export interface IDelivery {
    readonly __typename?: "Delivery";
    readonly assignedFleetName: Maybe<Scalars["String"]>;
    readonly baseDeliveryFeeCents: Maybe<Scalars["Int"]>;
    readonly cancellation: Maybe<IDeliveryCancellation>;
    readonly customerId: Maybe<Scalars["String"]>;
    readonly driver: Maybe<IDeliveryDriver>;
    readonly dropoff: IDeliveryWaypoint;
    readonly estimateId: Maybe<Scalars["String"]>;
    readonly expiration: Maybe<Scalars["String"]>;
    readonly feeCents: Scalars["Int"];
    readonly feeDiscountCents: Maybe<Scalars["Int"]>;
    readonly deliverySurchargeFeeCents: Maybe<Scalars["Int"]>;
    readonly fleetId: Maybe<Scalars["String"]>;
    readonly geographicalFeeCents: Maybe<Scalars["Int"]>;
    readonly instructions: Maybe<Scalars["String"]>;
    readonly pickup: IDeliveryWaypoint;
    readonly quoteId: Maybe<Scalars["String"]>;
    readonly quotedFeeCents: Maybe<Scalars["Int"]>;
    readonly serviceFeeCents: Maybe<Scalars["Int"]>;
    readonly shareUuid: Maybe<Scalars["String"]>;
    readonly smallCartFeeCents: Maybe<Scalars["Int"]>;
    readonly status: DeliveryStatus;
    readonly task: Maybe<IDeliveryTaskDetails>;
    readonly tipCents: Maybe<Scalars["Int"]>;
    readonly userId: Maybe<Scalars["String"]>;
}

export interface IDeliveryAddress {
    readonly __typename?: "DeliveryAddress";
    readonly addressLine1: Scalars["String"];
    readonly addressLine2: Maybe<Scalars["String"]>;
    readonly city: Scalars["String"];
    readonly country: Maybe<IsoCountryCode>;
    readonly phoneNumber: Scalars["String"];
    readonly state: Maybe<Scalars["String"]>;
    readonly zip: Maybe<Scalars["String"]>;
    readonly latitude: Maybe<Scalars["Float"]>;
    readonly longitude: Maybe<Scalars["Float"]>;
    readonly route: Maybe<Scalars["String"]>;
    readonly streetNumber: Maybe<Scalars["String"]>;
}

export interface IDeliveryCancellation {
    readonly __typename?: "DeliveryCancellation";
    readonly description: Maybe<Scalars["String"]>;
    readonly id: Maybe<Scalars["Int"]>;
    readonly text: Maybe<Scalars["String"]>;
}

export interface IDeliveryCoordinates {
    readonly __typename?: "DeliveryCoordinates";
    readonly latitude: Scalars["Float"];
    readonly longitude: Scalars["Float"];
}

export interface IDeliveryDriver {
    readonly __typename?: "DeliveryDriver";
    readonly name: Maybe<Scalars["String"]>;
    readonly phoneNumber: Maybe<Scalars["String"]>;
    readonly profileImageUrl: Maybe<Scalars["String"]>;
}

export interface IDeliveryRestaurant {
    readonly __typename?: "DeliveryRestaurant";
    readonly restaurant: Maybe<IRestaurantNode>;
    readonly storeStatus: DeliveryStoreStatus;
    readonly quote: Maybe<DeliveryStatus>;
    readonly nextEarliestOpen: Maybe<Scalars["String"]>;
    readonly deliverySurchargeFeeCents: Maybe<Scalars["Int"]>;
    readonly quoteId: Maybe<Scalars["String"]>;
}

export enum DeliveryStatus {
    DRIVER_ASSIGNED = "DRIVER_ASSIGNED",
    DRIVER_AT_CUSTOMER = "DRIVER_AT_CUSTOMER",
    DRIVER_AT_STORE = "DRIVER_AT_STORE",
    DRIVER_STARTING = "DRIVER_STARTING",
    DRIVER_UNASSIGNED = "DRIVER_UNASSIGNED",
    ORDER_ABANDONED = "ORDER_ABANDONED",
    ORDER_CANCELLED = "ORDER_CANCELLED",
    ORDER_CREATED = "ORDER_CREATED",
    ORDER_DROPPED_OFF = "ORDER_DROPPED_OFF",
    ORDER_ERROR = "ORDER_ERROR",
    ORDER_PICKED_UP = "ORDER_PICKED_UP",
    ORDER_TIMEOUT = "ORDER_TIMEOUT",
    QUOTE_ERROR = "QUOTE_ERROR",
    QUOTE_REQUESTED = "QUOTE_REQUESTED",
    QUOTE_SUCCESSFUL = "QUOTE_SUCCESSFUL",
    QUOTE_UNAVAILABLE = "QUOTE_UNAVAILABLE"
}

export enum DeliveryStoreStatus {
    OPEN = "OPEN",
    CLOSED = "CLOSED",
    NO_DELIVERY = "NO_DELIVERY"
}

export interface IDeliveryTaskDetails {
    readonly __typename?: "DeliveryTaskDetails";
    readonly createdAt: Maybe<Scalars["String"]>;
    readonly id: Maybe<Scalars["String"]>;
    readonly status: Maybe<Scalars["String"]>;
    readonly uuid: Maybe<Scalars["String"]>;
}

export interface IDeliveryWaypoint {
    readonly __typename?: "DeliveryWaypoint";
    readonly afterTime: Maybe<Scalars["String"]>;
    readonly arrivalTime: Maybe<Scalars["String"]>;
    readonly beforeTime: Maybe<Scalars["String"]>;
    readonly id: Maybe<Scalars["String"]>;
    readonly addressLine1: Scalars["String"];
    readonly addressLine2: Maybe<Scalars["String"]>;
    readonly city: Scalars["String"];
    readonly country: Maybe<Scalars["String"]>;
    readonly phoneNumber: Scalars["String"];
    readonly state: Maybe<Scalars["String"]>;
    readonly zip: Maybe<Scalars["String"]>;
    readonly latitude: Maybe<Scalars["Float"]>;
    readonly longitude: Maybe<Scalars["Float"]>;
    readonly shareUuid: Maybe<Scalars["String"]>;
    readonly trackingUrl: Maybe<Scalars["String"]>;
}

export interface IDeliveryWaypointInput {
    readonly addressLine1: Scalars["String"];
    readonly addressLine2?: Maybe<Scalars["String"]>;
    readonly city: Scalars["String"];
    readonly country?: Maybe<Scalars["String"]>;
    readonly phoneNumber: Scalars["String"];
    readonly route?: Maybe<Scalars["String"]>;
    readonly shouldSave?: Maybe<Scalars["Boolean"]>;
    readonly state?: Maybe<Scalars["String"]>;
    readonly streetNumber?: Maybe<Scalars["String"]>;
    readonly zip?: Maybe<Scalars["String"]>;
    readonly latitude?: Maybe<Scalars["Float"]>;
    readonly longitude?: Maybe<Scalars["Float"]>;
}

export interface IDiscount {
    readonly __typename?: "Discount";
    readonly name: Maybe<DiscountTypes>;
    readonly value: Maybe<Scalars["Int"]>;
}

export enum DiscountTypes {
    ALL_DISCOUNTS = "ALL_DISCOUNTS",
    COMBO_AND_OFFER_DISCOUNTS = "COMBO_AND_OFFER_DISCOUNTS",
    REWARDS_DISCOUNTS = "REWARDS_DISCOUNTS"
}

export interface IDonation {
    readonly __typename?: "Donation";
    readonly id: Maybe<Scalars["String"]>;
    readonly name: Maybe<Scalars["String"]>;
    readonly totalCents: Maybe<Scalars["Int"]>;
}

export interface IDropoffAddress {
    readonly __typename?: "DropoffAddress";
    readonly administrativeArea: Maybe<Scalars["String"]>;
    readonly coordinates: Maybe<IDeliveryCoordinates>;
    readonly formattedAddress: Scalars["String"];
    readonly instructions: Maybe<Scalars["String"]>;
    readonly locality: Maybe<Scalars["String"]>;
    readonly postalCode: Maybe<Scalars["String"]>;
    readonly regionCode: Scalars["String"];
    readonly route: Scalars["String"];
    readonly streetNumber: Scalars["String"];
    readonly sublocality: Maybe<Scalars["String"]>;
    readonly subpremise: Maybe<Scalars["String"]>;
}

export interface IDropoffAddressInput {
    readonly administrativeArea?: Maybe<Scalars["String"]>;
    readonly coordinates?: Maybe<ICoordinatesInput>;
    readonly formattedAddress: Scalars["String"];
    readonly instructions?: Maybe<Scalars["String"]>;
    readonly locality?: Maybe<Scalars["String"]>;
    readonly postalCode?: Maybe<Scalars["String"]>;
    readonly regionCode: Scalars["String"];
    readonly route: Scalars["String"];
    readonly streetNumber: Scalars["String"];
    readonly sublocality?: Maybe<Scalars["String"]>;
    readonly subpremise?: Maybe<Scalars["String"]>;
}

export interface IDropoffWindow {
    readonly __typename?: "DropoffWindow";
    readonly endTime: Scalars["String"];
    readonly startTime: Scalars["String"];
}

export interface IEdge {
    readonly node: INode;
    readonly cursor: Scalars["String"];
}

export interface IEncryptionDetails {
    readonly __typename?: "EncryptionDetails";
    readonly fdPublicKey: Scalars["String"];
    readonly fdAccessToken: Scalars["String"];
    readonly fdPublicKeyExpiresInSeconds: Scalars["Int"];
    readonly fdPublicKeyIssuesOn: Scalars["String"];
    readonly fdApiKey: Scalars["String"];
    readonly algorithm: Maybe<Scalars["String"]>;
    readonly fdCustomerId: Maybe<Scalars["String"]>;
}

export interface IExchangeOtpCodeForCredentialsInput {
    readonly code: Scalars["String"];
    readonly email?: Maybe<Scalars["String"]>;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly sessionId: Scalars["ID"];
}

export interface IFavorite {
    readonly __typename?: "Favorite";
    readonly entries: Maybe<ReadonlyArray<Maybe<ICartEntries>>>;
    readonly favoriteId: Maybe<Scalars["String"]>;
    readonly name: Maybe<Scalars["String"]>;
    readonly ref: Maybe<Scalars["String"]>;
    readonly createdAt: Maybe<Scalars["String"]>;
    readonly updatedAt: Maybe<Scalars["String"]>;
}

export interface IFavoriteInput {
    readonly ref?: Maybe<Scalars["String"]>;
    readonly name?: Maybe<Scalars["String"]>;
    readonly entries?: Maybe<ReadonlyArray<Maybe<ICartEntryInput>>>;
}

export interface IFavoriteList {
    readonly __typename?: "FavoriteList";
    readonly count: Maybe<Scalars["Int"]>;
    readonly favorites: Maybe<ReadonlyArray<Maybe<IFavorite>>>;
    readonly resumeAfter: Maybe<Scalars["String"]>;
}

export interface IFavoriteStore {
    readonly __typename?: "FavoriteStore";
    readonly storeId: Maybe<Scalars["String"]>;
    readonly storeNumber: Maybe<Scalars["String"]>;
}

export interface IFavoriteStoreInput {
    readonly storeId?: Maybe<Scalars["String"]>;
    readonly storeNumber?: Maybe<Scalars["String"]>;
}

export interface IFees {
    readonly __typename?: "Fees";
    readonly name: Maybe<Scalars["String"]>;
    readonly priceCents: Maybe<Scalars["Int"]>;
    readonly quantity: Maybe<Scalars["Int"]>;
    readonly totalCents: Maybe<Scalars["Int"]>;
}

export enum FilterRestaurantType {
    NEARBY = "NEARBY",
    RECENT = "RECENT",
    FAVORITE = "FAVORITE"
}

export interface IFirstDataPayment {
    readonly accountIdentifier?: Maybe<Scalars["String"]>;
    readonly fdAccessToken?: Maybe<Scalars["String"]>;
    readonly fdNonce?: Maybe<Scalars["String"]>;
}

export interface IFulfillmentDetails {
    readonly __typename?: "FulfillmentDetails";
    readonly pickupType: Maybe<FulfillmentPickupType>;
    readonly pickupReady: Maybe<Scalars["Boolean"]>;
}

export enum FulfillmentPickupType {
    BEEPER = "BEEPER",
    LOCKER = "LOCKER"
}

export interface IGenerateVrPaymentPayPalFastLinkInput {
    readonly rbiOrderId: Scalars["String"];
    readonly deviceToken: Scalars["String"];
    readonly response: Scalars["String"];
}

export interface IGenerateVrPaymentVaultLinkInput {
    readonly rbiOrderId: Scalars["String"];
    readonly accountIdentifier: Scalars["String"];
    readonly browserInfo: IBrowserInfoInput;
}

export interface IGiftAccount {
    readonly __typename?: "GiftAccount";
    readonly fdAccountId: Scalars["String"];
    readonly prepaid: IGiftCard;
}

export interface IGiftCard {
    readonly __typename?: "GiftCard";
    readonly alias: Scalars["String"];
    readonly currentBalance: Maybe<Scalars["Int"]>;
    readonly cardNumber: Scalars["String"];
    readonly expiryMonth: Scalars["String"];
    readonly expiryYear: Scalars["String"];
    readonly feFormattedCurrentBalance: Maybe<Scalars["Int"]>;
    readonly shuffledCardNumber: Scalars["String"];
}

export interface IGiftOffer {
    readonly __typename?: "GiftOffer";
    readonly offerId: Scalars["ID"];
    readonly title: Scalars["String"];
    readonly titleFormatted: Scalars["String"];
    readonly isRedeemable: Scalars["Boolean"];
    readonly costInPoints: Scalars["Int"];
}

export interface IGiftOfferInput {
    readonly offerId: Scalars["String"];
    readonly toEmail: Scalars["String"];
    readonly fromName: Scalars["String"];
    readonly message: Scalars["String"];
}

export interface IGiftOfferListResponse {
    readonly __typename?: "GiftOfferListResponse";
    readonly count: Scalars["Int"];
    readonly offers: ReadonlyArray<Maybe<IGiftOffer>>;
}

export interface IGooglePay {
    readonly signature: Scalars["String"];
    readonly country: CountryCode;
    readonly data: Scalars["String"];
    readonly formatted: Scalars["String"];
    readonly primary: Scalars["Boolean"];
    readonly version: Scalars["String"];
    readonly type: Scalars["String"];
    readonly billingAddress: IBillingAddressInput;
    readonly paymentData?: Maybe<Scalars["String"]>;
    readonly PaymentMethodData?: Maybe<IPaymentMethodData>;
}

export interface IItem {
    readonly id?: Maybe<Scalars["String"]>;
    readonly quantity?: Maybe<Scalars["Int"]>;
}

export enum Locale {
    EN = "en",
    FR = "fr",
    IT = "it",
    DE = "de"
}

export interface ILoyaltyBalance {
    readonly amount: Scalars["Float"];
    readonly currency: Scalars["String"];
}

export interface ILoyaltyCard {
    readonly __typename?: "LoyaltyCard";
    readonly barcode: Scalars["String"];
    readonly cardFormat: UserCardCardFormat;
    readonly cardId: Scalars["String"];
    readonly cardType: UserCardCardType;
    readonly name: Scalars["String"];
    readonly status: UserCardCardStatus;
}

export interface ILoyaltyCardApplePass {
    readonly __typename?: "LoyaltyCardApplePass";
    readonly encodedPass: Scalars["String"];
}

export interface ILoyaltyCardDetails {
    readonly __typename?: "LoyaltyCardDetails";
    readonly availableRedemptions: Scalars["Int"];
    readonly barcode: Maybe<Scalars["String"]>;
    readonly canEarnVisit: Scalars["Boolean"];
    readonly canRedeemReward: Scalars["Boolean"];
    readonly cardType: UserCardCardType;
    readonly discountActiveUntil: Maybe<Scalars["String"]>;
    readonly numberOfTransactionsInTimePeriod: Scalars["Int"];
    readonly numberOfTransactionsMadeTowardsNextReward: Scalars["Int"];
    readonly numberOfTransactionsNeeded: Scalars["Int"];
    readonly offers: ReadonlyArray<Maybe<ILoyaltyOffer>>;
    readonly periodEndTimestamp: Scalars["String"];
    readonly periodStartTimestamp: Scalars["String"];
    readonly pointExpiry: ReadonlyArray<ILoyaltyPointExpiry>;
    readonly points: Maybe<Scalars["Int"]>;
    readonly rewardsTier: Maybe<Scalars["String"]>;
    readonly donationUpcharge: Maybe<Scalars["Boolean"]>;
    readonly scanAndPay: Maybe<Scalars["Boolean"]>;
}

export interface ILoyaltyCardDetailsKiosk {
    readonly __typename?: "LoyaltyCardDetailsKiosk";
    readonly availableRedemptions: Scalars["Int"];
    readonly currentPoints: Scalars["Int"];
    readonly numberOfTransactionsInTimePeriod: Scalars["Int"];
    readonly numberOfTransactionsNeeded: Scalars["Int"];
    readonly numberOfTransactionsMadeTowardsNextReward: Scalars["Int"];
}

export interface ILoyaltyCardGooglePass {
    readonly __typename?: "LoyaltyCardGooglePass";
    readonly jwt: Scalars["String"];
}

export interface ILoyaltyCardsResp {
    readonly __typename?: "LoyaltyCardsResp";
    readonly cards: ReadonlyArray<Maybe<ILoyaltyCard>>;
    readonly count: Scalars["Int"];
}

export interface ILoyaltyCardTransaction {
    readonly __typename?: "LoyaltyCardTransaction";
    readonly basketTaxes: Maybe<Scalars["Int"]>;
    readonly bonusPoints: Maybe<Scalars["Int"]>;
    readonly basketTotal: Maybe<Scalars["Int"]>;
    readonly city: Maybe<Scalars["String"]>;
    readonly discountAmount: Maybe<Scalars["Int"]>;
    readonly expiredPoints: Maybe<ILoyaltyExpiredPoints>;
    readonly isCustomerServiceVisit: Maybe<Scalars["Boolean"]>;
    readonly isVisit: Maybe<Scalars["Boolean"]>;
    readonly offerId: Maybe<Scalars["Int"]>;
    readonly pointsEarned: Maybe<Scalars["Int"]>;
    readonly pointsUsed: Maybe<Scalars["Int"]>;
    readonly rewardEarned: Maybe<Scalars["Boolean"]>;
    readonly rewardRedeemed: Maybe<Scalars["Boolean"]>;
    readonly stateOrProvince: Maybe<Scalars["String"]>;
    readonly storeId: Maybe<Scalars["String"]>;
    readonly tag: Maybe<Scalars["String"]>;
    readonly timestamp: Maybe<Scalars["String"]>;
    readonly transactionId: Maybe<Scalars["String"]>;
    readonly visitType: Maybe<Scalars["String"]>;
    readonly wasDiscountActive: Maybe<Scalars["Boolean"]>;
}

export interface ILoyaltyCardTransactions {
    readonly __typename?: "LoyaltyCardTransactions";
    readonly count: Scalars["Int"];
    readonly transactions: ReadonlyArray<Maybe<ILoyaltyCardTransaction>>;
}

export interface ILoyaltyDonationUpcharge {
    readonly __typename?: "LoyaltyDonationUpcharge";
    readonly donationUpcharge: Maybe<Scalars["Boolean"]>;
}

export interface ILoyaltyExpiredPoints {
    readonly __typename?: "LoyaltyExpiredPoints";
    readonly barcode: Maybe<Scalars["String"]>;
    readonly expirationDate: Maybe<Scalars["String"]>;
    readonly points: Maybe<Scalars["Int"]>;
    readonly ttl: Maybe<Scalars["String"]>;
}

export interface ILoyaltyOffer {
    readonly __typename?: "LoyaltyOffer";
    readonly activated: Scalars["Boolean"];
    readonly challengeStatus: Maybe<
        ReadonlyArray<Maybe<ILoyaltyOfferChallengeStatus>>
    >;
    readonly challengeType: Maybe<Scalars["String"]>;
    readonly challengeReward: Maybe<ILoyaltyOfferRewardType>;
    readonly expiryDate: Scalars["String"];
    readonly key: Maybe<Scalars["String"]>;
    readonly offerId: Scalars["String"];
    readonly startDate: Scalars["String"];
}

export interface ILoyaltyOfferChallengeStatus {
    readonly __typename?: "LoyaltyOfferChallengeStatus";
    readonly goals: Maybe<ILoyaltyOfferGoalType>;
    readonly goalId: Scalars["String"];
    readonly reward: Maybe<ILoyaltyOfferRewardType>;
    readonly status: Scalars["String"];
}

export interface ILoyaltyOfferGoalType {
    readonly __typename?: "LoyaltyOfferGoalType";
    readonly category: Maybe<Scalars["String"]>;
    readonly daypart: Maybe<Scalars["String"]>;
    readonly foodType: Maybe<Scalars["String"]>;
    readonly minSpend: Maybe<Scalars["Int"]>;
}

export interface ILoyaltyOfferRewardType {
    readonly __typename?: "LoyaltyOfferRewardType";
    readonly points: Maybe<Scalars["Int"]>;
}

export interface ILoyaltyPointExpiry {
    readonly __typename?: "LoyaltyPointExpiry";
    readonly points: Scalars["Int"];
    readonly expirationDate: Scalars["String"];
}

export interface ILoyaltyRewardsTier {
    readonly __typename?: "LoyaltyRewardsTier";
    readonly rewardsTier: Maybe<Scalars["String"]>;
}

export interface ILoyaltyRollUpTheRimPrizesStats {
    readonly __typename?: "LoyaltyRollUpTheRimPrizesStats";
    readonly total: Maybe<Scalars["Int"]>;
    readonly awarded: Maybe<Scalars["Int"]>;
    readonly details: Maybe<
        ReadonlyArray<Maybe<ILoyaltyRollUpTheRimPrizeStats>>
    >;
}

export interface ILoyaltyRollUpTheRimPrizeStats {
    readonly __typename?: "LoyaltyRollUpTheRimPrizeStats";
    readonly prizeId: Maybe<Scalars["String"]>;
    readonly total: Maybe<Scalars["Int"]>;
    readonly awarded: Maybe<Scalars["Int"]>;
}

export interface ILoyaltyRollUpTheRimTimelineEventAcceptSharedRollEntry {
    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventAcceptSharedRollEntry";
    readonly barcode: Scalars["String"];
    readonly createdAt: Scalars["String"];
    readonly eventId: Scalars["String"];
    readonly referenceId: Scalars["String"];
}

export interface ILoyaltyRollUpTheRimTimelineEventAcceptSharedRollsList {
    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventAcceptSharedRollsList";
    readonly count: Scalars["Int"];
    readonly rolls: ReadonlyArray<
        Maybe<ILoyaltyRollUpTheRimTimelineEventAcceptSharedRollEntry>
    >;
}

export interface ILoyaltyRollUpTheRimTimelineEventDetails {
    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventDetails";
    readonly redemptionCode: Maybe<Scalars["String"]>;
}

export interface ILoyaltyRollUpTheRimTimelineEventEntry {
    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventEntry";
    readonly barcode: Maybe<Scalars["String"]>;
    readonly createdAt: Scalars["String"];
    readonly eventId: Scalars["String"];
    readonly prizeId: Maybe<Scalars["String"]>;
    readonly referenceId: Scalars["String"];
    readonly timelineId: Scalars["String"];
    readonly type: Scalars["String"];
    readonly offerStatus: Maybe<ILoyaltyRollUpTheRimTimelineEventOfferStatus>;
    readonly redemptionCode: Maybe<Scalars["String"]>;
    readonly details: Maybe<ILoyaltyRollUpTheRimTimelineEventDetails>;
}

export interface ILoyaltyRollUpTheRimTimelineEventList {
    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventList";
    readonly count: Scalars["Int"];
    readonly events: ReadonlyArray<
        Maybe<ILoyaltyRollUpTheRimTimelineEventEntry>
    >;
    readonly resumeAfter: Maybe<Scalars["String"]>;
}

export interface ILoyaltyRollUpTheRimTimelineEventOfferStatus {
    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventOfferStatus";
    readonly offerId: Maybe<Scalars["String"]>;
    readonly activated: Maybe<Scalars["Boolean"]>;
    readonly used: Maybe<Scalars["Boolean"]>;
}

export interface ILoyaltyRollUpTheRimTimelineEventRollResult {
    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventRollResult";
    readonly id: Scalars["String"];
    readonly type: Scalars["String"];
    readonly code: Maybe<Scalars["String"]>;
}

export interface ILoyaltyRollUpTheRimTimelineEventSharedRollTokenEntry {
    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventSharedRollTokenEntry";
    readonly count: Scalars["Int"];
    readonly token: Scalars["String"];
}

export interface ILoyaltyRollUpTheRimTimelineEventSharedRollTokenList {
    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventSharedRollTokenList";
    readonly count: Scalars["Int"];
    readonly tokens: ReadonlyArray<
        Maybe<ILoyaltyRollUpTheRimTimelineEventSharedRollTokenEntry>
    >;
}

export interface ILoyaltyRollUpTheRimTimelineEventShareRollResult {
    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventShareRollResult";
    readonly token: Scalars["String"];
}

export interface ILoyaltyRollUpTheRimTimelineEventSummaryEntry {
    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventSummaryEntry";
    readonly count: Scalars["Int"];
    readonly eventId: Scalars["String"];
}

export interface ILoyaltyRollUpTheRimTimelineEventSummaryList {
    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventSummaryList";
    readonly count: Scalars["Int"];
    readonly events: ReadonlyArray<
        Maybe<ILoyaltyRollUpTheRimTimelineEventSummaryEntry>
    >;
    readonly resumeAfter: Maybe<Scalars["String"]>;
}

export interface ILoyaltyScanAndPay {
    readonly __typename?: "LoyaltyScanAndPay";
    readonly scanAndPay: Maybe<Scalars["Boolean"]>;
}

export interface ILoyaltyTransaction {
    readonly __typename?: "LoyaltyTransaction";
    readonly id: Scalars["String"];
    readonly pointsEarned: Scalars["Int"];
    readonly bonusPointsEarned: Scalars["Int"];
    readonly pointsUsed: Scalars["Int"];
    readonly pointsBalance: Scalars["Int"];
    readonly rewardsUsed: Scalars["Int"];
}

export interface IMeInput {
    readonly shouldUniqueByModifiers?: Maybe<Scalars["Boolean"]>;
    readonly shouldIncludeExtras?: Maybe<Scalars["Boolean"]>;
}

export interface IMerge {
    readonly __typename?: "Merge";
    readonly beginBalance: Scalars["Int"];
    readonly currencyCode: Scalars["String"];
    readonly currentBalance: Scalars["Int"];
    readonly destinationCardNumber: Scalars["String"];
    readonly fdCorrelationId: Maybe<Scalars["String"]>;
    readonly sourceCardNumber: Scalars["String"];
    readonly transactionId: Scalars["String"];
    readonly fdAccountId: Maybe<Scalars["String"]>;
}

export interface IMissingItem {
    readonly lineId: Scalars["String"];
    readonly refundQuantity: Scalars["Int"];
    readonly totalQuantity?: Maybe<Scalars["Int"]>;
}

export interface IMissingOrderRefundDetails {
    readonly __typename?: "MissingOrderRefundDetails";
    readonly approvedAmount: Scalars["Int"];
    readonly transactionDateTime: Scalars["String"];
}

export interface IMissingOrderResolution {
    readonly __typename?: "MissingOrderResolution";
    readonly refund: Maybe<IMissingOrderRefundDetails>;
    readonly ticket: Maybe<Scalars["String"]>;
}

export interface IMutation {
    readonly __typename?: "Mutation";
    readonly createLoginForVendor: Maybe<Scalars["String"]>;
    readonly createOTP: ICreateOtp;
    readonly createLoginOTP: ICreateOtp;
    readonly attemptLoginOTP: IAttemptLoginOtpResponse;
    readonly signIn: Maybe<Scalars["Boolean"]>;
    readonly signUp: Maybe<Scalars["String"]>;
    readonly createLoyaltyUser: IUser;
    readonly signInJWT: Maybe<Scalars["Boolean"]>;
    readonly updateMe: IUser;
    readonly deleteMe: Maybe<Scalars["Boolean"]>;
    readonly requestMyInfo: Maybe<Scalars["Boolean"]>;
    readonly validateAuthJwt: ICognitoCredentials;
    readonly exchangeOTPCodeForCognitoCredentials: ICognitoCredentials;
    readonly resendCurrentLoginOTP: ICreateOtp;
    readonly resendVerificationEmail: Maybe<Scalars["Boolean"]>;
    readonly createFavorite: IFavorite;
    readonly updateFavorite: IFavorite;
    readonly deleteFavorite: IFavorite;
    readonly assignCouponToken: ICouponToken;
    readonly redeemCoupon: ICoupon;
    readonly sendQrSnapToDeepflame: Maybe<Scalars["Boolean"]>;
    readonly addGiftOfferByEmail: Scalars["Boolean"];
    readonly addOfferByToken: Scalars["Boolean"];
    readonly createSupportCase: Maybe<ISupportCase>;
    readonly acceptLoyaltyRollUpTheRimTimelineEventSharedRolls: Maybe<ILoyaltyRollUpTheRimTimelineEventAcceptSharedRollsList>;
    readonly activateLoyaltyOffer: Maybe<Scalars["Boolean"]>;
    readonly addVoucher: Maybe<Scalars["Boolean"]>;
    readonly claimLoyaltyRollUpTheRimPrize: Maybe<Scalars["Boolean"]>;
    readonly deleteLoyaltyCard: Maybe<ILoyaltyCard>;
    readonly mergeLoyaltyCards: Maybe<ILoyaltyCard>;
    readonly revealLoyaltyRollUpTheRimTimelineEventRoll: Maybe<ILoyaltyRollUpTheRimTimelineEventRollResult>;
    readonly setLoyaltyDonationUpcharge: Maybe<ILoyaltyDonationUpcharge>;
    readonly setLoyaltyRewardsTier: Maybe<ILoyaltyRewardsTier>;
    readonly setLoyaltyScanAndPay: Maybe<ILoyaltyScanAndPay>;
    readonly shareLoyaltyRollUpTheRimTimelineEventRolls: Maybe<ILoyaltyRollUpTheRimTimelineEventShareRollResult>;
    readonly quoteControllerCreateQuote: Maybe<IQuote>;
    readonly commitOrder: IOrder;
    readonly confirmCateringOrder: IOrder;
    readonly placeCateringOrder: IOrder;
    readonly priceOrder: IOrder;
    readonly updateOrder: IOrder;
    readonly userReportsMissingOrder: IMissingOrderResolution;
    readonly userRequestsRefund: IRefundRequestResponse;
    readonly validateCommitOrder: Maybe<IOrder>;
    readonly paybackAuthentication: IPaybackSessionToken;
    readonly revalidateSessionToken: IPaybackSessionToken;
    readonly getAccountBalance: Scalars["Int"];
    readonly getCardNumber: Scalars["String"];
    readonly addAccount: IAccount;
    readonly addCreditAccount: IAccount;
    readonly addGiftAccount: IGiftAccount;
    readonly deleteAccount: Maybe<Scalars["Boolean"]>;
    readonly encryptionDetails: IEncryptionDetails;
    readonly prepaidsBalance: IBalance;
    readonly prepaidsMerge: IMerge;
    readonly prepaidsReload: IReload;
    readonly voidSale: Maybe<ISale>;
    readonly generateVrPaymentCheckoutLink: IVrPaymentCheckoutLink;
    readonly generateVrPaymentVaultLink: IVrPaymentVaultLink;
    readonly generateVrPaymentPayPalFastLink: IVrPaymentPayPalFastLink;
    readonly createWllSession: Maybe<IWllSession>;
}

export interface IMutationCreateLoginForVendorArgs {
    vendor: Scalars["String"];
}

export interface IMutationCreateOtpArgs {
    input: ICreateOtpInput;
}

export interface IMutationCreateLoginOtpArgs {
    input: ICreateOtpInput;
}

export interface IMutationAttemptLoginOtpArgs {
    input: ICreateOtpInput;
}

export interface IMutationSignInArgs {
    userInfo: ISignInUserInput;
}

export interface IMutationSignUpArgs {
    userInfo: ISignUpUserInput;
}

export interface IMutationCreateLoyaltyUserArgs {
    cognitoId: Scalars["String"];
}

export interface IMutationSignInJwtArgs {
    userInfo: ISignInUserInput;
}

export interface IMutationUpdateMeArgs {
    details: IUpdateUserDetailsInput;
}

export interface IMutationValidateAuthJwtArgs {
    authInput: IValidateAuthJwtInput;
}

export interface IMutationExchangeOtpCodeForCognitoCredentialsArgs {
    input: IExchangeOtpCodeForCredentialsInput;
}

export interface IMutationResendCurrentLoginOtpArgs {
    input: IResendOtpInput;
}

export interface IMutationResendVerificationEmailArgs {
    input: IResendVerificationEmailInput;
}

export interface IMutationCreateFavoriteArgs {
    input: IFavoriteInput;
}

export interface IMutationUpdateFavoriteArgs {
    favoriteId: Scalars["String"];
    input: IFavoriteInput;
}

export interface IMutationDeleteFavoriteArgs {
    favoriteId: Scalars["String"];
}

export interface IMutationAssignCouponTokenArgs {
    couponId: Scalars["ID"];
    expiresOn: Maybe<Scalars["String"]>;
    tokenId: Maybe<Scalars["ID"]>;
    userId: Maybe<Scalars["ID"]>;
}

export interface IMutationRedeemCouponArgs {
    couponId: Scalars["ID"];
}

export interface IMutationSendQrSnapToDeepflameArgs {
    name: Scalars["String"];
    storeId: Scalars["String"];
    laneId: Scalars["String"];
    shortCode: Scalars["String"];
    balances: ReadonlyArray<ILoyaltyBalance>;
}

export interface IMutationAddGiftOfferByEmailArgs {
    input: IGiftOfferInput;
}

export interface IMutationAddOfferByTokenArgs {
    token: Scalars["String"];
}

export interface IMutationCreateSupportCaseArgs {
    caseInfo: ISupportCaseInput;
}

export interface IMutationAcceptLoyaltyRollUpTheRimTimelineEventSharedRollsArgs {
    token: Scalars["String"];
}

export interface IMutationActivateLoyaltyOfferArgs {
    tokenId: Scalars["String"];
}

export interface IMutationAddVoucherArgs {
    voucherId: Scalars["String"];
}

export interface IMutationClaimLoyaltyRollUpTheRimPrizeArgs {
    email: Scalars["String"];
    giftCardValueCents: Maybe<Scalars["Int"]>;
    isMajorPrize: Scalars["Boolean"];
    isTimHortonsGiftCard: Scalars["Boolean"];
    language: Scalars["String"];
    name: Scalars["String"];
    referenceId: Scalars["String"];
}

export interface IMutationDeleteLoyaltyCardArgs {
    existingCardId: Scalars["String"];
}

export interface IMutationMergeLoyaltyCardsArgs {
    cardId: Scalars["String"];
    existingCardId: Scalars["String"];
}

export interface IMutationRevealLoyaltyRollUpTheRimTimelineEventRollArgs {
    referenceId: Scalars["String"];
    developmentPrize: Maybe<Scalars["String"]>;
}

export interface IMutationSetLoyaltyDonationUpchargeArgs {
    cardId: Scalars["String"];
    donationUpcharge: Scalars["Boolean"];
}

export interface IMutationSetLoyaltyRewardsTierArgs {
    cardId: Scalars["String"];
    rewardsTier: Scalars["String"];
}

export interface IMutationSetLoyaltyScanAndPayArgs {
    cardId: Scalars["String"];
    defaultPaymentMethodId: Maybe<Scalars["String"]>;
    scanAndPay: Scalars["Boolean"];
}

export interface IMutationShareLoyaltyRollUpTheRimTimelineEventRollsArgs {
    quantity: Scalars["Int"];
}

export interface IMutationQuoteControllerCreateQuoteArgs {
    createQuoteRequestInput: ICreateQuoteRequestInput;
}

export interface IMutationCommitOrderArgs {
    input: ICommitOrderInput;
    delivery: Maybe<ICommitDeliveryInput>;
    skipCoolingPeriod: Maybe<Scalars["Boolean"]>;
}

export interface IMutationConfirmCateringOrderArgs {
    input: IConfirmCateringOrderInput;
}

export interface IMutationPlaceCateringOrderArgs {
    input: IPlaceCateringOrderInput;
}

export interface IMutationPriceOrderArgs {
    input: IPriceOrderInput;
    delivery: Maybe<IPriceDeliveryInput>;
}

export interface IMutationUpdateOrderArgs {
    input: IUpdateOrderInput;
}

export interface IMutationUserReportsMissingOrderArgs {
    input: IUserReportsMissingOrderInput;
}

export interface IMutationUserRequestsRefundArgs {
    input: IUserRequestsRefundInput;
}

export interface IMutationValidateCommitOrderArgs {
    input: IValidateCommitOrderInput;
}

export interface IMutationPaybackAuthenticationArgs {
    input: IPaybackAuthenticationInput;
}

export interface IMutationGetAccountBalanceArgs {
    sessionToken: Scalars["String"];
}

export interface IMutationGetCardNumberArgs {
    sessionToken: Scalars["String"];
}

export interface IMutationAddAccountArgs {
    input: IAddAccountInput;
}

export interface IMutationAddCreditAccountArgs {
    input: IAddCreditAccountInput;
}

export interface IMutationAddGiftAccountArgs {
    input: IAddGiftAccountInput;
}

export interface IMutationDeleteAccountArgs {
    input: IDeleteAccountInput;
}

export interface IMutationPrepaidsBalanceArgs {
    cardNumber: Scalars["String"];
    feCountryCode: Maybe<IsoCountryCode>;
}

export interface IMutationPrepaidsMergeArgs {
    input: IPrepaidsMergeInput;
}

export interface IMutationPrepaidsReloadArgs {
    input: IPrepaidsReloadInput;
}

export interface IMutationVoidSaleArgs {
    fdSaleId: Scalars["String"];
}

export interface IMutationGenerateVrPaymentCheckoutLinkArgs {
    rbiOrderId: Scalars["String"];
}

export interface IMutationGenerateVrPaymentVaultLinkArgs {
    input: IGenerateVrPaymentVaultLinkInput;
}

export interface IMutationGenerateVrPaymentPayPalFastLinkArgs {
    input: IGenerateVrPaymentPayPalFastLinkInput;
}

export interface INode {
    readonly id: Maybe<Scalars["ID"]>;
}

export enum OfferType {
    GLOBAL = "GLOBAL",
    PERSONALIZED = "PERSONALIZED"
}

export interface IOfferVariable {
    readonly __typename?: "OfferVariable";
    readonly key: Scalars["String"];
    readonly type: Scalars["String"];
    readonly value: Scalars["String"];
}

export interface IOperatingHours {
    readonly __typename?: "OperatingHours";
    readonly monOpen: Maybe<Scalars["String"]>;
    readonly monClose: Maybe<Scalars["String"]>;
    readonly tueOpen: Maybe<Scalars["String"]>;
    readonly tueClose: Maybe<Scalars["String"]>;
    readonly wedOpen: Maybe<Scalars["String"]>;
    readonly wedClose: Maybe<Scalars["String"]>;
    readonly thrOpen: Maybe<Scalars["String"]>;
    readonly thrClose: Maybe<Scalars["String"]>;
    readonly friOpen: Maybe<Scalars["String"]>;
    readonly friClose: Maybe<Scalars["String"]>;
    readonly satOpen: Maybe<Scalars["String"]>;
    readonly satClose: Maybe<Scalars["String"]>;
    readonly sunOpen: Maybe<Scalars["String"]>;
    readonly sunClose: Maybe<Scalars["String"]>;
}

export enum OperationalStatus {
    CLOSED = "CLOSED",
    CLOSED_TEMPORARILY = "CLOSED_TEMPORARILY",
    OPEN = "OPEN",
    PROJECTED = "PROJECTED"
}

export interface IOrder {
    readonly __typename?: "Order";
    readonly cart: ICart;
    readonly catering: Maybe<ICatering>;
    readonly createdAt: Scalars["String"];
    readonly delivery: Maybe<IDelivery>;
    readonly fireOrderIn: Maybe<Scalars["Int"]>;
    readonly fulfillmentDetails: Maybe<IFulfillmentDetails>;
    readonly id: Maybe<Scalars["String"]>;
    readonly order: Maybe<IRbiOrder>;
    readonly orderNumberFormatted: Maybe<Scalars["String"]>;
    readonly pk: Scalars["String"];
    readonly posOrderId: Maybe<Scalars["String"]>;
    readonly posVendor: PosVendor;
    readonly rbiOrderId: Scalars["String"];
    readonly revision: Scalars["Int"];
    readonly sk: Scalars["String"];
    readonly status: RbiOrderStatus;
    readonly updatedAt: Scalars["String"];
    readonly userId: Maybe<Scalars["String"]>;
    readonly userSortKey: Scalars["String"];
    readonly loyaltyTransaction: Maybe<ILoyaltyTransaction>;
}

export enum OrderingStatus {
    ALPHA = "alpha",
    BETA = "beta",
    DEV = "dev",
    LIVE = "live",
    PROD = "prod",
    TEMPORARY_UNAVAILABLE = "temporary_unavailable",
    TEMPORARILY_UNAVAILABLE = "temporarily_unavailable"
}

export interface IOrderListResponse {
    readonly __typename?: "OrderListResponse";
    readonly count: Scalars["Int"];
    readonly orders: Maybe<ReadonlyArray<Maybe<IOrder>>>;
    readonly resumeAfter: Maybe<Scalars["String"]>;
}

export interface IPageInfo {
    readonly __typename?: "PageInfo";
    readonly hasNextPage: Scalars["Boolean"];
    readonly hasPreviousPage: Scalars["Boolean"];
    readonly startCursor: Maybe<Scalars["String"]>;
    readonly endCursor: Maybe<Scalars["String"]>;
}

export interface IParentChildPlu {
    readonly __typename?: "ParentChildPlu";
    readonly plu: Maybe<Scalars["String"]>;
    readonly childPlu: Maybe<Scalars["String"]>;
}

export interface IParentChildPluInput {
    readonly plu?: Maybe<Scalars["String"]>;
    readonly childPlu?: Maybe<Scalars["String"]>;
}

export interface IPaybackAccountToken {
    readonly __typename?: "PaybackAccountToken";
    readonly accountToken: Scalars["String"];
}

export interface IPaybackAuthenticationInput {
    readonly authorizationCode: Scalars["String"];
    readonly redirectURI: Scalars["String"];
}

export interface IPaybackSessionToken {
    readonly __typename?: "PaybackSessionToken";
    readonly sessionToken: Scalars["String"];
}

export interface IPayment {
    readonly __typename?: "Payment";
    readonly approvalNumber: Maybe<Scalars["String"]>;
    readonly cardType: Maybe<Scalars["String"]>;
    readonly ccLast4: Maybe<Scalars["String"]>;
    readonly fdCorrelationId: Maybe<Scalars["String"]>;
    readonly fdSaleId: Scalars["String"];
    readonly panToken: Maybe<Scalars["String"]>;
    readonly paymentType: Maybe<CartPaymentType>;
}

export interface IPaymentInput {
    readonly adyenInput?: Maybe<IAdyenPayment>;
    readonly applePayDetails?: Maybe<IApplePay>;
    readonly billingAddress?: Maybe<IBillingAddressInput>;
    readonly cashPayment?: Maybe<Scalars["Boolean"]>;
    readonly ccMetadata?: Maybe<ICreditCardMetadataInput>;
    readonly chaseProfileId?: Maybe<Scalars["String"]>;
    readonly firstDataInput?: Maybe<IFirstDataPayment>;
    readonly fullName: Scalars["String"];
    readonly googlePayDetails?: Maybe<IGooglePay>;
    readonly kountSessionId?: Maybe<Scalars["String"]>;
    readonly vrPaymentInput?: Maybe<IVrPayment>;
}

export interface IPaymentMethodData {
    readonly displayName?: Maybe<Scalars["String"]>;
    readonly paymentType?: Maybe<Scalars["String"]>;
    readonly paymentMethodType?: Maybe<Scalars["String"]>;
}

export enum PaymentProcessor {
    ADYEN = "ADYEN",
    CHASE = "CHASE",
    FIRSTDATA = "FIRSTDATA",
    VRPAYMENT = "VRPAYMENT"
}

export interface IPhysicalAddress {
    readonly __typename?: "PhysicalAddress";
    readonly address1: Maybe<Scalars["String"]>;
    readonly address2: Maybe<Scalars["String"]>;
    readonly city: Maybe<Scalars["String"]>;
    readonly country: Maybe<Scalars["String"]>;
    readonly postalCode: Maybe<Scalars["String"]>;
    readonly stateProvince: Maybe<Scalars["String"]>;
    readonly stateProvinceShort: Maybe<Scalars["String"]>;
}

export interface IPickupAddress {
    readonly __typename?: "PickupAddress";
    readonly administrativeArea: Maybe<Scalars["String"]>;
    readonly coordinates: Maybe<IDeliveryCoordinates>;
    readonly formattedAddress: Scalars["String"];
    readonly instructions: Maybe<Scalars["String"]>;
    readonly locality: Maybe<Scalars["String"]>;
    readonly postalCode: Maybe<Scalars["String"]>;
    readonly regionCode: Scalars["String"];
    readonly route: Scalars["String"];
    readonly streetNumber: Scalars["String"];
    readonly sublocality: Maybe<Scalars["String"]>;
    readonly subpremise: Maybe<Scalars["String"]>;
}

export interface IPickupWindow {
    readonly __typename?: "PickupWindow";
    readonly endTime: Scalars["String"];
    readonly startTime: Scalars["String"];
}

export interface IPlaceCateringOrderInput {
    readonly billingAddress?: Maybe<IBillingAddressInput>;
    readonly cateringInfo: ICateringInfoInput;
    readonly ccBin?: Maybe<Scalars["String"]>;
    readonly ccExpiryMonth?: Maybe<Scalars["String"]>;
    readonly ccExpiryYear?: Maybe<Scalars["String"]>;
    readonly ccLast4?: Maybe<Scalars["String"]>;
    readonly creditType?: Maybe<CartPaymentCardType>;
    readonly storeEmail?: Maybe<Scalars["String"]>;
    readonly fdAccessToken?: Maybe<Scalars["String"]>;
    readonly fdNonce?: Maybe<Scalars["String"]>;
    readonly fdAccountId?: Maybe<Scalars["String"]>;
    readonly fullName?: Maybe<Scalars["String"]>;
    readonly rbiOrderId: Scalars["ID"];
    readonly kountSessionId?: Maybe<Scalars["String"]>;
    readonly sessionId?: Maybe<Scalars["String"]>;
    readonly redeemedOn?: Maybe<Scalars["String"]>;
    readonly threeDSDetails?: Maybe<IResumeThreeDSaleTransaction>;
}

export interface IPlu {
    readonly __typename?: "Plu";
    readonly connector: Maybe<Scalars["String"]>;
    readonly ncr: Maybe<Scalars["String"]>;
    readonly ncrDelivery: Maybe<Scalars["String"]>;
    readonly oheics: Maybe<Scalars["String"]>;
    readonly oheicsDelivery: Maybe<Scalars["String"]>;
    readonly partner: Maybe<Scalars["String"]>;
    readonly partnerDelivery: Maybe<Scalars["String"]>;
    readonly productNumber: Maybe<Scalars["String"]>;
    readonly productNumberDelivery: Maybe<Scalars["String"]>;
    readonly qst: Maybe<Scalars["String"]>;
    readonly qstDelivery: Maybe<Scalars["String"]>;
    readonly sicom: Maybe<Scalars["String"]>;
    readonly sicomDelivery: Maybe<Scalars["String"]>;
    readonly simplyDelivery: Maybe<Scalars["String"]>;
    readonly simplyDeliveryDelivery: Maybe<Scalars["String"]>;
}

export interface IPluData {
    readonly __typename?: "PluData";
    readonly plus: Maybe<Scalars["String"]>;
    readonly deliveryPlus: Maybe<Scalars["String"]>;
    readonly updatedAt: Maybe<Scalars["String"]>;
}

export interface IPluInput {
    readonly connector?: Maybe<Scalars["String"]>;
    readonly ncr?: Maybe<Scalars["String"]>;
    readonly ncrDelivery?: Maybe<Scalars["String"]>;
    readonly oheics?: Maybe<Scalars["String"]>;
    readonly oheicsDelivery?: Maybe<Scalars["String"]>;
    readonly partner?: Maybe<Scalars["String"]>;
    readonly partnerDelivery?: Maybe<Scalars["String"]>;
    readonly productNumber?: Maybe<Scalars["String"]>;
    readonly qst?: Maybe<Scalars["String"]>;
    readonly qstDelivery?: Maybe<Scalars["String"]>;
    readonly rpos?: Maybe<Scalars["String"]>;
    readonly rposDelivery?: Maybe<Scalars["String"]>;
    readonly sicom?: Maybe<Scalars["String"]>;
    readonly sicomDelivery?: Maybe<Scalars["String"]>;
    readonly simplyDelivery?: Maybe<Scalars["String"]>;
    readonly simplyDeliveryDelivery?: Maybe<Scalars["String"]>;
}

export enum PosVendor {
    CARROLS = "CARROLS",
    CONNECTOR = "CONNECTOR",
    NCR = "NCR",
    OHEICS = "OHEICS",
    PARTNER = "PARTNER",
    PRODUCT_NUMBER = "PRODUCT_NUMBER",
    QDI = "QDI",
    QST = "QST",
    RPOS = "RPOS",
    SICOM = "SICOM",
    SIMPLY_DELIVERY = "SIMPLY_DELIVERY",
    TABLET = "TABLET"
}

export interface IPrepaidsMergeInput {
    readonly destinationFdAccountId?: Maybe<Scalars["String"]>;
    readonly sourceCardNumber: Scalars["String"];
    readonly sourcePin?: Maybe<Scalars["String"]>;
}

export interface IPrepaidsReloadInput {
    readonly countryCode?: Maybe<CountryCode>;
    readonly fdAccountId?: Maybe<Scalars["String"]>;
    readonly fundValue: Scalars["Int"];
    readonly prepaidFdAccountId: Scalars["String"];
    readonly applePayDetails?: Maybe<IApplePay>;
    readonly googlePayDetails?: Maybe<IGooglePay>;
    readonly kountSessionId?: Maybe<Scalars["String"]>;
    readonly sessionId?: Maybe<Scalars["String"]>;
}

export interface IPrepaidTransaction {
    readonly __typename?: "PrepaidTransaction";
    readonly amount: Scalars["Int"];
    readonly currencyCode: ICurrencyCode;
    readonly info: Scalars["String"];
    readonly transactionTime: Scalars["String"];
}

export interface IPriceDeliveryInput {
    readonly instructions?: Maybe<Scalars["String"]>;
    readonly dropoff: IDeliveryWaypointInput;
    readonly tipCents?: Maybe<Scalars["Int"]>;
    readonly quoteId?: Maybe<Scalars["String"]>;
}

export interface IPriceOrderInput {
    readonly paymentMethod?: Maybe<CartPaymentCardType>;
    readonly storeAddress: IStoreAddressInput;
    readonly storeId: Scalars["String"];
    readonly storePosId?: Maybe<Scalars["String"]>;
    readonly brand: Brand;
    readonly platform?: Maybe<Platform>;
    readonly posVendor: PosVendor;
    readonly customerLocale?: Maybe<Scalars["String"]>;
    readonly customerName?: Maybe<Scalars["String"]>;
    readonly serviceMode: ServiceMode;
    readonly requestedAmountCents: Scalars["Int"];
    readonly cartEntries?: Maybe<ReadonlyArray<ICartEntryInput>>;
    readonly cartVersion?: Maybe<Scalars["Int"]>;
    readonly loyaltyBarcode?: Maybe<Scalars["String"]>;
    readonly quotedId?: Maybe<Scalars["String"]>;
    readonly redeemReward?: Maybe<Scalars["Boolean"]>;
    readonly appliedOffers?: Maybe<ReadonlyArray<Maybe<IAppliedOffer>>>;
    readonly rewardsApplied?: Maybe<ReadonlyArray<Maybe<IAppliedReward>>>;
    readonly redeemedOn?: Maybe<Scalars["String"]>;
    readonly swaps?: Maybe<ReadonlyArray<Maybe<ISwapInput>>>;
    readonly vatNumber?: Maybe<Scalars["String"]>;
}

export interface IProductDetailInput {
    readonly id?: Maybe<Scalars["String"]>;
    readonly quantity?: Maybe<Scalars["Int"]>;
    readonly sublevelItems?: Maybe<ReadonlyArray<Maybe<IItem>>>;
}

export interface IProductHierarchyInput {
    readonly L1?: Maybe<Scalars["String"]>;
    readonly L2?: Maybe<Scalars["String"]>;
    readonly L3?: Maybe<Scalars["String"]>;
    readonly L4?: Maybe<Scalars["String"]>;
    readonly L5?: Maybe<Scalars["String"]>;
}

export interface IQuantityPlu {
    readonly __typename?: "QuantityPlu";
    readonly qualifier: Maybe<Scalars["String"]>;
    readonly quantity: Maybe<Scalars["Int"]>;
    readonly plu: Maybe<Scalars["String"]>;
}

export interface IQuantityPluInput {
    readonly qualifier?: Maybe<Scalars["String"]>;
    readonly quantity?: Maybe<Scalars["Int"]>;
    readonly plu?: Maybe<Scalars["String"]>;
}

export interface IQuery {
    readonly __typename?: "Query";
    readonly api: Maybe<IApiMetadata>;
    readonly evaluateAllUserOffers: ICouponUserOffersFeedback;
    readonly evaluateUserOffers: ICouponUserOffersFeedback;
    readonly getCoupon: Maybe<ICoupon>;
    readonly isCouponRedeemable: ICouponRedemptionEligibility;
    readonly listCoupons: ICouponListResponse;
    readonly listCouponTokens: ICouponTokenListResponse;
    readonly listUserCouponTokens: ICouponTokenListResponse;
    readonly listRecommendationItems: Maybe<IRecommendationItemResult>;
    readonly listGiftOffers: Maybe<IGiftOfferListResponse>;
    readonly getLoyaltyCards: Maybe<ILoyaltyCardsResp>;
    readonly getLoyaltyCardDetails: Maybe<ILoyaltyCardDetails>;
    readonly getLoyaltyCardDetailsKiosk: Maybe<ILoyaltyCardDetailsKiosk>;
    readonly getLoyaltyCardApplePass: Maybe<ILoyaltyCardApplePass>;
    readonly getLoyaltyCardGooglePass: Maybe<ILoyaltyCardGooglePass>;
    readonly getLoyaltyCardTransactions: Maybe<ILoyaltyCardTransactions>;
    readonly getLoyaltyRollUpTheRimTimelineEventSharedRollTokens: Maybe<ILoyaltyRollUpTheRimTimelineEventSharedRollTokenList>;
    readonly getLoyaltyRollUpTheRimTimelineEvents: Maybe<ILoyaltyRollUpTheRimTimelineEventList>;
    readonly getLoyaltyRollUpTheRimTimelineEventSummary: Maybe<ILoyaltyRollUpTheRimTimelineEventSummaryList>;
    readonly getLoyaltyRollUpTheRimPrizesStats: Maybe<ILoyaltyRollUpTheRimPrizesStats>;
    readonly pluData: Maybe<IPluData>;
    readonly quote: Maybe<IQuote>;
    readonly checkRefundEligibility: Maybe<IRefundEligibilityResponse>;
    readonly deliveryQuote: IDelivery;
    readonly order: Maybe<IOrder>;
    readonly cateringOrder: Maybe<IOrder>;
    readonly orderRevisions: IOrderListResponse;
    readonly uniqueStores: IOrderListResponse;
    readonly userOrders: IOrderListResponse;
    readonly userAccounts: Maybe<IAccountListResponse>;
    readonly prepaidsTransactions: Maybe<ITransactionListResponse>;
    readonly restaurant: IRestaurant;
    readonly restaurants: Maybe<IRestaurantsConnection>;
    readonly deliveryRestaurant: IDeliveryRestaurant;
    readonly me: IUser;
    readonly signUpComplete: Maybe<Scalars["Boolean"]>;
    readonly userGeo: IUserGeo;
    readonly userFavorite: IFavorite;
    readonly userFavorites: IFavoriteList;
    readonly userPhoneFromBraze: Maybe<IBrazeUserPhone>;
}

export interface IQueryEvaluateAllUserOffersArgs {
    locale: Maybe<Locale>;
    platform: Maybe<Platform>;
    redeemedOn: Scalars["String"];
    serviceMode: Maybe<ServiceMode>;
    storeId: Maybe<Scalars["String"]>;
    userId: Maybe<Scalars["ID"]>;
}

export interface IQueryEvaluateUserOffersArgs {
    cart: Maybe<IPriceOrderInput>;
    couponIds: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
    evaluateAllCouponIds: Maybe<Scalars["Boolean"]>;
    locale: Maybe<Locale>;
    platform: Maybe<Platform>;
    rbiOrderId: Maybe<Scalars["ID"]>;
    redeemedOn: Scalars["String"];
    serviceMode: Maybe<ServiceMode>;
    storeId: Maybe<Scalars["String"]>;
    userId: Maybe<Scalars["ID"]>;
}

export interface IQueryGetCouponArgs {
    couponId: Scalars["ID"];
    userId: Maybe<Scalars["ID"]>;
}

export interface IQueryIsCouponRedeemableArgs {
    cart: Maybe<IPriceOrderInput>;
    couponId: Scalars["ID"];
    rbiOrderId: Maybe<Scalars["ID"]>;
    redeemedOn: Scalars["String"];
    ruleSet: Maybe<Scalars["String"]>;
    userId: Maybe<Scalars["ID"]>;
}

export interface IQueryListCouponsArgs {
    expiresAfter: Maybe<Scalars["String"]>;
    expiresBefore: Maybe<Scalars["String"]>;
    includeRedeemed: Maybe<Scalars["Boolean"]>;
    limit: Maybe<Scalars["Int"]>;
    resumeAfter: Maybe<Scalars["String"]>;
    sortAscending: Maybe<Scalars["Boolean"]>;
    userId: Maybe<Scalars["ID"]>;
}

export interface IQueryListCouponTokensArgs {
    couponId: Scalars["ID"];
    expiresAfter: Maybe<Scalars["String"]>;
    expiresBefore: Maybe<Scalars["String"]>;
    limit: Maybe<Scalars["Int"]>;
    resumeAfter: Maybe<Scalars["String"]>;
    sortAscending: Maybe<Scalars["Boolean"]>;
    userId: Maybe<Scalars["ID"]>;
}

export interface IQueryListUserCouponTokensArgs {
    couponId: Maybe<Scalars["ID"]>;
    expiresAfter: Maybe<Scalars["String"]>;
    expiresBefore: Maybe<Scalars["String"]>;
    limit: Maybe<Scalars["Int"]>;
    resumeAfter: Maybe<Scalars["String"]>;
    sortAscending: Maybe<Scalars["Boolean"]>;
    userId: Maybe<Scalars["ID"]>;
}

export interface IQueryListRecommendationItemsArgs {
    productDetails: ReadonlyArray<Maybe<IProductDetailInput>>;
    serviceMode: ServiceMode;
    storeId: Scalars["String"];
    type: RecommendationType;
}

export interface IQueryGetLoyaltyCardsArgs {
    status: Maybe<Scalars["String"]>;
}

export interface IQueryGetLoyaltyCardDetailsArgs {
    cardId: Scalars["String"];
}

export interface IQueryGetLoyaltyCardDetailsKioskArgs {
    barcode: Scalars["String"];
    operator: Scalars["String"];
    restaurantId: Scalars["String"];
    terminal: Scalars["String"];
    transactionId: Scalars["String"];
}

export interface IQueryGetLoyaltyCardApplePassArgs {
    cardId: Scalars["String"];
}

export interface IQueryGetLoyaltyCardGooglePassArgs {
    cardId: Scalars["String"];
}

export interface IQueryGetLoyaltyCardTransactionsArgs {
    cardId: Scalars["String"];
    endDate: Maybe<Scalars["String"]>;
    page: Maybe<Scalars["String"]>;
    pageSize: Maybe<Scalars["String"]>;
    startDate: Maybe<Scalars["String"]>;
}

export interface IQueryGetLoyaltyRollUpTheRimTimelineEventsArgs {
    eventId: Maybe<Scalars["String"]>;
    resumeAfter: Maybe<Scalars["String"]>;
    sortAscending: Maybe<Scalars["Boolean"]>;
}

export interface IQueryGetLoyaltyRollUpTheRimTimelineEventSummaryArgs {
    eventId: Maybe<Scalars["String"]>;
    resumeAfter: Maybe<Scalars["String"]>;
    sortAscending: Maybe<Scalars["Boolean"]>;
}

export interface IQueryGetLoyaltyRollUpTheRimPrizesStatsArgs {
    eventId: Maybe<Scalars["String"]>;
}

export interface IQueryPluDataArgs {
    storeId: Scalars["String"];
}

export interface IQueryQuoteArgs {
    id: Scalars["String"];
}

export interface IQueryCheckRefundEligibilityArgs {
    rbiOrderId: Scalars["ID"];
}

export interface IQueryDeliveryQuoteArgs {
    dropoff: IDeliveryWaypointInput;
    pickup: IDeliveryWaypointInput;
    requestedAmountCents: Maybe<Scalars["Int"]>;
    serviceMode: Maybe<ServiceMode>;
}

export interface IQueryOrderArgs {
    rbiOrderId: Scalars["ID"];
}

export interface IQueryCateringOrderArgs {
    cateringJwt: Scalars["String"];
}

export interface IQueryOrderRevisionsArgs {
    limit: Maybe<Scalars["Int"]>;
    rbiOrderId: Scalars["ID"];
    resumeAfter: Maybe<Scalars["String"]>;
    revision: Maybe<Scalars["String"]>;
    sortAscending: Maybe<Scalars["Boolean"]>;
}

export interface IQueryUniqueStoresArgs {
    createdAfter: Maybe<Scalars["String"]>;
    createdBefore: Maybe<Scalars["String"]>;
    limit: Maybe<Scalars["Int"]>;
    orderStatuses: Maybe<ReadonlyArray<RbiOrderStatus>>;
    resumeAfter: Maybe<Scalars["String"]>;
    sortAscending: Maybe<Scalars["Boolean"]>;
}

export interface IQueryUserOrdersArgs {
    createdAfter: Maybe<Scalars["String"]>;
    createdBefore: Maybe<Scalars["String"]>;
    limit: Maybe<Scalars["Int"]>;
    orderStatuses: Maybe<ReadonlyArray<RbiOrderStatus>>;
    resumeAfter: Maybe<Scalars["String"]>;
    sortAscending: Maybe<Scalars["Boolean"]>;
    userId: Maybe<Scalars["ID"]>;
    shouldFilterByRegion: Maybe<Scalars["Boolean"]>;
}

export interface IQueryUserAccountsArgs {
    feCountryCode: Maybe<IsoCountryCode>;
}

export interface IQueryPrepaidsTransactionsArgs {
    fdAccountId: Maybe<Scalars["String"]>;
    cardNumber: Maybe<Scalars["String"]>;
}

export interface IQueryRestaurantArgs {
    storeId: Maybe<Scalars["String"]>;
    storeNumber: Maybe<Scalars["String"]>;
    localDateTime: Maybe<Scalars["String"]>;
}

export interface IQueryRestaurantsArgs {
    input: Maybe<IRestaurantsInput>;
}

export interface IQueryDeliveryRestaurantArgs {
    dropoff: IDeliveryWaypointInput;
    searchRadius: Scalars["Float"];
    platform: Maybe<Platform>;
}

export interface IQueryMeArgs {
    numUniquePurchasedItems: Maybe<Scalars["Int"]>;
    customInput: Maybe<IMeInput>;
}

export interface IQuerySignUpCompleteArgs {
    jwt: Scalars["String"];
}

export interface IQueryUserFavoriteArgs {
    favoriteId: Scalars["String"];
}

export interface IQueryUserFavoritesArgs {
    limit: Maybe<Scalars["Int"]>;
    resumeAfter: Maybe<Scalars["String"]>;
    sortAscending: Maybe<Scalars["Boolean"]>;
}

export interface IQueryUserPhoneFromBrazeArgs {
    brazeId: Maybe<Scalars["String"]>;
}

export interface IQuote {
    readonly __typename?: "Quote";
    readonly createTime: Scalars["String"];
    readonly dropoffAddress: IDropoffAddress;
    readonly errors: ReadonlyArray<Maybe<IQuoteError>>;
    readonly id: Scalars["String"];
    readonly quotes: ReadonlyArray<Maybe<IVendorQuote>>;
    readonly status: Status;
    readonly updateTime: Scalars["String"];
}

export interface IQuoteError {
    readonly __typename?: "QuoteError";
    readonly message: Maybe<Scalars["String"]>;
    readonly statusCode: Scalars["Float"];
    readonly vendor: Scalars["String"];
}

export interface IRbiOrder {
    readonly __typename?: "RbiOrder";
    readonly refund: Maybe<IRefund>;
}

export enum RbiOrderStatus {
    CATERING_DECLINED = "CATERING_DECLINED",
    CATERING_ERROR = "CATERING_ERROR",
    CATERING_PLACED = "CATERING_PLACED",
    CATERING_SUCCESSFUL = "CATERING_SUCCESSFUL",
    INSERT_ERROR = "INSERT_ERROR",
    INSERT_REQUESTED = "INSERT_REQUESTED",
    INSERT_SUCCESSFUL = "INSERT_SUCCESSFUL",
    KOUNT_DENIAL = "KOUNT_DENIAL",
    PAYMENT_ERROR = "PAYMENT_ERROR",
    PAYMENT_REQUESTED = "PAYMENT_REQUESTED",
    PAYMENT_REQUIRED = "PAYMENT_REQUIRED",
    PAYMENT_SUCCESSFUL = "PAYMENT_SUCCESSFUL",
    PRICE_ERROR = "PRICE_ERROR",
    PRICE_REQUESTED = "PRICE_REQUESTED",
    PRICE_SUCCESSFUL = "PRICE_SUCCESSFUL",
    REFUND_ERROR = "REFUND_ERROR",
    REFUND_REQUESTED = "REFUND_REQUESTED",
    REFUND_SUCCESSFUL = "REFUND_SUCCESSFUL",
    UPDATE_ERROR = "UPDATE_ERROR",
    UPDATE_REQUESTED = "UPDATE_REQUESTED",
    UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL",
    VALIDATION_ERROR = "VALIDATION_ERROR"
}

export interface IRecommendationItem {
    readonly __typename?: "RecommendationItem";
    readonly id: Scalars["String"];
}

export interface IRecommendationItemResult {
    readonly __typename?: "RecommendationItemResult";
    readonly recommender: Maybe<Scalars["String"]>;
    readonly recommendationToken: Maybe<Scalars["String"]>;
    readonly results: Maybe<ReadonlyArray<Maybe<IRecommendationItem>>>;
}

export enum RecommendationType {
    MENU = "MENU",
    CART = "CART"
}

export interface IRefund {
    readonly __typename?: "Refund";
    readonly primaryReason: RefundReason;
    readonly refundedItems: Maybe<ReadonlyArray<Maybe<IRefundedItem>>>;
    readonly secondaryReason: Maybe<Scalars["String"]>;
    readonly subtotal: Scalars["String"];
    readonly tax: Scalars["String"];
    readonly transactionDateTime: Scalars["String"];
}

export interface IRefundedItem {
    readonly __typename?: "RefundedItem";
    readonly name: Maybe<Scalars["String"]>;
    readonly plu: Maybe<Scalars["String"]>;
    readonly refundAmount: Maybe<Scalars["String"]>;
    readonly refundQuantity: Maybe<Scalars["String"]>;
    readonly sanityId: Maybe<Scalars["String"]>;
    readonly type: Maybe<CartEntryType>;
}

export interface IRefundEligibilityResponse {
    readonly __typename?: "RefundEligibilityResponse";
    readonly eligible: Scalars["Boolean"];
    readonly ineligibilityReason: Maybe<RefundIneligibilityReason>;
}

export enum RefundIneligibilityReason {
    ALREADY_REFUNDED = "ALREADY_REFUNDED",
    DISABLED = "DISABLED",
    INVALID_ORDER_STATUS = "INVALID_ORDER_STATUS",
    INVALID_PAYMENT_TYPE = "INVALID_PAYMENT_TYPE",
    INVALID_USER_ID = "INVALID_USER_ID",
    ORDER_BEING_DELIVERED = "ORDER_BEING_DELIVERED",
    ORDER_NOT_FOUND = "ORDER_NOT_FOUND",
    OVER_ALLOWED_REFUND_AMOUNT = "OVER_ALLOWED_REFUND_AMOUNT",
    REFUNDED_MAX_TIMES = "REFUNDED_MAX_TIMES"
}

export enum RefundReason {
    CATERING_ORDER_DECLINED = "CATERING_ORDER_DECLINED",
    CATERING_ORDER_ERROR = "CATERING_ORDER_ERROR",
    CATERING_ORDER_TIME_OUT = "CATERING_ORDER_TIME_OUT",
    CUSTOMER_OVERCHARGED = "CUSTOMER_OVERCHARGED",
    FOOD_QUALITY_ISSUE = "FOOD_QUALITY_ISSUE",
    INCORRECT_CUSTOMIZATION = "INCORRECT_CUSTOMIZATION",
    ITEMS_OUT_OF_STOCK = "ITEMS_OUT_OF_STOCK",
    MISSING_OR_INCORRECT_ITEM = "MISSING_OR_INCORRECT_ITEM",
    ORDER_ARRIVED_LATE = "ORDER_ARRIVED_LATE",
    ORDER_CANCELLED = "ORDER_CANCELLED",
    ORDER_COMMIT_ERROR = "ORDER_COMMIT_ERROR",
    ORDER_NEVER_ARRIVED = "ORDER_NEVER_ARRIVED",
    ORDER_WAS_DAMAGED = "ORDER_WAS_DAMAGED",
    OTHER_ADD_COMMENT = "OTHER_ADD_COMMENT",
    RECEIVED_INCORRECT_ORDER = "RECEIVED_INCORRECT_ORDER",
    RESTAURANT_CLOSED = "RESTAURANT_CLOSED",
    RESTAURANT_COULDNT_FIND_ORDER = "RESTAURANT_COULDNT_FIND_ORDER"
}

export interface IRefundRequestResponse {
    readonly __typename?: "RefundRequestResponse";
    readonly refundRequestAmountCents: Scalars["Int"];
    readonly requestDateTime: Maybe<Scalars["String"]>;
}

export interface IReload {
    readonly __typename?: "Reload";
    readonly beginBalance: Scalars["Int"];
    readonly currencyCode: Scalars["String"];
    readonly currentBalance: Scalars["Int"];
    readonly fdAccountId: Scalars["String"];
    readonly fdCorrelationId: Maybe<Scalars["String"]>;
    readonly transactionId: Scalars["String"];
}

export interface IResendOtpInput {
    readonly email?: Maybe<Scalars["String"]>;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly platform: Platform;
}

export interface IResendVerificationEmailInput {
    readonly platform: Platform;
    readonly stage: Stage;
}

export interface IRestaurant {
    readonly __typename?: "Restaurant";
    readonly storeId: Maybe<Scalars["String"]>;
    readonly available: Scalars["Boolean"];
    readonly lastHeartbeatTimestamp: Maybe<Scalars["String"]>;
    readonly posVendor: Maybe<Scalars["String"]>;
    readonly curbsideHours: Maybe<IOperatingHours>;
    readonly deliveryHours: Maybe<IOperatingHours>;
    readonly diningRoomHours: Maybe<IOperatingHours>;
    readonly driveThruHours: Maybe<IOperatingHours>;
    readonly vatNumber: Maybe<Scalars["String"]>;
}

export interface IRestaurantEdge extends IEdge {
    readonly __typename?: "RestaurantEdge";
    readonly cursor: Scalars["String"];
    readonly node: IRestaurantNode;
}

export interface IRestaurantNode extends INode {
    readonly __typename?: "RestaurantNode";
    readonly id: Maybe<Scalars["ID"]>;
    readonly _id: Maybe<Scalars["String"]>;
    readonly storeId: Maybe<Scalars["String"]>;
    readonly isAvailable: Scalars["Boolean"];
    readonly posVendor: Maybe<Scalars["String"]>;
    readonly chaseMerchantId: Maybe<Scalars["String"]>;
    readonly curbsideHours: Maybe<IOperatingHours>;
    readonly deliveryHours: Maybe<IOperatingHours>;
    readonly diningRoomHours: Maybe<IOperatingHours>;
    readonly distanceInMiles: Maybe<Scalars["Int"]>;
    readonly drinkStationType: Maybe<Scalars["String"]>;
    readonly driveThruHours: Maybe<IOperatingHours>;
    readonly driveThruLaneType: Maybe<Scalars["String"]>;
    readonly email: Maybe<ReadonlyArray<Scalars["String"]>>;
    readonly environment: Maybe<RestaurantStatus>;
    readonly franchiseGroupId: Maybe<Scalars["Int"]>;
    readonly franchiseGroupName: Maybe<Scalars["String"]>;
    readonly frontCounterClosed: Maybe<Scalars["Boolean"]>;
    readonly hasBreakfast: Maybe<Scalars["Boolean"]>;
    readonly hasBurgersForBreakfast: Maybe<Scalars["Boolean"]>;
    readonly hasCatering: Maybe<Scalars["Boolean"]>;
    readonly hasCurbside: Maybe<Scalars["Boolean"]>;
    readonly hasDelivery: Maybe<Scalars["Boolean"]>;
    readonly hasDineIn: Maybe<Scalars["Boolean"]>;
    readonly hasDriveThru: Maybe<Scalars["Boolean"]>;
    readonly hasTableService: Maybe<Scalars["Boolean"]>;
    readonly hasLateNightMenu: Maybe<Scalars["Boolean"]>;
    readonly hasMobileOrdering: Maybe<Scalars["Boolean"]>;
    readonly hasParking: Maybe<Scalars["Boolean"]>;
    readonly hasPlayground: Maybe<Scalars["Boolean"]>;
    readonly hasTakeOut: Maybe<Scalars["Boolean"]>;
    readonly hasWifi: Maybe<Scalars["Boolean"]>;
    readonly hasLoyalty: Maybe<Scalars["Boolean"]>;
    readonly isDarkKitchen: Maybe<Scalars["Boolean"]>;
    readonly isFavorite: Scalars["Boolean"];
    readonly isHalal: Maybe<Scalars["Boolean"]>;
    readonly isRecent: Scalars["Boolean"];
    readonly latitude: Maybe<Scalars["Float"]>;
    readonly longitude: Maybe<Scalars["Float"]>;
    readonly mobileOrderingStatus: Maybe<OrderingStatus>;
    readonly name: Maybe<Scalars["String"]>;
    readonly number: Maybe<Scalars["String"]>;
    readonly parkingType: Maybe<Scalars["String"]>;
    readonly phoneNumber: Maybe<Scalars["String"]>;
    readonly physicalAddress: Maybe<IPhysicalAddress>;
    readonly playgroundType: Maybe<Scalars["String"]>;
    readonly pos: Maybe<IRestaurantPos>;
    readonly posRestaurantId: Maybe<Scalars["String"]>;
    readonly restaurantImage: Maybe<ISanityImage>;
    readonly status: Maybe<Scalars["String"]>;
    readonly restaurantPosData: Maybe<IRestaurantPosData>;
    readonly vatNumber: Maybe<Scalars["String"]>;
}

export interface IRestaurantPos {
    readonly __typename?: "RestaurantPos";
    readonly vendor: Maybe<Scalars["String"]>;
}

export interface IRestaurantPosData {
    readonly __typename?: "RestaurantPosData";
    readonly _id: Maybe<Scalars["String"]>;
}

export interface IRestaurantsConnection extends IConnection {
    readonly __typename?: "RestaurantsConnection";
    readonly edges: ReadonlyArray<IRestaurantEdge>;
    readonly nodes: ReadonlyArray<IRestaurantNode>;
    readonly totalCount: Maybe<Scalars["Int"]>;
    readonly pageInfo: IPageInfo;
}

export interface IRestaurantsInput {
    readonly first?: Maybe<Scalars["Int"]>;
    readonly last?: Maybe<Scalars["Int"]>;
    readonly after?: Maybe<Scalars["String"]>;
    readonly before?: Maybe<Scalars["String"]>;
    readonly coordinates?: Maybe<ICoordinates>;
    readonly ids?: Maybe<ReadonlyArray<Scalars["ID"]>>;
    readonly filter?: Maybe<FilterRestaurantType>;
    readonly serviceModes?: Maybe<ReadonlyArray<ServiceMode>>;
    readonly status?: Maybe<OperationalStatus>;
    readonly radiusStrictMode?: Maybe<Scalars["Boolean"]>;
}

export enum RestaurantStatus {
    DEV = "DEV",
    PROD = "PROD"
}

export interface IResumeThreeDSaleTransaction {
    readonly saleId: Scalars["String"];
    readonly threeDSOptions: IThreeDsOptions;
}

export interface ISale {
    readonly __typename?: "Sale";
    readonly fdSaleId: Scalars["String"];
    readonly orderId: Scalars["String"];
    readonly status: Maybe<Scalars["String"]>;
}

export interface ISanityImage {
    readonly __typename?: "SanityImage";
    readonly asset: Maybe<ISanityImageAsset>;
    readonly crop: Maybe<ISanityImageCrop>;
    readonly hotspot: Maybe<ISanityImageHotspot>;
}

export interface ISanityImageAsset {
    readonly __typename?: "SanityImageAsset";
    readonly _id: Maybe<Scalars["String"]>;
    readonly metadata: Maybe<ISanityImageMetaData>;
}

export interface ISanityImageCrop {
    readonly __typename?: "SanityImageCrop";
    readonly top: Maybe<Scalars["Float"]>;
    readonly bottom: Maybe<Scalars["Float"]>;
    readonly left: Maybe<Scalars["Float"]>;
    readonly right: Maybe<Scalars["Float"]>;
}

export interface ISanityImageHotspot {
    readonly __typename?: "SanityImageHotspot";
    readonly height: Maybe<Scalars["Float"]>;
    readonly width: Maybe<Scalars["Float"]>;
    readonly x: Maybe<Scalars["Float"]>;
    readonly y: Maybe<Scalars["Float"]>;
}

export interface ISanityImageMetaData {
    readonly __typename?: "SanityImageMetaData";
    readonly lqip: Maybe<Scalars["String"]>;
    readonly palette: Maybe<ISanityImagePalette>;
}

export interface ISanityImagePalette {
    readonly __typename?: "SanityImagePalette";
    readonly dominant: Maybe<ISanityImagePaletteSwatch>;
}

export interface ISanityImagePaletteSwatch {
    readonly __typename?: "SanityImagePaletteSwatch";
    readonly background: Maybe<Scalars["String"]>;
    readonly foreground: Maybe<Scalars["String"]>;
}

export enum ServiceMode {
    CATERING_DELIVERY = "CATERING_DELIVERY",
    CATERING_PICKUP = "CATERING_PICKUP",
    CURBSIDE = "CURBSIDE",
    DELIVERY = "DELIVERY",
    DRIVE_THRU = "DRIVE_THRU",
    EAT_IN = "EAT_IN",
    TAKEOUT = "TAKEOUT",
    TABLE_SERVICE = "TABLE_SERVICE"
}

export interface ISignInUserInput {
    readonly email: Scalars["String"];
    readonly platform: Platform;
    readonly stage: Stage;
}

export interface ISignUpUserInput {
    readonly country: IsoCountryCode;
    readonly dob?: Maybe<Scalars["String"]>;
    readonly name: Scalars["String"];
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly platform: Platform;
    readonly stage: Stage;
    readonly userName: Scalars["String"];
    readonly wantsPromotionalEmails: Scalars["Boolean"];
    readonly zipcode?: Maybe<Scalars["String"]>;
}

export interface ISizeBasedPlu {
    readonly __typename?: "SizeBasedPlu";
    readonly comboPlu: Maybe<Scalars["String"]>;
    readonly comboSize: Maybe<Scalars["String"]>;
}

export interface ISizeBasedPluInput {
    readonly comboPlu?: Maybe<Scalars["String"]>;
    readonly comboSize?: Maybe<Scalars["String"]>;
}

export enum Stage {
    ALPHA = "alpha",
    BETA = "beta",
    DEV = "dev",
    LOCALDEV = "localdev",
    PROD = "prod",
    QA = "qa",
    SANDBOX = "sandbox",
    STAGING = "staging",
    TEST = "test"
}

export enum Status {
    ERROR = "ERROR",
    REQUESTED = "REQUESTED",
    SUCCESSFUL = "SUCCESSFUL",
    TIMEOUT = "TIMEOUT",
    UNAVAILABLE = "UNAVAILABLE"
}

export interface IStoreAddress {
    readonly __typename?: "StoreAddress";
    readonly addressLine1: Scalars["String"];
    readonly addressLine2: Maybe<Scalars["String"]>;
    readonly city: Scalars["String"];
    readonly country: Scalars["String"];
    readonly phoneNumber: Scalars["String"];
    readonly state: Scalars["String"];
    readonly zip: Scalars["String"];
}

export interface IStoreAddressInput {
    readonly addressLine1: Scalars["String"];
    readonly addressLine2?: Maybe<Scalars["String"]>;
    readonly city: Scalars["String"];
    readonly country: Scalars["String"];
    readonly phoneNumber: Scalars["String"];
    readonly state: Scalars["String"];
    readonly zip: Scalars["String"];
}

export interface IStoreDetails {
    readonly __typename?: "StoreDetails";
    readonly deliveryHours: Maybe<IStoreHours>;
    readonly diningRoomHours: Maybe<IStoreHours>;
    readonly driveThruHours: Maybe<IStoreHours>;
    readonly franchiseGroupName: Maybe<Scalars["String"]>;
    readonly franchiseGroupId: Maybe<Scalars["Int"]>;
    readonly hasCatering: Maybe<Scalars["Boolean"]>;
    readonly hasDelivery: Maybe<Scalars["Boolean"]>;
    readonly hasDriveThru: Maybe<Scalars["Boolean"]>;
    readonly hasTableService: Maybe<Scalars["Boolean"]>;
    readonly hasMobileOrdering: Maybe<Scalars["Boolean"]>;
    readonly lastActiveDateTime: Maybe<Scalars["String"]>;
    readonly latitude: Maybe<Scalars["Float"]>;
    readonly longitude: Maybe<Scalars["Float"]>;
    readonly mobileOrderingStatus: Maybe<Scalars["String"]>;
    readonly phoneNumber: Maybe<Scalars["String"]>;
    readonly posVendor: Maybe<Scalars["String"]>;
    readonly status: Maybe<Scalars["String"]>;
    readonly storeNumber: Maybe<Scalars["String"]>;
}

export interface IStoreHours {
    readonly __typename?: "StoreHours";
    readonly monday: Maybe<IDay>;
    readonly tuesday: Maybe<IDay>;
    readonly wednesday: Maybe<IDay>;
    readonly thursday: Maybe<IDay>;
    readonly friday: Maybe<IDay>;
    readonly saturday: Maybe<IDay>;
    readonly sunday: Maybe<IDay>;
}

export interface ISupportCase {
    readonly __typename?: "SupportCase";
    readonly caseId: Maybe<Scalars["String"]>;
}

export interface ISupportCaseInput {
    readonly comments: Scalars["String"];
    readonly email: Scalars["String"];
    readonly issueId: Scalars["String"];
    readonly issueSubCategory?: Maybe<Scalars["String"]>;
    readonly name: Scalars["String"];
    readonly orderDateTime?: Maybe<Scalars["String"]>;
    readonly localStoreOrderTime?: Maybe<Scalars["String"]>;
    readonly rbiOrderId?: Maybe<Scalars["String"]>;
    readonly serviceMode?: Maybe<Scalars["String"]>;
    readonly storeAddress?: Maybe<Scalars["String"]>;
    readonly storeId?: Maybe<Scalars["String"]>;
    readonly userRegion?: Maybe<Scalars["String"]>;
    readonly userAccountRegion?: Maybe<Scalars["String"]>;
}

export interface ISwapInput {
    readonly from: Scalars["String"];
    readonly to: Scalars["String"];
    readonly cartId: Scalars["String"];
    readonly swapType: Scalars["String"];
}

export interface IThreeDsOptions {
    readonly challengeResponse?: Maybe<Scalars["String"]>;
    readonly transactionId: Scalars["String"];
}

export interface ITransactionListResponse {
    readonly __typename?: "TransactionListResponse";
    readonly fdCorrelationId: Maybe<Scalars["String"]>;
    readonly transactions: Maybe<ReadonlyArray<Maybe<IPrepaidTransaction>>>;
}

export interface IUnavailableCartEntry {
    readonly __typename?: "UnavailableCartEntry";
    readonly lineId: Maybe<Scalars["String"]>;
    readonly sanityId: Scalars["String"];
}

export interface IUpdateOrderInput {
    readonly fireOrderIn: Scalars["Int"];
    readonly rbiOrderId: Scalars["ID"];
}

export interface IUpdateUserDetailsInput {
    readonly autoReloadEnabled?: Maybe<Scalars["Boolean"]>;
    readonly autoReloadThreshold?: Maybe<Scalars["Int"]>;
    readonly communicationPreferences?: Maybe<
        ReadonlyArray<Maybe<ICommunicationPreferenceInput>>
    >;
    readonly defaultAccountIdentifier?: Maybe<Scalars["String"]>;
    readonly defaultFdAccountId?: Maybe<Scalars["String"]>;
    readonly defaultPaymentAccountId?: Maybe<Scalars["String"]>;
    readonly defaultScanAndPayAccountIdentifier?: Maybe<Scalars["String"]>;
    readonly defaultReloadAmt?: Maybe<Scalars["Int"]>;
    readonly dob?: Maybe<Scalars["String"]>;
    readonly favoriteStores?: Maybe<ReadonlyArray<Maybe<IFavoriteStoreInput>>>;
    readonly isoCountryCode?: Maybe<IsoCountryCode>;
    readonly loyaltyTier?: Maybe<Scalars["String"]>;
    readonly name?: Maybe<Scalars["String"]>;
    readonly phoneNumber?: Maybe<Scalars["String"]>;
    readonly promotionalEmails?: Maybe<Scalars["Boolean"]>;
    readonly rutrFailedSkillsTestTimestamp?: Maybe<Scalars["String"]>;
    readonly rutrPassedSkillsTestTimestamp?: Maybe<Scalars["String"]>;
    readonly zipcode?: Maybe<Scalars["String"]>;
}

export interface IUser {
    readonly __typename?: "User";
    readonly cognitoId: Scalars["ID"];
    readonly createdAt: Scalars["String"];
    readonly details: IUserDetails;
    readonly thLegacyCognitoId: Maybe<Scalars["String"]>;
    readonly loyaltyId: Maybe<Scalars["String"]>;
    readonly uniquePurchasedItems: Maybe<ReadonlyArray<Maybe<ICartEntries>>>;
    readonly updatedAt: Scalars["String"];
}

export enum UserCardCardFormat {
    DIGITAL = "digital",
    PHYSICAL = "physical"
}

export enum UserCardCardStatus {
    ACTIVE = "Active",
    INACTIVE = "InActive"
}

export enum UserCardCardType {
    ACCUMULATEREDEMPTIONS = "AccumulateRedemptions"
}

export interface IUserDetails {
    readonly __typename?: "UserDetails";
    readonly deliveryAddresses: Maybe<ReadonlyArray<Maybe<IDeliveryAddress>>>;
    readonly autoReloadEnabled: Maybe<Scalars["Boolean"]>;
    readonly autoReloadThreshold: Maybe<Scalars["Int"]>;
    readonly communicationPreferences: Maybe<
        ReadonlyArray<Maybe<ICommunicationPreference>>
    >;
    readonly defaultAccountIdentifier: Maybe<Scalars["String"]>;
    readonly defaultFdAccountId: Maybe<Scalars["String"]>;
    readonly defaultPaymentAccountId: Maybe<Scalars["String"]>;
    readonly defaultScanAndPayAccountIdentifier: Maybe<Scalars["String"]>;
    readonly defaultReloadAmt: Maybe<Scalars["Int"]>;
    readonly dob: Maybe<Scalars["String"]>;
    readonly email: Maybe<Scalars["String"]>;
    readonly emailVerified: Maybe<Scalars["Boolean"]>;
    readonly favoriteStores: Maybe<ReadonlyArray<Maybe<IFavoriteStore>>>;
    readonly isoCountryCode: Maybe<IsoCountryCode>;
    readonly loyaltyTier: Maybe<Scalars["String"]>;
    readonly name: Maybe<Scalars["String"]>;
    readonly phoneNumber: Maybe<Scalars["String"]>;
    readonly promotionalEmails: Maybe<Scalars["Boolean"]>;
    readonly rutrFailedSkillsTestTimestamp: Maybe<Scalars["String"]>;
    readonly rutrPassedSkillsTestTimestamp: Maybe<Scalars["String"]>;
    readonly zipcode: Maybe<Scalars["String"]>;
}

export interface IUserGeo {
    readonly __typename?: "UserGeo";
    readonly country: Maybe<Scalars["String"]>;
    readonly city: Maybe<Scalars["String"]>;
    readonly state: Maybe<Scalars["String"]>;
}

export interface IUserReportsMissingOrderInput {
    readonly rbiOrderId: Scalars["String"];
    readonly issueId?: Maybe<Scalars["String"]>;
    readonly issueSubCategory?: Maybe<Scalars["String"]>;
    readonly missingItems?: Maybe<ReadonlyArray<Maybe<IMissingItem>>>;
    readonly userComment?: Maybe<Scalars["String"]>;
}

export interface IUserRequestsRefundInput {
    readonly rbiOrderId: Scalars["String"];
    readonly issueId?: Maybe<Scalars["String"]>;
    readonly issueSubCategory?: Maybe<Scalars["String"]>;
    readonly missingItems?: Maybe<ReadonlyArray<Maybe<IMissingItem>>>;
    readonly userComment?: Maybe<Scalars["String"]>;
}

export interface IValidateAuthJwtInput {
    readonly jwt: Scalars["String"];
}

export interface IValidateCommitOrderInput {
    readonly rbiOrderId: Scalars["String"];
    readonly fireOrderIn?: Maybe<Scalars["Int"]>;
    readonly delivery?: Maybe<ICommitDeliveryInput>;
    readonly skipCoolingPeriod?: Maybe<Scalars["Boolean"]>;
    readonly redeemedOn?: Maybe<Scalars["String"]>;
}

export interface IVendorConfig {
    readonly __typename?: "VendorConfig";
    readonly constantPlu: Maybe<Scalars["String"]>;
    readonly multiConstantPlus: Maybe<ReadonlyArray<Maybe<IQuantityPlu>>>;
    readonly pluType: Scalars["String"];
    readonly parentChildPlu: Maybe<IParentChildPlu>;
    readonly parentSanityId: Maybe<Scalars["String"]>;
    readonly pullUpLevels: Maybe<Scalars["Int"]>;
    readonly quantityBasedPlu: Maybe<ReadonlyArray<Maybe<IQuantityPlu>>>;
    readonly sizeBasedPlu: Maybe<ISizeBasedPlu>;
}

export interface IVendorConfigInput {
    readonly pluType: Scalars["String"];
    readonly parentSanityId?: Maybe<Scalars["String"]>;
    readonly pullUpLevels?: Maybe<Scalars["Int"]>;
    readonly constantPlu?: Maybe<Scalars["String"]>;
    readonly multiConstantPlus?: Maybe<ReadonlyArray<Maybe<IQuantityPluInput>>>;
    readonly parentChildPlu?: Maybe<IParentChildPluInput>;
    readonly quantityBasedPlu?: Maybe<ReadonlyArray<Maybe<IQuantityPluInput>>>;
    readonly sizeBasedPlu?: Maybe<ISizeBasedPluInput>;
}

export interface IVendorConfigs {
    readonly __typename?: "VendorConfigs";
    readonly carrols: Maybe<IVendorConfig>;
    readonly carrolsDelivery: Maybe<IVendorConfig>;
    readonly ncr: Maybe<IVendorConfig>;
    readonly ncrDelivery: Maybe<IVendorConfig>;
    readonly oheics: Maybe<IVendorConfig>;
    readonly oheicsDelivery: Maybe<IVendorConfig>;
    readonly partner: Maybe<IVendorConfig>;
    readonly partnerDelivery: Maybe<IVendorConfig>;
    readonly productNumber: Maybe<IVendorConfig>;
    readonly productNumberDelivery: Maybe<IVendorConfig>;
    readonly qdi: Maybe<IVendorConfig>;
    readonly qdiDelivery: Maybe<IVendorConfig>;
    readonly qst: Maybe<IVendorConfig>;
    readonly qstDelivery: Maybe<IVendorConfig>;
    readonly rpos: Maybe<IVendorConfig>;
    readonly rposDelivery: Maybe<IVendorConfig>;
    readonly sicom: Maybe<IVendorConfig>;
    readonly sicomDelivery: Maybe<IVendorConfig>;
    readonly simplyDelivery: Maybe<IVendorConfig>;
    readonly simplyDeliveryDelivery: Maybe<IVendorConfig>;
    readonly tablet: Maybe<IVendorConfig>;
    readonly tabletDelivery: Maybe<IVendorConfig>;
}

export interface IVendorConfigsInput {
    readonly carrols?: Maybe<IVendorConfigInput>;
    readonly carrolsDelivery?: Maybe<IVendorConfigInput>;
    readonly hdx?: Maybe<IVendorConfigInput>;
    readonly ncr?: Maybe<IVendorConfigInput>;
    readonly ncrDelivery?: Maybe<IVendorConfigInput>;
    readonly oheics?: Maybe<IVendorConfigInput>;
    readonly oheicsDelivery?: Maybe<IVendorConfigInput>;
    readonly partner?: Maybe<IVendorConfigInput>;
    readonly partnerDelivery?: Maybe<IVendorConfigInput>;
    readonly productNumber?: Maybe<IVendorConfigInput>;
    readonly productNumberDelivery?: Maybe<IVendorConfigInput>;
    readonly qdi?: Maybe<IVendorConfigInput>;
    readonly qdiDelivery?: Maybe<IVendorConfigInput>;
    readonly qst?: Maybe<IVendorConfigInput>;
    readonly qstDelivery?: Maybe<IVendorConfigInput>;
    readonly rpos?: Maybe<IVendorConfigInput>;
    readonly rposDelivery?: Maybe<IVendorConfigInput>;
    readonly sicom?: Maybe<IVendorConfigInput>;
    readonly sicomDelivery?: Maybe<IVendorConfigInput>;
    readonly simplyDelivery?: Maybe<IVendorConfigInput>;
    readonly simplyDeliveryDelivery?: Maybe<IVendorConfigInput>;
    readonly tablet?: Maybe<IVendorConfigInput>;
    readonly tabletDelivery?: Maybe<IVendorConfigInput>;
}

export interface IVendorQuote {
    readonly __typename?: "VendorQuote";
    readonly costInCents: Scalars["Float"];
    readonly dropoffWindow: IDropoffWindow;
    readonly expirationTime: Scalars["String"];
    readonly id: Scalars["String"];
    readonly pickupAddress: IPickupAddress;
    readonly pickupWindow: IPickupWindow;
    readonly storeID: Scalars["String"];
    readonly vendor: Scalars["String"];
}

export interface IVrPayment {
    readonly billingAgreementId?: Maybe<Scalars["String"]>;
    readonly deviceToken?: Maybe<Scalars["String"]>;
    readonly pspReference: Scalars["String"];
    readonly storedPaymentMethodId?: Maybe<Scalars["String"]>;
    readonly storePaymentMethod: Scalars["Boolean"];
    readonly merchantAccount: Scalars["String"];
}

export interface IVrPaymentCheckoutLink {
    readonly __typename?: "VrPaymentCheckoutLink";
    readonly link: Scalars["String"];
}

export interface IVrPaymentPayPalFastLink {
    readonly __typename?: "VrPaymentPayPalFastLink";
    readonly link: Scalars["String"];
}

export interface IVrPaymentVaultLink {
    readonly __typename?: "VrPaymentVaultLink";
    readonly link: Scalars["String"];
    readonly data: Scalars["String"];
}

export interface IWllSession {
    readonly __typename?: "WllSession";
    readonly session: Scalars["String"];
    readonly wllUrl: Scalars["String"];
    readonly webUrl: Scalars["String"];
}

export type IDeleteMeMutation = {
    readonly __typename?: "Mutation";
    readonly deleteMe: Maybe<boolean>;
};

export type ICheckRefundEligibilityQueryVariables = {
    rbiOrderId: Scalars["ID"];
};

export type ICheckRefundEligibilityQuery = {
    readonly __typename?: "Query";
    readonly checkRefundEligibility: Maybe<{
        readonly __typename?: "RefundEligibilityResponse";
        readonly eligible: boolean;
        readonly ineligibilityReason: Maybe<RefundIneligibilityReason>;
    }>;
};

export type ISendQrSnapToDeepflameMutationVariables = {
    name: Scalars["String"];
    storeId: Scalars["String"];
    laneId: Scalars["String"];
    shortCode: Scalars["String"];
    balances: ReadonlyArray<ILoyaltyBalance>;
};

export type ISendQrSnapToDeepflameMutation = {
    readonly __typename?: "Mutation";
    readonly sendQrSnapToDeepflame: Maybe<boolean>;
};

export type IListRecommendationItemsQueryVariables = {
    productDetails: ReadonlyArray<Maybe<IProductDetailInput>>;
    serviceMode: ServiceMode;
    storeId: Scalars["String"];
    type: RecommendationType;
};

export type IListRecommendationItemsQuery = {
    readonly __typename?: "Query";
    readonly listRecommendationItems: Maybe<{
        readonly __typename?: "RecommendationItemResult";
        readonly recommender: Maybe<string>;
        readonly recommendationToken: Maybe<string>;
        readonly results: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "RecommendationItem";
                    readonly id: string;
                }>
            >
        >;
    }>;
};

export type IDeliveryQuoteQueryVariables = {
    dropoff: IDeliveryWaypointInput;
    pickup: IDeliveryWaypointInput;
};

export type IDeliveryQuoteQuery = {
    readonly __typename?: "Query";
    readonly deliveryQuote: {
        readonly __typename?: "Delivery";
        readonly status: DeliveryStatus;
        readonly deliverySurchargeFeeCents: Maybe<number>;
    };
};

export type ICartEntryFragment = {
    readonly __typename?: "CartEntries";
    readonly lineId: string;
    readonly image: Maybe<string>;
    readonly isDonation: Maybe<boolean>;
    readonly isExtra: Maybe<boolean>;
    readonly name: Maybe<string>;
    readonly pickerSelections: Maybe<string>;
    readonly price: Maybe<number>;
    readonly quantity: number;
    readonly sanityId: string;
    readonly type: CartEntryType;
    readonly url: Maybe<string>;
    readonly redeemable: Maybe<boolean>;
    readonly _id: string;
    readonly vendorConfigs: Maybe<
        { readonly __typename?: "VendorConfigs" } & IVendorConfigsFragment
    >;
};

export type IFavoriteFragment = {
    readonly __typename?: "Favorite";
    readonly favoriteId: Maybe<string>;
    readonly name: Maybe<string>;
    readonly ref: Maybe<string>;
    readonly createdAt: Maybe<string>;
    readonly updatedAt: Maybe<string>;
    readonly _id: Maybe<string>;
    readonly entries: Maybe<
        ReadonlyArray<
            Maybe<
                {
                    readonly __typename?: "CartEntries";
                    readonly children: Maybe<
                        ReadonlyArray<
                            Maybe<
                                {
                                    readonly __typename?: "CartEntries";
                                    readonly children: Maybe<
                                        ReadonlyArray<
                                            Maybe<
                                                {
                                                    readonly __typename?: "CartEntries";
                                                    readonly children: Maybe<
                                                        ReadonlyArray<
                                                            Maybe<
                                                                {
                                                                    readonly __typename?: "CartEntries";
                                                                    readonly children: Maybe<
                                                                        ReadonlyArray<
                                                                            Maybe<
                                                                                {
                                                                                    readonly __typename?: "CartEntries";
                                                                                    readonly children: Maybe<
                                                                                        ReadonlyArray<
                                                                                            Maybe<
                                                                                                {
                                                                                                    readonly __typename?: "CartEntries";
                                                                                                } & ICartEntryFragment
                                                                                            >
                                                                                        >
                                                                                    >;
                                                                                } & ICartEntryFragment
                                                                            >
                                                                        >
                                                                    >;
                                                                } & ICartEntryFragment
                                                            >
                                                        >
                                                    >;
                                                } & ICartEntryFragment
                                            >
                                        >
                                    >;
                                } & ICartEntryFragment
                            >
                        >
                    >;
                } & ICartEntryFragment
            >
        >
    >;
};

export type IReorderFavoriteFragment = {
    readonly __typename?: "Favorite";
    readonly entries: Maybe<
        ReadonlyArray<
            Maybe<
                {
                    readonly __typename?: "CartEntries";
                    readonly isInMenu: Maybe<boolean>;
                    readonly children: Maybe<
                        ReadonlyArray<
                            Maybe<
                                {
                                    readonly __typename?: "CartEntries";
                                    readonly isInMenu: Maybe<boolean>;
                                    readonly children: Maybe<
                                        ReadonlyArray<
                                            Maybe<
                                                {
                                                    readonly __typename?: "CartEntries";
                                                    readonly isInMenu: Maybe<boolean>;
                                                    readonly children: Maybe<
                                                        ReadonlyArray<
                                                            Maybe<
                                                                {
                                                                    readonly __typename?: "CartEntries";
                                                                    readonly isInMenu: Maybe<boolean>;
                                                                    readonly children: Maybe<
                                                                        ReadonlyArray<
                                                                            Maybe<
                                                                                {
                                                                                    readonly __typename?: "CartEntries";
                                                                                    readonly isInMenu: Maybe<boolean>;
                                                                                    readonly children: Maybe<
                                                                                        ReadonlyArray<
                                                                                            Maybe<
                                                                                                {
                                                                                                    readonly __typename?: "CartEntries";
                                                                                                    readonly isInMenu: Maybe<boolean>;
                                                                                                } & ICartEntryFragment
                                                                                            >
                                                                                        >
                                                                                    >;
                                                                                } & ICartEntryFragment
                                                                            >
                                                                        >
                                                                    >;
                                                                } & ICartEntryFragment
                                                            >
                                                        >
                                                    >;
                                                } & ICartEntryFragment
                                            >
                                        >
                                    >;
                                } & ICartEntryFragment
                            >
                        >
                    >;
                } & ICartEntryFragment
            >
        >
    >;
} & IFavoriteFragment;

export type IOperatingHoursFragment = {
    readonly __typename?: "OperatingHours";
    readonly friClose: Maybe<string>;
    readonly friOpen: Maybe<string>;
    readonly monClose: Maybe<string>;
    readonly monOpen: Maybe<string>;
    readonly satClose: Maybe<string>;
    readonly satOpen: Maybe<string>;
    readonly sunClose: Maybe<string>;
    readonly sunOpen: Maybe<string>;
    readonly thrClose: Maybe<string>;
    readonly thrOpen: Maybe<string>;
    readonly tueClose: Maybe<string>;
    readonly tueOpen: Maybe<string>;
    readonly wedClose: Maybe<string>;
    readonly wedOpen: Maybe<string>;
};

export type IRestaurantNodeFragment = {
    readonly __typename?: "RestaurantNode";
    readonly _id: Maybe<string>;
    readonly storeId: Maybe<string>;
    readonly isAvailable: boolean;
    readonly posVendor: Maybe<string>;
    readonly chaseMerchantId: Maybe<string>;
    readonly distanceInMiles: Maybe<number>;
    readonly drinkStationType: Maybe<string>;
    readonly driveThruLaneType: Maybe<string>;
    readonly email: Maybe<ReadonlyArray<string>>;
    readonly environment: Maybe<RestaurantStatus>;
    readonly franchiseGroupId: Maybe<number>;
    readonly franchiseGroupName: Maybe<string>;
    readonly frontCounterClosed: Maybe<boolean>;
    readonly hasBreakfast: Maybe<boolean>;
    readonly hasBurgersForBreakfast: Maybe<boolean>;
    readonly hasCatering: Maybe<boolean>;
    readonly hasCurbside: Maybe<boolean>;
    readonly hasDelivery: Maybe<boolean>;
    readonly hasDineIn: Maybe<boolean>;
    readonly hasDriveThru: Maybe<boolean>;
    readonly hasTableService: Maybe<boolean>;
    readonly hasMobileOrdering: Maybe<boolean>;
    readonly hasLateNightMenu: Maybe<boolean>;
    readonly hasParking: Maybe<boolean>;
    readonly hasPlayground: Maybe<boolean>;
    readonly hasTakeOut: Maybe<boolean>;
    readonly hasWifi: Maybe<boolean>;
    readonly hasLoyalty: Maybe<boolean>;
    readonly id: Maybe<string>;
    readonly isDarkKitchen: Maybe<boolean>;
    readonly isFavorite: boolean;
    readonly isHalal: Maybe<boolean>;
    readonly isRecent: boolean;
    readonly latitude: Maybe<number>;
    readonly longitude: Maybe<number>;
    readonly mobileOrderingStatus: Maybe<OrderingStatus>;
    readonly name: Maybe<string>;
    readonly number: Maybe<string>;
    readonly parkingType: Maybe<string>;
    readonly phoneNumber: Maybe<string>;
    readonly playgroundType: Maybe<string>;
    readonly posRestaurantId: Maybe<string>;
    readonly status: Maybe<string>;
    readonly vatNumber: Maybe<string>;
    readonly curbsideHours: Maybe<
        { readonly __typename?: "OperatingHours" } & IOperatingHoursFragment
    >;
    readonly deliveryHours: Maybe<
        { readonly __typename?: "OperatingHours" } & IOperatingHoursFragment
    >;
    readonly diningRoomHours: Maybe<
        { readonly __typename?: "OperatingHours" } & IOperatingHoursFragment
    >;
    readonly driveThruHours: Maybe<
        { readonly __typename?: "OperatingHours" } & IOperatingHoursFragment
    >;
    readonly physicalAddress: Maybe<{
        readonly __typename?: "PhysicalAddress";
        readonly address1: Maybe<string>;
        readonly address2: Maybe<string>;
        readonly city: Maybe<string>;
        readonly country: Maybe<string>;
        readonly postalCode: Maybe<string>;
        readonly stateProvince: Maybe<string>;
        readonly stateProvinceShort: Maybe<string>;
    }>;
    readonly pos: Maybe<{
        readonly __typename?: "RestaurantPos";
        readonly vendor: Maybe<string>;
    }>;
    readonly restaurantImage: Maybe<{
        readonly __typename?: "SanityImage";
        readonly asset: Maybe<{
            readonly __typename?: "SanityImageAsset";
            readonly _id: Maybe<string>;
            readonly metadata: Maybe<{
                readonly __typename?: "SanityImageMetaData";
                readonly lqip: Maybe<string>;
                readonly palette: Maybe<{
                    readonly __typename?: "SanityImagePalette";
                    readonly dominant: Maybe<{
                        readonly __typename?: "SanityImagePaletteSwatch";
                        readonly background: Maybe<string>;
                        readonly foreground: Maybe<string>;
                    }>;
                }>;
            }>;
        }>;
        readonly crop: Maybe<{
            readonly __typename?: "SanityImageCrop";
            readonly top: Maybe<number>;
            readonly bottom: Maybe<number>;
            readonly left: Maybe<number>;
            readonly right: Maybe<number>;
        }>;
        readonly hotspot: Maybe<{
            readonly __typename?: "SanityImageHotspot";
            readonly height: Maybe<number>;
            readonly width: Maybe<number>;
            readonly x: Maybe<number>;
            readonly y: Maybe<number>;
        }>;
    }>;
    readonly restaurantPosData: Maybe<{
        readonly __typename?: "RestaurantPosData";
        readonly _id: Maybe<string>;
    }>;
};

export type IUserDetailsFragment = {
    readonly __typename?: "UserDetails";
    readonly name: Maybe<string>;
    readonly dob: Maybe<string>;
    readonly phoneNumber: Maybe<string>;
    readonly email: Maybe<string>;
    readonly emailVerified: Maybe<boolean>;
    readonly promotionalEmails: Maybe<boolean>;
    readonly isoCountryCode: Maybe<IsoCountryCode>;
    readonly zipcode: Maybe<string>;
    readonly defaultAccountIdentifier: Maybe<string>;
    readonly defaultFdAccountId: Maybe<string>;
    readonly defaultPaymentAccountId: Maybe<string>;
    readonly defaultScanAndPayAccountIdentifier: Maybe<string>;
    readonly defaultReloadAmt: Maybe<number>;
    readonly autoReloadEnabled: Maybe<boolean>;
    readonly autoReloadThreshold: Maybe<number>;
    readonly loyaltyTier: Maybe<string>;
    readonly rutrPassedSkillsTestTimestamp: Maybe<string>;
    readonly rutrFailedSkillsTestTimestamp: Maybe<string>;
    readonly deliveryAddresses: Maybe<
        ReadonlyArray<
            Maybe<{
                readonly __typename?: "DeliveryAddress";
                readonly addressLine1: string;
                readonly addressLine2: Maybe<string>;
                readonly city: string;
                readonly country: Maybe<IsoCountryCode>;
                readonly phoneNumber: string;
                readonly route: Maybe<string>;
                readonly state: Maybe<string>;
                readonly streetNumber: Maybe<string>;
                readonly zip: Maybe<string>;
            }>
        >
    >;
    readonly communicationPreferences: Maybe<
        ReadonlyArray<
            Maybe<{
                readonly __typename?: "CommunicationPreference";
                readonly id: Maybe<string>;
                readonly value: Maybe<string>;
            }>
        >
    >;
    readonly favoriteStores: Maybe<
        ReadonlyArray<
            Maybe<{
                readonly __typename?: "FavoriteStore";
                readonly storeId: Maybe<string>;
                readonly storeNumber: Maybe<string>;
            }>
        >
    >;
};

export type IUserOrderFragment = {
    readonly __typename?: "Order";
    readonly rbiOrderId: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly fireOrderIn: Maybe<number>;
    readonly status: RbiOrderStatus;
    readonly orderNumberFormatted: Maybe<string>;
    readonly _id: string;
    readonly delivery: Maybe<{
        readonly __typename?: "Delivery";
        readonly feeCents: number;
        readonly tipCents: Maybe<number>;
        readonly feeDiscountCents: Maybe<number>;
        readonly status: DeliveryStatus;
        readonly serviceFeeCents: Maybe<number>;
        readonly smallCartFeeCents: Maybe<number>;
        readonly geographicalFeeCents: Maybe<number>;
    }>;
    readonly cart: {
        readonly __typename?: "Cart";
        readonly ticketNumber: Maybe<string>;
        readonly storeId: string;
        readonly vatNumber: Maybe<string>;
        readonly serviceMode: ServiceMode;
        readonly posVendor: PosVendor;
        readonly cartVersion: Maybe<number>;
        readonly subTotalCents: Maybe<number>;
        readonly taxCents: Maybe<number>;
        readonly totalCents: Maybe<number>;
        readonly wasLoyaltyEarned: Maybe<boolean>;
        readonly discounts: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "Discount";
                    readonly name: Maybe<DiscountTypes>;
                    readonly value: Maybe<number>;
                }>
            >
        >;
        readonly fees: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "Fees";
                    readonly name: Maybe<string>;
                    readonly priceCents: Maybe<number>;
                    readonly quantity: Maybe<number>;
                    readonly totalCents: Maybe<number>;
                }>
            >
        >;
        readonly donations: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "Donation";
                    readonly id: Maybe<string>;
                    readonly name: Maybe<string>;
                    readonly totalCents: Maybe<number>;
                }>
            >
        >;
        readonly storeAddress: {
            readonly __typename?: "StoreAddress";
            readonly addressLine1: string;
            readonly addressLine2: Maybe<string>;
            readonly city: string;
            readonly state: string;
            readonly zip: string;
        };
        readonly cartEntries: Maybe<
            ReadonlyArray<
                {
                    readonly __typename?: "CartEntries";
                    readonly children: Maybe<
                        ReadonlyArray<
                            Maybe<
                                {
                                    readonly __typename?: "CartEntries";
                                    readonly children: Maybe<
                                        ReadonlyArray<
                                            Maybe<
                                                {
                                                    readonly __typename?: "CartEntries";
                                                    readonly children: Maybe<
                                                        ReadonlyArray<
                                                            Maybe<
                                                                {
                                                                    readonly __typename?: "CartEntries";
                                                                    readonly children: Maybe<
                                                                        ReadonlyArray<
                                                                            Maybe<
                                                                                {
                                                                                    readonly __typename?: "CartEntries";
                                                                                    readonly children: Maybe<
                                                                                        ReadonlyArray<
                                                                                            Maybe<
                                                                                                {
                                                                                                    readonly __typename?: "CartEntries";
                                                                                                } & ICartEntryFragment
                                                                                            >
                                                                                        >
                                                                                    >;
                                                                                } & ICartEntryFragment
                                                                            >
                                                                        >
                                                                    >;
                                                                } & ICartEntryFragment
                                                            >
                                                        >
                                                    >;
                                                } & ICartEntryFragment
                                            >
                                        >
                                    >;
                                } & ICartEntryFragment
                            >
                        >
                    >;
                } & ICartEntryFragment
            >
        >;
        readonly reorderCartEntries: Maybe<
            ReadonlyArray<
                {
                    readonly __typename?: "CartEntries";
                    readonly isInMenu: Maybe<boolean>;
                    readonly children: Maybe<
                        ReadonlyArray<
                            Maybe<
                                {
                                    readonly __typename?: "CartEntries";
                                    readonly isInMenu: Maybe<boolean>;
                                    readonly children: Maybe<
                                        ReadonlyArray<
                                            Maybe<
                                                {
                                                    readonly __typename?: "CartEntries";
                                                    readonly isInMenu: Maybe<boolean>;
                                                    readonly children: Maybe<
                                                        ReadonlyArray<
                                                            Maybe<
                                                                {
                                                                    readonly __typename?: "CartEntries";
                                                                    readonly isInMenu: Maybe<boolean>;
                                                                    readonly children: Maybe<
                                                                        ReadonlyArray<
                                                                            Maybe<
                                                                                {
                                                                                    readonly __typename?: "CartEntries";
                                                                                    readonly isInMenu: Maybe<boolean>;
                                                                                    readonly children: Maybe<
                                                                                        ReadonlyArray<
                                                                                            Maybe<
                                                                                                {
                                                                                                    readonly __typename?: "CartEntries";
                                                                                                    readonly isInMenu: Maybe<boolean>;
                                                                                                } & ICartEntryFragment
                                                                                            >
                                                                                        >
                                                                                    >;
                                                                                } & ICartEntryFragment
                                                                            >
                                                                        >
                                                                    >;
                                                                } & ICartEntryFragment
                                                            >
                                                        >
                                                    >;
                                                } & ICartEntryFragment
                                            >
                                        >
                                    >;
                                } & ICartEntryFragment
                            >
                        >
                    >;
                } & ICartEntryFragment
            >
        >;
        readonly unavailableCartEntries: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "UnavailableCartEntry";
                    readonly lineId: Maybe<string>;
                    readonly sanityId: string;
                }>
            >
        >;
    };
    readonly fulfillmentDetails: Maybe<{
        readonly __typename?: "FulfillmentDetails";
        readonly pickupType: Maybe<FulfillmentPickupType>;
        readonly pickupReady: Maybe<boolean>;
    }>;
    readonly order: Maybe<{
        readonly __typename?: "RbiOrder";
        readonly refund: Maybe<{
            readonly __typename?: "Refund";
            readonly primaryReason: RefundReason;
            readonly secondaryReason: Maybe<string>;
            readonly subtotal: string;
            readonly tax: string;
            readonly transactionDateTime: string;
            readonly refundedItems: Maybe<
                ReadonlyArray<
                    Maybe<{
                        readonly __typename?: "RefundedItem";
                        readonly refundAmount: Maybe<string>;
                        readonly refundQuantity: Maybe<string>;
                        readonly sanityId: Maybe<string>;
                        readonly type: Maybe<CartEntryType>;
                        readonly name: Maybe<string>;
                        readonly plu: Maybe<string>;
                    }>
                >
            >;
        }>;
    }>;
};

export type IVendorConfigFragment = {
    readonly __typename?: "VendorConfig";
    readonly pluType: string;
    readonly parentSanityId: Maybe<string>;
    readonly pullUpLevels: Maybe<number>;
    readonly constantPlu: Maybe<string>;
    readonly quantityBasedPlu: Maybe<
        ReadonlyArray<
            Maybe<{
                readonly __typename?: "QuantityPlu";
                readonly quantity: Maybe<number>;
                readonly plu: Maybe<string>;
                readonly qualifier: Maybe<string>;
            }>
        >
    >;
    readonly multiConstantPlus: Maybe<
        ReadonlyArray<
            Maybe<{
                readonly __typename?: "QuantityPlu";
                readonly quantity: Maybe<number>;
                readonly plu: Maybe<string>;
                readonly qualifier: Maybe<string>;
            }>
        >
    >;
    readonly parentChildPlu: Maybe<{
        readonly __typename?: "ParentChildPlu";
        readonly plu: Maybe<string>;
        readonly childPlu: Maybe<string>;
    }>;
    readonly sizeBasedPlu: Maybe<{
        readonly __typename?: "SizeBasedPlu";
        readonly comboPlu: Maybe<string>;
        readonly comboSize: Maybe<string>;
    }>;
};

export type IVendorConfigsFragment = {
    readonly __typename?: "VendorConfigs";
    readonly carrols: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly carrolsDelivery: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly ncr: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly ncrDelivery: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly oheics: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly oheicsDelivery: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly partner: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly partnerDelivery: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly productNumber: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly productNumberDelivery: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly sicom: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly sicomDelivery: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly qdi: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly qdiDelivery: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly qst: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly qstDelivery: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly rpos: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly rposDelivery: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly simplyDelivery: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly simplyDeliveryDelivery: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly tablet: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
    readonly tabletDelivery: Maybe<
        { readonly __typename?: "VendorConfig" } & IVendorConfigFragment
    >;
};

export type IGetRestaurantQueryVariables = {
    storeId?: Maybe<Scalars["String"]>;
    storeNumber?: Maybe<Scalars["String"]>;
};

export type IGetRestaurantQuery = {
    readonly __typename?: "Query";
    readonly restaurant: {
        readonly __typename?: "Restaurant";
        readonly available: boolean;
        readonly curbsideHours: Maybe<
            { readonly __typename?: "OperatingHours" } & IOperatingHoursFragment
        >;
        readonly deliveryHours: Maybe<
            { readonly __typename?: "OperatingHours" } & IOperatingHoursFragment
        >;
        readonly diningRoomHours: Maybe<
            { readonly __typename?: "OperatingHours" } & IOperatingHoursFragment
        >;
        readonly driveThruHours: Maybe<
            { readonly __typename?: "OperatingHours" } & IOperatingHoursFragment
        >;
    };
};

export type IGetAvailableGiftOffersQuery = {
    readonly __typename?: "Query";
    readonly listGiftOffers: Maybe<{
        readonly __typename?: "GiftOfferListResponse";
        readonly count: number;
        readonly offers: ReadonlyArray<
            Maybe<{
                readonly __typename?: "GiftOffer";
                readonly title: string;
                readonly titleFormatted: string;
                readonly offerId: string;
                readonly costInPoints: number;
                readonly isRedeemable: boolean;
            }>
        >;
    }>;
};

export type IGiftOfferMutationVariables = {
    input: IGiftOfferInput;
};

export type IGiftOfferMutation = {
    readonly __typename?: "Mutation";
    readonly addGiftOfferByEmail: boolean;
};

export type IAddOfferByTokenMutationVariables = {
    token: Scalars["String"];
};

export type IAddOfferByTokenMutation = {
    readonly __typename?: "Mutation";
    readonly addOfferByToken: boolean;
};

export type ICreateSupportCaseMutationVariables = {
    caseInfo: ISupportCaseInput;
};

export type ICreateSupportCaseMutation = {
    readonly __typename?: "Mutation";
    readonly createSupportCase: Maybe<{
        readonly __typename?: "SupportCase";
        readonly caseId: Maybe<string>;
    }>;
};

export type IGetLoyaltyCardsQuery = {
    readonly __typename?: "Query";
    readonly getLoyaltyCards: Maybe<{
        readonly __typename?: "LoyaltyCardsResp";
        readonly count: number;
        readonly cards: ReadonlyArray<
            Maybe<{
                readonly __typename?: "LoyaltyCard";
                readonly barcode: string;
                readonly cardFormat: UserCardCardFormat;
                readonly cardId: string;
                readonly cardType: UserCardCardType;
                readonly name: string;
            }>
        >;
    }>;
};

export type IGetLoyaltyCardDetailsQueryVariables = {
    cardId: Scalars["String"];
};

export type IGetLoyaltyCardDetailsQuery = {
    readonly __typename?: "Query";
    readonly getLoyaltyCardDetails: Maybe<{
        readonly __typename?: "LoyaltyCardDetails";
        readonly availableRedemptions: number;
        readonly barcode: Maybe<string>;
        readonly canEarnVisit: boolean;
        readonly canRedeemReward: boolean;
        readonly cardType: UserCardCardType;
        readonly discountActiveUntil: Maybe<string>;
        readonly donationUpcharge: Maybe<boolean>;
        readonly numberOfTransactionsInTimePeriod: number;
        readonly numberOfTransactionsMadeTowardsNextReward: number;
        readonly numberOfTransactionsNeeded: number;
        readonly periodEndTimestamp: string;
        readonly periodStartTimestamp: string;
        readonly points: Maybe<number>;
        readonly scanAndPay: Maybe<boolean>;
        readonly pointExpiry: ReadonlyArray<{
            readonly __typename?: "LoyaltyPointExpiry";
            readonly points: number;
            readonly expirationDate: string;
        }>;
    }>;
};

export type IGetLoyaltyCardTransactionsQueryVariables = {
    cardId: Scalars["String"];
    endDate?: Maybe<Scalars["String"]>;
    page?: Maybe<Scalars["String"]>;
    pageSize?: Maybe<Scalars["String"]>;
    startDate?: Maybe<Scalars["String"]>;
};

export type IGetLoyaltyCardTransactionsQuery = {
    readonly __typename?: "Query";
    readonly getLoyaltyCardTransactions: Maybe<{
        readonly __typename?: "LoyaltyCardTransactions";
        readonly transactions: ReadonlyArray<
            Maybe<{
                readonly __typename?: "LoyaltyCardTransaction";
                readonly bonusPoints: Maybe<number>;
                readonly tag: Maybe<string>;
                readonly transactionId: Maybe<string>;
                readonly timestamp: Maybe<string>;
                readonly basketTotal: Maybe<number>;
                readonly rewardRedeemed: Maybe<boolean>;
                readonly discountAmount: Maybe<number>;
                readonly isVisit: Maybe<boolean>;
                readonly pointsEarned: Maybe<number>;
                readonly pointsUsed: Maybe<number>;
                readonly isCustomerServiceVisit: Maybe<boolean>;
            }>
        >;
    }>;
};

export type IGetLoyaltyCardDetailsFromBarcodeQueryVariables = {
    barcode: Scalars["String"];
};

export type IGetLoyaltyCardDetailsFromBarcodeQuery = {
    readonly __typename?: "Query";
    readonly getLoyaltyCardDetailsKiosk: Maybe<{
        readonly __typename?: "LoyaltyCardDetailsKiosk";
        readonly availableRedemptions: number;
        readonly numberOfTransactionsInTimePeriod: number;
        readonly numberOfTransactionsMadeTowardsNextReward: number;
        readonly numberOfTransactionsNeeded: number;
    }>;
};

export type IGetLoyaltyRollUpTheRimTimelineEventsQueryVariables = {
    eventId?: Maybe<Scalars["String"]>;
    resumeAfter?: Maybe<Scalars["String"]>;
    sortAscending?: Maybe<Scalars["Boolean"]>;
};

export type IGetLoyaltyRollUpTheRimTimelineEventsQuery = {
    readonly __typename?: "Query";
    readonly getLoyaltyRollUpTheRimTimelineEvents: Maybe<{
        readonly __typename?: "LoyaltyRollUpTheRimTimelineEventList";
        readonly count: number;
        readonly resumeAfter: Maybe<string>;
        readonly events: ReadonlyArray<
            Maybe<{
                readonly __typename?: "LoyaltyRollUpTheRimTimelineEventEntry";
                readonly prizeId: Maybe<string>;
                readonly createdAt: string;
                readonly eventId: string;
                readonly referenceId: string;
                readonly timelineId: string;
                readonly type: string;
                readonly redemptionCode: Maybe<string>;
                readonly offerStatus: Maybe<{
                    readonly __typename?: "LoyaltyRollUpTheRimTimelineEventOfferStatus";
                    readonly offerId: Maybe<string>;
                    readonly activated: Maybe<boolean>;
                    readonly used: Maybe<boolean>;
                }>;
            }>
        >;
    }>;
};

export type IAddVoucherMutationVariables = {
    voucherId: Scalars["String"];
};

export type IAddVoucherMutation = {
    readonly __typename?: "Mutation";
    readonly addVoucher: Maybe<boolean>;
};

export type ISetLoyaltyCardRewardsTierMutationVariables = {
    loyaltyTier: Scalars["String"];
};

export type ISetLoyaltyCardRewardsTierMutation = {
    readonly __typename?: "Mutation";
    readonly updateMe: {
        readonly __typename?: "User";
        readonly details: {
            readonly __typename?: "UserDetails";
            readonly loyaltyTier: Maybe<string>;
        };
    };
};

export type IMergeLoyaltyCardsMutationVariables = {
    cardId: Scalars["String"];
    existingCardId: Scalars["String"];
};

export type IMergeLoyaltyCardsMutation = {
    readonly __typename?: "Mutation";
    readonly mergeLoyaltyCards: Maybe<{
        readonly __typename?: "LoyaltyCard";
        readonly cardId: string;
    }>;
};

export type IDeleteLoyaltyCardMutationVariables = {
    cardId: Scalars["String"];
};

export type IDeleteLoyaltyCardMutation = {
    readonly __typename?: "Mutation";
    readonly deleteLoyaltyCard: Maybe<{
        readonly __typename?: "LoyaltyCard";
        readonly cardId: string;
    }>;
};

export type ISetLoyaltyDonationUpchargeMutationVariables = {
    cardId: Scalars["String"];
    donationUpcharge: Scalars["Boolean"];
};

export type ISetLoyaltyDonationUpchargeMutation = {
    readonly __typename?: "Mutation";
    readonly setLoyaltyDonationUpcharge: Maybe<{
        readonly __typename?: "LoyaltyDonationUpcharge";
        readonly donationUpcharge: Maybe<boolean>;
    }>;
};

export type ISetLoyaltyRewardsTierMutationVariables = {
    cardId: Scalars["String"];
    rewardsTier: Scalars["String"];
};

export type ISetLoyaltyRewardsTierMutation = {
    readonly __typename?: "Mutation";
    readonly setLoyaltyRewardsTier: Maybe<{
        readonly __typename?: "LoyaltyRewardsTier";
        readonly rewardsTier: Maybe<string>;
    }>;
};

export type ISetLoyaltyScanAndPayMutationVariables = {
    cardId: Scalars["String"];
    scanAndPay: Scalars["Boolean"];
    defaultPaymentMethodId?: Maybe<Scalars["String"]>;
};

export type ISetLoyaltyScanAndPayMutation = {
    readonly __typename?: "Mutation";
    readonly setLoyaltyScanAndPay: Maybe<{
        readonly __typename?: "LoyaltyScanAndPay";
        readonly scanAndPay: Maybe<boolean>;
    }>;
};

export type ISetSelectedScanAndPayPaymentMethodMutationVariables = {
    scanAndPayPaymentMethodId: Scalars["String"];
};

export type ISetSelectedScanAndPayPaymentMethodMutation = {
    readonly __typename?: "Mutation";
    readonly updateMe: {
        readonly __typename?: "User";
        readonly details: {
            readonly __typename?: "UserDetails";
            readonly defaultScanAndPayAccountIdentifier: Maybe<string>;
        };
    };
};

export type IOfferFeedbackEntryFragment = {
    readonly __typename?: "CouponUserOffersFeedbackEntry";
    readonly tokenId: Maybe<string>;
    readonly couponId: string;
    readonly offerDetails: Maybe<string>;
    readonly offerState: Maybe<CartOfferState>;
    readonly rank: Maybe<number>;
    readonly _id: string;
    readonly cartEntry: Maybe<{
        readonly __typename?: "CartEntries";
        readonly cartId: string;
    }>;
    readonly offerVariables: Maybe<
        ReadonlyArray<
            Maybe<{
                readonly __typename?: "OfferVariable";
                readonly key: string;
                readonly type: string;
                readonly value: string;
            }>
        >
    >;
    readonly redemptionEligibility: {
        readonly __typename?: "CouponRedemptionEligibility";
        readonly isRedeemable: boolean;
        readonly isValid: boolean;
        readonly evaluationFeedback: ReadonlyArray<
            Maybe<{
                readonly __typename?: "CouponEvaluationFeedback";
                readonly code: string;
                readonly condition: boolean;
                readonly message: string;
                readonly redeemableForSeconds: Maybe<number>;
                readonly redeemableInSeconds: Maybe<number>;
                readonly ruleSetType: string;
                readonly sanityId: Maybe<string>;
            }>
        >;
        readonly validationErrors: ReadonlyArray<
            Maybe<{
                readonly __typename?: "CouponValidationError";
                readonly code: string;
                readonly message: string;
                readonly ruleSetType: string;
            }>
        >;
    };
};

export type IEvaluateUserOffersQueryVariables = {
    cart?: Maybe<IPriceOrderInput>;
    couponIds?: Maybe<ReadonlyArray<Maybe<Scalars["ID"]>>>;
    evaluateAllCouponIds?: Maybe<Scalars["Boolean"]>;
    locale?: Maybe<Locale>;
    platform?: Maybe<Platform>;
    rbiOrderId?: Maybe<Scalars["ID"]>;
    redeemedOn: Scalars["String"];
    serviceMode?: Maybe<ServiceMode>;
    storeId?: Maybe<Scalars["String"]>;
};

export type IEvaluateUserOffersQuery = {
    readonly __typename?: "Query";
    readonly evaluateUserOffers: {
        readonly __typename?: "CouponUserOffersFeedback";
        readonly offersFeedback: ReadonlyArray<
            Maybe<
                {
                    readonly __typename?: "CouponUserOffersFeedbackEntry";
                } & IOfferFeedbackEntryFragment
            >
        >;
    };
};

export type IEvaluateAllUserOffersQueryVariables = {
    locale?: Maybe<Locale>;
    platform?: Maybe<Platform>;
    redeemedOn: Scalars["String"];
    serviceMode?: Maybe<ServiceMode>;
    storeId?: Maybe<Scalars["String"]>;
};

export type IEvaluateAllUserOffersQuery = {
    readonly __typename?: "Query";
    readonly evaluateAllUserOffers: {
        readonly __typename?: "CouponUserOffersFeedback";
        readonly offersFeedback: ReadonlyArray<
            Maybe<
                {
                    readonly __typename?: "CouponUserOffersFeedbackEntry";
                } & IOfferFeedbackEntryFragment
            >
        >;
    };
};

export type IListOffersByUserIdQuery = {
    readonly __typename?: "Query";
    readonly listUserCouponTokens: {
        readonly __typename?: "CouponTokenListResponse";
        readonly count: number;
        readonly tokens: ReadonlyArray<
            Maybe<{
                readonly __typename?: "CouponToken";
                readonly couponId: string;
                readonly createdAt: string;
                readonly expiresOn: Maybe<string>;
                readonly tokenId: string;
            }>
        >;
    };
};

export type IRedeemOfferMutationVariables = {
    couponId: Scalars["ID"];
};

export type IRedeemOfferMutation = {
    readonly __typename?: "Mutation";
    readonly redeemCoupon: {
        readonly __typename?: "Coupon";
        readonly couponId: string;
        readonly redeemedOn: Maybe<string>;
    };
};

export type IPaybackAuthenticationMutationVariables = {
    input: IPaybackAuthenticationInput;
};

export type IPaybackAuthenticationMutation = {
    readonly __typename?: "Mutation";
    readonly paybackAuthentication: {
        readonly __typename?: "PaybackSessionToken";
        readonly sessionToken: string;
    };
};

export type IPaybackPointsMutationVariables = {
    input: Scalars["String"];
};

export type IPaybackPointsMutation = {
    readonly __typename?: "Mutation";
    readonly getAccountBalance: number;
    readonly getCardNumber: string;
};

export type IPaybackRevalidationMutation = {
    readonly __typename?: "Mutation";
    readonly revalidateSessionToken: {
        readonly __typename?: "PaybackSessionToken";
        readonly sessionToken: string;
    };
};

export type IGetEncryptionDetailsMutation = {
    readonly __typename?: "Mutation";
    readonly encryptionDetails: {
        readonly __typename?: "EncryptionDetails";
        readonly fdPublicKey: string;
        readonly fdAccessToken: string;
        readonly fdPublicKeyExpiresInSeconds: number;
        readonly fdApiKey: string;
        readonly algorithm: Maybe<string>;
        readonly fdCustomerId: Maybe<string>;
    };
};

export type IAddCreditAccountMutationVariables = {
    input: IAddCreditAccountInput;
};

export type IAddCreditAccountMutation = {
    readonly __typename?: "Mutation";
    readonly addCreditAccount: {
        readonly __typename?: "Account";
        readonly accountIdentifier: Maybe<string>;
        readonly fdAccountId: Maybe<string>;
        readonly chaseProfileId: Maybe<string>;
        readonly credit: Maybe<{
            readonly __typename?: "CreditCard";
            readonly alias: string;
            readonly cardType: string;
            readonly expiryMonth: string;
            readonly expiryYear: string;
            readonly panToken: Maybe<string>;
            readonly billingAddress: Maybe<{
                readonly __typename?: "BillingAddress";
                readonly locality: string;
                readonly postalCode: string;
                readonly region: string;
                readonly streetAddress: string;
                readonly unitNumber: Maybe<string>;
            }>;
        }>;
    };
};

export type IDeleteAccountMutationVariables = {
    input: IDeleteAccountInput;
};

export type IDeleteAccountMutation = {
    readonly __typename?: "Mutation";
    readonly deleteAccount: Maybe<boolean>;
};

export type IUserAccountsQueryVariables = {
    feCountryCode: IsoCountryCode;
};

export type IUserAccountsQuery = {
    readonly __typename?: "Query";
    readonly userAccounts: Maybe<{
        readonly __typename?: "AccountListResponse";
        readonly count: number;
        readonly paymentProcessor: Maybe<PaymentProcessor>;
        readonly accounts: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "Account";
                    readonly accountIdentifier: Maybe<string>;
                    readonly fdAccountId: Maybe<string>;
                    readonly chaseProfileId: Maybe<string>;
                    readonly paypal: Maybe<boolean>;
                    readonly paypalIdentifier: Maybe<string>;
                    readonly credit: Maybe<{
                        readonly __typename?: "CreditCard";
                        readonly alias: string;
                        readonly cardType: string;
                        readonly expiryYear: string;
                        readonly expiryMonth: string;
                        readonly panToken: Maybe<string>;
                    }>;
                    readonly prepaid: Maybe<{
                        readonly __typename?: "GiftCard";
                        readonly alias: string;
                        readonly currentBalance: Maybe<number>;
                        readonly cardNumber: string;
                        readonly expiryMonth: string;
                        readonly expiryYear: string;
                        readonly feFormattedCurrentBalance: Maybe<number>;
                        readonly shuffledCardNumber: string;
                    }>;
                }>
            >
        >;
    }>;
};

export type IPluDataQueryVariables = {
    storeId: Scalars["String"];
};

export type IPluDataQuery = {
    readonly __typename?: "Query";
    readonly pluData: Maybe<{
        readonly __typename?: "PluData";
        readonly plus: Maybe<string>;
        readonly deliveryPlus: Maybe<string>;
        readonly updatedAt: Maybe<string>;
    }>;
};

export type IPrepaidsReloadMutationVariables = {
    input: IPrepaidsReloadInput;
};

export type IPrepaidsReloadMutation = {
    readonly __typename?: "Mutation";
    readonly prepaidsReload: {
        readonly __typename?: "Reload";
        readonly currentBalance: number;
        readonly fdAccountId: string;
        readonly fdCorrelationId: Maybe<string>;
        readonly transactionId: string;
    };
};

export type IAddPrepaidCardMutationVariables = {
    input: IAddGiftAccountInput;
};

export type IAddPrepaidCardMutation = {
    readonly __typename?: "Mutation";
    readonly addGiftAccount: {
        readonly __typename?: "GiftAccount";
        readonly fdAccountId: string;
        readonly prepaid: {
            readonly __typename?: "GiftCard";
            readonly currentBalance: Maybe<number>;
        };
    };
};

export type IPrepaidTransactionCurrencyCodesQueryVariables = {
    cardNumber: Scalars["String"];
};

export type IPrepaidTransactionCurrencyCodesQuery = {
    readonly __typename?: "Query";
    readonly prepaidsTransactions: Maybe<{
        readonly __typename?: "TransactionListResponse";
        readonly transactions: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "PrepaidTransaction";
                    readonly currencyCode: {
                        readonly __typename?: "CurrencyCode";
                        readonly number: number;
                    };
                }>
            >
        >;
    }>;
};

export type IRequestRefundMutationVariables = {
    input: IUserRequestsRefundInput;
};

export type IRequestRefundMutation = {
    readonly __typename?: "Mutation";
    readonly userRequestsRefund: {
        readonly __typename?: "RefundRequestResponse";
        readonly refundRequestAmountCents: number;
        readonly requestDateTime: Maybe<string>;
    };
};

export type IRequestMyInfoMutation = {
    readonly __typename?: "Mutation";
    readonly requestMyInfo: Maybe<boolean>;
};

export type IGetRestaurantsQueryVariables = {
    input?: Maybe<IRestaurantsInput>;
};

export type IGetRestaurantsQuery = {
    readonly __typename?: "Query";
    readonly restaurants: Maybe<{
        readonly __typename?: "RestaurantsConnection";
        readonly totalCount: Maybe<number>;
        readonly pageInfo: {
            readonly __typename?: "PageInfo";
            readonly hasNextPage: boolean;
            readonly endCursor: Maybe<string>;
        };
        readonly nodes: ReadonlyArray<
            { readonly __typename?: "RestaurantNode" } & IRestaurantNodeFragment
        >;
    }>;
};

export type IDeliveryRestaurantQueryVariables = {
    dropoff: IDeliveryWaypointInput;
    searchRadius: Scalars["Float"];
    platform: Platform;
};

export type IDeliveryRestaurantQuery = {
    readonly __typename?: "Query";
    readonly deliveryRestaurant: {
        readonly __typename?: "DeliveryRestaurant";
        readonly storeStatus: DeliveryStoreStatus;
        readonly quote: Maybe<DeliveryStatus>;
        readonly nextEarliestOpen: Maybe<string>;
        readonly deliverySurchargeFeeCents: Maybe<number>;
        readonly quoteId: Maybe<string>;
        readonly restaurant: Maybe<
            { readonly __typename?: "RestaurantNode" } & IRestaurantNodeFragment
        >;
    };
};

export type IRevealLoyaltyRollUpTheRimTimelineEventRollMutationVariables = {
    referenceId: Scalars["String"];
    developmentPrize?: Maybe<Scalars["String"]>;
};

export type IRevealLoyaltyRollUpTheRimTimelineEventRollMutation = {
    readonly __typename?: "Mutation";
    readonly revealLoyaltyRollUpTheRimTimelineEventRoll: Maybe<{
        readonly __typename?: "LoyaltyRollUpTheRimTimelineEventRollResult";
        readonly id: string;
        readonly type: string;
        readonly code: Maybe<string>;
    }>;
};

export type IGetLoyaltyRollUpTheRimPrizesStatsQueryVariables = {
    eventId?: Maybe<Scalars["String"]>;
};

export type IGetLoyaltyRollUpTheRimPrizesStatsQuery = {
    readonly __typename?: "Query";
    readonly getLoyaltyRollUpTheRimPrizesStats: Maybe<{
        readonly __typename?: "LoyaltyRollUpTheRimPrizesStats";
        readonly total: Maybe<number>;
        readonly awarded: Maybe<number>;
        readonly details: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "LoyaltyRollUpTheRimPrizeStats";
                    readonly total: Maybe<number>;
                    readonly awarded: Maybe<number>;
                    readonly prizeId: Maybe<string>;
                }>
            >
        >;
    }>;
};

export type IGetLoyaltyRollUpTheRimTimelineEventSummaryQueryVariables = {
    eventId?: Maybe<Scalars["String"]>;
};

export type IGetLoyaltyRollUpTheRimTimelineEventSummaryQuery = {
    readonly __typename?: "Query";
    readonly getLoyaltyRollUpTheRimTimelineEventSummary: Maybe<{
        readonly __typename?: "LoyaltyRollUpTheRimTimelineEventSummaryList";
        readonly count: number;
        readonly resumeAfter: Maybe<string>;
        readonly events: ReadonlyArray<
            Maybe<{
                readonly __typename?: "LoyaltyRollUpTheRimTimelineEventSummaryEntry";
                readonly count: number;
                readonly eventId: string;
            }>
        >;
    }>;
};

export type IGetLoyaltyRollUpTheRimTimelineEventSharedRollTokensQuery = {
    readonly __typename?: "Query";
    readonly getLoyaltyRollUpTheRimTimelineEventSharedRollTokens: Maybe<{
        readonly __typename?: "LoyaltyRollUpTheRimTimelineEventSharedRollTokenList";
        readonly count: number;
        readonly tokens: ReadonlyArray<
            Maybe<{
                readonly __typename?: "LoyaltyRollUpTheRimTimelineEventSharedRollTokenEntry";
                readonly count: number;
                readonly token: string;
            }>
        >;
    }>;
};

export type IAcceptLoyaltyRollUpTheRimTimelineEventSharedRollsMutationVariables =
    {
        sharedRollsToken: Scalars["String"];
    };

export type IAcceptLoyaltyRollUpTheRimTimelineEventSharedRollsMutation = {
    readonly __typename?: "Mutation";
    readonly acceptLoyaltyRollUpTheRimTimelineEventSharedRolls: Maybe<{
        readonly __typename?: "LoyaltyRollUpTheRimTimelineEventAcceptSharedRollsList";
        readonly count: number;
        readonly rolls: ReadonlyArray<
            Maybe<{
                readonly __typename?: "LoyaltyRollUpTheRimTimelineEventAcceptSharedRollEntry";
                readonly barcode: string;
                readonly createdAt: string;
                readonly eventId: string;
                readonly referenceId: string;
            }>
        >;
    }>;
};

export type IClaimLoyaltyRollUpTheRimPrizeMutationVariables = {
    email: Scalars["String"];
    giftCardValueCents?: Maybe<Scalars["Int"]>;
    isMajorPrize: Scalars["Boolean"];
    isTimHortonsGiftCard: Scalars["Boolean"];
    language: Scalars["String"];
    name: Scalars["String"];
    referenceId: Scalars["String"];
};

export type IClaimLoyaltyRollUpTheRimPrizeMutation = {
    readonly __typename?: "Mutation";
    readonly claimLoyaltyRollUpTheRimPrize: Maybe<boolean>;
};

export type IShareLoyaltyRollUpTheRimTimelineEventRollsMutationVariables = {
    quantity: Scalars["Int"];
};

export type IShareLoyaltyRollUpTheRimTimelineEventRollsMutation = {
    readonly __typename?: "Mutation";
    readonly shareLoyaltyRollUpTheRimTimelineEventRolls: Maybe<{
        readonly __typename?: "LoyaltyRollUpTheRimTimelineEventShareRollResult";
        readonly token: string;
    }>;
};

export type IGetUniqueStoresQueryVariables = {
    orderStatuses?: Maybe<ReadonlyArray<RbiOrderStatus>>;
};

export type IGetUniqueStoresQuery = {
    readonly __typename?: "Query";
    readonly uniqueStores: {
        readonly __typename?: "OrderListResponse";
        readonly orders: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "Order";
                    readonly cart: {
                        readonly __typename?: "Cart";
                        readonly storeId: string;
                    };
                }>
            >
        >;
    };
};

export type IGetUserFavoritesRefsQueryVariables = {
    limit?: Maybe<Scalars["Int"]>;
    resumeAfter?: Maybe<Scalars["String"]>;
};

export type IGetUserFavoritesRefsQuery = {
    readonly __typename?: "Query";
    readonly userFavorites: {
        readonly __typename?: "FavoriteList";
        readonly count: Maybe<number>;
        readonly resumeAfter: Maybe<string>;
        readonly favorites: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "Favorite";
                    readonly ref: Maybe<string>;
                    readonly _id: Maybe<string>;
                }>
            >
        >;
    };
};

export type IGetUserFavoriteQueryVariables = {
    favoriteId: Scalars["String"];
};

export type IGetUserFavoriteQuery = {
    readonly __typename?: "Query";
    readonly userFavorite: {
        readonly __typename?: "Favorite";
    } & IFavoriteFragment;
};

export type IGetUserFavoritesQueryVariables = {
    limit?: Maybe<Scalars["Int"]>;
    resumeAfter?: Maybe<Scalars["String"]>;
};

export type IGetUserFavoritesQuery = {
    readonly __typename?: "Query";
    readonly userFavorites: {
        readonly __typename?: "FavoriteList";
        readonly count: Maybe<number>;
        readonly resumeAfter: Maybe<string>;
        readonly favorites: Maybe<
            ReadonlyArray<
                Maybe<{ readonly __typename?: "Favorite" } & IFavoriteFragment>
            >
        >;
    };
};

export type IGetUserReorderFavoritesQuery = {
    readonly __typename?: "Query";
    readonly userFavorites: {
        readonly __typename?: "FavoriteList";
        readonly count: Maybe<number>;
        readonly favorites: Maybe<
            ReadonlyArray<
                Maybe<
                    {
                        readonly __typename?: "Favorite";
                    } & IReorderFavoriteFragment
                >
            >
        >;
    };
};

export type ICreateFavoriteMutationVariables = {
    input: IFavoriteInput;
};

export type ICreateFavoriteMutation = {
    readonly __typename?: "Mutation";
    readonly createFavorite: {
        readonly __typename?: "Favorite";
    } & IFavoriteFragment;
};

export type IUpdateFavoriteMutationVariables = {
    favoriteId: Scalars["String"];
    input: IFavoriteInput;
};

export type IUpdateFavoriteMutation = {
    readonly __typename?: "Mutation";
    readonly updateFavorite: {
        readonly __typename?: "Favorite";
    } & IFavoriteFragment;
};

export type IDeleteFavoriteMutationVariables = {
    favoriteId: Scalars["String"];
};

export type IDeleteFavoriteMutation = {
    readonly __typename?: "Mutation";
    readonly deleteFavorite: {
        readonly __typename?: "Favorite";
    } & IFavoriteFragment;
};

export type IGetUserOrdersQueryVariables = {
    userId?: Maybe<Scalars["ID"]>;
    limit?: Maybe<Scalars["Int"]>;
    resumeAfter?: Maybe<Scalars["String"]>;
    orderStatuses?: Maybe<ReadonlyArray<RbiOrderStatus>>;
    createdAfter?: Maybe<Scalars["String"]>;
    shouldFilterByRegion?: Maybe<Scalars["Boolean"]>;
};

export type IGetUserOrdersQuery = {
    readonly __typename?: "Query";
    readonly userOrders: {
        readonly __typename?: "OrderListResponse";
        readonly count: number;
        readonly resumeAfter: Maybe<string>;
        readonly orders: Maybe<
            ReadonlyArray<
                Maybe<{ readonly __typename?: "Order" } & IUserOrderFragment>
            >
        >;
    };
};

export type IGetUserOrderQueryVariables = {
    id: Scalars["ID"];
};

export type IGetUserOrderQuery = {
    readonly __typename?: "Query";
    readonly order: Maybe<
        { readonly __typename?: "Order" } & IUserOrderFragment
    >;
};

export type IUpdateMeMutationVariables = {
    input: IUpdateUserDetailsInput;
};

export type IUpdateMeMutation = {
    readonly __typename?: "Mutation";
    readonly updateMe: {
        readonly __typename?: "User";
        readonly details: {
            readonly __typename?: "UserDetails";
        } & IUserDetailsFragment;
    };
};

export type ISignInJwtMutationVariables = {
    input: ISignInUserInput;
};

export type ISignInJwtMutation = {
    readonly __typename?: "Mutation";
    readonly signInJWT: Maybe<boolean>;
};

export type ISignUpMutationVariables = {
    input: ISignUpUserInput;
};

export type ISignUpMutation = {
    readonly __typename?: "Mutation";
    readonly signUp: Maybe<string>;
};

export type ICreateLoyaltyUserMutationVariables = {
    cognitoId: Scalars["String"];
};

export type ICreateLoyaltyUserMutation = {
    readonly __typename?: "Mutation";
    readonly createLoyaltyUser: {
        readonly __typename?: "User";
        readonly loyaltyId: Maybe<string>;
    };
};

export type IValidateAuthJwtMutationVariables = {
    input: IValidateAuthJwtInput;
};

export type IValidateAuthJwtMutation = {
    readonly __typename?: "Mutation";
    readonly validateAuthJwt: {
        readonly __typename?: "CognitoCredentials";
        readonly challengeCode: string;
        readonly sessionId: string;
    };
};

export type ICreateOtpMutationVariables = {
    input: ICreateOtpInput;
};

export type ICreateOtpMutation = {
    readonly __typename?: "Mutation";
    readonly createOTP: {
        readonly __typename?: "CreateOTP";
        readonly maxValidateAttempts: number;
        readonly ttl: number;
    };
};

export type IResendCurrentLoginOtpMutationVariables = {
    input: IResendOtpInput;
};

export type IResendCurrentLoginOtpMutation = {
    readonly __typename?: "Mutation";
    readonly resendCurrentLoginOTP: {
        readonly __typename?: "CreateOTP";
        readonly maxValidateAttempts: number;
        readonly ttl: number;
    };
};

export type IValidateOtpMutationVariables = {
    input: IExchangeOtpCodeForCredentialsInput;
};

export type IValidateOtpMutation = {
    readonly __typename?: "Mutation";
    readonly exchangeOTPCodeForCognitoCredentials: {
        readonly __typename?: "CognitoCredentials";
        readonly challengeCode: string;
        readonly sessionId: string;
    };
};

export type ISignUpCompleteQueryVariables = {
    jwt: Scalars["String"];
};

export type ISignUpCompleteQuery = {
    readonly __typename?: "Query";
    readonly signUpComplete: Maybe<boolean>;
};

export type IResendVerificationEmailMutationVariables = {
    input: IResendVerificationEmailInput;
};

export type IResendVerificationEmailMutation = {
    readonly __typename?: "Mutation";
    readonly resendVerificationEmail: Maybe<boolean>;
};

export type ICreateLoginForVendorMutationVariables = {
    vendor: Scalars["String"];
};

export type ICreateLoginForVendorMutation = {
    readonly __typename?: "Mutation";
    readonly createLoginForVendor: Maybe<string>;
};

export type IUserGeoQuery = {
    readonly __typename?: "Query";
    readonly userGeo: {
        readonly __typename?: "UserGeo";
        readonly country: Maybe<string>;
    };
};

export type IUserPhoneFromBrazeQueryVariables = {
    brazeId: Scalars["String"];
};

export type IUserPhoneFromBrazeQuery = {
    readonly __typename?: "Query";
    readonly userPhoneFromBraze: Maybe<{
        readonly __typename?: "BrazeUserPhone";
        readonly phone: Maybe<string>;
    }>;
};

export type IGetLoyaltyApplePassQueryVariables = {
    cardId: Scalars["String"];
};

export type IGetLoyaltyApplePassQuery = {
    readonly __typename?: "Query";
    readonly getLoyaltyCardApplePass: Maybe<{
        readonly __typename?: "LoyaltyCardApplePass";
        readonly encodedPass: string;
    }>;
};

export type ICreateWllSessionMutation = {
    readonly __typename?: "Mutation";
    readonly createWllSession: Maybe<{
        readonly __typename?: "WllSession";
        readonly session: string;
        readonly wllUrl: string;
        readonly webUrl: string;
    }>;
};

export type IPrepaidsMergeMutationVariables = {
    input: IPrepaidsMergeInput;
};

export type IPrepaidsMergeMutation = {
    readonly __typename?: "Mutation";
    readonly prepaidsMerge: {
        readonly __typename?: "Merge";
        readonly currentBalance: number;
        readonly fdAccountId: Maybe<string>;
    };
};

export type IOrderFragment = {
    readonly __typename?: "Order";
    readonly createdAt: string;
    readonly posOrderId: Maybe<string>;
    readonly rbiOrderId: string;
    readonly status: RbiOrderStatus;
    readonly fireOrderIn: Maybe<number>;
    readonly orderNumberFormatted: Maybe<string>;
    readonly _id: string;
    readonly cart: {
        readonly __typename?: "Cart";
        readonly customerName: string;
        readonly cartVersion: Maybe<number>;
        readonly posVendor: PosVendor;
        readonly serviceMode: ServiceMode;
        readonly subTotalCents: Maybe<number>;
        readonly taxCents: Maybe<number>;
        readonly ticketNumber: Maybe<string>;
        readonly totalCents: Maybe<number>;
        readonly wasLoyaltyEarned: Maybe<boolean>;
        readonly vatNumber: Maybe<string>;
        readonly appliedOffers: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "CartAppliedOffer";
                    readonly sanityId: Maybe<string>;
                }>
            >
        >;
        readonly cartEntries: Maybe<
            ReadonlyArray<
                {
                    readonly __typename?: "CartEntries";
                    readonly children: Maybe<
                        ReadonlyArray<
                            Maybe<
                                {
                                    readonly __typename?: "CartEntries";
                                    readonly children: Maybe<
                                        ReadonlyArray<
                                            Maybe<
                                                {
                                                    readonly __typename?: "CartEntries";
                                                    readonly children: Maybe<
                                                        ReadonlyArray<
                                                            Maybe<
                                                                {
                                                                    readonly __typename?: "CartEntries";
                                                                    readonly children: Maybe<
                                                                        ReadonlyArray<
                                                                            Maybe<
                                                                                {
                                                                                    readonly __typename?: "CartEntries";
                                                                                    readonly children: Maybe<
                                                                                        ReadonlyArray<
                                                                                            Maybe<
                                                                                                {
                                                                                                    readonly __typename?: "CartEntries";
                                                                                                } & ICartEntryFragment
                                                                                            >
                                                                                        >
                                                                                    >;
                                                                                } & ICartEntryFragment
                                                                            >
                                                                        >
                                                                    >;
                                                                } & ICartEntryFragment
                                                            >
                                                        >
                                                    >;
                                                } & ICartEntryFragment
                                            >
                                        >
                                    >;
                                } & ICartEntryFragment
                            >
                        >
                    >;
                } & ICartEntryFragment
            >
        >;
        readonly discounts: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "Discount";
                    readonly name: Maybe<DiscountTypes>;
                    readonly value: Maybe<number>;
                }>
            >
        >;
        readonly donations: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "Donation";
                    readonly id: Maybe<string>;
                    readonly name: Maybe<string>;
                    readonly totalCents: Maybe<number>;
                }>
            >
        >;
        readonly fees: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "Fees";
                    readonly name: Maybe<string>;
                    readonly priceCents: Maybe<number>;
                    readonly quantity: Maybe<number>;
                    readonly totalCents: Maybe<number>;
                }>
            >
        >;
        readonly offersFeedback: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "CouponUserOffersFeedbackEntry";
                    readonly couponId: string;
                    readonly cartEntry: Maybe<{
                        readonly __typename?: "CartEntries";
                        readonly lineId: string;
                    }>;
                    readonly redemptionEligibility: {
                        readonly __typename?: "CouponRedemptionEligibility";
                        readonly isRedeemable: boolean;
                        readonly isValid: boolean;
                        readonly evaluationFeedback: ReadonlyArray<
                            Maybe<{
                                readonly __typename?: "CouponEvaluationFeedback";
                                readonly code: string;
                                readonly condition: boolean;
                                readonly message: string;
                                readonly redeemableForSeconds: Maybe<number>;
                                readonly redeemableInSeconds: Maybe<number>;
                                readonly ruleSetType: string;
                            }>
                        >;
                    };
                }>
            >
        >;
        readonly payment: Maybe<{
            readonly __typename?: "Payment";
            readonly cardType: Maybe<string>;
            readonly ccLast4: Maybe<string>;
            readonly panToken: Maybe<string>;
            readonly paymentType: Maybe<CartPaymentType>;
        }>;
        readonly rewardsApplied: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "CartAppliedReward";
                    readonly cartId: string;
                    readonly rewardId: string;
                    readonly timesApplied: number;
                }>
            >
        >;
        readonly storeAddress: {
            readonly __typename?: "StoreAddress";
            readonly addressLine1: string;
            readonly addressLine2: Maybe<string>;
            readonly city: string;
            readonly state: string;
            readonly zip: string;
        };
        readonly storeDetails: Maybe<{
            readonly __typename?: "StoreDetails";
            readonly latitude: Maybe<number>;
            readonly longitude: Maybe<number>;
            readonly storeNumber: Maybe<string>;
        }>;
        readonly unavailableCartEntries: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "UnavailableCartEntry";
                    readonly lineId: Maybe<string>;
                    readonly sanityId: string;
                }>
            >
        >;
    };
    readonly delivery: Maybe<{
        readonly __typename?: "Delivery";
        readonly feeCents: number;
        readonly feeDiscountCents: Maybe<number>;
        readonly instructions: Maybe<string>;
        readonly status: DeliveryStatus;
        readonly tipCents: Maybe<number>;
        readonly serviceFeeCents: Maybe<number>;
        readonly smallCartFeeCents: Maybe<number>;
        readonly geographicalFeeCents: Maybe<number>;
        readonly quotedFeeCents: Maybe<number>;
        readonly baseDeliveryFeeCents: Maybe<number>;
        readonly deliverySurchargeFeeCents: Maybe<number>;
        readonly pickup: {
            readonly __typename?: "DeliveryWaypoint";
            readonly latitude: Maybe<number>;
            readonly longitude: Maybe<number>;
        };
        readonly dropoff: {
            readonly __typename?: "DeliveryWaypoint";
            readonly arrivalTime: Maybe<string>;
            readonly beforeTime: Maybe<string>;
            readonly addressLine1: string;
            readonly addressLine2: Maybe<string>;
            readonly city: string;
            readonly state: Maybe<string>;
            readonly zip: Maybe<string>;
            readonly latitude: Maybe<number>;
            readonly longitude: Maybe<number>;
            readonly phoneNumber: string;
        };
        readonly driver: Maybe<{
            readonly __typename?: "DeliveryDriver";
            readonly name: Maybe<string>;
            readonly profileImageUrl: Maybe<string>;
            readonly phoneNumber: Maybe<string>;
        }>;
    }>;
    readonly loyaltyTransaction: Maybe<{
        readonly __typename?: "LoyaltyTransaction";
        readonly id: string;
        readonly pointsEarned: number;
        readonly bonusPointsEarned: number;
        readonly pointsUsed: number;
        readonly pointsBalance: number;
        readonly rewardsUsed: number;
    }>;
};

export type IListCouponsQueryVariables = {
    expiresAfter?: Maybe<Scalars["String"]>;
    expiresBefore?: Maybe<Scalars["String"]>;
    includeRedeemed?: Maybe<Scalars["Boolean"]>;
    limit?: Maybe<Scalars["Int"]>;
    resumeAfter?: Maybe<Scalars["String"]>;
    sortAscending?: Maybe<Scalars["Boolean"]>;
};

export type IListCouponsQuery = {
    readonly __typename?: "Query";
    readonly listCoupons: {
        readonly __typename?: "CouponListResponse";
        readonly count: number;
        readonly resumeAfter: Maybe<string>;
        readonly coupons: ReadonlyArray<
            Maybe<{
                readonly __typename?: "Coupon";
                readonly couponId: string;
                readonly createdAt: string;
                readonly expiresOn: Maybe<string>;
                readonly redeemedOn: Maybe<string>;
                readonly updatedAt: string;
                readonly userId: string;
            }>
        >;
    };
};

export type IIsOfferRedeemableQueryVariables = {
    couponId: Scalars["ID"];
    cart?: Maybe<IPriceOrderInput>;
    rbiOrderId?: Maybe<Scalars["ID"]>;
    redeemedOn: Scalars["String"];
    ruleSet?: Maybe<Scalars["String"]>;
};

export type IIsOfferRedeemableQuery = {
    readonly __typename?: "Query";
    readonly isCouponRedeemable: {
        readonly __typename?: "CouponRedemptionEligibility";
        readonly isRedeemable: boolean;
        readonly evaluationFeedback: ReadonlyArray<
            Maybe<{
                readonly __typename?: "CouponEvaluationFeedback";
                readonly code: string;
                readonly condition: boolean;
                readonly message: string;
                readonly ruleSetType: string;
            }>
        >;
    };
};

export type IActivateLoyaltyOfferMutationVariables = {
    tokenId: Scalars["String"];
};

export type IActivateLoyaltyOfferMutation = {
    readonly __typename?: "Mutation";
    readonly activateLoyaltyOffer: Maybe<boolean>;
};

export type IPriceOrderMutationVariables = {
    input: IPriceOrderInput;
    delivery?: Maybe<IPriceDeliveryInput>;
};

export type IPriceOrderMutation = {
    readonly __typename?: "Mutation";
    readonly priceOrder: {
        readonly __typename?: "Order";
        readonly rbiOrderId: string;
        readonly status: RbiOrderStatus;
    };
};

export type IGetOrderQueryVariables = {
    rbiOrderId: Scalars["ID"];
};

export type IGetOrderQuery = {
    readonly __typename?: "Query";
    readonly order: Maybe<{ readonly __typename?: "Order" } & IOrderFragment>;
};

export type IGetStoreOrderQueryVariables = {
    storeOrderJwt: Scalars["String"];
};

export type IGetStoreOrderQuery = {
    readonly __typename?: "Query";
    readonly cateringOrder: Maybe<
        {
            readonly __typename?: "Order";
            readonly catering: Maybe<{
                readonly __typename?: "Catering";
                readonly pickupTime: string;
                readonly notes: Maybe<string>;
                readonly declineReason: Maybe<CateringDeclineReasons>;
            }>;
            readonly cart: {
                readonly __typename?: "Cart";
                readonly userDetails: Maybe<{
                    readonly __typename?: "UserDetails";
                    readonly phoneNumber: Maybe<string>;
                    readonly email: Maybe<string>;
                }>;
            };
        } & IOrderFragment
    >;
};

export type IConfirmCateringOrderMutationVariables = {
    input: IConfirmCateringOrderInput;
};

export type IConfirmCateringOrderMutation = {
    readonly __typename?: "Mutation";
    readonly confirmCateringOrder: {
        readonly __typename?: "Order";
        readonly status: RbiOrderStatus;
    };
};

export type ICommitOrderMutationVariables = {
    input: ICommitOrderInput;
    delivery?: Maybe<ICommitDeliveryInput>;
    skipCoolingPeriod?: Maybe<Scalars["Boolean"]>;
};

export type ICommitOrderMutation = {
    readonly __typename?: "Mutation";
    readonly commitOrder: {
        readonly __typename?: "Order";
        readonly rbiOrderId: string;
        readonly status: RbiOrderStatus;
    };
};

export type IDeliveryOrderStatusQueryVariables = {
    rbiOrderId: Scalars["ID"];
};

export type IDeliveryOrderStatusQuery = {
    readonly __typename?: "Query";
    readonly order: Maybe<{
        readonly __typename?: "Order";
        readonly delivery: Maybe<{
            readonly __typename?: "Delivery";
            readonly status: DeliveryStatus;
            readonly shareUuid: Maybe<string>;
            readonly dropoff: {
                readonly __typename?: "DeliveryWaypoint";
                readonly arrivalTime: Maybe<string>;
                readonly beforeTime: Maybe<string>;
            };
            readonly driver: Maybe<{
                readonly __typename?: "DeliveryDriver";
                readonly name: Maybe<string>;
                readonly phoneNumber: Maybe<string>;
                readonly profileImageUrl: Maybe<string>;
            }>;
            readonly task: Maybe<{
                readonly __typename?: "DeliveryTaskDetails";
                readonly uuid: Maybe<string>;
            }>;
        }>;
    }>;
};

export type IUpdateOrderMutationVariables = {
    input: IUpdateOrderInput;
};

export type IUpdateOrderMutation = {
    readonly __typename?: "Mutation";
    readonly updateOrder: {
        readonly __typename?: "Order";
        readonly rbiOrderId: string;
        readonly fireOrderIn: Maybe<number>;
    };
};

export type IGenerateVrPaymentCheckoutLinkMutationVariables = {
    rbiOrderId: Scalars["String"];
};

export type IGenerateVrPaymentCheckoutLinkMutation = {
    readonly __typename?: "Mutation";
    readonly generateVrPaymentCheckoutLink: {
        readonly __typename?: "VrPaymentCheckoutLink";
        readonly link: string;
    };
};

export type IGenerateVrPaymentVaultLinkMutationVariables = {
    input: IGenerateVrPaymentVaultLinkInput;
};

export type IGenerateVrPaymentVaultLinkMutation = {
    readonly __typename?: "Mutation";
    readonly generateVrPaymentVaultLink: {
        readonly __typename?: "VrPaymentVaultLink";
        readonly data: string;
        readonly link: string;
    };
};

export type IGenerateVrPaymentPayPalFastLinkMutationVariables = {
    input: IGenerateVrPaymentPayPalFastLinkInput;
};

export type IGenerateVrPaymentPayPalFastLinkMutation = {
    readonly __typename?: "Mutation";
    readonly generateVrPaymentPayPalFastLink: {
        readonly __typename?: "VrPaymentPayPalFastLink";
        readonly link: string;
    };
};

export type IValidateCommitOrderMutationVariables = {
    input: IValidateCommitOrderInput;
};

export type IValidateCommitOrderMutation = {
    readonly __typename?: "Mutation";
    readonly validateCommitOrder: Maybe<{
        readonly __typename?: "Order";
        readonly rbiOrderId: string;
        readonly status: RbiOrderStatus;
    }>;
};

export type IPlaceCateringOrderMutationVariables = {
    input: IPlaceCateringOrderInput;
};

export type IPlaceCateringOrderMutation = {
    readonly __typename?: "Mutation";
    readonly placeCateringOrder: {
        readonly __typename?: "Order";
        readonly rbiOrderId: string;
        readonly status: RbiOrderStatus;
    };
};

export type IGetPrepaidsBalanceMutationVariables = {
    cardNumber: Scalars["String"];
    feCountryCode: IsoCountryCode;
};

export type IGetPrepaidsBalanceMutation = {
    readonly __typename?: "Mutation";
    readonly prepaidsBalance: {
        readonly __typename?: "Balance";
        readonly currentBalance: number;
    };
};

export type IMergePrepaidsMutationVariables = {
    input: IPrepaidsMergeInput;
};

export type IMergePrepaidsMutation = {
    readonly __typename?: "Mutation";
    readonly prepaidsMerge: {
        readonly __typename?: "Merge";
        readonly currentBalance: number;
    };
};

export type IDetailsFragment = {
    readonly __typename?: "UserDetails";
    readonly name: Maybe<string>;
    readonly dob: Maybe<string>;
    readonly phoneNumber: Maybe<string>;
    readonly email: Maybe<string>;
    readonly emailVerified: Maybe<boolean>;
    readonly promotionalEmails: Maybe<boolean>;
    readonly isoCountryCode: Maybe<IsoCountryCode>;
    readonly zipcode: Maybe<string>;
    readonly defaultAccountIdentifier: Maybe<string>;
    readonly defaultFdAccountId: Maybe<string>;
    readonly defaultPaymentAccountId: Maybe<string>;
    readonly defaultScanAndPayAccountIdentifier: Maybe<string>;
    readonly defaultReloadAmt: Maybe<number>;
    readonly autoReloadEnabled: Maybe<boolean>;
    readonly autoReloadThreshold: Maybe<number>;
    readonly loyaltyTier: Maybe<string>;
    readonly rutrPassedSkillsTestTimestamp: Maybe<string>;
    readonly rutrFailedSkillsTestTimestamp: Maybe<string>;
    readonly deliveryAddresses: Maybe<
        ReadonlyArray<
            Maybe<{
                readonly __typename?: "DeliveryAddress";
                readonly addressLine1: string;
                readonly addressLine2: Maybe<string>;
                readonly city: string;
                readonly country: Maybe<IsoCountryCode>;
                readonly latitude: Maybe<number>;
                readonly longitude: Maybe<number>;
                readonly phoneNumber: string;
                readonly route: Maybe<string>;
                readonly state: Maybe<string>;
                readonly streetNumber: Maybe<string>;
                readonly zip: Maybe<string>;
            }>
        >
    >;
    readonly communicationPreferences: Maybe<
        ReadonlyArray<
            Maybe<{
                readonly __typename?: "CommunicationPreference";
                readonly id: Maybe<string>;
                readonly value: Maybe<string>;
            }>
        >
    >;
    readonly favoriteStores: Maybe<
        ReadonlyArray<
            Maybe<{
                readonly __typename?: "FavoriteStore";
                readonly storeId: Maybe<string>;
                readonly storeNumber: Maybe<string>;
            }>
        >
    >;
};

export type IGetMeQueryVariables = {
    numUniquePurchasedItems?: Maybe<Scalars["Int"]>;
    customInput?: Maybe<IMeInput>;
};

export type IGetMeQuery = {
    readonly __typename?: "Query";
    readonly me: {
        readonly __typename?: "User";
        readonly thLegacyCognitoId: Maybe<string>;
        readonly cognitoId: string;
        readonly loyaltyId: Maybe<string>;
        readonly details: {
            readonly __typename?: "UserDetails";
        } & IDetailsFragment;
        readonly uniquePurchasedItems: Maybe<
            ReadonlyArray<
                Maybe<{
                    readonly __typename?: "CartEntries";
                    readonly name: Maybe<string>;
                    readonly image: Maybe<string>;
                    readonly isExtra: Maybe<boolean>;
                    readonly isDonation: Maybe<boolean>;
                    readonly lineId: string;
                    readonly sanityId: string;
                    readonly quantity: number;
                    readonly type: CartEntryType;
                    readonly price: Maybe<number>;
                    readonly url: Maybe<string>;
                    readonly pickerSelections: Maybe<string>;
                    readonly isInMenu: Maybe<boolean>;
                    readonly vendorConfigs: Maybe<
                        {
                            readonly __typename?: "VendorConfigs";
                        } & IVendorConfigsFragment
                    >;
                    readonly children: Maybe<
                        ReadonlyArray<
                            Maybe<
                                {
                                    readonly __typename?: "CartEntries";
                                    readonly isInMenu: Maybe<boolean>;
                                    readonly children: Maybe<
                                        ReadonlyArray<
                                            Maybe<
                                                {
                                                    readonly __typename?: "CartEntries";
                                                    readonly isInMenu: Maybe<boolean>;
                                                    readonly children: Maybe<
                                                        ReadonlyArray<
                                                            Maybe<
                                                                {
                                                                    readonly __typename?: "CartEntries";
                                                                    readonly isInMenu: Maybe<boolean>;
                                                                    readonly children: Maybe<
                                                                        ReadonlyArray<
                                                                            Maybe<
                                                                                {
                                                                                    readonly __typename?: "CartEntries";
                                                                                    readonly isInMenu: Maybe<boolean>;
                                                                                    readonly children: Maybe<
                                                                                        ReadonlyArray<
                                                                                            Maybe<
                                                                                                {
                                                                                                    readonly __typename?: "CartEntries";
                                                                                                    readonly isInMenu: Maybe<boolean>;
                                                                                                    readonly children: Maybe<
                                                                                                        ReadonlyArray<
                                                                                                            Maybe<
                                                                                                                {
                                                                                                                    readonly __typename?: "CartEntries";
                                                                                                                    readonly isInMenu: Maybe<boolean>;
                                                                                                                } & ICartEntryFragment
                                                                                                            >
                                                                                                        >
                                                                                                    >;
                                                                                                } & ICartEntryFragment
                                                                                            >
                                                                                        >
                                                                                    >;
                                                                                } & ICartEntryFragment
                                                                            >
                                                                        >
                                                                    >;
                                                                } & ICartEntryFragment
                                                            >
                                                        >
                                                    >;
                                                } & ICartEntryFragment
                                            >
                                        >
                                    >;
                                } & ICartEntryFragment
                            >
                        >
                    >;
                }>
            >
        >;
    };
};
