const tg = window.Telegram.WebApp;
tg.expand();

const mainMenu = document.getElementById('main-menu');
const editorPage = document.getElementById('editor-page');
const videoPage = document.getElementById('video-page');

// --- PHOTO EDITOR NAVIGATION ---
document.getElementById('photo-btn').addEventListener('click', () => {
    mainMenu.style.display = 'none';
    editorPage.style.display = 'block';
});
document.getElementById('back-btn').addEventListener('click', () => {
    editorPage.style.display = 'none';
    mainMenu.style.display = 'block';
});

// --- VIDEO EDITOR NAVIGATION ---
document.getElementById('video-btn').addEventListener('click', () => {
    mainMenu.style.display = 'none';
    videoPage.style.display = 'block';
});
document.getElementById('video-back-btn').addEventListener('click', () => {
    videoPage.style.display = 'none';
    mainMenu.style.display = 'block';
});

// --- SUBMIT PHOTO EDIT ---
document.getElementById('submit-edit').addEventListener('click', () => {
    const promptText = document.getElementById('prompt-input').value;
    if (!promptText) { alert("Maaloo, prompt kee barreassi!"); return; }
    tg.sendData(JSON.stringify({ action: "photo_edit", prompt: promptText, watermark: "@Tofe_editor_bot" }));
    tg.close();
});

// --- SUBMIT VIDEO EDIT ---
document.getElementById('submit-video-edit').addEventListener('click', () => {
    const videoPrompt = document.getElementById('video-prompt-input').value;
    if (!videoPrompt) { alert("Maaloo, viidiyoodhaaf prompt barreassi!"); return; }
    
    tg.sendData(JSON.stringify({ 
        action: "video_edit", 
        prompt: videoPrompt,
        watermark: "@Tofe_editor_bot"
    }));
    tg.close();
});

// Button-oota hafan
document.getElementById('ai-btn').addEventListener('click', () => { tg.sendData("Jalqabsiisi: AI Prompt"); tg.close(); });
document.getElementById('premium-btn').addEventListener('click', () => { tg.sendData("Jalqabsiisi: Premium"); tg.close(); });
