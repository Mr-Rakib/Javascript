function fruitsIterator(values) {
    let index = 0;
    return {
        next: function () {
            if (index < values.length) {
                return {
                    value: values[index++],
                    done: false
                }
            }else
            {
                return {
                    done: true
                }

            }
        }
    }
}


    const fruits = ['apple', 'mango', 'grapes', 'potata'];
    console.log(fruits);

    const iterators = fruitsIterator(fruits);
    console.log(iterators.next()); 
    console.log(iterators.next()); 
    console.log(iterators.next()); 
    console.log(iterators.next()); 
    console.log(iterators.next()); 