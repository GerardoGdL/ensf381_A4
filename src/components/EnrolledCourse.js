import React from 'react';

function EnrolledCourse({ course, onDrop }) {
    return (
        <div className="enrolled-course">
            <h3>{course.name}</h3>
            <p>Credit Hours: {course.creditHours}</p>
            <button className="drop-button" onClick={() => onDrop(course)}>Drop Course</button>
        </div>
    );
}

export default EnrolledCourse;
