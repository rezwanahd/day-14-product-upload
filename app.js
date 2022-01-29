
let upload_form = document.getElementById("product_upload");
let product_section = document.querySelector(".product_section");
let msg = document.querySelector('.msg');

upload_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let pdct_name = this.querySelector("input[name='name']").value;
  let s_prize = this.querySelector("input[name='s_prize']").value;
  let r_price = this.querySelector("input[name='r_prize']").value;
  let image = this.querySelector("input[name='image']").value;

  /**
   * Form validation
   */

  if (
    pdct_name == "" || s_prize == "" || r_price == "" || image == ""
  ) {
      msg.innerHTML = `<p class = "alert alert-danger">All Fields Are Required</p>`

    
  } else {
    /**
     * Get data from local stirage
     */
    let input_arry;

    if (get_data("products")) {
      input_arry = get_data("products");
    } else {
      input_arry = [];
    }

    /**
     * Push data to arry
     */
    input_arry.push({
      Name: pdct_name,
      Sell_prize: s_prize,
      reguller_prize: r_price,
      Image: image,
    });

    /**
     * Send data to local storage
     */
    set_data("products", input_arry);
    product();
  }
});
product();

/**
 * Data send to DOM
 */
function product() {
  let all_product = get_data("products");

  let p_data = "";
  all_product.map((data) => {
    p_data += ` <div class="col-md-4">
              <div class="card-deck">
                <div class="card shadow my-3">
                  <img class="card-img-top" src="
                    ${data.Image}
                   "
                  />
                  <div class="card-body">
                    <h4 class="card-title text-capitalize">${data.Name}</h4>
                    <div class="product-price">
                      <span class="r_price"> ${data.reguller_prize} ৳ </span>
                      <span class="s_price h5">${data.Sell_prize} ৳ </span>
                    </div>
                    <div
                      class="d-flex justify-content-between align-items-baseline"
                    >
                      <div class="add_card">
                        <i
                          class="text-danger h4 fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                      </div>
                      <button class="btn-primary w-75">Add to card</button>
                      <div class="love">
                        <i
                          class="text-danger h4 fa fa-heart-o"
                          aria-hidden="true"
                        ></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>`;
    product_section.innerHTML = p_data;
  });
}