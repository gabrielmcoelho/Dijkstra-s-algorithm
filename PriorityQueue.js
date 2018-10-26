class PriorityQueue{
    constructor(){
        this.values = [];
    }
    enqueue(value, priority){
        var newNode = new Node(value, priority);
        this.values.push(newNode);
        var currentIndex = this.values.indexOf(newNode);
        while(currentIndex > 0){
            let parentIndex = Math.floor((currentIndex-1)/2);
            if(this.values[parentIndex].priority > this.values[currentIndex].priority){
                swap(this.values, currentIndex, parentIndex);
                currentIndex = parentIndex;
            }
            else break;
        }
        return this.values;
    }
    dequeue(){
        if(this.values.length === 0) return null;
        if(this.values.length === 1) return this.values.pop();
        swap(this.values, 0, this.values.length - 1);
        var removedNode = this.values.pop();
        var length = this.values.length;
        var current = 0;
        var child1 = 1;
        var child2 = 2;
        while(true){
            let troca = false;
            if(child1 < length && child2 < length){
                if(this.values[child1].priority < this.values[current].priority || this.values[child2].priority < this.values[current].priority){
                    if(this.values[child1].priority < this.values[child2].priority){
                        swap(this.values, current, child1);
                        current = child1;
                    } 
                    else{
                        swap(this.values, current, child2);
                        current = child2;
                    }
                    troca = true;
                }
            }
            else if(child1 < length && child2 >= length){
                if(this.values[child1].priority < this.values[current].priority){
                    swap(this.values, current, child1);
                    current = child1;
                    troca = true;
                }
            }
            else break;
            if(!troca) break;
            child1 = current*2 + 1;
            child2 = current*2 + 2;
        }
        return removedNode;
    }
}