const cattle_infromation_section = async () => {
  const cattleData = await fetch("./js/data.json");
  const cattleInfo = await cattleData.json();
  const cattleInfoRow = document.getElementById("cattle-info-row");
  cattleInfo.map((cattle) => {
    //  Cattle Image Column Div
    const { img_url, status } = cattle;
    const colCattleImgDiv = document.createElement("div");
    colCattleImgDiv.classList = [
      "col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12 align-self-center mt-5 mx-auto position-relative",
    ];
    colCattleImgDiv.innerHTML = `
  <div class="cattle-img-section d-flex flex-wrap justify-content-center">
    ${
      status === "Deactivated"
        ? `<h4><span class="badge bg-danger position-absolute" style="z-index:1;">Sold Out</span></h4>
            <img src="${img_url}" class="img-fluid img-responsive img-width-height" style="filter:opacity(0.5)"/>
            
        `
        : `<img src="${img_url}" class="img-fluid img-responsive img-width-height"/>
        
        `
    }
  </div>
`;

    cattleInfoRow.appendChild(colCattleImgDiv);
    colCattleImgDiv.innerHTML;
    const {
      id,
      age,
      weight,
      birth,
      region,
      gender,
      price,
      cattle_status,
      title,
    } = cattle;
    const colCattleInfoCardDiv = document.createElement("div");
    colCattleInfoCardDiv.classList = [
      "col-lg-6 col-xl-6 col-xxl-6 col-md-6 col-sm-12 col-12",
    ];
    colCattleInfoCardDiv.innerHTML = `
      <div class="price ps-md-5 d-flex w-50 justify-content-center ms-md-5">
      <h4>Rs.${price}</h4>
    </div>
    <div class="card d-grid mx-auto" style="width:24rem">
      <div class="card-header bg-dark text-white-50">
        <h4 class="card-title">
          Cattle Information  
        </h4>
      </div>
      <div class="card-body py-3">
    <div class="clearfix py-2">
        <span class="float-start">Title: </span>
        <span class="float-end">${title}</span>
    </div>
    <div class="clearfix py-2">
        <span class="float-start">Age: </span>
        <span class="float-end">${age}</span>
     </div>
       <div class="clearfix py-2">
        <span class="float-start">Weight: </span>
        <span class="float-end">${weight}</span>
     </div>
    <div class="clearfix py-2 border border-2 border-bottom-2 border-top-0 border-start-0 border-end-0 border-warning">
        <span class="float-start">Gender: </span>
        <span class="float-end">${gender}</span>
     </div>
     <!-- Modal Form Start -->
     <div
     class="modal fade cattle_modal"
     id="cattle_form${id}"
     tabindex="-1"
     aria-labelledby="exampleModalLabel"
     aria-hidden="true"
   >
     <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-header">
           <h5 class="modal-title" id="exampleModalLabel">
             Make an offer
           </h5>
           <button
             type="button"
             id="close_form_${id}"
             class="btn-close"
             data-bs-dismiss="modal"
             aria-label="Close"
           ></button>
         </div>
         <div class="modal-body">
           <div class="mb-3">
             <label class="form-label">Full Name </label>
             <input
               type="text"
               name="name"
               class="form-control"
               placeholder="Enter full name"
               id="full_name_${id}"
               oninput="enableSendButton(${id})"
             />
           </div>
           <div class="mb-3">
             <label class="form-label">Email Address</label>
             <input
               type="email"
               name="email"
               class="form-control"
               placeholder="Enter email address"
               id="email_address_${id}"
               oninput="enableSendButton(${id})"
             />
           </div>
           <div class="mb-3">
             <label class="form-label">Phone Number</label>
             <input
               type="text"
               name="phone"
               class="form-control"
               placeholder="Enter phone number"
               id="phone_number_${id}"
               oninput="enableSendButton(${id})"
             />
           </div>
           <div class="mb-3">
             <label class="form-label">Delivery Address </label>
             <input
               type="text"
               name="delivery"
               class="form-control"
               placeholder="Enter delivery address"
               id="delivery_address_${id}"
               oninput="enableSendButton(${id})"
             />
           </div>
           <div class="mb-3">
             <label class="form-label">Offer Amount </label>
             <input
               type="text"
               name="offer"
               class="form-control"
               placeholder="Enter offer amount"
               id="offer_amount_${id}"
               oninput="enableSendButton(${id})"
             />
           </div>
         </div>
         <!-- Cattle info -->
         <div class="mb-3 px-4 d-none row">
           <div class="col-12">
             <h4>Selected Cattle Information:</h4>
           </div>
           <div class="col-4 pb-1">
             <input
               type="text"
               class="form-control"
               readonly
               id="cattle_id_${id}"
               name="cattle-id"
               value="${id}"
             />
           </div>
           <div class="col-4 pb-1">
             <input
               type="text"
               class="form-control"
               readonly
               id="cattle_title_${id}"
               name="cattle-title"
               value="${title}"
             />
           </div>
           <div class="col-4 pb-1">
             <input
               type="text"
               class="form-control"
               readonly
               id="cattle_age_${id}"
               name="cattle-age"
               value="${age}"
             />
           </div>
           <div class="col-4 pb-1">
             <input
               type="text"
               class="form-control"
               readonly
               id="cattle_weight_${id}"
               name="cattle-weight"
               value="${weight}"
             />
           </div>
           <div class="col-4 pb-1">
             <input
               type="text"
               class="form-control"
               readonly
               id="cattle_gender_${id}"
               name="cattle-gender"
               value="${gender}"
             />
           </div>
           <div class="col-4 pb-1">
             <input
               type="text"
               class="form-control"
               readonly
               id="cattle_price_${id}"
               name="cattle-price"
               value="${price}"
             />
           </div>
           <div class="col-4 pb-1">
             <input
               type="text"
               class="form-control d-none"
               id="cattle_status_${id}"
               readonly
               name="cattle-status"
               value="${status}"
             />
           </div>
         </div>
         <div class="modal-footer">
         <div id="success_msg_${id}" class="py-2 w-100 hide-msg">
         Thank You! Your form has been submitted.
        </div>
        <div id="failed_msg_${id}" class="py-2 w-100 hide-msg">
         Sorry! Your form has not been submitted, please check your internet connect or try again.
        </div>
           <div class="d-grid py-2 w-100">
             <button
               type="submit"
               value="submit"
               disabled
               id="btn-user-from${id}"
               onclick="sendMail(${id})"
               class="btn btn-block btn-warning btn-modal-disable"
             >
               Send
               <i class="fa-solid fa-paper-plane" style="color: #000"></i>
             </button>
           </div>
         </div>
       </div>
     </div>
   </div>
     <!-- Modal Form End  -->

  
    <h4 class="card-title pt-3 ">Seller Details</h4>
    <div class="clearfix py-2">
      <span class="float-start">Seller:</span>
      <span class="float-end">Zaman Cattle Farm</span>
    </div>
    <div class="clearfix py-2 border border-2 border-bottom-2 border-top-0 border-start-0 border-end-0 border-warning">
      <span class="float-start">Listing Location:</span>
      <span class="float-end">Korangi, Karachi</span>
    </div>
    <h4 class="card-title pt-3"> Transportation & Delivery</h4>
    <div class="clearfix py-2 border border-2 border-bottom-2 border-top-0 border-start-0 border-end-0 border-warning">
      <span class="float-start p-md-2" style="background:#ccc">Transportation Responsibility</span>
      <span class="float-end ">Seller</span>
    </div>
    ${
      status === "Deactivated"
        ? `<div class="clearfix pt-2">
      <p class="fw-bold py-1">
      To get similar options, please share your details by clicking the button below and seller will contact you shortly
      </p>
       <div class="d-grid">
        <button type="button"
          class="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#cattle_form${id}" 
          id="btn-make-offer">Interested in Similar Cattle</button>
      </div>
      </div>`
        : `<div class="clearfix pt-2">
      <p class="fw-bold py-1">
      To get more information please make your offer and seller will contact you shortly
      </p>
       <div class="d-grid">
        <button type="button"
          class="btn btn-warning"
          data-bs-toggle="modal"
          data-bs-target="#cattle_form${id}" 
          id="btn-make-offer">Make an Offer</button>
      </div>
      </div>`
    }
    </div>
      </div>
    </div>
      `;
    cattleInfoRow.appendChild(colCattleInfoCardDiv);
    const gapColDiv = document.createElement("div");
    gapColDiv.classList = ["col-lg-12 col-md-12 py-5"];
    gapColDiv.innerHTML = `
        <div class="border border-2 border-warning rounded-circle"></div>
      `;
    cattleInfoRow.appendChild(gapColDiv);
  });
};

