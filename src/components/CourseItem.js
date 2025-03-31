import React, { useState } from 'react';
import '../App.css';

function CourseItem({ course, onEnroll }) {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    return (
        <div
            className="course-item"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img src={course.image} alt={course.name} className="course-image" />
            <h3 className="course-name">{course.name}</h3>
            <p className="course-instructor">{course.instructor}</p>
            {isHovered && <p className="course-description">{course.description}</p>}
            <button className="enroll-button" onClick={() => onEnroll(course)}>Enroll Now</button>
        </div>
    );
}

export default CourseItem;
