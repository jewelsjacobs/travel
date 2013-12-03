/**
 RPC expedia endpoints
 @module expedia
 @class expediaApi

 @toc
 1. rpcGeoSearch
 2. rpcHotelAcceptedPayments
 3. rpcHotelAvailability
 4. rpcHotelInfo
 5. rpcHotelList
 6. rpcHotelRoomImages
 7. rpcPing
 8. rpcReservationBook
 9. rpcReservationCancel
 10. rpcReservationGet
 */

'use strict';

var expedia = require('expedia');
var lodash = require('lodash');
var inherits = require('util').inherits;

var dependency =require('../../../dependency.js');
var pathParts =dependency.buildPaths(__dirname, {});

// var Base = require('./base');
// var Base = require('../../../routes/api/base.js');		//can't pass this in since it's used with inherits (which has to be outside the function definition??)
var Base =require(pathParts.routes+'api/base.js');

var ExpediaMod = require(pathParts.controllers+'expedia/expedia.js');

var sampleUserReturn = {
    _id: "objectid",
    email: "string",
    first_name: "string",
    last_name: "string"
};

var defaults = {
    group: 'expedia',
    info: 'Expedia API',
    namespace: 'Expedia'
};

// var self;
var db;

module.exports = ExpediaApi;

/**
 @param {Object} options
 @param {Object} db
 // @param {Object} Base
 // @param {Object} expediaMod
 */
function ExpediaApi(options){
    this.opts = lodash.merge({}, defaults, options||{});
    // Base =this.opts.Base;
    Base.call(this, this.opts);

    db =this.opts.db;
    // this.expediaMod = this.opts.expediaMod;
    // self =this;
}

inherits(ExpediaApi, Base);

ExpediaApi.prototype.getRpcMethods = function(){
    return {
        search: this.rpcGeoSearch(),
        getHotelAcceptedPayments: this.rpcHotelAcceptedPayments(),
        getHotelAvailability: this.rpcHotelAvailability(),
        getHotelInfo: this.rpcHotelInfo(),
        getHotels: this.rpcHotelList(),
        getRoomImages: this.rpcHotelRoomImages(),
        ping: this.rpcPing(),
        bookReservation: this.rpcReservationBook(),
        cancelReservation: this.rpcReservationCancel(),
        getReservation: this.rpcReservationGet()
    };
};

/**
 Returns RPC schema object for Expedia.search
 @toc 1.
 @method rpcGeoSearch
 **/
