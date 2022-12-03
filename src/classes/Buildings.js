export class Buildings {
    donutRate;
    buildingCost;
    constructor(){
        this.donutRate = 0;
        this.buildingCost =0;
    }

    increaseBuildingCost(){
        let buildingCost = this.buildingCost;
        let costIncreaseRate = this.costIncreaseRate;
        let newCost = buildingCost*costIncreaseRate + buildingCost;
        let roundedCost = Math.round(newCost) 
        this.buildingCost = roundedCost
        
        
    }
     
}



export class Toes extends Buildings{
    constructor(donutRate,buildingCost,buff){
        super(donutRate,buildingCost,buff)
            this.donutRate = 1;
            this.buildingCost = 10;
            this.buff = 2;
            this.costIncreaseRate = 0.15;
            this.maxCost = 999;
           
           
    }
    
        increaseBuildingCost(){
            if(this.buildingCost < this.maxCost){
                super.increaseBuildingCost()
            }
           
            
        } 
    }
    


export class UnpaidIntern extends Buildings{
    constructor(donutRate,buildingCost,buff){
        super(donutRate,buildingCost,buff)
            this.donutRate = 2;
            this.buildingCost = 15;
            this.buff = 2;
            this.costIncreaseRate = 0.20;
           
           
    }
    
    increaseBuildingCost(){
        super.increaseBuildingCost()
    } 
}

export class Cook extends Buildings{
    constructor(donutRate,buildingCost,buff){
        super(donutRate,buildingCost,buff)
            this.donutRate = 3;
            this.buildingCost = 20;
            this.buff = 2;
            this.costIncreaseRate = 0.25;
           
           
    }
    
    increaseBuildingCost(){
        super.increaseBuildingCost()
    } 
}

export class Grandpa extends Buildings{
    constructor(donutRate,buildingCost,buff){
        super(donutRate,buildingCost,buff)
            this.donutRate = 4;
            this.buildingCost = 25;
            this.buff = 2;
            this.costIncreaseRate = 0.30;
           
           
    }
    
    increaseBuildingCost(){
        super.increaseBuildingCost()
    } 
}

export class Farm extends Buildings{
    constructor(donutRate,buildingCost,buff){
        super(donutRate,buildingCost,buff)
            this.donutRate = 5;
            this.buildingCost = 30;
            this.buff = 2;
            this.costIncreaseRate = 0.35;
           
           
    }
    
    increaseBuildingCost(){
        super.increaseBuildingCost()
    } 
}

export class Rig extends Buildings{
    constructor(donutRate,buildingCost,buff){
        super(donutRate,buildingCost,buff)
            this.donutRate = 6;
            this.buildingCost = 35;
            this.buff = 2;
            this.costIncreaseRate = 0.35;
           
           
    }
    
    increaseBuildingCost(){
        super.increaseBuildingCost()
    } 
}

export class Bank extends Buildings{
    constructor(donutRate,buildingCost,buff){
        super(donutRate,buildingCost,buff)
            this.donutRate = 7;
            this.buildingCost = 40;
            this.buff = 2;
            this.costIncreaseRate = 0.40;
           
           
    }
    
    increaseBuildingCost(){
        super.increaseBuildingCost()
    } 
}


export class Church extends Buildings{
    constructor(donutRate,buildingCost,buff){
        super(donutRate,buildingCost,buff)
            this.donutRate = 8;
            this.buildingCost = 45;
            this.buff = 2;
            this.costIncreaseRate = 0.45;
           
           
    }
    
    increaseBuildingCost(){
        super.increaseBuildingCost()
    } 
}

export class Bezos extends Buildings{
    constructor(donutRate,buildingCost,buff){
        super(donutRate,buildingCost,buff)
            this.donutRate = 9;
            this.buildingCost = 9999;
            this.buff = 2;
            this.costIncreaseRate = 0.50;
           
           
    }
    
    increaseBuildingCost(){
        super.increaseBuildingCost()
    } 
}





