

npx sequelize-cli model:create --name PayType --attributes Type_Name:string,Description:string
npx sequelize-cli model:create --name Pay --attributes PayTypeID:bigint,Amount:float,Payment_Date:date
npx sequelize-cli model:create --name LicencePay --attributes LicenceID:bigint,PayID:bigint,Payment_Date:date
npx sequelize-cli model:create --name Licence --attributes Licence_Name:string,Start_Date:date,End_Date:date,IsActive:boolean,Enterprise_Allowed:boolean,Branch_Allowed:boolean,User_Allowed:boolean,Licence_TypeID:bigint,Billing_Plan_LicenceID:bigint,licenceJWT:string,LicenceTypeID:bigint
npx sequelize-cli model:create --name LicenceType --attributes Type_Name:string,Description:string,Max_Duration:bigint,Premium_Support:boolean,Users_Included:bigint

npx sequelize-cli model:create --name BillingPlanType --attributes BillingPlanType_Name:string,BillingPlanType_Description:string,BillingPlan_type_ID:bigint
npx sequelize-cli model:create --name BillingPlan --attributes Plan_Name:string,Description:string,BillingPlan_type_ID:bigint
npx sequelize-cli model:create --name BillingPlanLicence --attributes BillingPlanID,LicenceID:bigint,BillingPlanLicenceJwt:string,BillingPlanLicence_Allowed:boolean


npx sequelize-cli model:create --name PlanLicence --attributes LicenceID:bigint,BillingPlanLicenceID:bigint,PlanLicenceJwt:string,PlanLicence_Allowed:boolean
npx sequelize-cli model:create --name LicenceAll --attributes LicenceID:bigint,AllID:bigint
npx sequelize-cli model:create --name All --attributes Enterprise_Name:string,Branch_Name:string,User_Name:string,password:string,status_All:string,email:string,phone:string,AllTypeID:bigint
npx sequelize-cli model:create --name AllType --attributes Type_Name:string,Description:string
npx sequelize-cli model:create --name LicenceModule --attributes LicenceID:bigint,ModuleID:bigint,licenceModuleJwt:string,licenceModule_Allowed:boolean
npx sequelize-cli model:create --name Module --attributes Module_Name:string,Module_Description:string,Module_TypeID:bigint
npx sequelize-cli model:create --name ModuleType --attributes Type_Name:string,Description:string
npx sequelize-cli model:create --name LicenceSupport --attributes LicenceID:bigint,SupportID:bigint,LicenceSupportJwt:string,LicenceSupport_Allowed:boolean
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
