<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>⚠️ تم الحظر</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        html, body {
            height: 100%;
            width: 100%;
        }
        
        body {
            background-color: #000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: Arial, sans-serif;
        }
        
        .blocked-container {
            text-align: center;
        }
        
        .blocked-message {
            background-color: #ff0000;
            color: white;
            font-size: 48px;
            font-weight: bold;
            padding: 50px;
            border-radius: 15px;
            box-shadow: 0 0 50px rgba(255,0,0,0.7);
            border: 4px solid #fff;
            max-width: 900px;
            margin: 20px;
            line-height: 1.6;
        }
        
        .warning-icon {
            font-size: 80px;
            display: block;
            margin-bottom: 20px;
        }
        
        @media (max-width: 768px) {
            .blocked-message {
                font-size: 32px;
                padding: 30px;
            }
            
            .warning-icon {
                font-size: 60px;
            }
        }
        
        @media (max-width: 480px) {
            .blocked-message {
                font-size: 24px;
                padding: 20px;
            }
            
            .warning-icon {
                font-size: 50px;
            }
        }
    </style>
</head>
<body>
    <div class="blocked-container">
        <div class="blocked-message">
            <span class="warning-icon">⚠️</span>
            You have been blocked.<br><br>
            You must contact the administrator of Alix_io
        </div>
    </div>
</body>
</html>
