//your JS code here. If required.
function verifyOTP() {
    var phoneNumber = document.getElementById("phone").value;
    var otp = document.getElementById("otp").value;

    // Here, you can add logic to verify the OTP with the backend.
    // For example, you can make an API call to the server to verify the OTP.

    // Dummy logic for demonstration purposes
    if (otp === "123456") {
        document.getElementById("message").textContent = "OTP Verified successfully!";
    } else {
        document.getElementById("message").textContent = "Invalid OTP. Please try again.";
    }
}

