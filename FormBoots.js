import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FormBoots() {
  const [form, setForm] = useState({ name: "", surname: "", password: "" });

  const onchangeInput = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  
  return (
    <div className="container-fluid ">
      <div className="row">
        <div className="col-md-12 mt-4">
          <h1 className="text-center">Giriş Sayfası</h1>
          <hr />
        </div>
      </div>
      <form className="mx-auto mt-4">
        <div className="row ">
          <div className="form-group col-md-6">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Name"
              name="name"
              value={form.name}
              onChange={onchangeInput}
              
            />
          </div>

          <div className="form-group col-md-6">
            <label htmlFor="surname">Surname</label>
            <input
              type="text"
              className="form-control"
              id="surname"
              placeholder="SurName"
              name="surname"
              value={form.surname}
              onChange={onchangeInput}
            />
          </div>

          <div className="form-group col-md-12">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type={"password"}
              className="form-control"
              placeholder="Password..."
              name="password"
              value={form.password}
              onChange={onchangeInput}
            />
          </div>

          <div className="col-md-12 mt-5 ">
            <div className="d-flex justify-content-center">
              <button className="btn btn-light">GÖSTER</button>
              
            </div>
            <div>
    <h1 className="text-center">Girilen Bilgiler</h1>
        <hr />
        <strong>
          <p>Name : {form.name}</p>
          <p>Surname : {form.surname}</p>
          <p>Password : {form.password}</p>
        </strong>
</div>
          </div>
        </div>
      </form>

      <table className="table table-hover">
        <thead className="col-md-12">
          <tr>
            <th scope="col">NAME</th>
            <th scope="col">SURNAME</th>
            <th scope="col">PASSWORD</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{form.name}</td>
            <td>{form.surname}</td>
            <td>{form.password}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FormBoots;
