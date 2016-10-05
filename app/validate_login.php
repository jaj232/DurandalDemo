 <?php
$servername = "XXX";
$username = "XXX";
$password = "XXX";
$dbname = "XXX";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
$user = $_POST['username'];
$pass = $_POST['password'];
$sql = "SELECT * FROM user_name WHERE username=$user and password=$pass ";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) == 1)
{
	session_start();
	$_SESSION['AUTH'] = true;
	echo true;
}
else
{
	echo false;
}
mysqli_close($conn);
?> 