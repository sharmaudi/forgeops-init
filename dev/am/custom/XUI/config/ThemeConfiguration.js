"use strict";

/*
 * Copyright 2015-2017 ForgeRock AS. All Rights Reserved
 *
 * Use of this code requires a commercial software license with ForgeRock AS.
 * or with one of its affiliates. All use shall be exclusively subject
 * to such license between the licensee and ForgeRock AS.
 */

define({
    themes: {
        // There must be a theme named "default".
        "default": {
            // An ordered list of URLs to stylesheets that will be applied to every page.
            stylesheets: ["css/bootstrap-3.3.5-custom.css", "css/structure.css", "css/theme.css"],
            // A path that is prepended to every relative URL when fetching resources (including images, stylesheets and
            // HTML template files).
            path: "",
            // A URL to a favicon icon
            icon: "favicon.ico",
            settings: {
                // This logo is displayed on user profile pages.
                logo: {
                    // The URL of the image.
                    src: "images/logo-horizontal.png",
                    // The title attribute used on <img> tags.
                    title: "ForgeRock",
                    // The alt attribute used on <img> tags.
                    alt: "ForgeRock",
                    // The width of the logo as a CSS length.
                    width: "202px"
                },
                // This logo is displayed on login pages.
                loginLogo: {
                    // The URL of the image.
                    src: "images/login-logo.png",
                    // The title attribute used on <img> tags.
                    title: "ForgeRock",
                    // The alt attribute used on <img> tags.
                    alt: "ForgeRock",
                    // The height of the logo as a CSS length.
                    height: "104px",
                    // The width of the logo as a CSS length.
                    width: "210px"
                },
                // The footer is displayed on every page.
                footer: {
                    // A contact email address.
                    mailto: "support@service.vic.gov.au",
                    // A contact phone number. If empty, it will not be displayed.
                    phone: ""
                }
            }
        },
        "fr-dark-theme": {
            // An ordered list of URLs to stylesheets that will be applied to every page.
            stylesheets: ["themes/dark/css/bootstrap.min.css", "css/structure.css", "themes/dark/css/theme-dark.css"],
            settings: {
                loginLogo: {
                    src: "themes/dark/images/login-logo-white.png",
                    title: "ServiceVic",
                    alt: "ServiceVic",
                    height: "228px",
                    width: "220px"
                }
            }
        },
        "customerportal": {
            // An ordered list of URLs to stylesheets that will be applied to every page.
            path: "themes/customerportal/",
            stylesheets: ["themes/customerportal/css/bootstrap-3.3.5-custom.css", "themes/customerportal/css/structure.css", "themes/customerportal/css/theme.css"],
            settings: {
                loginLogo: {
                    src: "themes/customerportal/images/login-logo.png",
                    title: "Customer Portal",
                    alt: "Customer Portal",
                    height: "60px",
                    width: "129px"
                },
                footer: {
                    // A contact email address.
                    mailto: "support@customerportal.local",
                    message: "Contact us",
                    servicevicfooter: "© Custom Portal 2018",
                    // A contact phone number. If empty, it will not be displayed.
                    phone: ""
                },
                custom: {
                    headerTitle: "Log in"
                }
            }
        },
        "customermobile": {
            path: "themes/customermobile/",
            stylesheets: [
                "themes/customermobile/css/bootstrap-3.3.5-custom.css",
                "themes/customermobile/css/structure.css",
                "themes/customermobile/css/theme.css"
            ],
            settings: {
                loginLogo: {
                    src: "themes/customermobile/images/login-logo.png",
                    title: "Customer Mobile",
                    alt: "Customer Mobile",
                    height: "60px",
                    width: "129px"
                },
                resetPassword: {
                    resetPasswordText: "Forgot your password?",
                    resetPasswordUrl: "##resetPasswordUrl##"
                },
                footer: {
                    // A contact email address.
                    mailto: "support@customerportal.vic.gov.au",
                    message: "Contact us",
                    servicevicfooter: "© Custom Footer",
                    phone: ""
                },
                custom: {
                    headerTitle: "Log in"
                }
            }
        }
    },
    
    mappings: [
        {
            theme: "customerportal",
            realms: ["customer"]
        }, {
            theme: "customermobile",
            realms: ["/customermobile"]
        }
    ]
});