import React from "react";
import TaskList from "./TaskList";

export default function Baitap6() {
  const styleColor = {
    color: "violet",
    backgroundColor: "green",
  };
  return (
    <div>
      Bài tập 6 reactjs
      <section className="vh-100 gradient-custom">
        <div className="container py-5 h-100">
          <div
            className="row d-flex justify-content-center align-items-center
              h-100"
          >
            <div className="col col-xl-10">
              <div className="card">
                <div className="card-body p-5">
                  <h3 style={{ textAlign: "center", marginBottom: 40 }}>
                    Quản lý công việc
                  </h3>
                  <form
                    className="d-flex justify-content-center
                              align-items-center mb-4"
                  >
                    <div className="form-outline flex-fill">
                      <input type="text" id="form2" className="form-control" />
                      <label className="form-label" htmlFor="form2">
                        Thêm công việc
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-info
                                  ms-2"
                    >
                      Thêm
                    </button>
                  </form>
                  {/* Tabs navs */}
                  <ul
                    className="nav nav-tabs mb-4 pb-2"
                    id="ex1"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <a className="nav-link active">Tất cả công việc</a>
                    </li>
                  </ul>
                  {/* Tabs navs */}
                  {/* Tabs content */}
                    <TaskList></TaskList>
                  {/* Tabs content */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
