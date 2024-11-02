import * as bootstrap from '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'

const checkbox = document.getElementById('flexCheckDefault');
const submitButton = document.getElementById('submitButton');

checkbox.addEventListener('change', function() {
    submitButton.disabled = !this.checked;
});

