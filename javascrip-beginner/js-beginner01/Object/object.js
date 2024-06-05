// Javascript code demonstrating a simple object

// Create an Object , college name
 let college  = {

// Add Properities
    name: 'BBC college', 
    location: 'Toronto',
    established: 1971,

    displayInfo: function() {
        console.log(`${college.name} was this.established in

${college.established} at ${college.location}`)
    }
 }

 college.displayInfo();