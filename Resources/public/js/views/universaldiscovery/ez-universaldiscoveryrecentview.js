/*
 * Copyright (C) eZ Systems AS. All rights reserved.
 * For full copyright and license information view LICENSE file distributed with this source code.
 */
YUI.add('ez-universaldiscoveryrecentview', function (Y) {
    "use strict";
    /**
     *
     * @module ez-universaldiscoveryrecentview
     */
    Y.namespace('eZ');

    Y.eZ.UniversalDiscoveryRecentView = Y.Base.create('universalDiscoveryRecentView', Y.eZ.UniversalDiscoveryMethodBaseView, [], {
        initializer: function () {
            this._set('title', 'Recent');
            this._set('identifier', 'recent');
        },

        render: function () {
            this.get('container').setHTML(this.template({
                title: this.get('title'),
                identifier: this.get('identifier'),
            }));
            return this;
        },

    }, {
    });
});
