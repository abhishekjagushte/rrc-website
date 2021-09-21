import { formTypes, navMenuItemsTypes } from "../util/constants"

export class AppConfiguration{
    
    activeFormType = formTypes().RECRUITMENT

    navMenu = [
        navMenuItemsTypes().HOME_PAGE,
        navMenuItemsTypes().EVENTS,
        navMenuItemsTypes().FORM_SECTION,
        navMenuItemsTypes().CONTACT_US
    ]

}

export const appConfigs = new AppConfiguration()