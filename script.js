// --- PAGE 1: GATEWAY LINK SYSTEM ---
const subBtn = document.getElementById('subBtn');
const unlockBtn = document.getElementById('unlockBtn');
const step1 = document.getElementById('step1');
const stepText = document.getElementById('stepText');

if (subBtn && unlockBtn) {
    subBtn.addEventListener('click', () => {
        window.open('https://www.youtube.com/@realamseriousgaming', '_blank'); 
        
        stepText.innerHTML = "Channel Visited! ✅";
        step1.classList.add('completed');
        subBtn.style.display = 'none';
        
        unlockBtn.classList.remove('disabled');
        unlockBtn.removeAttribute('disabled');
    });

    unlockBtn.addEventListener('click', () => {
        if (!unlockBtn.classList.contains('disabled')) {
            window.open('blog.html', '_self');
        }
    });
}

// --- PAGE 2: STEALTH ANTI-ADBLOCK INJECTION & TEASER ---
function expandPost(event, postId) {
    const post = document.getElementById(postId);
    if (post && !post.classList.contains('expanded')) {
        post.classList.add('expanded');
    }
}

// Dynamically generate script dependencies at window generation runtime
document.addEventListener("DOMContentLoaded", () => {
    // Only apply to the blog page interface context tracking
    if (document.getElementById('timerNotice')) {
        
        // 1. Inject Background Popunder Script
        const popScript = document.createElement('script');
        popScript.src = "https://planetsrecipe.com/ba/f4/5e/baf45eb2dca0de2c3b2896d9f5f56f06.js";
        document.head.appendChild(popScript);

        // 2. Inject Social Bar Script
        const socialScript = document.createElement('script');
        socialScript.src = "https://planetsrecipe.com/41/f4/54/41f454f69b0dfc4e97fd0386e4568662.js";
        document.body.appendChild(socialScript);
        
        // 3. Inject Native Widget 1
        const nativeContainer1 = document.getElementById('media-stream-092ed484663ef190c1b0237dd370dbb7');
        if (nativeContainer1) {
            const scriptNode1 = document.createElement('script');
            scriptNode1.async = true;
            scriptNode1.setAttribute('data-cfasync', 'false');
            scriptNode1.src = "https://planetsrecipe.com/092ed484663ef190c1b0237dd370dbb7/invoke.js";
            nativeContainer1.appendChild(scriptNode1);
        }

        // 4. Inject Native Widget 2 (Clone Slot)
        const nativeContainer2 = document.getElementById('media-stream-092ed484663ef190c1b0237dd370dbb7-2');
        if (nativeContainer2) {
            const scriptNode2 = document.createElement('script');
            scriptNode2.async = true;
            scriptNode2.setAttribute('data-cfasync', 'false');
            scriptNode2.src = "https://planetsrecipe.com/092ed484663ef190c1b0237dd370dbb7/invoke.js";
            nativeContainer2.appendChild(scriptNode2);
        }
    }
});

// Counter timeline configuration
const secondsSpan = document.getElementById('seconds');
const timerNotice = document.getElementById('timerNotice');
const downloadZone = document.getElementById('downloadZone');

if (secondsSpan && timerNotice && downloadZone) {
    let count = 15;
    const mediafireLink = "https://www.mediafire.com/file/k4xeoecf2v3ljd5/Dup_Glitch_Blockman-go-3-20-3.apk/file"; 

    const countdown = setInterval(() => {
        count--;
        secondsSpan.textContent = count;

        if (count <= 0) {
            clearInterval(countdown);
            
            timerNotice.style.backgroundColor = "#065f46";
            timerNotice.style.borderColor = "#10b981";
            timerNotice.innerHTML = "Your download is ready below! ✅";
            
            downloadZone.innerHTML = `
                <a href="https://planetsrecipe.com/ba/f4/5e/baf45eb2dca0de2c3b2896d9f5f56f06.js" target="_blank" style="text-decoration:none;" onclick="window.open('${mediafireLink}', '_blank');">
                    <button class="final-dl-btn">📥 Download File (MediaFire)</button>
                </a>`;
        }
    }, 1000);
}
