            //HashTable//
//hashtable is also known as hashmap that is used to store key value pairs.
//A hashing function is there to accept a key that converts into an index of an array within the boundary
//typically implemented where constant lookup and insertion are needed


class HashTable1{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total =0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return total%this.size;
    }

    set(key,value){
        let index = this.hash(key);
        this.table[index] = value;
    }

    remove(key){
        let index = this.hash(key);
        this.table[index] = undefined;
    }

    search(key){
        let index = this.hash(key);
        return this.table[index];
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }

}

const hashtable1 = new HashTable1(20);
hashtable1.set("name","ajmal") 
hashtable1.set("age",22) 
hashtable1.set("place","kalamassery");
hashtable1.display() 
console.log(hashtable1.search("name"));
hashtable1.remove("place")

//this is a simple hashtable , but here there is a major issue called collision due to which data stored will lost . 
//here name and place will result in same index (17) there fore the value ajmal will be lost

//in the upcoming file we can handle this collisions