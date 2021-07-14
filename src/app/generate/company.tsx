import React from "react";
import Faker from "faker/locale/en";

const generateCompany = (num: number) => {
  const array = [];
  for (let index = 0; index < num; index++) {
    array.push({
      companyName: Faker.company.companyName(),
      companySuffix: Faker.company.companySuffix(),
    });
  }
  return array;
};

function CompanyGenerator() {
  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const { num } = e.currentTarget;
          console.log(generateCompany(num.value));
        }}
      >
        <label htmlFor="number-of-companies">number of companies </label>
        <input type="number" name="num" id="number-of-companies" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export { generateCompany };
export default CompanyGenerator;
