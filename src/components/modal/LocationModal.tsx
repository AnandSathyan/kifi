import React, { useEffect, useState } from "react";
import { FaWindowClose } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import "./LocationModal.css";
import $ from "jquery";
import { ApiLocation } from "../../api/kifi";
;
import { useDispatch } from "react-redux";
import { useAppSelector } from "../../app/hooks";

function LocationModal() {
  const kifiStore = useAppSelector((state) => state.kifi);
  // console.log(
  //   "LocationModal redux response",
  //   kifiStore.data.data.map((location: any) => {
  //     return location.location_name;
  //   })
  // );
  const dispatch = useDispatch();
  const [modal, setModal] = useState(true);
  const [dropdown, setDropdown] = useState(false);
  const [dropValue, setDropValue] = useState("");
  //   $(".dropdown-menu").on("click", "a", function () {
  //     var text = $(this).html();
  //     var htmlText =
  //       text +
  //       ' <span className="caret border-2 m-4 p-2 px-12 flex "><svg className="fill-current h-4  items-end right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}  </svg> </span>';
  //     $(this).closest(".dropdown").find(".dropdown-toggle").html(htmlText);
  //   });
  // console.log("dropValuedropValue", dropValue);
  const ModalClose = () => {
    setModal(false);
  };
  useEffect(() => {
    // @ts-ignore
    dispatch(fetchKifiLogin());
  }, []);
  const HandleDropdown = (e: any) => {
    e.preventDefault();
    setDropdown(!dropdown);
  };
  return (
    <div>
      {modal ? (
        <div className="modal" data-modal>
          <div className="modal-close-overlay" data-modal-overlay></div>

          <div
            className="modal-content min-w-[400px]"
            // onClick={(e) => setDropdown(false)}
          >
            <button
              onClick={ModalClose}
              className="modal-close-btn"
              data-modal-close
            >
              {/* <ion-icon name="close-outline"></ion-icon> */}
              <IoClose />
            </button>

            <div className="newsletter-img">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/366/964/original/tuna-banner-vector.jpg"
                alt="subscribe newsletter"
                width="400"
                height="400"
              />
            </div>

            <div className="newsletter">
              <form action="#">
                <div className="newsletter-header">
                  <h3 className="newsletter-title">
                    <img src="http://kifi.zbeanztech.in/frondend/assets/imgs/theme/logo.png" />
                  </h3>

                  {/* <p className="newsletter-desc">
                    Subscribe the <b>Kifi</b> to get latest products and
                    discount update.
                  </p> */}
                  <p className="newsletter-desc"></p>
                </div>

                {/* <input
                  type=""
                  name="email"
                  className="email-field"
                  placeholder="Select Location"
                  required
                /> */}
                {/* <select name="cars" id="cars" className="mt-[-130px]">
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="mercedes">Mercedes</option>
                  <option value="audi">Audi</option>
                </select> */}

                {/* <div className="p-10">
                  <div className="dropdown inline-block relative">
                    <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center  overflow-y-hidden">
                      <span className="mr-1">Location</span>
                      <svg
                        className="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                      </svg>
                    </button>
                    <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 h-[200px] overflow-scroll">
                      <li className="">
                        <a
                          className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          One
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Two
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Three
                        </a>
                      </li>
                      <li className="">
                        <a
                          className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Four
                        </a>
                      </li>{" "}
                      <li className="">
                        <a
                          className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                          href="#"
                        >
                          Five
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}

                <div className="dropdown w-full">
                  <button
                    className="btn btn-default dropdown-toggle"
                    type="button"
                    id="menu1"
                    data-toggle="dropdown"
                    // style={{ width: "40%" }}
                  >
                    <>
                      <div
                        className="border-2 p-2  w-full justify-between  flex "
                        onClick={(e) => HandleDropdown(e)}
                      >
                        {dropValue ? dropValue : "Location"}{" "}
                        <svg
                          className="fill-current h-4  items-end right-0"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                        </svg>
                      </div>
                      <span className="caret"></span>
                    </>
                  </button>
                  {dropdown
                    ? kifiStore?.data?.data?.map((location: any) => {
                        return (
                          <ul
                            className="dropdown-menu"
                            role="menu"
                            aria-labelledby="menu1"
                            key={location.id}
                          >
                            <li
                              onClick={() =>
                                setDropValue(location.location_name)
                              }
                            >
                              <a href="#">{location.location_name}</a>
                            </li>
                          </ul>
                        );
                      })
                    : null}
                </div>

                <button type="submit" className="btn-newsletter z-30">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default LocationModal;
