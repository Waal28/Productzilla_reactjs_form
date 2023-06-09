import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

const FormMultiStep = () => {
  const [step, setStep] = useState(1);
  const { user, setUser } = useContext(UserContext);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  console.log(user);
  return (
    <div>
      <h1>Form Multi Step</h1>
      {step === 1 ? (
        <div>
          <h3>Step 1</h3>
          <ul>
            <li>
              <span>Nama :</span>
              <br />
              <input
                type="text"
                name="nama"
                placeholder="Masukkan Nama"
                value={user.nama}
                onChange={handleChange}
              />
            </li>
            <li>
              <span>Email :</span>
              <br />
              <input
                type="emai"
                name="email"
                placeholder="Masukkan Email"
                value={user.email}
                onChange={handleChange}
              />
            </li>
            <li>
              <span>No Hp :</span>
              <br />
              <input
                type="number"
                name="nohp"
                placeholder="Masukkan No Hp"
                value={user.nohp}
                onChange={handleChange}
              />
            </li>
            <li>
              <input
                type="radio"
                name="bootcamp"
                value="UI/UX"
                onChange={handleChange}
              />
              <span>UI/UX</span>
            </li>
            <li>
              <input
                type="radio"
                name="bootcamp"
                value="Backend Engineer"
                onChange={handleChange}
              />
              <span>Backend Engineer</span>
            </li>
            <li>
              <input
                type="radio"
                name="bootcamp"
                value="Frontend Engineer"
                onChange={handleChange}
              />
              <span>Frontend Engineer</span>
            </li>
            <li>
              <input
                type="radio"
                name="bootcamp"
                value="Digital Marketing"
                onChange={handleChange}
              />
              <span>Digital Marketing</span>
            </li>
          </ul>
          <button onClick={() => setStep(step + 1)}>Next Step</button>
        </div>
      ) : null}
      {step === 2 ? (
        <div>
          <h3>Step 2</h3>
          <ul>
            <li>
              <span>Tempat dan Tangal Lahir</span>
              <br />
              <input
                type="text"
                name="tmpatLahir"
                placeholder="Masukkan Tempat Lahir"
                value={user.tmpatLahir}
                onChange={handleChange}
              />
              <input
                type="date"
                name="tglLahir"
                value={user.tglLahir}
                onChange={handleChange}
              />
            </li>
            <li>
              <span>Alamat Lengkap</span>
              <br />
              <input
                type="text"
                name="alamat"
                placeholder="Masukkan Alamat Lengkap"
                value={user.alamat}
                onChange={handleChange}
              />
            </li>
          </ul>
          <button onClick={() => setStep(step + 1)}>Next Step</button>
        </div>
      ) : null}
      {step === 3 ? (
        <div>
          <h3>Step 3</h3>
          <ul>
            <li>
              <span>Password</span>
              <br />
              <input
                type="password"
                name="password"
                placeholder="Masukkan Password"
                value={user.password}
                onChange={handleChange}
              />
            </li>
            <li>
              <span>Confirm Password</span>
              <br />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={user.confirmPassword}
                onChange={handleChange}
              />
            </li>
          </ul>
          <button>
            <Link to="/result">Submit</Link>
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default FormMultiStep;
