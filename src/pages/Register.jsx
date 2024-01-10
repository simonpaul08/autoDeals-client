import axios from "axios";
import { useState } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import { useAuthContext } from "../context/AuthContext";

const Register = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { activateUser } = useAuthContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.post(`${import.meta.env.VITE_APP_API}auth/register`,
        {
          name,
          email,
          password
        }
      );
      if (res.data?.user) {
        toast.success(res.data?.message, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          onClose: () => { activateUser(res.data?.user) }
        });
      }
    } catch (e) {
      console.log(e);
      toast.error(e?.response?.data?.message, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="register">
        <div className="container auth-container">
          <div className="form-wrapper">
            <h3 className="form-wrapper-title">AutoDeals - Register</h3>
            <form className="auth-form" onSubmit={handleSubmit}>
              <div className="form-item">
                <input type="text" name="name" value={name} className="form-input" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} required />
              </div>
              <div className="form-item">
                <input type="email" name="email" value={email} className="form-input" placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)} required />
              </div>
              <div className="form-item">
                <input type="password" name="password" value={password} className="form-input" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)} required />
              </div>
              <button type="submit" className="form-btn">{isLoading ? <Loader /> : "Register"}</button>
            </form>
            <p className="form-wrapper-text">Already registered ? <Link to="/login" className="form-wrapper-link">Login Here</Link></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register