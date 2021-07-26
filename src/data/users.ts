const usersCred = [
  {
    username: "admin",
    role: "admin",
    password: "123456",
    access: ["all"],
  },
  {
    username: "companyAdmin",
    role: "companyAdmin",
    password: "123456",
    access: [
      "admindashboard",
      "pageone",
      "pagefour",
      "pagefive",
      "pagesix",
      "pageseven",
    ],
  },
  {
    username: "user",
    role: "user",
    password: "123456",
    access: [
      "pagefour",
      "pagefive",
      "pagesix",
      "pageseven",
      "pageeight",
      "pagenine",
      "pageten",
      "pageeleven",
      "pagetwelve",
    ],
  },
];
export default usersCred;
