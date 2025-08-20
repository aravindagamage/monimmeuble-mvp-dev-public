// src/components/Dashboard.js

import React from "react";
import { Container, Row, Col, Nav, Navbar } from 'react-bootstrap';
import logo from '/imgs/logo.svg';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FaPlus } from 'react-icons/fa';
import { FaSearch } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';

import { FaArrowRight } from 'react-icons/fa';
import { FaArrowLeft } from 'react-icons/fa';



const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row mvp-main-container">
        <div className="col-12 col-lg-3 left-nav-mod">
          <section>
            {/* Mobile Navbar */}
            <nav className="navbar d-lg-none navbar-light bg-white flex-wrap">
              <div className="container-fluid">
                <div className="d-flex w-100 align-items-center">
                  <a className="navbar-brand" href="#">
                    <img
                      className="img-fluid"
                      src="/imgs/logo.svg"
                      alt="alt"
                      width="auto"
                    />
                  </a>
                  <button className="navbar-burger navbar-toggler bg-primary-light ms-auto" type="button">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>
            </nav>

            {/* Desktop Sidebar */}
            <div
              className="position-relative navbar-menu d-none d-lg-block"
              style={{ zIndex: 9999 }}
            >
              <div
                className="navbar-backdrop d-lg-none position-fixed top-0 end-0 bottom-0 start-0 bg-dark"
                style={{ opacity: 0.5 }}
              ></div>
              <div className="position-fixed top-0 start-0 bottom-0 w-75 mw-sm-xs  bg-white overflow-auto mvp-nav-inner-mod">
                {/* Logo Section */}
                <div className="px-6 pb-6 pt-6 position-relative border-bottom border-secondary-light mvp-left-panel-top">
                  <div className="d-inline-flex align-items-center">
                    <a href="#">
                      <img
                        className="img-fluid"
                        src="/imgs/logo.svg"
                        alt="alt"
                        width="200px"
                      />
                    </a>
                  </div>
                </div>

                {/* Navigation Menu */}
                <div className="py-6 px-6 mvp-left-panel-outer mvp-left-panel-middle">
                  <div className="mvp-left-panel-inner">
                    <ul className="nav flex-column mb-8 mvp-lpi-top">
                      <li className="nav-item nav-pills">
                        <a className="nav-link p-3 d-flex align-items-center mvp-nav-item" href="/">
                          <span className="d-inline-flex ms-3 me-3">

                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 15.1292V12.6292" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M8.39166 2.47919L2.61666 7.10419C1.96666 7.62085 1.55 8.71252 1.69166 9.52919L2.8 16.1625C3 17.3459 4.13333 18.3042 5.33333 18.3042H14.6667C15.8583 18.3042 17 17.3375 17.2 16.1625L18.3083 9.52919C18.4417 8.71252 18.025 7.62085 17.3833 7.10419L11.6083 2.48752C10.7167 1.77085 9.275 1.77085 8.39166 2.47919Z" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </span>
                          <span className="small me-auto">Dashboard</span>
                          <span className="d-inline-block "></span>
                        </a>
                      </li>
                      <li className="nav-item nav-pills">
                        <a className="nav-link  p-3 d-flex align-items-center" href="/planner">
                          <span className="d-inline-flex  ms-3 me-3">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.75833 12.3792L9.00833 13.6292L12.3417 10.2959" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M8.33333 5.12923H11.6667C13.3333 5.12923 13.3333 4.2959 13.3333 3.46257C13.3333 1.7959 12.5 1.7959 11.6667 1.7959H8.33333C7.5 1.7959 6.66666 1.7959 6.66666 3.46257C6.66666 5.12923 7.5 5.12923 8.33333 5.12923Z" stroke="#07284A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M13.3333 3.47925C16.1083 3.62925 17.5 4.65425 17.5 8.46258V13.4626C17.5 16.7959 16.6667 18.4626 12.5 18.4626H7.5C3.33333 18.4626 2.5 16.7959 2.5 13.4626V8.46258C2.5 4.66258 3.89167 3.62925 6.66667 3.47925" stroke="#07284A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </span>
                          <span className="small  me-auto">Planner</span>
                        </a>
                      </li>
                      <li className="nav-item nav-pills">
                        <a className="nav-link mvp-dashboard-item-selected text-white  p-3 d-flex align-items-center" href="/valuation">
                          <span className="d-inline-flex  ms-3 me-3">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M5.73334 15.2543V13.5293" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                              <path d="M10 15.2543V11.8043" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                              <path d="M14.2667 15.2543V10.0709" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                              <path d="M14.2667 5.00427L13.8833 5.45427C11.7583 7.93761 8.90834 9.69594 5.73334 10.4876" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                              <path d="M11.825 5.00427H14.2667V7.43761" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M7.5 18.4626H12.5C16.6667 18.4626 18.3333 16.7959 18.3333 12.6292V7.62923C18.3333 3.46257 16.6667 1.7959 12.5 1.7959H7.5C3.33333 1.7959 1.66666 3.46257 1.66666 7.62923V12.6292C1.66666 16.7959 3.33333 18.4626 7.5 18.4626Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>


                          </span>
                          <span className="small  me-auto  text-white ">Valuation</span>
                          <span className="d-inline-block "></span>
                        </a>
                      </li>
                      <li className="nav-item nav-pills">
                        <a className="nav-link  p-3 d-flex align-items-center" href="/budget">
                          <span className="d-inline-flex  ms-3 me-3">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M15.0333 11.4207C14.6833 11.7624 14.4833 12.2541 14.5333 12.7791C14.6083 13.6791 15.4333 14.3374 16.3333 14.3374H17.9167V15.3291C17.9167 17.0541 16.5083 18.4624 14.7833 18.4624H5.21667C3.49167 18.4624 2.08334 17.0541 2.08334 15.3291V9.72074C2.08334 7.99574 3.49167 6.5874 5.21667 6.5874H14.7833C16.5083 6.5874 17.9167 7.99574 17.9167 9.72074V10.9207H16.2333C15.7667 10.9207 15.3417 11.1041 15.0333 11.4207Z" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M2.08334 10.4707V6.66245C2.08334 5.67078 2.69167 4.78741 3.61667 4.43741L10.2333 1.93741C11.2667 1.54575 12.375 2.31244 12.375 3.42077V6.58743" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M18.799 11.7709V13.4876C18.799 13.9459 18.4323 14.3209 17.9657 14.3375H16.3323C15.4323 14.3375 14.6073 13.6792 14.5323 12.7792C14.4823 12.2542 14.6823 11.7625 15.0323 11.4209C15.3407 11.1042 15.7657 10.9209 16.2323 10.9209H17.9657C18.4323 10.9376 18.799 11.3125 18.799 11.7709Z" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M5.83334 10.1292H11.6667" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </span>
                          <span className="small  me-auto">Budget</span>
                          <span className="d-inline-block "></span>
                        </a>
                      </li>
                      <li className="nav-item nav-pills">
                        <a className="nav-link  p-3 d-flex align-items-center" href="/inspections">
                          <span className="d-inline-flex  ms-3 me-3">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M8.33334 14.7124H11.6667" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M1.66666 14.7124V6.37907C1.66666 3.04574 2.5 2.2124 5.83333 2.2124" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M18.3333 14.7124V6.37907C18.3333 3.04574 17.5 2.2124 14.1667 2.2124" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M8.33333 13.3875V16.1292C8.33333 17.7959 7.66666 18.4625 6 18.4625H4C2.33333 18.4625 1.66666 17.7959 1.66666 16.1292V13.3875C1.66666 11.7209 2.33333 11.0542 4 11.0542H6C7.66666 11.0542 8.33333 11.7209 8.33333 13.3875Z" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M18.3333 13.3875V16.1292C18.3333 17.7959 17.6667 18.4625 16 18.4625H14C12.3333 18.4625 11.6667 17.7959 11.6667 16.1292V13.3875C11.6667 11.7209 12.3333 11.0542 14 11.0542H16C17.6667 11.0542 18.3333 11.7209 18.3333 13.3875Z" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                          <span className="small  me-auto">Inspections</span>
                          <span className="d-inline-block "></span>
                        </a>
                      </li>
                      <li className="nav-item nav-pills">
                        <a className="nav-link  p-3 d-flex align-items-center" href="/suppliers">
                          <span className="d-inline-flex  ms-3 me-3">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M1.66666 18.4624H18.3333" stroke="#07284A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M2.45833 18.4625L2.5 8.43751C2.5 7.92918 2.74166 7.44589 3.14166 7.12923L8.97499 2.58755C9.57499 2.12088 10.4167 2.12088 11.025 2.58755L16.8583 7.12088C17.2667 7.43755 17.5 7.92085 17.5 8.43751V18.4625" stroke="#07284A" stroke-width="1.5" stroke-miterlimit="10" stroke-linejoin="round" />
                              <path d="M12.9167 9.2959H7.08334C6.39167 9.2959 5.83334 9.85423 5.83334 10.5459V18.4626H14.1667V10.5459C14.1667 9.85423 13.6083 9.2959 12.9167 9.2959Z" stroke="#07284A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M8.33334 13.6709V14.9209" stroke="#07284A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M8.75 6.37915H11.25" stroke="#07284A" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </span>
                          <span className="small  me-auto">Suppliers</span>
                          <span className="d-inline-block y"></span>
                        </a>
                      </li>
                      <li className="nav-item nav-pills">
                        <a className="nav-link p-3 d-flex align-items-center" href="/financing">
                          <span className="d-inline-flex  ms-3 me-3">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.22656 12.0706C7.22656 13.1456 8.05156 14.0123 9.07656 14.0123H11.1682C12.0599 14.0123 12.7849 13.2539 12.7849 12.3206C12.7849 11.3039 12.3432 10.9456 11.6849 10.7123L8.32656 9.54561C7.66823 9.31227 7.22656 8.95394 7.22656 7.93727C7.22656 7.00394 7.95156 6.24561 8.84323 6.24561H10.9349C11.9599 6.24561 12.7849 7.11227 12.7849 8.18727" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M10 5.12915V15.1292" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.5 18.4626H7.5C3.33333 18.4626 1.66666 16.7959 1.66666 12.6292V7.62923C1.66666 3.46257 3.33333 1.7959 7.5 1.7959H12.5C16.6667 1.7959 18.3333 3.46257 18.3333 7.62923V12.6292C18.3333 16.7959 16.6667 18.4626 12.5 18.4626Z" stroke="#07284A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </span>
                          <span className="small me-auto">Financing</span>
                          <span className="d-inline-block "></span>
                        </a>
                      </li>
                      <li className="nav-item nav-pills">
                        <a className="nav-link  p-3 d-flex align-items-center" href="/Utilities">
                          <span className="d-inline-flex ms-3 me-3">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.5 16.1292H13.5C16 16.1292 17.5 14.3292 17.5 12.1292V7.03915C17.5 5.98915 16.64 5.12915 15.59 5.12915H8.42C7.37 5.12915 6.51 5.98915 6.51 7.03915V12.1292C6.5 14.3292 7.99999 16.1292 10.5 16.1292Z" stroke="#07284A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M9.5 2.12915V5.12915" stroke="#07284A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M14.5 2.12915V5.12915" stroke="#07284A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12 22.1292V16.1292" stroke="#292D32" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </span>
                          <span className="small me-auto">Utilities</span>
                          <span className="d-inline-block "></span>
                        </a>
                      </li>
                      <li className="nav-item nav-pills">
                        <a className="nav-link p-3 d-flex align-items-center" href="/documents">
                          <span className="d-inline-flex ms-3 me-3">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M9 22.1294H15C20 22.1294 22 20.1294 22 15.1294V9.12939C22 4.12939 20 2.12939 15 2.12939H9C4 2.12939 2 4.12939 2 9.12939V15.1294C2 20.1294 4 22.1294 9 22.1294Z" stroke="#07284A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M15.75 9.12939H8.25" stroke="#07284A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M15.75 15.1294H8.25" stroke="#07284A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </span>
                          <span className="small me-auto ">Documents</span>
                          <span className="d-inline-block "></span>
                        </a>
                      </li>
                      <li className="nav-item nav-pills">
                        <a className="nav-link p-3 d-flex align-items-center" href="/ai-assistant">
                          <span className="d-inline-flex ms-3 me-3">
                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M2.91667 17.2124C3.60834 17.9041 4.725 17.9041 5.41667 17.2124L16.25 6.3791C16.9417 5.68743 16.9417 4.57077 16.25 3.8791C15.5583 3.18743 14.4417 3.18743 13.75 3.8791L2.91667 14.7124C2.225 15.4041 2.225 16.5208 2.91667 17.2124Z" stroke="#0E22C9" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M15.0083 7.62085L12.5083 5.12085" stroke="#0E22C9" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M7.08334 2.16257L8.33334 1.7959L7.96667 3.0459L8.33334 4.2959L7.08334 3.92923L5.83334 4.2959L6.2 3.0459L5.83334 1.7959L7.08334 2.16257Z" fill="#0E22C9" />
                              <path d="M3.75 7.16256L5 6.7959L4.63333 8.0459L5 9.2959L3.75 8.92923L2.5 9.2959L2.86667 8.0459L2.5 6.7959L3.75 7.16256Z" fill="#0E22C9" />
                              <path d="M16.25 11.3291L17.5 10.9624L17.1333 12.2124L17.5 13.4624L16.25 13.0957L15 13.4624L15.3667 12.2124L15 10.9624L16.25 11.3291Z" fill="#0E22C9" />
                            </svg>
                          </span>
                          <span className="small me-auto">Assistant</span>
                          <span className="d-inline-block text-secondary"></span>
                        </a>
                      </li>
                    </ul>



                    {/* Settings and Logout */}
                    <ul className="nav flex-column mb-auto mvp-lpi-bottom">
                      <li className="nav-item nav-pills">
                        <a className="nav-link p-3 d-flex align-items-center" href="#">
                          <span className="d-inline-block  ms-3 me-3">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10.0167 2.42505C7.25833 2.42505 5.01666 4.66672 5.01666 7.42505V9.83338C5.01666 10.3417 4.8 11.1167 4.54166 11.55L3.58333 13.1417C2.99166 14.125 3.4 15.2167 4.48333 15.5834C8.075 16.7834 11.95 16.7834 15.5417 15.5834C16.55 15.2501 16.9917 14.0584 16.4417 13.1417L15.4833 11.55C15.2333 11.1167 15.0167 10.3417 15.0167 9.83338V7.42505C15.0167 4.67505 12.7667 2.42505 10.0167 2.42505Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" />
                              <path d="M11.5583 2.6667C11.3 2.5917 11.0333 2.53337 10.7583 2.50003C9.95833 2.40003 9.19167 2.45837 8.475 2.6667C8.71667 2.05003 9.31667 1.6167 10.0167 1.6167C10.7167 1.6167 11.3167 2.05003 11.5583 2.6667Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M12.5167 15.8833C12.5167 17.2583 11.3917 18.3833 10.0167 18.3833C9.33334 18.3833 8.7 18.1 8.25 17.65C7.8 17.2 7.51667 16.5666 7.51667 15.8833" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" />
                            </svg>

                          </span>
                          <span className="small">Alerts</span>
                        </a>
                      </li>
                      <li className="nav-item nav-pills">
                        <a className="nav-link p-3 d-flex align-items-center" href="#">
                          <span className="d-inline-block  ms-3 me-3">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                              <path d="M1.66666 10.7334V9.26669C1.66666 8.40003 2.375 7.68336 3.25 7.68336C4.75833 7.68336 5.375 6.6167 4.61666 5.30836C4.18333 4.55836 4.44166 3.58336 5.2 3.15003L6.64166 2.32503C7.3 1.93336 8.15 2.1667 8.54166 2.82503L8.63333 2.98336C9.38333 4.2917 10.6167 4.2917 11.375 2.98336L11.4667 2.82503C11.8583 2.1667 12.7083 1.93336 13.3667 2.32503L14.8083 3.15003C15.5667 3.58336 15.825 4.55836 15.3917 5.30836C14.6333 6.6167 15.25 7.68336 16.7583 7.68336C17.625 7.68336 18.3417 8.39169 18.3417 9.26669V10.7334C18.3417 11.6 17.6333 12.3167 16.7583 12.3167C15.25 12.3167 14.6333 13.3834 15.3917 14.6917C15.825 15.45 15.5667 16.4167 14.8083 16.85L13.3667 17.675C12.7083 18.0667 11.8583 17.8334 11.4667 17.175L11.375 17.0167C10.625 15.7084 9.39166 15.7084 8.63333 17.0167L8.54166 17.175C8.15 17.8334 7.3 18.0667 6.64166 17.675L5.2 16.85C4.44166 16.4167 4.18333 15.4417 4.61666 14.6917C5.375 13.3834 4.75833 12.3167 3.25 12.3167C2.375 12.3167 1.66666 11.6 1.66666 10.7334Z" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                          </span>
                          <span className="small">Settings</span>
                        </a>
                      </li>
                    </ul>


                  </div>
                </div>

                <div className=" px-4 user-container-mod mvp-left-panel-bottom">
                  <div className="mvp-nav-user-action">
                    <div>
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="/imgs/mvp-user.png"
                          alt="alt"
                          width="50px"
                        />
                      </a>
                    </div>
                    <div className="mvp-logged-user-info">
                      <h6>Jennifer Lewington</h6>
                      <p>Home Owner</p>
                    </div>
                    <div className="mvp-nav-user-action-bottom">
                      <a href="#">
                        <img
                          className="img-fluid"
                          src="/imgs/export.svg"
                          alt="alt"
                          width="25px"
                        />
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Main content area (shifted right on desktop) */}
            <div className="mx-auto ms-lg-80"></div>
          </section>
        </div>
        <div className="col-12 col-lg-9 right-body-mod">

          <div className="row right-body-inner right-body-inner-mobile-pad">
            <div className="col-12 col-lg-12 right-body-inner-sec1">
              <h5><span><img className="img-fluid" src="/imgs/dashboard.svg" alt="alt" width="20px" /></span>&nbsp;&nbsp;<a className="mvp-no-text-deco" href=""><span className="mvp-breadcrump-root">Home</span></a>&nbsp;&gt;&nbsp;<a className="mvp-no-text-deco" href="/valuation"><span className="mvp-breadcrump-root">Valuation</span></a>&nbsp;&gt;&nbsp;<span className="mvp-breadcrump-in">Compare</span></h5>
              <h3 className="mvp-category-select-text ">
                Valuation of your property
              </h3>
            </div>
          </div>


          <div className="row right-body-inner remove-padding-topbottom right-body-inner-mobile-pad">

            <div className="col-12 col-lg-4 ">
              <div className="container" >

                <div className="input-group mvp-input-group-drop">

                  <span className="input-group-text mvp-input-support-mod">
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6.5 18.3334V10.0001H11.5V18.3334M1.5 7.50008L9 1.66675L16.5 7.50008V16.6667C16.5 17.1088 16.3244 17.5327 16.0118 17.8453C15.6993 18.1578 15.2754 18.3334 14.8333 18.3334H3.16667C2.72464 18.3334 2.30072 18.1578 1.98816 17.8453C1.67559 17.5327 1.5 17.1088 1.5 16.6667V7.50008Z" stroke="#667085" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                  </span>

                  <select
                    className="form-select mvp-select-mod-drop"
                  >
                    <option value="All">Your Property 1 </option>
                    <option value="Users">Your Property 2 </option>
                    <option value="Orders">Your Property 3 </option>
                    <option value="Products">Your Property 4 </option>
                  </select>

                </div>

              </div>


            </div>
            <div className="col-12 col-lg-8">
              <div className="container div-align-right">
                <a href="/valuation-details" className="btn mvp-btn-launch-task d-flex align-items-center gap-2 btn-svg-btn">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 6L13.5 15.5L8.5 10.5L1 18M23 6H17M23 6V12" stroke="#4F4F4F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>

                  Show Value Gain
                </a>
              </div>

            </div>




          </div>





          <div className="right-body-inner right-body-inner-mobile-pad">


            <div className="section-inner-valuation">
              <div className="row ">
                <div className="col-12 col-lg-9 div-align-left-t">

                  <p className="sec1-top-title">Your Property 1</p>
                  <h4 className="sec1-top-main">427 38 Ave NE, Calgary, Alberta</h4>
                  <div className="div-align-left">
                    <div>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_296_1773)">
                          <path d="M9.99999 6.66663V13.3333M6.66666 9.99996H13.3333M18.3333 9.99996C18.3333 14.6023 14.6024 18.3333 9.99999 18.3333C5.39762 18.3333 1.66666 14.6023 1.66666 9.99996C1.66666 5.39759 5.39762 1.66663 9.99999 1.66663C14.6024 1.66663 18.3333 5.39759 18.3333 9.99996Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_296_1773">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <label className="sec1-top-label">2 bedrooms</label>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_296_1773)">
                          <path d="M9.99999 6.66663V13.3333M6.66666 9.99996H13.3333M18.3333 9.99996C18.3333 14.6023 14.6024 18.3333 9.99999 18.3333C5.39762 18.3333 1.66666 14.6023 1.66666 9.99996C1.66666 5.39759 5.39762 1.66663 9.99999 1.66663C14.6024 1.66663 18.3333 5.39759 18.3333 9.99996Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                          <clipPath id="clip0_296_1773">
                            <rect width="20" height="20" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <label className="sec1-top-label">1 bathroom</label>
                      <label className="sec1-top-value">567,000$</label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-3">
                  <div className="container mt-4 div-align-right">
                    <button className="btn mvp-btn-refinance d-flex align-items-center gap-2">
                      <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.1667 2.33331V7.33332M19.1667 7.33332H14.1667M19.1667 7.33332L15.3 3.69998C14.4044 2.80391 13.2964 2.14932 12.0794 1.79729C10.8623 1.44527 9.57596 1.40727 8.34028 1.68686C7.10459 1.96645 5.95987 2.55451 5.01293 3.39616C4.06598 4.23782 3.34768 5.30564 2.92504 6.49998M0.833374 15.6666V10.6666M0.833374 10.6666H5.83337M0.833374 10.6666L4.70004 14.3C5.59566 15.1961 6.70368 15.8506 7.92071 16.2027C9.13774 16.5547 10.4241 16.5927 11.6598 16.3131C12.8955 16.0335 14.0402 15.4455 14.9872 14.6038C15.9341 13.7621 16.6524 12.6943 17.075 11.5" stroke="white" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      Refinance
                    </button>
                  </div>

                </div>


              </div>
            </div>
            <div className="row section-bottom-valuation">
              <div className="col-12 col-lg-12">



                <div className="container mt-4">



                  {/* Desktop Table View */}
                  <table className="table table-bordered table-hover clean-verticals clean-verticals-sizes d-none d-lg-table">
                    <thead>
                      <tr>
                        <th className="div-align-left-t valuation-table-th" colSpan="5">Similar Properties</th>
                        <th className="div-align-left-t valuation-table-th">Add to Compare</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="">
                          <div className="d-flex align-items-center gap-2">
                            <img alt="User 1" className="rounded-circle" width="40" height="40" src="/imgs/Avatar.png" />
                            <div className="div-align-left-t">
                              <div className="fw-bold">8 Helen St, Lion's Head</div>
                              <div className="text-muted small">Ontario</div>
                            </div>
                          </div>
                        </td>
                        <td className="tbl-def-text">2 bedrooms </td>
                        <td className="tbl-def-text">1 bathroom</td>
                        <td className="tbl-def-text">800 sq/ft</td>
                        <td><label className="value-table-badge">567,000$</label></td>
                        <td>
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="">
                          <div className="d-flex align-items-center gap-2">
                            <img alt="User 1" className="rounded-circle" width="40" height="40" src="/imgs/Avatar.png" />
                            <div className="div-align-left-t">
                              <div className="fw-bold">907 Railway Ave, Weyburn</div>
                              <div className="text-muted small">Saskatchewan</div>
                            </div>
                          </div>
                        </td>
                        <td className="tbl-def-text">3 bedrooms</td>
                        <td className="tbl-def-text">2 bathrooms</td>
                        <td className="tbl-def-text">675 sq/ft</td>
                        <td><label className="value-table-badge">456,400$</label></td>
                        <td>
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="">
                          <div className="d-flex align-items-center gap-2">
                            <img alt="User 1" className="rounded-circle" width="40" height="40" src="/imgs/Avatar.png" />
                            <div className="div-align-left-t">
                              <div className="fw-bold">836 McLeod Ave, Winnipeg</div>
                              <div className="text-muted small">Manitoba</div>
                            </div>
                          </div>
                        </td>
                        <td className="tbl-def-text">1 bedroom</td>
                        <td className="tbl-def-text">1 bathroom</td>
                        <td className="tbl-def-text">200 sq/ft</td>
                        <td><label className="value-table-badge">100,200$</label></td>
                        <td>
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="">
                          <div className="d-flex align-items-center gap-2">
                            <img alt="User 1" className="rounded-circle" width="40" height="40" src="/imgs/Avatar.png" />
                            <div className="div-align-left-t">
                              <div className="fw-bold">3129 Hayman Rd</div>
                              <div className="text-muted small">British Columbia</div>
                            </div>
                          </div>
                        </td>
                        <td className="tbl-def-text">4 bedrooms</td>
                        <td className="tbl-def-text">2 bathrooms</td>
                        <td className="tbl-def-text">1300 sq/ft</td>
                        <td><label className="value-table-badge">890,130$</label></td>
                        <td>
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="">
                          <div className="d-flex align-items-center gap-2">
                            <img alt="User 1" className="rounded-circle" width="40" height="40" src="/imgs/Avatar.png" />
                            <div className="div-align-left-t">
                              <div className="fw-bold">5152 Kingsway, Burnaby</div>
                              <div className="text-muted small">British Columbia</div>
                            </div>
                          </div>
                        </td>
                        <td className="tbl-def-text">3 bedrooms</td>
                        <td className="tbl-def-text">2 bathrooms</td>
                        <td className="tbl-def-text">987 sq/ft</td>
                        <td><label className="value-table-badge">987,233$</label></td>
                        <td>
                          <div className="form-check form-switch">
                            <input className="form-check-input" type="checkbox" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Mobile Card/List View */}
                  <div className="d-lg-none">
                
                    <div className="row g-3">
                      {/* Card 1 */}
                      <div className="col-12">
                        <div className="card p-3 mb-2">
                          <div className="d-flex align-items-center gap-2 mb-2" style={{display: 'flex', alignItems: 'center'}}>
                            <img alt="User 1" className="rounded-circle" width="40" height="40" src="/imgs/Avatar.png" />
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
                              <div className="fw-bold" style={{textAlign: 'left'}}>8 Helen St, Lion's Head</div>
                              <div className="text-muted small" style={{textAlign: 'left'}}>Ontario</div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Bedrooms</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>2 bedrooms</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Bathrooms</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>1 bathroom</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Area</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>800 sq/ft</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Value</div>
                            <div className="col-7" style={{textAlign: 'left'}}><label className="value-table-badge" style={{display: 'block', textAlign: 'left'}}>567,000$</label></div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-8 text-muted small d-flex align-items-start" style={{textAlign: 'left'}}>Add to Compare</div>
                            <div className="col-4 d-flex align-items-start" style={{textAlign: 'left'}}>
                              <input className="form-check-input" type="checkbox" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card 2 */}
                      <div className="col-12">
                        <div className="card p-3 mb-2">
                          <div className="d-flex align-items-center gap-2 mb-2" style={{display: 'flex', alignItems: 'center'}}>
                            <img alt="User 1" className="rounded-circle" width="40" height="40" src="/imgs/Avatar.png" />
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
                              <div className="fw-bold" style={{textAlign: 'left'}}>907 Railway Ave, Weyburn</div>
                              <div className="text-muted small" style={{textAlign: 'left'}}>Saskatchewan</div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Bedrooms</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>3 bedrooms</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Bathrooms</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>2 bathrooms</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Area</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>675 sq/ft</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Value</div>
                            <div className="col-7" style={{textAlign: 'left'}}><label className="value-table-badge" style={{display: 'block', textAlign: 'left'}}>456,400$</label></div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-8 text-muted small d-flex align-items-start" style={{textAlign: 'left'}}>Add to Compare</div>
                            <div className="col-4 d-flex align-items-start" style={{textAlign: 'left'}}>
                              <input className="form-check-input" type="checkbox" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card 3 */}
                      <div className="col-12">
                        <div className="card p-3 mb-2">
                          <div className="d-flex align-items-center gap-2 mb-2" style={{display: 'flex', alignItems: 'center'}}>
                            <img alt="User 1" className="rounded-circle" width="40" height="40" src="/imgs/Avatar.png" />
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
                              <div className="fw-bold" style={{textAlign: 'left'}}>836 McLeod Ave, Winnipeg</div>
                              <div className="text-muted small" style={{textAlign: 'left'}}>Manitoba</div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Bedrooms</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>1 bedroom</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Bathrooms</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>1 bathroom</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Area</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>200 sq/ft</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Value</div>
                            <div className="col-7" style={{textAlign: 'left'}}><label className="value-table-badge" style={{display: 'block', textAlign: 'left'}}>100,200$</label></div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-8 text-muted small d-flex align-items-start" style={{textAlign: 'left'}}>Add to Compare</div>
                            <div className="col-4 d-flex align-items-start" style={{textAlign: 'left'}}>
                              <input className="form-check-input" type="checkbox" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card 4 */}
                      <div className="col-12">
                        <div className="card p-3 mb-2">
                          <div className="d-flex align-items-center gap-2 mb-2" style={{display: 'flex', alignItems: 'center'}}>
                            <img alt="User 1" className="rounded-circle" width="40" height="40" src="/imgs/Avatar.png" />
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
                              <div className="fw-bold" style={{textAlign: 'left'}}>3129 Hayman Rd</div>
                              <div className="text-muted small" style={{textAlign: 'left'}}>British Columbia</div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Bedrooms</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>4 bedrooms</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Bathrooms</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>2 bathrooms</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Area</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>1300 sq/ft</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Value</div>
                            <div className="col-7" style={{textAlign: 'left'}}><label className="value-table-badge" style={{display: 'block', textAlign: 'left'}}>890,130$</label></div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-8 text-muted small d-flex align-items-start" style={{textAlign: 'left'}}>Add to Compare</div>
                            <div className="col-4 d-flex align-items-start" style={{textAlign: 'left'}}>
                              <input className="form-check-input" type="checkbox" />
                            </div>
                          </div>
                        </div>
                      </div>
                      {/* Card 5 */}
                      <div className="col-12">
                        <div className="card p-3 mb-2">
                          <div className="d-flex align-items-center gap-2 mb-2" style={{display: 'flex', alignItems: 'center'}}>
                            <img alt="User 1" className="rounded-circle" width="40" height="40" src="/imgs/Avatar.png" />
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', textAlign: 'left'}}>
                              <div className="fw-bold" style={{textAlign: 'left'}}>5152 Kingsway, Burnaby</div>
                              <div className="text-muted small" style={{textAlign: 'left'}}>British Columbia</div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Bedrooms</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>3 bedrooms</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Bathrooms</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>2 bathrooms</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Area</div>
                            <div className="col-7 tbl-def-text" style={{textAlign: 'left'}}>987 sq/ft</div>
                          </div>
                          <div className="row">
                            <div className="col-5 text-muted small" style={{textAlign: 'left'}}>Value</div>
                            <div className="col-7" style={{textAlign: 'left'}}><label className="value-table-badge" style={{display: 'block', textAlign: 'left'}}>987,233$</label></div>
                          </div>
                          <div className="row align-items-center">
                            <div className="col-8 text-muted small d-flex align-items-start" style={{textAlign: 'left'}}>Add to Compare</div>
                            <div className="col-4 d-flex align-items-start" style={{textAlign: 'left'}}>
                              <input className="form-check-input" type="checkbox" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>



                  <div className="pagination justify-content-center">

                    <div className="back-sec">
                      <button className="page-link valuation-pag-page-link-back" >
                        <FaArrowLeft />
                        &nbsp;
                        Previous


                      </button>
                    </div>

                    <div className="middle-sec">
                      <button className="page-link valuation-pag-page-link active" >
                        1
                      </button>


                    </div>

                    <div className="next-sec">
                      <button className="page-link valuation-pag-page-link-next">
                        Next
                        &nbsp;
                        <FaArrowRight />
                      </button>
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

export default Dashboard;
