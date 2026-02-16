<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تم الحظر</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #000;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        .blocked-message {
            background-color: #ff0000;
            color: white;
            font-size: 32px;
            font-weight: bold;
            text-align: center;
            padding: 40px;
            border-radius: 10px;
            box-shadow: 0 0 30px rgba(255,0,0,0.5);
            border: 3px solid #fff;
            max-width: 600px;
        }
        
        @media (max-width: 600px) {
            .blocked-message {
                font-size: 20px;
                padding: 20px;
                margin: 20px;
            }
        }
    </style>
</head>
<body>
    <div class="blocked-message">
        ⚠️ You have been blocked.<br>
        You must contact the administrator of Alix_io
    </div>
</body>
</html>
