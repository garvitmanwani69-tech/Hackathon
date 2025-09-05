function generateQR() {
  const studentId = document.getElementById("student-id").value;
  document.getElementById("qrcode").innerHTML = ""; // Clear previous QR
  new QRCode(document.getElementById("qrcode"), {
    text: `ID:${studentId}, Fee:Paid, Attendance:Present`,
    width: 128,
    height: 128
  });
}

// QR Scanner setup
const qrScanner = new Html5Qrcode("reader");
qrScanner.start(
  { facingMode: "environment" },
  {
    fps: 10,
    qrbox: 250
  },
  (decodedText) => {
    document.getElementById("scan-result").innerText = "Scanned: " + decodedText;
    qrScanner.stop(); // Stop after first scan
  },
  (errorMessage) => {
    // Ignore scan errors
  }
);