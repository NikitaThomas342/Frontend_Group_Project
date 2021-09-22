import React from "react";

function Payment() {
    return (
        <div>
            <div class="container">
                <div class="d-flex flex-column">
                    <div id="address" class="p-2">

                    </div>
                    <div id="items" class="p-2">
                        <div class="d-flex flex-column">
                            <div class="p-2">
                                <div class="d-flex flex-row">
                                    <div class="p-2">
                                        <img src=""/>
                                    </div>
                                    <div class="p-2">
                                        <p>asdasdasdasdasdasdasd</p>
                                    </div>
                                </div>
                            </div>

                            <div class="p-2">
                                <div class="d-flex flex-row">
                                    <div class="p-2">
                                        <img src=""/>
                                    </div>
                                    <div class="p-2">
                                        <p>asdasdasdasdasdasdasd</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="qrcodeandpaymentdetail" class="p-2">
                        <div class="d-flex flex-row">
                            <div class="p-2">
                                <img src=""/>
                            </div>
                            <div class="p-2">
                                <p>asdasdasdasdasdasdasd</p>
                            </div>
                        </div>
                    </div>
                    <div id="totalconfirm" class="p-2">
                        <div class="d-flex flex-row justify-content-end">
                            <div class="p-2">
                                <h2>Price:12000</h2>
                            </div>
                            <div class="p-2">
                                <a class="navbar-brand" href="#"><button type="button" class="btn btn-success">Checkout</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Payment;