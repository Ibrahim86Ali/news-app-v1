import React from "react";

export function ListView() {
  const b64toBlob = (b64Data, contentType = "", sliceSize = 512) => {
    const byteCharacters = atob(b64Data);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);

      const byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  };

  const blob = b64toBlob(img, "image/png");
  const imageUrl = URL.createObjectURL(blob);

  return (
    <>
      <div className=" grid grid-col bg-white  border-b-0 m-1 space-x-2 screen">
        <h5 className=" text-xs z-0 bold  w-28 bg-red-600 text-white p-2 m-2  mb-0 ">
          {item.category.name}
        </h5>{" "}
        <h6 className=" text-xs z-0 bold  text-center w-9 bg-slate-200 text-red-800 p-2 m-2  mb-0 ">
          {item.watchCount}
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 122.88 65.06"
            className="w-5 "
            xmlSpace="preserve"
          >
            <g>
              <path d="M0.95,30.01c2.92-3.53,5.98-6.74,9.15-9.63C24.44,7.33,41.46,0.36,59.01,0.01c17.51-0.35,35.47,5.9,51.7,19.29 c3.88,3.2,7.63,6.77,11.24,10.74c1.16,1.28,1.22,3.17,0.23,4.51c-4.13,5.83-8.88,10.82-14.07,14.96 C95.12,59.88,79.34,64.98,63.35,65.06c-15.93,0.07-32.06-4.86-45.8-14.57c-6.14-4.34-11.81-9.63-16.78-15.85 C-0.34,33.24-0.23,31.27,0.95,30.01L0.95,30.01z M61.44,26.46c0.59,0,1.17,0.09,1.71,0.24c-0.46,0.5-0.73,1.17-0.73,1.9 c0,1.56,1.26,2.82,2.82,2.82c0.77,0,1.46-0.3,1.97-0.8c0.2,0.6,0.3,1.24,0.3,1.9c0,3.35-2.72,6.07-6.07,6.07 c-3.35,0-6.07-2.72-6.07-6.07C55.37,29.18,58.09,26.46,61.44,26.46L61.44,26.46z M61.44,10.82c5.99,0,11.42,2.43,15.35,6.36 c3.93,3.93,6.36,9.35,6.36,15.35c0,5.99-2.43,11.42-6.36,15.35c-3.93,3.93-9.35,6.36-15.35,6.36c-5.99,0-11.42-2.43-15.35-6.36 c-3.93-3.93-6.36-9.35-6.36-15.35c0-5.99,2.43-11.42,6.36-15.35C50.02,13.25,55.45,10.82,61.44,10.82L61.44,10.82z M71.89,22.08 c-2.67-2.67-6.37-4.33-10.45-4.33c-4.08,0-7.78,1.65-10.45,4.33c-2.67,2.67-4.33,6.37-4.33,10.45c0,4.08,1.65,7.78,4.33,10.45 c2.67,2.67,6.37,4.33,10.45,4.33c4.08,0,7.78-1.65,10.45-4.33c2.67-2.67,4.33-6.37,4.33-10.45C76.22,28.45,74.56,24.75,71.89,22.08 L71.89,22.08z M14.89,25.63c-2.32,2.11-4.56,4.39-6.7,6.82c4.07,4.72,8.6,8.8,13.45,12.23c12.54,8.85,27.21,13.35,41.69,13.29 c14.42-0.07,28.65-4.67,40.37-14.02c4-3.19,7.7-6.94,11.03-11.25c-2.79-2.91-5.63-5.54-8.51-7.92C91.33,12.51,75,6.79,59.15,7.1 C43.34,7.42,27.93,13.76,14.89,25.63L14.89,25.63z" />
            </g>
          </svg>
        </h6>
        <img
          width="500"
          height="200"
          alt="People"
          className="   cursor-pointer hover:translate-y-0.1  hover:border-4 hover:border-t-6 border-2 border-red-600 duration-500 w-88 object-cover h-28 sm:h-48 md:h-64"
        />
      </div>

      <div className="  bg-gray-300 z-1 p-4 md:p-6">
        <div className="text-sm flex items-center "></div>
        <p className=" text-red-600 leading-none z-1">
          {new Date(item.createdAt).toLocaleDateString(
            "ar-EG-u-nu-latn",
            DateOptions
          )}
        </p>
        <h5 className="mb-2  m-3 text-xl font-bold text-red-600 ">
          {item.title}
        </h5>
        <p className="mb-3 font-normal text-black ">
          {item.content.slice(0, 100) + "..."}
        </p>
        <Link
          to={`/ReadArticleByID/${item.id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          ..اقرأ المزيد
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      </div>
    </>
  );
}
