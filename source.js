(function() {
    // منع استخدام أزرار العودة
    history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
    };
    
    // إخفاء كل شيء
    document.documentElement.style.height = '100%';
    document.body.innerHTML = '';
    
    // تطبيق التنسيقات
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#000';
    document.body.style.height = '100vh';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.overflow = 'hidden';
    document.body.style.position = 'fixed';
    document.body.style.top = '0';
    document.body.style.left = '0';
    document.body.style.width = '100%';
    document.body.style.fontFamily = 'Arial, sans-serif';
    
    // إنشاء الرسالة
    var messageDiv = document.createElement('div');
    messageDiv.style.backgroundColor = '#ff0000';
    messageDiv.style.color = 'white';
    messageDiv.style.fontSize = '48px';
    messageDiv.style.fontWeight = 'bold';
    messageDiv.style.textAlign = 'center';
    messageDiv.style.padding = '50px';
    messageDiv.style.borderRadius = '15px';
    messageDiv.style.boxShadow = '0 0 50px rgba(255,0,0,0.7)';
    messageDiv.style.border = '4px solid #fff';
    messageDiv.style.maxWidth = '800px';
    messageDiv.style.zIndex = '999999';
    messageDiv.style.position = 'relative';
    messageDiv.style.lineHeight = '1.6';
    
    messageDiv.innerHTML = '⚠️ You have been blocked.<br><br>You must contact the administrator of Alix_io';
    
    document.body.appendChild(messageDiv);
    
    // منع النقر على أي شيء آخر
    document.addEventListener('click', function(e) {
        if (e.target !== messageDiv) {
            e.preventDefault();
            e.stopPropagation();
        }
    }, true);
})();
