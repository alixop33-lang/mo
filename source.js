(function() {
    // إخفاء كل محتوى الصفحة الأصلي
    document.documentElement.style.height = '100%';
    document.body.style.height = '100%';
    
    // مسح كل محتوى الصفحة
    document.body.innerHTML = '';
    
    // إضافة خلفية سوداء للصفحة
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.backgroundColor = '#000';
    document.body.style.minHeight = '100vh';
    document.body.style.display = 'flex';
    document.body.style.justifyContent = 'center';
    document.body.style.alignItems = 'center';
    document.body.style.fontFamily = 'Arial, sans-serif';
    
    // إنشاء عنصر الرسالة
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
    messageDiv.style.margin = '20px';
    messageDiv.style.lineHeight = '1.6';
    messageDiv.style.direction = 'ltr';
    
    messageDiv.innerHTML = '⚠️ You have been blocked.<br><br>You must contact the administrator of Alix_io';
    
    // إضافة الرسالة للصفحة
    document.body.appendChild(messageDiv);
    
    // منع التفاعل مع أي شيء آخر
    document.body.style.pointerEvents = 'none';
    messageDiv.style.pointerEvents = 'auto';
})();
