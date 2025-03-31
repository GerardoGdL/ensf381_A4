import React from 'react';
import CourseCatalog from "./CourseCatalog";
import EnrollmentList from "./EnrollmentList";
import Header from "./Header";
import Footer from "./Footer";

function CoursesPage() {
    return(
        <div className="courses-page">
            <Header />
        <div className="content">
            <CourseCatalog />
            <EnrollmentList />
        </div>
            <Footer />
        </div>
    );
}

export default CoursesPage;