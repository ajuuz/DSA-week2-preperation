//2. Qaudratic Probing

class HashTable4{
    constructor(size){
        this.table = new Array(size);
        this.size = size;
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total+=key.charCodeAt(i)
        }
        return total%this.size;
    }

    set(key,value){
        let index = this.hash(key);
        let i=0;

        while(this.table[(index+i**2)%this.size] && this.table[(index+i**2)%this.size].key!==key){
            i++;
            if(i===this.size){
                return console.log("hashtable is full")
            }
        }

        this.table[(index+i**2)%this.size] = {key,value}
    }

    search(key){
        let index = this.hash(key);
        let i=0;

        while(this.table[(index+i**2)%this.size]){

            if(this.table[(index+i**2)%this.size].key===key){
                return this.table[(index+i**2)%this.size].value
            }
            i++;
            if(i===this.size) break;
        }
        return console.log("no element found");
    }

    remove(key){
        let index = this.hash(key);
        let i=0;

        while(this.table[(index+i**2)%this.size]){
            if(this.table[(index+i**2)%this.size].key===key){
                this.table[(index+i**2)%this.size] = undefined;
            }
            i++;
            if(i===this.size) break
        }
        return console.log("no element found")
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}


const hashtable4 = new HashTable4(7);

hashtable4.set("name","ajmal");
hashtable4.set("age",22);
hashtable4.set("place","kalamassery")
hashtable4.set("mane","ldsjkff")
hashtable4.set("anem","anem")
console.log(hashtable4.search("anem"))

hashtable4.display()


