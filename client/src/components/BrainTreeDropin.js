import React, { useState, useEffect } from "react";
import dropin from "braintree-web-drop-in";
// import { Button } from "reactstrap";

function BrainTreeDropin(props) {
  const { show, onPaymentCompleted } = props;
  const [clientToken, setClientToken] = useState('')
  const [braintreeInstance, setBraintreeInstance] = useState(undefined);
  const token = localStorage.getItem("jwt");

  useEffect(()=>{
    fetch("/client_token",{
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      }
    }).then((res) => {
      if (res.ok) {
        res.json().then((data) => setClientToken(data));
      }
    })
},[])

// console.log(clientToken)
  useEffect(() => {
    if (show) {
      const initializeBraintree = () =>
        dropin.create(
          {
            // insert your tokenization key or client token here
            authorization: clientToken,
            container: "#braintree-drop-in-div",
          },
          function (error, instance) {
            if (error) console.error(error);
            else setBraintreeInstance(instance);
          }
        );

      if (braintreeInstance) {
        braintreeInstance.teardown().then(() => {
          initializeBraintree();
        });
      } else {
        initializeBraintree();
      }
    }
  }, [show]);

  return (
    <div style={{ display: `${show ? "block" : "none"}` }}>
      <div id={"braintree-drop-in-div"} />

      <button
        className={"braintreePayButton"}
        type="primary"
        disabled={!braintreeInstance}
        onClick={() => {
          if (braintreeInstance) {
            braintreeInstance.requestPaymentMethod((error, payload) => {
              if (error) {
                console.error(error);
              } else {
                const paymentMethodNonce = payload.nonce;
                console.log("payment method nonce", payload.nonce);

                fetch("/client_nonce",{
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({payment_method_nonce: payload.nonce})
                }).then(res=>{
                    if(res.ok){
                        res.json().then(data=>console.log(data))
                    }else{
                        res.json().then(err=>console.log(err))
                    }
                })

                alert(`Payment completed with nonce=${paymentMethodNonce}`);

                onPaymentCompleted();
              }
            });
          }
        }}
      >
        {"Pay"}
      </button>
    </div>
  );
}
export default BrainTreeDropin;
