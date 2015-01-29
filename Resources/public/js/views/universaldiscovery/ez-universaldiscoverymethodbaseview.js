/*
 * Copyright (C) eZ Systems AS. All rights reserved.
 * For full copyright and license information view LICENSE file distributed with this source code.
 */
YUI.add('ez-universaldiscoverymethodbaseview', function (Y) {
    "use strict";
    /**
     * Provides the Universal discovery method base view
     *
     * @module ez-universaldiscoverymethodbaseview
     */
    Y.namespace('eZ');

    Y.eZ.UniversalDiscoveryMethodBaseView = Y.Base.create('universalDiscoveryMethodBaseView', Y.eZ.TemplateBasedView, [], {
        getHTMLIdentifier: function () {
            return 'ez-uv-tabs-' + this.get('identifier');
        },

    }, {
        ATTRS: {
            title: {
                value: "",
                readOnly: true,
            },

            identifer: {
                value: "",
                readOnly: true,
            },

            priority: {
                value: 0,
            },

            selectionMode: {
                value: 'single',
            },

            visible: {
                value: false,
            },
        },
    });
});
