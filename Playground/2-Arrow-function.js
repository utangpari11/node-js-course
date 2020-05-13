const square = function(x){return x*x}
console.log(square(5))

const square2 = (x) => {return x*x}
console.log(square2(6))

const square3 = (x) => x*x
console.log(square3(9))

const event = {
    name: 'Birthday Party',
    guestList:['John','Mike','Andrew'],
    printGuestList(){
        console.log('guest list for '+this.name)
        this.guestList.forEach(function(guest){
            console.log(guest)
        })
    },
    printGuestList2: function(){
        console.log('guest list for '+this.name)
    }
}
event.printGuestList()
