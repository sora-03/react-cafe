export const Footer = () => {
  return (
    <div className="sticky bottom-0 w-full p-2 text-center bg-green-900">
      <div className="flex justify-center">
        <a href="https://x.com/X?s=20" className="mr-4">
          <img
            src="../../public/images/Twitter.svg"
            alt="X"
            className="w-10 bg-green-700 rounded-full mx-auto hover:opacity-70"
          />
        </a>
        <a href="https://www.instagram.com/instagram/">
          <img
            src="../../public/images/instagram.svg"
            alt=""
            className="w-10 bg-green-700 rounded-full mx-auto hover:opacity-70"
          />
        </a>
      </div>
      <p className="text-xs text-slate-50 mt-2">
        ©2023 squirrel. All Rights Reserved.
      </p>
    </div>
  );
};
