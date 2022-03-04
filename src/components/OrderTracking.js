import React from "react";

const OrderTracking = () => {
  return (
    <div>
      <div class="wrapper">
        <div class="margin-area">
          <div class="dot one">1</div>
          <div class="dot two">2</div>
          <div class="dot three">3</div>
          <div class="dot four">4</div>
          <div class="progress-bar first"></div>
          <div class="progress-bar second"></div>
          <div class="progress-bar third"></div>
          <div class="message message-1">
           Order confirmed
            <div>
              <div class="message message-2">
Being Baked                <div>
                  <div class="message message-3">
                    Out for delivery
                    <div>
                      <div class="message message-4">
                        Delivered<div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
