// Soldier
class Soldier {
    constructor(health, strength){
        this.health=health;
        this.strength=strength;
    }
    attack(){
        return this.strength;
    }

    receiveDamage(theDamage){
        return this.health -= theDamage;}
    }



// Viking
class Viking extends Soldier {
    constructor(name, health, strength){
        super(health, strength);
        this.name=name;
    }

    receiveDamage(theDamage){
        let newHealth = this.health -=theDamage
        if(newHealth > 0){
            return `${this.name} has received ${theDamage} points of damage`}
       else {return `${this.name} has died in act of combat`};
    }
}

// Saxon
//class Saxon {}

// War
// class War {}