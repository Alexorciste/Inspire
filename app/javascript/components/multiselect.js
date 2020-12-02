import $ from 'jquery';
import select2 from 'select2';

const multipleSelect = () => {
  $(document).ready(function() {
    $('#band_user').select2();
  });
}

export { multipleSelect };
