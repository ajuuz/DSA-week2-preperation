// Close Hashing  - Open Addressing

//1. Linear Probing

class HashTable3{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }

        return total%this.size;
    }

    set(key,value){
        let index = this.hash(key);
        let originalIndex = index;

        while(this.table[index] && this.table[index].key!==key){
            index=(index+1)%this.size;
            if(index===originalIndex){
                return console.log("table is full");
            }
        }
        this.table[index] = {key,value};
    }

    search(key){
        let index = this.hash(key);
        let originalIndex = index ;

        while(this.table[index]){
            if(this.table[index].key===key){
                return console.log(this.table[index].key +" => "+ this.table[index].value)
            }

            index = (index+1)%this.size;
            if(index === originalIndex){
                break;
            }

        }
        return console.log("no element found");
    }

    remove(key){
        let index = this.hash(key)
        let originalIndex = index;

        while(this.table[index]){
            if(this.table[index].key===key){
               return this.table[index] = undefined;
            }
            index = (index+1)%this.size;
            if(index === originalIndex){
                break;
            }
        }

        return console.log("no element found");
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }

}

const hashtable3 = new HashTable3(10);

hashtable3.set("name","ajmal");
hashtable3.set("mane","shuhaib");
hashtable3.set("age",22);
hashtable3.set("place","kalamassery");
hashtable3.set("name","aswanth")

hashtable3.search("mane")
hashtable3.remove("mane")
hashtable3.remove("age")
hashtable3.display()