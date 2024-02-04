import React, { useState } from 'react'
import { useCookies } from 'react-cookie'

export default function NavBar() {
    const [cookie, setCookie, removeCookie] = useCookies("")
    const [user, setUser] = useState(cookie.SparkUser ??  "")
    const [logOuts, setlogout, removeLogout] = useCookies(["SparkUser"])

    const logOut = (e) => {
        e.preventDefault()
        Swal.fire({
            title: "Log Out?",
            text: "Your account will be log out!!",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#32a892",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, log out!"
        }).then((result) => {
            if (result.isConfirmed) {
              removeLogout(["SparkUser"])
              window.location.href = "/login"
              Swal.fire({
                title: "Logged out!",
                text: "Account is log out successfully.",
                icon: "success"
              });
            }
        });
    }

    return (
        <nav class="navbar navbar-expand-sm bg-light navbar-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold fs-3" href="/"><i class="fa-solid fa-computer-mouse"></i> Click Spack</a>
                <button class="navbar-toggler text-white bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="/">- Home</a>
                    </li>
                    { !user &&
                        <>
                            <li class="nav-item">
                            <a class="nav-link" href="/signup">- Register</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/login">- Login</a>
                            </li>
                        </>
                    }
                  {user &&
                    <>
                        <li class="nav-item">
                            <a class="nav-link" href="/dashboard">- Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/task">- All Task</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/withdraw">- Withdraw Earnings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/user-profile">- User Profile</a>
                        </li>
                        <li class="nav-item pb-4" onClick={logOut}>
                            <a class="nav-link btn bg-danger log_out fw-bold" href="">Log Out <i class="fa-solid fa-arrow-right"></i></a>
                        </li>
                    </>
                  }
                </ul>
                </div>
            </div>
        </nav>
    )
}
