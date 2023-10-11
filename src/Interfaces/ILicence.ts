export interface ILicence {
    Licence_Name: string,
    Start_date: Date,
    End_date: Date,
    Licence_TypeID: bigint,
    Billing_Plan_LicenceID: bigint,
    licenceJWT: string,
    LicenceTypeID: bigint,
    Licence_Allowed: boolean
}
