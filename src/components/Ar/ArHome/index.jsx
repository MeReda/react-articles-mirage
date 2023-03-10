import { useState, useEffect } from "react";

const ArHome = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    fetch("/api/articles")
      .then((res) => res.json())
      .then((d) => setMyData(d));
  }, []);

  return (
    <>
      <h1 className="text-center m-5">الصفحة الرئيسية</h1>
      <div className="container">
        <p className="text-center">هذا اختبار لتوضيح كيفية عمل المقالات و :</p>
        <ul className="pt-3">
          <li>الكشف عن البيانات اللازمة للمقالات</li>
          <li>تجربة React Router</li>
          <li>تجربة mirageJs.</li>
        </ul>
        <p>
          للحصول على الشفرة المصدرية{" "}
          <a
            href="https://github.com/MeReda/react-articles-mirage/tree/master"
            target="_blank"
          >
            أنقر هنا
          </a>
        </p>
        <h2 className="mt-5 pt-5">البيانات في MirageJs هي:</h2>
        <span className="text-secondary">
          (يجب تقديم الصور في شكل "/المسار/صورة1.png" أو أي امتداد آخر مثل
          "jpg/jpeg/webp...")
        </span>
        <pre className="ltr">{JSON.stringify(myData, null, 2)}</pre>
      </div>
    </>
  );
};

export default ArHome;
