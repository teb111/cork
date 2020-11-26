$(document).ready(function () {
  var max_fields = 10; //maximum input boxes allowed
  var wrapper = $(".form-container"); //Fields wrapper
  var add_button = $(".add_field_button"); //Add button ID

  var x = 1; //initlal text box count
  $(add_button).click(function (e) {
    //on add input button click
    e.preventDefault();
    if (x < max_fields) {
      //max input box allowed
      x++; //text box increment
      $(wrapper).append(`
      <div>
      <a href="" class="shadow-none badge outline-badge-primary remove_field mb-3">Remove</a> <br />
      <label for="basic-url">Time</label>
            <div class="input-group mb-4">
    <input type="text" class="form-control" placeholder="Time" aria-label="Date">
  </div>
  <label for="basic-url">Date</label>
  <div class="input-group mb-5">
    <input type="date" class="form-control" placeholder="Date" aria-label="Date" aria-describedby="basic-addon2">
    
  </div>
  
  <label for="basic-url">Status</label>
  <div class="input-group mb-4">
    <select class="btn btn-primary col-lg-8" data-width="fit">
        <option value="Bulk Actions">Bulk Actions</option>
        <option value="Edit">Edit</option>
        <option value="Move To Trash">Move To Trash</option>
        
    </select>
  </div>

  <label for="basic-url">Remarks</label>
  <div class="input-group mb-4">
    <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
  
  <label for="basic-url">Address</label>
  <div class="input-group mb-5">
    <input type="text" class="form-control" placeholder="address" aria-label="Date" aria-describedby="basic-addon2">
    
  </div>

  <label for="basic-url">Link Gmap</label>
  <div class="input-group mb-4">
    <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
 
  </div>
            `); //add input box
    }
  });

  $(wrapper).on("click", ".remove_field", function (e) {
    //user click on remove text
    e.preventDefault();
    $(this).parent("div").remove();
    x--;
  });
});
