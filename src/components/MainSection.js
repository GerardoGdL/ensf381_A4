import React, { useState, useEffect } from 'react';
import courses from '../data/courses'; 
import testimonials from '../data/testimonials'; 
import "../App.css";

function MainSection() {
    // Select 3 random courses
    const [randomCourses, setRandomCourses] = useState([]);
    const [randomTestimonials, setRandomTestimonials] = useState([]);

    useEffect(() => {
        setRandomCourses([...courses].sort(() => 0.5 - Math.random()).slice(0, 3));
        setRandomTestimonials([...testimonials].sort(() => 0.5 - Math.random()).slice(0, 2));
    }, []);

    return (
        <div className="main-section">
            <p>The Learning Management System (LMS) helps students and instructors manage courses, quizzes, and track performance efficiently.</p>

            <h2>Featured Courses:</h2>
            <div>
                {randomCourses.map(course => (
                    <div key={course.id}>
                        <img src={course.image} alt={course.name} />
                        <h3>{course.name}</h3>
                        <p>{course.instructor}</p>
                        <p>{course.description}</p>
                        <p>{course.duration}</p>
                    </div>
                ))}
            </div>

            <h2>Student Testimonials:</h2>
            <div>
            {randomTestimonials.map((testimonial, index) => (
                <div key={index}>
                    <p>{testimonial.studentName}</p>
                    <p>"{testimonial.review}"</p>
                    <p>- {testimonial.courseName}</p>
                    {/* Star Rating */}
                    <div>
                        {Array.from({ length: testimonial.rating }, (_, i) => (
                            <span key={i}>⭐</span>
                        ))}
                    </div>
                </div>
    ))}
</div>

        </div>
    );
}

export default MainSection;
