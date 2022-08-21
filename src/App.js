import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import DiaryPage from './components/diarypage/DiaryPage.js'
import AddDiaryPageForm from './components/AddDiaryPageForm';

function App() {
  var initialState = [
    // for demo purpose => remove this later
    {date:'aug 20, 2022', notes: "aug 20 notes"},
    {date:'aug 21, 2022', notes: "aug 21 notes"}
  ];
  var [diaryPages, setDiaryPages] = useState(initialState);
  var [openAddForm, setOpenAddForm]  = useState(false);
  var [openEditForm, setOpenEditForm] = useState(false);

  const addDiaryPageHandler = (date, notes) =>{
    console.log("inside addDiaryPageHandler date: ", date, ", notes: " ,notes);

    setDiaryPages(state => [ {date, notes}, ...state]);
  }

  return (
    <div className="App">
      <h1>Diary</h1>
      {/* <p>Add notes for the date</p>
      <p>Edit notes for the given date</p>
      <p>List notes for each date</p>
      <p>Delete notes for given date</p>
      <p>without firebase , if time firebase</p> */}
      
      <button onClick={
          e=> {
            setOpenAddForm(oldState => !oldState);
          }       
        }>
          Add
      </button>

      {openAddForm && 
        <AddDiaryPageForm 
        addDiaryPageHandler={addDiaryPageHandler}/>}

      {openEditForm && 
        <EditDiaryPageForm 
          updateDiaryPageHandler={updateDiaryPageHandler}/>}

      {diaryPages.map((dp, index) => 
        <DiaryPage 
          key = {index}
          date={dp.date} 
          notes={dp.notes}/>)}
      
      
    </div>
  );
}

export default App;
