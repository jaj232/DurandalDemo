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
session_start();
if(isset($_SESSION['AUTH']) && $_SESSION['AUTH'] == true){
	$sql = "SELECT ref_num, summary, current_status, logged, end_user, min_to_breach 
			FROM a_incident ";
	$result = mysqli_query($conn, $sql) or die("Error in Selecting " . mysqli_error($conn));
	$emparray = array();
	while($row = mysqli_fetch_assoc($result))
	{
		$emparray[] = $row;
	}
	echo json_encode($emparray);
}
mysqli_close($conn);
?> 