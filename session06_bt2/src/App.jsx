import React, { useState } from "react";



export default function App() {
  const [users, setUsers]= useState(()=>{
    const users= JSON.parse(localStorage.getItem("users"))||[];
    return users;
  })
  const [showForm, setShowForm]= useState(false);
  const showFormAddStudent=()=>{
    console.log("gọi hàm thêm nhân viên");
    setShowForm(!showForm);
    
  }
  return (
    <>
      {/* Hello world */}
      <div className="w-[80%] m-auto mt-4 h-[100vh]">
        <main className="main">
          <header className="d-flex justify-content-between mb-3">
            <h3>Nhân viên</h3>
            <button onClick={showFormAddStudent} className="btn btn-primary">Thêm mới nhân viên</button>
          </header>
          <div className="d-flex align-items-center justify-content-end gap-2 mb-3">
            <input
              style={{ width: 350 }}
              type="text"
              className="form-control"
              placeholder="Tìm kiếm theo email"
            />
            <i className="fa-solid fa-arrows-rotate" title="Refresh" />
          </div>
          {/* Danh sách nhân viên */}
          <table className="table table-bordered table-hover table-striped">
            <thead>
              <tr>
                <th>STT</th>
                <th>Họ và tên</th>
                <th>Ngày sinh</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Trạng thái</th>
                <th colSpan={2}>Chức năng</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item) => (
                <tr key={item.id}>
                  <td>1</td>
                  <td>{item.name}</td>
                  <td>{item.birthday}</td>
                  <td>{item.email}</td>
                  <td>{item.status}</td>
                  <td>
                    <div
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <div className="status status-active" />
                      <span> Đang hoạt động</span>
                    </div>
                  </td>
                  <td>
                    <span className="button button-block">Chặn</span>
                  </td>
                  <td>
                    <span className="button button-edit">Sửa</span>
                  </td>
                  <td>
                    <span className="button button-delete">Xóa</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <footer className="d-flex justify-content-end align-items-center gap-3">
            <select className="form-select">
              <option selected="">Hiển thị 10 bản ghi trên trang</option>
              <option>Hiển thị 20 bản ghi trên trang</option>
              <option>Hiển thị 50 bản ghi trên trang</option>
              <option>Hiển thị 100 bản ghi trên trang</option>
            </select>
            <ul className="pagination">
              <li className="page-item">
                <a className="page-link" href="#">
                  Previous
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  1
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  2
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  3
                </a>
              </li>
              <li className="page-item">
                <a className="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </footer>
        </main>
      </div>
      {/* Form thêm mới nhân viên */}
      <div className="">
        {showForm?<form className="form">
          <div className="d-flex justify-content-between align-items-center">
            <h4>Thêm mới nhân viên</h4>
            <i className="fa-solid fa-xmark" />
          </div>
          <div>
            <label className="form-label" htmlFor="userName">
              Họ và tên
            </label>
            <input id="userName" type="email" className="form-control" />
            {/* <div class="form-text error">Họ và tên không được để trống.</div> */}
          </div>
          <div>
            <label className="form-label" htmlFor="dateOfBirth">
              Ngày sinh
            </label>
            <input id="dateOfBirth" type="date" className="form-control" />
          </div>
          {/* <div class="form-text error">
    Ngày sinh không được lớn hơn ngày hiện tại.
  </div> */}
          <div>
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input id="email" type="text" className="form-control" />
          </div>
          {/* <div class="form-text error">Email không được để trống.</div> */}
          <div>
            <label className="form-label" htmlFor="address">
              Địa chỉ
            </label>
            <textarea
              className="form-control"
              id="address"
              rows={3}
              defaultValue={""}
            />
          </div>
          <div>
            <button className="w-100 btn btn-primary">Thêm mới</button>
          </div>
        </form>:""}
      </div>
      {/* Modal xác nhận chặn tài khoản */}
      <div>
        <div className="modal-custom">
          <div className="modal-title">
            <h4>Cảnh báo</h4>
            <i className="fa-solid fa-xmark" />
          </div>
          <div className="modal-body-custom">
            <span>Bạn có chắc chắn muốn chặn tài khoản này?</span>
          </div>
          <div className="modal-footer-custom">
            <button className="btn btn-light">Hủy</button>
            <button className="btn btn-danger">Xác nhận</button>
          </div>
        </div>
      </div>
      {/* Modal xác nhận xóa tài khoản */}
      <div className="overlay" hidden="">
        <div className="modal-custom">
          <div className="modal-title">
            <h4>Cảnh báo</h4>
            <i className="fa-solid fa-xmark" />
          </div>
          <div className="modal-body-custom">
            <span>Bạn có chắc chắn muốn xóa tài khoản này?</span>
          </div>
          <div className="modal-footer-custom">
            <button className="btn btn-light">Hủy</button>
            <button className="btn btn-danger">Xác nhận</button>
          </div>
        </div>
      </div>
    </>
  );
}
