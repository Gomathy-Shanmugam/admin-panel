import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar,faComment,faClipboard,faDollar } from "@fortawesome/free-solid-svg-icons";


Card.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    style: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }),
};

function Card({ data }) {
  return (
    <div className="col-xl-3 col-md-6 mb-4">
      <div className={`card border-left-${data.style} shadow h-100 py-2`}>
        <div className="card-body">
          <div className="row no-gutters align-items-center">
            <div className="col mr-2">
              <div
                className={`text-xs font-weight-bold text-${data.style} text-uppercase mb-1`}
              >
                {data.title}
              </div>
              <div className="h5 mb-0 font-weight-bold text-gray-800">
                {data.type === "currency" && (
                  <>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      $40,000
                    </div>
                  </>
                )}
                {data.type === "currency1" && (
                  <>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      $215,000
                    </div>
                  </>
                )}
                {data.type === "progress" && (
                  <>
                    <div className="row no-gutters align-items-center">
                      <div className="col-auto">
                        <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">
                          50%
                        </div>
                      </div>
                      <div className="col">
                        <div className="progress progress-sm mr-2">
                          <div
                            className="progress-bar bg-info"
                            role="progressbar"
                            style={{ width: "30%" }}
                            aria-valuenow={data.type}
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
                {data.type === "number" && (
                  <>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">
                      18
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="col-auto">
              {/* <i className="fas fa-calendar fa-2x text-gray-300"></i> */}
              {
                data.icon === "calender" && (
                    <>
                    <FontAwesomeIcon className="fa-2x text-gray-300" icon={ faCalendar } />
                    </>
                )
              }
               {
                data.icon === "dollar-sign" && (
                    <>
                    <FontAwesomeIcon className="fa-2x text-gray-300" icon={ faDollar} />
                    </>
                )
              }
              {
                data.icon === "comment" && (
                    <>
                    <FontAwesomeIcon className="fa-2x text-gray-300" icon={ faComment } />
                    </>
                )
              }
               {
                data.icon === "clipboard" && (
                    <>
                    <FontAwesomeIcon className="fa-2x text-gray-300" icon={faClipboard} />
                    </>
                )
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
