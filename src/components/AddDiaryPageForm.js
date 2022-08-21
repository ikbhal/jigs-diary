import {useState} from 'react';
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.min";
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

export default function AddDiaryPageForm({addDiaryPageHandler}){

    const handleSubmit = (e) =>{
        console.log("inside handlesubmit");
        e.preventDefault();
        addDiaryPageHandler(date, notes);

        // clear form
        setDate(''); // bug: not working
        setNotes('');
    }

    const [date, setDate] = useState("");
    const [notes, setNotes] = useState("aug 21 notes")
    return (
        <div>
            <h2>AddDiaryPageForm</h2>

            <form onSubmit={handleSubmit} >
                <label>Date</label><br/>
                <input type="date"
                     id="date" 
                     name="date" 
                     value={date}
                    //  defaultValue="21-08-2022"
                     onChange={(e) => {
                            debugger;
                            setDate(e.target.value);
                        }
                    }/>
                <br/>
                <label>Notes</label><br/>
                <textarea id="notes" name="notes"
                     value={notes}
                     onChange={e => setNotes(e.target.value)}/>
                <br/>
                <input type="submit" value="Submit"/>
            </form>
        </div>
  );
}



/*

lets try boostrap later

            <Form onSubmit ={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Date</Form.Label><br/>
                    <Form.Control type="date" placeholder="Enter Date"  value ={date}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Notes</Form.Label><br/>
                    <Form.Control as="textarea" rows={3}  value={notes}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
*/