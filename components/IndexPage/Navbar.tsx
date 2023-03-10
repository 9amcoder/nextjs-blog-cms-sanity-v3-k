import React from 'react'
import styled from 'styled-components'

const AlertDiv = styled.div`
  background: linear-gradient(
    90deg,
    rgba(248, 253, 29, 0.7455575980392157) 51%,
    rgba(255, 255, 255, 0.36740633753501406) 52%
  );
`

function Navbar(props: {
  logo?: string
  navButton1?: string
  navButton2?: string
  navButton3?: string
  navButton4?: string
  navButton5?: string
  navButton6?: string
}) {
  const {
    navButton1,
    navButton2,
    navButton3,
    navButton4,
    navButton5,
    navButton6,
    logo,
  } = props
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <li>
              <a>{navButton1}</a>
            </li>
            {/* <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li> */}
            <li>
              <a>{navButton2}</a>
            </li>
            <li>
              <a>{navButton3}</a>
            </li>
            <li>
              <a>{navButton4}</a>
            </li>
            <li>
              <a>{navButton5}</a>
            </li>
            <li>
              <a>{navButton6}</a>
            </li>
          </ul>
        </div>
        <a className="btn-ghost btn text-xl normal-case">{logo}</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a>{navButton1}</a>
          </li>
          {/* <li tabIndex={0}>
            <a>
              Parent
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
              </svg>
            </a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li> */}
          <li>
            <a>{navButton2}</a>
          </li>
          <li>
            <a>{navButton3}</a>
          </li>
          <li>
            <a>{navButton4}</a>
          </li>
          <li>
            <a>{navButton5}</a>
          </li>
          <li>
            <a>{navButton6}</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <AlertDiv className="btn-ghost btn text-xl normal-case">
          GET QUOTE
        </AlertDiv>
      </div>
    </div>
  )
}

export default Navbar
