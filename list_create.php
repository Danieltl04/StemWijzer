<?php
    if(isset($_POST['submit'])) {
        require 'model/db.php';     // maak verbinding met database via $db
        require 'model/list_model.php'; // haal functie list_store binnen

        $list_name = $_POST['list_name'];

        list_store($db, $list_name);
    }

?>

<?php include 'views/header.inc.php'; ?>

<div class="w3-row-padding">
  

  <div class="w3-card-4">

    <div class="w3-container w3-green">
    <h2>Nieuwe lijst</h2>
    </div>

    <form class="w3-container" method="POST" action="#" >

        <label>Naam</label>
        <input class="w3-input" type="text" name="list_name">

        <input type="submit" class="w3-btn w3-padding w3-green" 
        style="width:120px" name="submit"></input>

    </form>

    </div>

  <!-- End Grid -->
  </div>



<?php
    var_dump($_POST); 
?>


  <?php include 'views/footer.inc.php'; ?>