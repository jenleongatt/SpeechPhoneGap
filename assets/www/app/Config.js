/**
 * Sample App Configuration 
 * @class SampleApp.Config
 * @singleton
 */
Ext.define('SampleApp.Config', {
    singleton: true,


    /**
     * apiBasePath is used as the root path to make the SenchProvider api calls
     * so this path can be blank, relative, or absolute.
     */
    apiBasePath   : '/att',

    /**
     * url of where to get the json data relative to where the app is installed
     */
    imageDataUri      : 'assets/data/gallery.json',

    /**
     * gallery images folder, relative to where the app is installed
     */
    galleryImagesFolder    : 'assets/data/gallery/',

    /**
     * coupon folder, relative to where the app is installed
     */
    couponImagesBaseUri   : 'assets/data/coupons/',



    /**
     * short code or Registration ID used on SMS sample app to receive messages from on the first button
     */
    shortCode         : '',
    
    /**
     * short code or Registration ID used on SMS sample app to receive messages from on the second button
     */
    anotherShortCode  : '',
    
    
    
    defaultPhoneNbr   : 4258028620,
    headerCount       : 5,
    alertTitle        : 'Message',
    errorTitle        : 'ERROR',
    successTitle      : 'SUCCESS',
    invalidPhoneMsg   : 'Phone number is not valid.  Please re-enter. <br/>Example: 14258028620, 425-802-8620, 4258028620',
    defaultMessage    : 'Simple message to myself.',
    /**
     * The message to be displayed as default in the WAP Push Sample app.
     */
    defaultWapMessage : 'This is a sample WAP Push message.',
    /**
     * URL to be sent in the WAP Push message. This is the default value for WAP Push Sample App. 
     */
    defaultWapUrl     : 'http://developer.att.com',
    maxTotalFileSize  : 600 * 1024 // 600K
});