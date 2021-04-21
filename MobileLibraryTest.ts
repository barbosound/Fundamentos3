import {MobileLibrary} from '../Fundamentos3/MobileLibrary';
import {Mobile} from '../Fundamentos2/mobile';

var array:Mobile[] = new Array();

array = [
    new Mobile("Nokia","Nokia3210","Nokia",20,"Negro",false,1,50),
    new Mobile("iPhone","iPhone3G","Apple",20,"Blanco",false,2,1000),
    new Mobile("Samsung","Samsung Galaxy 10","Samsung",20,"Rojo",true,2,500),
    new Mobile("Samsung","Samsung Galaxy 10","Samsung",20,"Rojo",true,2,500)
]

var library = new MobileLibrary("NokiaLibrary","Japan",array);

// console.log(library.totalPriceCalculation());

library.printLibrary();