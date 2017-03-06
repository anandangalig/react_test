<?
function my_function($target_number){
  for( $i = 1; $i <= $target_number; $i++){
    if(($i % 3) == 0) {
      echo "$i \n";
    } else {
      echo "$i";
    }
  }
}
my_function(47);
?>