// sendMail Method for sending mails by emailjs
// const sendMail = async (ID) => {
//   var form_data = {
//     // accessing  user form data
//     full_name: document.getElementById(`full_name_${ID}`).value,
//     email_address: document.getElementById(`email_address_${ID}`).value,
//     phone_number: document.getElementById(`phone_number_${ID}`).value,
//     delivery_address: document.getElementById(`delivery_address_${ID}`).value,
//     offer_amount: document.getElementById(`offer_amount_${ID}`).value,

//     // accessing selected cattle data
//     cattle_id: document.getElementById(`cattle_id_${ID}`).value,
//     cattle_title: document.getElementById(`cattle_title_${ID}`).value,
//     cattle_age: document.getElementById(`cattle_age_${ID}`).value,
//     cattle_weight: document.getElementById(`cattle_weight_${ID}`).value,
//     cattle_gender: document.getElementById(`cattle_gender_${ID}`).value,
//     cattle_price: document.getElementById(`cattle_price_${ID}`).value,
//     cattle_status: document.getElementById(`cattle_status_${ID}`).value,
//   };
//   const close_form_btn = document.getElementById(`close_form_${ID}`);
//   const msgShowSuccess = document.getElementById(`success_msg_${ID}`);
//   const msgShowFailed = document.getElementById(`failed_msg_${ID}`);
//   msgShowFailed.style.display = "none";
//   msgShowSuccess.style.display = "none";
//   const serviceID = "service_nn33naa";
//   const templateID = "template_s50nwq5";
//   try {
//     const res = await emailjs.send(serviceID, templateID, form_data);
//     const sendButton = document.getElementById(`btn-user-from${ID}`);
//     if ((sendButton.disabled = true)) {
//       document.getElementById(`full_name_${ID}`).value = "";
//       document.getElementById(`email_address_${ID}`).value = "";
//       document.getElementById(`phone_number_${ID}`).value = "";
//       document.getElementById(`delivery_address_${ID}`).value = "";
//       document.getElementById(`offer_amount_${ID}`).value = "";
//       msgShowSuccess.style.display = "grid";
//     }
//     setTimeout(() => {
//       close_form_btn.click();
//     }, 5000);
//   } catch (failed_error) {
//     const sendButton = document.getElementById(`btn-user-from${ID}`);
//     // msgShowFailed.style.display = "grid";
//     if ((sendButton.disabled = true)) {
//       document.getElementById(`full_name_${ID}`).value = "";
//       document.getElementById(`email_address_${ID}`).value = "";
//       document.getElementById(`phone_number_${ID}`).value = "";
//       document.getElementById(`delivery_address_${ID}`).value = "";
//       document.getElementById(`offer_amount_${ID}`).value = "";
//       msgShowFailed.style.display = "grid";
//     }
//     setTimeout(() => {
//       close_form_btn.click();
//     }, 5000);
//   }
// };
const sendMail = async (ID) => {
  var form_data = {
    // accessing user form data
    full_name: document.getElementById(`full_name_${ID}`).value,
    email_address: document.getElementById(`email_address_${ID}`).value,
    phone_number: document.getElementById(`phone_number_${ID}`).value,
    delivery_address: document.getElementById(`delivery_address_${ID}`).value,
    offer_amount: document.getElementById(`offer_amount_${ID}`).value,

    // accessing selected cattle data
    cattle_id: document.getElementById(`cattle_id_${ID}`).value,
    cattle_title: document.getElementById(`cattle_title_${ID}`).value,
    cattle_age: document.getElementById(`cattle_age_${ID}`).value,
    cattle_weight: document.getElementById(`cattle_weight_${ID}`).value,
    cattle_gender: document.getElementById(`cattle_gender_${ID}`).value,
    cattle_price: document.getElementById(`cattle_price_${ID}`).value,
    cattle_status: document.getElementById(`cattle_status_${ID}`).value,
  };

  const close_form_btn = document.getElementById(`close_form_${ID}`);
  const msgShowSuccess = document.getElementById(`success_msg_${ID}`);
  const msgShowFailed = document.getElementById(`failed_msg_${ID}`);
  msgShowSuccess.style.display = "none";
  msgShowFailed.style.display = "none";
  const serviceID = "service_nn33naa";
  const templateID = "template_s50nwq5";

  try {
    const res = await emailjs.send(serviceID, templateID, form_data);
    const sendButton = document.getElementById(`btn-user-from${ID}`);
    if (sendButton.disabled = true) {
      document.getElementById(`full_name_${ID}`).value = "";
      document.getElementById(`email_address_${ID}`).value = "";
      document.getElementById(`phone_number_${ID}`).value = "";
      document.getElementById(`delivery_address_${ID}`).value = "";
      document.getElementById(`offer_amount_${ID}`).value = "";
      msgShowSuccess.style.display = "grid";
    }
    setTimeout(() => {
      close_form_btn.click();
    }, 5000);
  } catch (failed_error) {
    const sendButton = document.getElementById(`btn-user-from${ID}`);
    if (sendButton.disabled = true) {
      document.getElementById(`full_name_${ID}`).value = "";
      document.getElementById(`email_address_${ID}`).value = "";
      document.getElementById(`phone_number_${ID}`).value = "";
      document.getElementById(`delivery_address_${ID}`).value = "";
      document.getElementById(`offer_amount_${ID}`).value = "";
      msgShowFailed.style.display = "grid";
    }
    setTimeout(() => {
      close_form_btn.click();
    }, 5000);
  }
};

const myEmailJS = async () => {
  emailjs.init("gD2q1thlOyn2WSyAO");
};
myEmailJS();

cattle_infromation_section();
const enableSendButton = (id) => {
  const fullName = document.getElementById(`full_name_${id}`).value;
  const emailAddress = document.getElementById(`email_address_${id}`).value;
  const phoneNumber = document.getElementById(`phone_number_${id}`).value;
  const deliveryAddress = document.getElementById(
    `delivery_address_${id}`
  ).value;
  const offerAmount = document.getElementById(`offer_amount_${id}`).value;
  const sendButton = document.getElementById(`btn-user-from${id}`);
  if (
    fullName !== "" &&
    emailAddress !== "" &&
    phoneNumber !== "" &&
    deliveryAddress !== "" &&
    offerAmount !== ""
  ) {
    sendButton.disabled = false;
  } else {
    sendButton.disabled = true;
  }
};
