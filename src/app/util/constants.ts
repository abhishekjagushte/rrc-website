export const formTypes = () => ({
    RECRUITMENT : "RECRUITMENT",
    EVENT: "EVENT"
})

export const navMenuItemsTypes = () => ({
    HOME_PAGE: "HOMEPAGE",
    EVENTS: "EVENTS",
    FORM_SECTION: "FORM_SECTION",
    CONTACT_US: "CONTACT_US"
})


export const paths = () => ({
    HOME_PAGE : "/",
    EVENTS: "/activities",
    FORM_SECTION: "/register",
    CONTACT_US: "/contact"
})

export const navMenuItems = () => ({
    [navMenuItemsTypes().HOME_PAGE] : {
        path: paths().HOME_PAGE
    },

    [navMenuItemsTypes().EVENTS] : {
        path: paths().EVENTS
    },

    [navMenuItemsTypes().FORM_SECTION] : {
        path: paths().FORM_SECTION
    },

    [navMenuItemsTypes().CONTACT_US] : {
        path: paths().CONTACT_US
    },
})