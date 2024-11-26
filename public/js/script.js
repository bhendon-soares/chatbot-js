document.getElementById('send-btn').addEventListener('click', async () => {
    const userMessage = document.getElementById('user-input').value;
    if (userMessage.trim() === '') return;

    // Exibir a mensagem do usuário
    appendMessage(userMessage, 'user');

    // Limpar o campo de entrada
    document.getElementById('user-input').value = '';

    try {
        console.log("Enviando para o servidor: ", userMessage);

        const response = await fetch('/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: userMessage }),
        });

        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        const data = await response.json();

        console.log("Resposta recebida do servidor: ", data);

        appendMessage(data.reply, 'bot');
    } catch (error) {
        console.error('Erro:', error);
    }
});

function appendMessage(message, sender) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender);
    messageDiv.textContent = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
