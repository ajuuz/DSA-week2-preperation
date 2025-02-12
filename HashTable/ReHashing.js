// Re Hashing 

//Re Hashing is a technique used in hashtable when the table size no longer sufficient for accomadating new elements
//size of table is increased by typically double
// a re hashing happens 
//all elements re inserted back to table



class Hash{

    constructor(capacity){
        this.loadFactor=0.75;
        this.capacity = capacity;
        this.table = new Array(capacity)
        this.size=0;
    }

    hash(key){
        let total =0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.capacity;
    }

    set(key,value){
        console.log((this.size/this.capacity) >= this.loadFactor)
        if((this.size/this.capacity) >= this.loadFactor) this.rehash()
        let index = this.hash(key);
        let bucket = this.table[index];
        if(!bucket){
            this.table[index]=[[key,value]]
            this.size++;
        }
        else{
            let sameKeyItem = bucket.find((item)=>item[0]===key);
            if(sameKeyItem){
                sameKeyItem[1] = value;
            }else{
                bucket.push([key,value])
            }
        }
    }

    get(key){
        let index = this.hash(key);
        let bucket = this.table[index];

        if(bucket){
            let sameKeyItem = bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                return sameKeyItem[1];
            }            
        }
        return null;
    }

    remove(key){
        let index = this.hash(key);
        let bucket = this.table[index];

        if(bucket){
            let sameKeyItem = bucket.find((item)=>item[0]===key)
            if(sameKeyItem){
                bucket.splice(bucket.indexOf(sameKeyItem),1)
                return sameKeyItem[1]
            }
        }
        return null;
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            console.log(i,this.table[i])
        }
    }


    rehash(){
        this.capacity=this.capacity*2;
        this.oldTable = this.table;
        this.table = new Array(this.capacity);
        this.size=0;

        for(let bucket of this.oldTable){
            if(bucket){
                for(let item of bucket){
                    this.set(item[0],item[1])
                }
            }
        }
    }


}

const hash = new Hash(5);
hash.set("name","ajmal")
hash.set("age",22)
hash.set("place","kochi")
hash.set("addressee","123place");
hash.set("rollee",2)
hash.set("rolleeee",2)
hash.display()













