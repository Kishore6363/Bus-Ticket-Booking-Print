// Initialize AOS (Animate on Scroll)
AOS.init();

// Form submission handler
const form = document.getElementById('booking-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get values from the form inputs
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const departure = document.getElementById('departure').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
    const seats = document.getElementById('seats').value;
    const busType = document.getElementById('busType').value;
    const travelTime = document.getElementById('travelTime').value;

    // Validate that all fields are filled in
    if (!name || !email || !departure || !destination || !date || !seats) {
        alert("Incomplete Form\nPlease ensure all fields are filled correctly!");
        return;
    }

    // Populate the ticket details in the ticket container
    document.getElementById('ticket-name').textContent = name;
    document.getElementById('ticket-email').textContent = email;
    document.getElementById('ticket-departure').textContent = departure;
    document.getElementById('ticket-destination').textContent = destination;
    document.getElementById('ticket-date').textContent = date;
    document.getElementById('ticket-seats').textContent = seats;
    document.getElementById('ticket-busType').textContent = busType;
    document.getElementById('ticket-travelTime').textContent = travelTime;

    // Show the ticket container (it should be initially hidden)
    const ticketContainer = document.getElementById('ticket-container');
    ticketContainer.style.display = 'block';

    // SweetAlert confirmation with a prompt to print the ticket
    Swal.fire({
        title: 'Booking Confirmed!',
        html: `
            <b>Name:</b> ${name}<br>
            <b>Email:</b> ${email}<br>
            <b>From:</b> ${departure} <b>to</b> ${destination}<br>
            <b>Date:</b> ${date}<br>
            <b>Seats:</b> ${seats}<br>
            <b>Bus Type:</b> ${busType}<br>
            <b>Travel Time:</b> ${travelTime}
        `,
        icon: 'success',
        confirmButtonText: 'Print Ticket',
    }).then(() => {
        window.print(); // Trigger print dialog
    });

    // Reset the form after successful submission
    form.reset();
});

// Smooth scroll function to bring the form into view when "Get Your Ticket" button is clicked
function scrollToForm() {
    document.querySelector('.form-container').scrollIntoView({ behavior: 'smooth' });
}
