import React from 'react';
import EnrolledCourse from './EnrolledCourse';

function EnrollmentList({ enrolledCourses = [], onDrop }) {
    const totalCredits = enrolledCourses.reduce((sum, course) => sum + (course.creditHours || 0), 0);

    return (
        <div className="enrollment-list">
            <h2>Enrolled Courses:</h2>
            {enrolledCourses.length === 0 ? (
                <p>No courses enrolled.</p>
            ) : (
                enrolledCourses.map(course => (
                    <EnrolledCourse key={course.id} course={course} onDrop={onDrop} />
                ))
            )}
            <div className="total-credits">
                <h3>Total Credit Hours: {totalCredits}</h3>
            </div>
        </div>
    );
}

export default EnrollmentList;
