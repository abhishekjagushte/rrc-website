import { appConfigs } from "./config/app-configuration"
import { RecruitmentComponent } from "./forms/recruitment/recruitment.component"
import { RegistrationComponent } from "./forms/registration/registration.component"
import { formTypes, navMenuItemsTypes } from "./util/constants"

export class AppConfigurationHelper{
        
    //methods
    getFormRoute(){
        if(appConfigs.activeFormType == formTypes().RECRUITMENT)
            return  { path: 'register', component: RecruitmentComponent }
        else
            return  { path: 'register', component: RegistrationComponent}
    }

    getMenuItem(menuItemType: string){
        if(menuItemType === navMenuItemsTypes().HOME_PAGE){

        }
    }
}

export const appConfigHelper = new AppConfigurationHelper()