let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  let arr2 = [
    { id: 5, name: 'rahul', age: 21, profession: 'developer' },
    { id: 6, name: 'tushar', age: 20, profession: 'developer' },
    { id: 7, name: 'alkesh', age: 18, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
       arr.forEach(element=>{
        if(element.profession==="developer")
        {
            console.log(`ID:${element.id},Name:${element.name},Age:${element.age},Profession:${element.profession}`);
        }
       });
  }
  
  function addData() {
    //Write your code here, just console.log
    let newEmployee = {id:4,name:"susan",age:20,profession:"intern"}
    arr.push(newEmployee);
    arr.forEach(element=>{
       
            console.log(`ID:${element.id},Name:${element.name},Age:${element.age},Profession:${element.profession}`);
       });
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr=arr.filter(element=>element.profession!=="admin");
    arr.forEach(element=>{
       
        console.log(`ID:${element.id},Name:${element.name},Age:${element.age},Profession:${element.profession}`);
   });
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let concatenateArray=arr.concat(arr2);
    console.log(concatenateArray);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }