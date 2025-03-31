import React, { useState } from 'react';
import CourseItem from './CourseItem';
import courses from '../data/courses';

function CourseCatalog() {
    const [enrolledCourses, setEnrolledCourses] = useState([]);

    const handleEnroll = (course) => {
        if (!enrolledCourses.some(enrolledCourse => enrolledCourse.id === course.id)) {
            setEnrolledCourses([...enrolledCourses, { ...course, creditHours: 3 }]);
        }
    };

    const handleDrop = (course) => {
        const updatedCourses = enrolledCourses.filter(enrolledCourse => enrolledCourse.id !== course.id);
        setEnrolledCourses(updatedCourses);
    };

    return (
        <div className="course-catalog">
            <h2>Course Catalog:</h2>
            <div className="courses-grid">
                {courses.map(course => (
                    <CourseItem key={course.id} course={course} onEnroll={handleEnroll} />
                ))}
            </div>
        </div>
    );
}

export default CourseCatalog;
