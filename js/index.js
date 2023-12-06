

function toAppointment() {
    window.location.href = 'appointment.html';
}

function toContactus() {
    window.location.href = 'contact.html';
}


document.getElementById('sendButton').addEventListener('click', () => {
    alert('Thanks for contacting with us.')
})

document.getElementById('btnConfirmAppointment').addEventListener('click', () => {
    alert('Your appointment is confirmed. Thanks for staying with us.')
})