ExpediaApi.prototype.rpcGeoSearch = function(){
    var self = this;

    return {
        info: 'Hotel Search',
        params: {
            // data:  {
            email: { required: true, type: 'string', info: "Login email" },
            password: { required: true, type: 'string', info: "Login password" }
            // }
        },
        returns: {
            user: sampleUserReturn
        },
        /**
         Logs in user
         @method action
         @param {Object} params
         @param {Object} data new user params (detailed above)
         @param {Object} out callback object which provides `win` and `fail` functions for handling `success` and `fail` callbacks
         @param {Function} win Success callback
         @param {Function} fail Fail callback
         **/
        action: function(params, out) {
            var promise =ExpediaMod.login(db, params, {});
            promise.then(
                function(ret1)
                {
                    ret1.user =UserMod.readFilter(ret1.user, {type:'login'});		//only return certain fields (i.e strip out password)

                    //@example: var fields ={'tribe': {'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1}, 'follow':{'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1} };
                    // var fields ={};
                    var fields ={ 'follow':{'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1} };
                    var fill_promise = UserMod.fillInfo(db, {'user': ret1.user, 'fields': fields }, {});
                    fill_promise.then(
                        function(ret2)
                        {
                            ret1.user = ret2.user;
                            out.win(ret1);
                        },
                        function(err)
                        {
                            self.handleError(out, err, {});
                        }
                    );
                },
                function(err)
                {
                    self.handleError(out, err, {});
                }
            );
        }
    };
};

/**
 Returns RPC schema object for Expedia.getHotelAcceptedPayments
 @toc 2.
 @method rpcHotelAcceptedPayments
 **/
ExpediaApi.prototype.rpcHotelAcceptedPayments = function(){
    var self = this;

    return {
        info: 'Get Hotel Accepted Payments',
        params: {
            // data: {
            user_id: { required: true, type: 'string', info: "Id of user to logout" }
            // }
        },
        returns: {
            logout: true
        },
        /**
         Logs out user
         @method action
         @param {Object} params
         @param {Object} data new user params (detailed above)
         @param {Object} out callback object which provides `win` and `fail` functions for handling `success` and `fail` callbacks
         @param {Function} win Success callback
         @param {Function} fail Fail callback
         **/
        action: function(params, out){
            var promise =ExpediaMod.logout(db, params, {});
            promise.then(function(ret1) {
                out.win(ret1);
            }, function(err) {
                self.handleError(out, err, {});
            });
        }
    };
};

/**
 Returns RPC schema object for Expedia.getHotelAvailability
 @toc 3.
 @method rpcHotelAvailability
 **/
ExpediaApi.prototype.rpcHotelAvailability = function(){
    var self = this;

    return {
        info: 'Get Hotel Availability',
        params: {
            // data: {
            email:		{ required: true, type: 'string', info: "User email (must be unique)" },
            first_name:	{ required: true, type: 'string', info: "User first name" },
            last_name:	{ required: true, type: 'string', info: "User last name" },
            password:	{ required: true, type: 'string', info: "User password" }
            // }
        },
        returns: {
            user: sampleUserReturn
        },
        /**
         Creates a user login account and logs user in if successful
         @method action
         @param {Object} params
         @param {Object} data new user params (detailed above)
         @param {Object} out callback object which provides `win` and `fail` functions for handling `success` and `fail` callbacks
         @param {Function} win Success callback
         @param {Function} fail Fail callback
         **/
        action: function(params, out) {
            var promise =ExpediaMod.create(db, params, {});
            promise.then(function(ret1) {
                ret1.user =UserMod.readFilter(ret1.user, {type:'login'});		//only return certain fields (i.e strip out password)

                //@example: var fields ={'tribe': {'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1}, 'follow':{'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1} };
                // var fields ={};
                var fields ={ 'follow':{'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1} };
                var fill_promise = UserMod.fillInfo(db, {'user': ret1.user, 'fields': fields }, {});
                fill_promise.then(
                    function(ret2)
                    {
                        ret1.user = ret2.user;
                        out.win(ret1);
                    },
                    function(err)
                    {
                        self.handleError(out, err, {});
                    }
                );
            }, function(err) {
                // self.handleError(out.fail);
                self.handleError(out, err, {});
            });
        }
    };
};

/**
 Returns RPC schema object for Expedia.getHotelInfo
 @toc 4.
 @method rpcHotelInfo
 **/
ExpediaApi.prototype.rpcHotelInfo = function(){
    var self = this;

    return {
        info: 'Get logged in user object',
        params: {
            // data: {
            user_id: { required: true, type: 'string', info: "Id of user to check session for" },
            sess_id: { required: true, type: 'string', info: "Id of user session" }
            // }
        },
        returns: {
            user: sampleUserReturn
        },
        /**
         Get logged in user object
         @method method
         @method action
         @param {Object} params
         @param {Object} data new user params (detailed above)
         @param {Object} out callback object which provides `win` and `fail` functions for handling `success` and `fail` callbacks
         @param {Function} win Success callback
         @param {Function} fail Fail callback
         **/
        action: function(params, out){
            var promise =ExpediaMod.checkLogin(db, params, {});
            promise.then(function(ret1) {
                ret1.user =UserMod.readFilter(ret1.user, {type:'public'});		//only return certain fields (i.e strip out password)

                //@example: var fields ={'tribe': {'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1}, 'follow':{'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1} };
                // var fields ={};
                var fields ={ 'follow':{'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1} };
                var fill_promise = UserMod.fillInfo(db, {'user': ret1.user, 'fields': fields }, {});
                fill_promise.then(
                    function(ret2)
                    {
                        ret1.user = ret2.user;
                        out.win(ret1);
                    },
                    function(err)
                    {
                        self.handleError(out, err, {});
                    }
                );
            }, function(err) {
                self.handleError(out, err, {});
            });
        }
    };
};

/**
 Returns RPC schema object for Expedia.getHotels
 @toc 5.
 @method rpcHotelList
 **/
ExpediaApi.prototype.rpcHotelList = function(){
    var self = this;

    return {
        info: 'Handle a password reset request. Sets user.reset_key and sends a reset email.',
        params: {
            // data: {
            email: { required: true, type: 'string', info: "Email of user requesting a reset" }
            // }
        },
        returns: {
            reset: true
        },
        /**
         Generate and send a password reset key when auser forgots password
         @method method
         @param {Object} params
         @param {Object} data new user params (detailed above)
         @param {Object} out callback object which provides `win` and `fail` functions for handling `success` and `fail` callbacks
         @param {Function} win Success callback
         @param {Function} fail Fail callback
         **/
        action: function(params, out) {
            var promise =ExpediaMod.forgotPassword(db, params, {});
            promise.then(function(ret1) {
                out.win(ret1);
            }, function(err) {
                self.handleError(out, err, {});
            });
        }
    };
};

/**
 Returns RPC schema object for Expedia.getRoomImages
 @toc 6.
 @method rpcHotelRoomImages
 **/
ExpediaApi.prototype.rpcHotelRoomImages = function(){
    var self = this;

    return {
        info: 'Reset user password provided the email and reset key match.',
        params: {
            // data: {
            email: { required: true, type: 'string', info: "Email of user" },
            password: { required: true, type: 'string', info: "New password" },
            reset_key: { required: true, type: 'string', info: "Reset key" }
            // }
        },
        returns: {
            user: sampleUserReturn
        },
        /**
         Reset user password provided the email and reset key match in the database
         @method action
         @param {Object} params
         @param {Object} data new user params (detailed above)
         @param {Object} out callback object which provides `win` and `fail` functions for handling `success` and `fail` callbacks
         @param {Function} win Success callback
         @param {Function} fail Fail callback
         **/
        action: function(params, out){
            var promise =ExpediaMod.resetPassword(db, params, {});
            promise.then(function(ret1) {
                ret1.user =UserMod.readFilter(ret1.user, {type:'login'});		//only return certain fields (i.e strip out password)
                out.win(ret1);
            }, function(err) {
                self.handleError(out, err, {});
            });
        }
    };
};

/**
 Returns RPC schema object for Expedia.ping
 @toc 7.
 @method rpcChangePassword
 **/
ExpediaApi.prototype.rpcPing = function(){
    var self = this;

    return {
        info: 'Change user password provided the old password is valid.',
        params: {
            user_id: { required: true, type: 'string', info: "Identify user to change password for" },
            current_password: { required: true, type: 'string', info: "The user's current password (to authenticate)" },
            new_password: { required: true, type: 'string', info: "New password to set" }
        },
        returns: {
            user: sampleUserReturn
        },
        /**
         @method action
         @param {Object} params
         @param {Object} data new user params (detailed above)
         @param {Object} out callback object which provides `win` and `fail` functions for handling `success` and `fail` callbacks
         @param {Function} win Success callback
         @param {Function} fail Fail callback
         **/
        action: function(params, out){
            var promise =ExpediaMod.changePassword(db, params, {});
            promise.then(function(ret1) {
                ret1.user =UserMod.readFilter(ret1.user, {type:'public'});		//only return certain fields (i.e strip out password)
                out.win(ret1);
            }, function(err) {
                self.handleError(out, err, {});
            });
        }
    };
};

/**
 Returns RPC schema object for Expedia.bookReservation
 @toc 8.
 @method rpcReservationBook
 **/
ExpediaApi.prototype.rpcReservationBook = function(){
    var self = this;

    return {
        info: 'Checks if a user exists. If not, creates a guest user.',

        params: {
            users: { required: true, type: 'array', info: "Array of new user objects. Each object must contain an email, phone, or _id field. May contain other user information." },
            user_id: { required: false, type: 'string', info: "Id of user who is importing. This is used to link/follow these new users." },
            follow: { required: false, type: 'number', info: "1 to have the user_id user follow all the users after being imported." }
        },
        returns: {
            users: 'Array of the new user objects, if successfully created, or the user\'s existing database entry (with at least the _id field), if it\'s already there.'
        },


        /**
         @method action
         @param {Object} params
         @param {Object} data new user params (detailed above)
         @param {Object} out callback object which provides `win` and `fail` functions for handling `success` and `fail` callbacks
         @param {Function} win Success callback
         @param {Function} fail Fail callback
         **/
        action: function(params, out){
            var promise =ExpediaMod.usersImport(db, params, {});
            promise.then(function(ret1) {
                ret1.user =UserMod.readFilter(ret1.user, {type:'public'});		//only return certain fields (i.e strip out password)
                out.win(ret1);
            }, function(err) {
                self.handleError(out, err, {});
            });
        }
    };
};

/**
 Returns RPC schema object for Expedia.cancelReservation
 @toc 9.
 @method rpcReservationCancel
 **/
ExpediaApi.prototype.rpcReservationCancel = function(){
    var self = this;

    return {
        info: 'Login via a third party social site. Creates a new user as necessary.',
        params: {
            user: { required: true, type: 'object', info: "User object. Must contain an email, phone, or _id field. May contain other user information." },
            socialData: { required: true, type: 'object', info: "The social data to save - typically a 'token' and 'id'." },
            type: { required: true, type: 'string', info: "A key to save the token under, describing the social site. Ex: 'facebook', 'google', etc." }
        },
        returns: {
            user: 'The new user object, if successfully created, or the user\'s existing database entry (with at least the _id field), if it\'s already there.',
            already_exists: 'Boolean. True iff the user was already in the database.'
        },

        /**
         @method action
         @param {Object} params
         @param {Object} data new user params (detailed above)
         @param {Object} out callback object which provides `win` and `fail` functions for handling `success` and `fail` callbacks
         @param {Function} win Success callback
         @param {Function} fail Fail callback
         **/
        action: function(params, out){
            var promise =ExpediaMod.socialLogin(db, params, {});
            promise.then(function(ret1) {
                ret1.user =UserMod.readFilter(ret1.user, {type:'full'});		//only return certain fields (i.e strip out password)
                // ret1.user =UserMod.readFilter(ret1.user, {type:'login'});		//only return certain fields (i.e strip out password)

                //@example: var fields ={'tribe': {'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1}, 'follow':{'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1} };
                // var fields ={};
                var fields ={ 'follow':{'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1} };
                var fill_promise = UserMod.fillInfo(db, {'user': ret1.user, 'fields': fields }, {});
                fill_promise.then(
                    function(ret2)
                    {
                        ret1.user = ret2.user;
                        out.win(ret1);
                    },
                    function(err)
                    {
                        self.handleError(out, err, {});
                    }
                );
            }, function(err) {
                self.handleError(out, err, {});
            });
        }
    };
};

/**
 Returns RPC schema object for Expedia.getReservation
 @toc 10.
 @method rpcReservationGet
 **/
ExpediaApi.prototype.rpcReservationGet = function(){
    var self = this;

    return {
        info: 'Login via a third party social site. Creates a new user as necessary.',
        params: {
            user: { required: true, type: 'object', info: "User object. Must contain an email, phone, or _id field. May contain other user information." },
            socialData: { required: true, type: 'object', info: "The social data to save - typically a 'token' and 'id'." },
            type: { required: true, type: 'string', info: "A key to save the token under, describing the social site. Ex: 'facebook', 'google', etc." }
        },
        returns: {
            user: 'The new user object, if successfully created, or the user\'s existing database entry (with at least the _id field), if it\'s already there.',
            already_exists: 'Boolean. True iff the user was already in the database.'
        },

        /**
         @method action
         @param {Object} params
         @param {Object} data new user params (detailed above)
         @param {Object} out callback object which provides `win` and `fail` functions for handling `success` and `fail` callbacks
         @param {Function} win Success callback
         @param {Function} fail Fail callback
         **/
        action: function(params, out){
            var promise =ExpediaMod.socialLogin(db, params, {});
            promise.then(function(ret1) {
                ret1.user =UserMod.readFilter(ret1.user, {type:'full'});		//only return certain fields (i.e strip out password)
                // ret1.user =UserMod.readFilter(ret1.user, {type:'login'});		//only return certain fields (i.e strip out password)

                //@example: var fields ={'tribe': {'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1}, 'follow':{'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1} };
                // var fields ={};
                var fields ={ 'follow':{'_id':1, 'email': 1, 'phone': 1, 'first_name': 1, 'last_name': 1} };
                var fill_promise = UserMod.fillInfo(db, {'user': ret1.user, 'fields': fields }, {});
                fill_promise.then(
                    function(ret2)
                    {
                        ret1.user = ret2.user;
                        out.win(ret1);
                    },
                    function(err)
                    {
                        self.handleError(out, err, {});
                    }
                );
            }, function(err) {
                self.handleError(out, err, {});
            });
        }
    };
};