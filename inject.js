(function () {
  const link = window.document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = 'https://ai-agent-bot.vercel.app/index.css';
  document.head.appendChild(link);

  const chatButton = document.createElement('button');
  chatButton.className = 'chat-button';
  chatButton.onclick = toggleChat;

  const chatButtonImage = document.createElement('img');
  chatButtonImage.src = 'https://ai-agent-bot.vercel.app/images/chat.png';
  chatButton.appendChild(chatButtonImage);
  const chatWindow = document.createElement('div');
  chatWindow.className = 'chat-window';
  chatWindow.onclick = toggleChat;

  const chatCloseButton = document.createElement('button');
  chatCloseButton.className = 'chat-close-button';
  chatCloseButton.style.display = 'none';

  const chatCloseButtonImage = document.createElement('img');
  chatCloseButtonImage.src = 'https://ai-agent-bot.vercel.app/images/close.png';
  chatCloseButton.appendChild(chatCloseButtonImage);
  chatWindow.appendChild(chatCloseButton);

  const chatIframe = document.createElement('iframe');
  chatIframe.className = 'chat-iframe';
  chatIframe.frameBorder = 0;
  chatIframe.src = `https://ai-agent.yavar.ai/?access_token=${window.botKey}`;
  chatWindow.appendChild(chatIframe);

  document.body.appendChild(chatButton);
  document.body.appendChild(chatWindow);

  function toggleChat() {
    if (
      chatWindow.style.display === 'none' ||
      chatWindow.style.display === ''
    ) {
      chatWindow.style.display = 'block';
      chatCloseButton.style.display = 'block';
    } else {
      chatWindow.style.display = 'none';
      chatCloseButton.style.display = 'none';
    }
  }
})();
