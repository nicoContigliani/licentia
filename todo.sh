

npx sequelize-cli model:create --name PayType --attributes Type_Name:string,Description:string
npx sequelize-cli model:create --name Pay --attributes PayTypeID:bigint,Amount:float,Payment_Date:date
npx sequelize-cli model:create --name LicencePay --attributes LicenceId:bigint,PayId:bigint,Payment_Date:date,LicencePayJwt:string,LicencePay_Allowed:boolean
npx sequelize-cli model:create --name Licence --attributes Licence_Name:string,Start_Date:date,End_Date:date,Licence_TypeID:bigint,Billing_Plan_LicenceID:bigint,licenceJWT:string,LicenceTypeID:bigint,Licence_Allowed:boolean
npx sequelize-cli model:create --name LicenceType --attributes Type_Name:string,Description:string,Max_Duration:bigint,Premium_Support:boolean,Users_Included:bigint

npx sequelize-cli model:create --name BillingPlanType --attributes BillingPlanType_Name:string,BillingPlanType_Description:string,BillingPlan_type_ID:bigint
npx sequelize-cli model:create --name BillingPlan --attributes Plan_Name:string,Description:string,BillingPlan_type_ID:bigint
npx sequelize-cli model:create --name BillingPlanLicence --attributes BillingPlanId:bigint,LicenceId:bigint,BillingPlanLicenceJwt:string,BillingPlanLicence_Allowed:boolean


npx sequelize-cli model:create --name PlanLicence --attributes LicenceID:bigint,BillingPlanLicenceID:bigint,PlanLicenceJwt:string,PlanLicence_Allowed:boolean
npx sequelize-cli model:create --name LicenceAll --attributes LicenceId:bigint,AllId:bigint,LicenceAllJwt:string,LicenceAll_Allowed:boolean
npx sequelize-cli model:create --name All --attributes Enterprise_Name:string,Branch_Name:string,User_Name:string,password:string,client_Allowed:boolean,email:string,phone:string,AllTypeID:bigint
npx sequelize-cli model:create --name AllType --attributes Type_Name:string,Description:string
npx sequelize-cli model:create --name LicenceModule --attributes LicenceId:bigint,ModuleId:bigint,licenceModuleJwt:string,licenceModule_Allowed:boolean

npx sequelize-cli model:create --name Platforms --attributes platforms:string,modulePlatforms_Allowed:boolean
npx sequelize-cli model:create --name Language --attributes language:string,acronyms:string,language_Allowed:boolean
npx sequelize-cli model:create --name ModulePlatforms --attributes PlatformsId:bigint,ModuleId:bigint,modulePlatforms_Allowed:boolean
npx sequelize-cli model:create --name ModuleLanguage --attributes  LanguageId:bigint,ModuleId:bigint,moduleLanguage_Allowed:boolean

npx sequelize-cli model:create --name ModulePlan --attributes  ModuleId:bigint,PlanId:bigint,modulePlan_Allowed:boolean


npx sequelize-cli model:create --name Module --attributes Module_Name:string,Module_Description:string,Module_TypeID:bigint,Module_Allowed:boolean,Module_Free:boolean




npx sequelize-cli model:create --name ModuleType --attributes Type_Name:string,Description:string
npx sequelize-cli model:create --name LicenceSupport --attributes LicenceId:bigint,SupportId:bigint,LicenceSupportJwt:string,LicenceSupport_Allowed:boolean
npx sequelize-cli model:create --name Support --attributes Type_Name:string,Description:string,Support_TypeID:bigint
npx sequelize-cli model:create --name SupportType --attributes Type_Name:string,Description:string

npx sequelize-cli model:create --name GeneralToken --attributes LicenceId:bigint,Token_Value:string,Expiration_Date:date,Revoked:boolean,Revoked_At:date,IP_Address:string,customer:string,messages:string,alerts:string



npx sequelize-cli seed:generate  --name PayType            
npx sequelize-cli seed:generate  --name Pay                
npx sequelize-cli seed:generate  --name LicencePay         
npx sequelize-cli seed:generate  --name Licence            
npx sequelize-cli seed:generate  --name LicenceType        
npx sequelize-cli seed:generate  --name BillingPlanType    
npx sequelize-cli seed:generate  --name BillingPlan        
npx sequelize-cli seed:generate  --name BillingPlanLicence 
npx sequelize-cli seed:generate  --name PlanLicence        
npx sequelize-cli seed:generate  --name LicenceAll         
npx sequelize-cli seed:generate  --name All                
npx sequelize-cli seed:generate  --name AllType            
npx sequelize-cli seed:generate  --name LicenceModule      
npx sequelize-cli seed:generate  --name Module             
npx sequelize-cli seed:generate  --name ModuleType         
npx sequelize-cli seed:generate  --name LicenceSupport     
npx sequelize-cli seed:generate  --name Support            
npx sequelize-cli seed:generate  --name SupportType        
npx sequelize-cli seed:generate  --name GeneralToken   



npx sequelize-cli seed:generate  --name Platforms
npx sequelize-cli seed:generate  --name Language 
npx sequelize-cli seed:generate  --name ModulePlatforms
npx sequelize-cli seed:generate  --name ModuleLanguage
npx sequelize-cli seed:generate  --name ModulePlan
npx sequelize-cli seed:generate  --name Module



#    Module.belongsToMany(models.Licence, { through: models.LicenceModule });
#       Module.belongsTo(models.ModuleType, {
#         foreignKey: 'Module_TypeID',
#       });

# Language.belongsToMany(models.Module, { through: models.ModuleLanguage });
