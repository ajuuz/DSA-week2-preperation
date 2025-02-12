//3.double hashing

class HashTable5{
    constructor(size){
        this.table = new Array(size);
        this.size= size;
    }

    primaryHash(key){
        let total =0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size;
    }

    secondaryHash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }
        return 1+(total%(this.size-1));
    }

    set(key,value){
        let index = this.primaryHash(key);
        let stepSize = this.secondaryHash(key);

        let i=0;
        while(this.table[(index+i*stepSize)%this.size] && this.table[(index+i*stepSize)%this.size].key!==key){
                i++;

                if(i===this.size){
                    return console.log("hashtable is full")
                }
        }
        this.table[(index+i*stepSize)%this.size]={key,value};
    }

    search(key){
        let index = this.primaryHash(key);
        let stepSize = this.secondaryHash(key);
        let i=0;
        while(this.table[(index+i*stepSize)%this.size]){
            if(this.table[(index+i*stepSize)%this.size].key===key){
                return this.table[(index+i*stepSize)%this.size].value;
            }
            i++;
            if(i===this.size) break
        }

        return console.log("no elemtn found")
    }

    remove(key){
        let index = this.primaryHash(key);
        let stepSize = this.secondaryHash(key);
        let i=0;
        while(this.table[(index+i*stepSize)%this.size]){
            if(this.table[(index+i*stepSize)%this.size].key===key){
                 this.table[(index+i*stepSize)%this.size]=undefined;
                 return this.table[(index+i*stepSize)%this.size].value
            }
            i++;
            if(i===this.size) break
        }

        return console.log("no elemtn found")
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]) console.log(i,this.table[i])
        }
    }
}


const hashtable5 = new HashTable5(7);
hashtable5.set("number",98765432);
hashtable5.set("name","ajmal");
hashtable5.set("pincode",987655);
hashtable5.set("age",22);
hashtable5.set("place","kochi");
hashtable5.set("lacep","kalamassery");
hashtable5.set("anem","ajmalea");
hashtable5.set("address","house name");
hashtable5.display()