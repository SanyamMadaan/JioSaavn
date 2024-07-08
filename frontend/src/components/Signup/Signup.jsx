import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./signup.css";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Signup = () => {
  const [userDetails, setUserDetails] = useState({
    email: "",
    day: "",
    username: "",
    year: "",
    month: "",
    password: "",
    gender: "",
  });
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.account);
  const registerUser = async (e) => {
    e.preventDefault();
    console.log(userDetails);
    const index = months.indexOf(userDetails.month);
    let DOB = `${index}-${userDetails.day}-${userDetails.year}`;
    const { email, password, gender, username } = userDetails;
    let d = JSON.stringify({
      email,
      password,
      gender,
      DOB,
      username,
    });
    console.log(d);
    const res = await fetch(`${process.env.BACKEND_URL}/api/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: d,
    });

    const data = await res.json();
    if (data.success) {
      setUserDetails({
        email: "",
        day: "",
        username: "",
        year: "",
        month: "",
        password: "",
        gender: "",
      });
      toast.success(data.message);
      navigate("/");
      localStorage.setItem("token", JSON.stringify(data.token));
    } else {
      toast.error(data.message);
    }
    console.log(data);
  };

  const onChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
    if (e.target.name === "gender") {
      if (e.target.id === "m") {
        setUserDetails({ ...userDetails, gender: "M" });
      }
      if (e.target.id === "f") {
        setUserDetails({ ...userDetails, gender: "F" });
      }
      if (e.target.id === "o") {
        setUserDetails({ ...userDetails, gender: "O" });
      }
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/");
    }
  }, []);
  return (
    <>
      <div className="py-8 bg-white">
        <div className="logo text-center">
          <Link to="/">
            <img
              src="data:image/jpeg;base64,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"
              className="mx-auto"
              width={140}
              alt=""
            />
          </Link>
        </div>
        <div className=" text-black">
          <div className="py-10 text-center w-1/2 mx-auto">
            <h1 className="text-3xl tracking-tighter my-4 font-semibold">
              Sign up for free to start listening.
            </h1>
            <span className="or__">or</span>
            <p className="my-4 font-bold">Sign up with your email address</p>
            <form
              onSubmit={registerUser}
              className="text-center mx-auto w-3/4 "
            >
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="email"
                  className="font-semibold mb-2 text-sm inline-block"
                >
                  What's your email?{" "}
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={userDetails.email}
                  onChange={onChange}
                  placeholder="Enter your email"
                  className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                />
              </div>
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="password"
                  className="font-semibold mb-2 text-sm inline-block"
                >
                  Create a password{" "}
                </label>
                <input
                  type="text"
                  id="password"
                  value={userDetails.password}
                  onChange={onChange}
                  name="password"
                  placeholder="Create a password"
                  className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                />
              </div>
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="username"
                  className="font-semibold mb-2 text-sm inline-block"
                >
                  What should we call you?{" "}
                </label>
                <input
                  type="text"
                  id="username"
                  value={userDetails.username}
                  onChange={onChange}
                  name="username"
                  placeholder="Your Good name"
                  className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                />
                <small>it will appear on your profile</small>
              </div>
              <div className="text-left"></div>
              <div className="w-4/5 mx-auto text-left py-4">
                <label
                  htmlFor="password"
                  className="font-semibold mb-2 text-sm inline-block"
                >
                  What's your date of birth?
                </label>
                <div className="flex gap-8">
                  <div className="w-1/4">
                    <label htmlFor="day" className="ml-2 inline-block">
                      Day
                    </label>
                    <input
                      type="text"
                      value={userDetails.day}
                      onChange={onChange}
                      id="day"
                      name="day"
                      placeholder="DD"
                      className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                    />
                  </div>
                  <div className="w-2/4">
                    <label htmlFor="month" className="ml-2 inline-block">
                      Month
                    </label>
                    <select
                      type="radio"
                      id="month"
                      value={userDetails.month}
                      onChange={onChange}
                      name="month"
                      placeholder="MM"
                      className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                    >
                      {months.map((m) => {
                        return (
                          <option key={m} value={m}>
                            {m}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="w-1/4">
                    <label htmlFor="year" className="ml-2 inline-block">
                      Year
                    </label>
                    <input
                      type="text"
                      id="year"
                      name="year"
                      value={userDetails.year}
                      onChange={onChange}
                      placeholder="YYYY"
                      className="block w-full rounded-[4px] border-0  text-black transition-all duration-200 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-[3px] focus:ring-inset focus:ring-white-600 outline-none p-3 hover:ring-black bg-[#fff]"
                    />
                  </div>
                </div>
                <div className="flex gap-8 mt-4">
                  <div className="">
                    <input
                      type="radio"
                      id="m"
                      name="gender"
                      placeholder="gender"
                      value={userDetails.gender}
                      checked={userDetails.gender === "M"}
                      onChange={onChange}
                      className=""
                    />
                    <label htmlFor="gender" className="ml-2 inline-block">
                      Male
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="radio"
                      id="f"
                      name="gender"
                      placeholder="gender"
                      checked={userDetails.gender === "F"}
                      className=""
                      value={userDetails.gender}
                      onChange={onChange}
                    />
                    <label htmlFor="f" className="ml-2 inline-block">
                      Female
                    </label>
                  </div>
                  <div className="">
                    <input
                      type="radio"
                      id="o"
                      name="gender"
                      placeholder="gender"
                      className=""
                      value={userDetails.gender}
                      checked={userDetails.gender === "O"}
                      onChange={onChange}
                    />
                    <label htmlFor="o" className="ml-2 inline-block">
                      Prefer not to say
                    </label>
                  </div>
                </div>
              </div>
              <div className="w-4/5 mx-auto text-left py-4">
                <div className="my-4 flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="green-checkbox relative w-[1.7rem]
                    h-[1.2rem]"
                    name=""
                    id=""
                  />
                  <p className="text-sm">
                    I would prefer not to receive marketing messages from
                    Saavn
                  </p>
                </div>
                <div className="my-4 flex items-center gap-4">
                  <input
                    type="checkbox"
                    className="green-checkbox relative w-[1.7rem] h-[1.2rem]"
                    name=""
                    id=""
                  />
                  <p className="text-sm">
                    Share my registration data with JioSaavn content providers
                    for marketing purposes.
                  </p>
                </div>
                <p className="my-4 text-xs">
                  By clicking on sign-up, you agree to{" "}
                  <Link to="/" className="text-green-400">
                  JioSaavn Terms and Condition
                  </Link>{" "}
                  of Use.
                </p>
                <p className="my-4 text-xs">
                  To learn more about how JioSaavn collects, uses, shares and
                  protects your personal data, please see
                  <Link to="/" className="text-green-400">
                  JioSaavn Privacy Policy.
                  </Link>{" "}
                </p>
              </div>

              <div className="w-full text-left py-4">
                <input
                  type="submit"
                  value="Sign up"
                  className="block cursor-pointer w-1/2 mx-auto outline-none bg-green-400 text-black p-3 hover:scale-105 translate-all duration-200 font-medium hover:font-semibold text-center rounded-full "
                />
              </div>
            </form>
            <div className="border-b border-gray-400 w-3/4 my-4 mx-auto"></div>
            <p className="pt-8">
              <span className="text-gray-300 font-semibold">
                Don't have an account?{" "}
              </span>

              <Link
                to="/login"
                className="text-green-400 hover:text-green-400/90 font-semibold underline mx-auto"
              >
                Log in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
