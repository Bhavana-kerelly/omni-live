export function openWhatsAppAppointment(details = null) {
  const whatsappNumber = '918880101000';
  let message = 'Hello OMNI Hospitals, I would like to book an appointment.';

  if (typeof details === 'string' && details.trim()) {
    message = `Hello OMNI Hospitals, I would like to book an appointment for ${details.trim()}.`;
  } else if (details && typeof details === 'object') {
    if (details.isContactForm) {
      message = `Hello OMNI Hospitals. I have an enquiry.\nName: ${details.patientName}\nPhone: ${details.phone}\nBranch: ${details.location}\nSubject: ${details.subject}\nMessage: ${details.enquiryMessage}`;
    } else if (details.name) {
      const spec = details.specialty ? ` (${details.specialty})` : '';
      const branch = details.branch || details.location ? ` at ${details.branch || details.location}` : '';
      message = `Hello OMNI Hospitals, I would like to book an appointment with ${details.name}${spec}${branch}.`;
    } else if (details.specialty) {
      message = `Hello OMNI Hospitals, I would like to book an appointment for ${details.specialty}.`;
    } else if (details.hospital || details.location) {
      message = `Hello OMNI Hospitals, I would like to book an appointment at ${details.hospital || details.location} branch.`;
    } else if (details.patientName || details.phone) {
      const nameStr = details.patientName ? ` Name: ${details.patientName}.` : '';
      const phoneStr = details.phone ? ` Phone: ${details.phone}.` : '';
      const specStr = details.specialty ? ` Specialty: ${details.specialty}.` : '';
      const locStr = details.location ? ` Branch: ${details.location}.` : '';
      message = `Hello OMNI Hospitals, I would like to book an appointment.${nameStr}${phoneStr}${specStr}${locStr}`;
    }
  }

  const encodedMsg = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMsg}`;
  window.open(whatsappUrl, '_blank');
}
