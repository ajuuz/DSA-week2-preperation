//collision

//when a new key has a index which is previously occupied then we can call as collision

//To avoid Collission
//We use : - 
//Open Hashing (chaining method)
//Close Hashing (open Addressing) -
    //close hashing then further classified into : -
    //--Linear Probing
    //--Quadratic Probing
    //--Double Hashing 


// Chaining method

class HashTable2{
    constructor(size){
        this.table = new Array(size);
        this.size=size;
    }


    hash(key){
        let total = 0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i);
        }

        return total%this.size;
    }

    set(key,value){
        const index = this.hash(key);

        const bucket = this.table[index];
        if(!bucket){
            this.table[index] = [[key,value]]
        }
        else{
            const sameKeyItem = bucket.find((item)=>item[0]===key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key,value]);
            }
        }
    }

    search(key){
        const index = this.hash(key);

        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                return console.log(sameKeyItem[0],sameKeyItem[1])
            }
        }
        return null;
    }

    remove(key){
        const index = this.hash(key)

        const bucket = this.table[index];
        if(bucket){
            const sameKeyItem = bucket.find((item)=>item[0]===key);

            if(sameKeyItem){
                if(bucket.length===1) {
                    this.table[index] = undefined;
                    return sameKeyItem[1]
                }
                bucket.splice(bucket.indexOf(sameKeyItem),1);
                return sameKeyItem[1];
            }
        }
        return null;
    }


    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }

}

const hashtable2 = new HashTable2(30);

hashtable2.set("name","ajmal");
hashtable2.set("age",22);
hashtable2.set("place","kalamassery");
hashtable2.set("mane","kal");
hashtable2.display()

hashtable2.search("mane")
hashtable2.search("name")
hashtable2.search("age")

hashtable2.remove("name")
hashtable2.display()