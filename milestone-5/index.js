var _a, _b, _c;
// Function to generate resume content dynamically
function generateResumeContent(data) {
    return "\n    <h2>Resume</h2>\n    <p><strong>Name:</strong> ".concat(data.username, "</p>\n    <p><strong>Email:</strong> ").concat(data.email, "</p>\n    <p><strong>Degree:</strong> ").concat(data.degree, "</p>\n    <p><strong>School/University:</strong> ").concat(data.schoolUni, "</p>\n    <p><strong>Year:</strong> ").concat(data.year, "</p>\n    <p><strong>Office Name:</strong> ").concat(data.officeName, "</p>\n    <p><strong>Job Title:</strong> ").concat(data.jobTitle, "</p>\n    <p><strong>Year of Experience:</strong> ").concat(data.yearExperience, "</p>\n    <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n  ");
}
// Function to handle form submission and generate resume
function handleFormSubmit(event) {
    event.preventDefault();
    // Get form values
    var username = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var degree = document.getElementById('degree').value;
    var schoolUni = document.getElementById('schl_uni').value;
    var year = document.getElementById('Year').value;
    var officeName = document.getElementById('office-name').value;
    var jobTitle = document.getElementById('job-title').value;
    var yearExperience = document.getElementById('Year-Experience').value;
    var skills = document.getElementById('skills').value;
    // Create resume data object
    var resumeData = {
        username: username,
        email: email,
        degree: degree,
        schoolUni: schoolUni,
        year: year,
        officeName: officeName,
        jobTitle: jobTitle,
        yearExperience: yearExperience,
        skills: skills,
    };
    // Generate resume content and display it
    var resumeContent = generateResumeContent(resumeData);
    var resumeOutput = document.getElementById('resume-content');
    if (resumeOutput) {
        resumeOutput.innerHTML = resumeContent;
    }
    else {
        console.error('Resume output element not found.');
    }
    // Save a shareable link
    var shareLink = document.getElementById('shareable-link');
    if (shareLink) {
        var url = generateResumeURL(username);
        shareLink.href = url;
        shareLink.style.display = 'inline-block'; // Show the shareable link
    }
    else {
        console.error('Share link not found.');
    }
}
// Function to generate a unique URL for the resume (simulated)
function generateResumeURL(username) {
    return "https://resume.vercel.app/".concat(username.replace(/\s+/g, '_'));
}
// Function to handle copying the shareable link
function handleCopyLink() {
    var shareLink = document.getElementById('shareable-link');
    if (shareLink && shareLink.href) {
        navigator.clipboard.writeText(shareLink.href).then(function () {
            alert("Link copied to clipboard: ".concat(shareLink.href));
        }).catch(function (err) {
            console.error('Error copying link:', err);
        });
    }
    else {
        console.error('Share link not available for copying.');
    }
}
// Function to download the resume as a PDF using html2pdf.js
function handlePDFDownload() {
    var resumeContent = document.getElementById('resume-content');
    if (resumeContent) {
        var opt = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(resumeContent).set(opt).save();
    }
    else {
        console.error('Resume content not found.');
    }
}
// Add event listeners for buttons
(_a = document.getElementById('generate')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', handleFormSubmit);
(_b = document.getElementById('copy-link-btn')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', handleCopyLink);
(_c = document.getElementById('pdf-download')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', handlePDFDownload);
