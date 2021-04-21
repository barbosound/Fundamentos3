import {Mobile} from '../Fundamentos2/mobile';
export class MobileLibrary
{
    private name: string;
    private location: string;
    private mobiles: Mobile[];
    private totalPrice: number;

    constructor(name:string,location:string,mobiles:Mobile[])
    {
        this.name = name;
        this.location = location;
        this.mobiles = mobiles;
    }

    public getName():string
    {
        return this.name;
    }

    public setName(name:string)
    {
        this.name = name;
    }

    public getLocation():string
    {
        return this.location;
    }

    public setLocation(location:string)
    {
        this.location = location;
    }

    public getMobiles(index:number):Mobile
    {
        return this.mobiles[index];
    }

    public setTrademark(index:number,value:Mobile)
    {
        this.mobiles[index] = value;
    }

    public getTotalPrice():number
    {
        return this.totalPrice;
    }

    public setTotalPrice(price:number)
    {
        this.totalPrice = price;
    }

    private totalPriceCalculation():number{
        var total: number = 0;
        for (let i = 0; i < this.mobiles.length; i++) {
            total += this.mobiles[i].getPrice();          
        }
        return this.getTotalPrice();
    }
}