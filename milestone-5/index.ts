// manually declare html2pdf as any 
declare var html2pdf: any;

// Interface for the resume data
interface ResumeData {
  username: string;
  email: string;
  degree: string;
  schoolUni: string;
  year: string;
  officeName: string;
  jobTitle: string;
  yearExperience: string;
  skills: string;
}

// Function to generate resume content dynamically
function generateResumeContent(data: ResumeData): string {
  return `
    <h2>Resume</h2>
    <p><strong>Name:</strong> ${data.username}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    <p><strong>Degree:</strong> ${data.degree}</p>
    <p><strong>School/University:</strong> ${data.schoolUni}</p>
    <p><strong>Year:</strong> ${data.year}</p>
    <p><strong>Office Name:</strong> ${data.officeName}</p>
    <p><strong>Job Title:</strong> ${data.jobTitle}</p>
    <p><strong>Year of Experience:</strong> ${data.yearExperience}</p>
    <p><strong>Skills:</strong> ${data.skills}</p>
  `;
}

// Function to handle form submission and generate resume
function handleFormSubmit(event: Event): void {
  event.preventDefault();

  // Get form values
  const username = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const degree = (document.getElementById('degree') as HTMLInputElement).value;
  const schoolUni = (document.getElementById('schl_uni') as HTMLInputElement).value;
  const year = (document.getElementById('Year') as HTMLInputElement).value;
  const officeName = (document.getElementById('office-name') as HTMLInputElement).value;
  const jobTitle = (document.getElementById('job-title') as HTMLInputElement).value;
  const yearExperience = (document.getElementById('Year-Experience') as HTMLInputElement).value;
  const skills = (document.getElementById('skills') as HTMLInputElement).value;

  // Create resume data object
  const resumeData: ResumeData = {
    username,
    email,
    degree,
    schoolUni,
    year,
    officeName,
    jobTitle,
    yearExperience,
    skills,
  };

  // Generate resume content and display it
  const resumeContent = generateResumeContent(resumeData);
  const resumeOutput = document.getElementById('resume-content');
  if (resumeOutput) {
    resumeOutput.innerHTML = resumeContent;
  } else {
    console.error('Resume output element not found.');
  }

  // Save a shareable link
  const shareLink = document.getElementById('shareable-link') as HTMLAnchorElement;
  if (shareLink) {
    const url = generateResumeURL(username);
    shareLink.href = url;
    shareLink.style.display = 'inline-block'; // Show the shareable link
  } else {
    console.error('Share link not found.');
  }
}

// Function to generate a unique URL for the resume (simulated)
function generateResumeURL(username: string): string {
  return `https://resume.vercel.app/${username.replace(/\s+/g, '_')}`;
}

// Function to handle copying the shareable link
function handleCopyLink(): void {
  const shareLink = document.getElementById('shareable-link') as HTMLAnchorElement;
  if (shareLink && shareLink.href) {
    navigator.clipboard.writeText(shareLink.href).then(() => {
      alert(`Link copied to clipboard: ${shareLink.href}`);
    }).catch(err => {
      console.error('Error copying link:', err);
    });
  } else {
    console.error('Share link not available for copying.');
  }
}

// Function to download the resume as a PDF using html2pdf.js
function handlePDFDownload(): void {
  const resumeContent = document.getElementById('resume-content') as HTMLElement;

  if (resumeContent) {
    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().from(resumeContent).set(opt).save();
  } else {
    console.error('Resume content not found.');
  }
}

// Add event listeners for buttons
document.getElementById('generate')?.addEventListener('click', handleFormSubmit);
document.getElementById('copy-link-btn')?.addEventListener('click', handleCopyLink);
document.getElementById('pdf-download')?.addEventListener('click', handlePDFDownload);
