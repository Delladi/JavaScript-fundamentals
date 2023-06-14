// a string name (e.g 'May2022')
// a number id (e.g 1234)
// an array of student names
// Declare a function 
// that accepts that object as argument and print a message with 
// the following structure:
const cohort = {
    name: 'May 2023',
    id: 1234,
    students: ['Della', 'Zara', 'Sean']
  };
  
  const printCohort = (cohort) => {
    console.log(`${cohort.id} - ${cohort.name} - ${cohort.students.length} students in this cohort`);
  };
  
  printCohort(cohort);
  