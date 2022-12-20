// export enum VehicleType {
//     Sedan = 0,
//     Pickup = 1,
//     Van = 2,
//     Truck = 3,
//     PickupTruck = 4,
//     Bus = 5,
//     Minibus = 6,
//     Motorcycle = 7,
// }
export interface IVehicleType {
    key: number;
    name: string;
}
export const VehicleTypeFunc = () => {
    var Sedan: IVehicleType = { name: 'سواری', key: 0 };
    var Pickup: IVehicleType = { name: 'وانت', key: 1 };
    var Van: IVehicleType = { name: 'ون', key: 2 };
    var Truck: IVehicleType = { name: 'کامیون', key: 3 };
    var PickupTruck: IVehicleType = { name: 'کامیونت', key: 4 };
    var Bus: IVehicleType = { name: 'اتوبوس', key: 5 };
    var Minibus: IVehicleType = { name: 'مینی بوس', key: 6 };
    var Motorcycle: IVehicleType = { name: 'موتورسیکلت', key: 7 };

    return [Sedan, Pickup, Van, Truck, PickupTruck, Bus, Minibus, Motorcycle]

    // return VehicleTypeNames[vt]
}



export enum Alerts {
    pending = "اطلاعات شما درد",
    tryAgain = 'خطا! لطفا مجددا تلاش کنید!',
}