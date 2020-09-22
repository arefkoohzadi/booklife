import React, { useEffect } from "react";
import Details from "../common/Details";
import Image from "../../assets/images/photo.jpg";
import SubDetails from "./SubDetails";
import UniItem from "./UniItem";
import { Helmet } from "react-helmet";
const Cv = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Helmet>
        <title>رزومه‌ی عارف کوهزادی</title>
      </Helmet>
      <div className="sm:flex mt-2">
        <div className="bg-primary w-full sm:w-3/12 flex-1 rounded-lg py-2 px-8">
          <img className="w-32 h-32 rounded-full mx-auto" src={Image} alt="" />
          <h1 className="font-IRANSansMedium text-2xl text-gray-700 text-center pt-2 mb-10">
            عارف کوهزادی
          </h1>
          <Details title="اطلاعات شخصی" />
          <SubDetails subject="تخصص" details="برنامه نویس" />
          <SubDetails
            subject="آدرس ایمیل"
            details={
              <a
                className="text-base text-indigo-500 hover:text-indigo-600"
                href="mailto:aref.koohzadi@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                aref.koohzadi@gmail.com
              </a>
            }
          />
          <SubDetails
            subject="شماره موبایل"
            details={<span className="font-IRANSansFaNum">09301522245</span>}
          />
          <SubDetails
            subject="سال تولد"
            details={<span className="font-IRANSansFaNum">1370</span>}
          />
          <SubDetails subject="جنسیت" details="مرد" />
          <SubDetails subject="وضعیت سربازی" details="پایان خدمت" />
          <SubDetails subject="وضعیت تأهل" details="مجرد" />
          <SubDetails subject="استان سکونت" details="مازندران" />
          <SubDetails subject="آدرس" details="ساری" />
        </div>
        <div className="bg-secondary w-full sm:w-9/12 h-full px-8 pt-2">
          <Details title="درباره‌ی من" />
          <div>
            <span className="block text-gray-700 my-2">
              کارشناس ارشد آنالیز عددی ریاضی کاربردی از دانشگاه سراسری مازندران.
            </span>
            <span className="block text-gray-700 my-2">
              برنامه نویس و طراح وب فرانت اند و موبایل.
            </span>
            <span className="block text-gray-700 my-2">
              برنامه نویس Reactjs.
            </span>
            <span className="block text-gray-700 my-2">
              برنامه نویس React Native.
            </span>
            <span className="block text-gray-700 my-2">مسلط به Redux.</span>
            <span className="block text-gray-700 my-2">مسلط به ES6.</span>
            <span className="block text-gray-700 my-2">
              مسلط به Tailwindcss, Bootstrap, React-bootsrtap, Material-UI.
            </span>
            <span className="block text-gray-700 my-2">
              مسلط به مفاهیم Rest API.
            </span>
            <span className="block text-gray-700 my-2">
              آشنایی کامل با Html5 و CSS3.
            </span>
            <span className="block text-gray-700 mt-2 mb-10">آشنا به Git</span>
          </div>
          <Details title="مهارت‌ها" />
          <ul className="list-disc list-inside">
            <li className="text-gray-700 my-2">React JS</li>
            <li className="text-gray-700 my-2">react native</li>
            <li className="text-gray-700 my-2">Redux</li>
            <li className="text-gray-700 my-2">TailwindCSS</li>
            <li className="text-gray-700 my-2">MaterialUI</li>
            <li className="text-gray-700 my-2">React-Bootstrap</li>
            <li className="text-gray-700 my-2">Bootstrap4</li>
            <li className="text-gray-700 my-2">Formik</li>
            <li className="text-gray-700 my-2">Axios</li>
            <li className="text-gray-700 my-2">HTML5</li>
            <li className="text-gray-700 my-2">Javascript</li>
            <li className="text-gray-700 my-2">CSS3</li>
            <li className="text-gray-700 my-2">Less</li>
            <li className="text-gray-700 my-2">SASS</li>
            <li className="text-gray-700 mt-2 mb-10">git</li>
          </ul>
          <Details title="سوابق تحصیلی" />
          <UniItem
            title="کارشناس ارشد آنالیز عددی ریاضی"
            uni="دانشگاه مازندران"
            timefrom="1393"
            timeto="1395"
          />
          <div className="mt-6 mb-10">
            <UniItem
              title="ریاضی کاربردی"
              uni="دانشگاه مازندران"
              timefrom="1388"
              timeto="1392"
            />
          </div>
          <Details title="زبان‌های مسلط" />
          <ul className="list-disc list-inside">
            <li className="text-gray-700 my-2">
              <span className="font-IRANSansMedium text-gray-700">
                انگلیسی{" "}
              </span>
              <span>(حرفه&zwnj;ای)</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Cv;
