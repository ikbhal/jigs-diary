
import './DiaryPage.css';
function DiaryPage({date, notes}){
    return (
        <div className="diary_page">
            <p>Date: {date}</p>
            <p>{notes}</p>
            <p>Edit Button</p>
            <p>Delete Button</p>
        </div>
    );
}

export default DiaryPage;