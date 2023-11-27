import "./App.css";
import { useRef } from "react";
import { useState } from "react";

function App() {

  const possibleCandidates = [
    { name: "Superman", gpa: "4", cohort: "Metropolis" },
    { name: "Batman", gpa: "4", cohort: "Gotham" },
    // { name: "WonderWoman", gpa: "4.0", cohort: "Athens" },
    // { name: "Mario", gpa: "4.0", cohort: "Italy" },
    // { name: "Luigi", gpa: "4.0", cohort: "Brooklyn" },
  ];
  const inputRef = useRef(null);
  const gpaRef = useRef(null);
  const cohortRef = useRef(null);
  // const [currentWord, setCurrentWord] = useState("");
  // const [currentgpa, setCurrentgpa] = useState('');
  // const [currentcohort, setCurrentcohort] = useState('');
  const [array,setArray] = useState(possibleCandidates)

  const handleChange = () => {
    let content = inputRef.current.value;
    let newgpa = gpaRef.current.value;
    let newcohort = cohortRef.current.value;
  
    // setCurrentWord(content);
    // setCurrentgpa(newgpa);
    // setCurrentcohort(newcohort);
    console.log(inputRef.current.value);

    setArray(array => [...array,{name: content,gpa: newgpa,cohort: newcohort}])
  };

  // -----> Using Arrays
 

// console.log(array)
console.log(possibleCandidates)
//
  // ----> Mapping
  const star_Students = array.map((scholar, n) => {
    return (
      <div className="recruit" key={n}>
         <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <h3>{scholar.name}</h3>
          <h3>{scholar.gpa}</h3>
          <h3>{scholar.cohort}</h3>
        </div>
        </div>
    );
  });

 

  return (
    <div className="App">
        <h1>STUDENT GRADE BOOK</h1>
        <div style={{ display: "flex", justifyContent: "space-evenly" ,color:"white"}}>
          <h3>NAME</h3>
          <h3>GPA</h3>
          <h3>COHORT</h3>
        </div>

 
       {star_Students}

      <input type="text" placeholder="Enter student Name" ref={inputRef} /> <br/>
      <input type="number" placeholder="Enter student GPA" ref={gpaRef}/><br/>
      <input type="text" placeholder="Enter student Cohort" ref={cohortRef}/><br/>
      <button onClick={handleChange}>ADD</button>
      {/* <div>Name : {content}</div>
      <div>gpa : {newgpa}</div>
      <div>Cohort : {newcohort}</div> */}
    </div>
  );
}

export default App;