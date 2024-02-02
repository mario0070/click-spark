import React from 'react'

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-sm bg-light navbar-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand fw-bold fs-3" href="#"><i class="fa-solid fa-computer-mouse"></i> Click Spack</a>
            <button class="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="/">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/about">About US</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/signup">Register</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/login">Login</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
  )
}
