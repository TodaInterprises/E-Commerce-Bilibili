
document.getElementById("showTotal").style.display = "none";
document.getElementById("none").style.display = "none";
function calculateTotal() {
    let totalAmount = 0.00;
    const productElements = document.querySelectorAll('#products input[type="checkbox"]');
    let checkO = document.getElementById("product1");
    let checkT = document.getElementById("product2");
    let checkTh = document.getElementById("product3");
    let txt = document.getElementById("none");
    for (const product of productElements) {
      if (product.checked) {
        totalAmount += parseFloat(product.value);
      }
    }
  
    let deliveryFee = 150.00;
    let discountAmount = 0.00;
  
    
    let totalDisplay = document.getElementById('total-amount');
    let deliveryDisplay = document.getElementById('delivery-fee');
    let discountDisplay = document.getElementById('discount-amount');
    let grandTotalDisplay = document.getElementById('grand-total-amount');
  
    totalDisplay.textContent = totalAmount.toFixed(2);
    deliveryDisplay.textContent = deliveryFee.toFixed(2);
    discountDisplay.textContent = discountAmount.toFixed(2);
    grandTotalDisplay.textContent = (totalAmount + deliveryFee - discountAmount).toFixed(2);
    
    if (totalAmount > 1500.00) {
        deliveryFee = 0.00;
        discountAmount = totalAmount * 0.1;
      }
      
      if(checkO.checked == false && checkTh.checked == false && checkTh.checked == false){
          txt.style.display = "block";
          document.getElementById("showTotal").style.display = "none";
      }else if(checkT.checked == true || checkO.checked == true || checkTh.checked == true){
        txt.style.display = "none";
        document.getElementById("showTotal").style.display = "block";
      }
    
  }
  function productSelect(){
    let prdSel1 = document.getElementById("productSelect1");
    let prdSel2 = document.getElementById("productSelect2");
    let prdSel3 = document.getElementById("productSelect3");
    let check = document.getElementById("product1");
    let check2 = document.getElementById("product2");
    let check3 = document.getElementById("product3");
    if (prdSel1.click = false){
      check.checked = true;
      if(prdSel1.click = true){
        check.checked = false;
      }
    }else if(prdSel2.click = false){
      check2.checked = true;
      if(prdSel2.click = true){
        check2.checked = false;
      }
    }else if(prdSel3.click = false){
      check3.checked = true;
      if(prdSel3.click = true){
        check3.checked = false;
      }
    }
  }