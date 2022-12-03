export class Buildings {
    constructor(){
        this.donutRate = 0;
        this.buildingCost =0;
        this.costIncreaseRate=0.15;
    }

    increaseBuildingCost(){
        let newCost = this.buildingCost*this.costIncreaseRate + this.buildingCost;  
        this.buildingCost = Math.round(newCost)  
    }
     
}



export class Toes extends Buildings{
    constructor(donutRate,buildingCost){
        super(donutRate,buildingCost)
            this.donutRate = 0.1;
            this.buildingCost = 15;
            
    
    }
    
        increaseBuildingCost(){
            
               super.increaseBuildingCost()
          
           
            
        } 
    }
    


export class UnpaidIntern extends Buildings{
    constructor(donutRate,buildingCost,buff){
        super(donutRate,buildingCost,buff)
            this.donutRate = 2;
            this.buildingCost = 15;      
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
    }
    
    increaseBuildingCost(){
        super.increaseBuildingCost()
    } 
}

export class Bezos extends Buildings{
    constructor(donutRate,buildingCost,buff){
        super(donutRate,buildingCost,buff)
            this.donutRate = 1600000;
            this.buildingCost = 75000000000;      
    }
    
    increaseBuildingCost(){
        super.increaseBuildingCost()
    } 
}





