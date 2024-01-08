export interface GetActivePermitsResponse {
    Items: any
    StayItems: StayItem[]
    ItemTypes: ItemType[]
    ActivatablePermits: ActivatablePermit[]
    ItemTemplates: any
    ResultCode: string
    Result: string
    ResultDescription: string
}

export interface StayItem {
    StayID: number
    AuthorityCode: string
    AuthorityName: string
    Location: any
    Vehicles: string[]
    ActiveVehicle: string
    VRMAttachmentType: string
    Vehicle: any
    MaximumVehicles: number
    MinimumVehicles: number
    ActiveItemTemplateID: number
    TotalPriceFormatted: string
    DateTimeBeginStay: string
    DateTimeEndStay: string
    IsPermit: boolean
    PermitType: string
    PermitTypeDescription: string
    TariffDescription: string
    CanAlter: boolean
    CanExtend: boolean
    CanCancel: boolean
    ExtendThreshold: number
    CancelThreshold: number
    AdminPODStayCode: string
    TariffData1: string
    TariffData2: string
    PrintString1: string
    PrintString2: string
    StayItemDetails: any
    EVChargeStatus: string
    ResultCode: string
    Result: string
    ResultDescription: string
}

export interface ItemType {
    TypeCode: string
    TypeDescription: string
    ActivationType: string
    RecentActivatedVehicles?: string[]
}

export interface ActivatablePermit {
    AuthorityCode: string
    AuthorityName: string
    TypeCode: string
    TypeDescription: string
    ProductDescription: string
    PermitTypeID: number
    PermitDurationID: number
    DurationType: string
    DurationLength: number
    ScheduleLookupType: string
    SpanMinimum: number
    AvailableToUse: number
    AvailableToBuy: number
    NextAvailablePurchaseDate: string
    NextAvailablePurchaseAmount: number
    AvailabilitySummary: string
}
