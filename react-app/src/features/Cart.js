import React from "react";
import Payment from "./Payment";

function Cart() {
    return (
        <div>
            <div class="container my-5">

                <div class="card my-5">
                    <div class="card-header">
                        <div class="d-flex flex-row justify-content-between">
                            <div class="p-2">
                                <input type="checkbox"/>
                            </div>
                            <div class="p-2">
                                <button type="button" class="close" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">Cactus</h5>
                        <div class="d-flex flex-row justify-content-around">
                            <div class="p-2">
                                <img src="https://www.asianbioplex.com/wp-content/uploads/2016/04/Cactus-Powder.jpg" class="image rounded" alt="..."></img>
                            </div>
                            <div class="p-2">
                                <div class="d-flex flex-column">
                                    <div class="p-2">
                                        <p class="card-text">This is a Cactus!</p>
                                    </div>
                                    <div class="p-2">
                                        <div class="input-group input-group-sm mb-3">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="inputGroup-sizing-sm">Quantity</span>
                                            </div>
                                            <input type="text" class="form-control" aria-label="Quantity" aria-describedby="inputGroup-sizing-sm"/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>

            </div>
                <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark">
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <ul class="navbar-nav mx-5">
                            <li class="nav-item active">
                                <input type="checkbox"/>
                            </li>
                        </ul>
                    </div>
                    <div class="my-2 mx-5">
                        <p class="text-light">Total : 12,000</p>
                    </div>
                    <a class="navbar-brand" href="#"><button type="button" class="btn btn-primary">Checkout</button></a>
                </nav>
            </div>
    );
}
export default Cart;