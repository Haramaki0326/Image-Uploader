<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>TOP</title>
</head>
<body>
    This is Top Page
    <ul>
        <li><a href="{{ route('image.input')}}">登録画面</a></li>
        <li><a href="{{ route('image.list')}}">一覧画面</a></li>
    </ul>
</body>
</html>