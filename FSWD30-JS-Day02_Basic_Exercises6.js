/* Basic 6 | Error handling

Using try...catch block, handle the error that occurs in the following code:



<!DOCTYPE html>

<html>

<head>

    <title></title>

</head>

<body>

    <p id='message'></p>

    <script type="text/javascript">

    var person = prompts("Please enter your name", "Harry Potter");

    document.getElementById("message").innerHTML =

        "Hello " + person + "! How are you today?";

    </script>

</body>

</html>

Once the error is caught display an user friendly message on the screen "An error has occurred...The <thing> must be fixed".

The <thing> is the part of the code that cause the error.

*/